"use server"

import Image from "next/image";
import projects from "@/../public/language/english/projects.json";



export default async function ProjectsSection() {
    return (
        <section className="pt-44 sm:ml-0">
            <h2 className="text-3xl pb-3 m-2">projects</h2>
            <ul className="flex flex-wrap gap-14">

                {projects.map((project) => (
                    <li key={project.id} className="rounded-md shadow-md max-sm:p-2 max-sm:w-[100%] max-md:w-[80%] md:w-[45%] sm:p-3">
                        <a href={`project_info/${project.id}`}>
                            <figure className="">
                                <div className="relative aspect-[9/11] xs:aspect-video">
                                    <Image className="hidden xs:block object-contain" fill alt="" src={project.images.medium_screen} />
                                    <Image className="xs:hidden object-contain" alt="" fill src={project.images.small_screen} />
                                </div>
                                <figcaption className="pt-3">
                                    <h3 className="text-2xl">{project.name}</h3>
                                    <p>{project.description}</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                ))}

            </ul>
        </section>
    );
}