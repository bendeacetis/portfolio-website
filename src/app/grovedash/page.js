import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F8F8] ">
         <div className="text-[#282628] w-full h-auto">
            <Image src="/images/grovedashcard.png" width={1512} height={508} layout="responsive" className="object-fill"/>
         </div>
         <section>
            <div className="md:grid md:grid-cols-1 text-[#282628] items-center ml-36 mr-36 py-8 px-12 sm:py-16 xl:px-12">
                 <h2 className="text-2xl font-bold">Grove Dash-</h2>
                 <h2 className="text-2xl font-regular">Adventure Game</h2>
                 <br/>
                 <div className="flex flex-row gap-4">
                      <Image src="/images/figmaicon.png" width={50} height={50}/>
                      <Image src="/images/unityicon.png" width={50} height={50}/>
                      <Image src="/images/jsicon.png" width={50} height={50}/>
                   </div>
                   <br/>
                 <p className="font-bold">Project Details</p>
                 <br/>
                 <p className="font-regular">Grove Dash is a playful adventure game that I made in one of my courses at Fundación José Ortega y Gasset - Gregorio Marañón during my time studying abroad.</p>
                 <br/>
                 <p className="font-regular">The game objective is to avoid obstacles and reach the end of the maze in the fastest time possible. Users must jump, run and strategically move around to avoid the creatures and collect level ups. </p>
                 <br/>
                 <p className="font-regular">This game was developed in Unity, and scripts were written in JavaScript.</p>
                 <br/>
                 <div className="flex items-center justify-center w-full h-auto">
                    <video controls preload="auto">
                        <source src="/videos/grovedashdemo.mp4" type="video/mp4" />
                    </video>
                 </div>

            </div>
         </section>
    </main>

  );

}
