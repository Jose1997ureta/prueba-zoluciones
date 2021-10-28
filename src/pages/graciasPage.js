import { useContext } from "react";
import { ButtonComponent } from "../components/formControl/buttonComponent";
import { HeaderComponent } from "../components/layout/headerComponent";
import { LayoutContext } from "../context/layoutContext";
import Person3 from "../images/person3.svg";
import Person3Movil from "../images/person3-movil.svg";
import "../styles/gracias.scss";
import { AuthContext } from "../context/authContext";

export const GraciasPage = () => {
	const { windowSize } = useContext(LayoutContext);
	const { user } = useContext(AuthContext);
	return (
		<>
			<HeaderComponent boxShadow={true} />
			<div className="gracias__container">
				<div className="gracias__fondo">
					{windowSize.width > 768 ? (
						<img
							src={Person3}
							className="gracias__fondo--img"
							alt="person3"
						/>
					) : (
						<img
							src={Person3Movil}
							className="gracias__fondo--img"
							alt="person3"
						/>
					)}
				</div>
				<div className="gracias__content">
					<h1 className="gracias__content--title">
						¡Te damos la bienvenida! <br />
						<span>Cuenta con nosotros para proteger tu vehículo</span>
					</h1>
					<p className="gracias__content--description">
						Enviaremos la confirmación de compra de tu Plan Vehícular
						Tracking a tu correo: <br /> <span>{user.email}</span>
					</p>
					<div className="gracias__content--button">
						<ButtonComponent
							text="cómo usar mi seguro"
							variant="primary"
						/>
					</div>
				</div>
				<div className="gracias__footer">
					<div className="gracias__footer--content">
						<p className="gracias__footer--text">
							© 2021 RIMAC Seguros y Reaseguros.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
