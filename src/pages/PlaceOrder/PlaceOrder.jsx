import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";


const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="Email" placeholder="Your Email" />
        <input type="text" placeholder="Plot no." />
        <div className="multi-fields">
          <input type="text" placeholder="Area" />
          <input type="text" placeholder="Landmark" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip-code" />
        </div>
        <div>
          <input type="text" placeholder="phone" />
        </div>
        <div className="placeorder-right"></div>
      </div>
      <div className="placeorder-right">
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

          <button className="btnpay">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
