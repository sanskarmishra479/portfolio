import Container from "../components/Section/Container";
import Hero from "../components/Section/Hero";
import TechStack from "../components/Section/TechStack";
import GithubContribution from "../components/Section/githubContribution/GithubContribution";
import Project from "../components/ui/Project";
import Seperator from "../components/ui/Seperator";
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
          <Project key={project.name} project={project} />
        ))}
        </div>
      </Container>
    </div>
  );
}
