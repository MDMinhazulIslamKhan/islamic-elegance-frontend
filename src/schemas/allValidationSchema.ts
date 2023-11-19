import * as yup from "yup";

export const loginSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(11, "Must be at least 11 characters")
    .max(11, "Can't exceed 11 characters")
    // .matches(/^(\+88)?01[3456789]\d{8}$/, "Invalid phone number")
    .matches(/^01[3456789]\d{8}$/, "Invalid phone number")
    .required("Phone Number is required"),
  password: yup.string().min(3).max(15).required("Password is required"),
});

export const passwordUpdateSchema = yup.object().shape({
  oldPassword: yup.string().min(3).max(15).required("Password is required"),
  newPassword: yup.string().min(3).max(15).required("Password is required"),
});

export const registrationSchema = yup.object().shape({
  email: yup.string().email().optional(),
  password: yup.string().min(3).max(15).required("Password is required"),
  fullName: yup.string().min(6).max(32).required("Name is required"),
  phoneNumber: yup
    .string()
    .min(11, "Must be at least 11 characters")
    .max(11, "Can't exceed 11 characters")
    .matches(/^01[3456789]\d{8}$/, "Invalid phone number")
    .required("Phone Number is required"),
});

export const updateProfileSchema = yup.object().shape({
  fullName: yup.string().min(6).max(32).required("Name is required"),
  email: yup.string().email().optional(),
});

export const createProductSchema = yup.object().shape({
  proId: yup.string().optional(),
  name: yup.string().required("Name is required"),
  category: yup.string().required("Category is required"),
  imgURL: yup.mixed().test("is-file", "Image is required", (value: any) => {
    return value && value.length > 0;
  }),
  price: yup.number().required("Price is required"),
  description: yup.string().min(6).required("Description is required"),
  facebookURL: yup.string().optional(),
  availability: yup.boolean().required("Availability is required"),
});
