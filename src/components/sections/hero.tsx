import Link from "next/link";

import { GithubIcon, EmailIcon, LinkedinIcon } from "@/components/svgs/svg"
import Image from "next/image";
import hero_text from "@/../public/language/english/hero.json";
const { name_introduction, job_introduction, main_introduction } = hero_text;
export default function HeroSection() {


    return (
        <section id="home" className="flex flex-col-reverse items-center justify-center sm:flex-row sm:flex sm:justify-around">
            <div>
                <div className="pt-10 opacity-80">
                    {name_introduction}
                </div>
                <div className="max-sm:text-4xl max-sm:mt-0.5 sm:text-5xl">
                    Fred Howden.
                </div>
                <div className="max-sm:text-2xl max-sm:leading-none max-sm:mt-1 sm:mt-1 sm:text-2xl opacity-90">
                    {job_introduction}
                </div>
                <p className="max-sm:mt-3 max-w-[30rem] text-gray-700 dark:text-gray-300">
                    {main_introduction}
                </p>
                <ul className="flex flex-wrap gap-4 max-sm:mt-4 sm:mt-2">
                    <li className="p-2 rounded-md"><Link target="_blank" rel="noopener noreferrer" href="mailto:fredhhowden@email.com?subject=H"><EmailIcon /></Link></li>
                    <li className="p-2 rounded-md w-14"><Link target="_blank" rel="noopener noreferrer" href="https://github.com/FredHowden/"><GithubIcon /></Link></li>
                    <li className="p-2 rounded-md"><Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fred-howden-397b74252/"> <LinkedinIcon /></Link></li>
                </ul>
            </div>

            {/* <div className="flex items-center justify-center"> */}
                <img className="w-70 sm:w-64 mt-10 rounded-2xl" src="/img/hero_image4.jpg" alt="Image of Fred" />
            {/* </div> */}

        </section>
    );
}