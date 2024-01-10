export const columns = [
  // The id's are in spanish because the field names in the table are in spanish
  { id: 'dni', label: 'DNI', minWidth: 170, align: 'center'},
  { id: 'nombres', label: 'Nombres', minWidth: 100, align: 'center'},
  {
    id: 'apellidos',
    label: 'Apellidos',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'fecha_nacimiento',
    label: 'Fecha de nacimiento',
    minWidth: 110,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'celular',
    label: 'Celular',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'correo',
    label: 'Correo',
    minWidth: 250,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'banco',
    label: 'Banco',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'numero_cci',
    label: 'Número de cuenta o CCI',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];