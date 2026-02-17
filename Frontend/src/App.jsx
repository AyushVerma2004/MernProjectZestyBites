import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './Components/bar/navbar'
import Cart from './pages/cart/cart'
import Home from './pages/home/home'
import PlaceOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        

      </Routes>
      
    </div>
  )
}
export default App
