import React from "react";
import SingupImg from "/assets/signup.svg";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-72px)] flex items-start justify-center font-poppins text-white">
        {/* Image */}
        <div className="relative w-1/2 h-full flex flex-col justify-center items-center p-14 bg-slate-950 text-white">
          <img src={SingupImg} alt="signup" className="scale-75"/>
          <h1 className="font-semibold text-5xl">Daily Dose Of Algo</h1>
          <h3 className="text-white opacity-65 text-2xl text-center mt-3">Master your algorithm with DailyDoseofAlgo’s quizes and algorithm lessons.</h3>
        </div>

        {/* Text container */}
        <div className="w-1/2 bg-[#1F1D1D] h-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col max-w-[380px] p-4 items-center">
            <h1 className="text-3xl font-semibold mb-5">Sign Up</h1>
              <div className="w-full mb-[10px]">
                <label htmlFor="username" className="text-white text-[14px] mb-[2px]">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full p-2 bg-transparent border-2 border-opacity-60 rounded-md border-white outline-none focus:outline-none text-[15px]"
                />
              </div>
              <div className="w-full mb-[10px]">
                <label htmlFor="email" className="text-white text-[14px] mb-[2px]">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 bg-transparent border-2 border-opacity-60 rounded-md border-white outline-none focus:outline-none text-[15px]"
                />
              </div>
              <div className="w-full mb-[10px]">
                <label htmlFor="[password]" className="text-white text-[14px] mb-[2px]">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 bg-transparent border-2 border-opacity-60 rounded-md border-white outline-none focus:outline-none text-[15px]"
                />
              </div>
              <div className="w-full mb-[10px]">
                <label htmlFor="confirmpassword" className="text-white text-[14px] mb-[2px]">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  className="w-full p-2 bg-transparent border-2 border-opacity-60 rounded-md border-white outline-none focus:outline-none text-[15px]"
                />
              </div>
             
            
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="h-4 mr-2" />
                <p className="text-sm">I agree to the Terms & Conditions</p>
              </div>
            </div>

            <div className="w-full my-4">
              <button className="w-full text-white my-2 font-semibold bg-[#6C63FF] rounded-md p-3 text-center flex items-center justify-center hover:bg-opacity-60 transition-colors duration-300">
                Sign Up
              </button>
            </div>

            <div className="w-full flex items-center justify-center relative py-1 mb-3">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-lg absolute bg-[#1F1D1D] px-2 top-1/2 transform -translate-y-1/2">
                OR
              </p>
            </div>
            <div className="w-full text-white my-2 bg-[#1F1D1D] border border-opacity-60  border-white rounded-md p-4 text-center flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 cursor-pointer">
              <img src="../assets/google_logo.png" className="h-6 mr-2" />
              Sign Up With Google
            </div>
            <div>
              <p className="text-white text-center mt-3">
                Already have an account?{" "}
                <NavLink to="/login" className="font-medium text-[#6C63FF]">
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
