import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/transactions.css"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import SettingsForm from "./SettingsForm"

function Settings(props) {
    return (

        <div className="settings">
            <div className="settingsTitle">
                <Link><FontAwesomeIcon
                icon={faArrowLeft} /></Link>
                <h1>Settings</h1>
            </div>
            <div className="blockacc">
                <p>Block account</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className="rounds">
                <p>Round expenses and
                    put into savings</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>

            <SettingsForm/>
        </div>
    )
}


export default Settings

