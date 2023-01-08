import React from 'react'

const Section2 = (props) => {
  return (
    <>
  
 
        <div className="col-6 col-sm-3 col-md-3 ">
<div className="card" >
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
      <h1 className="h1Card">{props.title}</h1>
      <h6 className='h6Card text-secondary'> <br /> 
      <i class="fa-solid fa-chevron-right me-1"></i>
      {props.desc}
      <br /> <br />
      <i class="fa-solid fa-chevron-right me-1"></i>
      {props.desc2}
      <br /> <br />
      <i class="fa-solid fa-chevron-right me-1"></i>
      {props.desc3}
      <br /> <br />
      <i class="fa-solid fa-chevron-right me-1"></i>
      {props.desc4}

      </h6>
    </p>
  </div>
</div>
 </div>
   
   

    
    
    
    </>
  )
}

export default Section2