"use client";
import Navbar from "@/app/app/(component)/navbar";
import Form from "./Form";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";

const page = async () => {
  const session = await getServerSession
  
  if(!session) {
    return redirect('/')
  }
    return (
    <>
      <Navbar />
      {/* <Form /> */}
      {/* <div className="bg-slate-700 w-100"></div> */}
      {/* <button onClick={()=>signIn('github', {callbackUrl: '/home'})} className="bg-slate-500 w-10 h-10">kelas
        <IonIcon icon={logoGithub} size='large' />
      </button> */}
    </>
  );
};
export default page;
