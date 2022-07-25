import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const articulos = [
  {id:'01', name:'Remera', description:"La tienda que va contigo", precio: '2500', category: 'remeras', image:'https://picsum.photos/200', stock:5,},
  {id:'02', name:'Remera', description:"La tienda que va contigo", precio: '2500', category: 'remeras', image:'https://picsum.photos/201', stock:15,},
  {id:'03', name:'Remera', description:"La tienda que va contigo", precio: '2500', category: 'remeras', image:'https://picsum.photos/202', stock:7,},
  {id:'04', name:'Remera', description:"La tienda que va contigo", precio: '2500', category: 'remeras', image:'https://picsum.photos/204', stock:10,},
  {id:'05', name:'Camisa', description:"La tienda que va contigo", precio: '2500', category: 'camisas', image:'https://picsum.photos/205', stock:4,},
  {id:'06', name:'Camisa', description:"La tienda que va contigo", precio: '2500', category: 'camisas', image:'https://picsum.photos/204', stock:4,},
  {id:'07', name:'Camisa', description:"La tienda que va contigo", precio: '2500', category: 'camisas', image:'https://picsum.photos/200', stock:4,},
  {id:'08', name:'Camisa', description:"La tienda que va contigo", precio: '2500', category: 'camisas', image:'https://picsum.photos/200', stock:4,},
];


const ItemDetailContainer = () => {

    const [data, setData] = useState ({});
    const { detalleId } = useParams();

    useEffect(() =>{
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(articulos)
            }, 2000);
        });
        getData.then(res =>setData(res.find(articulos => articulos.id === detalleId)))
    }, []);



  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer