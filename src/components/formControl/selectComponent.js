import "../../styles/select.scss";
export const SelectComponent = ({
	error,
	touched,
	children,
	inline = false,
	...props
}) => {
	const color = !touched ? "" : error ? "border-danger" : "border-success";
	return (
		<div
			className={`form__control ${
				inline && "form__control--select__inline"
			}`}
		>
			<select className={`form__control--select ${color}`} {...props}>
				{children}
			</select>
		</div>
	);
};
