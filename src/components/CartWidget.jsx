import cart from "../images/cart.svg"
import {Link} from "react-router-dom"
import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const CartWindget = () => {
    const {totalProductos} = useContext (CartContext);

    return (
        (totalProductos() > 0 ) ?
        <Link to={"/Cart"} className="btn position-absolute end-0 mx-4">
            <img src={cart} alt={"carrito"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProductos()}</span>
        </Link> : ""
    )
}


export default CartWindget;