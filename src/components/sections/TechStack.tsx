import site from "../../data/site.json";
import TechComp from "../ui/TechStackPill";

export default function TechStack() {
  return (
    <div className="border-b border-dashed border-white/10 px-4 py-4">
      <div className="flex flex-wrap gap-2">
        {site.aboutStack.map((tech) => (
          <TechComp key={tech} label={tech} size={11}>{tech}</TechComp>
        ))}
      </div>
    </div>
  );
}