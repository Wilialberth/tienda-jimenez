import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({info}) => {
  return (
    <>
    <Link to={`/detalle/${info.id}`} className='articulo' >
        <img className='info__image' src={info.image} alt="" />
        <p className='title' >{info.name}</p>
    </Link>
    
    </>
  )
}

export default Item