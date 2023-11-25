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
    getAllProducts: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PRODUCT_URL}`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.product],
    }),
    getSingleProduct: build.query({
      query: (id: string) => ({
        url: `${PRODUCT_URL}/single-product/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = productApi;
