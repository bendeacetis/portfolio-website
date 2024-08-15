import React from "react";
import Image from "next/image";
import Link from "next/link";

const Climatize = ()=>{

    return (<section className="text-[#282628]">
        <div className="bg-white rounded-sm drop-shadow-l gap-8 items-center py-12 px-8 xl:gap-16 sm:py-16 xl:px-16">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-2 xl:gap-16 sm:py-8 xl:px-4">
                <Image src="/images/climatize.png" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <div className="items-center">
                    <h2 className="text-4xl font-bold text-[#282628] mb-4">Climatize</h2>
                    <br/>
                    <p className="text-base md:text-lg">Project Type: Wireframe</p>
                    <p className="text-base md:text-lg">Role: UX/UI Designer</p>
                    <p className="text-base md:text-lg">Industry: Weather, Lifestyle</p>
                    <br/>
                    <Link href="/climatize">
                          <button className="bg-[#282628] text-[#F8F8F8] py-2 px-4 rounded-md"> View project </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>)

}

export default Climatize;
