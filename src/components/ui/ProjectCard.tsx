import { PiArrowUpRightBold, PiGithubLogo } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import TechComp from "./TechStackPill";
import { Project } from "@/src/types/site";

export default function ProjectCard({
  num,
  name,
  desc,
  stack,
  image,
  github,
  live,
}: Project) {
  return (
    <div className="group border border-dashed border-white/10 p-2 h-100 w-100 cursor-pointer hover:border-white/30 hover:bg-white/2 ">
      <Image
        src={image}
        alt={`${name} project image`}
        width={385}
        height={200}
        loading="eager"
        className="object-cover grayscale group-hover:grayscale-0 w-full h-54"
      />
      <div className="p-2">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-white text-[18px] font-instrument-serif">{name}</h1>
          <div className="flex items-center gap-2">
            <Link
              href={live || ""}
              target="_blank"
              className="text-white text-[12px] font-Geist_Mon px-2 py-1 "
            >
              <PiArrowUpRightBold size={12} />
            </Link>
            <Link
              href={github || ""}
              target="_blank"
              className="text-white text-[12px] font-Geist_Mon px-2 py-1 "
            >
              <PiGithubLogo size={12} />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-2 flex-wrap">
          {stack.map((tech) => (
            <div key={tech} className="flex items-center gap-1">
              <TechComp label={tech} size={12}>
                {tech}
              </TechComp>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-[12px] font-Geist_Mono">{desc}</p>
      </div>
    </div>
  );
}
