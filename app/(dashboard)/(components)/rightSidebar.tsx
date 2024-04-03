"use client";
import { Bell, Circle, Settings, Square, SquareCheck } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const RightSidebar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-[280px] bg-slate-100 h-full py-12 px-5 gap-10 flex flex-col   ">
      {/* Profile */}
      <div className="flex gap-3 p-1 items-center ">
        <div className="rounded-lg w-16 h-10 bg-slate-800 "></div>
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
          <Square size={16} className="text-slate-400" />
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
