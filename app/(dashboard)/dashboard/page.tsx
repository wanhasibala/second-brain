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
import Editor from "../(components)/blockNote";

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
      <div className="mb-10">
        <h4 className="text-lg font-medium">INBOX</h4>
        <div className=" py-5 flex flex-col gap-5">
          <div className="w-full border-b flex gap-5 border-slate-400">
            <HeaderRow name="Resources">
              <Bookmark size={16} fill="#1E293B" />
            </HeaderRow>
            <HeaderRow name="Task">
              <div className="h-4 w-4 bg-slate-800 rounded-full text-slate-100 flex items-center justify-center">
                <Check size={14} />
              </div>
            </HeaderRow>
            <HeaderRow name="Project">
              <Folder size={16} fill="#1E293B" />
            </HeaderRow>
            <HeaderRow name="Notes">
              <File size={16} fill="#1E293B" className="text-slate-100" />
            </HeaderRow>
          </div>
          <div className="flex flex-col gap-2">
            <List title="Second Brain PARA - Thiago Forte" area="Personal" />
            <List title="Second Brain PARA - Thiago Forte" area="Personal" />
          </div>
        </div>
      </div>
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
        {/* <Editor onChange={() =>{}} initialContent="Initial content" /> */}
      </div>
    </>
  );
};
export default Page;

const HeaderRow: FunctionComponent<PropsWithChildren<WizardProps>> = ({
  name,
  children,
}) => {
  return (
    <div className="flex gap-[5px] p-1 text-sm items-center">
      <div>{children}</div>
      <p>{name}</p>
    </div>
  );
};

const List = ({ title, area }: { title: string; area: string }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-1 items-center">
        <Bookmark fill="#1E293B" size={18} />
        <p>{title}</p>
      </div>
      <div className="flex  items-center gap-2.5">
        <p className="text-sm px-2.5 py-0.5 font-medium rounded-full border-slate-900 border">
          {area}
        </p>
        <EllipsisVertical size={18} />
      </div>
    </div>
  );
};
