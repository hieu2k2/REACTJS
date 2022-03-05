import { useEffect } from "react";
import Category from "../component/Category";
import "../sass/products.scss";
function Products(props) {
  useEffect(() => {
    window.scrollTo(0, 0); // cuộn đến vị trí  0 , 0
  }, []);
  return (
    <div>
      <div className="products">
        <div className="container">
          <div className="row products__container">
            <Category
              listProduct={props.listProduct}
              addProduct={props.addProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
