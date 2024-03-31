import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import BreadCrums from '../breadcrums/BreadCrums';
import { ShopContext } from '../context/ShopContext';
import Discriptionbox from '../discriptionbox/Discriptionbox';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productID}=useParams();
  const product = all_product.find((e)=>e.id===Number(productID) );
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <Discriptionbox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
