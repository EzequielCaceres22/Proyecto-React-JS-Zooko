import ItemCount from "./ItemCount";
import Envios from "./Envios";
import { CartContext } from "./context/CartContext";
import { useContext, useEffect, useState } from "react";


const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState ({})

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(() => {
        setItem(producto);
    },[producto]);

    return (
        <div className="container">
            <div className="row product-sty">
                <div className="col-md-6 offset-md-1">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{producto.titulo}</h1>
                    <img src={producto.marca} alt={producto.titulo}/>
                    <h4 className="price-card my-3"><b>${producto.precio}</b></h4>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
                </div>
                <hr className="my-5"/>
                <Envios/>
            </div>
        </div>
    )
}

export default ItemDetail;