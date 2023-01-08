import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from "react-use-cart";
const Header = () => {
  const { totalItems } = useCart();
  return (
   <>

   <header>
   <div className="d-flex">
    <div className="box my-5  ms-4">
  <Link to="/">
  <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/200x48/logo_1614156460__72483.original.png" className="img-fluid" alt="..." />
  </Link>
 </div>
    
    <div className="box my-5">
  <form >
    <input type="email" name="" id=""  placeholder='Search the store...'/>
    <button type="submit"> <i class="fa-solid fa-magnifying-glass me-1"></i> Search</button>
  </form>
  
  

    </div>
    <div className="box">
    <i class="fa-solid fa-phone-volume"></i>
    <p className='text-secondary ms-3'>Call us : <br />
     <strong>(00) 1234 567 891</strong>
    </p>
    </div>
    <div className="box">
    <i class="fa-regular fa-heart" title='Wishlist'></i>
    </div>
    <div className="box">
      
    <i class="fa-regular fa-user" title='User'>
    </i>
   
    </div>
    <div className="box">
    <Link to="/addcart" style={{"color":"#000"}}><i class="fa-solid fa-cart-shopping"></i></Link>
    <span className='text-secondary ms-3 cart'>Cart</span>
    <div className="boxCart"><span>{totalItems}</span></div>
    </div>
    
   </div>
   </header>
   
  
   </>
  )
}

export default Header