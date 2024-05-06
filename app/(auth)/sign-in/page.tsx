"use client";
import { AtSign, Eye, Mail } from "lucide-react";
import FormInput from "../FormInput";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import axios from "axios";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full  h-[100vh] flex justify-center">
      <div className="w-[500px]  flex flex-col items-center  mt-20 p-10  ">
        <h1 className="text-2xl font-medium mb-6">Login to your account</h1>
        <form className="w-full flex flex-col gap-6">
          <FormInput
            title="Email"
            placeholder="your email here"
            icon={Mail}
            type="text"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <FormInput
            title="Password"
            placeholder="your password here"
            icon={Eye}
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Link href="/" className="text-sm text-slate-500 self-end ">
            {" "}
            forgot your password?
          </Link>
          <Button className="bg-slate-700 " size={"lg"} type="submit">
            Login
          </Button>
          <div className="w-full flex gap-4 items-center text-slate-400">
            <div className="bg-slate-400 w-full h-[0.5px]"></div>
            <p className="w-[300px] text-center text-sm">or continue with</p>
            <div className="bg-slate-400 w-full h-[0.5px]"></div>
          </div>
          <div className="flex justify-center gap-8">
            <Link href="/" className="bg-slate-600 p-2 rounded-full">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1794 8.88188L21.0734 8.43234H11.3028V12.5677H17.1406C16.5345 15.4458 13.722 16.9608 11.4247 16.9608C9.75313 16.9608 7.99109 16.2577 6.82484 15.1275C6.20953 14.5217 5.71974 13.8005 5.38353 13.0051C5.04731 12.2098 4.87126 11.356 4.86547 10.4925C4.86547 8.75062 5.64828 7.00828 6.78734 5.86219C7.92641 4.71609 9.64672 4.07484 11.3572 4.07484C13.3161 4.07484 14.72 5.115 15.245 5.58938L18.1836 2.66625C17.3216 1.90875 14.9534 0 11.2625 0C8.41484 0 5.68437 1.09078 3.68844 3.08016C1.71875 5.03906 0.699219 7.87172 0.699219 10.5C0.699219 13.1283 1.66391 15.8194 3.57266 17.7938C5.61219 19.8994 8.50063 21 11.4748 21C14.1809 21 16.7459 19.9397 18.5741 18.0159C20.3713 16.1222 21.3008 13.5019 21.3008 10.755C21.3008 9.59859 21.1845 8.91187 21.1794 8.88188Z"
                  fill="#F1F5F9"
                />
              </svg>
            </Link>
            <Link href="/" className="bg-slate-600 p-2 rounded-full">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8008 0C5.00234 0 0.300781 4.82344 0.300781 10.7672C0.300781 15.525 3.31016 19.5563 7.48203 20.9813C7.54055 20.994 7.60028 21.0002 7.66016 21C8.04922 21 8.19922 20.7141 8.19922 20.4656C8.19922 20.2078 8.18984 19.5328 8.18516 18.6328C7.83783 18.7142 7.48251 18.7567 7.12578 18.7594C5.10547 18.7594 4.64609 17.1891 4.64609 17.1891C4.16797 15.9469 3.47891 15.6141 3.47891 15.6141C2.56484 14.9719 3.47422 14.9531 3.54453 14.9531H3.54922C4.60391 15.0469 5.15703 16.0688 5.15703 16.0688C5.68203 16.9875 6.38516 17.2453 7.01328 17.2453C7.42861 17.237 7.83752 17.1412 8.21328 16.9641C8.30703 16.2703 8.57891 15.7969 8.87891 15.525C6.54922 15.2531 4.09766 14.3297 4.09766 10.2047C4.09766 9.02813 4.50547 8.06719 5.17578 7.31719C5.06797 7.04531 4.70703 5.94844 5.27891 4.46719C5.35562 4.44883 5.43446 4.44095 5.51328 4.44375C5.89297 4.44375 6.75078 4.58906 8.16641 5.57344C9.8865 5.09218 11.7057 5.09218 13.4258 5.57344C14.8414 4.58906 15.6992 4.44375 16.0789 4.44375C16.1577 4.44095 16.2366 4.44883 16.3133 4.46719C16.8852 5.94844 16.5242 7.04531 16.4164 7.31719C17.0867 8.07188 17.4945 9.03281 17.4945 10.2047C17.4945 14.3391 15.0383 15.2484 12.6992 15.5156C13.0742 15.8484 13.4117 16.5047 13.4117 17.5078C13.4117 18.9469 13.3977 20.1094 13.3977 20.4609C13.3977 20.7141 13.543 21 13.932 21C13.995 21.0003 14.0579 20.994 14.1195 20.9813C18.2961 19.5563 21.3008 15.5203 21.3008 10.7672C21.3008 4.82344 16.5992 0 10.8008 0Z"
                  fill="#F1F5F9"
                />
              </svg>
            </Link>
          </div>
          <p className="text-slate-500 self-center ">
            not having account yet?
            <span className="text-slate-700 cursor-pointer">
              <Link href="sign-up">signup here</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Page;
