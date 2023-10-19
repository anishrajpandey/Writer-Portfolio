import Image from "next/image";
import Navbar from "../_globalComponents/Navbar";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee overflow-x-hidden p-0 m-0 ">
      <Navbar />
      <HeroSection />
      {/* <div>this is body</div> */}
      <footer>this is footer</footer>
    </main>
  );
}
