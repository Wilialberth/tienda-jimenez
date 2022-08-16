import React from 'react'
import "./App.css"
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './Context/CartContext';
import Checkout from "./Components/Checkout/checkout";




const App = () => {
  const greeting = "Bienvenidos a mi tienda."
 

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
           <Routes>
            <Route path='/' element ={<ItemListContainer greeting={greeting} />} />
            <Route path='/categoria/:categoriaId' element ={<ItemListContainer greeting={greeting} />} />
            <Route path='/cart' element ={<Cart/>} />
            <Route path='/detalle/:detalleId' element ={<ItemDetailContainer/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>     
        </CartProvider>     
      </BrowserRouter>
    </>
  )
}

export default App


