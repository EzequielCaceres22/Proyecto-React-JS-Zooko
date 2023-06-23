import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from "./context/CartContext"
import { addDoc, collection, getFirestore} from "firebase/firestore";


const Checkout = () => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [mostrarBoton, setMostrarBoton] = useState(false);
	const {cart, sumaTotalProductos, clear} = useContext(CartContext);


	const generarOrden = () => {
		if (nombre.length === 0) {
			return false;
		}

		if (email.length === 0) {
			return false;
		}

		if (telefono.length === 0) {
			return false;
		}

		const datosComprador = {name:nombre, phone:telefono,email:email}
		const items = cart.map(item =>({id:item.id, title:item.titulo, price:item.precio}))
		const fecha = new Date();
		const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
		const total = sumaTotalProductos();
		const orden = {buyer:datosComprador, items:items, date:date, total:total}

		const db = getFirestore();
		const OrdenesCollection = collection(db, "ordenes");
        addDoc(OrdenesCollection, orden).then(docRef => {
            setOrdenId(docRef.id);
            setTimeout(() => {
                clear()
                setMostrarBoton(true);
        }, 2000);
        })
        .catch(resultado =>{
            console.log("Tu compra no pudo ser completada con exito!");
        })
    }

    

	return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <form>
                    <div className="mb-3">
                        <label className="form-label"><b>Nombre</b></label>
                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><b>E-mail</b></label>
                        <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><b>Telefono</b></label>
                        <input type="text" className="form-control outline-none" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    </form>
                <button type="submit" className="btn btn-dark" onClick={generarOrden}><b>COMPLETAR COMPRA</b></button>
                </div>
                
                <div className="col">
                <table className="table">
                    <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.titulo} width={100} /></td>
                            <td className="align-middle"><b>{item.titulo}</b></td>
                            <td className="align-middle"><b>({item.cantidad})  ${item.precio}</b></td>
                            <td className="align-middle"><b>${item.cantidad * item.precio}</b></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}></td>
                        <td className="align-middle"><b>Total a pagar</b></td>
                        <td className="align-middle"><b>${sumaTotalProductos()}</b></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {ordenId ? <div className="alert alert-success" role="alert">
                        <h2>Gracias por tu Compra!</h2>
                        <p>Tu Orden de Compra es la Nro: {ordenId}</p>
                    </div> : ""}
                    <div>
            {mostrarBoton && (
                <Link to={"/"} className="btn btn-dark"><b>VOLVER AL INICIO</b></Link>)}
            </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout;