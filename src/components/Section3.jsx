import React, { Component } from 'react'

 class Section3 extends Component {
  render() {
    return (
     <>
     <div className="section3 mt-5">
  <h3 className="h3Sec3 ">Featured Products</h3>

   <div className="container">
    <div className="row">
        <div className="col-6 col-sm-6 col-md-3 ">
            <div className="boxImgHover">
           <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/250x325/products/104/383/03__59712.1614153530.jpg?c=1" className="img-thumbnail" alt="..." />
            
           <div className="boxIcon">
           <i class="fa-solid fa-repeat"></i>
           </div>
           <div className="boxIcon2">
           <i class="fa-regular fa-heart"></i>
           </div>
           </div>
           <div className="boxImgHover2">
           <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/250x325/products/104/385/03-02__53873.1614153530.jpg?c=1" className="img-thumbnail" alt="..." />
           </div>
           <span className='spanTel text-secondary ms-3'>Camera C430W 4k Waterproof</span>
            <br />
            <span className="spanPrice ms-3">
                $423.99
            </span>
            <div className="outOf">
                <a href="#react" className='outA'>
                <i class="fa-solid fa-plus me-2"></i>
                    Out of stock</a></div>
                    <div className="boxIcon4"><i class="fa-regular fa-eye"></i></div>

        </div>

        <div className="col-6 col-sm-6 col-md-3 ">

        <div className="boxImgHover">
           <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/250x325/products/103/387/04-03__77446.1614153537.jpg?c=1" className="img-thumbnail" alt="..." />
            
           <div className="boxIcon">
           <i class="fa-solid fa-repeat"></i>
           </div>
           <div className="boxIcon2">
           <i class="fa-regular fa-heart"></i>
           </div>
           </div>
            <div className="soldOut">Sold Out</div>
           <span className='spanTel text-secondary ms-3'>Camera C430W 4k Waterproof</span>
            <br />
            <span className="spa1nPrice ms-3">
           <strong> $200.00</strong>
            </span>
            <div className="outOf ">
                <a href="#react" className='outA'>
                <i class="fa-solid fa-plus me-2"></i>
                    Out of stock</a></div>
                    <div className="boxIcon4"><i class="fa-regular fa-eye"></i></div>

        </div>

        <div className="col-6 col-sm-6 col-md-3 ">

        <div className="boxImgHover">
           <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/250x325/products/97/397/06-02__83517.1614153553.jpg?c=1" className="img-thumbnail" alt="..." />
            
           <div className="boxIcon">
           <i class="fa-solid fa-repeat"></i>
           </div>
           <div className="boxIcon2">
           <i class="fa-regular fa-heart"></i>
           </div>
           </div>
           <div className="boxImgHover2 hoverImg">
           <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/250x325/products/97/395/06-03__07024.1614153553.jpg?c=1" className="img-thumbnail " alt="..." />
           </div>
           
           <span className='spanTel text-secondary ms-3'>Gear Virtual Reality</span>
            <br />
            <span className="spanPrice ms-3">
                $119.99
            </span>
            <div className="outOf2">
                <a href="#react" className='outA2'>
                <i class="fa-solid fa-plus me-2"></i>
                    Out of stock</a></div>
                    <div className="boxIcon4"><i class="fa-regular fa-eye"></i></div>


        </div>


        <div className="col-6 col-sm-6 col-md-3 ">


        <div className="boxImgHover">
           <img src="https://cdn11.bigcommerce.com/s-uszeqex11r/images/stencil/250x325/products/93/403/09-02__35023.1614153563.jpg?c=1" className="img-thumbnail" alt="..." />
            
           <div className="boxIcon">
           <i class="fa-solid fa-repeat"></i>
           </div>
           <div className="boxIcon2">
           <i class="fa-regular fa-heart"></i>
           </div>
           </div>
            <div className="soldOut2">Sold Out</div>
           <span className='spanTel text-secondary ms-3'>Smartwatch LTE Wifi</span>
            <br />
            <span className="spa1nPrice ms-3">
           <strong> $519.95</strong>
            </span>
            <div className="outOf3 ">
                <a href="#react" className='outA3'>
                <i class="fa-solid fa-plus me-2"></i>
                    Out of stock</a></div>
                    <div className="boxIcon4"><i class="fa-regular fa-eye"></i></div>

        </div>
    </div>
   </div>
     </div>
     </>
    )
  }
}

export default Section3