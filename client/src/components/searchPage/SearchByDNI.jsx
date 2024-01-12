import { ThemeProvider, useTheme } from "@mui/material/styles";
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";
import { customTheme } from '../../themes/inputTheme';
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from '@mui/material/Button';
import HorizontalTable from "./HorizontalTable";
import Alert from '@mui/material/Alert';
import { useCustomers } from "../../contexts/CustomerContext";

function SearchByDNI() {
  const outerTheme = useTheme();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [rows, setRows] = useState({ label: 'Ver cliente', value: 'No se ha buscado un cliente' });
	const [customerData, setCustomerData] = useState([]);
	const { getCustomerByDni, getCustomerByName } = useCustomers();

  const handleChange = () => (e) => {
    if (error) {
      setError(false);
      setHelperText('');
    }
  };

  const myHandleSubmit = async (values) => {
    try {
			console.log('inicio del try')
			const result = await getCustomerByDni(values.dni);
			console.log(result)
			console.log('antes del if')
			if (result.data) {
				setRows({ label: 'Ver cliente', value: 'Cliente encontrado' });
				setCustomerData([
					{ label: 'DNI', value: result.data.dni },
					{ label: 'Nombres', value: result.data.nombres },
					{ label: 'Apellidos', value: result.data.apellidos },
					{ label: 'Fecha de nacimiento', value: result.data.fecha_nacimiento },
					{ label: 'Celular', value: result.data.celular },
					{ label: 'Correo', value: result.data.correo },
					{ label: 'Banco', value: result.data.banco },
					{ label: 'Número de cuenta o CCI', value: result.data.numero_cci },
				]);

				setError(false);
				setNotFoundError(false);
				console.log(error)
				return;
			}

			console.log(error)

			setError(true);
			setHelperText(result.response.data.error);
			if (result.response.data.error === 'Error, customer has not been found') setNotFoundError(true);
			console.log(error)
			return;

    } catch (error) {
      console.error(error);
    }
  };

  return (
		<>
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
      
    </form>
		{notFoundError ? 
			<><Alert severity="error" className="mt-10">El cliente no fue encontrado.</Alert></>
		: <HorizontalTable row={rows} rows={customerData} />}

		</>
  );
}

export default SearchByDNI;
