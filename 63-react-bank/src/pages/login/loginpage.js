import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./login.css";
import Signup from "./Signup"
import Wallet_body from "../main-body/Wallet"
import Lsheader from "../headers/Lsheader";


const LoginPage = (props) => {

    return (
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main-body/wallet-body" component={Wallet_body} />
            <>
            <Lsheader />
                <div className="login-box">
                    <div className="login-head"><p>Login</p></div>
                    <form className="login-body">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" ></input>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"></input>
                        <button><Link to="/main-body/wallet-body" >Login</Link></button>
                        <div className="signup"><Link to="/signup">Sign up</Link></div>
                    </form>
                </div>
            </>
        </Switch>
    )
}


export default LoginPage
