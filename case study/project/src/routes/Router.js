import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../component/Header";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Notfound from "../pages/Notfound";
import SignInSide from "../pages/SignInSide";
import Blog from "../pages/Blog";
function Router(props) {
  const navigate = useNavigate();
  const usernameLogin = localStorage.getItem('username');
  useEffect(() => {
    if(!usernameLogin){
      navigate("/Login", { replace: true });
    }else{
      navigate("/", { replace: true });
    }
    
  },[usernameLogin]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home addProduct={props.addProduct} listProduct={props.listProduct} />
        }
      />
      <Route
        path="/Products"
        element={
          <Products
            addProduct={props.addProduct}
            listProduct={props.listProduct}
          />
        }
      />
      <Route
        path="/Cart"
        element={
          <Cart handleRemove={props.handleRemove} product={props.product} />
        }
      />
      <Route path="*" element={<Notfound />} />
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/Login" element={<SignInSide />} />
    </Routes>
  );
}

export default Router;
