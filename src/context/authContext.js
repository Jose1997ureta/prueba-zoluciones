import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const getDateUser = (param) => {
		setUser(param);
	};

	const deleteDateUser = (param) => {
		setUser(null);
	};

	const data = {
		user,
		getDateUser,
		deleteDateUser,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
