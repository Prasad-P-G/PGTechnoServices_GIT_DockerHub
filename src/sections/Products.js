import React from "react";
import { productgrids } from "../exports";
import ProductGrid from "../components/ProductGrid";

const Products = () => {
  return (
    <section
      id="products"
      className="w-full bg-slate-100 flex-col lg:py-[20px] justify-center
      items-start h-fit px-5 py-2 "
    >
      <h1 className=" font-bold text-2xl lg:text-4xl text-blue-900 py-10 w-full bg-yellow-100 text-center">
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
