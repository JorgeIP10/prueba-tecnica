import TextField from "@mui/material/TextField";
import {customTheme} from '../themes/inputTheme'
import Box from "@mui/material/Box";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useCustomers } from "../contexts/CustomerContext";
import Button from '@mui/material/Button';

export default function CustomerForm() {
    const outerTheme = useTheme();
    const { register, handleSubmit } = useForm();
    const { createCustomer } = useCustomers();

    return (
        <form
            onSubmit={handleSubmit((values) => {
                createCustomer({
                    dni: values.dni,
                    names: values.names,
                    surnames: values.surnames,
                    birthDate: values.birthDate,
                    cellPhone: values.cellPhone,
                    email: values.email,
                    bank: values.bank,
                    numberCCI: values.numberCCI,
                });
            })}
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