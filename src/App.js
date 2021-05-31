import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Page from "./pages";

function App() {
	return (
		<div className='App'>
			<Router>
				<Header></Header>
				<Switch>
					<Route path='/menu'>
						<Page.Menu />
					</Route>
					<Route path='/contact'>
						<Page.Contact />
					</Route>
					<Route path='/ourstory'>
						<Page.Story />
					</Route>
					<Route path='/'>
						<Page.Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
