import React, { memo } from "react";
import { Pagination as SematicPagination } from "semantic-ui-react";

const Pagination = ({ totalPages = 1, activePage = 1, ...props }) => (
  <SematicPagination activePage={activePage} {...props} totalPages={totalPages} />
);

export default memo(Pagination);
