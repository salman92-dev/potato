import Image from "next/image";

import Hero from "./components/Hero";
import ProudToServeSection from "./components/Proudtoserve";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProudToServeSection />
    </div>
  );
}
