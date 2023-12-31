import CategoryPage from "@/components/categoryPage/CategoryPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Attar | Islamic Elegance",
  description:
    "Islamic Elegance online market. Generated by next app, developer Md. Minhazul Islam Khan",
  keywords: "Islamic Elegance, Online shop, market, Attar",
};
const Attars = () => {
  return <CategoryPage categoryName="Attar" />;
};

export default Attars;
