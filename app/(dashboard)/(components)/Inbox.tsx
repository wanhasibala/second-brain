"use client";
import { Bookmark, Check, EllipsisVertical, File, Folder } from "lucide-react";
import { FunctionComponent, PropsWithChildren } from "react";

interface WizardProps {
  name: string;
}
export const Inbox = () => {
  return (
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
  );
};
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
        <Bookmark  size={18} />
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
