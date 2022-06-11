/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuNavigation } from "./components";

export const HeaderFeature = () => (
  <header
    css={css`
      background: #000000;
    `}
  >
    <div
      css={css`
        max-width: 150px;
        margin: auto;
      `}
    >
      <MenuNavigation />
    </div>
  </header>
);
