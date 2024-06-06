/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/css/style.css";
import { blog } from "../data/data";
import { Link } from "react-router-dom";
const BlogPage = () => {
  return (
    <section className="blogs">
      <h1 className="heading">
        Our <span>Blogs</span>
      </h1>
      <div className="box-container">
        {blog.map((item, index) => (
          <div className="box" key={index}>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <Link className="title" to={'/'}>
                Tasty and Refreshing Spices
              </Link>
              <span>By Admin / 15 Dec 2023</span>
              <p>
                Lorem Ipsum Dlor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.
              </p>
              <Link className="btn" to={'/'}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
