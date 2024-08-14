"use client";

import React from "react";

import { TypeAnimation } from 'react-type-animation';






const HeroSection = () => {

    return (

        <section>

            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div className="col-span-7 place-self-center text-center sm:text-left">

                    <h1 className="text-[#282628] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">

                        <span className="text-[#282628]">Benjamin DeAcetis,{""}</span>

                        <span/>

                    <br></br>

                        <TypeAnimation

                            sequence={[

                                // Same substring at the start will only be typed out once, initially

                                'Web Developer.',

                                1000, // wait 1s before replacing "Mice" with "Hamsters"

                                'loves his beagle.',

                                1000,

                                'UX/UI Designer.',

                                1000,

                                'has a curly head.',

                                1000,

                                'also goes by Ben.',

                                1000

                            ]}

                            wrapper="span"

                            speed={50}

                            repeat={Infinity}

                        />

                    </h1>

                    <p className="text-[#999999] font-normal sm:text-lg text-lg mt-6 mb-6 lg:text-xl">

                        Hello world! Welcome to my portfolio :)

                    </p>

                    <div>

                        {/*<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#282628] hover:bg-slate-800 text-[#F8F8F8]">*/}

                        {/*    About me*/}

                        {/*</button>*/}

                        <button></button>

                    </div>

                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">




                </div>

            </div>

        </section>

    );

};




export default HeroSection;