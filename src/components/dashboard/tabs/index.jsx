import * as React from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../grid';
import List from '../list';

export default function TabsComponent({ data }) {
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
  const styleList = {};
  console.log('tabsComponent data props>>>', data);
  return (
    <TabContext value={value}>
      <div style={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
      </div>
      <TabPanel value="grid">
        <div className="flex justify-center items-start flex-wrap w-full gap-4">
          {data && data.map((coin, i) => <Grid coin={coin} key={i} />)}
        </div>
      </TabPanel>
      <TabPanel sx={styleList} value="list">
        <table className="mx-auto w-full sm:w-11/12 block">
          {data && data.map((coin, i) => <List coin={coin} key={i} />)}
        </table>
      </TabPanel>
    </TabContext>
  );
}
