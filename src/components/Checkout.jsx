import React, { useContext, useState } from 'react'
import { CartContext } from "./context/CartContext"
import { addDoc, collection, getFirestore} from "firebase/firestore";

const Checkout = () => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
    const [ordenId, setOrdenId] = useState("");
	const {cart, sumaTotalProductos} = useContext(CartContext);


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
		console.log(orden)

		const db = getFirestore();
		const OrdenesCollection = collection(db, "ordenes");
		addDoc(OrdenesCollection, orden).then(resultado =>{
            setOrdenId(resultado)
		})
        .catch(resultado =>{
            console.log("Tu compra no pudo ser completada");
        })
    }

	return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input type="number" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    </form>
                <button type="submit" className="btn btn-primary" onClick={generarOrden}>Submit</button>
                </div>
                
                <div className="col">
                <table className="table">
                    <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.titulo} width={100} /></td>
                            <td className="align-middle">{item.titulo}</td>
                            <td className="align-middle">({item.cantidad})  ${item.precio}</td>
                            <td className="align-middle">${item.cantidad * item.precio}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2}></td>
                        <td className="align-middle">Total a pagar</td>
                        <td className="align-middle">${sumaTotalProductos()}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {ordenId ? <div className="alert alert-warning" role="alert">
                        <h1 className="fs-1 text">Gracias por tu Compra!</h1>
                        <p>Tu Orden de Compra es: {ordenId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;