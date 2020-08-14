import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"
import ToggleDisplay from './ToggleDisplay'


function Loans({updateUser, user, today }) {
    
    const [loanTransfer, setLoanTransfer] = useState({ state: false, btnName: "", compName: "loans" })
    let userInput
    if (loanTransfer.state) {
        userInput =
            <ToggleDisplay
            savingsTransfer={loanTransfer}
            setUserInput={setLoanTransfer}
            updateUser={updateUser}
            user={user}
            onClick={() => setLoanTransfer(true)}/>
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
                        <button className="in takeout"
                        onClick={() => setLoanTransfer({ ...loanTransfer, state: !loanTransfer.state, btnName: "in" })}>
                            TAKE LOAN</button>
                        <button className="out payback"
                        onClick={() => setLoanTransfer({ ...loanTransfer, state: !loanTransfer.state, btnName: "out" })}>
                            PAY BACK</button>
                    </div>
                </div>
                {userInput}
            </div>
            {(user.loansBal) ? <Transactions trans={user.loansTran} today={today} /> : <></>}
        </>
    )
}


export default Loans

