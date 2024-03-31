import React from 'react'
import "./offers.css";
import catRol from "../products/catRol.png";

const Offeres = () => {
  return (
    <div className='offers'>
    <div className='offers-left'>
    <h1>Exclusive</h1>
    <p>Offers for you</p>
    <button>Check now</button>
    </div>
    <div className='offers-right'>
    <img src={catRol} alt=''/>


    </div>

      
    </div>
  )
}

export default Offeres
