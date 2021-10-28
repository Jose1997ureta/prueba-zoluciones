import { FaAngleUp, FaAngleDown, FaPlus, FaMinus } from "react-icons/fa";
import "./acordeon.scss";
import { useState } from "react";

export const AcordeonComponent = ({
	activeC = false,
	activeT = false,
	title,
	text,
	image,
}) => {
	const [isTab, setIsTab] = useState(activeT);
	const [isVisible, setIsVisible] = useState(activeC);

	const handleChangeStateTab = () => {
		setIsTab((value) => !value);
	};

	const handleChangeStateContent = () => {
		let visible = !isVisible;

		if (visible) {
			setIsVisible(true);
			setIsTab(true);
		} else {
			setIsVisible(false);
			setIsTab(false);
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
