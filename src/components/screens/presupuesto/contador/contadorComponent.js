import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FORMAT_NUMBER_MONTO } from "../../../../functions/utils";
import "./contador.scss";

export const ContenedorComponent = ({ max, min }) => {
	const [contador, setContador] = useState(min);

	const handleMinus = () => {
		if (contador > min) {
			setContador((value) => value - 500);
		}
	};
	const handlePlus = () => {
		if (contador < max) {
			setContador((value) => value + 500);
		}
	};

	return (
		<div className="contador">
			<FaMinus className="contador__minus" onClick={handleMinus} />
			<p className="contador__text">{FORMAT_NUMBER_MONTO(contador, "D")}</p>
			<FaPlus className="contador__plus" onClick={handlePlus} />
		</div>
	);
};
