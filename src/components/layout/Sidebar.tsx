"use client";

import { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import {
  CheckCircleOutlined,
  ScheduleOutlined,
  ClockCircleOutlined,
  PlusCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;

  const sidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link href="/dashboard" className="">
          Pending orders
        </Link>
      ),
      key: "0",
      icon: <ClockCircleOutlined />,
    },
    {
      label: (
        <Link href="/dashboard" className="">
          Accepted orders
        </Link>
      ),
      key: "1",
      icon: <CheckCircleOutlined />,
    },
    {
      label: (
        <Link href="/dashboard" className="">
          Delivered orders
        </Link>
      ),
      key: "2",
      icon: <ScheduleOutlined />,
    },
    {
      label: (
        <Link href="/dashboard/add-product" className="">
          Add product
        </Link>
      ),
      key: "3",
      icon: <PlusCircleOutlined />,
    },
  ];

  return (
    <Sider
      width={200}
      collapsed={collapsed}
      className="sm:-ml-10 -ml-5 overflow-auto min-h-screen sticky bottom-0 bg-neutral"
    >
      <div className="text-primary font-semibold text-center mt-3 mb-2">
        ADMIN
      </div>

      <div className="relative max-h-screen min-h-[70vh]">
        <Menu
          className="bg-neutral"
          defaultSelectedKeys={["0"]}
          mode="vertical"
          items={sidebarItems}
        />
        <div
          className="text-center font-bold text-white bg-teal-800 py-3 absolute bottom-0 left-0 right-0
          
          "
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
