"use client";

import { useEffect, useRef, useState } from "react";

let counter = 0;

export default function MermaidDiagram({ chart }: { chart: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [uid] = useState(() => `mermaid-${++counter}`);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setError(null);

        async function render() {
            try {
                const mermaid = (await import("mermaid")).default;
                mermaid.initialize({ startOnLoad: false, theme: "dark" });

                if (!ref.current || cancelled) return;

                ref.current.removeAttribute("data-processed");
                ref.current.innerHTML = "";

                const { svg } = await mermaid.render(uid, chart.trim());
                if (!cancelled && ref.current) {
                    ref.current.innerHTML = svg;
                }
            } catch (err) {
                if (!cancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Diagram failed to render",
                    );
                }
            }
        }

        render();

        return () => {
            cancelled = true;
        };
    }, [chart, uid]);

    if (error) {
        return (
            <pre className="my-6 overflow-x-auto rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-xs text-red-400/80 font-Geist_Mono">
                {chart}
            </pre>
        );
    }

    return (
        <div
            ref={ref}
            className="my-6 flex justify-center overflow-x-auto [&_svg]:max-w-full"
        />
    );
}
