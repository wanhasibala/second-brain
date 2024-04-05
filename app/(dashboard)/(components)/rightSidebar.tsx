"use client";
import { Bell, Circle, Settings, Square, SquareCheck } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";

const RightSidebar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-[280px] bg-slate-100 h-full py-12 px-5 gap-10 flex flex-col   ">
      {/* Profile */}
      <div className="flex gap-3 p-1 items-center ">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" width={40} height={40} className="bg-contain"/>
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <div className="flex flex-col gap-0 w-full">
          <h3 className="text-base text-slate-900"> User Name </h3>
          <p className="text-sm text-slate-600">user@mail.com</p>
        </div>
        <Settings size={32} />
        <Bell size={32} />
      </div>
      {/* CALENDAR */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="px-0 py-0 rounded-md "
      />
      {/* IMPORTANT TASK */}
      <div className="flex flex-col gap-2 p-1">
        <p>Important task</p>
        <div className="flex items-center gap-2">
          <Checkbox />
          <div className="flex flex-col gap-2">
            <p>Create Ui Library</p>
            <div className="flex items-center gap-1 text-sm">
              <div className="rounded-full bg-[#FECBCB] flex px-[10px] py-[2px] ">
                Today
              </div>
              <Circle size={5} fill="#000" />
              <div className="rounded-full px-[10px] py-[2px] border border-slate-500">
                Personal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSidebar;
