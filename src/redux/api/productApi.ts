import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRODUCT_URL = "/product";

export const productApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.product],
    }),
  }),
});

export const { useCreateProductMutation } = productApi;
