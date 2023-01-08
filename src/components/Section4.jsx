import React, { Component } from 'react'

 class Section4 extends Component {
  render() {
    return (
        <>
            <div className="container mt-5">
              <div className="row g-2">
                <div className="col-12 col-sm-6 col-md-4 ">
               <div className="boxYellowBox">
               <img src=" https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/sub-banner-01.jpg" className="img-fluid" alt="..." />
                <h6 id='h6'>New Arrivals</h6>
                <h6 className='h6phone'>Smart Mobile <br />15% Off</h6>
              <a href="#react" id='shopA'>Shop Now</a>
               </div>

                </div>

                <div className="col-12 col-sm-6 col-md-4 ">
                <div className="boxYellowBox">
               <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/sub-banner-02.jpg" className="img-fluid" alt="..." />
                <h6 id='h62'>Big Deals</h6>
                <h6 className='h6phone2'>Get Save 35% <br />Less</h6>
              <a href="#react" id='shopA2'>Shop Now</a>
               </div>

                </div>

                <div className="col-12 col-sm-6 col-md-4 ">

                <div className="boxYellowBox">
               <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/product_images/uploaded_images/sub-banner-03.jpg" className="img-fluid" alt="..." />
                <h6 id='h63'>Collection-2020</h6>
                <h6 className='h6phone3'>Smart Watches</h6>
              <a href="#react" id='shopA3'>Shop Now</a>
               </div>
                </div>
              </div>
            </div>
        </>
    )
  }
}

export default Section4