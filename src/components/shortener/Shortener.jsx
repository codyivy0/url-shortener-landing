import { useState, useEffect } from "react";
import styles from "./Shortener.module.css";

const Shortener = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [userRequests, setUserRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const API_KEY = `jdnuE92tyGrJmdw5XfEyssgFT8ujIisujYdS29LFCT4dEgMzvATTAUcZ8DYH`;

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setErrorMessage("");
  }

  useEffect(() => {
    const savedRequests = localStorage.getItem("userRequests");
    if (savedRequests) {
      setUserRequests(JSON.parse(savedRequests));
    }
  }, []);

  const handleShortenClick = async () => {
    try {
      const response = await fetch(
        `https://api.tinyurl.com/create?api_token=${API_KEY}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: inputValue,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();

        const newRequests = [
          ...userRequests,
          { url: result.data.url, tiny_url: result.data.tiny_url },
        ];

        setUserRequests(newRequests);

        // Save to local storage
        localStorage.setItem("userRequests", JSON.stringify(newRequests));

        setShortenedUrl(result.data.tiny_url);
        setInputValue("");
      } else {
        setErrorMessage("Please add a valid link");
      }
    } catch (error) {
      setErrorMessage("Error:", error.message);
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedRequests = userRequests.filter(
      (_, index) => index !== indexToDelete
    );
    setUserRequests(updatedRequests);
    // Update local storage
    localStorage.setItem("userRequests", JSON.stringify(updatedRequests));
  };

  const copyToClipboard = (index) => {
    // Reset all buttons to not copied
    setUserRequests((prevUserRequests) =>
      prevUserRequests.map((request) => ({ ...request, copied: false }))
    );

    // Set the active state for the clicked button
    setUserRequests((prevUserRequests) =>
      prevUserRequests.map((request, i) =>
        i === index ? { ...request, copied: true } : request
      )
    );

    const textarea = document.createElement("textarea");
    textarea.value = userRequests[index].tiny_url;

    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.urlInput} ${
            errorMessage ? styles.errorInput : ""
          }`}
          type="text"
          placeholder="Shorten a link here..."
          value={inputValue}
          onChange={handleInputChange}
        />

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button className={styles.shortenerBtn} onClick={handleShortenClick}>
          Shorten it!
        </button>
      </div>

      <div className={styles.previousLinkContainer}>
        {userRequests &&
          userRequests.map((request, index) => {
            return (
              <div key={index} className={styles.previousLink}>
                <p className={styles.URL}>{request.url}</p>
                <p className={styles.tinyUrl}>{request.tiny_url}</p>
                <button
                  className={`${styles.copyBtn}
                  ${request.copied ? styles.activeCopy : ""}`}
                  onClick={() => copyToClipboard(index)}
                >
                  {request.copied ? "Copied!" : "Copy"}
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(index)}
                >X</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shortener;
