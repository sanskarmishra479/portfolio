import { unstable_cache } from "next/cache";
import { ContributionGraphClient } from "./GithubContributionClient";

type GitHubContributionsResponse = {
  total: Record<string, number>;
  contributions: Array<{ date: string; count: number; level: number }>;
};

const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(
      "/v4/sanskarmishra479",
      "https://github-contributions-api.jogruber.de"
    );
    const response = await fetch(url);
    const data = (await response.json()) as GitHubContributionsResponse;
    const lifetimeTotal = Object.values(data.total).reduce((a, b) => a + b, 0);

    return { contributions: data.contributions, lifetimeTotal };
  },
  ["github-contributions"],
  { revalidate: 60 * 60 * 24 }
);

export default async function GithubContribution() {
  const { contributions, lifetimeTotal } = await getCachedContributions();

  const now = new Date();
  const twelveMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 11, 1);
  const startDate = twelveMonthsAgo.toISOString().slice(0, 10);
  const endDate = now.toISOString().slice(0, 10);

  const filtered = contributions.filter(
    (c) => c.date >= startDate && c.date <= endDate
  );

  return (
    <div className="px-4 py-6">
      <ContributionGraphClient data={filtered} totalCount={lifetimeTotal} />
    </div>
  );
}
