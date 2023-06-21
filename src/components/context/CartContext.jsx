import { createContext, useState } from "react";



export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            let pos = cart.findIndex(producto => producto.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else{
            setCart([...cart, {...item,cantidad:quantity}])
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(producto => producto.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };


    const isInCart = (id) => {
        return cart.some(producto => producto.id === id)
    };

    const totalProductos = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear, totalProductos, sumaTotalProductos}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;