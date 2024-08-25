"use effect";
"use client";
import React, {useState, useTransition} from "react";
import Navbar from "./Navbar";
import TabButton from "./TabButton";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Photography = ()=>{
       return(
       <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
           <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
               <h2 className="text-4xl font-bold text-[#282628] mb-4">Photography</h2>
               <p className="text-base md:text-lg">Outside of my work, I enjoy taking 35mm film photos.</p>
           </div>
           <Carousel
             swipeable={false}
             draggable={false}
             showDots={true}
             responsive={responsive}
             ssr={true} // means to render carousel on server-side.
             infinite={true}
             autoPlaySpeed={1000}
             keyBoardControl={true}
             customTransition="all .5"
             transitionDuration={500}
             containerClass="carousel-container"
             removeArrowOnDeviceType={["tablet", "mobile"]}
             dotListClass="custom-dot-list-style"
             itemClass="carousel-item-padding-40-px"
           >
                <Image src="/images/film/IMG_6852.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6862.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6892.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6893.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6921.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6245.jpg" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6250.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/IMG_6937.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/photos03.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/photos07.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/photos08.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/photos14.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
                <Image src="/images/film/photos17 2.JPG" width={500} height={500} className="rounded-sm drop-shadow-l"/>
           </Carousel>
       </div>
       )
};

export default Photography;