"use client";

import { useState } from "react";
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend,
  type Activity,
} from "@/src/components/kibo-ui/contribution-graph";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function ContributionGraphClient({
  data,
  totalCount,
}: {
  data: Activity[];
  totalCount: number;
}) {
  const [hovered, setHovered] = useState<Activity | null>(null);

  return (
    <ContributionGraph data={data} totalCount={totalCount}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            activity={activity}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
            onMouseEnter={() => setHovered(activity)}
            onMouseLeave={() => setHovered(null)}
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <div className="text-white/40 font-Geist_Mono text-[12px]">
          {hovered
            ? `${hovered.count} contribution${hovered.count !== 1 ? "s" : ""} on ${formatDate(hovered.date)}`
            : `Total ${totalCount.toLocaleString()} contributions in lifetime`}
        </div>
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}
