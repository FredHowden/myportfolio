import { GithubIcon, HtmlIcon, CssIcon, ReactIcon, TailwindIcon, JavascriptIcon, TypescriptIcon, PythonIcon, PhpIcon, SqlIcon, NextjsIcon, ViteIcon, LinuxIcon, ScssIcon } from "@/components/svgs/svg"



export default function TechIWorkWith() {
    return (
        <section id="techIWorkWith" className="px-5">
            <h2 className="text-3xl mt-12">Tech I work with</h2>
            <div className="flex flex-wrap gap-8 mt-10">



                <div className="shadow-sm p-4 rounded-md flex-1">
                    <h3 className="text-2xl text-center">Backend</h3>
                    <ul className="flex flex-wrap justify-around gap-8 xs:min-w-64 pt-4">
                        <li className="text-lg flex flex-col items-center"><PythonIcon /><p className="opacity-85">python</p></li>
                        <li className="text-lg flex flex-col items-center"><PhpIcon /><p className="opacity-85">php</p></li>
                        <li className="text-lg flex flex-col items-center"><SqlIcon /><p className="opacity-85">sql</p></li>
                        <li className="text-lg flex flex-col items-center"><NextjsIcon /><p className="opacity-85">nextjs</p></li>
                    </ul>
                </div>

                <div className="shadow-sm p-4 rounded-md flex-1">
                    <h3 className="text-2xl text-center">Infrastructure</h3>
                    <ul className="flex flex-wrap justify-around gap-8 xs:min-w-64 pt-4">
                        <li className="text-lg flex flex-col items-center w-12"><GithubIcon /><p className="opacity-85">git</p></li>
                        <li className="text-lg flex flex-col items-center"><ViteIcon /><p className="opacity-85">vite</p></li>
                        <li className="text-lg flex flex-col items-center"><LinuxIcon /><p className="opacity-85">linux</p></li>
                    </ul>
                </div>

                <div className="shadow-sm p-4 rounded-md flex-1">
                    <h3 className="text-2xl text-center">Frontend</h3>
                    <ul className="flex flex-wrap justify-around gap-8 xs:min-w-64 pt-4">
                        <li className="text-lg flex flex-col items-center"><HtmlIcon /><p className="opacity-85">html</p></li>
                        <li className="text-lg flex flex-col items-center"><ReactIcon /><p className="opacity-85">react</p></li>
                        <li className="text-lg flex flex-col items-center"><CssIcon /><p className="opacity-85">css</p></li>
                        <li className="text-lg flex flex-col items-center"><ScssIcon /><p className="opacity-85">scss</p></li>
                        <li className="text-lg flex flex-col items-center"><TailwindIcon /><p className="opacity-85">tailwind</p></li>
                        <li className="text-lg flex flex-col items-center"><JavascriptIcon /><p className="opacity-85">javascript</p></li>
                        <li className="text-lg flex flex-col items-center"><TypescriptIcon /><p className="opacity-85">typescript</p></li>
                    </ul>
                </div>
            </div>

        </section>
    );
}