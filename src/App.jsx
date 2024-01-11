import "./App.css";
import Navbar from "./components/navbar/navbar";
import Shortener from "./components/shortener/Shortener";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Navbar />
        <Shortener />
      </div>
    </>
  );
}

export default App;
