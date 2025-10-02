

import HeroSection from "@/components/sections/hero";
import AboutMeSection from "@/components/sections/aboutme";
import ProjectsSection from "@/components/sections/projects";
import TechIWorkWith from "@/components/sections/techIWorkWith";

export default function HomePage() {
    return (
        <main className="mt-30 mb-30 max-sm:mx-4 sm:mx-10 sm:max-md:mx-10 md:max-lg:mx-20 md:mx-22 ">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
            <TechIWorkWith/>
        </main>
    );
}
// "use client"
// import { useState, useEffect } from "react";

// export default function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCount((prev) => prev + 1);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="p-4 text-center">
//             <h1 className="text-2xl font-bold">Changing Every 5 Seconds</h1>
//             <p className="mt-4 text-lg">Value: {count}</p>
//         </div>
//     );
// }
