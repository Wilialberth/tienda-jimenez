import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"


const Cart = () => {

  const {cart, totalPrice} = useCartContext();
    

  if (cart.length === 0) {
    return(
      <center>
        <p>No hay elementos en el carrito.</p>
        <Link to='/'>Hacer compras</Link>
      </center>
    )
  }


  return (
    <>
      {cart.map(product => <ItemCart key={product.id} product={product}  /> )} 
      <center>
      <p> Total: ${totalPrice()}</p>
      <Link to='/checkout' className="checkOut">Finalizar compra</Link>
      </center>  
    </>
  )
}

export default Cart