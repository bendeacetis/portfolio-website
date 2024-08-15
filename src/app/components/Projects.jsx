import React from "react";
import Image from "next/image";
import Climatize from "./Climatize";
import SetJet from "./SetJet";
import Airdrop from "./Airdrop";
import MongoVision from "./MongoVision";
import GroveDash from "./GroveDash";

const Projects = ()=>{

    return (<section className="text-[#282628]">
        <div className="md:grid md:row bg-[#F8F8F8] gap-8">
            <SetJet/>
{/*             <MongoVision/> */}
            <GroveDash/>
            <Airdrop/>
            <Climatize/>


        </div>
    </section>)

}

export default Projects;