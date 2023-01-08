import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [icon,setIcon]=useState("fa-solid fa-bars-staggered")


  const iconChange =()=>{
    if(icon == "fa-solid fa-bars-staggered")
    {
  setIcon("fa-solid fa-xmark")
    }else 
    {
  setIcon("fa-solid fa-bars-staggered")
    }
    }
  return (
    <>
    <div className="section1">
        <div className="d-flex">
           <div className="boxNav1">
        <nav className="navbar navbar-dark  " aria-label="First navbar example">
  <div className="container-fluid">
    <a className="navbar-brand shop" href="#">SHOP BY CATEGORIES</a>
    <button className="navbar btnnv " onClick={iconChange} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon" /> */}<i class={icon}></i>
    </button>
    <div className="collapse navbar" id="navbarsExample01">
     <div className="boxNav2-1">
     <div className="boxNav2">
      
     <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
          <i class="fa-solid fa-arrow-right me-1 mb-2 text-secondary"></i>
            Shop All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fa-solid fa-arrow-right text-secondary mb-2 me-1"></i>
            Smart Watches</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fa-solid fa-arrow-right text-secondary mb-2 me-1"></i>
            Smart Android Tv</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fa-solid fa-arrow-right text-secondary mb-2 me-1"></i>
            Headphones & Earphones</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fa-solid fa-arrow-right text-secondary mb-2 me-1"></i>
            Computer & Laptops</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fa-solid fa-arrow-right text-secondary mb-2 me-1"></i>
            Computer & Accesories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i class="fa-solid fa-arrow-right text-secondary mb-2 me-1"></i>
            Car & Vehicle Electronics</a>
        </li>
        <br />
        <li className="nav-item ">
          <a className="nav-link" href="#">
            <strong>+</strong> More </a>
        </li>
      </ul>
     
     </div>
     </div>
    </div>
  </div>
</nav>

           </div>
           <div className="boxNav">
            <Link to="/about" className='about'>ABOUT US</Link>
           </div>
           <div className="boxNav">
           <Link to="/returnpolicy" className='return'>RETURN POLICY</Link>
           </div>
           <div className="boxNav">
            <Link to="/terms" className='terms'>Terms & Conditions</Link>
           </div>
           <div className="boxNav">
           <Link to="/contact" className='contact'>Contact us</Link>
           </div>
           <div className="boxNav">
           <Link to="/register" className='register'>Register</Link>
           </div>
        </div>
    </div>
    </>
  )
}

export default Navbar