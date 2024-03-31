import React from 'react'
import "./newslatter.css";


const NewsLatter = () => {
  return (
    <div className='newsletter'>
   <h1> Get Exclusive offers on your email</h1>
   <p>Subscribe to our newslatter and stay updated</p>

   <div>
    <input type="email" placeholder='your email id'/>
    <button className='btn'>Subscribe</button>
   </div>
      
    </div>
  )
}

export default NewsLatter
