import React, { useCallback, useContext, useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FcPositiveDynamic } from "react-icons/fc";
import { geoCodingApi } from "../utils/geocodeKey";
import { FaLocationDot } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/companyLogo/myCompanyLogo.jpg";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { changeContext } from "../App";

const Header = ({ locationVisible }) => {
  const [iconToggle, seticonToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [visitorCount, setVisitorCount] = useState("");
  //const [isItemActive, setIsActive] = useState(true);
  const [locationPanel, setLocationPanel] = useState(true);
  //let location = useLocation();
  // const changeContext = createContext();
  const handleChange = useContext(changeContext);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleIcon = () => {
    seticonToggle(!iconToggle);
  };
  useState(() => {
    setMenuClass(
      !toggle
        ? "transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform translate-y-full opacity-0"
    );
  }, [toggle]);

  // useEffect(() => {
  //   //console.log(location.pathname);
  //   if (location === "/") {
  //     setLocationPanel(true);
  //   } else {
  //     setLocationPanel(false);
  //   }
  // }, []);

  const locationPanelVisibility = () => {
    //setLocationPanel(locationVisible);
  };

  useEffect(() => {
    // handleChange(true);
    // setLocationPanel(!locationVisible);
    console.log(
      "service load called.. and locationVisible is ",
      locationVisible
    );
    //setLocationPanel(locationVisible);
  }, [locationVisible]);
  useEffect(() => {
    getCurrentLocation();
    postCurrentLocation();
  }, [currentLocation]);

  const postCurrentLocation = async () => {
    try {
      const jsonUserData = await fetch(
        "https://userdetailstwiliomongoosenodejsserver-hq90lb7s.b4a.run/api/userLocationDetails",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify({ location: currentLocation }),
        }
      );
      const responseData = await jsonUserData.json();

      if (responseData?.message?.no) {
        setVisitorCount(responseData.message.no);
      }

      console.log("api location result", responseData);
      console.log("No of visitors", responseData.message.no);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentAddress = async (latitude, longitude) => {
    console.log(latitude, longitude);

    const url =
      geoCodingApi.endPoint +
      "key=" +
      geoCodingApi.key +
      "&" +
      `q=${latitude},${longitude}&pretty=1`;

    console.log(url);

    const repsonse = await fetch(url);
    const currentAddress = await repsonse.json();
    setCurrentLocation(currentAddress.results[0]?.formatted);
    console.log(currentAddress.results[0]);
    console.log("My Current Location", currentAddress);
  };

  const userUserLocationStore = () => {
    //store currectLocatin of the visitor
  };

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          console.log(postion.coords);
          console.log(postion.coords.latitude, postion.coords.longitude);
          if (postion.coords) {
            const { latitude, longitude } = postion.coords;
            getCurrentAddress(latitude, longitude);
          } else {
            const { latitude, longitude } = {
              latitude: "15.441800",
              longitude: "75.016580",
            };

            getCurrentAddress(latitude, longitude);
          }
        },
        () => {
          console.log("Some error in fetching location");
        }
      );
    } else {
      setCurrentLocation(
        "Location is Disabled, Plase Allow to access your location"
      );
    }
  };

  // const handleChange = (e) => {
  //   console.log("the value is ", e);
  // };

  return (
    <>
      <ToastContainer />
      <section className="w-full bg-black text-white flex  justify-between items-center px-2 py-2 sticky top-0 z-40">
        <div className="flex flex-col lg:flex-row lg:items-center justify-start">
          <NavLink to="/" className="flex  w-[60%] lg:w-[20%]">
            <img
              src={logo}
              className=" p-2 rounded-3xl w-[80%] lg:w-[80%]"
            ></img>{" "}
          </NavLink>

          {/* <h1 className="text-2xl lg:text-3xl font-bold text-white">
              BPG TECHNO DOMAIN
            </h1> */}
          {locationVisible && (
            <div className="flex flex-col  justify-center gap-1">
              <div className="flex flex-row items-center gap-2">
                <span className="text-green-600 text-xl lg:text-3xl">
                  <FaLocationDot />
                </span>
                {currentLocation ? (
                  <span className="font-semibold text-orange-500  text-[10px] lg:text-[14px]">
                    <h1>{currentLocation}</h1>
                  </span>
                ) : (
                  <span className="font-semibold text-red-500  text-[10px] lg:text-[14px]">
                    <h1>
                      Location is Disabled, Plase Allow to access your location
                    </h1>
                  </span>
                )}
              </div>

              <span className="font-semibold text-yellow-500 p-1  text-[8px] lg:text-[12px]">
                <h1>Total visitors : {visitorCount}</h1>
              </span>
            </div>
          )}

          {/* <div className="px-1">
            <span className="font-semibold text-yellow-500  text-xs lg:text-sm">
              <h1>Total visitors : {visitorCount}</h1>
            </span>
          </div> */}
        </div>

        {/* <div>
          <span className="font-semibold text-yellow-500-500  text-xs lg:text-sm">
            <h1> {visitorCount}</h1>
          </span>
        </div> */}
        {/* <changeContext.Provider value={{ handleChange }}> */}
        <div className="hidden lg:flex justify-end items-center gap-2">
          <ul className="flex justify-center items-center gap-3">
            <li>
              {/* <a
              href="/"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Home
            </a> */}
              <NavLink
                to="/"
                className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white
               active:text-blue-900"
              >
                {/* {({ isActive }) => {
                 
                }} */}
                {({ isActive }) => (
                  <span
                    className={[
                      "cursor-pointer font-semibold hover:text-oirOrange",
                      isActive ? "bg-green-600 px-5 py-2" : "text-white",
                    ].join(" ")}
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              {/* <a
              href="#services"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Services
            </a> */}
              <NavLink
                to="/services"
                call={locationPanelVisibility}
                className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
              >
                {({ isActive }) => (
                  <span
                    className={[
                      "cursor-pointer font-semibold hover:text-oirOrange",
                      isActive ? "bg-green-600 px-5 py-2" : "text-white",
                    ].join(" ")}
                  >
                    Services
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              {/* <a
              href="#products"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Products
            </a> */}

              <NavLink
                to="/products"
                className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
              >
                {({ isActive }) => (
                  <span
                    className={[
                      "cursor-pointer font-semibold hover:text-oirOrange",
                      isActive ? "bg-green-600 px-5 py-2" : "text-white",
                    ].join(" ")}
                  >
                    Products
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              {/* <a
              href="#about"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              About
            </a> */}

              <NavLink
                to="/about"
                className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
              >
                {({ isActive }) => (
                  <span
                    className={[
                      "cursor-pointer font-semibold hover:text-oirOrange",
                      isActive ? "bg-green-600 px-5 py-2" : "text-white",
                    ].join(" ")}
                  >
                    About
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              {/* <a
              href="#contact"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              Contact
            </a> */}

              <NavLink
                to="/contact"
                className="text-lg text-slate-100 cursor-pointer rounded-md px-2 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
              >
                {({ isActive }) => (
                  <span
                    className={[
                      "cursor-pointer font-semibold hover:text-oirOrange",
                      isActive ? "bg-green-600 px-5 py-2" : "text-white",
                    ].join(" ")}
                  >
                    Contact
                  </span>
                )}
              </NavLink>
            </li>

            <li>
              {/* <a
              href="#about"
              className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white active:text-blue-900"
            >
              About
            </a> */}

              {/* New item */}
              <NavLink
                to="/New"
                className="text-sm  text-slate-100 cursor-pointer px-5 py-2 hover:text-white active:text-blue-900"
              >
                {({ isActive }) => (
                  <div className="flex flex-row gap-1 text-green-400">
                    <FaStar />
                    <span
                      className={[
                        "cursor-pointer font-semibold hover:text-oirOrange",
                        isActive
                          ? "bg-green-600 px-5 p-4  rounded-full text-white"
                          : "text-red-400",
                      ].join(" ")}
                    >
                      New
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex lg:hidden flex-col">
          {iconToggle ? (
            <div
              className="bg-red-600 rounded-full text-white cursor-pointer
            flex items-center justify-center"
            >
              <MdClose
                className="text-2xl cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  toggleIcon();
                }}
              />
            </div>
          ) : (
            <div
              className="bg-green-500 rounded-full cursor-pointer
             flex items-center justify-center"
            >
              {" "}
              <RiMenu4Line
                className="text-2xl cursor-pointer w-10 h-10 "
                onClick={() => {
                  toggleMenu();
                  toggleIcon();
                }}
              />
            </div>
          )}

          {toggle && (
            <div
              id="mob-menu"
              className={`bg-green-500 text-white p-4 absolute top-0 left-0 w-1/2 ${menuClass}`}
            >
              <ul className="flex flex-col justify-center  items-center">
                <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full text-center border-b justify-center py-3">
                  {/* <a href="/">Home</a> */}
                  <NavLink
                    to="/"
                    onClick={() => {
                      toggleMenu();
                      toggleIcon();
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full text-center border-b py-3">
                  {/* <a
                  href="#services"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  Services
                </a> */}
                  <NavLink
                    to="/services"
                    onClick={() => {
                      toggleMenu();
                      toggleIcon();
                    }}
                  >
                    {" "}
                    Services
                  </NavLink>
                </li>
                <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center border-b">
                  {/* <a
                  href="#products"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  Products
                </a> */}
                  <NavLink
                    to="/products"
                    onClick={() => {
                      toggleMenu();
                      toggleIcon();
                    }}
                  >
                    {" "}
                    Products
                  </NavLink>
                </li>
                <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center border-b">
                  {/* <a
                  href="#about"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  About
                </a> */}
                  <NavLink
                    to="/about"
                    onClick={() => {
                      toggleMenu();
                      toggleIcon();
                    }}
                  >
                    {" "}
                    About
                  </NavLink>
                </li>

                <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center border-b">
                  <NavLink
                    to="/contact"
                    onClick={() => {
                      toggleMenu();
                      toggleIcon();
                    }}
                  >
                    {" "}
                    Contact
                  </NavLink>
                </li>

                <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center">
                  <NavLink
                    to="/New"
                    onClick={() => {
                      toggleMenu();
                      toggleIcon();
                    }}
                  >
                    <div className="flex flex-row items-center justify-center gap-1 text-orange-600">
                      <FaStar />
                      New
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* </changeContext.Provider> */}
      </section>
    </>
  );
};

export default Header;
