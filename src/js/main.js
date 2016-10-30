import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout';
import About from './About';
import Order from './Order';
import Saved_Orders from './Saved_Orders';
import Customers from './Customers';
import Products from './Product/Products';
import Settings from './Settings';

injectTapEventPlugin();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Products}></IndexRoute>
			<Route path="order" component={Order}></Route>
			<Route path="saved_orders" component={Saved_Orders}></Route>
			<Route path="customers" component={Customers}></Route>
			<Route path="settings" component={Settings}></Route>
			<Route path="about" component={About}></Route>
		</Route>
	</Router>
	, document.getElementById("app")
)

