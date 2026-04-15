import TechIcon from "./TechIcons";

export default function TechStackPill({ label, size, children }: { label: string; size?: number; children?: React.ReactNode }) {
  return (
    <div className="border border-white/10 px-2 py-1 flex items-center gap-2">
      <TechIcon label={label} size={size} />
      <span className="text-white text-[12px] font-Geist_Mono">{children}</span>
    </div>
  );
}