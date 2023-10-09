import {createContext, useContext, useState} from "react";
const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [cartItems, setCartItems]= useState([]);
    const addItemToCart = (item)=>{
        setCartItems([...cartItems,item]);
    };

    const removeItemFromCart = (index)=>{
        let temp = cartItems;
        temp.splice(index,1);
        setCartItems([...temp]);
    }

    return <CartContext.Provider value={{cartItems,setCartItems,addItemToCart,removeItemFromCart}}>
        {children}
    </CartContext.Provider>
};

const useCartContext = ()=>useContext(CartContext);

export default useCartContext;
