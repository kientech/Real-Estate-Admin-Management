import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/QueryProvider";

export const metadata: Metadata = {
  title: "Real Estate Admin Management",
  description: "Generated by create next app",
};

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div className={`${manrope.className}`}>{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
