import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"
import { addDoc, collection, doc, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore"

const Cart = () => {

  const {cart, totalPrice} = useCartContext();

  const order ={
    buyer:{
      name: 'Wilialberth Jimenez',
      email: '7jimenez.w@gmail.com',
      phone: '351-7710165',
      date: 'serverTimestamp()',
    },
    item: cart.map(product =>({id: product.id, name: product.name, precio: product.precio, quantity: product.quantity})),
    total: totalPrice(),
  }


  const handClick = () =>{
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order)
      .then(({ id })  => console.log(id));

     
  }

 

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
      <button onClick={handClick} >Generar orden de compra</button>
    </>
  )
}

export default Cart