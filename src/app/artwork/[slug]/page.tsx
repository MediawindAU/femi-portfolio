import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "../../_components/coming-soon";

const artworkTitles: Record<string, string> = {
  "the-northerner": "The Northerner",
  "breaktime": "Breaktime",
  "market-ready": "Market Ready",
  "springbrook-where": "Springbrook Where?",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = artworkTitles[slug];
  return {
    title: title ? `${title} — Femi Olatunde` : "Artwork — Femi Olatunde",
  };
}

export default async function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = artworkTitles[slug];
  if (!title) notFound();
  return (
    <ComingSoon
      title={title}
      body="The artwork detail page is on its way. For now, head back to the gallery."
    />
  );
}
