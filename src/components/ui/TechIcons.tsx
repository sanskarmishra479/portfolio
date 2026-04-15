import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiPandas,
  SiNumpy,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { FaPython, FaNodeJs } from "react-icons/fa";

const techIconMap = {
  "next.js": { Icon: SiNextdotjs, color: "#0a0a0a" },
  postgres: { Icon: SiPostgresql, color: "#336791" },
  typescript: { Icon: SiTypescript, color: "#3178c6" },
  docker: { Icon: SiDocker, color: "#2496ed" },
  react: { Icon: SiReact, color: "#61dafb" },
  python: { Icon: FaPython, color: "#3776ab" },
  "node.js": { Icon: FaNodeJs, color: "#339933" },
  pandas: { Icon: SiPandas, color: "#150458" },
  numpy: { Icon: SiNumpy, color: "#010101" },
  "tailwind css": { Icon: SiTailwindcss, color: "#38bdf8" },
  mysql: { Icon: SiMysql, color: "#4479a1" },
  mongodb: { Icon: SiMongodb, color: "#47a248" },
};

function resolveIcon(label: string) {
  const normalized = String(label).trim().toLowerCase();
  return techIconMap[normalized as keyof typeof techIconMap] || null;
}

export default function TechIcon({
  label,
  size = 11,
}: {
  label: string;
  size?: number;
}) {
  const match = resolveIcon(label);
  if (!match) {
    return null;
  }

  const { Icon, color } = match;

  return (
    <Icon
      aria-hidden="true"
      size={size}
      color={color}
      style={{ flexShrink: 0 }}
    />
  );
}
