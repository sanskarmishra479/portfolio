import Container from "@/src/components/sections/Container";
import ProjectCard from "@/src/components/ui/ProjectCard";
import site from "@/src/data/site.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Sanskar Mishra",
    description:
        "Things I've built — CLIs, web apps, and everything in between.",
};

export default function ProjectsPage() {
    const { projects } = site;

    return (
        <div className="flex justify-center min-h-screen bg-mainSecondary">
            <Container>
                <header className="mt-12 px-4 pb-8">
                    <Link
                        href="/"
                        className="hero-link inline-block text-white/50 text-[12px] uppercase font-Geist_Mono tracking-wide hover:text-white"
                    >
                        ← Home
                    </Link>
                    <h1 className="mt-8 font-instrument-serif text-[clamp(32px,5vw,56px)] font-light text-mainPrimary leading-tight">
                        Projects
                    </h1>
                    <p className="mt-3 text-sm text-white/50 max-w-xl">
                        Things I've built — CLIs, web apps, and everything in
                        between.
                    </p>
                </header>

                <div className="border-t border-dashed border-white/10 px-4 py-8">
                    {projects.length === 0 ? (
                        <p className="text-sm text-white/50">
                            No projects yet.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.name}
                                    {...project}
                                    className="!w-full h-auto"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}
