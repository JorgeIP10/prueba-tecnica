import { ThemeProvider, useTheme } from "@mui/material/styles";
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";
import { customTheme } from '../../themes/inputTheme';
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from '@mui/material/Button';
import HorizontalTable from "./HorizontalTable";
import Alert from '@mui/material/Alert';

function SearchByField({findFunction, labelNameObject}) {
  const outerTheme = useTheme();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [rows, setRows] = useState({});
	const [customerData, setCustomerData] = useState([]);

  const handleChange = () => (e) => {
    if (error) {
      setError(false);
      setHelperText('');
    }
  };

  const myHandleSubmit = async (values) => {
    try {
      const result = await findFunction(values.field);
  
      if (result.response) {
        setError(true);
  
        if (result.response.data.error === 'Error, customer has not been found') {
          setNotFoundError(true);
          return;
        }
  
        setHelperText(result.response.data.error);
        return;
      }
  
      const customerDataArray = result.data.map((customer) => ({
        label: 'Ver cliente',
        value: 'Cliente encontrado',
        rows: [
          { label: 'DNI', value: customer.dni },
          { label: 'Nombres', value: customer.nombres },
          { label: 'Apellidos', value: customer.apellidos },
          { label: 'Fecha de nacimiento', value: customer.fecha_nacimiento },
          { label: 'Celular', value: customer.celular },
          { label: 'Correo', value: customer.correo },
          { label: 'Banco', value: customer.banco },
          { label: 'Número de cuenta o CCI', value: customer.numero_cci },
        ],
      }));
  
      setCustomerData(customerDataArray);
      setRows(customerDataArray);
      setError(false);
      setNotFoundError(false);
  
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
            label={labelNameObject.label} name={labelNameObject.name} error={error} helperText={helperText}
            onChangeCapture={handleChange()} {...register("field", { required: true })}
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

export default SearchByField;