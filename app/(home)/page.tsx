import Image from "next/image";
import Navbar from "../_globalComponents/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />

      {/* <div>this is body</div> */}
      <footer>this is footer</footer>
    </main>
  );
}
