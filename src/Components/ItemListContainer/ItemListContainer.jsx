import React, {useState, useEffect} from 'react'

import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"



export const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  

  const { categoriaId } = useParams ();

  useEffect (() =>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    
    if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
      getDocs (queryFilter)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    } else {
      getDocs (queryCollection)
      .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))

    }  
    setLoading(false);
  }, [categoriaId])

   
    
  return (
    <>
    
    <span> {greeting} </span>
    <div>
      {loading ? 
      (<h2>Cargando...</h2>) : (<ItemList data = {data} />) }
       
    </div>
    
    </>
  )
}

export default ItemListContainer