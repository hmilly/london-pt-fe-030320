import React, { useState } from 'react'
import { Link } from "react-router-dom";
import man1 from "../img/man_1.png"
import "./login.css"
import Lsheader from "../headers/Lsheader";


// selectedImg.addEventListener("change", (e) => {
//     let choice = e.target.files[0];
//     const sImg = document.querySelector(".userimg");
//     sImg.src = URL.createObjectURL(choice);
//   });

function Signup() {
    return (

        <>
            <Lsheader />
            <div className="login-box">
                <div className="login-head"><p>Sign up</p></div>
                <form className="login-body">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" ></input>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" ></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"></input>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password"></input>
                    <div className="uploadDiv">
                        <div className="uploadbtndiv">
                            <input type="file" /><p className="filep">Upload avatar</p>
                            <button className="uploadbtn">Upload</button>
                        </div>
                        <div className="uploadimgdiv"><img className="usersimgchoice" src={man1} alt="man"></img></div>

                    </div>
                    <button disabled className="su-login">
                        <Link to="/wallet" >Sign up</Link>
                        </button>
                </form>
            </div>
        </>

    )
}

export default Signup
