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
            style={{color: 'white'}}
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
                  {row.rows.map((customerRow) => (
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
    rows: PropTypes.array.isRequired,
  }).isRequired,
};

export default function HorizontalTable({ row, rows }) {
  return (
    <TableContainer component={Paper} className='mt-10'>
      <Table aria-label="collapsible table">
        <TableBody>
        <Row key={row.label} row={{ ...row, rows: rows }} />
          {/* {row.value && rows.map((rowData) => (
            <Row key={rowData.label} row={{ ...row, rows: rows }} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
