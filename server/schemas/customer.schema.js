import { z } from "zod";

// The messages are in Spanish because they are displayed on the client.
export const registerSchema = z.object({
  dni: z
    .number({
      required_error: "DNI es requerido.",
    })
    .int()
    // To validate an 8 digits number
    .refine((number) => number >= 10000000 && number <= 99999999, {
      message: "El DNI debe tener 8 dígitos.",
    }),
  names: z.string({
    required_error: "El nombre es un campo requerido."
  }),
  surnames: z.string({
    required_error: "Los apellidos son requeridos."
  }),
  birthDate: z
    .string({
      required_error: "La fecha de nacimiento es requerida."
    })
    // To validate the birthdate
    .refine((data) => /^\d{4}-\d{2}-\d{2}$/.test(data), {
      message: "El formato de la fecha de nacimiento es inválido.",
    }),
  cellPhone: z
    .string({
      required_error: "El celular es un campo requerido"
    })
    // To validate a cellphone number
    .refine((data) => /^9\d{8}$/.test(data), {
      message: "Número de celular inválido.",
    }),
  email: z
    .string({
      required_error: "El correo es requerido"
    })
    .email({
      message: "El correo no es válido",
    }),
  bank: z.string({
    required_error: "El banco es requerido"
  }),
  numberCCI: z.string({
    required_error: "El número de cuenta o CCI es requerido"
  })
    // To validate a card number or CCI
    .refine((data) => /^\d{16}$|^\d{20}$/.test(data), {
      message: "El número de cuenta o CCI debe tener 16 o 20 dígitos.",
    })
});

export const findByDNISchema = z.string({ required_error: "El DNI es requerido" })
  .refine((value) => /^\d{8}$/.test(value), {
    message: 'El DNI debe tener 8 dígitos.',
  })

export const findByNameSchema = z.string({ required_error: "El nombre es un campo requerido" })

export const loginSchema = z.object({
  dni: z
    .number({
      required_error: "El DNI es requerido."
    })
    .int()
    // To validate an 8 digits number
    .refine((number) => number >= 10000000 && number <= 99999999, {
      message: "El DNI debe tener 8 dígitos.",
    }),
  email: z
    .string({
      required_error: "El correo es requerido.",
    })
    .email({
      message: "El correo no es válido.",
    })
});