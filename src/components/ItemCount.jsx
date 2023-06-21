import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const ItemCount = ({stock, onAdd}) =>{

    const [items, setItems] = useState (1);
    const [productoStock, setProductoStock] = useState (stock)
    const [itemAgregado, setItemAgregado] = useState (false)

    const AumentarCantidad = () =>{
        if(items < productoStock) {
            setItems(items + 1);
        }
    }

    const DisminuirCantidad = () =>{
        if(items > 1) {
            setItems(items - 1);
        }
    }

    const OnAdd = () =>{
        if (items <= productoStock) {
            setProductoStock(productoStock - items);
            setItems(1);
            setItemAgregado(true);
            onAdd(items);
            console.log("Seleccionaste: " + items + " productos al carrito!\n Te quedan: " + productoStock +" productos")
        }
    }

    useEffect(() =>{
        setProductoStock(stock)
    },[stock]);


    return(
        <div className="container itm-c">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-dark" onClick={DisminuirCantidad}>-</button>
                        <button type="button" className="btn btn-dark">{items}</button>
                        <button type="button" className="btn btn-dark" onClick={AumentarCantidad}>+</button>
                    </div>
                </div>
            </div>
                <div className="row my-5">
                    {itemAgregado ? <Link  to={"/Cart"} className="btn btn-dark my-2"><b> FINALIZAR COMPRA</b></Link> : <button type="button" className="btn btn-dark my-2" onClick={OnAdd}><b>AGREGAR AL CARRITO</b></button>}
                </div>
        </div>
    )
}

export default ItemCount;