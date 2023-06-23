import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const getProducto = async () => {

            const queryRef = doc(db, "items", id);
            const response = await getDoc(queryRef);
            const newItem = { id: response.id, ...response.data(),};
            setIsLoading(false);
            setItem(newItem);
        };
        getProducto();
    
    }, [id]);
    

    return (
        <>
            {isLoading ? <Loading /> : <ItemDetail producto={item}/>}
        </>
    )
}

export default ItemDetailContainer;