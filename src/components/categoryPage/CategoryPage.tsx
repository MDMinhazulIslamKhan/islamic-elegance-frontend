"use client";
import AllProduct from "@/components/Products/ShowProduct";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { useDebounced } from "@/redux/hooks";
import { ConfigProvider, Empty, Slider } from "antd";
import { SliderMarks } from "antd/es/slider";
import React, { useEffect, useState } from "react";

const CategoryPage = ({ categoryName }: { categoryName: string }) => {
  const marks: SliderMarks = {
    0: "0",
    1000: "৳1000",
    3000: "৳3000",
    5000: "৳5000",
  };

  const query: Record<string, any> = {};
  const [pageNo, setPageNo] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const changeValue = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };
  query["limit"] = size;
  query["page"] = pageNo;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  query["category"] = categoryName;
  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 300,
  });
  const debouncedMaxPrice = useDebounced({
    searchQuery: maxPrice.toString(),
    delay: 300,
  });
  const debouncedMinPrice = useDebounced({
    searchQuery: minPrice.toString(),
    delay: 300,
  });

  if (!!debouncedMinPrice || !!debouncedMaxPrice) {
    query["lowestPrice"] = debouncedMinPrice;
    query["highestPrice"] = debouncedMaxPrice;
  }
  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetAllProductsQuery({
    ...query,
  });
  useEffect(() => {
    if (data) {
      const calculatedTotalPage = Math.ceil(
        data?.meta?.count / data?.meta?.limit
      );
      setTotalPage(calculatedTotalPage);
    }
  }, [data]);

  const renderPageButtons = () => {
    const buttons = [];
    const numButtons = Math.max(totalPage, 1);
    for (let page = 1; page <= numButtons; page++) {
      buttons.push(
        <button
          key={page}
          onClick={() => setPageNo(page)}
          className={`join-item btn btn-sm ${
            pageNo == page ? "btn-primary" : "btn-active"
          }`}
        >
          {page}
        </button>
      );
    }
    return buttons;
  };
  return (
    <div>
      <h1 className="text-primary my-5 font-bold text-3xl underline font-serif text-center">
        {categoryName}
      </h1>
      <div className="flex sm:flex-row flex-col justify-end sm:justify-center sm:items-center items-end mb-3 sm:mr-8">
        <div className="flex flex-col items-end w-full sm:mr-8">
          <p className="text-xs text-primary text-center w-full">Price Range</p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#105e38",
              },
            }}
          >
            <Slider
              onChange={changeValue}
              max={5000}
              className="sm:w-full w-5/6 text-primary"
              range
              marks={marks}
              defaultValue={[0, 5000]}
            />
          </ConfigProvider>
        </div>
        <select
          className="select select-primary select-sm ml-3 w-40 sm:w-30 mb-2"
          onChange={(e) => {
            setSortBy("price");
            setSortOrder(e.target.value);
          }}
        >
          <option disabled selected>
            Sort By
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="input input-primary input-sm ml-3 w-40 mb-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {data?.data?.length !== 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-5 gap-x-3 lg:gap-x-5 gap-y-8">
          {isLoading && (
            <span className="loading loading-spinner text-secondary col-span-3 mx-auto"></span>
          )}
          {data?.data?.map((product: any) => (
            <AllProduct key={product?._id} product={product} />
          ))}
        </div>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ margin: "50px auto" }}
        />
      )}
      {data?.data?.length != 0 && (
        <div className="mt-10 w-full flex justify-center mb-10">
          <div>
            <span className="text-primary font-semibold">Page No: </span>
            <div className="join">{renderPageButtons()}</div>
          </div>
          <div className="ml-5">
            <select
              className="select select-primary select-sm ml-3 w-30"
              onChange={(e) => {
                setSize(+e.target.value);
                setPageNo(1);
              }}
            >
              <option value="5 ">5</option>
              <option selected value="10">
                10
              </option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
