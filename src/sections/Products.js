import React from "react";
import { productgrids } from "../exports";
import ProductGrid from "../components/ProductGrid";

const Products = () => {
  return (
    <section
      id="products"
      className="w-full bg-slate-100 flex flex-col p-5 lg:p-10  justify-center  
        h-fit px-5 py-2 "
    >
      <h1 className=" flex font-bold text-2xl lg:text-4xl px-5 rounded-lg text-white p-2 lg:p-3 w-fit  bg-[#6AA9E1]  text-center">
        Our Product Experiements
      </h1>

      {/* <div className="grid lg:grid-cols-5 items-center w-fit"> */}
      <div>
        {productgrids.map((grid) => {
          return (
            <div
              key={grid.label}
              className="flex flex-col lg:flex-row  justify-center w-full gap-3 py-2"
            >
              <ProductGrid {...grid} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
