import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection,where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0){
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                setIsLoading(false);
            }
            else {
                console.error("Error!! No se encontraron productos en la coleccion");
            }
            });
        },[id]);
    
    return (
        <div className="container my-5">
            <div className="row">
            {isLoading ? <Loading/> : <ItemList items={items}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;