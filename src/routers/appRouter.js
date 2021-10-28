import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ArmaTuPlanPage } from "../pages/armaTuPlanPage";
import { GraciasPage } from "../pages/graciasPage";
import { HomePage } from "../pages/homePage";
import { PrivateRoute } from "./privateRouter";
import { PublicRoute } from "./publicRouter";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute path="/" exact component={HomePage} />
				<PrivateRoute
					path="/arma-tu-plan"
					exact
					component={ArmaTuPlanPage}
				/>
				<PrivateRoute path="/gracias" exact component={GraciasPage} />
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
