import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"



const Item = ({info}) => {
  
  return (
    <>
    <Link to={`/detalle/${info.id}`} className='articulo' >
    <img className='info__image' src={info.image} alt="Info de imagen" />
    </Link>
    <p>{info.name}</p>
    <p> {info.description} </p>
    <p> ${info.precio} </p>
    
    </>
  )
}

export default Item