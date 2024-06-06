import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { cart } from "../data/data";
import { useRef } from "react";

const Navbar = () => {
  const searchRef = useRef();
  const cartRef=useRef();
  const navbarRef=useRef();
  const searchHandler = () => {
      searchRef.current.classList.toggle("active");
      cartRef.current.classList.remove('active');
      navbarRef.current.classList.remove('active');
  };
  const cartHandler=()=>{
    cartRef.current.classList.toggle('active');
    navbarRef.current.classList.remove('active');
    searchRef.current.classList.remove('active');
}
const navbarHandler=()=>{
    navbarRef.current.classList.toggle('active');
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove('active');
  }
  return (
    <div>
      <header className="header">
        <Link to={"/"} className="logo">
          <img src={Logo} alt="" />
        </Link>
        <nav className="navbar" ref={navbarRef}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/menu"}>Menu</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/review"}>Review</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menuBtn" onClick={navbarHandler}></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="text" placeholder="Search..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="cartImg" />
              <div className="content">
                <h3>Cart Item {index+1}</h3>
                <div className="price">$15.99</div>
              </div>
            </div>
          ))}
          <Link className="btn" to={'/menu'}>Checkout Now</Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
