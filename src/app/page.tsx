"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { addToLocalStorage } from "@/services/cart.service";
import { Carousel, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  const contentStyle: React.CSSProperties = {
    lineHeight: "160px",
    textAlign: "center",
  };
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  return (
    <div className="mb-20">
      <div className="flex justify-around">
        <div className="sm:w-1/2 w-full">
          <Carousel autoplay className="my-5 sm:pr-5">
            <div>
              <Image
                alt="banner"
                src="/fullSleeveBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/hoodieBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/hoodieBanner1.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/attarBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/honeyNutBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/attarBanner1.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/honeyNutBanner (2).jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/hoodieBanner2.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
          </Carousel>
        </div>
        <div className="w-1/2 hidden sm:block">
          <Carousel autoplay className="my-5 sm:pl-5">
            <div>
              <Image
                alt="banner"
                src="/honeyNutBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/attarBanner1.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/honeyNutBanner (2).jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/hoodieBanner2.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/fullSleeveBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/hoodieBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/hoodieBanner1.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
            <div>
              <Image
                alt="banner"
                src="/attarBanner.jpg"
                style={contentStyle}
                className="h-64 mx-auto rounded-2xl"
                width={2000}
                height={2000}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <h1 className="text-primary my-5 font-bold text-3xl underline font-serif text-center">
        Our Products
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
        {isLoading && (
          <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
        )}
        {data?.data?.map((product: any) => (
          <div
            key={product?._id}
            className="min-h-[500px] sm:mx-autos sm:w-72 md:w-full bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700"
          >
            <div className="items-center pt-8 mx-5 pb-0 mb-0">
              <h2 className="font-bold text-xl text-center">{product?.name}</h2>
              <p className="font-bold text-center">
                <span className="text-primary">Price</span> ৳{product?.price}
              </p>
            </div>
            <figure className="px-4 h-72">
              <Image
                alt="banner"
                width={500}
                height={500}
                src={product?.imgURL}
                className="rounded-xl h-64 my-5"
              />
            </figure>
            <div className="pt-0 mx-2 items-center text-center sm:h-32 h-fit pb-10 relative mb-8">
              <p className="pb-4">
                {product?.shortDescription?.slice(0, 140)}
                {product?.shortDescription?.length > 140 && "..."}
              </p>
              <div className="flex justify-around w-full absolute bottom-0">
                <button
                  onClick={() => {
                    addToLocalStorage(product?._id, product?.name, "none");
                    router.push("/cart");
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Add to Cart
                </button>
                <Link
                  href={`/product/${product?._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
