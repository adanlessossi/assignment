import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./store/reducers.js";
import Routes from "./Routes";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<div>
							<Link to="/">Home</Link>
						</div>

						<div className="App">
							<Routes />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
