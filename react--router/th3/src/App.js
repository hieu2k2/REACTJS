import logo from "./logo.svg";
import "./App.css";
import Category from "./component/Category";
import Product from "./component/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <rout>
        <Route exact path="/" element={Category} />
        <Route path="/product" element={Product} />
      </rout>
    </BrowserRouter>
  );
}

export default App;
