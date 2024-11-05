import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase/setup";
import { signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";

function Contact() {
  const [mobileNumber, setMobileNumber] = useState();
  const [flag, setFlag] = useState(true);
  const [OTP, setOTP] = useState();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [activityFlag, setActivityFlag] = useState(false);

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    desc: "",
    phoneNumber: "+91" + mobileNumber,
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleOnChange = (e) => {
    if (e.target.name == "phoneNumber") {
      hanldeMobileNumber(e);
    }
    if (e.target.name == "name") {
      if (e.target.value.length < 5) {
        setNameError(
          "Plase Enter Valid Name, Name should be of atleast 5 letters"
        );
      } else {
        setNameError("");
      }
    }
    if (e.target.name === "email") {
      if (validator.isEmail(e.target.value)) {
        setEmailError("");
        setFlag(false);
      } else {
        setEmailError("Please enter valid Email");
        setFlag(true);
        if (mobileNumber?.length < 10) {
          setFlag(true);
        }
      }
    }
    const { name, value } = e.target;
    setuserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitUserDetails = async () => {
    try {
      setActivityFlag(true);
      setFlag(true);
      console.log("User Details==>", {
        ...userData,
        phoneNumber: "+91" + userData.phoneNumber,
      });

      const payload = {
        ...userData,
        phoneNumber: "+91" + userData.phoneNumber,
      };
      console.log(payload);
      // const jsonUserData = await fetch(
      //   "http://localhost:3000/api/userContactDetails",
      //   {
      //     method: "post",
      //     headers: {
      //       "content-type": "application/json",
      //     },

      //     body: JSON.stringify(payload),
      //   }
      // );
      const jsonUserData = await fetch(
        "https://userdetailstwiliomongoosenodejsserver-hq90lb7s.b4a.run/api/userContactDetails",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const responseData = await jsonUserData.json();

      console.log("api result", responseData);

      if (responseData.success) {
        toast.success(responseData.message);
        setActivityFlag(false);
        setFlag(false);
        navigate("/");
      }
      if (!responseData.success) {
        toast.error(responseData.message);
        //navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyMobileNumber = async () => {
    try {
      const recaptch = new RecaptchaVerifier(auth, "recaptcha", {});
      const configuration = await signInWithPhoneNumber(
        auth,
        "+91" + mobileNumber,
        recaptch
      );
      console.log(mobileNumber);
      console.log(configuration);
      setUser(configuration);
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeMobileNumber = (e) => {
    if (e.target.value.length > 13) {
      alert(
        "Please try entering valid Mobile Number, Should not exceed 10 numbers",
        console.log(mobileNumber.length)
      );
      setPhoneError(
        "Please try entering valid Mobile Number, Should not exceed 10 numbers"
      );

      setFlag(true);
      //setMobileNumber(null);
    } else {
      setMobileNumber(e.target.value);
      setFlag(true);
    }
    if (e.target?.value.length == 10) {
      setPhoneError("");
      if (emailError?.length === 0) {
        setFlag(false);
        setEmailError("");
        setPhoneError("");
      }
    }
    if (e.target?.value.length < 10) {
      setPhoneError(
        "Please try entering valid Mobile Number, Should not exceed 10 numbers"
      );
    }
  };

  const handleOTP = (e) => {
    if (e.target.value.length > 6) {
    } else {
      setOTP(e.target.value);
    }
  };
  return (
    <section
      id="contact"
      className="w-full bg-slate-200 flex flex-col lg:flex-row gap-5  justify-center"
    >
      <div className="flex justify-center lg:items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 lg:m-1  gap-5 z-20">
        <div className="flex justify-center items-start flex-col gap-4 w-full">
          <h1 className="text-green-600 font-bold text-[18px] pt-5 lg:text-[25px]">
            Contact Information
          </h1>

          <div
            id="phone"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-green-400 p-2 rounded-full">
              <FaPhone />
            </span>
            <span className="text-sm lg:text-lg">+91 9333026364</span>
          </div>

          <div
            id="email"
            className="flex justify-center items-center gap-4 
             font-semibold text-gray-600"
          >
            <span className="bg-green-400 p-2 rounded-full text">
              <FaMailBulk />
            </span>
            <span className="text-sm lg:text-lg">
              admin@pgtechnoservices.com
            </span>
          </div>

          <div
            id="address"
            className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
          >
            <span className="bg-green-400 p-2 rounded-full">
              <FaMapMarkerAlt />
            </span>
            <span className="text-sm lg:text-lg">
              Bangalore,Karnataka,India-560040
            </span>
          </div>

          <div
            id="logos"
            className="flex justify-center 
            items-center gap-4 mx-2 mt-5"
          >
            <span className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaFacebook />
            </span>

            <span className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaInstagramSquare />
            </span>

            <span className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaTwitterSquare />
            </span>

            <span className="bg-green-500 rounded-full cursor-pointer hover:bg-green-600 text-2xl">
              <FaYoutubeSquare />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center  gap-2 w-full lg:py-10">
          <div className="flex flex-col w-full gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userData.name}
              onChange={handleOnChange}
              className={`px-4 py-4 border-2 rounded-lg text-[14px]   lg:text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800 ${
                userData.name?.length < 5
                  ? " border-red-500"
                  : " border-green-500"
              }`}
            ></input>
            <>
              {nameError && (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: "12px",
                  }}
                >
                  {nameError}
                </span>
              )}
            </>
          </div>

          <div className="flex flex-col w-full gap-2">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className={`px-4 py-4 border-2 border-green-500 rounded-lg text-[14px]   lg:text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800  ${
                userData.email?.length === 0
                  ? " border-red-500"
                  : " border-green-500"
              }`}
            ></input>
            <>
              {emailError && (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: "12px",
                  }}
                >
                  {emailError}
                </span>
              )}
            </>
          </div>

          <div className="flex flex-row w-fit">
            {/* <PhoneInput
              country={"in"}
              value={mobileNumber}
              onChange={(phone) => setMobileNumber({ phone })}
            /> */}
            {/* <PhoneInput
              country={"in"}
              className="w-full h-[35px]"
              placeholder="Enter 10 Digit Mobile Number"
              containerStyle={{ width: "600px" }}
            />
            <Button
              variant="contained"
              sx={{ marginLeft: "0px" }}
              className="bg-orange-500   w-[200px]"
            >
              Verify Mobile
            </Button> */}
          </div>
          {/* <div>
            <TextField
              variant="outlined"
              label="Enter OTP"
              className="w-full"
              size="medium"
            ></TextField>
          </div> */}

          <div className=" flex flex-col gap-2 w-full">
            <input
              type="number"
              placeholder="Enter 10 digit moible number"
              maxLength={10}
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleOnChange}
              className={`px-4 py-4 border-2 ${
                userData?.phoneNumber.length > 10
                  ? "border-red-600"
                  : "border-green-500"
              }  rounded-lg text-[14px]   lg:text-[18px] bg-slate-100 focus:outline-none w-full ${
                flag ? "focus:border-red-400" : "focus:border-green-800"
              } ${
                userData.phoneNumber?.length < 10
                  ? " border-red-500"
                  : " border-green-500"
              }`}
            ></input>
            <>
              {phoneError && (
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: "12px",
                  }}
                >
                  {phoneError}
                </span>
              )}
            </>
            {/* <button
              className="bg-orange-500 w-full"
              onClick={verifyMobileNumber}
            >
              Verify Mobile
            </button> */}
          </div>
          {/* <div id="recaptcha" className="mt-5"></div> */}
          {/* {otpRecieved && (
            <div className="flex flex-row w-full gap-2">
              <input
                maxLength={6}
                value={OTP}
                onChange={handleOTP}
                type="number"
                placeholder="Enter OTP"
                className="px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800"
              ></input>
              <button className="bg-orange-500 w-full">Verify OTP</button>
            </div>
          )} */}

          <textarea
            className="px-4 py-4 border-2 border-green-500 rounded-lg text-[14px]   lg:text-[18px] bg-slate-100 focus:outline-none w-full focus:border-green-800"
            cols={30}
            rows={5}
            name="desc"
            value={userData.desc}
            onChange={handleOnChange}
            placeholder="Enter your message, including your requiements related to technology services or corporate training"
          ></textarea>
          {mobileNumber?.length === 10 &&
          userData.name.length >= 5 &&
          emailError.length === 0 &&
          activityFlag === false ? (
            <>
              <button
                className="bg-green-700 text-white px-4 py-3 w-2/3 rounded-lg "
                disabled={false}
                onClick={submitUserDetails}
              >
                SUBMIT
              </button>
              {activityFlag && (
                <>
                  <div className="text-sm lg:text-xl text-green-700">
                    <Dots
                      className="text-sm lg:text-xl text-green-700"
                      size={25}
                    ></Dots>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <button
                className="bg-gray-400 text-white px-4 py-3 w-2/3 rounded-lg "
                disabled={true}
              >
                SUBMIT
              </button>
              {activityFlag && (
                <>
                  <div className="text-sm lg:text-xl text-green-700">
                    <Dots
                      className="text-sm lg:text-xl text-green-700"
                      size={25}
                    ></Dots>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
