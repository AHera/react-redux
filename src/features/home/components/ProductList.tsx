/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProductsInterface } from "../interfaces";
import { ProductItem } from "./ProductItem";
import { useAppDispatch } from "../../../redux/hooks";
import { addProduct } from "../../../redux/slices/cardSlice";

interface Props {
  products: ProductsInterface[];
}

export const ProductList = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  const onAddProduct = (product: ProductsInterface) => {
    dispatch(addProduct(product));
  };

  return (
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
          <ProductItem product={product} onAddProduct={onAddProduct} />
        </div>
      ))}
    </div>
  );
};
