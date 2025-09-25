

import HeroSection from "@/components/sections/hero_section";
import AboutMeSection from "@/components/sections/aboutme_section";
import ProjectsSection from "@/components/sections/projects";



export default function HomePage() {
    return (
        <main className="mt-30 mb-30 max-sm:mx-4 sm:mx-10 sm:max-md:mx-10 md:max-lg:ml-20 md:ml-32 ">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection/>
        </main>
    );
}
