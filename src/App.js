import React from 'react';
import Header from './Components/comonComp/header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Components/pages/Shop';
import Advice from './Components/pages/Advice';
import Product from './Components/pages/Product';
import Cart from './Components/pages/Cart';
import LoginSingup from './Components/pages/LoginSingup';
import Footer from './Components/Footer/Footer';
import Food from './Components/category/Food';
import Toy from './Components/category/Toy';
import Category from './Components/category/Category';
import catfoodbaner from './Components/products/catfoodbaner.jpg';
import ShopCategory from './Components/pages/ShopCategory';
import toybanner from './Components/products/toybanner.jpg';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/home' element={<Shop/>}/>
      <Route path='/Advice' element={<Advice/>}/>
      <Route path='/Product' element={<Product/>}>
      <Route path=':productID' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSingup/>}/>
      <Route path="/food"  element={<ShopCategory banner={catfoodbaner} category="food"/>}/>
      <Route path='/toy'  element={<ShopCategory banner={toybanner} category="toy"/>}/>
      <Route path='/category' element={<Category/>}/>




    </Routes>


    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
