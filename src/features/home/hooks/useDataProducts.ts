import { useEffect, useState } from "react";
import { ProductsInterface } from "../interfaces";

export const useDataProducts = () => {
  const [products, setProducts] = useState([] as Array<ProductsInterface>);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return {
    products,
  };
};
