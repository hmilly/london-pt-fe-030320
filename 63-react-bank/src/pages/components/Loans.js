import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"
import ToggleDisplay from './ToggleDisplay'


function Loans({ user, today }) {
    

    const [loanTransfer, setLoanTransfer] = useState(false)

    let userInput
    if (loanTransfer) {
        userInput =
            <ToggleDisplay setUserInput={setLoanTransfer} onClick={() => setLoanTransfer(true)}/>
    }

    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="accountsData">
                    <div className="loansbalance">
                        <div className="balance">
                            <h1 className="pounds">{user.loansBal === undefined
                                ? "-" : Number(user.loansBal).toFixed(2)}</h1>
                        </div>
                        <p className="balanceP">Balance</p>
                    </div>
                    <div className="savingsbuttons">
                        <button className="in takeout" onClick={() => setLoanTransfer(!loanTransfer)}>TAKE LOAN</button>
                        <button className="out payback">PAY BACK</button>
                    </div>
                </div>
                {userInput}
            </div>
            {(user.loansBal) ? <Transactions trans={user.loansTran} today={today} /> : <></>}
        </>
    )
}


export default Loans

