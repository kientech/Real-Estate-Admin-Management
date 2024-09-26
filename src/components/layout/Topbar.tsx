"use client";

import Link from "next/link";
import React, { useState } from "react";
import Input from "../Input/Input";
import { IconNotifications, IconSearch } from "../icons";

const Topbar: React.FC = () => {
  // State để quản lý trạng thái hiển thị của dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Hàm để toggle trạng thái của dropdown
  const handleUserClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[70px] flex justify-between items-center bg-[#fcfcfc] relative">
      <div className="flex items-center pl-6">
        <Link href="/">
          <img src="/logo.svg" alt="Yariga" />
        </Link>
        <Input
          icon={<IconSearch />}
          placeholder="Enter search ..."
          className="bg-[#f4f4f4] w-[405px] ml-20"
        />
      </div>
      <div className="flex items-center gap-10 pr-6">
        <IconNotifications />
        <div className="flex items-center gap-2 relative">
          {/* Bấm vào ảnh user sẽ toggle dropdown */}
          <img
            src="https://cdn.dribbble.com/userupload/14343695/file/original-81fbf310d7ed4ef94685ea05ee30117e.png?resize=1504x1128"
            alt=""
            className="w-12 h-12 object-cover rounded-full cursor-pointer"
            onClick={handleUserClick}
          />
          <div>
            <h1 className="font-semibold text-md text-[#11142d]">
              Hawkins Maru
            </h1>
            <span className="text-sm text-[#808191]">Company Manager</span>
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform scale-95 origin-top-right">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
