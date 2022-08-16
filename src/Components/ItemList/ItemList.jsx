import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
  return (
    <center>
      {data.map(articulo => <Item key={articulo.id} info={articulo}   />)}
    </center>
    
    
  )
}

export default ItemList