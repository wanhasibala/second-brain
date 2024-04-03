import { PropsWithChildren } from "react";
import LeftSidebar from "./(components)/leftSidebar";
import RightSidebar from "./(components)/rightSidebar";
export default function Page( {children} : PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-screen bg-slate-50 justify-between">
        <LeftSidebar />
        <main>{children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
