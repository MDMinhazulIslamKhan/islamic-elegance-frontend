import { baseApi } from "./api/baseApi";
import loginReducer from "../redux/features/userSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  loginInfo: loginReducer,
};
