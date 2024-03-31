import React from 'react'
import "./breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";


const BreadCrums = (props) => {


    const {product}=props;

    const category = props.category;
    const name = props.name;

  return (
    <div className='container breadcrum'>
    HOME <img src={arrow_icon} alt=" "/>
    SHOP <img src={arrow_icon} alt=""/>
    {category}
    <img src={arrow_icon} alt=""/>
    {name}


      
    </div>
  )
}

export default BreadCrums
