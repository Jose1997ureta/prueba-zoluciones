import { FaCheck } from "react-icons/fa";
import { ButtonComponent } from "../../formControl/buttonComponent";
import "./monto.scss";
export const MontoComponent = () => {
	return (
		<div className="monto__container">
			<p className="monto__title">Monto</p>
			<p className="monto__price">$35.00</p>
			<p className="monto__month">mensuales</p>
			<div className="monto__line" />
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
			<div style={{ marginTop: 32 }}>
				<ButtonComponent variant="primary" text="Lo quiero" />
			</div>
		</div>
	);
};
