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
import { PropsWithChildren, FunctionComponent } from "react";

interface WizardProps {
  name: string;
}

const LeftSidebar = () => {
  return (
    <>
      <div className="w-[240px] h-full bg-slate-100 py-[50px] px-5 gap-10 flex flex-col">
        <h3 className="text-2xl font-semibold text-slate-800"> Second Brain</h3>
        {/* TOOLS */}
        <div className="p-2.5 gap-4 flex flex-col text-slate-700">
          <TabNav name="Search">
            <Search size={20} />
          </TabNav>
          <TabNav name="New Item">
            <div className="flex bg-slate-800 h-4 w-4 items-center justify-center rounded-full">
              <Plus size={20} className="text-slate-100" />
            </div>
          </TabNav>
          <TabNav name="Inbox">
            <MailOpen size={20} />
          </TabNav>
        </div>
        {/* DATED */}
        <div className="p-2.5 gap-4 flex flex-col text-slate-700">
          <TabNav name="Today">
            <CalendarCheck size={20} className="text-slate-800" />
          </TabNav>
          <TabNav name="Scheduled">
            <Calendar size={20} />
          </TabNav>
          <TabNav name="Someday">
            <Archive size={20} />
          </TabNav>
          <TabNav name="Flagged">
            <Flag size={20} fill="#1E293B" />
          </TabNav>
        </div>

        {/* PARA */}

        <div className="p-2.5 gap-4 flex flex-col text-slate-700">
          <TabNav name="Project" >
            <FolderClosed size={20} className="text-slate-800"  />
          </TabNav>
          <TabNav name="Area">
            <BriefcaseBusiness size={20}  />
          </TabNav>
          <TabNav name="Resources">
            <Bookmark size={20} fill="#1E293B"/>
          </TabNav>
          <TabNav name="Task">
            <div className="bg-slate-700 rounded-full w-5 h-5 flex justify-center items-center">
              <Check size={16} className="text-slate-100"/>
            </div>
          </TabNav>
          <TabNav name="Notes">
            <FilePen size={20} />
          </TabNav>
          <TabNav name="Archive">
            <ArchiveX size={20} />
          </TabNav>
        </div>
      </div>
    </>
  );
};
export default LeftSidebar;

const TabNav: FunctionComponent<PropsWithChildren<WizardProps>> = ({
  children,
  name,
}) => {
  return (
    <a className="flex items-center gap-2 cursor-pointer">
      <>{children}</>
      <p>{name}</p>
    </a>
  );
};
