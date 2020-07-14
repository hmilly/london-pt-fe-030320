import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login/Loginpage"
import Signup from "./pages/login/Signup";
import Wallet from "./pages/main-body/Wallet";
import Savings from "./pages/main-body/Savings";
import Loans from "./pages/main-body/Loans";
import Transactions from "./pages/main-body/Transactions";



function App() {


	return (
		<>
			<div className="App">

				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/wallet">
						<Wallet />
					</Route>
					<Route path="/savings">
						<Savings />
					</Route>
					<Route path="/loans">
						<Loans />
					</Route>
				</Switch>

			</div>
		</>
	)
}

export default App;
