import { useContext } from "react";
import Person1Image from "../../../images/bg2.svg";
import Person1MovilImage from "../../../images/bg2-movil.svg";
import "./banner.scss";
import { LayoutContext } from "../../../context/layoutContext";

export const BannerComponent = () => {
	const { windowSize } = useContext(LayoutContext);

	return (
		<div className="banner__container">
			<div className="l-container banner ">
				<div className="banner__img">
					{windowSize.width < 769 ? (
						<img src={Person1MovilImage} alt="Person1Image" />
					) : (
						<img src={Person1Image} alt="Person1Image" />
					)}
				</div>
				<div className="banner__content">
					<h3 className="banner__content--state">¡NUEVO!</h3>
					<h1 className="banner__content--title">
						Seguro<span>Vehicular Tracking</span>
					</h1>
					<p className="banner__content--description">
						Cuentanos donde le haras seguimiento a tu seguro
					</p>
				</div>
				<div className="banner__copy">
					<p className="banner__copy--text">
						© 2021 RIMAC Seguros y Reaseguros.
					</p>
				</div>
			</div>
		</div>
	);
};
