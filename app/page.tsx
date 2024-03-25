import Navbar from "./app/(component)/navbar";
import Hero from "./app/(component)/Hero";


export default function Home() {
  return (
    <>
    <div className="h-[100vh] overflow-hidden">

    <Navbar />
    <Hero />
    </div>
    </>
  );
  
}
