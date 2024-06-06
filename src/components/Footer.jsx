import "../assets/css/style.css";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
        <div className="share">
            <Link to={'/'} className='fab fa-facebook-f'></Link>
            <Link to={'/'} className='fab fa-twitter'></Link>
            <Link to={'/'} className='fab fa-instagram'></Link>
            <Link to={'/'} className='fab fa-linkedin'></Link>
            <Link to={'/'} className='fab fa-pinterest'></Link>
        </div>
        <div className="links">
        <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/menu"}>Menu</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/review"}>Review</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </div>
        <div className="credit">
            Created by <span> Coding Amit</span> | all rights reserved
        </div>
    </section>
  )
}

export default Footer