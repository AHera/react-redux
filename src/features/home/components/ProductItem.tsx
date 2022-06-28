/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProductsInterface } from "../interfaces";

interface Props {
  product: ProductsInterface;
}

export const ProductItem = ({
  product: { title, description, thumbnail, price },
}: Props) => (
  <div>
    <img
      css={css`
        max-width: 228px;
      `}
      src={thumbnail}
      alt={title}
    />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{price}</p>
  </div>
);
