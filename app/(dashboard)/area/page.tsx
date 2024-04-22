import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, File, LayoutGrid, Plus } from "lucide-react";
import { Header } from "../(components)/Header";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <Header
        title="Area"
        description="Place for taking some things to do continously and theres no dateline for this or for long term project"
      >
        <Button>
          <LayoutGrid size={20} />
        </Button>
      </Header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <List title="Personal">
          <Project project="Projects" />
          <Project project="Projects" />
          <Project project="Projects" />
          <Project project="Projects" />
        </List>
        <List title="Work" />
        <List title="Side Hustle" />
        <List title="Language Learning" />
        {/* <List title="Language Learning" /> */}
      </div>
    </>
  );
};
export default Page;

const List = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
      <div className="max-w-[250px]  border border-slate-300  rounded-md h-fit px-4 flex flex-col gap-1 py-4">
        <div className="flex gap-1 items-center">
          <BriefcaseBusiness size={16} className="text-slate-600" />
          <p>{title}</p>
        </div>
        {/* <Star size={18} className="text-slate-400" /> */}
        <div className="flex flex-col gap-2  ">{children}</div>
      </div>
  );
};

const Project = ({ project }: { project: string }) => {
  return (
    <Link
      className="flex  items-center gap-1  hover:bg-slate-100 w-fit "
      href="/project"
    >
      <File size={14} className="text-slate-500" />
      <p className="text-sm  text-slate-500">{project}</p>
    </Link>
  );
};
