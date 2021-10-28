import { useHistory } from "react-router";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SelectComponent } from "../../formControl/selectComponent";
import { InputComponent } from "../../formControl/inputComponent";
import { CheckBoxComponent } from "../../formControl/checkboxComponent";
import { ButtonComponent } from "../../formControl/buttonComponent";
import { AuthContext } from "../../../context/authContext";
import "./form.scss";
import { loginUser } from "../../../service/userService";

const initialValues = {
	tipoD: "dni",
	nDoc: "",
	celular: "",
	placa: "",
	terminos: true,
};

const validationSchema = Yup.object().shape({
	tipoD: Yup.string().required(),
	nDoc: Yup.number().typeError("El campo debe ser numerico").required(),
	celular: Yup.number()
		.typeError("El campo debe ser numerico")
		.min(9)
		.required(),
	placa: Yup.string().required(),
	terminos: Yup.boolean(),
});

export const FormComponent = () => {
	const history = useHistory();
	const { getDateUser } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	const handleSubmit = async (values) => {
		setLoading(true);
		let param = {
			...values,
			email: "jose@gmail.com",
			name: "Jose",
		};
		try {
			const rpta = await loginUser(param);
			if (rpta.status === 201) {
				console.log(rpta.data);
				getDateUser(rpta.data);
				setLoading(false);
				history.push("/arma-tu-plan");
			}
		} catch (error) {
			setLoading(false);
			console.log(error.response);
			alert("Ha ocurrido un error");
		}
	};

	return (
		<div className="form__container">
			<form className="form" autoComplete="off">
				<h2 className="form__title">Déjanos tus datos</h2>
				<div className="d-flex w100">
					<SelectComponent
						placeHolderInput="Nro. de doc"
						name="tipoD"
						value={formik.values.tipoD}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.tipoD}
						touched={formik.touched.tipoD}
						inline={true}
					>
						<option value="dni">Dni</option>
						<option value="rut">Rut</option>
					</SelectComponent>
					<InputComponent
						placeholder="Nro. de doc"
						name="nDoc"
						value={formik.values.nDoc}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.errors.nDoc}
						touched={formik.touched.nDoc}
						inline={true}
					/>
				</div>
				<InputComponent
					placeholder="Celular"
					name="celular"
					value={formik.values.celular}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.celular}
					touched={formik.touched.celular}
				/>
				<InputComponent
					placeholder="Placa"
					name="placa"
					value={formik.values.placa}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.placa}
					touched={formik.touched.placa}
				/>
				<div className="form__terminos">
					<CheckBoxComponent
						name="terminos"
						check={formik.values.terminos}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<p className="form__terminos--text">
						Acepto la{" "}
						<span>Política de Protección de Datos Personales</span> y los{" "}
						<span>Términos y Condiciones.</span>
					</p>
				</div>
				<ButtonComponent
					type="button"
					variant="primary"
					text="COTÍZALO"
					onClick={formik.handleSubmit}
					disabled={loading}
				/>
			</form>
		</div>
	);
};
