import React from 'react'
import Section2 from './Section2'
import data from "../data/data1"

const Section2Data = () => {
  return (
    <>
      
    <div className="section2">
  <h2 className='h2 ms-5 mt-4'>
    Shop Categories 
    <hr />
   </h2>
   </div>
 <div className="container">
 <div className="row g-2 ">

{data.photo.map((fd,i)=>(
    <Section2 image={fd.img} 
    title={fd.title}
     key={i} 
     desc={fd.desc1} 
     desc2={fd.desc2}
     desc3={fd.desc3} 
     desc4={fd.desc4}
     />
    ))}

</div>
 </div>
  
    </>
  )
}

export default Section2Data