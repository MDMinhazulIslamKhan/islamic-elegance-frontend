"use client";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TaskDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { data, isLoading } = useGetSingleProductQuery(params.id);
  if (data?.statusCode == 500) {
    message.error(data.message);
  }
  console.log(data?.data?.size);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 my-10">
      <div className="flex items-center flex-col sm:mt-28">
        <Image
          src={data?.data?.imgURL}
          width={800}
          height={800}
          alt={data?.data?.name}
          className="rounded-xl sm:h-96 h-80 sm:w-96 w-80"
        />
        <h3 className="hidden font-bold mt-4 sm:block text-center">
          {data?.data?.shortDescription}
        </h3>
      </div>
      <div className="col-span-2 sm:ml-5">
        <h1 className="text-center font-extrabold text-3xl text-primary mt-2 mb-4">
          {data?.data?.name}
        </h1>
        <p className="font-bold text-xl text-center mb-4">
          <span className="text-primary">Price</span> ${data?.data?.price}
        </p>
        <p className="whitespace-pre-line">{data?.data?.description}</p>
        {data?.data?.size?.length != 0 && (
          <>
            <p className="font-bold text-primary my-8 mb-4 inline-block">
              Size :
            </p>
            {data?.data?.size?.map((sz: string) => (
              <span
                key={sz}
                className="border p-3 mx-2 rounded-lg hover:bg-green-50 font-bold"
              >
                {sz}
              </span>
            ))}
          </>
        )}
        <form
          //   onSubmit={handleClick}
          className="grid justify-items-center mt-10"
        >
          <div className="flex justify-start items-center gap-5">
            <p className="font-bold">Quantity :</p>
            <input
              type="number"
              name="quantity"
              required
              placeholder="quantity"
              className="input input-primary input-xs w-20"
            />
          </div>
          <button
            type="submit"
            className="w-64 my-4 btn btn-outline btn-primary btn-xs"
          >
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
