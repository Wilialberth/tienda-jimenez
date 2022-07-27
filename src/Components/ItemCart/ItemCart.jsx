import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import "./ItemCart.css"

const ItemCart = ( {product} ) => {
   const {removeProduct} = useCartContext ();
  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.name} />
        <div className='info__item' >
            <p>Título: {product.name} </p>
            <p>Cantidad: {product.quantity}  </p>
            <p>Precio unitario: {product.precio}  </p>
            <p>Subtotal: {product.quantity * product.precio} </p>
            <button onClick={() => removeProduct(product.id) } >Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart