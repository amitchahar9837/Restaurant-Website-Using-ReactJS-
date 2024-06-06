import { Link } from "react-router-dom";
import "../assets/css/style.css";
import AboutImg from '../assets/images/about-img.jpeg'
const AboutPage = () => {
  return (
    <div>
      <section className="about">
        <h1 className="heading">
          <span>About </span>Us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="About Image" />
          </div>
          <div className="content">
            <h3>What Makes Our Food Special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
            <Link to={'/'} className="btn">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
