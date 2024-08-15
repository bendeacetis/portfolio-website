import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F8F8] ">
         <div className="text-[#282628] w-full h-auto">
            <Image src="/images/setjetcard.png" width={1512} height={508} layout="responsive" className="object-fill"/>
         </div>
         <section>
            <div className="md:grid md:grid-cols-1 text-[#282628] items-center ml-36 mr-36 py-8 px-12 sm:py-16 xl:px-12">
                 <h2 className="text-2xl font-bold">setjet-</h2>
                 <h2 className="text-2xl font-regular">Movie Travel App</h2>
                 <br/>
                 <div className="flex flex-row gap-4">
                      <Image src="/images/figmaicon.png" width={50} height={50}/>
                   </div>
                   <br/>
                 <p className="font-bold">Project Details</p>
                 <br/>
                 <p className="font-regular">setjet is an app concept I worked on in one of my classes at the University of Minnesota.</p>
                 <br/>
                 <p className="font-regular">The apps concept is based off of recreating movie scenes and sharing your creations with your friends.</p>
                 <br/>
                 <p className="font-regular mb-24">The development of this app design exposed me to new UX/UI techniques as well as learning how to model social media platforms.</p>

                 <div className="flex flex-col items-center justify-center w-full h-auto">
                    <Image src="/images/setjet/sj1.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj2.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj3.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj4.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj5.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj6.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj7.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj8.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj9.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj10.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj11.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj12.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj13.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/setjet/sj14.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                 </div>
            </div>
         </section>
    </main>

  );

}
