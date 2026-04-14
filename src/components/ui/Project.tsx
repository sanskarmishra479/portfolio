import { PiArrowUpRightBold, PiGithubLogo  } from "react-icons/pi";
import Link from "next/link";
import TechComp from "./TechComp";


interface ProjectProps {
  project: {
    image: string;
    name: string;
    desc: string;
    live: string;
    github: string;
    stack: string[];
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="group border border-dashed border-white/10 p-2 h-100 w-100 cursor-pointer hover:border-white/30 hover:bg-white/2 ">
        <img src={project.image} alt={project.name} className="w-full h-55 object-cover grayscale group-hover:grayscale-0" />
      <div className="p-2">
        <div className="flex items-center justify-between gap-2"><h1 className="text-white text-[12px] font-Geist_Mono">{project.name}</h1>
        <div className="flex items-center gap-2">
        <Link href={project.live || ""} target="_blank" className="text-white text-[12px] font-Geist_Mon px-2 py-1 "><PiArrowUpRightBold size={12} /></Link>
        <Link href={project.github || ""} target="_blank" className="text-white text-[12px] font-Geist_Mon px-2 py-1 "><PiGithubLogo size={12} /></Link>
        </div>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-2 flex-wrap">
          {project.stack.map((tech) => (
            <div key={tech} className="flex items-center gap-1">
              <TechComp label={tech} size={12} >{tech}</TechComp>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-[12px] font-Geist_Mono">{project.desc}</p>
      </div>
    </div>
  );
}