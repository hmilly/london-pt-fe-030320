import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import man1 from "../img/man_1.png"
import "../styles/transactions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import Transactions from './Transactions'

const todayObj = new Date();
let day = todayObj.getDate();
let month = todayObj.getMonth() + 1;
const year = todayObj.getFullYear();
if (day < 10) { day = `0${day}` }
if (month < 10) { month = `0${month}` }
const today = `${day}/${month}/${year}`;



function Wallet({ updateUser, user }) {


    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="walletbalance">
                    <div className="balance">
                        <h1 className="pounds">{user.balance}</h1>
                        <h3 className="pence">.00</h3>
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

            <div className="transactions_main">
                <div className="tran_header">
                    <p className="tran_txt">Transactions</p>
                    <p className="tran_amount">Amount</p>
                </div>
                <div className="transactions">


                        {(user.transactions) ? <Transactions user={user} /> : <></>}


                </div>
            </div>



        </>
    )
}


export default Wallet

