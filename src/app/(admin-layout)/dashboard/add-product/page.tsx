"use client";
import Form from "@/components/Forms/Form";
import FormImageInput from "@/components/Forms/FormImageInput";
import FormInput from "@/components/Forms/FormInput";
import FromSelectInput from "@/components/Forms/FromSelect";
import FormMultiSelectField, {
  SelectOptions,
} from "@/components/Forms/MultipleSelect";
import TextAreaInput from "@/components/Forms/TextArea";
import { availability, categoryOptions, sizeOptions } from "@/constants/golbal";
import { imageUploader } from "@/helpers/upload/uploadImage";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { createProductSchema } from "@/schemas/allValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  proId?: string;
  name: string;
  imgURL: string;
  price: number;
  shortDescription: string;
  description: string;
  size: string[];
  facebookURL?: string;
  availability?: boolean;
};

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation(undefined);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const image = data.imgURL[0];
    let imageData = null;
    if (image) {
      imageData = await imageUploader(image);
    }
    if (imageData?.success === "false") {
      message.error("Image upload failed!");
      return;
    }
    data.imgURL = imageData?.data?.display_url;
    try {
      const res = await createProduct({ ...data }).unwrap();
      if (res?.statusCode == 200) {
        message.success(res?.message);
        router.push("/");
      } else {
        message.error(res.message);
      }
    } catch (error) {
      window.alert("Something went wrong, please try again later...");
    }
  };
  return (
    <div>
      <h1 className="text-center my-5 text-2xl font-bold text-primary font-serif">
        Add Product
      </h1>
      <div className="bg-white mx-5 rounded-lg p-5 min-h-screen flex justify-center">
        <div className="min-w-[50%] lg:ml-14">
          <Form
            submitHandler={onSubmit}
            resolver={yupResolver(createProductSchema)}
          >
            <div className="form-control max-w-md">
              <FormInput
                name="proId"
                type="text"
                label="Product Id"
                size="md"
              />
            </div>
            <div className="form-control max-w-md">
              <FormInput
                name="name"
                type="text"
                label="Product Name"
                size="md"
                required
              />
            </div>
            <div className="form-control max-w-md">
              <FromSelectInput
                options={categoryOptions}
                name="category"
                label="Product Category"
                size="md"
                required
              />
            </div>
            <div className="form-control max-w-md">
              <FormInput
                name="price"
                type="number"
                min={0}
                label="Product Price"
                size="md"
                required
              />
            </div>
            <div className="form-control max-w-md">
              <FormImageInput name="imgURL" label="Image" size="md" required />
            </div>
            <div className="form-control max-w-md">
              <FormMultiSelectField
                options={sizeOptions as SelectOptions[]}
                name="size"
                size="md"
                label="Available Size"
              />
            </div>
            <div className="form-control max-w-md">
              <TextAreaInput
                name="shortDescription"
                label="Short Description"
                required
              />
            </div>
            <div className="form-control max-w-md">
              <TextAreaInput name="description" label="Description" required />
            </div>
            <div className="form-control max-w-md">
              <FormInput
                name="facebookURL"
                type="text"
                label="Facebook Link"
                size="md"
              />
            </div>
            <div className="form-control max-w-md">
              <FromSelectInput
                options={availability}
                name="availability"
                label="Availability"
                size="md"
                required
              />
            </div>
            <div className="form-control max-w-md mt-6">
              <button
                type="submit"
                className="btn btn-primary max-w-md text-white font-bold"
              >
                Add Product
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
