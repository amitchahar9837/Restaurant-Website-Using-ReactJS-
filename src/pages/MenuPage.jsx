/* eslint-disable no-unused-vars */
import React from 'react'
import { menu } from '../data/data'
import { Link } from 'react-router-dom'
import "../assets/css/style.css";

const MenuPage = () => {
  return (
    <>
      <section className="menu">
        <h1 className="heading">
          Our <span>Menu</span>
        </h1>
        <div className="box-container">
          {
            menu.map((item,index)=>(
              <div key={index} className='box'>
                <img src={item.img} alt=""/>
                <h3>Tasty and Healthy</h3>
                <div className="price">
                  $15.99 <span>20.99</span>
                </div>
                <Link to={'/'} className='btn'>Add to cart</Link>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default MenuPage