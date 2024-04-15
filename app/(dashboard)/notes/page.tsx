import React from "react";
import { Header } from "../(components)/Header";
import {
  Circle,
  Command,
  EllipsisVertical,
  File,
  SquarePen,
  Star,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Header title="Notes"></Header>
      <div className="w-full">
        <div className=" py-5 flex flex-col gap-5">
          <div className="w-full border-b flex gap-5 border-slate-400">
            <HeaderRow name="Draft">
              <SquarePen size={16} />
            </HeaderRow>
            <HeaderRow name="Final">
              <File size={16} />
            </HeaderRow>
            <HeaderRow name="Favorite">
              <Star size={16} />
            </HeaderRow>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            <List title="Upworking" area="Personal" />
            <List title="Upworking" area="Personal" />
            <List title="Upworking" area="Personal" />
            <List title="Upworking" area="Personal" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

const HeaderRow = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-[5px] p-1 text-sm items-center">
      {children}
      <p>{name}</p>
    </div>
  );
};

const List = ({ title, area }: { title: string; area: string }) => {
  return (
    <div className="max-w-[250px]  border border-slate-300  rounded-md " >
      <div className="w-full h-[120px] bg-slate-200" />
      <div className="px-2 flex flex-col gap-2 py-4">
        <div className="flex justify-between items-center font-medium ">
          <div className="flex gap-1 items-center">
            <File size={18} fill="#475569" className="text-slate-100" />
            <p>{title}</p>
          </div>
          <Star size={18} className="text-slate-400" />
        </div>
        <Link
          className="flex  items-center gap-1 py-1 px-2 hover:bg-slate-100 w-fit"
          href="/"
        >
          <Command size={14} />
          <p className="text-sm  text-slate-600">{area}</p>
        </Link>
      </div>
    </div>
  );
};
