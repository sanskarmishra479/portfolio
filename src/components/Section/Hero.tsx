import site from "../../data/site.json";
import Link from 'next/link'
const { aboutParagraphs, links } = site;

export default function Hero() {
  return (
    <div className="h-auto w-full mt-12">
      <p className="text-[12px] text-white/50 flex items-center gap-2 font-Geist_Mono uppercase border-t border-b border-dashed border-white/10 px-4 py-2">
        <span className="w-2 h-2 bg-[#22c55e] rounded-full inline-block animate-pulse" />
        <span>
          Full Stack Developer & Data Science Engineer — Prayagraj, IN
        </span>
      </p>
      <h1 className="animate-fade-up-medium font-instrument-serif text-[clamp(36px,6.5vw,88px)]/[1.1] font-light text-white p-4">
        sanskar mishra
      </h1>
      <div className=" text-[12px] text-white/50 flex items-center gap-2 font-Geist_Mono uppercase border-t border-b border-dashed border-white/10 px-4 py-2">
        {aboutParagraphs.map((paragraph, index) => (
          <h1 className="w-120" key={index}>{paragraph}</h1>
        ))}
      </div>
      <div className="px-4 py-2 flex items-center gap-6 w-full border-b border-dashed border-white/10">
        {links.map((link, index) => (
          <Link className="hero-link text-white text-[12px] hover:text-white uppercase font-Geist_Mono" href={link.href} key={index} target={link.external ? "_blank" : "_self"}>{link.label}</Link>
        ))}
      </div>
    </div>
  );
}
