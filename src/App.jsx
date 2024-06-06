
import './assets/css/style.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RoutesComponent from './routes/routes'


function App() {


  return (
    <>
      <Navbar/>
      <div>
        <RoutesComponent/>
      </div>
      <Footer/>
    </>
  )
}

export default App
