/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../redux/hooks";
import { selectProducts } from "../../../redux/slices/cardSlice";

export const Cart = () => {
  const products = useAppSelector(selectProducts);

  return (
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
        {products.map(({ id, title, price, count }) => (
          <div
            key={id}
            css={css`
              padding: 10px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            `}
          >
            <span
              css={css`
                width: 150px;
              `}
            >
              {title}
            </span>
            <span>{price}$</span>
            <span>-</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
