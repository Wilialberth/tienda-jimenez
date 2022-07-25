import React, {useState} from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({data}) => {

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) =>{
    setGoToCart (true)
    console.log(`Felicidades, compraste ${quantity} unidades!`);
}


  return (
    <div className='container' >
        <div className='detail' >
            <img className='detail__image' src= {data.image} alt="detalle de imagen" />
            <div className='content' >
                <h1> {data.name} </h1>
                {
                  goToCart
                  ? <Link to='/cart'>Finalizar compra</Link>
                  : <ItemCount initial = {1} stock= {5} onAdd = {onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail