import * as React from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabsComponent() {
  const [value, setValue] = React.useState('grid');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: 'var(--text-color)',
    '& .Mui-selected': {
      color: 'var(--blue) !important',
    },
    fontFamily: 'Inter,sans-serif',
    fontWeight: 600,
    textTransform: 'capitalize',
  };
  return (
    <TabContext value={value}>
      <div style={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
      </div>
      <TabPanel value="grid">Mapping for grids</TabPanel>
      <TabPanel value="list">mapping for list</TabPanel>
    </TabContext>
  );
}
