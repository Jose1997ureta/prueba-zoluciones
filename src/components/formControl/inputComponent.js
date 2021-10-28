import "../../styles/input.scss";
export const InputComponent = ({
	error,
	touched,
	inline = false,
	...props
}) => {
	const color = !touched ? "" : error ? "border-danger" : "border-success";
	return (
		<div
			className={`form__control ${inline && "form__control--input__inline"}`}
		>
			<input
				className={`form__control--input ${color} ${
					inline ? "form__control--input" : ""
				}`}
				{...props}
			/>
		</div>
	);
};
