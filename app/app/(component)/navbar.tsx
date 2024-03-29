"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <>
      <div className="flex justify-between items-center mx-[40px] lg:mx-[120px] mt-[40px]  ">
        <div className="text-base font-medium flex gap-[40px] ">
          <Link href="/">Second Brain</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
        </div>
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ): (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
