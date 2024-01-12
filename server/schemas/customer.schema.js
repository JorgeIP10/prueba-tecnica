import { z } from "zod";

export const registerSchema = z.object({
  dni: z
    .number({
      required_error: "DNI is required",
    })
    .int()
    // To validate an 8 digits number
    .refine((number) => number >= 10000000 && number <= 99999999, {
      message: "DNI must be 8 digits.",
    }),
  names: z.string({
    required_error: "Names is a field required"
  }),
  surnames: z.string({
    required_error: "Surnames is a required field"
  }),
  birthDate: z
    .string({
      required_error: "Birthdate is a required field"
    })
    // To validate the birthdate
    .refine((data) => /^\d{4}-\d{2}-\d{2}$/.test(data), {
      message: "Birthdate value is invalid",
    }),
  cellPhone: z
    .string({
      required_error: "Cellphone is a field required"
    })
    // To validate a cellphone number
    .refine((data) => /^9\d{8}$/.test(data), {
      message: "Cellphone value is invalid.",
    }),
  email: z
    .string({
      required_error: "Email is required"
    })
    .email({
      message: "Email is not valid",
    }),
  bank: z.string({
    required_error: "Bank is required"
  }),
  numberCCI: z.string({
    required_error: "NumberCCI is required"
  })
  // To validate a card number or CCI
  .refine((data) => /^\d{16}$|^\d{20}$/.test(data), {
    message: "NumberCCI must be 16 or 20 digits.",
  })
});

export const findByDNISchema = z.string({required_error: "DNI is required"})
    .refine((value) => /^\d{8}$/.test(value), {
      message: 'DNI must be 8 digits.',
    })

export const loginSchema = z.object({
  dni: z
    .number({
      required_error: "DNI is required"
    })
    .int()
    // To validate an 8 digits number
    .refine((number) => number >= 10000000 && number <= 99999999, {
      message: "DNI must be 8 digits.",
    }),
    email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    })
});