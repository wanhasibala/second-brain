"use client";

import { useEffect } from "react";
import LeftSidebar from "./(components)/leftSidebar";
import RightSidebar from "./(components)/rightSidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(status)

  useEffect(() => {
    if (status === "authenticated") {
      router.push("sign-in")
    }
  },[router, status])
  return (
    <>
      <div className="flex bg-slate-50 justify-between h-[100vh]  ">
        <LeftSidebar />
        <main className="w-full xl:px-[120px] pt-[100px] flex flex-col px-10 overflow-x-auto">
          {children}
        </main>
        <RightSidebar />
      </div>
    </>
  );
}
