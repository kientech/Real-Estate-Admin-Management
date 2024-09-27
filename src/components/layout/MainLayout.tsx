import React from "react";
import { Manrope } from "next/font/google";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <Topbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="p-6 w-[80%] bg-[#f4f4f4]">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
