/* eslint-disable no-unused-vars */
import React from 'react'
import "../assets/css/style.css";
import { review } from '../data/data';
import quoteImg from '../assets/images/quote-img.png'
const ReviewPage = () => {
  return (
    <section className="review">
      <h1 className="heading">
        Customer <span>Review</span>
      </h1>
      <div className="box-container">
        {
          review.map((item,index)=>(
            <div className="box" key={index}>
              <img src={quoteImg} alt="" className='quote'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img src={item.img} alt="Customer Img" />
              <h3>John Deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ReviewPage