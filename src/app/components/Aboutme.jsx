"use client";
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Development</li>
        <li>User Experience Design</li>
        <li>Photography</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Minnesota, Twin Cities</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Abbott SWE/UX Intern</li>
        <li>UMN Teaching Assistant</li>
      </ul>
    ),
  },
  {
      title: "Goals",
      id: "goals",
      content: (
        <ul className="list-disc pl-2">
          <li>Live in Spain</li>
          <li>Move to Chicago</li>
        </ul>
      ),
  },
];

const Aboutme = () =>{
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id);
        });
    };

    return <section className="text-[#282628]">

        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-[#282628] mb-4">About Me</h2>

                <p className="text-base md:text-lg">My name is Ben DeAcetis and I'm a Computer Scientist and Product Designer.</p>
                <br/>
                <p className="text-base md:text-lg">
                    I attend the University of Minnesota - Twin Cities where I'm on track to obtain a B.S. in Computer Science and minor in User Experience Design.
                </p>
                <br/>
                <p className="text-base md:text-lg">
                    Outside of my work, you can find me spending time outside, cooking, listening to music and taking photos.
                </p>
                <br/>
                <p className="text-base md:text-lg">
                    Currently reading: Norwegian Wood
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab ==="skills"}>{""}Skills{" "}</TabButton>
                    <TabButton selectTab={()=> handleTabChange("education")} active={tab ==="education"}>{""}Education{" "}</TabButton>
                    <TabButton selectTab={()=> handleTabChange("experience")} active={tab ==="experience"}>{""}Experience{" "}</TabButton>
                    <TabButton selectTab={()=> handleTabChange("goals")} active={tab ==="goals"}>{""}Goals{" "}</TabButton>
                </div>
                <div className="mt-0">
                     {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
            <Image src="/images/photoofme.jpg" width={500} height={500} className="rounded-sm drop-shadow-l"/>
        </div>
    </section>;

};




export default Aboutme;