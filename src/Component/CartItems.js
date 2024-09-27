import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, addToCart, removeToCart, getTotalCartAmount, } = useContext(ShopContext);
    
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} className='carticon-product-icon' alt={e.name} />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>
                                    {cartItems[e.id]}
                                </button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removeToCart(e.id) }} className='remove-icon' alt="Remove" />
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping fee</p>
                            <p> Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className='promocode'>
                    <p>If you have promo code enter here</p>
                    <input type='text' placeholder='Enter Code'/>
                    <button>submit</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
