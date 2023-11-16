"use client";
import { login } from "@/redux/features/userSlice";
import { storeUserInfo } from "@/services/auth.service";
import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-accent"
        onClick={() => {
          message.success("Login successful");
          storeUserInfo({ accessToken: "123" });
          dispatch(login());
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
