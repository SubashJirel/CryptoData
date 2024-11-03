import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search({ search, handleChange }) {
  return (
    <div className="w-4/5 flex justify-start items-center gap-4 mx-auto bg-backgroundClrCard p-3 rounded-full mb-6">
      <SearchIcon
        className="text-backgroundClrCard"
        style={{ fontSize: '1.2rem' }}
      />
      <input
        className="bg-backgroundClrCard text-textClr font-sans text-base border-none w-full focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
