import React, { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export default function useProduct({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  function increaseBy(value: number) {
    const maxCount = initialValues?.maxCount || null;
    if (maxCount && counter + value > maxCount) {
      return;
    }

    const newValue = Math.max(counter + value, 0);
    setcounter(newValue);
    onChange && onChange({ product, count: newValue });
  }

  function reset() {
    setcounter(initialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setcounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
}
