import React from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";

import LoginPage from "./pages/components/Loginpage"
import Signup from "./pages/components/Signup";
import Wallet from "./pages/components/Wallet";
import Savings from "./pages/components/Savings";
import Loans from "./pages/components/Loans";
import Transactions from "./pages/components/Transactions";


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
