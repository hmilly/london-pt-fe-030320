import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import man1 from "../img/man_1.png"

// selectedImg.addEventListener("change", (e) => {
//     let choice = e.target.files[0];
//     const sImg = document.querySelector(".userimg");
//     sImg.src = URL.createObjectURL(choice);
//   });

function Signup({ newUser, allUsers }) {
    let history = useHistory();
    const orderComplete = () => {
        userInfo.slice(userInfo.indexOf(userInfo.find()))
        newUser(userInfo)
        history.push("/")
    }

    const [userInfo, setUserInfo] = useState({})
    const handleChange = (e) => {
        const name = e.target.name
        const v = e.target.value
        setUserInfo({ ...userInfo, id: parseInt(allUsers.length) + 1, [name]: v })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userInfo && userInfo.pword === userInfo.pwordmatch) {
            const u = allUsers.find(u => u.email.toLowerCase() === userInfo.email.toLowerCase())
            !u ? orderComplete() 
            : window.alert("Email entered is currently in use, please re-enter and try again")
        } else {
            window.alert("You passwords do not match, or you left some fields blank please try again")
        }
    }

    return (
        <>
            <div className="login-box">
                <div className="login-head"><p>Sign up</p></div>
                <form className="login-body">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" onChange={(e) => handleChange(e)}></input>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" onChange={(e) => handleChange(e)}></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => handleChange(e)}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="pword" onChange={(e) => handleChange(e)}></input>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="pwordmatch" onChange={(e) => handleChange(e)}></input>
                    <div className="uploadDiv">
                        <div className="uploadbtndiv">
                            <input type="file" /><p className="filep">Upload avatar</p>
                            <button className="uploadbtn">Upload</button>
                        </div>
                        <div className="uploadimgdiv">
                            <img className="usersimgchoice" src={man1} alt="man"></img>
                        </div>
                    </div>
                    <button className="su-login" onClick={(e) => handleSubmit(e)}>
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup
