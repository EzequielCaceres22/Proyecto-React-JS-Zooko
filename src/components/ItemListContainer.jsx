import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productos from "../components/json/products.json"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, where, query, addDoc} from "firebase/firestore"

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection,where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0){
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            }
            else {
                console.error("Error!! No se encontraron productos en la coleccion");
            }
            });
        },[id]);


        /* useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");

            productos.forEach(producto => {
                addDoc(itemsCollection, producto)
            })

            },[]);*/
    
    return (
        <div className="container my-5">
            <div className="row">
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;