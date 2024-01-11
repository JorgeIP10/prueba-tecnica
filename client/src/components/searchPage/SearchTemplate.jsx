import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SearchTemplate({searchByDNIComponent, searchByNameComponent}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', maxHeight: '800px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Buscar por DNI" {...a11yProps(0)} style={{color: 'white'}} />
          <Tab label="Buscar por nombre" {...a11yProps(1)} style={{color: 'white'}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {searchByDNIComponent}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {searchByNameComponent}
      </CustomTabPanel>
    </Box>
  );
}

SearchTemplate.propTypes = {
  searchByDNIComponent: PropTypes.node.isRequired,
  searchByNameComponent: PropTypes.node.isRequired,
};
