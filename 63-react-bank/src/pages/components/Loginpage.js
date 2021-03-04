import React, { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";

const LoginPage = ({ updateUser, user, allUsers }) => {
    const history = useHistory();

    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPword, setEnteredPword] = useState("")

    useEffect(() => {
        allUsers.find(e => { if (e.email === enteredEmail) updateUser(e) })
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.email === enteredEmail.toLowerCase() && user.pword === enteredPword) {
            history.push("/wallet")
        } else {
            window.alert("Incorrect details - please sign up!")
        }
    }

    return (
        <>
            <div className="login-box">
                <div className="login-head"><p>Login</p></div>
                <form className="login-body" onSubmit={handleSubmit} >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setEnteredEmail(e.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(e) => setEnteredPword(e.target.value)}></input>
                    <button >
                        Login
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


