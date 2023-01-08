import React, { Component } from 'react'
import camera1 from "../image/camera1.jpg"
import camera2 from "../image/camera2.jpg"
import camera3 from "../image/camera3.jpg"

import phone1 from "../image/phone1.jpg"
import phone2 from "../image/phone2.webp"
import phone3 from "../image/phone3.webp"


import power1 from "../image/power1.jpg"
import power2 from "../image/power2.jpg"
import power3 from "../image/power3.jpg"
 class Section5 extends Component {
    constructor(){
        super();
        this.state ={
            cameraImg1:camera1,
            cameraImg2:camera2,
            cameraImg1nxt:camera1,
            cameraImg3:camera3,
            
            phoneImg1:phone1,
            phoneImg2:phone2,
            phoneImg3:phone3,
            phoneImg1txt:phone1,
        
            powerImg1:power1,
            powerImg2:power2,
            powerImg3:power3,
            powerImg1txt:power1
        }
    }

    changePhoto1 =()=>{
        this.setState({
            cameraImg1:camera2,
           
            // cameraImg2:camera1
        })
    }

    changePhoto2=()=>{
        this.setState({
            cameraImg1:camera1,
        })
    }
    changePhoto3=()=>{
        this.setState({
            cameraImg1:camera3
        })
    }
    changePhone=()=>{
        this.setState({
            phoneImg1:phone2,
           
        })
    }
    changePhone1=()=>{
        this.setState({
            phoneImg1:phone1,
           
        })
    }
    changePhone2=()=>{
        this.setState({
            phoneImg1:phone3
           
        })
    }
    changePower=()=>{
        this.setState({
            powerImg1:power2,
           
        })
    }
    changePower1=()=>{
        this.setState({
            powerImg1:power1,
           
        })
    }
    changePower2=()=>{
        this.setState({
            powerImg1:power3
           
        })
    }
  render() {
    return (
     <>
         <h1 className='best'>Best Sellers</h1> 
         <br /> <br />
         <div className="container">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-4 ">
  <div className="boxBest">
  <img src={this.state.cameraImg1} class="img-thumbnail" alt="..." width="70%"></img>
  </div>
   <div className="d-flex">
    <div className="changeImg2">
    <img src={this.state.cameraImg2} class="img-thumbnail" alt="..." width="auto" onClick={this.changePhoto1}></img>
    </div>

    <div className="changeImg2">
    <img src={this.state.cameraImg1nxt} class="img-thumbnail" alt="..." width="auto" onClick={this.changePhoto2}></img>
    </div>

    <div className="changeImg2">
    <img src={this.state.cameraImg3} class="img-thumbnail" alt="..." width="auto" onClick={this.changePhoto3} ></img>
    </div>
   </div>

   <p className='txtP mt-2'>Earphone with Bluetooth</p>
   <p className='priceTxt'>$225.99</p>
   <a href="#react" className='add'>
   <i class="fa-solid fa-plus me-2"></i>
    ADD TO CART</a>
                </div>

                <div className="col-6 col-sm-6 col-md-4">

                <div className="boxBest">
  <img src={this.state.phoneImg1} class="img-thumbnail" alt="..." width="70%"></img>
  </div>
   <div className="d-flex">
    <div className="changeImg2">
    <img src={this.state.phoneImg2} class="img-thumbnail" alt="..." width="auto" onClick={this.changePhone}></img>
    </div>

    <div className="changeImg2">
    <img src={this.state.phoneImg1txt} class="img-thumbnail" alt="..." width="auto" onClick={this.changePhone1}></img>
    </div>

    <div className="changeImg2">
    <img src={this.state.phoneImg3} class="img-thumbnail" alt="..." width="auto" onClick={this.changePhone2} ></img>
    </div>
   </div>

   <p className='txtP mt-2'>Nerocool ENS2378 </p>
   <p className='priceTxt'>$349.99</p>
   <a href="#react" className='add'>
   <i class="fa-solid fa-plus me-2"></i>
    ADD TO CART</a>


                </div>

                <div className="col-6 col-sm-6 col-md-4 power">

                <div className="boxBest">
  <img src={this.state.powerImg1} class="img-thumbnail" alt="..." width="70%"></img>
  </div>
   <div className="d-flex">
    <div className="changeImg2">
    <img src={this.state.powerImg2} class="img-thumbnail" alt="..." width="auto" onClick={this.changePower}></img>
    </div>

    <div className="changeImg2">
    <img src={this.state.powerImg1txt} class="img-thumbnail" alt="..." width="auto" onClick={this.changePower1}></img>
    </div>

    <div className="changeImg2">
    <img src={this.state.powerImg3} class="img-thumbnail" alt="..." width="auto" onClick={this.changePower2} ></img>
    </div>
   </div>

   <p className='txtP mt-2'>Nerocool ENS2378 </p>
   <p className='priceTxt'>$349.99</p>
   <a href="#react" className='add'>
   <i class="fa-solid fa-plus me-2"></i>
    ADD TO CART</a>



                </div>

            </div>
         </div>
     
     </>
    )
  }
}

export default Section5