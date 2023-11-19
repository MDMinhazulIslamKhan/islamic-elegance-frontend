import { authKey } from "@/constants/storageKey";
import { removeUserInfo } from "@/services/auth.service";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const decodedToken = (
  token: string
): {
  id: string;
  phoneNumber: string;
  role: string;
} => {
  try {
    return jwtDecode(token);
  } catch (error) {
    removeUserInfo(authKey);
    location.reload();
    return { id: "", phoneNumber: "", role: "" };
  }
};
