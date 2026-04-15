import Link from "next/link";
import site from "../../data/site.json";
const { links } = site;

export default function Footer() {
  return (
    <footer className="w-full h-40 border-t border-dashed border-white/10 flex flex-col justify-center items-center overflow-hidden">
    <div className="flex justify-center items-center">
    <p className="text-white/50 text-[12px] font-Geist_Mono uppercase tracking-wider pt-25">
          &copy; {new Date().getFullYear()} Sanskar Mishra. All rights reserved.
        </p>
    </div>
        <h1 className="font-instrument-serif text-[clamp(120px,25.5vw,200px)]/[1.1] font-light text-white opacity-30 leading-none">
          sanskar
        </h1>
    </footer>
  );
}
