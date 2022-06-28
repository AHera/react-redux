/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProductsInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";

interface Props {
  products: ProductsInterface[];
}

export const ProductList = ({ products }: Props) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {products.map((product) => (
      <div
        key={product.id}
        css={css`
          border: 1px solid;
          margin: 10px;
          padding: 10px;
          width: 250px;
        `}
      >
        <ProductItem product={product} />
      </div>
    ))}
  </div>
);
