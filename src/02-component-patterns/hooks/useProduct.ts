import React, { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export default function useProduct({
  product,
  onChange,
  value = 0,
}: useProductArgs) {
  const [counter, setcounter] = useState(value);

  function increaseBy(value: number) {
    const newValue = Math.max(counter + value, 0);
    setcounter(newValue);
    onChange && onChange({ product, count: newValue });
  }

  useEffect(() => {
    setcounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
}
