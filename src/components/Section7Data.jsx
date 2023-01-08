import React from 'react'
import Section7 from './Section7'
import data from '../data/Sec7Data'
const Section7Data = () => {
  return (
    <>
    <br /><br /><br />
   <div className="container ">
    <div className="row g-2">
    {data.dataChange.map((fd,i)=>(
       <Section7 img={fd.img}
        title={fd.title}
        price={fd.price} 
       key={i}
       item={fd}
       />
       

     ))}
    </div>
   </div>

    </>
  )
}

export default Section7Data