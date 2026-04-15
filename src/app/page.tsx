import Container from "../components/sections/Container";
import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import GithubContribution from "../components/sections/githubContribution/GithubContribution";
import BlogSection from "../components/sections/BlogSection";
import Seperator from "../components/ui/Separator";
import ProjectSection from "../components/sections/ProjectSection";
import Footer from "../components/sections/Footer";

export default async function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-mainSecondary">
      <Container>
        <Hero />
        <Seperator />
        <TechStack />
        <GithubContribution />
        <Seperator />
        <BlogSection />
        <ProjectSection />
        <Footer />
      </Container>
    </div>
  );
}
