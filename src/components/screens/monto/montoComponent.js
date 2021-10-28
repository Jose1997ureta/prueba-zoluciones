import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { useHistory } from "react-router";
import { AuthContext } from "../../../context/authContext";
import { FORMAT_NUMBER_MONTO_FIXED } from "../../../functions/utils";
import { ButtonComponent } from "../../formControl/buttonComponent";
import "./monto.scss";
export const MontoComponent = () => {
	const history = useHistory();
	const { cobertura } = useContext(AuthContext);

	const handleGetPlan = () => {
		history.push("/gracias");
	};

	const sumCobertura = () => {
		return Object.keys(cobertura).reduce(
			(sum, key) => sum + parseFloat(cobertura[key] || 0),
			0
		);
	};

	return (
		<div className="monto__container">
			<div className="monto">
				<p className="monto__title">Monto</p>
				<div className="monto__price">
					<p className="monto__price--text">
						{FORMAT_NUMBER_MONTO_FIXED(sumCobertura(), "D")}
					</p>
					<p className="monto__price--month">mensuales</p>
				</div>
				<div className="monto__line" />
				<div className="oferta">
					<p className="oferta__title">El precio incluye:</p>
					<div className="oferta__item">
						<FaCheck className="oferta__item--icon" />
						<p className="oferta__item--text">Llanta de respuesto</p>
					</div>
					<div className="oferta__item">
						<FaCheck className="oferta__item--icon" />
						<p className="oferta__item--text">Analisis de motor</p>
					</div>
					<div className="oferta__item">
						<FaCheck className="oferta__item--icon" />
						<p className="oferta__item--text">Aros gratis</p>
					</div>
				</div>
				<div className="monto__button">
					<ButtonComponent
						variant="primary"
						text="Lo quiero"
						onClick={handleGetPlan}
					/>
				</div>
			</div>
		</div>
	);
};
