import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F8F8] ">
         <div className="text-[#282628] w-full h-auto">
            <Image src="/images/climatizecard.png" width={1512} height={508} layout="responsive" className="object-fill"/>
         </div>
         <section>
            <div className="md:grid md:grid-cols-1 text-[#282628] items-center ml-36 mr-36 py-8 px-12 sm:py-16 xl:px-12">
                 <h2 className="text-2xl font-bold">Climatize-</h2>
                 <h2 className="text-2xl font-regular">Personalized Weather</h2>
                 <br/>
                 <div className="flex flex-row">
                    <Image src="/images/figmaicon.png" width={50} height={50}/>
                 </div>
                 <br/>
                 <p className="font-bold">Project Details</p>
                 <br/>
                 <p className="font-regular">DesignU is a club at the University of Minnesota that works to connect students with local startup companies in order to provide design services. Spring 2023 I had the opportunity to work with a company Weathervane, in order to design and wireframe an app concept for their company.</p>
                 <br/>
                 <p className="font-regular">I worked along side a team of four individuals, where we met weekly to implement designs based on our clients needs. We met with our client gaining insight about their goals for the app and also shared our current designs to make edits/ alter frameworks.</p>
                 <br/>
                 <p className="font-regular mb-24">Through this opportunity, I gained experience with a client/service dynamic and producing designs in a real world setting. I also gained experience working with new platforms such as Figma.</p>

                 <div className="flex flex-col items-center justify-center w-full h-auto">
                    <Image src="/images/climatize/climatize1.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize2.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize3.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize4.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize5.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize6.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize7.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize8.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize9.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize10.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize11.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize12.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize13.png" width={1920} height={1080} layout="responsive" className="object-fill"/>
                    <Image src="/images/climatize/climatize14.png" width={1920} height={1080} layout="responsive" className="object-fill"/>


                 </div>

            </div>
         </section>
    </main>

  );

}
