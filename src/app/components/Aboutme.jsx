"use client";

import React, {useState, useTransition} from "react";

import Image from "next/image";

import TabButton from "./TabButton";




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

            <div>

                <h2 className="text-4xl font-bold text-[#282628] mb-4">About Me</h2>

                <p className="text-base md:text-lg">My name is Ben DeAcetis and I am a Computer Scientist and Product Designer.</p>

                <br/>

                <p className="text-base md:text-lg">

                    I attend the University of Minnesota - Twin Cities where I am on track to obtain a B.S. in Computer Science and minor in User Experience Design .

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

                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab ==="skills"}>{""}Education{" "}</TabButton>

                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab ==="skills"}>{""}Experience{" "}</TabButton>

                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab ==="skills"}>{""}Goals{" "}</TabButton>

                </div>




            </div>

            <Image src="/images/photoofme.jpg" width={500} height={500} className="rounded-sm drop-shadow-l"/>

        </div>

    </section>;

};




export default Aboutme;