

import HeroSection from "@/components/hero_section";
import AboutMe from "@/components/aboutme_section";
import banana from "@/public/img/banana.jpg"
import SiepieProjectImage from "@/public/img/siepie_project.png"
import Image from "next/image";

export default function HomePage() {
    return (
        <main className="mt-30 max-sm:mx-10 sm:ml-32">
            <HeroSection />
            <AboutMe />

            <section className="pt-44">
                <h2 className="text-3xl pb-10">projects</h2>
                <div className="bg-gray-200 max-w-96 rounded-md">
                    <Image src={SiepieProjectImage} alt="Siepie project image" className="" />
                    <div className="pt-2 p-1.5">
                        <h3 className="text-2xl">Sweden project</h3>
                        <p className="pt-0.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia necessitatibus illum enim magni rerum suscipit delectus non, animi sapiente nisi, modi nulla. Blanditiis eveniet vitae perferendis ab inventore maiores?</p>
                    </div>

                </div>
            </section>
        </main>
    );
}
