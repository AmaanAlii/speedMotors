// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { internalLinks } from "./internalLinks";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import FooterSection from "./components/footerSection";

function App() {
  return (
    <div className="App">
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
        <Navbar />
        <Routes>
          <Route path={internalLinks.home} element={<Home />} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
