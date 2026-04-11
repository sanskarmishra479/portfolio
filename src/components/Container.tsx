export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container w-240 h-auto border-l border-r border-dashed border-white/10">{children}</div>;
}
