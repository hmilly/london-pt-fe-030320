import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import man1 from "../img/man_1.png"
import Transactions from './Transactions'

function Wallet({ user, today }) {

    let balance, pound, pence

    if (user.balance === undefined) {
        pound = 0
        pence = 0
    } else {
        balance = Number(user.balance)
        pound = Math.trunc(balance)
        let bp = (balance - pound).toFixed(2)
        pence = bp.slice(bp.length - 2)

    }

    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="walletbalance">
                    <div className="balance">
                        <h1 className="pounds">{pound}.</h1>
                        <h3 className="pence">{pence}</h3>
                    </div>
                    <p className="balanceP">Balance</p>
                </div>
                <div className="userdate">
                    <img src={man1} alt="user image"></img>
                    <div>
                        <p>{today}</p>
                    </div>
                </div>
            </div>
            {(user.transactions) ? <Transactions trans={user.transactions} /> : <></>}
        </>
    )
}


export default Wallet

