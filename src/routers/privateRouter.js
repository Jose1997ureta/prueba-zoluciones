import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../context/authContext";

export const PrivateRoute = ({ component: Component, ...route }) => {
	const { user } = useContext(AuthContext);
	return (
		<Route {...route}>{user ? <Component /> : <Redirect to="/" />}</Route>
	);
};
