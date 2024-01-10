import TextField from "@mui/material/TextField";
import { customTheme } from '../themes/inputTheme'
import Box from "@mui/material/Box";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useCustomers } from "../contexts/CustomerContext";
import Button from '@mui/material/Button';
import { useEffect, useRef } from "react";

export default function CustomerForm() {
	const outerTheme = useTheme();
	const { register, handleSubmit } = useForm();
	const { createCustomer, getCustomers } = useCustomers();
	const onFirstLoad = useRef(true);

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
			} else {
				console.log('error');
				if (result.response.data.types) {
					for (const error of result.response.data.types) {
						console.log(error);
					}
				} else {
					console.log(result.response.data.message);
					console.log(result.response.data.type);
				}
			}
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
	}, [getCustomers])

	return (
		<form
			onSubmit={handleSubmit(myHandleSubmit)}
		>
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
						{...register("dni", { required: true })}
					/>
					<TextField
						error
						helperText='aña'
						label="Nombres"
						name="names"
						{...register("names", { required: true })}
					/>
					<TextField
						label="Apellidos"
						name="surnames"
						{...register("surnames", { required: true })}
					/>
					<TextField
						label="Fecha de nacimiento"
						name="birthDate"
						{...register("birthDate", { required: true })}
					/>
					<TextField
						label="Celular"
						name="cellPhone"
						{...register("cellPhone", { required: true })}
					/>
					<TextField
						label="Correo"
						name="email"
						{...register("email", { required: true })}
					/>
					<TextField
						label="Banco"
						name="bank"
						{...register("bank", { required: true })}
					/>
					<TextField
						label="Número de cuenta o CCI"
						name="numberCCI"
						{...register("numberCCI", { required: true })}
					/>
					<Button type="submit" variant="contained" className="col-span-2">Registrar</Button>
				</ThemeProvider>
			</Box>
		</form>
	);
}