"use client";

import React, {useState} from "react";

import Link from "next/link";

import NavLink from "./NavLink"

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

import MenuOverlay from "./MenuOverlay";




const navLinks = [

    {

        title:"about",

        path:"/about"

    }

]




const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return(

        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#F8F8F8] bg-opacity-100">

            <div className="flex flex-wrap it item-center justify-between mx-auto p-10 py">

                <Link href={"/"} className="sm:text-xl text-black font-semibold">

                    bjd

                </Link>

                <div className="mobile-menu block md:hidden">

                    {

                        !navbarOpen ?(

                            <button onClick={()=> setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800">

                                <Bars3Icon className="h-5 w-5"/>

                            </button>

                        ) : (

                            <button onClick={()=> setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800">

                                <XMarkIcon className="h-5 w-5"/>

                            </button>

                        )

                    }

                </div>

                <div className="menu hidden flex flex-row md:block md:w-auto" id="navbar">

                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">

                        {navLinks.map((link,index)=>(

                        <li key={index}>

                            <NavLink href={link.path} title={link.title}/>

                        </li>

                        ))}
                        <a href="mailto:bendeacetis@gmail.com" className="sm:text-xl text-black font-semibold">contact</a>


                    </ul>

                </div>

            </div>

            {navbarOpen ? <MenuOverlay links={navLinks}/>:null}

        </nav>




    );

}

export default Navbar;
