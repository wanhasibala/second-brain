"use client";
import { PropsWithChildren } from "react";
import LeftSidebar from "./(components)/leftSidebar";
import RightSidebar from "./(components)/rightSidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
export default function Page({ children }: PropsWithChildren) {
  return (
    <>

      <div className="flex bg-slate-50 justify-between h-[100vh]  ">


        <LeftSidebar  />

        <main className="w-full xl:px-[120px] pt-[100px] flex flex-col px-10 overflow-x-auto">
          {children}
        </main>
          <RightSidebar />
      </div>
    </>
  );
}
