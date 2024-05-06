"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  // const session = await getServerSession(options);
  return (
    <>
      <div className="flex justify-between items-center mx-[40px] lg:mx-[120px] mt-[40px]  ">
        <div className="text-base  flex gap-[40px] ">
          <Link href="/">Second Brain</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
        </div>
        <button onClick={() => signIn()}>Get Started</button>
          {/* <Link href="auth" className="bg-slate-800 text-slate-100 px-4 py-2 rounded-sm">Get started </Link> */}
      </div>
    </>
  );
};

export default Navbar;
