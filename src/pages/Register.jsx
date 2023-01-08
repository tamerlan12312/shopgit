import React from 'react'
import data2 from '../data/SearchData'
import { useState } from 'react'
const Register = () => {
  const [search,setSearch] = useState()
  return (
    <>

    <div className="inputContainer">
      <input type="text" className='search' placeholder='Search'
      onChange={(e)=>{setSearch(e.target.value)}}
      />
       {
      data2.searchData
      .filter((val)=>{
        if(search ==""){
          return val ;
        }else if (val.title.toLocaleLowerCase().includes(search)){
                 return val;
        }
      })
      .map((val,i)=>(
      
        
        <div className="card" style={{width: '18rem'}} key={i}>
    <img src={val.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{val.title}</h5>
      <p className="card-text">{val.price}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      
     

      ))
    }
  </div>
    </>
  )
}

export default Register