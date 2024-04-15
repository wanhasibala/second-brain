import React from "react";
import { Header } from "../(components)/Header";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import { Inbox } from "../(components)/Inbox";

const Page = () => {
  return (
    <>
      <Header
        title="Resources"
        description="Place for taking some of things that in my Interest right now like keyboard, football, stock, music, or etc."
      ><Button><LayoutGrid /></Button></Header>
      <div className="w-full mt-10">
        <Inbox/>
      </div>
    </>
  );
};

export default Page;
