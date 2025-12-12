

import HeroSection from "@/components/sections/hero";
import AboutMeSection from "@/components/sections/aboutme";
import ProjectsSection from "@/components/sections/projects";
import TechIWorkWith from "@/components/sections/techIWorkWith";

export default function HomePage() {
    return (
        <main className="mt-20 mb-30 max-sm:mx-4 sm:mx-10 sm:max-md:mx-10 md:max-lg:mx-20 md:mx-22 ">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
            <TechIWorkWith/>
        </main>
    );
}
