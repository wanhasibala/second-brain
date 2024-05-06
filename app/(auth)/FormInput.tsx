"use client"
import { Input } from "@/components/ui/input";
import {  LucideIcon } from "lucide-react";

const FormInput = ({title,type, placeholder, onChange, icon:Icon} : {title:string, type:string, onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void, placeholder: string, icon: LucideIcon}) => {

  return (
    <>
      <div className="w-full ">
        <h3 className="text-slate-600  mb-1 text-sm">{title}</h3>
        <div className=" w-full flex items-center border border-slate-400 gap-5 px-5 py-[5px] rounded-lg text-lg">
            <Icon className="text-slate-600" />
          <div className="h-[20px] bg-slate-600 w-[1px]"></div>
          <Input placeholder={placeholder} className="border-none " type={type} onChange={onChange}/>
        </div>
      </div>
    </>
  );
};
export default FormInput;
