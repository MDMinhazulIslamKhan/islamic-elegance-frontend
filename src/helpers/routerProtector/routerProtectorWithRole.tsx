import { useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface WithAuthRoleProps {
  allowedRoles: string[] | null;
  children: ReactNode;
}

export const RouterProtector: React.FC<WithAuthRoleProps> = ({
  allowedRoles,
  children,
}: WithAuthRoleProps) => {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => state.loginInfo);
  if (!allowedRoles && isLogin) {
    router.push("/");
  }
  const { role } = getUserInfo() as any;

  useEffect(() => {
    if (allowedRoles && !isLogin) {
      router.push("/login");
    } else if (allowedRoles && !allowedRoles.includes(role)) {
      router.push("/");
    }
  }, [allowedRoles, isLogin, role, router]);

  return children;
};
