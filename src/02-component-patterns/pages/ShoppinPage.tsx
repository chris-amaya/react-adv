import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "../components/";

import "../styles/custom-styles.css";
import { products } from "../data/products";
// import ProductCard from "../components/ProductCard";

const product = products[0];

export default function ShoppinPage() {
  return (
    <div>
      <h1>Shopping Store</h1>

      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white"></ProductTitle>
              <ProductBottons className="custom-buttons"></ProductBottons>

              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
}
