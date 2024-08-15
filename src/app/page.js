import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Photography from "./components/Photography";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F8F8] items-center justify-center ">
        <Navbar/>
        <div class="container items-center justify-center mt-24 mx-auto px-12 py-24">
            <HeroSection/>
            <div className="flex items-center justify-center mb-12 sm:mb-8">
                <Image src="/images/downarrow.png" width={70} height={70}/>
            </div>
            <Projects/>
            <Photography/>
        </div>
    </main>

  );

}
