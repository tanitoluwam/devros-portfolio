import Image from "next/image";
import CustomNavbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Frontend from "@/components/Frontend";
import Backend from "@/components/Backend";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Kontakt from "@/components/Kontakt"


export default function Home() {
  return (
    <main>
      <Hero />
      <Frontend />
      <Backend />
      <Portfolio/>
      <Kontakt />
    </main>
  );
}
