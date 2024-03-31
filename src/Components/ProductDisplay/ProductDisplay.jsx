import React, { useContext } from 'react';
import "./productD.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../context/ShopContext';



const ProductDisplay = (props) => {
    const {product} = props;
    const {addTocart}=useContext(ShopContext);
   
  return (
    <div className='container productdisplay'>
    <div className='row '>
        <div className='col-md-6 productdisplay-left'>
        <div className='productdisplay-img-list'>
        <img className="productdisplay-img-list" src={product.image} alt="img" />
          <img className="productdisplay-img-list" src={product.image} alt="img" />
          <img className="productdisplay-img-list" src={product.image} alt="img" />
          
            
        </div>
        
        <center><div className="productisplay-img">
            <img className='productisplay-main-img' src={product.image} alt=""/>
        </div></center>

        </div>
        <div className='col-md-6 productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-start'>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(122)</p>
        </div>
       

        
         <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>
          ₹{product.old_price}
          </div>
          <div className='productdisplay-right-price-new'>
          ₹{product.new_price}
          </div>
          <div className='"productdisplay-right-description'/>
          product discritption is here will update later once data will get
        </div>
        <div className="productdisplay-right-size">
        <h1>Select size</h1>
        <div className="productdisplay-right-sizes">
          <div>
            Small
          </div><div>large</div>
          <div>XL</div>
          <div>XXL</div>
        </div>


        </div>
        <button onClick={()=>{addTocart(product.id)}}>Add to Cart</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>food dog biscuit
        </p>
        <p className="productdisplay-right-category">
          <span>Category :</span>toy cat trainer
        </p>
</div>
        </div>
    </div>
      
    
  )
}

export default ProductDisplay
