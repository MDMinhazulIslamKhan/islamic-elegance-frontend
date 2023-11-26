"use client";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { addToLocalStorage } from "@/services/cart.service";
import { Spin, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TaskDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { data, isLoading } = useGetSingleProductQuery(params.id);
  if (data?.statusCode == 500) {
    message.error(data.message);
    router.push("/");
  }
  return (
    <>
      {isLoading ? (
        <Spin className="w-full mt-20" />
      ) : (
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
            <div className="grid justify-items-center mt-10">
              <button
                onClick={() => {
                  addToLocalStorage(params.id, data?.data?.name, 1);
                  router.push("/cart");
                }}
                className="btn bg-secondary px-7 font-bold hover:bg-primary hover:text-white text-primary rounded-xl w-full sm:w-1/2 lg:w-1/4 mt-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetails;
