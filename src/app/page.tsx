import { MainLayout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <Link href="/dashboard/property">Property</Link>
    </MainLayout>
  );
}
