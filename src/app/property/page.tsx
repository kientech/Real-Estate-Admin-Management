import { MainLayout } from "@/components/layout";
import React from "react";

const PropertyPage = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-semibold text-2xl text-[#11142d]">
            Property List
          </h1>
          <button className="block py-4 px-6 rounded-lg bg-[#475BE8] text-white">
            + Add Property
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertyPage;
