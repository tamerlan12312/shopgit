import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddCartPage = () => {
  const {
    isEmpty,items,
    cartTotal,
    emptyCart,
    removeItem,
    updateItemQuantity,
  } = useCart()
  const notify = () => toast.error('🦄 PRODUCT DELETED!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  if (isEmpty) return <img className='emptyImg' src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt=""  /> ;
  return (
   <>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Del</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item,i)=>(
      <tr key={i}>
      <th scope="row">1</th>
      <td ><img src={item.img} alt="" width="50px" /></td>
      <td >{item.title}</td>
      <td>{(item.price*item.quantity)}$</td>
      <td>
  <button className='btn btn-primary ' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
  <span className='mx-2'>{item.quantity}</span>
  <button className='btn btn-primary' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>

      </td>
      <td><button className='btn btn-danger'  onClick={() => notify(removeItem(item.id))}>DEL </button>

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
     
      </td>
        </tr>
    ))}

  </tbody>
</table>
    <div className="d-flex justify-content-end">
    <p className='me-5'>Cart Total:{cartTotal}</p>
      <button className='btn btn-outline-danger me-2' onClick={emptyCart}>CLEAR</button>
      <button className='btn btn-primary me-5' >BUY NOW</button>
    </div>

   
   </>
  )
}

export default AddCartPage