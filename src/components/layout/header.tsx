"use client";

import Link from "next/link";
import { useState } from "react";
import HamburgerIcon from "@/components/icons/hamburgerIcon";



function HamburgerButton({ ...props }) {
    return <button {...props} />;
}


export default function Header() {
    const [isHamburgerOpen, setisHamburgerOpen] = useState(false);

    const toggleMenu = () => {
        setisHamburgerOpen(!isHamburgerOpen);
    };


    return (
        <header className="dark:bg-[#141414] bg-gray-100 px-10 py-4 flex items-center fixed top-0 w-full sm:opacity-95 z-1">
            <a href="http://fredhhowden.com/">Fred Howden</a>
            <nav className="flex items-center sm:ml-auto">
                <ul className={`flex px-10 gap-5 max-sm:bg-gray-100 dark:max-sm:bg-[#141414] ${isHamburgerOpen ? "max-sm:translate-y-0" : "max-sm:-translate-y-full"} max-sm:fixed max-sm:inset-0 max-sm:transition-all max-sm:duration-500 max-ms:ease-in-out max-sm:flex-col max-sm:pt-16 max-sm:text-3xl sm:gap-4`}>
                    <li><Link onClick={toggleMenu} className={`max-sm:block max-sm:active:border-2 max-sm:active:border-dotted`} href="#home">Home</Link></li>
                    <li><Link onClick={toggleMenu} className={`max-sm:block max-sm:active:border-2 max-sm:active:border-dotted`} href="#aboutMe">About Me</Link></li>
                    <li><Link onClick={toggleMenu} className={`max-sm:block max-sm:active:border-2 max-sm:active:border-dotted`} href="#projects">Projects</Link></li>
                    <li><Link onClick={toggleMenu} className={`max-sm:block max-sm:active:border-2 max-sm:active:border-dotted`} href="#techIWorkWith">Tech</Link></li>
                </ul>
            </nav>
            <HamburgerButton
                onClick={toggleMenu}
                className="max-sm:z-1 max-sm:flex max-sm:flex-col max-sm:gap-1 max-sm:cursor-pointer max-sm:relative max-sm:min-w-8 max-sm:min-h-8 max-sm:ml-auto sm:hidden"
                aria-label="Toggle menu">
                <HamburgerIcon isHamburgerOpen={isHamburgerOpen} />
            </HamburgerButton>

        </header>
    );
}


