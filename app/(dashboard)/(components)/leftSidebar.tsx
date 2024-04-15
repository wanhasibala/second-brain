"use client";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import {
  Archive,
  ArchiveX,
  Bookmark,
  BriefcaseBusiness,
  Calendar,
  CalendarCheck,
  Check,
  Circle,
  CircleCheck,
  CirclePlus,
  FilePen,
  Flag,
  FolderClosed,
  MailOpen,
  Plus,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, FunctionComponent } from "react";

interface WizardProps {
  name: string;
  href: string;
}

const LeftSidebar = () => {
  return (
    <>
      <aside className="lg:w-[240px] w-fit  group/sidebar overflow-y-auto h-full bg-slate-100 py-[50px] px-5 gap-10 flex flex-col items-center lg:items-start ">
        <Link href="/dashboard" className="flex gap-2 items-center">
          <Image src="/logo.svg" alt="Second Brain" width={48} height={48} />
          <h3 className="text-2xl font-semibold text-slate-800 w-full lg:block hidden">
            {/* {" "} */}
            Second Brain
          </h3>
        </Link>
        {/* TOOLS */}
        <div className=" gap-4 flex flex-col ">
          <TabNav name="Search" href="/">
            <Search size={20} />
          </TabNav>
          <TabNav name="New Item" href="/">
            <CirclePlus size={20} className="" />
          </TabNav>
          <TabNav name="Inbox" href="/inbox">
            <MailOpen size={20} />
          </TabNav>
        </div>
        {/* DATED */}
        <div className=" gap-4 flex flex-col ">
          <p className="text-xs text-slate-500 lg:block hidden">Dated</p>
          <TabNav name="Today" href="/today">
            <CalendarCheck size={20} className="text-slate-700" />
          </TabNav>
          <TabNav name="Scheduled" href="/scheduled">
            <Calendar size={20} />
          </TabNav>
          <TabNav name="Someday" href="/someday">
            <Archive size={20} />
          </TabNav>
          <TabNav name="Flagged" href="/flag">
            <Flag size={20} />
          </TabNav>
        </div>

        {/* PARA */}

        <div className=" gap-4 flex flex-col ">
          <p className="text-xs  text-slate-500 lg:block hidden">PARA</p>
          <TabNav name="Project" href="/project">
            <FolderClosed size={20} className="text-slate-800" />
          </TabNav>
          <TabNav name="Area" href="/area">
            <BriefcaseBusiness size={20} />
          </TabNav>
          <TabNav name="Resources" href="/resources">
            <Bookmark size={20} />
          </TabNav>
          <TabNav name="Task" href="task">
            <CircleCheck size={20} />
          </TabNav>
          <TabNav name="Notes" href="/notes">
            <FilePen size={20} />
          </TabNav>
          <TabNav name="Archive" href="/archive">
            <ArchiveX size={20} />
          </TabNav>
        </div>
      </aside>
    </>
  );
};
export default LeftSidebar;

const TabNav: FunctionComponent<PropsWithChildren<WizardProps>> = ({
  children,
  name,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 cursor-pointer text-slate-600 text-sm font-medium "
    >
      <>{children}</>
      <p className="lg:block hidden">{name}</p>
    </Link>
  );
};
