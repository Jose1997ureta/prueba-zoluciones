import "../../styles/button.scss";
export const ButtonComponent = ({
	text,
	variant = "primary",
	style,
	...props
}) => {
	let background;
	switch (variant) {
		case "primary":
			background = "#ef3340";
			break;

		default:
			background = "#6f7dff";
			break;
	}
	return (
		<div className="button__container">
			<button
				className="button"
				style={{ backgroundColor: background }}
				{...props}
			>
				{text}
			</button>
		</div>
	);
};
