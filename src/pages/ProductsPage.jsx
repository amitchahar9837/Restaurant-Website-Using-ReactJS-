/* eslint-disable no-unused-vars */
import "../assets/css/style.css";
import React from 'react'
import { product } from "../data/data";
import { Link } from "react-router-dom";
const ProductsPage = () => {
  return (
    <section className='products'>
      <h1 className="heading">
        Our <span>Product</span>
      </h1>  
      <div className="box-container">
        {
          product.map((item,index)=>(
            <div className="box" key={index}>
              <div className="icons">
                <Link to={'/'} className="fas fa-shopping-cart"></Link>
                <Link to={'/'} className="fas fa-heart"></Link>
                <Link to={'/'} className="fas fa-eye"></Link>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>Fresh Coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
                <Link className="btn" to={'/'}>Add to Cart</Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProductsPage