import { ProductList } from "./components";

import { useDataProducts } from "./hooks";

export const HomeFeature = () => {
  const { products } = useDataProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};
