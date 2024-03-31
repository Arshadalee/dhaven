import React, { useContext, useRef, useState } from 'react';
import paw from './paw.png';
import './header.css';
import cart from './cart.png';
import { Link } from 'react-router-dom';
import Category from '../../category/Category';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../../Assets/dropdown_icon.png';




function Header() {

    const [menu,setMenu]=useState("Shop");
    const {getTotalCartItems}=useContext(ShopContext);

    const menuRef=useRef();
    const dropdown_toggle=(e)=>{

        menuRef.current.classList.toggle('nav-menu');
    e.target.classList.toggle('open');
   


    }

    

    return ( <>
    
        <div className="container">
           <div className='row-row-navbar'>
           <div className='col-sm-1 nav-logo'>
          <Link to='home'> <img className='logo' src={paw} alt="" /></Link>
           

           </div><span><div className='col-sm-5 brandName'>DHeaven<div className='taglineName'>
            Pet Cafe
           </div>
           </div>
           </span>
           <div className='col-sm-4 search'>
            <input type='search' className='searchbox' placeholder='Search Products'/>
            <button type='submit' className='searchbtn' >Search </button>
           </div>
           <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt=""/> 
           <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none',color:'white'}} to='/'>Shop</Link> {menu=="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Advice")}}><Link style={{textDecoration:'none',color:'white'}}  to='/Advice'>Expert Advice</Link> {menu=="Advice"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("category")}}><Link style={{textDecoration:'none',color:'white'}}  to='/category'>category</Link> {menu=="category"?<hr/>:<></>}</li>
           

           </ul>
           
           
    


           <div className="login-cart">
            <button> <Link style={{textDecoration:'none',color:'black'}} to='/login '>Login</Link></button>

            <Link to='/cart '>
            <img className='cart-logo' src={cart} alt=""/></Link>
            
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
           </div>
           </div>
           
        </div>
    


    </> );
}

export default Header;