import SideBar from "@/components/layout/Sidebar";
import { RouterProtector } from "@/helpers/routerProtector/routerProtectorWithRole";
import { Layout } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RouterProtector allowedRoles={["admin", "superAdmin"]}>
      <Layout hasSider>
        <SideBar />
        <div className="w-full md:-mr-10 -mr-5 bg-white">{children}</div>
      </Layout>
    </RouterProtector>
  );
};

export default DashboardLayout;
