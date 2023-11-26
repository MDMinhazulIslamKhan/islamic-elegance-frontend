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
import { getUserInfo } from "@/services/auth.service";
import { useAppSelector } from "@/redux/hooks";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { role } = getUserInfo() as any;
  const { isLogin } = useAppSelector((state) => state.loginInfo);

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
    {
      key: "4",
      type: "group",
      label: (
        <Link
          href="/attar"
          className="btn w-full btn-secondary text-primary btn-sm"
        >
          Attar
        </Link>
      ),
      className:
        "bg-neutral text-primary rounded-lg font-bold text-center mt-2",
    },
    {
      key: "3",
      type: "group",
      label: (
        <Link
          href="/food"
          className="btn w-full btn-secondary text-primary btn-sm"
        >
          Food
        </Link>
      ),
      className:
        "bg-neutral text-primary rounded-lg font-bold text-center mt-2",
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
        <div
          className="hidden sm:flex flex-row justify-center
         items-center gap-3 md:gap-10"
        >
          {isLogin && (role == "admin" || role == "superAdmin") && (
            <Link href="/dashboard">
              <p className="font-serif hover:text-black text-primary sm:text-md font-bold">
                Dashboard
              </p>
            </Link>
          )}
          <Dropdown arrow menu={{ items }}>
            <p className="font-serif hover:text-black text-primary sm:text-md font-bold">
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
          className={`fixed sm:hidden inset-y-0 right-0 z-50 top-20 h-40 rounded-bl-lg bg-neutral w-36 shadow-md transform overflow-y-auto transition-transform duration-500 ease-in-out ${
            toggle ? "overflow-hidden" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            {isLogin && (role == "admin" || role == "superAdmin") && (
              <Link href="/dashboard">
                <p className="btn btn-sm w-24 my-2 btn-secondary">Dashboard</p>
              </Link>
            )}
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
