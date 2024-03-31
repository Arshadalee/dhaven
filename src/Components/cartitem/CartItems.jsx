import "./cartitems.css";
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import plus from "../Assets/plus.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart ,additemTocart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="conatiner cartitems">
      <div className="cartItems-format-main">
       <p>Products</p>
       <p>Title</p>
       <p>Price</p>
       
       <p>Add Item</p>
       <p>Quantity</p>
       <p>Total</p>
        <p>Remove</p>
       
        
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
        <div className="cartitems-format cartItems-format-main">
          <img src={e.image} alt="" className="carticon-product-icon" />
          <p>{e.name}</p>
          <p>₹{e.new_price}</p>
         
          <img className="cartitems-remove-icon"
            src={plus}
            onClick={() => {
              additemTocart(e.id);
            }}
            alt=" "
          />
           <button className="cartitems-quantity">{cartItems[e.id]}</button>
          <p>Total ₹{e.new_price*cartItems[e.id]}</p>
          
          <img className="cartitems-remove-icon"
            src={remove_icon}
            onClick={() => {
              removeFromCart(e.id);
            }}
            alt=" "
          />
        </div>
      </div>
        }
        return null;
        
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
          <div className="cartitems-total-items">
            <p>Subtotal</p>
            <p>₹ {getTotalCartAmount()}</p>
          </div>
          </div>
          <hr/>
          <div className="cartitems-total-items">
          <p>Shipping Fee</p>
          <p>Free</p>
          </div>
          <hr/>
          <div className="cartitems-total-items">
            <h3>Total</h3>
            <h3>₹ {getTotalCartAmount()}</h3>
          </div>
          <button >Proceed To checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>Enter Promocode</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="Promocode"/>
            <button >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
