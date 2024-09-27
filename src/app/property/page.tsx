import { MainLayout } from "@/components/layout";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";

const PropertyPage = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-semibold text-2xl text-[#11142d]">Property List</h1>
        <button className="block py-4 px-6 rounded-lg bg-[#475BE8] text-white">
          + Add Property
        </button>
      </div>
      <div className="bg-white rounded-xl p-6 w-full">
        <div className="filter"></div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <PropertyItem key={item} />
          ))}
        </div>
        <div className="pagination flex items-center justify-between mt-6">
          <h1 className="text-[#808191] text-md">Showing 1 to 10 Propertys</h1>
          <div className="flex gap-x-2 items-center">
            <span className="p-4 rounded-lg text-xl">{"<"}</span>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <span className="p-4 text-md bg-white rounded-lg cursor-pointer">
                {item}
              </span>
            ))}
            <span className="p-4 rounded-lg text-xl">{">"}</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertyPage;
