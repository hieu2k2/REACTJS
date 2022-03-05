import { Link } from "react-router-dom";

import "../sass/product.scss";
import "../sass/base.scss";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product6.jpeg";
import product6 from "../assets/product7.jpeg";
import product7 from "../assets/product8.jpeg";
import product8 from "../assets/product9.jpeg";
import product9 from "../assets/product10.jpeg";
import product10 from "../assets/product11.jpeg";
import product11 from "../assets/product12.jpeg";
import product12 from "../assets/product13.jpeg";
import productt1 from "../assets/productt1.jpg";
import productt3 from "../assets/productt3.jpg";
import productt5 from "../assets/productt5.jpg";
import productt6 from "../assets/productt6.jpg";
import productt7 from "../assets/productt7.jpg";
import productt8 from "../assets/productt8.jpg";
import productt9 from "../assets/productt9.jpg";
import { useState } from "react";

function Product(props) {
  const listProduct = [
    {
      id: 1,
      name: "product1",
      price: "$100.00",
      img: product1,
    },
    {
      id: 2,
      name: "product2",
      price: "$200.00",
      img: product2,
    },
    {
      id: 3,
      name: "product3",
      price: "$300.00",
      img: product3,
    },
    {
      id: 4,
      name: "product4",
      price: "$400.00",
      img: product4,
    },
    {
      id: 5,
      name: "product5",
      price: "$500.00",
      img: product5,
    },
    {
      id: 6,
      name: "product6",
      price: "$600.00",
      img: product6,
    },
    {
      id: 7,
      name: "product7",
      price: "$700.00",
      img: product7,
    },
    {
      id: 8,
      name: "product8",
      price: "$800.00",
      img: product8,
    },
    {
      id: 9,
      name: "product9",
      price: "$900.00",
      img: product9,
    },
    {
      id: 10,
      name: "product10",
      price: "$1000.00",
      img: product10,
    },
    {
      id: 11,
      name: "product11",
      price: "$1100.00",
      img: product11,
    },
    {
      id: 12,
      name: "product12",
      price: "$1200.00",
      img: product12,
    },
    {
      id: 13,
      name: "productt1",
      price: "$200.00",
      img: productt1,
    },
    {
      id: 14,
      name: "productt3",
      price: "$300.00",
      img: productt3,
    },
    {
      id: 15,
      name: "productt5",
      price: "$108.00",
      img: productt5,
    },
    {
      id: 16,
      name: "productt6",
      price: "$500.00",
      img: productt6,
    },
    {
      id: 17,
      name: "productt7",
      price: "$512.00",
      img: productt7,
    },
    {
      id: 18,
      name: "productt8",
      price: "$2000.00",
      img: productt8,
    },
    {
      id: 19,
      name: "productt9",
      price: "$1200.00",
      img: productt9,
    },
  ];
  return (
    <>
      {props.listProduct.map((l) => {
        if (props.extend === true) {
          if (l.id <= 8) {
            return [
              <div key={l.id} className="product col c-3 l-6 m-12">
                <Link className="product__img" to="/">
                  <img src={l.image}></img>
                  <div className="product__overlay"></div>
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
              </div>,
            ];
          }
        } else if (props.extend === false) {
          if (l.id <= 12) {
            return [
              <div key={l.id} className="product col c-3 l-6 m-12">
                <Link className="product__img" to="/">
                  <img src={l.image}></img>
                  <div className="product__overlay"></div>
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
                      Thêm vào
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
              </div>,
            ];
          }
        }
      })}
    </>
  );
}

export default Product;
