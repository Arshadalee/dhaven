import React from 'react'
import Hero from '../Hero/Hero';
import NewCollection from '../NewCollections/NewCollection';
import NewsLatter from '../NewsLatter/NewsLatter';
import Offeres from '../Offers/Offeres';
import Popular from '../populer/Popular';

const Shop = () => {
  return (
    <div>
    <Hero/>
   <center>
   <Popular/>
    <Offeres/>
    <NewCollection/>
    <NewsLatter/>
   </center>


      
    </div>
  )
}

export default Shop;
