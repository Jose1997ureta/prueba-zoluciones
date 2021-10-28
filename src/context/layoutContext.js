import { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const data = {
		windowSize,
	};

	return (
		<LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
	);
};
