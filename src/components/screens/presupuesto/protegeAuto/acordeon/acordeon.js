import { FaAngleUp, FaAngleDown, FaPlus, FaMinus } from "react-icons/fa";
import "./acordeon.scss";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../context/authContext";

export const AcordeonComponent = ({
	activeC = false,
	activeT = false,
	title,
	text,
	image,
	id,
	value,
}) => {
	const { changeCoberturaUser } = useContext(AuthContext);
	const [isTab, setIsTab] = useState(activeT);
	const [isVisible, setIsVisible] = useState(activeC);

	useEffect(() => {
		if (activeC) {
			changeCoberturaUser(id, value);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChangeStateTab = () => {
		setIsTab((value) => !value);
	};

	const handleChangeStateContent = () => {
		let visible = !isVisible;

		if (visible) {
			setIsVisible(true);
			setIsTab(true);
			changeCoberturaUser(id, value);
		} else {
			setIsVisible(false);
			setIsTab(false);
			changeCoberturaUser(id, 0);
		}
	};

	return (
		<>
			<div className="acordeon">
				<div className="acordeon__header">
					<div className="acordeon__header--content">
						<img
							src={image}
							className="acordeon__info--img"
							alt="image1"
						/>
						<div className="acordeon__info">
							<p className="acordeon__info--text">{title}</p>
							<div
								className="acordeon__button"
								onClick={handleChangeStateContent}
							>
								<button className="acordeon__button--icon">
									{isVisible ? (
										<FaMinus className="icon" />
									) : (
										<FaPlus className="icon" />
									)}
								</button>
								<p className="acordeon__button--text">
									{isVisible ? "quitar" : "agregar"}
								</p>
							</div>
						</div>
					</div>
					{isTab ? (
						<FaAngleUp
							className="acordeon__header--icon"
							onClick={handleChangeStateTab}
						/>
					) : (
						<FaAngleDown
							className="acordeon__header--icon"
							onClick={handleChangeStateTab}
						/>
					)}
				</div>
				{isTab && isVisible && <p className="acordeon__content">{text}</p>}
			</div>
		</>
	);
};
