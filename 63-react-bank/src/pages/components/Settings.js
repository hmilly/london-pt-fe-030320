import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import SettingsForm from "./SettingsForm"

function Settings({setMenu}) {
    return (
        <div className="settings">
            <div className="settingsTitle">
                <a onClick={() => setMenu(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </a>
                <h1>Settings</h1>
            </div>
            <div className="blockacc">
                <p>Block account</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="rounds">
                <p>Round expenses and
                    put into savings</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <SettingsForm />
        </div>
    )
}

export default Settings

