"use client"
import Link from "next/link";

import { GithubIcon, EmailIcon, LinkedinIcon } from "@/components/svgs/svg"
import hero_text from "@/../public/language/english/hero.json";
const { name_introduction, job_introduction, main_introduction } = hero_text;
export default function HeroSection() {


    return (
        <section id="home" className=" flex gap-44">
            <div>
                <div className="pt-30 opacity-80">
                    {name_introduction}
                </div>
                <div className="max-sm:text-4xl max-sm:mt-0.5 sm:text-5xl">
                    Fred Howden.
                </div>
                <div className="max-sm:text-2xl max-sm:leading-none max-sm:mt-1 sm:mt-1 sm:text-2xl opacity-90">
                    {job_introduction}
                </div>
                <p className="max-sm:mt-3 max-w-[30rem] text-gray-800">
                    {main_introduction}
                </p>
                <ul className="flex flex-wrap gap-4 max-sm:mt-4 sm:mt-2">
                    <li className="p-2 rounded-md"><Link target="_blank" rel="noopener noreferrer" className="text-gray-800" href="mailto:fredhhowden@email.com?subject=H"><EmailIcon /></Link></li>
                    <li className="p-2 rounded-md w-14"><Link target="_blank" rel="noopener noreferrer" className="text-gray-800" href="https://github.com/FredHowden/"><GithubIcon /></Link></li>
                    <li className="p-2 rounded-md"><Link target="_blank" rel="noopener noreferrer" className="text-gray-800" href="https://www.linkedin.com/in/fred-howden-397b74252/"> <LinkedinIcon /></Link></li>
                </ul>
            </div>

            <div>
                <img className="w-64 pt-10" src="/img/hero_image3.jpg" alt="" /> : ""
            </div>

        </section>
    );
}