import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Contract from "./conponents/Contract";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contract</Link>
          </li>
        </ul>
        <hr />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contract />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
