import Container from "../components/sections/Container";
import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import GithubContribution from "../components/sections/githubContribution/GithubContribution";
import ProjectCard from "../components/ui/ProjectCard";
import Seperator from "../components/ui/Separator";
import site from "../data/site.json";


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-mainSecondary">
      <Container>
        <Hero />
        <Seperator />
        <TechStack />
        <GithubContribution />
        <Seperator />
        <div className="flex flex-wrap justify-between p-3">
        {site.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
        </div>
      </Container>
    </div>
  );
}
