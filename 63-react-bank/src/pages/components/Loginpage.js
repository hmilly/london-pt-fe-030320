import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/login.css";
import Loginheader from "./Loginheader";
import users from "../data"


const LoginPage = () => {

    console.log(users)


    const [email, setEmail] = useState("")
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const [pword, setPword] = useState("")
    const handlePChange = (e) => {
        setPword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.toLowerCase() === "lmuck@gmail.com" && pword === "fuck") {

        }
    }

    return (
        <>
            <Loginheader />
            <div className="login-box">
                <div className="login-head"><p>Login</p></div>
                <form className="login-body" onSubmit={handleSubmit} >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleEmailChange} ></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handlePChange}></input>
                    <button>
                        <Link to="/wallet">Login</Link>
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


