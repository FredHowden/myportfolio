

"use client";

import Image from "next/image";
import { useState } from "react";
import banana from "@/app/img/banana.jpg";
import HamburgerIcon from "./hamburgerIcon";


function HamburgerButton({ as: Tag = 'button', ...props }) {
  return <Tag {...props} />;
}




export default function Header() {
    const [isHamburgerOpen, setisHamburgerOpen] = useState(false);

    const toggleMenu = () => {
        setisHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <header className="px-10">
            <nav className="flex items-center justify-between">
                <Image src={banana} alt="banana" className="max-w-40" />
                <ul className={`header_nav ${isHamburgerOpen ? "flex" : "hidden"}`}>
                    <li><a href="">home</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">tech I use</a></li>
                    <li><a href="">collaborators</a></li>
                    <li><a href="">contact me</a></li>
                    <li><a href="">CV</a></li>
                </ul>

                <HamburgerButton
                    onClick={toggleMenu}
                    className="sm:hidden z-10 flex flex-col gap-1 cursor-pointer relative w-8 h-8"
                    aria-label="Toggle menu">
                    <HamburgerIcon isHamburgerOpen={isHamburgerOpen} />
                </HamburgerButton>
            </nav>
        </header>
    );
}


