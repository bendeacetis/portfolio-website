import Link from "next/link";

import React from "react";




const NavLink = ({href,title}) => {

    return(

        <Link href={href} className="font-semibold block py-2 pl-3 pr-4 text-[#282628] sm:text-xl rounded md:p-0 ">

            {title}

        </Link>




    )

}




export default NavLink;
