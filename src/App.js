import React, { createContext, useState } from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";
import { Routes, Route, Outlet } from "react-router-dom";
import HomeMore from "./ViewMore/HomeMore";
import ApiMore from "./ViewMore/ApiMore";
import MobileAppDevMore from "./ViewMore/MobileAppDevMore";
import ServicesMore from "./ViewMore/ServicesMore";
import WebsiteDesignMore from "./ViewMore/WebsiteDesignMore";
import New from "./sections/New";
// import { ToastContainer } from "react-toastify";
const changeContext = createContext();

const App = () => {
  const [locationState, setLocationState] = useState(true);

  const handleChange = (e) => {
    console.log("the value is ", e);
    setLocationState(e);
  };

  return (
    <>
      {/* <ToastContainer /> */}

      <div>
        <changeContext.Provider value={handleChange}>
          <Header locationVisible={locationState} />
          <Outlet />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/New" element={<New />}></Route>

            <Route path="/homemore" element={<HomeMore />}></Route>
            <Route path="/ApiMore" element={<ApiMore />}></Route>
            <Route
              path="/MobileAppDevMore"
              element={<MobileAppDevMore />}
            ></Route>
            <Route path="/ServicesMore" element={<ServicesMore />}></Route>
            <Route
              path="/WebsiteDesignMore"
              element={<WebsiteDesignMore />}
            ></Route>
          </Routes>
          <Footer />
        </changeContext.Provider>
      </div>
    </>
  );
};

export default App;
export { changeContext };
