import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import ProductItem from "./pages/ProductItem";

const App = () => {
  const date = new Date();

  function AddProducts(name,type,cost) {
    axios.post('http://localhost:5000/product',{name:`${name}` , type:`${type}` , cost:`${cost}`})
  }

  return (
    <>
      <div className="text-center bg-success text-white p-2">

        <p>CRUD APP</p>

      </div>

      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />}>


              <Route path="/home/addproduct" element={<AddProduct AddProducts={AddProducts}/>} />

              <Route path="/home/edit"       element={<EditProduct/>} />

              <Route path="/home/edit/:id"   element={<ProductItem/>} />


            </Route>
            
          </Routes>
        </BrowserRouter>
      </div>

      <div className="footer p-2 bg-dark text-white text-center">
        {date.getFullYear()} - CRUD APP
      </div>
    </>
  );
};

export default App;
