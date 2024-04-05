"use client"
import { PropsWithChildren } from "react";
import LeftSidebar from "./(components)/leftSidebar";
import RightSidebar from "./(components)/rightSidebar";
export default function Page( {children} : PropsWithChildren) {
  return (
    <>
      <div className="flex bg-slate-50 justify-between mb-10">
        <LeftSidebar />
        <main className="w-full px-[120px] pt-[100px] flex flex-col">{children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
