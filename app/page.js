import Image from "next/image";
import Hero from "./components/Hero";
import PackagesCarousel from "./components/PackagesCarousel";
import TrendingPackages from "./components/TrendingPackages";
import CarRentals from "./components/CarRentals";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function Home() {
  const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div>
      <Hero/>
      <PackagesCarousel />
      <TrendingPackages/>
      <CarRentals/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
