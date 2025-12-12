import hero_text from "@/../public/language/english/aboutme.json";
const { text } = hero_text; 


export default function AboutMeSection() {
    return (

        <section id="aboutMe" className="pt-20 max-w-[40rem] sm:ml-32 sm:mr-2 lg:ml-60">
            <h2 className="max-sm:text-3xl sm:text-3xl">About me</h2>

            <div className="opacity-95">
                {text}
            </div>
        </section>
    );
}