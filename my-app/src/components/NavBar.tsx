"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AuthContext } from "../app/layout";
import { useContext } from "react";

const NavBar = () => {
  const pathname = usePathname();

  const { authState, setAuthState } = useContext(AuthContext);
  console.log(authState);
  

  console.log("nav bar authenticated?", authState.status)

  return (
    <>
      {authState.username && <h2>{authState.username}</h2>}
      <div className="flex gap-2 justify-center mt-3">
        <Link
          className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
        rounded-md py-3 px-5 hover:bg-gray-400 font-semibold
        hover:text-white ${pathname == "/" ? "underline" : ""}`}
          href={"/"}
        >
          HOME
        </Link>
        <Link
          className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/createpost" ? "underline" : ""
          }`}
          href={authState.status ? "/createpost" : "login"}
        >
          CREATE POST
        </Link>
        {!authState.status && (
          <Link
            className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/login" ? "underline" : ""
          }`}
            href={"/login"}
          >
            LOGIN
          </Link>
        )}
        {!authState.status && (
          <Link
            className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/registration" ? "underline" : ""
          } `}
            href={"/registration"}
          >
            REGISTER
          </Link>
        )}
        {authState.status && (
          <div
            className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 px-5 cursor-pointer hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/login" ? "underline" : ""
          }`}
            onClick={() => {
              localStorage.removeItem("accessToken");
              setAuthState({ username: "", id: 0, status: false });
            }}
          >
            LOGOUT
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
