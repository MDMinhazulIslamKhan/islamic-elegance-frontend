"use client";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import PassWordInput from "@/components/Forms/PasswordInput";
import { login } from "@/redux/features/userSlice";
import { loginSchema } from "@/schemas/allValidationSchema";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { RouterProtector } from "@/helpers/routerProtector/routerProtectorWithRole";

type FormValues = {
  phoneNumber: string;
  password: string;
};
const Login = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation(undefined);
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        message.success("Login successful");
        dispatch(login());
        router.back();
      } else {
        message.error(res.message);
      }
    } catch (error) {
      window.alert("Something went wrong, try again later...");
    }
  };
  return (
    <div className="flex justify-center items-center sm:mt-40 sm:my-0 my-5">
      <div className="w-full max-w-sm shadow-2xl rounded-xl pb-10">
        <div className="card-body">
          <h2 className="text-primary mt-2 mb-5 font-bold text-3xl font-serif text-center">
            Login
          </h2>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div className="form-control w-full max-w-xs">
              <FormInput
                name="phoneNumber"
                type="text"
                label="Phone Number"
                placeholder="admin - 01521438469"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <PassWordInput
                name="password"
                placeholder="admin - 123456"
                label="Password"
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-white font-bold"
              >
                Login
              </button>
            </div>
          </Form>
          <p className="text-xs text-center">
            New to Islamic Elegance?{"  "}
            <Link
              className="text-secondary inline-block hover:text-primary"
              href="/registration"
            >
              Create New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const LoginWithProtector = () => (
  <RouterProtector allowedRoles={null}>
    <Login />
  </RouterProtector>
);

export default LoginWithProtector;
