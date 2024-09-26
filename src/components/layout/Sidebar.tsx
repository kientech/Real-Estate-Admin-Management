"use client";
import { sideBarLinks } from "@/constants/general.const";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[20%] bg-white px-6 py-4">
      {sideBarLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-y-2 gap-x-4 px-6 py-4 rounded-xl my-2 hover:bg-blue-50 ${
            pathname === link.path
              ? "bg-[#475BE8] hover:bg-[#475BE8] text-[#fff]"
              : "text-[#808191]"
          }`}
        >
          <span>{link.icon}</span>
          <span className={`font-semibold md:block hidden`}>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
