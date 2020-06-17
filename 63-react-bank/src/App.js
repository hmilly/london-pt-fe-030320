import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Lsheader from "./pages/headers/lsheader";
import Mainheader from "./pages/headers/mainheader";
import LoginPage from "./pages/login/loginpage"
import Signup from "./pages/login/signup";
import Wallet_body from "./pages/main-body/wallet_body";



function App() {


	return (
		<>

				{(LoginPage || Signup) ? <Lsheader/> : <Mainheader/>}
				<div className="App">
		<Route path="/login" component={LoginPage} />

				</div>

		</>
	)
}

export default App;
