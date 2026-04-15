import SectionHeader from "../ui/SectionHeader";
import site from "../../data/site.json";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectSection() {
  return (
    <section className="w-full px-3 py-8">
      <SectionHeader title="Projects" href="/projects" />
    <div className="flex flex-wrap gap-3">
      {site.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
    </div>
    </section>
  );
}