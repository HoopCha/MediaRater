import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import PrivateRoute from "./components/PrivateRoute";


function App() {
	return (
		<div>
			<Header />
			<Route exact path="/" component={LandingPage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
      {/* <PrivateRoute path="/home" component={HomePage} /> */}
		</div>
	);
}

export default App;