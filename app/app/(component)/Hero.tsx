import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center mt-14 flex-col items-center">
        <div className="py-[4px] px-[10px] bg-slate-700 rounded-full text-slate-100 text-sm w-fit">
          Inspired by Thiago Forte Books
        </div>
        <h1 className="text-6xl mx-[120px] max-w-[960px] text-center font-bold mt-[10px] text-slate-800">
          Empower your productivity with a digital second brain
        </h1>
        <p className="my-[40px] max-w-[600px] text-xl font-normal text-center text-slate-600">
          effortlessly organize, access, and unleash your ideas with our
          intuitive note-taking app
        </p>
          <Button size={"lg"} className="text-xl bg-slate-700">
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        <Image width={1200} height={930} src="/Home Page.webp" alt="Hero Picture" />
      </div>
    </>
  );
}
