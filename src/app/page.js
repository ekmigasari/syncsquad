import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Events } from "./components/Events";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
    </>
  );
}
