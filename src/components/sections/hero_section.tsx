import GithubIcon from "@/components/icons/githubIcon";
import EmailIcon from "@/components/icons/emailIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";

import hero_text from "@/../public/text/english/hero.json";
const { name_introduction, job_introduction, main_introduction } = hero_text;

export default function HeroSection() {
    return (
        <section className="">
            <div>
                {name_introduction}
            </div>
            <div className="max-sm:text-4xl max-sm:mt-0.5 sm:text-5xl">
                Fred Howden.
            </div>
            <div className="max-sm:text-2xl max-sm:leading-none max-sm:mt-1 sm:mt-1 sm:text-2xl">
                {job_introduction}
            </div>
            <p className="max-sm:mt-3 max-w-[30rem]">
                {main_introduction}
            </p>
            <ul className="flex gap-4 max-sm:mt-4 sm:mt-2">
                <li className="p-2 rounded-md"><a className="text-gray-800" href=""><EmailIcon /></a></li>
                <li className="p-2 rounded-md"><a className="text-gray-800" href=""><GithubIcon /></a></li>
                <li className="p-2 rounded-md"><a className="text-gray-800" href=""> <LinkedinIcon /> </a></li>
            </ul>
        </section>
    );
}