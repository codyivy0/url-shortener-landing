import "./App.css";
import Boost from "./components/boost/boost";
import Cards from "./components/cards/cards";
import Contact from "./components/contact/contact";

import Navbar from "./components/navbar/navbar";
import Shortener from "./components/shortener/Shortener";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Navbar />
        <Shortener />
        <Cards />
      </div>
      <Boost />
      <Contact />
    </>
  );
}

export default App;
