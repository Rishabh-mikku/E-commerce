import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cart_items, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=> {
        if(cart_items[e.id]>0) {
            return <>
            <div>
            <div className="cart-items-format cart-items-format-main">
                <img src={e.image} alt="Product Image" className='cart-icon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cart-items-quantity'>{cart_items[e.id]}</button>
                <p>${e.new_price*cart_items[e.id]}</p>
                <img className='cart-items-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="Remove Icon" />
            </div>
            <hr />
          </div> 
            </> 
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cart-items-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='cart-items-total-button'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
            <p>If u have a promo code, Enter it here</p>
            <div className="cart-items-promo-box">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
