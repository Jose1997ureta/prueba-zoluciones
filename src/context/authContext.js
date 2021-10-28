import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cobertura, setCobertura] = useState({
		choque: 0,
		llanta: 0,
		atropello: 0,
	});

	const getDateUser = (param) => {
		setUser(param);
	};

	const changeCoberturaUser = (id, value) => {
		setCobertura({
			...cobertura,
			[id]: value,
		});
	};

	const deleteDateUser = () => {
		setUser(null);
	};

	const data = {
		user,
		cobertura,
		getDateUser,
		deleteDateUser,
		changeCoberturaUser,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
