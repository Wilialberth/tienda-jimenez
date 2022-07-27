import React, {useState, useContext} from 'react'





const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [Cart, setCart] = useState([]);

  const addProduct = (item, newQuantity) =>{
    const newCart = Cart.filter (prod => prod.id !== item.id)
    newCart.push ({ ...item, quantity: newQuantity});
    setCart (newCart);
  }
  console.log('carrito: ', Cart);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>  Cart.find (product => product.id === id) ? true : false;   

  const removeProduct = (id) => setCart (Cart.filter(product => product.id !== id))

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct

    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider