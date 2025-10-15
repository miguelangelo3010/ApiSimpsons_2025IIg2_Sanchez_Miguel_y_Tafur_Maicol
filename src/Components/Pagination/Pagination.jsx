import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'

export default function BasicPagination({ count, page, onChange }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" marginTop={4}>
      <Pagination
        count={count}       
        page={page}        
        color="primary"
        onChange={onChange} 
      />
    </Stack>
  );
}
