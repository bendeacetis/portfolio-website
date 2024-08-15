import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F8F8] ">
         <div className="text-[#282628] w-full h-auto">
            <Image src="/images/airdropcard.png" width={1512} height={508} layout="responsive" className="object-fill"/>
         </div>
         <section>
            <div className="md:grid md:grid-cols-1 text-[#282628] items-center ml-36 mr-36 py-8 px-12 sm:py-16 xl:px-12">
                 <h2 className="text-2xl font-bold">airdrop-</h2>
                 <h2 className="text-2xl font-regular">Drone Delivery Service</h2>
                 <br/>
                 <div className="flex flex-row gap-4">
                   <Image src="/images/figmaicon.png" width={50} height={50}/>
                   <Image src="/images/jsicon.png" width={50} height={50}/>
                   <Image src="/images/cppicon.png" width={50} height={50}/>
                </div>
                <br/>
                 <p className="font-bold">Project Details</p>
                 <br/>
                 <p className="font-regular">airdrop is a software system that I made with my partner Owen Keating throughout a course at the University of Minnesota.</p>
                 <br/>
                 <p className="font-regular">In this project, we worked to develop a working drone delivery service simulation that takes in a user specified pickup and drop off location, and then success fully has a drone pickup and deliver such package.</p>
                 <br/>
                 <p className="font-regular">Through this opportunity, I gained experience with design and developmental patterns. I learned fundamentals of software engineering as well as some exploration into Javascript and HTML. The majority of my work was written in C++.</p>
                 <br/>

                 <div className="flex items-center justify-center w-full h-auto">
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/sToE2E8whBU?si=Pilm3ZpNbPW7AJkT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
            </div>
         </section>
    </main>

  );

}
