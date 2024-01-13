export const initialErrorValues = {
  dni: false,
  names: false,
  surnames: false,
  birthDate: false,
  cellPhone: false,
  email: false,
  bank: false,
  numberCCI: false
}

export const initialHelperTextValues = {
  dni: '',
  names: '',
  surnames: '',
  birthDate: '',
  cellPhone: '',
  email: '',
  bank: '',
  numberCCI: ''
}

export const createCustomerTemplate = (values => ({
  dni: parseInt(values.dni),
  names: values.names,
  surnames: values.surnames,
  birthDate: values.birthDate,
  cellPhone: values.cellPhone,
  email: values.email,
  bank: values.bank,
  numberCCI: values.numberCCI,
}))