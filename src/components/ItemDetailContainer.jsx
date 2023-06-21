import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//import productos from "./json/products.json";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    /*   useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = (productos.find(item => item.idx === parseInt(id)));
                resolve(producto);
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        });
    },[id]);*/
    
    useEffect(() => {
        const db = getFirestore();
        const getProducto = async () => {

            const queryRef = doc(db, "items", id);
            const response = await getDoc(queryRef);
            const newItem = { id: response.id, ...response.data(),};
            setItem(newItem);
        };
        getProducto();
    
    }, [id]);
    

    return (
        <>
            <ItemDetail producto={item}/>
        </>
    )
}

export default ItemDetailContainer;