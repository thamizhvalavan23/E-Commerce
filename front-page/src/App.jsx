import React from 'react'
import './index.css';
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'
import About from './pages/About/About'
import Collection from './pages/Collection/Collection'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Order from './pages/order/Order'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer';
import Search from './component/Search';
import Details from './pages/Details/Details';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/cart' element = {<Cart />}/>
        <Route path='/about' element = {<About />} />
        <Route path='/collection' element = {<Collection />}/>
        <Route path='/contact' element = {<Contact />} />
        <Route path='/login' element = {<Login />}/>
        <Route path='/order' element = {<Order />}/>
        <Route path='/placeorder' element = {<PlaceOrder />}/>
        <Route path='/product/:productId' element = {<Details />} />
      </Routes>
      <Footer />
    
      
    </div>
  )
}

export default App