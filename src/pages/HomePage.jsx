import { Link } from 'react-router-dom'
import '../assets/css/style.css'
const HomePage = () => {
  return (
    <div>
        <section className="home">
          <div className="content">
            <h3>Fresh <span>food in the </span> Morning</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ea corrupti maiores odio ipsa voluptatum?</p>
            <Link to={'/menu'} className='btn'>Get Yours Now</Link>
          </div>
        </section>
    </div>
  )
}

export default HomePage