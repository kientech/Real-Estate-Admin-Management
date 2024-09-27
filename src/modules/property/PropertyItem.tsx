import { IconBed, IconLocation, IconSquare } from "@/components/icons";
import Image from "next/image";
import React from "react";

const PropertyItem = () => {
  return (
    <div className="flex gap-4 group items-center">
      {/* Image Container */}
      <Image
        src={
          "https://cdn.dribbble.com/userupload/11228031/file/original-8b0f048c4de869d54017e7565d7d28ce.png?resize=1504x1128"
        }
        alt="Home"
        width={200}
        height={125}
        className="rounded-xl"
      ></Image>

      {/* Information Section */}
      <div className="w-full">
        <span className="inline-block px-2 py-1 text-sm rounded-lg bg-[#DADEFA] text-[#475BE8] mb-3">
          $5700
        </span>
        <h1 className="text-[#11142d] text-md font-semibold">
          Metro Jayakarta Hotel & Spa
        </h1>

        <div className="flex items-center gap-x-2 mt-3">
          <IconLocation />
          <span className="text-sm text-[#808191]">North Carolina, USA</span>
        </div>

        <div className="flex items-center gap-x-4 mt-6">
          <div className="flex items-center gap-2">
            <IconBed />
            <h1 className="text-[#11142D] text-sm">4 Beds</h1>
          </div>

          <div className="flex items-center gap-2">
            <IconSquare />
            <h1 className="text-[#11142D] text-sm">18M</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
