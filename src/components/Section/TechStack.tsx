import site from "../../data/site.json";
import TechComp from "../ui/TechComp";

export default function TechStack() {
  return (
    <div className="border-b border-t border-dashed border-white/10 px-4 py-2">
      <div className="flex flex-wrap gap-2">
        {site.aboutStack.map((tech) => (
          <TechComp key={tech} label={tech} size={11}>{tech}</TechComp>
        ))}
      </div>
    </div>
  );
}