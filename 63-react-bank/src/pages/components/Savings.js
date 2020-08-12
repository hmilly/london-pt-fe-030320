import React, { useState } from 'react'
import Mainheader from "./Mainheader"
import "../styles/wallet.css"
import Transactions from "./Transactions"
import ToggleDisplay from './ToggleDisplay'


function Savings({ updateUser, user, today }) {

    const [savingsTransfer, setSavingsTransfer] = useState(false)

    let userInput
    if (savingsTransfer) {
        userInput =
            <ToggleDisplay
            setUserInput={setSavingsTransfer}
            updateUser={updateUser}
            user={user}
            onClick={() => setSavingsTransfer(true)}
            />
    }

    return (
        <>
            <Mainheader />
            <div className="account">
                <div className="accountsData">
                    <div className="savingsbalance">
                        <div className="balance">
                            <h1 className="pounds">{user.savingsBal === undefined
                                ? "-" : Number(user.savingsBal).toFixed(2)}</h1>
                        </div>
                        <div>
                            <p className="balanceP">Balance</p>
                        </div>
                    </div>
                    <div className="savingsbuttons">
                        <button className="in" onClick={() => setSavingsTransfer(!savingsTransfer)}>PAY IN</button>
                        <button className="out">PAY OUT</button>
                    </div>
                </div>
                {userInput}
            </div>
            

            {(user.savingsBal) ? <Transactions trans={user.savingTran} today={today} /> : <></>}
        </>
    )
}


export default Savings

