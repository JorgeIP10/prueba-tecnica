import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const customerData = [
  { label: 'DNI', value: '123' },
  { label: 'Nombres', value: 'Ejemplo 1' },
  { label: 'Apellidos', value: 'Ejemplo 2' },
  { label: 'Fecha de nacimiento', value: 'Ejemplo 3' },
  { label: 'Celular', value: 'Ejemplo 4' },
  { label: 'Correo', value: 'Ejemplo 5' },
  { label: 'Banco', value: 'Ejemplo 6' },
  { label: 'Número de cuenta o CCI', value: 'Ejemplo 7' },
];

const rows = [
  { label: 'Ver cliente', value: 'Cliente encontrado' },
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', backgroundColor: '#0d47a1', color: 'whitesmoke' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{color: '#64b5f6'}}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.label}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: '#202020', color: 'whitesmoke' }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {row.value}
              </Typography>
              <Table size="small" aria-label="customer details">
                <TableBody>
                  {customerData.map((customerRow) => (
                    <TableRow style={{backgroundColor: '#303030'}} key={customerRow.label}>
                      <TableCell style={{color: 'whitesmoke'}}>{customerRow.label}</TableCell>
                      <TableCell style={{color: 'whitesmoke'}} align="left">{customerRow.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} className='mt-10'>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.label} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
