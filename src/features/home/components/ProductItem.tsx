/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { ProductsInterface } from "../interfaces";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  product: ProductsInterface;
  onAddProduct: (product: ProductsInterface) => void;
}

export const ProductItem = ({ product, onAddProduct }: Props) => {
  const { title, description, thumbnail, price } = product;
  return (
    <div>
      <div
        css={css`
          min-height: 335px;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
        `}
      >
        <img
          css={css`
            max-width: 228px;
          `}
          src={thumbnail}
          alt={title}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h4>Price: {price}$</h4>
        <Button
          onClick={() => onAddProduct(product)}
          variant="contained"
          endIcon={<ShoppingCartIcon />}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
