import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#F8F8F8] ">
         <div className="text-[#282628] w-full h-auto">
            <Image src="/images/mongovisioncard.png" width={1512} height={508} layout="responsive" className="object-fill"/>
         </div>
         <section>
            <div className="md:grid md:grid-cols-1 text-[#282628] items-center ml-36 mr-36 py-8 px-12 sm:py-16 xl:px-12">
                 <h2 className="text-2xl font-bold">Mongo Vision-</h2>
                 <h2 className="text-2xl font-regular">Data Interface</h2>
                 <br/>
                 <div className="flex flex-row gap-4">
                     <Image src="/images/figmaicon.png" width={50} height={50}/>
                     <Image src="/images/reacticon.png" width={50} height={43.36}/>
                     <Image src="/images/nodejsicon.png" width={50} height={50}/>
                     <Image src="/images/jsicon.png" width={50} height={50}/>
                  </div>
                  <br/>
                 <p className="font-bold">Project Details</p>
                 <br/>
                 <p className="font-bold">Problem</p>
                 <br/>
                 <p className="font-regular">Developers and project managers are working together to build a website used for a customer help experience. The website displays different text depending on the locale in which the user is located at. The different text for each locale, is changed and managed by project managers in a Mongo Database.</p>
                 <br/>
                 <p className="font-regular">When developers code the website, they refer to this data and use it to set up each locale html/ interface. Developers often need to complete updates of this data as project managers often will change the data and need to it be reflected on the website being deployed.</p>
                 <br/>
                 <p className="font-regular">At times, project managers make edits that are done incorrectly, potentially for the wrong locale set or a incorrect data insertion. As a result, developers make edits to the live website in places edits aren’t supposed to be made and then original data is lost to these edits. Backtracking these changes is a lengthy process, delaying deployments and requiring both PMs and developers to retrace their steps.</p>
                 <br/>
                 <p className="font-bold">Solution</p>
                 <br/>
                 <p className="font-regular">Mongo Vision provides an additional level of interface for PMs when trying to edit locale JSON data. Instead of editing the Mongo Database directly which is the FINAL output for the developers to refer to, they can make edits on Mongo Vision.</p>
                 <br/>
                 <p className="mb-24 font-regular">The benefit of using Mongo Vision is that edits made here are completed and then set to be approved by another PM for finalization, which would then mean updated in the Mongo Database. By editing in this secondary data interface, it adds another level of security to the process of data alteration.</p>

                 <div className="flex items-center justify-center w-full h-auto">
                     <video controls preload="auto">
                         <source src="/videos/mvdemofinal.mp4" type="video/mp4" />
                     </video>
                  </div>

            </div>
         </section>
    </main>

  );

}
