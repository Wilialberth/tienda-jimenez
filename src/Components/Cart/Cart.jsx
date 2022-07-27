import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"

const Cart = () => {

  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return(
      <>
      <p>No hay elementos en el carrito.</p>
      <Link to='/'>Hacer compras</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}  /> )
      } 
      <p>
        Total: ${totalPrice()}
      </p>
    </>
  )
}

export default Cart