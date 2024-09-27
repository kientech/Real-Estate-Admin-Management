import {
  IconCall,
  IconLocationFill,
  IconMail,
  IconProperty,
} from "@/components/icons";
import { MainLayout } from "@/components/layout";
import Image from "next/image";
import React from "react";

const AgentPage = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-semibold text-2xl text-[#11142d]">Agent</h1>
        <button className="block py-4 px-6 rounded-lg bg-[#475BE8] text-white">
          + Add Agent
        </button>
      </div>

      <div className="p-4 bg-white rounded-xl">
        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div>
              <div className="flex gap-x-4">
                <Image
                  src={
                    "https://cdn.dribbble.com/userupload/16468730/file/original-59a07ad09b276e90af8a84f0c8e154a3.png?resize=1504x1128"
                  }
                  alt="User"
                  width={250}
                  height={193}
                  objectFit="cover"
                  className="rounded-lg"
                ></Image>
                <div>
                  <h1 className="font-semibold text-xl text-[#11142D] mb-3">
                    Karen Eilla Boyette
                  </h1>
                  <span className="text-[#808191]">Real-Estate Agent</span>

                  <div className="flex items-center justify-between gap-x-10 mt-8">
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-x-2">
                        <IconMail />
                        <span className="text-['#808191'] text-md">
                          duongtrungkien.dev@gmail.com
                        </span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <IconCall />
                        <span className="text-['#808191'] text-md">
                          0968 384 643
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-x-2">
                        <IconLocationFill />
                        <span className="text-['#808191'] text-md">
                          Vietnam
                        </span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <IconLocationFill />
                        <span className="text-['#808191'] text-md">
                          15 Properties
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AgentPage;
