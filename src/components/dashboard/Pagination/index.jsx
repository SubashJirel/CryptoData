import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationControlled({
  page,
  handlePageChange,
  count,
}) {
  return (
    <div className="flex items-center justify-center m-12">
      <Pagination
        sx={{
          '& .MuiPaginationItem-text': {
            color: 'var(--text-color)!important',
            border: '1px solid var(--grey)',
          },
          '& .MuiPaginationItem-text:hover': {
            backgroundColor: 'transparent !important',
          },
          '& .Mui-selected': {
            backgroundColor: 'var(--blue)',
            borderColor: 'var(--blue)',
          },
          '& .MuiPaginationItem-ellipsis': {
            border: 'none',
          },
        }}
        count={count} // Total page count based on filtered data
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
