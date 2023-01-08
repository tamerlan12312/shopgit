import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Section7 = (props) => {
  const{addItem} = useCart()
  const notify = () => toast.success('🦄 ADD TO CART!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
   <>
     <br /> <br />  <br />
    
    <div className="col-6 col-sm-6 col-md-3">
    <div className="card card2" >
  <img src={props.img} className="card-img-top imgCard" alt="..."  />
  <div className="card-body">
    <p className="card-text pCard">{props.title}</p>
    <p className="card-text pPrice">{props.price}</p>
  </div>
</div>
   <button className='addButon' onClick={()=>{notify(addItem(props.item))}} > 
   <i class="fa-solid fa-plus me-2"></i>
   Add to cart</button>
 
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   {/* <div className="addCard mt-2">
   <i class="fa-solid fa-plus"></i>
   
   </div> */}
    </div>
   
   </>
  )
}

export default Section7