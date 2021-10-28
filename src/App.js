import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.scss";
import { AuthProvider } from "./context/authContext";
import { HomePage } from "./pages/homePage";
import { LayoutProvider } from "./context/layoutContext";
import { ArmaTuPlanPage } from "./pages/armaTuPlanPage";

export const App = () => {
	return (
		<LayoutProvider>
			<AuthProvider>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route
							path="/arma-tu-plan"
							exact
							component={ArmaTuPlanPage}
						/>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</Switch>
				</BrowserRouter>
			</AuthProvider>
		</LayoutProvider>
	);
};
