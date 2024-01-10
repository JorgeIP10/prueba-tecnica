import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useCustomers } from '../contexts/CustomerContext';

const columns = [
  { id: 'dni', label: 'DNI', minWidth: 170, align: 'center'},
  { id: 'names', label: 'Nombres', minWidth: 100, align: 'center'},
  {
    id: 'surnames',
    label: 'Apellidos',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'birthDate',
    label: 'Fecha de nacimiento',
    minWidth: 110,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'cellPhone',
    label: 'Celular',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Correo',
    minWidth: 250,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'bank',
    label: 'Banco',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'numberCCI',
    label: 'Número de cuenta o CCI',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {customers} = useCustomers();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table" style={{color: 'whitesmoke'}}>
          <TableHead >
            <TableRow style={{color: 'whitesmoke'}} >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, background: 'gray', color: 'whitesmoke' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className='bg-zinc-400'>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.dni}>
                    {columns.map((column) => {
                      console.log(row[column.id])
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{background: 'gray', color: 'whitesmoke'}}
      />
    </Paper>
  );
}