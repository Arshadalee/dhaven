import React from 'react'
import "./newCollections.css";

import new_collections from '../products/newCollections/new_collections';
import Item from "../Items/Item.jsx";

const NewCollection = () => {
  return (
    <div className='new-collections'>
    <h1>new toys collections</h1>
    <hr/>
    <center><div className='collections'>
        {new_collections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name}
          image={item.image} new_price={item.new_price} old_price={item.old_price} />


        })}
    </div></center>


      
    </div>
  )
}

export default NewCollection
