import CategoryPage from "@/components/categoryPage/CategoryPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Hoodie | Islamic Elegance",
  description:
    "Islamic Elegance online market. Generated by next app, developer Md. Minhazul Islam Khan",
  keywords: "Islamic Elegance, Online shop, market, Hoodie",
};
const Hoodies = () => {
  return <CategoryPage categoryName="Hoodie" />;
};

export default Hoodies;
