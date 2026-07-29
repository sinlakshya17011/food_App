import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { setUser } = useContext(StoreContext)
  const [currState, SetCurrState] = useState("Login");
  const handleLogin = () => {
    if (currState === "Login") {
        setUser();
    }
  };
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button onClick={() => handleLogin()}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & Privacy Policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => SetCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have a account?{" "}
            <span onClick={() => SetCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
