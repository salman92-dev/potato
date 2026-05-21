import Image from "next/image";

import Hero from "./components/Hero";
import ProudToServeSection from "./components/Proudtoserve";
import MenuSection from "./components/MenuSection";
import FastMarquee from "./components/Marquee";
import FoodHero from "./components/Foodhero";
import ContactSection from "./components/ContactForm";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProudToServeSection />
      <MenuSection />
      <FastMarquee />
      <FoodHero />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}
