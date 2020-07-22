import React from 'react'
import "../styles/transactions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import "../styles/transactions.css"


function Transactions({ user }) {
    return (
        <>
            {user.transactions.map(t => (
                <div className="transaction">
                    <h5 className="companyname">{t.transName}</h5>
                    <div className="paymentinfo">


                        {(t.minus) ?
                            <><FontAwesomeIcon
                                icon={faMinus}
                                className="minus" />
                                <h5>£{t.minus}</h5></>
                            :
                            <><FontAwesomeIcon
                                icon={faPlus}
                                className="added" />
                                <h5>£{t.plus}</h5></>}

                    </div>
                </div>
            )
            )}
        </>
    )
}


export default Transactions

