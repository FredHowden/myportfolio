"use server"

import Image from "next/image";
import projects from "@/../public/text/english/projects.json";

const mediumScreen = await import(`@/../public/img/${projects[0].medium_screen_image}`);
const smallScreen = await import(`@/../public/img/${projects[0].small_screen_image}`);

export default async function ProjectsSection() {
    return (
        <section className="pt-44 sm:ml-0">
            <h2 className="text-3xl pb-3 m-2">projects</h2>
            <ul className="flex flex-wrap gap-14">
                <li className="rounded-md shadow-md max-sm:p-2 max-sm:w-[100%] max-md:w-[80%] md:w-[45%] sm:p-3">
                    <figure className="">
                        <Image className="hidden xs:block" src={mediumScreen} alt="" />
                        <Image className="xs:hidden" src={smallScreen} alt="" />
                        <figcaption className="pt-3">
                            <h3 className="text-2xl">{projects[0].project_name}</h3>
                            <p>{projects[0].project_description}</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    );
}