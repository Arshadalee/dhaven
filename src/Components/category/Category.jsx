import React from 'react';
import { Link } from 'react-router-dom';
import "./category.css";


const Category = () => {
  return (
    <div className='container dropdown'>

    
        <button className='categorybtn'><Link to="/food">Food</Link> </button>
        <button className='categorybtn'> <Link className='linkbtn' to="/toy">Toy</Link></button>
    
    
      
    </div>
  )
}

export default Category
