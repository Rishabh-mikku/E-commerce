import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';
import { useState } from 'react';


export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cart_items, setCartItems] = useState(getDefaultCart())
    
    // console.log(cart_items)
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cart_items)
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let total_amount = 0
        for (const item in cart_items) {
            if (cart_items[item] > 0) {
                let item_info = all_product.find((product)=>product.id===Number(item))
                total_amount += item_info.new_price * cart_items[item]
            }
        }
        return total_amount
    }

    const getTotalCartItems = () => {
        let total_items = 0
        for (const item in cart_items) {
            if (cart_items[item]>0) {
                total_items += cart_items[item]
            }
        }
        return total_items
    }
    
    const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cart_items, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;