import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import banner_products from "../assets/banner_products.jpg";
import banner_left from "../assets/banner_left.jpg";
import "../sass/category.scss";
import "../sass/base.scss";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
function Category(props) {
  const [text, setText] = useState("ALL PRODUCTS");
  const [products, setproducts] = useState("A");
  const collecElement = useRef([]);
  const handleWatches = () => {
    // setText
    setText("Men's clothing");
    setproducts("men's clothing");
  };
  const handleClo = () => {
    // setText
    setText("Jewelery");
    setproducts("jewelery");
  };
  const handleBack = () => {
    // setText
    setText("Electronics");
    setproducts("electronics");
  };
  const handleGlass = () => {
    // setText
    setText("women's clothing");
    setproducts("women's clothing");
  };
  const handleAll = () => {
    // setText
    setText("ALL PRODUCTS");
    setproducts("A");
  };
  console.log(products);
  return (
    <>
      <div className="category col c-3 m-12">
        <div className="category__collection">
          <h4>Sản Phẩm</h4>
          <ul className="category__collection-list" ref={collecElement}>
            <li className="category__collection-item">
              <Link
                className="category__collection-link"
                to=""
                onClick={handleWatches}
              >
                Đồ nam
              </Link>
            </li>
            <li className="category__collection-item">
              <Link
                className="category__collection-link"
                to=""
                onClick={handleClo}
              >
                Vòng - Nhẫn
              </Link>
            </li>
            <li className="category__collection-item">
              <Link
                className="category__collection-link"
                to=""
                onClick={handleBack}
              >
                Đồ điện tử
              </Link>
            </li>
            <li className="category__collection-item">
              <Link
                className="category__collection-link"
                to=""
                onClick={handleGlass}
              >
                Đồ nữ
              </Link>
            </li>
            <li className="category__collection-item">
              <Link
                className="category__collection-link"
                to=""
                onClick={handleAll}
              >
                Tất cả
              </Link>
            </li>
          </ul>
        </div>
        <div className="category__collection">
          <h4>Màu</h4>
          <ul className="category__collection-list">
            <li className="category__collection-item">
              <Link className="category__collection-link" to="/">
                Đỏ
              </Link>
            </li>
            <li className="category__collection-item">
              <Link className="category__collection-link" to="/">
                Trắng
              </Link>
            </li>
            <li className="category__collection-item">
              <Link className="category__collection-link" to="/">
                Xanh
              </Link>
            </li>
            <li className="category__collection-item">
              <Link className="category__collection-link" to="/">
                Đen
              </Link>
            </li>
            <li className="category__collection-item">
              <Link className="category__collection-link" to="/">
                Hồng
              </Link>
            </li>
          </ul>
        </div>
        <div className="category__tag">
          <h4>Thêm vào giỏ</h4>
          <div className="category__tags">
            <Link to="">Đen</Link>
            <Link to="">Xanh</Link>
            <Link to="">Xám</Link>
            <Link to="">Trắng</Link>
            <Link to="">Vàng</Link>
            <Link to="">Xanh nhạt </Link>
            <Link to="">Nâu</Link>
          </div>
        </div>
        <div className="category__tag">
          <h4>Size</h4>
          <div className="category__tags">
            <Link to="">S (1m50- 45kg)</Link>
            <Link to="">M (1m60 - 50kg)</Link>
            <Link to="">L (1m67 - 60kg)</Link>
            <Link to="">XL (1m72 - 67kg)</Link>
            <Link to="">2XL (1m75 - 71kg)</Link>
            <Link to="">3XL (1m80 - 75kg)</Link>
          </div>
        </div>
        <div className="category__banner">
          <Link to="">
            <img src={banner_left}></img>
          </Link>
        </div>
      </div>
      <div className="promain col c-9 m-12">
        <div className="promain__banner">
          <img src={banner_products}></img>
        </div>
        <div className="promain__sort">
          <h4>Sắp xếp</h4>
          <select>
            <option>Từ thấp đến cao</option>
            <option>Từ cao xuống thấp</option>
            <option>Mua nhiều nhất </option>
            <option>Mua nhiều nhất trong tháng</option>
          </select>
        </div>
        <div className="promain__title">{<h3>{text}</h3>}</div>
        <div className="row">
          {props.listProduct.map(function (l, index) {
            if (products === l.category) {
              return (
                <div key={index} className="product col c-4 n-12">
                  <div className="product__overlay"></div>
                  <Link className="product__img" to="/">
                    <img src={l.image}></img>
                  </Link>
                  <div className="product__control">
                    <div className="product__rate">
                      <div className="product__rate-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>Đánh giá</span>
                    </div>
                    <div className="product__add">
                      <button onClick={() => props.addProduct(l)}>
                        Thêm vào giỏ
                      </button>
                      <Link to="/">
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link to="/">
                        <i className="fa-solid fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product__detail">
                    <h5 className="product__name">{l.title}</h5>
                    <span className="product__price">${l.price}</span>
                  </div>
                </div>
              );
            } else if (products === "A") {
              return (
                <div key={index} className="product col c-4 n-12">
                  <div className="product__overlay"></div>
                  <Link className="product__img" to="/">
                    <img src={l.image}></img>
                  </Link>
                  <div className="product__control">
                    <div className="product__rate">
                      <div className="product__rate-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>Đánh giá</span>
                    </div>
                    <div className="product__add">
                      <button onClick={() => props.addProduct(l)}>
                        Thêm vào giỏ
                      </button>
                      <Link to="/">
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link to="/">
                        <i className="fa-solid fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="product__detail">
                    <h5 className="product__name">{l.title}</h5>
                    <span className="product__price">${l.price}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
export default Category;
