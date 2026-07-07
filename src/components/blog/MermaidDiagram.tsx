"use client";

import { useEffect, useRef, useState } from "react";

let counter = 0;

export default function MermaidDiagram({ chart }: { chart: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [uid] = useState(() => `mermaid-${++counter}`);

    useEffect(() => {
        let cancelled = false;

        async function render() {
            const mermaid = (await import("mermaid")).default;
            mermaid.initialize({ startOnLoad: false, theme: "dark" });

            if (!ref.current || cancelled) return;

            // Clear previous render before re-rendering
            ref.current.removeAttribute("data-processed");
            ref.current.innerHTML = "";

            const { svg } = await mermaid.render(uid, chart.trim());
            if (!cancelled && ref.current) {
                ref.current.innerHTML = svg;
            }
        }

        render();

        return () => {
            cancelled = true;
        };
    }, [chart, uid]);

    return (
        <div
            ref={ref}
            className="my-6 flex justify-center overflow-x-auto [&_svg]:max-w-full"
        />
    );
}
