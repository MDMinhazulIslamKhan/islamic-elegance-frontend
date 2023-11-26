"use client";
import AllProduct from "@/components/Products/ShowProduct";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  const contentStyle: React.CSSProperties = {
    lineHeight: "160px",
    textAlign: "center",
  };
  const { data, isLoading } = useGetAllProductsQuery({
    limit: 6,
  });
  const { data: hoodieData } = useGetAllProductsQuery({
    limit: 6,
    category: "Hoodie",
  });
  const { data: jacketData } = useGetAllProductsQuery({
    limit: 6,
    category: "Jacket",
  });
  const { data: jerseyData } = useGetAllProductsQuery({
    limit: 6,
    category: "Jersey",
  });
  const { data: attarData } = useGetAllProductsQuery({
    limit: 6,
    category: "Attar",
  });
  const { data: foodData } = useGetAllProductsQuery({
    limit: 6,
    category: "Food",
  });
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
          <AllProduct key={product?._id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link
          href="/all-products"
          className="btn bg-secondary py-3 px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
        >
          See All Products
        </Link>
      </div>
      {hoodieData?.data?.length != 0 && (
        <>
          <h1 className="text-primary mb-5 mt-16 font-bold text-3xl underline font-serif text-center">
            Hoodies
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
            {isLoading && (
              <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
            )}
            {hoodieData?.data?.map((product: any) => (
              <AllProduct key={product?._id} product={product} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/hoodie"
              className="btn bg-secondary py-3 px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
            >
              See All Hoodies
            </Link>
          </div>
        </>
      )}
      {foodData?.data?.length != 0 && (
        <>
          <h1 className="text-primary mb-5 mt-16 font-bold text-3xl underline font-serif text-center">
            Food Items
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
            {isLoading && (
              <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
            )}
            {foodData?.data?.map((product: any) => (
              <AllProduct key={product?._id} product={product} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/food"
              className="btn bg-secondary py-3 px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
            >
              See All Foods
            </Link>
          </div>
        </>
      )}
      {attarData?.data?.length != 0 && (
        <>
          <h1 className="text-primary mb-5 mt-16 font-bold text-3xl underline font-serif text-center">
            Attar
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
            {isLoading && (
              <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
            )}
            {attarData?.data?.map((product: any) => (
              <AllProduct key={product?._id} product={product} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/attar"
              className="btn bg-secondary py-3 px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
            >
              See All Attars
            </Link>
          </div>
        </>
      )}
      {jerseyData?.data?.length != 0 && (
        <>
          <h1 className="text-primary mb-5 mt-16 font-bold text-3xl underline font-serif text-center">
            Jersey
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
            {isLoading && (
              <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
            )}
            {jerseyData?.data?.map((product: any) => (
              <AllProduct key={product?._id} product={product} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/jersey"
              className="btn bg-secondary py-3 px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
            >
              See All Jersey
            </Link>
          </div>
        </>
      )}
      {jacketData?.data?.length != 0 && (
        <>
          <h1 className="text-primary mb-5 mt-16 font-bold text-3xl underline font-serif text-center">
            Jacket
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
            {isLoading && (
              <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
            )}
            {jacketData?.data?.map((product: any) => (
              <AllProduct key={product?._id} product={product} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/jacket"
              className="btn bg-secondary py-3 px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
            >
              See All Jackets
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
