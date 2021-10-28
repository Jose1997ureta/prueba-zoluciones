import { HeaderComponent } from "../components/layout/headerComponent";
import { BannerComponent } from "../components/screens/home/bannerComponent.js";
import { FormComponent } from "../components/screens/home/formComponent";
import "../styles/home.scss";

export const HomePage = () => {
	return (
		<>
			<HeaderComponent boxShadow={false} />
			<div className="home__container">
				<BannerComponent />
				<FormComponent />
			</div>
		</>
	);
};
