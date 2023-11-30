import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Events } from "./components/Events";
import { Login } from "./components/Login";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      {/* <Login /> */}
    </>
  );
}
