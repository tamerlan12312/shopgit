import React, { Component } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Return from '../pages/Return';
import Terms from '../pages/Terms';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AddCartPage from '../components/AddCartPage';
import { CartProvider } from 'react-use-cart';
export class AppRouter extends Component {
  render() {
    return (
        <>
       <CartProvider>

       <BrowserRouter>
        <Header/>
  <Navbar/>
  <Routes>
     <Route path='/about' element={<About/>}> </Route>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/returnpolicy' element={<Return/>}> </Route>
    <Route path='/terms' element={<Terms/>}> </Route>
    <Route path='/contact' element={<Contact/>}> </Route>
    <Route path='/register' element={<Register/>}> </Route>
    <Route path='/addcart' element={<AddCartPage/>}> </Route>
    
  </Routes>
  </BrowserRouter>

       </CartProvider>

  
      
      </>
    )
  }
}

export default AppRouter