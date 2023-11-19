"use client";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import PassWordInput from "@/components/Forms/PasswordInput";
import { login } from "@/redux/features/userSlice";
import { registrationSchema } from "@/schemas/allValidationSchema";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import {
  useUserLoginMutation,
  useUserRegistrationMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { RouterProtector } from "@/helpers/routerProtector/routerProtectorWithRole";

type FormValues = {
  phoneNumber: string;
  password: string;
};
const Registration = () => {
  const router = useRouter();
  const [userRegistration] = useUserRegistrationMutation(undefined);
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    if (!data.email) {
      delete data.email;
    }
    try {
      const res = await userRegistration({ ...data }).unwrap();
      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        message.success("Registration successful");
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
    <div className="flex justify-center items-center  sm:my-20 my-5">
      <div className="w-full max-w-sm shadow-2xl rounded-xl pb-10">
        <div className="card-body">
          <h2 className="text-primary mt-2 mb-5 font-bold text-3xl font-serif text-center">
            Registration
          </h2>
          <Form
            submitHandler={onSubmit}
            resolver={yupResolver(registrationSchema)}
          >
            <div className="form-control w-full max-w-xs">
              <FormInput
                name="fullName"
                type="text"
                label="Full Name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <FormInput
                name="phoneNumber"
                type="text"
                label="Phone Number"
                placeholder="Your Mobile Number"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <FormInput
                name="email"
                type="email"
                label="Email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <PassWordInput name="password" label="Password" />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-white font-bold"
              >
                Registration
              </button>
            </div>
          </Form>
          <p className="text-xs text-center">
            Already have an account?{"  "}
            <Link
              className="text-secondary inline-block hover:text-primary"
              href="/login"
            >
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const RegistrationWithProtector = () => (
  <RouterProtector allowedRoles={null}>
    <Registration />
  </RouterProtector>
);

export default RegistrationWithProtector;
