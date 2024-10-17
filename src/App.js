// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { internalLinks } from "./internalLinks";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import FooterSection from "./components/footerSection";
import { useRef } from "react";
import GoToTop from "./components/goToTop";

function App() {
  const galleryRef = useRef(null);
  return (
    <div className="App relative">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Navbar galleryRef={galleryRef} />
        <Routes>
          <Route
            path={internalLinks.home}
            element={<Home galleryRef={galleryRef} />}
          />
        </Routes>
        <GoToTop />
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
