import { FaCheck } from "react-icons/fa";
import { ButtonComponent } from "../../formControl/buttonComponent";
import "./monto.scss";
export const MontoComponent = () => {
	return (
		<div className="monto__container">
			<div className="monto">
				<p className="monto__title">Monto</p>
				<div className="monto__price">
					<p className="monto__price--text">$35.00</p>
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
					<ButtonComponent variant="primary" text="Lo quiero" />
				</div>
			</div>
		</div>
	);
};
