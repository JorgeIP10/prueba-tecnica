import { ThemeProvider, useTheme } from "@mui/material/styles";
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";
import { customTheme } from '../../themes/inputTheme';
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from '@mui/material/Button';
import HorizontalTable from "./HorizontalTable";

function SearchByDNI() {
	const outerTheme = useTheme();
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState('');

	const handleChange = () => (e) => {
		if (error) {
			setError(false);
			setHelperText('');
		}
	};

	const myHandleSubmit = async (values) => {
		try {
			console.log(values.dni)
		} catch (error) {
			console.error(error);
		}
	}


	return (
		<form onSubmit={handleSubmit(myHandleSubmit)}>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { sm: "1fr" },
					gap: 2,
				}}
			>
				<ThemeProvider theme={customTheme(outerTheme)}>
					<TextField
						label="DNI" name="dni" error={error} helperText={helperText}
						onChangeCapture={handleChange()} {...register("dni", { required: true })}
					/>
					<Button type="submit" variant="contained">Buscar</Button>
				</ThemeProvider>
			</Box>
			<HorizontalTable/>
		</form>
	)
}

export default SearchByDNI