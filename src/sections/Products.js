import React from "react";
import { productgrids } from "../exports";
import ProductGrid from "../components/ProductGrid";

const Products = () => {
  return (
    <section
      id="products"
      className="w-full bg-slate-100 flex-col lg:py-[100px] justify-center
      items-start h-fit px-5 py-7 "
    >
      <h1 className="text-green-600 font-bold text-3xl lg:text-6xl">
        Our Product Experiements
      </h1>

      <div className="grid lg:grid-cols-5 items-center w-fit">
        {productgrids.map((grid) => {
          return (
            <div key={grid.label} className="w-fit">
              <ProductGrid {...grid} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
