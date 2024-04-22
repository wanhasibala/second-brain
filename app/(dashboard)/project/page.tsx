import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BriefcaseBusiness, Folder, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { Header } from "../(components)/Header";

const Page = () => {
  return (
    <>
      <Header
        title="Project"
        description="A place for taking some things to do right now and have a clear outcome and clear dateline"
      >
        <Button>
          <LayoutGrid />
        </Button>
      </Header>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {/* INBOX */}
        <div className="flex flex-col gap-2.5">
          <p className="bg-slate-200 px-2 py-1 w-fit rounded-full">Inbox</p>
          <CardProject title="Tokopedia Redesign" area="work" />
          <CardProject title="Tokopedia Redesign" area="work" />
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="bg-blue-200 px-2 py-1 w-fit rounded-full">Planned</p>
          <CardProject title="Analyze BBRI" area="investment" />
        </div>
        <div>
          <p className="bg-yellow-100 px-2 py-1 w-fit rounded-full">
            On Progress
          </p>
        </div>
        <div>
          <p className="bg-green-100 px-2 py-1 w-fit rounded-full">Completed</p>
        </div>
      </div>
    </>
  );
};
export default Page;

const CardProject = ({ title, area }: { title: string; area: string }) => {
  return (
    <Card className="min-w-[200px] rounded-sm">
      <CardHeader className="w-full">
        <CardTitle className="flex w-full gap-1 mb-1 text-slate-600">
          <Folder  size={20}  /> {title}
        </CardTitle>
        <Link href="/area">
          <CardDescription className="flex gap-1 hover:bg-slate-50 w-fit px-1 py-0.5 rounded-md underline-offset-4 items-center">
            <BriefcaseBusiness size={14}  />
            {area}
          </CardDescription>
        </Link>
      </CardHeader>
    </Card>
  );
};
