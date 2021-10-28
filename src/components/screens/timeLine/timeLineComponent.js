import { useContext } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useHistory } from "react-router";
import { AuthContext } from "../../../context/authContext";
import { LayoutContext } from "../../../context/layoutContext";
import "./timeLine.scss";

export const TimeLineComponent = () => {
	const { windowSize } = useContext(LayoutContext);
	const { deleteDateUser } = useContext(AuthContext);
	const history = useHistory();

	const handleBack = () => {
		deleteDateUser();
		history.push("/");
	};

	return windowSize.width > 768 ? (
		<div className="timeLine__container">
			<div className="timeLine">
				<button className="timeLine__button">1</button>
				<p className="timeLine__text">Datos</p>
			</div>
			<div className="timeLine active">
				<button className="timeLine__button">2</button>
				<p className="timeLine__text">Arma tu plan</p>
			</div>
		</div>
	) : (
		<div className="paso__container">
			<div className="paso">
				<div className="paso__return">
					<button className="paso__return--button" onClick={handleBack}>
						<RiArrowLeftSLine className="paso__return--button__icon" />
					</button>
					<p className="paso__return--text">Paso 2 de 2</p>
				</div>
				<div className="paso__line" />
			</div>
		</div>
	);
};
