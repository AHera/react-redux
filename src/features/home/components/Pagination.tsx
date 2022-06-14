/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import PaginationMUI from "@mui/material/Pagination";
import { PaginationInterface } from "../interfaces";

interface Props {
  pagination: PaginationInterface;
  onChangePagination: (e: any, value: number) => void;
}

export const Pagination = ({
  onChangePagination,
  pagination: { total, page },
}: Props) => {
  return (
    <PaginationMUI
      css={css`
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      `}
      onChange={onChangePagination}
      page={page}
      count={total}
      variant="outlined"
      color="primary"
    />
  );
};
