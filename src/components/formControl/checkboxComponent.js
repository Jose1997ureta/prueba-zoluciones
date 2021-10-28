export const CheckBoxComponent = ({ check, ...props }) => {
	return (
		<input
			type="checkbox"
			checked={check === true ? check : null}
			{...props}
		/>
	);
};
