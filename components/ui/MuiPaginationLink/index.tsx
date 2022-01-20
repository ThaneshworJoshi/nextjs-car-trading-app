import Link from 'next/link';
import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import { PaginationRenderItemParams } from '@mui/material';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: NextParsedUrlQuery;
}

const MuiPaginationLink = forwardRef<HtmlHTMLAttributes, MaterialUiLinkProps>(
  ({ item, query, ...props }) => (
    <Link
      href={{ pathName: '/cars', query: { ...query, page: item.page } }}
      shallow
    >
      <a {...props}></a>
    </Link>
  )
);

export default MuiPaginationLink;
