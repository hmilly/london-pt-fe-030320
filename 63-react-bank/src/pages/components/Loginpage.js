import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/login.css";
import Loginheader from "./Loginheader";


const LoginPage = (props) => {

    return (
        <>
            <Loginheader />
            <div className="login-box">
                <div className="login-head"><p>Login</p></div>
                <form className="login-body">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"></input>
                    <button>
                        <Link to="/wallet" >Login</Link>
                    </button>
                    <div className="signup">
                        <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </>

    )
}


export default LoginPage


