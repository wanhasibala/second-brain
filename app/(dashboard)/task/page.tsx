import { Header } from "../(components)/Header";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { Inbox } from "../(components)/Inbox";
import {
  Bookmark,
  Check,
  CircleCheck,
  EllipsisVertical,
  File,
  Folder,
  Square,
} from "lucide-react";

const Page = () => {
  return (
    <>
      <Header title="Task" description="Manage your tasks"/>
      <div className="w-full">
        <div className=" py-5 flex flex-col gap-5">
          <div className="w-full border-b flex gap-5 border-slate-400">
            <HeaderRow name="Today"/>
            <HeaderRow name="This Week" />
            <HeaderRow name="All Tasks" />
          </div>
          <div className="flex flex-col gap-2">
            <List title="Second Brain PARA - Thiago Forte" area="Personal" />
            <List title="Second Brain PARA - Thiago Forte" area="Personal" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

const HeaderRow = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-[5px] p-1 text-sm items-center">
      <CircleCheck size={24} fill="#334155" className="text-white" />
      <p>{name}</p>
    </div>
  );
};

const List = ({ title, area }: { title: string; area: string }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-1 items-center">
        <Square size={18} />
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
