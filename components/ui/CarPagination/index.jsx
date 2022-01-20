import React from 'react';
import MuiPaginationLink from '../MuiPaginationLink';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useRouter } from 'next/router';
import { getAsString } from '../../../utils/common';

const CarPagination = ({ totalPages }) => {
  const { query } = useRouter();
  return (
    <Pagination
      page={parseInt(getAsString(query.page) || '1')}
      count={totalPages}
      renderItem={(item) => (
        <PaginationItem
          component={MuiPaginationLink}
          query={query}
          item={item}
          {...item}
        />
      )}
    />
  );
};

export default CarPagination;
