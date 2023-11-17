import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
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
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner (2).jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner2.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-primary mt-20 mb-5 font-bold text-3xl underline font-serif text-center">
        Cloth Collection
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner (2).jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner2.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-primary mt-20 mb-5 font-bold text-3xl underline font-serif text-center">
        Hoodie
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner (2).jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner2.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-primary mt-20 mb-5 font-bold text-3xl underline font-serif text-center">
        Jackets
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/honeyNutBanner (2).jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/hoodieBanner2.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/attarBanner1.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[500px] sm:w-72 md:w-80 bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
          <div className="items-center pt-8 mx-5 pb-0 mb-0">
            <h2 className="font-bold text-xl text-center">Chin asdasd a</h2>
            <p className="font-bold text-center">
              <span className="text-primary">Price</span> ৳500
            </p>
          </div>
          <figure className="px-4 h-72">
            <Image
              alt="banner"
              width={500}
              height={500}
              src="/fullSleeveBanner.jpg"
              className="rounded-xl h-64 my-5"
            />
          </figure>
          <div className="pt-0 mx-2 items-center text-center relative mb-16">
            <p className="pb-4">Lorem ipsum dolor sit amet conseumquam?</p>
            <div className="flex justify-around w-full absolute">
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <Link
                href={`/product/`}
                className="font-semibold hover:text-primary"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
