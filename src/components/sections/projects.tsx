"use server"

import Image from "next/image";
import projects from "@/../public/text/english/projects.json";



export default async function ProjectsSection() {
    return (
        <section className="pt-44 sm:ml-0">
            <h2 className="text-3xl pb-3 m-2">projects</h2>
            <ul className="flex flex-wrap gap-14">
                {Promise.all(projects.map(async (project, index) => {
                    const mediumImage = (await import(`@/../public/img/${project.medium_screen_image}`)).default;
                    const smallImage = (await import(`@/../public/img/${project.small_screen_image}`)).default;
                    return (
                        <li key={index} className="rounded-md shadow-md max-sm:p-2 max-sm:w-[100%] max-md:w-[80%] md:w-[45%] sm:p-3">
                            <figure className="">
                                <Image className="hidden xs:block" src={mediumImage.src} width={mediumImage.width} height={mediumImage.height} alt="" />
                                <Image className="xs:hidden" src={smallImage.src} width={smallImage.width} height={smallImage.height} alt="" />
                                <figcaption className="pt-3">
                                    <h3 className="text-2xl">{project.project_name}</h3>
                                    <p>{project.project_description}</p>
                                </figcaption>
                            </figure>
                        </li>
                    )
                }))}

            </ul>
        </section>
    );
}