import React from "react";
import { Header } from "../(components)/Header";
import { ChevronRight, Triangle } from "lucide-react";

const Page = () => {
  return (
    <>
      <Header
        title="Archive"
        description="A place for containing all things that doesn’t fit for the project, areas, and resources criteria."
      />

      <div className="flex flex-col gap-8">
        <List title="Projects" />
        <List title="Projects" />
        <List title="Projects" />
        <List title="Projects" />
        <List title="Projects" />
      </div>
    </>
  );
};

export default Page;
const List = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Triangle size={14} fill="#475569" className="text-slate-100 rotate-90" />
        <h1 className="font-medium text-slate-600">{title}</h1>
      </div>
    </div>
  );
};
