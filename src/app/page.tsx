import Container from "../components/Section/Container";
import Hero from "../components/Section/Hero";
import TechStack from "../components/Section/TechStack";
import GithubContribution from "../components/Section/GithubContribution";
import Seperator from "../components/ui/Seperator";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-mainSecondary">
      <Container>
        <Hero />
        <Seperator />
        <TechStack />
        <GithubContribution />
      </Container>
    </div>
  );
}
