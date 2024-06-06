
import { Route, Routes } from 'react-router-dom'
import { HomePage,AboutPage, MenuPage, ProductsPage, ContactPage, BlogPage, ReviewPage } from '../pages'

const RoutesComponent = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/review' element={<ReviewPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path='*' element={<>Page Not Found</>}/>
    </Routes>
  )
}

export default RoutesComponent