import { addToLocalStorage } from "@/services/cart.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AllProduct = ({ product }: { product: any }) => {
  const router = useRouter();

  return (
    <div className="min-h-[500px] sm:mx-autos sm:w-72 md:w-full bg-green-50 shadow-xl rounded-xl hover:scale-105 duration-700">
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
              addToLocalStorage(product?._id, product?.name, 1);
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
  );
};

export default AllProduct;
