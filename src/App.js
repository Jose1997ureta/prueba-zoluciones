import { AuthProvider } from "./context/authContext";
import { LayoutProvider } from "./context/layoutContext";
import { AppRouter } from "./routers/appRouter";
import "./styles/App.scss";

export const App = () => {
	return (
		<LayoutProvider>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</LayoutProvider>
	);
};
