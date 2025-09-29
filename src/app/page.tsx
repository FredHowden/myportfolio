

import HeroSection from "@/components/sections/hero";
import AboutMeSection from "@/components/sections/aboutme";
import ProjectsSection from "@/components/sections/projects";
import { GithubIcon, HtmlIcon, CssIcon, NodeIcon, ReactIcon, TailwindIcon, JavascriptIcon, TypescriptIcon, PythonIcon, PhpIcon, SqlIcon, NextjsIcon, ViteIcon, LinuxIcon, ScssIcon } from "@/components/svgs/svg"

export default function HomePage() {
    return (
        <main className="mt-30 mb-30 max-sm:mx-4 sm:mx-10 sm:max-md:mx-10 md:max-lg:ml-20 md:ml-32 ">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />

            <section>
                <h2 className="text-3xl mt-12">tech I work with</h2>
                <div className="flex flex-row flex-wrap gap-8 mt-10">



                    <div className="shadow-sm p-4 rounded-md flex-1">
                        <h3 className="text-2xl">backend</h3>
                        <ul className="flex flex-wrap gap-4 mt-4 px-2">
                            <li className="text-lg flex flex-col items-center"><PythonIcon /><p>python</p></li>
                            <li className="text-lg flex flex-col items-center"><PhpIcon /><p>php</p></li>
                            <li className="text-lg flex flex-col items-center"><SqlIcon /><p>sql</p></li>
                            <li className="text-lg flex flex-col items-center"><NodeIcon /><p>node</p></li>
                            <li className="text-lg flex flex-col items-center"><NextjsIcon /><p>nextjs</p></li>
                        </ul>
                    </div>

                    <div className="shadow-sm p-4 rounded-md flex-1">
                        <h3 className="text-2xl">Infrastructure</h3>
                        <ul className="flex flex-wrap gap-4 mt-4 px-2">
                            <li className="text-lg flex flex-col items-center"><GithubIcon /><p>git</p></li>
                            <li className="text-lg flex flex-col items-center"><ViteIcon /><p>vite</p></li>
                            <li className="text-lg flex flex-col items-center"><LinuxIcon /><p>linux</p></li>
                        </ul>
                    </div>

                    <div className="shadow-sm p-4 rounded-md flex-1">
                        <h3 className="text-2xl">frontend</h3>
                        <ul className="flex flex-wrap gap-4 mt-4 px-2">
                            <li className="text-lg flex flex-col items-center"><HtmlIcon /><p>html</p></li>
                            <li className="text-lg flex flex-col items-center"><ReactIcon /><p>react</p></li>
                            <li className="text-lg flex flex-col items-center"><CssIcon /><p>css</p></li>
                            <li className="text-lg flex flex-col items-center"><ScssIcon /><p>scss</p></li>
                            <li className="text-lg flex flex-col items-center"><TailwindIcon /><p>tailwind</p></li>
                            <li className="text-lg flex flex-col items-center"><JavascriptIcon /><p>javascript</p></li>
                            <li className="text-lg flex flex-col items-center"><TypescriptIcon /><p>typescript</p></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
