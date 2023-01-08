import React, { Component } from 'react'

export class Section1 extends Component {
  render() {
    return (
  <>
  
 <div className="container">
  <div className="row justify-content-end mt-2 g-2">
    <div className="col-12 col-sm-6 col-md-8   "> 
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  
    <div className="carousel-item active">
    
      <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/original/carousel/3/Untitled-2.jpg?c=1" className="d-block w-100" alt="..." />
      <h4 >BEST WIRELESS <br /> CHARGER</h4>
       <h3>2021-Limited <br /> Edition <br /> Collection</h3>
       <a href="#react" className='imgA'>SHOP NOW</a>
    </div>
    
    <div className="carousel-item">
      <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/original/carousel/7/slider.jpg?c=1" className="d-block w-100" alt="..." />
      <h4 className='text-secondary'>SAVE 35%-55% <br /> WEEKLY</h4>
       <h3 className='text-dark'>Clearance <br /> Sale - <br /> 20% Off !</h3>
       <a href="#react" className='imgA'>SHOP NOW</a>
    </div>
    
  </div>
  <button className="carousel-control-prev btnPrev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
    <i class="fa-solid fa-angles-left"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next btnNext" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
  <i class="fa-solid fa-angles-right"></i>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
    
    </div>
    <div className="col-12 col-sm-6 col-md-2   "> 
    <div className="boxImg1">
    <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/top-banner-01.jpg" className="d-block w-100" alt="..." />
       <h5>New Sale <br /> Smart Watch</h5>
       <a href="#react" className='aClas'>SHOP NOW</a>
    </div>
    <br /><br /><br /> 
    <div className="boxImg2">
  <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/top-bannre-02.jpg" className="d-block w-100" alt="..." />
  <h6>New Arrivals <br /> <span className='spnImg'>Greatest Camera</span></h6>
  <a href="#" className='aSave'>Save 20%</a>
  </div>
    </div>
  </div>
 </div>
 
  </>
    )
  }
}

export default Section1