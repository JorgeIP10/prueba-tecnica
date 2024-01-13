import { ThemeProvider, useTheme } from "@mui/material/styles";
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";
import { customTheme } from '../../themes/inputTheme';
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const outerTheme = useTheme();
  const { register, handleSubmit } = useForm();
  const [notFoundError, setNotFoundError] = useState(false);
  const onFirstLoad = useRef(true);
  const { signin, isAuthenticated } = useAuth();
  const [errors, setErrors] = useState({dni: false, email: false});
	const [helperTexts, setHelperTexts] = useState({dni: '', email: ''});

  useEffect(() => {
    if (onFirstLoad.current) {
      onFirstLoad.current = false;
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      console.log('está autenticado')
    }
  }, [isAuthenticated]);

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

	const handleChange = () => (e) => {
		if (errors[e.target.name]) {
			handleChangeError(e.target.name, false);
			handleHelperText(e.target.name, '');
		}
	};

  const myHandleSubmit = async (values) => {
    try {
      console.log(values)
      const result = await signin({dni: parseInt(values.dni), email: values.email});
      
      if (result.data) {
        setNotFoundError(false);

        return;
      }

      if (result.response.data.errors) {
				Object.entries(result.response.data.errors).forEach(([key, value]) => {
					handleChangeError(key, true);
					handleHelperText(key, value);
				});
				
				return;
			}
      
      setNotFoundError(true);
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
            label='DNI' name='dni' error={errors.dni} helperText={helperTexts.dni}
            onChangeCapture={handleChange()} {...register("dni", { required: true })}
          />
          <TextField
            label='Correo' name='Email' error={errors.email} helperText={helperTexts.email}
            onChangeCapture={handleChange()} {...register("email", { required: true })}
          />
          <Button type="submit" variant="contained">Iniciar sesión</Button>
        </ThemeProvider>
      </Box>
      
    </form>
		{notFoundError ? 
			<><Alert severity="error" className="mt-10">Credenciales incorrectas.</Alert></>
		: !onFirstLoad.current ? <Alert severity="success" className="mt-10">Bienvenido.</Alert> : null}
		</>
  );
}

export default LoginForm;