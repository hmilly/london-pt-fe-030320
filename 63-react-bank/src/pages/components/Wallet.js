import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import man1 from "../img/man_1.png"
import Transactions from "./Transactions"


const todayObj = new Date();
let day = todayObj.getDate();
let month = todayObj.getMonth() + 1;
const year = todayObj.getFullYear();

if (day < 10) { day = `0${day}` }
if (month < 10) { month = `0${month}` }

const today = `${month}/${day}/${year}`;


function Wallet(props) {
    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="walletbalance">
                    <div className="balance"><h1 className="pounds">2 230</h1><h3 className="pence">.00</h3></div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="userdate">
                    <img src={man1} alt="user image"></img>
                    <div><p>{today}</p></div>
                </div>
            </div>
            <Transactions/>
        </>
    )
}


export default Wallet

