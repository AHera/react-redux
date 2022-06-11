/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      max-width: 810px;
      margin: 0 auto;
    `}
  >
    {children}
  </div>
);
