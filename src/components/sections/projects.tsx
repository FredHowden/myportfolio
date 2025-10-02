"use server"

import Image from "next/image";
import Link from "next/link";

import projects from "@/../public/language/english/projects.json";
import { GithubIcon, NewWindowIcon } from "../svgs/svg";

export default async function ProjectsSection() {
    return (
        <section id="projects" className="pt-44">
            <h2 className="text-3xl pb-3 m-2">projects</h2>
            <ul className="flex flex-wrap gap-14">

                {projects.map((project) => (
                    <li key={project.id} className="flex flex-col rounded-md shadow-md max-sm:p-2 max-sm:w-[100%] max-md:w-[80%] md:w-[45%] sm:p-3 ">
                        <figure className="">
                        <div className="relative aspect-[9/11] xs:aspect-video">
                            <Image className="hidden xs:block object-contain" fill alt="" src={project.images.medium_screen} />
                            <Image className="object-contain xs:hidden outline-black-3" alt="" fill src={project.images.small_screen} />
                        </div>
                        <figcaption className="flex flex-col pt-3">
                            <h3 className="text-2xl">{project.name}</h3>
                            <p className="opacity-90">{project.description}</p>
                        </figcaption>

                        </figure>
                        <div className="flex justify-between mt-auto">
                            <Link href={project.github_link} target="_blank" rel="noopener noreferrer" className="w-8"> <GithubIcon /></Link>
                            <Link href={project.website_link} target="_blank" rel="noopener noreferrer" className="p-1 rounded-sm w-8"><NewWindowIcon /></Link>
                        </div>
                    </li>
                ))}

            </ul>
        </section>
    );
}