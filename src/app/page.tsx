import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const Home = () => {
  const contentStyle: React.CSSProperties = {
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <>
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
            </div>{" "}
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
    </>
  );
};

export default Home;
