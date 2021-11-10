import React, { useState } from "react";

export default function useProduct() {
  const [counter, setcounter] = useState(0);

  function increaseBy(value: number) {
    setcounter((prev) => Math.max(prev + value, 0));
  }

  return {
    counter,
    increaseBy,
  };
}
