interface PageProps { params: Promise<{ id: number }>; }
import projects from "@/../public/language/english/projects.json";

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const project = projects[id]
    return (
        <main className="pt-44">
            <h1>{project.name}</h1>
            <a href={project.website_link}>view website</a>

            <div>
                <p>organization</p>
                <p>
                    <a href="https://www.ma-web.nl/">Mediacollege Amsterdam</a>
                    <a href="https://lbs.se/stockholmsodra/">Kreativa Gymnasiet</a>
                </p>

                <p>my role</p>
                <p>making the whole website</p>

                <p>timeline</p>

                <p>teamates</p>

                <p>goal</p>
                <p>problems</p>
                <p>solutions</p>
            </div>
        </main>
    );
}
