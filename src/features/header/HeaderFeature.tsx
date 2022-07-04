/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Cart, MenuNavigation } from "./components";

export const HeaderFeature = () => (
  <header
    css={css`
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    <div
      css={css`
        max-width: 165px;
        margin-left: 20px;
      `}
    >
      <MenuNavigation />
    </div>
    <Cart />
  </header>
);
