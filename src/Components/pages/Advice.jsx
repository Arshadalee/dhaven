import React from 'react'
import data_product from "../products/adviceData";
import "./advice.css";

const Advice = () => {
  return (
    <div className='adviceBody'>
    <center><h3>Doctors Advice</h3>
    
    {data_product.map((item,i)=>{
      return<>
      <div className='adviceBox' key={i.id}>
      <div className='tagLine'>
      {item.name}
      </div>
      <div className='para'>
      {item.para}
      </div>
      <div className='auth'>
      {item.auth}
      </div>

      </div>

      </>

    })}
      
    </center>
    
    </div>
  )
}

export default Advice
