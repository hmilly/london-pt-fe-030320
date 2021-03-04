import React from 'react'
import { Link } from 'react-router-dom'
import man1 from "../img/man_1.png"

function SettingsForm() {
    return (
        <form className="login-body settingslogin">
            <h4 className="user">User</h4>
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
            <button disabled className="su-login save">
                <Link to="/wallet" >Save</Link>
            </button>
        </form>
    )
}

export default SettingsForm