import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";

import LoginPage from "./pages/components/Loginpage"
import Signup from "./pages/components/Signup";
import Wallet from "./pages/components/Wallet";
import Savings from "./pages/components/Savings";
import Loans from "./pages/components/Loans";



function App() {

	const [user, setUser] = useState({})

	const updateUser = (user) => {
		setUser(user)
	}

	return (
		<>
			<div className="App">
				<Switch>
					<Route exact path="/" >
						<LoginPage updateUser={updateUser} user={user} />
					</Route>
					<Route path="/signup">
						<Signup updateUser={updateUser} user={user} />
					</Route>
					<Route path="/wallet">
						<Wallet user={user} />
					</Route>
					<Route path="/savings">
						<Savings user={user} />
					</Route>
					<Route path="/loans">
						<Loans user={user} />
					</Route>
				</Switch>

			</div>
		</>
	)
}

export default App;
