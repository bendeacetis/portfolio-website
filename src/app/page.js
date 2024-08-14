import Image from "next/image";

import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";

import Aboutme from "./components/Aboutme";




export default function Home() {

  return (

    <main className="flex min-h-screen flex-col bg-[#F8F8F8] ">

        <Navbar/>

        <div class="container mt-24 mx-auto px-12 py-24">

            <HeroSection/>

            <Aboutme/>

        </div>

    </main>

  );

}
