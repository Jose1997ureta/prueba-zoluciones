import "./timeLine.scss";

export const TimeLineComponent = () => {
	return (
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
	);
};
