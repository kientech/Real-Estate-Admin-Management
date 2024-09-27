"use client";
import { MainLayout } from "@/components/layout";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { type ChartConfig } from "@/components/ui/chart";
import CircularProgress from "@/components/progress/CircleProgressBar";
import ProgressComponent from "@/modules/dashboard/ProgressComponent";
import { DropdownMenuCheckboxes } from "@/components/dropdown/DotDropDownModal";
import Link from "next/link";
import Image from "next/image";
import LinearProgress from "@/components/progress/LinearProgressBar";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-semibold text-2xl text-[#11142d]">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((item) => (
          <ProgressComponent />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="w-[60%]">
          <div className="bg-white p-4 rounded-xl mt-4">
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-2xl text-[#11142D] mb-4">
                  Total Revenue
                </h1>
                <h2 className="font-bold text-3xl">$236,535</h2>
              </div>
              <DropdownMenuCheckboxes />
            </div>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div className="p-4 rounded-lg bg-white mt-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#11142D]">Top Agent</h1>
                  <Link
                    href="#"
                    className="border px-4 py-2 rounded-lg text-[#808191] text-sm border-gray-300"
                  >
                    See all
                  </Link>
                </div>
                <div className="flex flex-col gap-y-4 mt-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={
                            "https://cdn.dribbble.com/userupload/13643082/file/original-d64aaeff38e0ab889e50cc9c9cb24ae8.png?resize=1504x1128"
                          }
                          alt="Kien"
                          width={70}
                          height={70}
                          objectFit="cover"
                          className="rounded-lg"
                        ></Image>
                        <div>
                          <h1 className="text-md text-[#11142D] font-semibold">
                            Kien Duong Trung
                          </h1>
                          <span className="font-base text-[#808191] text-sm">
                            Top Agent
                          </span>
                        </div>
                      </div>
                      <DropdownMenuCheckboxes />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 w-[40%]">
          <div className="px-4 py-6 rounded-lg bg-white">
            <h1 className="font-semibold text-xl text-[#11142D] mb-4">
              Property Referrals
            </h1>
            <LinearProgress title="Media" targetProgress={60} />
            <LinearProgress title="Media" targetProgress={60} />
            <LinearProgress title="Media" targetProgress={60} />
            <LinearProgress title="Media" targetProgress={60} />
            <LinearProgress title="Media" targetProgress={60} />
          </div>

          <div className="px-4 py-6 rounded-lg bg-white mt-4">
            <h1 className="font-semibold text-xl text-[#11142D] mb-4">
              Latest Sales
            </h1>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={
                        "https://cdn.dribbble.com/userupload/14071166/file/original-e67071527c58cdb0b3d7e9538f2d587d.png?resize=1504x1128"
                      }
                      alt="Userr"
                      width={70}
                      height={70}
                      objectFit="cover"
                      className="rounded-lg"
                    ></Image>
                    <div className="space-y-1">
                      <h1 className="font-semibold text-md text-[#11142d]">
                        Metro Jayakar Apartment
                      </h1>
                      <span className="font-base text-[#808191]">
                        North Carolina, USA
                      </span>
                    </div>
                  </div>
                  <h1 className="font-base text-[#2F80ED] text-md">+ $50</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Property List</h1>
          
        </div>
      </div>
    </MainLayout>
  );
}
