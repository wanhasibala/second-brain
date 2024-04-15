"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Bookmark,
  Check,
  ChevronDown,
  Ellipsis,
  EllipsisVertical,
  File,
  Folder,
  Plus,
} from "lucide-react";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inbox } from "../(components)/Inbox";

interface WizardProps {
  name: string;
}
const Page = () => {
  const [active, setActive] = useState();
  return (
    <>
      {/* HEADER TITLE */}
      <div className="w-full justify-between flex mb-10">
        <div className="">
          <h3 className="text-2xl font-semibold text-slate-900">SUNDAY</h3>
          <p className="font-normal text-sm text-slate-700"> March, 3 2024</p>
        </div>
        <Button>
          <Plus size={16} className="mr-2 mb-[2px]" />
          New Item
        </Button>
      </div>
      {/* should be a component next time */}
     <Inbox /> 
      <div>
        <h4 className="text-lg font-medium">PERSONAL</h4>
        <div className="w-full flex justify-between p-[10px] border-b border-slate-400 items-center">
          <div className="flex gap-2 items-center text-slate-800">
            <ChevronDown size={20} />
            <p>Note Taking App</p>
          </div>
          <Ellipsis size={16} />
        </div>
        <div className="p-2.5 flex justify-between w-full">
          <div className="flex gap-1  items-center text-slate-600">
            <Checkbox />
            <p >Create UI Library Component</p>
          </div>
          <div className="flex justify-end items-center gap-2.5"> 
            <p className="bg-[#FECBCB] text-sm px-2.5 py-[2px] rounded-full">Today</p>
            <EllipsisVertical size={14}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;



