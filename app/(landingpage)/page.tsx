"use client"
import Navbar from "../app/(component)/navbar";
import Hero from "../app/(component)/Hero";

export default function Page() {
  return (
    <>
      <div className="h-[100vh] overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
