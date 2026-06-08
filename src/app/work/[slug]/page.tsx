import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "../../_components/coming-soon";

const projectTitles: Record<string, string> = {
  "dr-amtan": "Dr Amtan",
  "australian-skin-lab": "Australian Skin Lab",
  "bawo-language-learning": "Bawo Language Learning",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = projectTitles[slug];
  return {
    title: title ? `${title} — Femi Olatunde` : "Case study — Femi Olatunde",
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = projectTitles[slug];
  if (!title) notFound();
  return (
    <ComingSoon
      title={title}
      body="The full case study for this project is on its way. Check back shortly, or get in touch if you'd like a walkthrough now."
    />
  );
}
