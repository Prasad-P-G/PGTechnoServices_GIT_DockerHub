import React from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      {/* <Testimonials /> */}

      <Footer />
    </div>
  );
};

export default App;
