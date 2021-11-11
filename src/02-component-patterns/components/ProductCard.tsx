import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import React, { createContext, ReactElement } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";
import { ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export default function ProductCard({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: React.PropsWithChildren<Props>) {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}
