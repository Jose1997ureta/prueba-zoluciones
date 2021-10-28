import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../context/authContext";

export const PublicRoute = ({ component: Component, ...route }) => {
	const { user } = useContext(AuthContext);
	return (
		<Route {...route}>
			{user ? <Redirect to="/arma-tu-plan" /> : <Component />}
		</Route>
	);
};
