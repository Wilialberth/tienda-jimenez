import React from 'react'
import { useCartContext } from '../../Context/CartContext'


const CartWidget = () => {
  
  const {totalProducts} = useCartContext();


  return (
    <>
      <span className="material-symbols-outlined" >
          shopping_cart
          {totalProducts() || ''}
      </span>
      
    </>
  )
}

export default CartWidget