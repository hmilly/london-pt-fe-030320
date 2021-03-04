import React, { useState } from 'react'

export default function ToggleDisplay({ savingsTransfer, setUserInput, user, updateUser }) {

    const [num, setNum] = useState(0)
    const handleNum = (n) => {
        return +parseFloat(n).toFixed(2)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTotBalance
        let newTempBalance
        let newTrans
        let newTempTrans



    //     const update = (formName, transType, balType) => {
    //         if (savingsTransfer.btnName === "in") {
    //             newTotBalance = handleNum(user.balance -= num)
    //             newTempBalance = handleNum(balType += num)
    //             newTrans = [...user.transactions, { transName: formName, minus: num }]
    //             newTempTrans = [ ...user.transType, {transName: formName, plus: num }]
    //         } else {
    //             newTotBalance = handleNum(user.balance += num)
    //             newTempBalance = handleNum(balType -= num)
    //             newTrans = [...user.transactions, { transName: formName, plus: num }]
    //             newTempTrans = [...user.transType, { transName: formName, minus: num }]
    //         }
    //         updateUser({
    //             ...user,
    //             balance: newTotBalance,
    //             balType: newTempBalance,
    //             transactions: newTrans,
    //             tran: newTempTrans
    //         })
    //     }


    // if (savingsTransfer.compName === "savings") {
    //         update("savings", savingTran, user.savingsBal)
    //     } else {
    //         update("loans", loansTran, user.loansBal)
    //     }
            
        if (savingsTransfer.compName === "savings") {
            if (savingsTransfer.btnName === "in"){
                newTotBalance = handleNum(user.balance -= num)
                newTempBalance = handleNum(user.savingsBal += num)
                newTrans = [...user.transactions, { transName: "savings", minus: num }]
                newTempTrans = [...user.savingTran, { transName: "savings", plus: num }]
            } else {
                newTotBalance = handleNum(user.balance += num)
                newTempBalance = handleNum(user.savingsBal -= num)
                newTrans = [...user.transactions, { transName: "savings", plus: num }]
                newTempTrans = [...user.savingTran, { transName: "savings", minus: num }]
            }
            updateUser({
                ...user,
                balance: newTotBalance,
                savingsBal: newTempBalance,
                transactions: newTrans,
                savingTran: newTempTrans
            })
        } 

        if (savingsTransfer.compName === "loans") {
            if (savingsTransfer.btnName === "in"){
                newTotBalance = handleNum(user.balance += num)
                newTempBalance = handleNum(user.loansBal -= num)
                newTrans = [...user.transactions, { transName: "loan", plus: num }]
                newTempTrans = [...user.loansTran, { transName: "loan", minus: num }]
            } else {
                newTotBalance = handleNum(user.balance -= num)
                newTempBalance = handleNum(user.loansBal += num)
                newTrans = [...user.transactions, { transName: "loan", minus: num }]
                newTempTrans = [...user.loansTran, { transName: "loan", plus: num }]
            }
            updateUser({
                ...user,
                balance: newTotBalance,
                loansBal: newTempBalance,
                transactions: newTrans,
                loansTran: newTempTrans
            })
        } 

    }

    return (
        <div className="toggledButton" onClick={() => setUserInput({ ...savingsTransfer, state: true })}>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>£</p>
                    <input
                        type="number"
                        min={0} step={0.01}
                        onChange={(e) => setNum(handleNum(e.target.value))}></input>
                </div>
                <button className="toggledTrans">Transfer</button>
            </form>
        </div>
    )
}
