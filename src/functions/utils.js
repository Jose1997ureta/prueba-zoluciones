export const FORMAT_NUMBER_MONTO = (value, isTypeMoneda = "S") => {
	let typeMoneda;
	isTypeMoneda === "D" ? (typeMoneda = "$ ") : (typeMoneda = "S/");
	return (
		typeMoneda +
		parseFloat(value)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		// .toFixed(2)
		// .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	);
};
