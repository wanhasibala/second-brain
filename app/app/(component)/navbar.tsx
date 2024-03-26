"use-client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center mx-[40px] lg:mx-[120px] mt-[40px]  ">
        <div className="text-base font-medium flex gap-[40px] ">
          <Link href="/">Second Brain</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
        </div>
        {/* <UserButton ="/dashboard" /> */}
      </div>
    </>
  );
}
