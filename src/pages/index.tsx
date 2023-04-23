import NavBar from "./components/NavBar";
import PromotionsTab from "./components/PromotionsTab";
import Slider from "./components/Slider";
import axios from "axios";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className={poppins.className}>
      <PromotionsTab />
      <NavBar />
      <Slider />
    </main>
  );
}
