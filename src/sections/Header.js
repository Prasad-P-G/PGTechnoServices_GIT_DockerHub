import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FcPositiveDynamic } from "react-icons/fc";
import { geoCodingApi } from "../utils/geocodeKey";
import { FaLocationDot } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [iconToggle, seticonToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [visitorCount, setVisitorCount] = useState("");
  //const [isItemActive, setIsActive] = useState(true);

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

  const handleLiClick = (e) => {
    console.log("you clicked", e);
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full bg-black text-white flex justify-between items-center px-8 py-2 sticky top-0 z-40">
        <div className="flex flex-col gap-2">
          <NavLink to="/">
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              BPG TECHNO DOMAIN
            </h1>
          </NavLink>
          <div className="flex flex-row w-full items-center justify-center gap-2">
            <span className="text-green-600">
              <FaLocationDot />
            </span>
            {currentLocation ? (
              <span className="font-semibold text-orange-500  text-xs lg:text-sm">
                <h1>{currentLocation}</h1>
              </span>
            ) : (
              <span className="font-semibold text-red-500  text-xs lg:text-sm">
                <h1>
                  Location is Disabled, Plase Allow to access your location
                </h1>
              </span>
            )}
          </div>
          <div className="px-5">
            <span className="font-semibold text-yellow-500  text-xs lg:text-sm">
              <h1>Total visitors : {visitorCount}</h1>
            </span>
          </div>
        </div>

        {/* <div>
          <span className="font-semibold text-yellow-500-500  text-xs lg:text-sm">
            <h1> {visitorCount}</h1>
          </span>
        </div> */}
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
                onClick={handleLiClick("home")}
                to="/"
                className="text-lg text-slate-100 cursor-pointer rounded-md px-5 py-2 hover:bg-green-600 hover:text-white
               active:text-blue-900"
              >
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
                onClick={handleLiClick("services")}
                to="/services"
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
          </ul>
        </div>
        <div className="flex lg:hidden flex-col">
          {iconToggle ? (
            <MdClose
              className="text-2xl cursor-pointer"
              onClick={() => {
                toggleMenu();
                toggleIcon();
              }}
            />
          ) : (
            <RiMenu4Line
              className="text-2xl cursor-pointer"
              onClick={() => {
                toggleMenu();
                toggleIcon();
              }}
            />
          )}

          {toggle && (
            <div
              id="mob-menu"
              className={`bg-green-500 text-white p-4 absolute top-20 right-0 w-1/2 ${menuClass}`}
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
                  {/* <a
                  href="#contact"
                  onClick={() => {
                    toggleMenu();
                    toggleIcon();
                  }}
                >
                  Contact
                </a> */}
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
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
