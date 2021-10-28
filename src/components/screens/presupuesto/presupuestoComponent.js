import { RiArrowLeftSLine } from "react-icons/ri";
import Person1Image from "../../../images/person1.svg";
import { ContenedorComponent } from "./contador/contadorComponent";
import { useContext, useState } from "react";
import { ProtegeAutoComponent } from "./protegeAuto/protegeAutoComponent";
import { optionsTab } from "../../../constants/data";
import { useHistory } from "react-router";
import { AuthContext } from "../../../context/authContext";
import "./presupuesto.scss";

export const PresupuestoComponent = () => {
	const history = useHistory();
	const { deleteDateUser } = useContext(AuthContext);
	const [tabSelect, SetTabSelect] = useState("1");

	const handleSelectTab = (id) => {
		SetTabSelect(id);
	};

	const handleBack = () => {
		deleteDateUser();
		history.push("/");
	};

	return (
		<div className="presupuesto">
			{/* RETURN */}
			<div className="presupuesto__return">
				<button
					className="presupuesto__return--button"
					onClick={handleBack}
				>
					<RiArrowLeftSLine className="presupuesto__return--button__icon" />
				</button>
				<p className="presupuesto__return--text">Volver</p>
			</div>
			{/* PERFIL */}
			<h1 className="presupuesto__title">
				¡Hola, <span>Juan!</span>
			</h1>
			<p className="presupuesto__description">
				Conoce las coberturas para tu presupuesto
			</p>

			{/* PLACA */}
			<div className="card">
				<h3 className="card__placa">Placa: C2U-114</h3>
				<h2 className="card__description">Wolkswagen 2019 Golf</h2>
				<img src={Person1Image} className="card__image" alt="imageplaca" />
			</div>

			{/* SUMA */}
			<div className="suma">
				<div className="suma__content">
					<h3 className="suma__content--text">Indica la suma asegurada</h3>
					<p className="suma__content--monto">MIN $12,500 | MAX $16,500</p>
				</div>
				<ContenedorComponent min={12500} max={16500} />
			</div>

			<div className="line__container" />

			<div className="cobertura">
				<h2 className="cobertura__title">Agrega o quita coberturas</h2>

				<ul className="tab">
					{optionsTab.length > 0 &&
						optionsTab.map((el) => (
							<li
								key={el.id}
								className={`tab__item ${
									tabSelect === el.id ? "active" : ""
								}`}
								onClick={() => handleSelectTab(el.id)}
							>
								{el.text}
							</li>
						))}
				</ul>

				<div className="tab__content">
					{tabSelect === "1" && <ProtegeAutoComponent />}
					{tabSelect === "2" && <div />}
					{tabSelect === "3" && <div />}
				</div>
			</div>
		</div>
	);
};
