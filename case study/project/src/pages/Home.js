import { useState } from "react";
import Collection from "../component/Collection";
import Contact from "../component/Contact";
import Featured from "../component/Featured";
import Slider from "../component/Slider";
function Home(props) {
  return (
    <div>
      <Slider />
      <Collection />
      <Featured addProduct={props.addProduct} listProduct={props.listProduct} />
      <Contact />
    </div>
  );
}
export default Home;
