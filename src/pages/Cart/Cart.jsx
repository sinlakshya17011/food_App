import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
 const {
 cartItem,
 food_list,
 removeFromCart,
 getTotalCartAmount,
 } = useContext(StoreContext);

 const navigate = useNavigate();

 // Check if cart has any items
 const hasCartItems = food_list.some((item) => cartItem[item._id] > 0);

 if (!hasCartItems) {
 return (
 <div className="cart empty-cart">
 <h2>No Data in Cart</h2>
 <p>Your cart is currently empty.</p>
 <button onClick={() => navigate("/")}>Continue Shopping</button>
 </div>
 );
 }

 return (
 <div className="cart">
 <div className="cart-items">
 <div className="cart-items-title">
 <li>Items</li>
 <li>Title</li>
 <li>Price</li>
 <li>Quantity</li>
 <li>Total</li>
 <li>Remove</li>
 </div>

 <br />
 <hr />

 {food_list.map((item) => {
 if (cartItem[item._id] > 0) {
 return (
 <div key={item._id}>
 <div className="cart-item-title cart-items-item">
 <img src={item.image} alt={item.name} />
 <p>{item.name}</p>
 <p>${item.price}</p>
 <p>{cartItem[item._id]}</p>
 <p>${item.price * cartItem[item._id]}</p>
 <p
 onClick={() => removeFromCart(item._id)}
 className="cross"
 >
 x
 </p>
 </div>
 <hr />
 </div>
 );
 }

 return null;
 })}
 </div>

 <div className="cart-bottom">
 <div className="cart-total">
 <h2>Cart Totals</h2>

 <div>
 <div className="cart-total-details">
 <p>Subtotal</p>
 <p>${getTotalCartAmount()}</p>
 </div>

 <div className="cart-total-details">
 <p>Delivery Fee</p>
 <p>${getTotalCartAmount()===0?0:10}</p>
 </div>

 <div className="cart-total-details">
 <b>Total</b>
 <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+10}</b>
 </div>
 </div>

 <button onClick={() => navigate("/order")}>
 PROCEED TO CHECKOUT
 </button>
 </div>

 <div className="cart-promocode">
 <p>If you have a promo code, enter it here.</p>

 <div className="cart-promocode-input">
 <input type="text" placeholder="Enter promo code" />
 <button>Submit</button>
 </div>
 </div>
 </div>
 </div>
 );
};

export default Cart;