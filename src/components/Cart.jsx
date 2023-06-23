import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "../images/trash-fill.svg";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, totalProductos, sumaTotalProductos} = useContext(CartContext);

    if (totalProductos() === 0) {
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3 className="alert alert-danger" role="alert">No se encontraron productos en el Carrito!</h3>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className="row table-width">
            <div className="col">
                <table className="table">
                    <thead>
                    <tr>
                        <td colSpan={4}>&nbsp;</td>
                        <td className="text-end"><button className="btn btn-dark" onClick={() => {clear()}} title="Vaciar Carrito"> <b>VACIAR CARRITO</b></button></td>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.titulo} width={100} /></td>
                            <td className="align-middle"><b>{item.titulo}</b></td>
                            <td className="align-middle"><b>({item.cantidad})${item.precio}</b></td>
                            <td className="align-middle"><b>${item.cantidad * item.precio}</b></td>
                            <td className="text-end align-middle"><button className="btn btn-light" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={trash} alt="Eliminar Producto" width={24} /></button></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}></td>
                        <td className="align-middle"><b>Total a pagar</b></td>
                        <td className="align-middle"><b>${sumaTotalProductos()}</b></td>
                        <td className="text-end"><Link className="btn btn-dark my-2" to={"/Checkout"}><b>COMPLETAR COMPRA</b></Link></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default Cart;