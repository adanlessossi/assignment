import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/listing/:id" component={DetailPage} />
		</Switch>
	);
};
