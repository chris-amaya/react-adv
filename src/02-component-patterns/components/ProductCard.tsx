import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import React, { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export default function ProductCard({
  product,
  children,
}: React.PropsWithChildren<ProductCardProps>) {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}
