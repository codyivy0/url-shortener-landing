import "./App.css";
import Boost from "./components/boost/boost";
import Contact from "./components/contact/contact";

import Navbar from "./components/navbar/navbar";
import Shortener from "./components/shortener/Shortener";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Navbar />
        
        <Shortener />
      </div>
      <Boost />
      <Contact />
    </>
  );
}

export default App;
