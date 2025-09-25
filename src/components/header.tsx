

"use client";

import Image from "next/image";
import { useState } from "react";
import HamburgerIcon from "@/components/icons/hamburgerIcon";
import banana from "@/../public/img/banana.jpg";



function HamburgerButton({ ...props }) {
    return <button {...props} />;
}


export default function Header() {
    const [isHamburgerOpen, setisHamburgerOpen] = useState(false);

    const toggleMenu = () => {
        setisHamburgerOpen(!isHamburgerOpen);
    };


    return (
        <header className="px-10 flex items-center">
            <Image src={banana} alt="banana" className="max-w-30 min-w-20" />

            <nav className="flex items-center sm:ml-auto">
                <ul className={`flex max-sm:bg-blue-200 ${isHamburgerOpen ? "max-sm:translate-y-0" : "max-sm:-translate-y-full"} max-sm:fixed max-sm:inset-0 max-sm:transition-all max-sm:duration-500 max-ms:ease-in-out max-sm:flex-col max-sm:pt-16 max-sm:text-3xl sm:gap-4`}>
                    <li><a className={`max-sm:block max-sm:px-10 max-sm:active:border-2 max-sm:active:border-dotted`} href="">home</a></li>
                    <li><a className={`max-sm:block max-sm:px-10 max-sm:active:border-2 max-sm:active:border-dotted`} href="">projects</a></li>
                    <li><a className={`max-sm:block max-sm:px-10 max-sm:active:border-2 max-sm:active:border-dotted`} href="">tech I use</a></li>
                    <li><a className={`max-sm:block max-sm:px-10 max-sm:active:border-2 max-sm:active:border-dotted`} href="">collaborators</a></li>
                    <li><a className={`max-sm:block max-sm:px-10 max-sm:active:border-2 max-sm:active:border-dotted`} href="">contact me</a></li>
                    <li><a className={`max-sm:block max-sm:px-10 max-sm:active:border-2 max-sm:active:border-dotted`} href="">CV</a></li>
                </ul>
            </nav>
            <HamburgerButton
                onClick={toggleMenu}
                className="max-sm:z-1 max-sm:flex max-sm:flex-col max-sm:gap-1 max-sm:cursor-pointer max-sm:relative max-sm:w-8 max-sm:h-8 max-sm:ml-auto sm:hidden"
                aria-label="Toggle menu">
                <HamburgerIcon isHamburgerOpen={isHamburgerOpen} />
            </HamburgerButton>

        </header>
    );
}


