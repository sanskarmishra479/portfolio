import Container from "../components/Container";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-secondary">
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
