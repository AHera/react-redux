/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MenuNavigation } from "./components";

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
    <div
      css={css`
        margin-right: 30px;
        width: 25px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        position: relative;
      `}
    >
      <ShoppingCartIcon
        css={css`
          color: #ffffff;
        `}
      />
      <div
        css={css`
          background: #ffffff;
          width: 300px;
          height: auto;
          border: 1px solid;
          position: absolute;
          top: 25px;
          right: -30px;
        `}
      >
        123
      </div>
    </div>
  </header>
);
