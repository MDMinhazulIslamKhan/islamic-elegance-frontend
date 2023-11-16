"use client";
import { Dropdown, MenuProps } from "antd";
import Link from "next/link";
import Image from "next/image";
import DashboardItems from "./DashboardItems";
import {
  ShoppingCartOutlined,
  CloseOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "0",
      type: "group",
      label: (
        <Link
          href="/all-products"
          className="text-primary btn btn-secondary btn-sm"
        >
          All Products
        </Link>
      ),
      className: "bg-neutral text-primary rounded-lg font-bold text-center",
    },
    {
      key: "1",
      type: "group",
      label: "Winter Collection",
      className:
        "bg-neutral text-primary rounded-lg font-bold mt-2 text-center",
      children: [
        {
          key: "1-1",
          label: (
            <Link href="/hoodie">
              <button className="btn w-full btn-secondary text-primary btn-sm">
                Hoodie
              </button>
            </Link>
          ),
        },
        {
          key: "1-2",
          label: (
            <Link href="/jacket">
              <button className="btn w-full btn-secondary text-primary btn-sm">
                Jacket
              </button>
            </Link>
          ),
        },
      ],
    },
    {
      key: "2",
      type: "group",
      label: "Clothing",
      className:
        "bg-neutral text-primary rounded-lg font-bold mt-2 text-center",
      children: [
        {
          key: "2-1",
          label: (
            <Link href="/panjabi">
              <button className="btn w-full btn-secondary text-primary btn-sm">
                Panjabi
              </button>
            </Link>
          ),
        },
        {
          key: "2-2",
          label: (
            <Link href="/jersey">
              <button className="btn w-full btn-secondary text-primary btn-sm">
                jersey
              </button>
            </Link>
          ),
        },
      ],
    },
  ];

  return (
    <nav className="h-20 bg-secondary sm:px-10 px-6 w-full flex items-center py-5 z-10">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex no-underline items-center">
          <Image
            alt="logo"
            src="/logo.png"
            className="sm:h-14 sm:w-14 h-12 w-12"
            width={500}
            height={500}
          />
          <p className="font-serif text-primary mx-3 sm:text-lg font-extrabold">
            Islamic Elegance
          </p>
        </Link>
        <div className="hidden sm:flex flex-row items-center gap-4 md:gap-10">
          <Dropdown arrow menu={{ items }}>
            <p className="font-serif hover:text-black text-primary mx-3 sm:text-lg font-extrabold">
              Products
            </p>
          </Dropdown>
          <Link href="/cart">
            <ShoppingCartOutlined className="text-primary hover:text-black font-extrabold text-3xl" />
          </Link>
          <DashboardItems />
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className="text-primary sm:hidden font-extrabold text-2xl"
        >
          {toggle ? <CloseOutlined /> : <AlignRightOutlined />}
        </div>
        <div
          className={`fixed sm:hidden inset-y-0 right-0 z-50 top-20 h-1/5 rounded-bl-lg bg-neutral w-36 shadow-md transform overflow-y-auto transition-transform duration-500 ease-in-out ${
            toggle ? "overflow-hidden" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <Dropdown arrow menu={{ items }}>
              <button className="btn btn-sm w-24 my-2 btn-secondary">
                Products
              </button>
            </Dropdown>
            <Link href="/cart">
              <ShoppingCartOutlined className="btn btn-sm w-24 my-2 btn-secondary font-extrabold text-xl" />
            </Link>
            <DashboardItems />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
