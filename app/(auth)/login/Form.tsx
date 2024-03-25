"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, AtSign,Eye } from "lucide-react";
import {IonIcon } from '@ionic/react';
import {logoGoogle, logoGithub, logoFacebook } from "ionicons/icons"
import { FunctionComponent, PropsWithChildren } from "react";
import Link from "next/link";

interface WizardProps {
  title: string;
  placeholder:string; 
}

export default function Form() {
  return (
    <>
      <div className="max-w-[640px] mx-auto mt-[50px] flex justify-center items-center rounded-[20px] border flex-col gap-[24px] py-10 px-20  border-slate-300">
        <h1 className="text-4xl font-bold ">Log in</h1>
        <FormInput title="Email or username" placeholder="input your email or username"><Mail className="text-slate-600 " size={20}/></FormInput> 
        <FormInput title="Password" placeholder="input your password"><Eye className="text-slate-600" size={20}/></FormInput> 
        <Link href={"/forgotpassword"} className="self-end underline text-slate-500 text-sm"> forgot password?</Link>
        <Button className="w-full text-xl bg-slate-800" size={"lg"}>Log in</Button>
        <div className="w-full flex items-center gap-5">
          <div className="h-0.5 w-full bg-slate-300"></div>
          <div className="w-[400px] text-slate-400">
            Or Continue With
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
        </div>
        <div className="flex gap-[48px] ">
          <IonIcon icon={logoGoogle} size="large" className="bg-slate-800 p-2 rounded-full text-slate-100"  ></IonIcon> 
          <IonIcon icon={logoFacebook} size="large" className="bg-slate-800 p-2 rounded-full text-slate-100"></IonIcon> 
          <IonIcon icon={logoGithub} size="large" className="bg-slate-800 p-2 rounded-full text-slate-100"></IonIcon> 
        </div>
        <div className="text-slate-800 text-base">
          Don't have account yet? <span className="underline underline-offset-4"><Link href={"/signup"}>Sign Up here</Link></span>
        </div>
      </div>
    </>
  );
}

const FormInput: FunctionComponent<PropsWithChildren<WizardProps>> = ({
  children,
  title,
  placeholder,
}) => {
  return (
    <>
      <div className="w-full ">
        <h3 className="text-lg font-medium mb-5">{title}</h3>
        <div className="flex items-center border border-slate-600 gap-5 px-5 py-[5px] rounded-lg text-lg">
          <>{children}</>
          <div className="h-[20px] bg-slate-600 w-[1px]"></div>
          <Input
            placeholder= {placeholder}
          />
        </div>
      </div>
    </>
  );
};
