import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const articulos = [
  {id:'01', name:'Remera', description:"La remera que va contigo", precio: '2500', category: 'Remeras', image:"https://mlstaticquic-a.akamaihd.net/remeras-con-diseno-fender-D_NQ_NP_990678-MLU31242516611_062019-F.jpg", stock:5,},
  {id:'02', name:'Remera', description:"La remera que va contigo", precio: '2500', category: 'Remeras', image:"https://mlstaticquic-a.akamaihd.net/remeras-camisetas-personalizadas-sublimada-envio-gratis-D_NQ_NP_928983-MLU29032757134_122018-F.jpg", stock:15,},
  {id:'03', name:'Remera', description:"La remera que va contigo", precio: '2500', category: 'Remeras', image:"https://th.bing.com/th/id/OIP.-JjqphelJbVIXk6t1QY7SwHaJQ?pid=ImgDet&rs=1", stock:7,},
  {id:'04', name:'Remera', description:"La remera que va contigo", precio: '2500', category: 'Remeras', image:"https://mlstaticquic-a.akamaihd.net/remeras-para-dama-feminista-feminismo-algodon-D_NQ_NP_954020-MLU31244264295_062019-F.jpg", stock:10,},
  {id:'05', name:'Camisa', description:"La camisa que va contigo", precio: '2500', category: 'Camisas', image:"https://moltopromocionales.com/wp-content/uploads/2015/07/3-1.jpg", stock:4,},
  {id:'06', name:'Camisa', description:"La camisa que va contigo", precio: '2500', category: 'Camisas', image:"https://shaffecompany.com.ar/wp-content/uploads/2020/11/4-4.png", stock:4,},
  {id:'07', name:'Camisa', description:"La camisa que va contigo", precio: '2500', category: 'Camisas', image:"https://th.bing.com/th/id/R.71e5c9639c6c80aebdf274dcdff5bf64?rik=Xs2uQBP90e5SMw&pid=ImgRaw&r=0", stock:4,},
  {id:'08', name:'Camisa', description:"La camisa que va contigo", precio: '2500', category: 'Camisas', image:"https://juanpreciado.com/wp-content/uploads/camisa-dril-mangalarga-7.jpg", stock:4,},
];


export const ItemDetailContainer = () => {

    const [data, setData] = useState ({});
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId)
        getDoc(queryDoc)
          .then(res => setData({id: res.id, ...res.data()}))
          .catch((error) =>{
            console.log(error);
          })
          .finally(() =>{
            setLoading(false)
          });
             
    }, [detalleId]);



  return (
    <div>
            {loading ? (<h2>Cargando...</h2>) : (<ItemDetail data={data}/> )}
            
        </div>
    
  );
}

export default ItemDetailContainer