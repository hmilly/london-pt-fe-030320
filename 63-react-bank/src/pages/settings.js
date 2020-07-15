import React, { useState } from 'react'
import Mainheader from "../headers/Mainheader"
import "./settings.css"


function Settings(props) {
    return (

        <div className="settings">

            <div>
                <p>-</p>
                <h2>Settings</h2>
            </div>
            <div>
                <p>Block account</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                <p>Round expenses and
                    put into savings</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>

            <form>
                <h4>User</h4>
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
            </form>
        </div>
    )
}


export default Wallet

