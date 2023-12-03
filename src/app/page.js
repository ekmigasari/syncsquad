import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
// import { Navbar } from "@/components/Navbar";


export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      {/* <Navbar /> */}
        <Hero/>
      <Events />
    </div>
  );
}
