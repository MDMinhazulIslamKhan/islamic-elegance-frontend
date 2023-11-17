import { Avatar, Dropdown, MenuProps, Space, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/userSlice";
import { useAppSelector } from "@/redux/hooks";

const DashboardItems = () => {
  const dispatch = useDispatch();
  const { isLogin } = useAppSelector((state) => state.loginInfo);

  const logoutUser = () => {
    removeUserInfo(authKey);
    message.success("Logout Successfully!!!");
    dispatch(logout());
  };

  let items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link href="/checkout">
          <button className="btn w-full btn-secondary text-primary btn-sm">
            Checkout
          </button>
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <Link href="/pending-orders">
          <button className="btn w-full btn-secondary text-primary  btn-sm">
            Pending order
          </button>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/delivered-orders">
          <button className="btn w-full btn-secondary text-primary  btn-sm">
            Delivered order
          </button>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <button
          onClick={() => logoutUser()}
          className="btn w-full btn-secondary text-primary  btn-sm"
        >
          Logout
        </button>
      ),
    },
  ];

  return (
    <>
      {isLogin ? (
        <Dropdown arrow menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      ) : (
        <Link href="/login">
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Link>
      )}
    </>
  );
};

export default DashboardItems;
