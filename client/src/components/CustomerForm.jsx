import TextField from "@mui/material/TextField";
import { customTheme } from '../themes/inputTheme'
import Box from "@mui/material/Box";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useCustomers } from "../contexts/CustomerContext";
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from "react";

export default function CustomerForm() {
	const outerTheme = useTheme();
	const { register, handleSubmit } = useForm();
	const { createCustomer, getCustomers } = useCustomers();
	const onFirstLoad = useRef(true);
	const [errors, setErrors] = useState({
		dni: false,
		names: false,
		surnames: false,
		birthDate: false,
		cellPhone: false,
		email: false,
		bank: false,
		numberCCI: false
	});
	const [helperTexts, setHelperTexts] = useState({
		dni: '',
		names: '',
		surnames: '',
		birthDate: '',
		cellPhone: '',
		email: '',
		bank: '',
		numberCCI: ''
	});

	const handleChange = () => (e) => {
		if (errors[e.target.name]) {
			handleChangeError(e.target.name, false);
			handleHelperText(e.target.name, '');
		}
	};

	const handleChangeError = (fieldName, value) => {
		setErrors((prevErrors) => ({
			...prevErrors,
			[fieldName]: value,
		}));
	};

	const handleHelperText = (fieldName, helperText) => {
		setHelperTexts((prevHelperTexts) => ({
			...prevHelperTexts,
			[fieldName]: helperText,
		}));
	};

	const myHandleSubmit = async (values) => {
		try {
			const result = await createCustomer({
				dni: parseInt(values.dni),
				names: values.names,
				surnames: values.surnames,
				birthDate: values.birthDate,
				cellPhone: values.cellPhone,
				email: values.email,
				bank: values.bank,
				numberCCI: values.numberCCI,
			});

			if (result.data) {
				const customers = await getCustomers();
				console.log(customers);
				return;
			}
			console.log('error');
			if (result.response.data.errors) {
				Object.entries(result.response.data.errors).forEach(([key, value]) => {
					console.log(`${key}: ${value}`);
					handleChangeError(key, true);
					handleHelperText(key, value);
				});
				
				return;
			}

			handleChangeError('dni', true);
			handleHelperText('dni', result.response.data.message);
			return;
			
		} catch (error) {
				console.error(error);
		}
	}
	
	useEffect(() => {
		const firstGetCustomers = async () => {
			await getCustomers();
		}
		if (onFirstLoad.current)  {
			firstGetCustomers();
			onFirstLoad.current = false;
		}
	}, [getCustomers]);

	return (
		<form onSubmit={handleSubmit(myHandleSubmit)}>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { sm: "1fr 1fr" },
					gap: 2,
				}}
			>
				<ThemeProvider theme={customTheme(outerTheme)}>
					<TextField
						label="DNI"
						name="dni"
						error={errors.dni}
						helperText={helperTexts.dni}
						onChangeCapture={handleChange()}
						{...register("dni", { required: true })}
						/>
					<TextField
						label="Nombres"
						name="names"
						error={errors.names}
						helperText={helperTexts.names}
						onChangeCapture={handleChange()}
						{...register("names", { required: true })}
					/>
					<TextField
						label="Apellidos"
						name="surnames"
						error={errors.surnames}
						helperText={helperTexts.surnames}
						onChangeCapture={handleChange()}
						{...register("surnames", { required: true })}
					/>
					<TextField
						label="Fecha de nacimiento"
						name="birthDate"
						error={errors.birthDate}
						helperText={helperTexts.birthDate}
						onChangeCapture={handleChange()}
						{...register("birthDate", { required: true })}
					/>
					<TextField
						label="Celular"
						name="cellPhone"
						error={errors.cellPhone}
						helperText={helperTexts.cellPhone}
						onChangeCapture={handleChange()}
						{...register("cellPhone", { required: true })}
					/>
					<TextField
						label="Correo"
						name="email"
						error={errors.email}
						helperText={helperTexts.email}
						onChangeCapture={handleChange()}
						{...register("email", { required: true })}
					/>
					<TextField
						label="Banco"
						name="bank"
						error={errors.bank}
						helperText={helperTexts.bank}
						onChangeCapture={handleChange()}
						{...register("bank", { required: true })}
					/>
					<TextField
						label="Número de cuenta o CCI"
						name="numberCCI"
						error={errors.numberCCI}
						helperText={helperTexts.numberCCI}
						onChangeCapture={handleChange()}
						{...register("numberCCI", { required: true })}
					/>
					<Button type="submit" variant="contained" className="col-span-2">Registrar</Button>
				</ThemeProvider>
			</Box>
		</form>
	);
}