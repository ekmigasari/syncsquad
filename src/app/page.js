import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";


export default function Page() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Events />
      {/* <Login /> */}
    </>
  );
}
