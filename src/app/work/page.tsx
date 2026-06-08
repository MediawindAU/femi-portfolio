import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import {
  Reveal,
  RevealStagger,
  RevealStaggerChild,
} from "../_components/motion/reveal";
import { CtaButton } from "../_components/motion/cta-button";
import {
  TextMaskReveal,
  DrawInDivider,
} from "../_components/motion/text-mask-reveal";

export const metadata: Metadata = {
  title: "Work — Femi Olatunde",
  description:
    "Selected case studies and projects by Femi Olatunde — MedTech, e-commerce, and EdTech work.",
};

type Tag = { label: string; slug: string };

type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: Tag[];
  illustration?: { src: string; alt: string };
};

const projects: Project[] = [
  {
    slug: "dr-amtan",
    title: "Dr Amtan",
    blurb: "MedTech App built to be a mobile doctor for patients.",
    tags: [
      { label: "User Interface", slug: "user-interface" },
      { label: "Illustration", slug: "illustration" },
    ],
    illustration: {
      src: "/images/dr-amtan.png",
      alt: "Dr Amtan illustration",
    },
  },
  {
    slug: "australian-skin-lab",
    title: "Australian Skin Lab",
    blurb: "E-Commerce website for beauty products.",
    tags: [
      { label: "E-Commerce", slug: "e-commerce" },
      { label: "Beauty Sector", slug: "beauty-sector" },
    ],
  },
  {
    slug: "bawo-language-learning",
    title: "Bawo Lang. Learning",
    blurb: "An African Language learning platform",
    tags: [
      { label: "African Lang", slug: "african-language" },
      { label: "Edtech Sector", slug: "education" },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-4 pt-10 lg:px-12 lg:pb-4 lg:pt-12">
          <h1 className="text-3xl font-semibold text-black sm:text-4xl">
            <TextMaskReveal>Check My Works</TextMaskReveal>
          </h1>
          <DrawInDivider
            delay={0.55}
            className="mt-3 h-[3px] w-[151px] bg-black"
          />
        </div>
      </section>

      <section className="bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 pb-12 pt-8 lg:px-12 lg:pb-24 lg:pt-10">
          <Reveal>
            <h2 className="text-3xl font-semibold text-black sm:text-[32px]">
              Works/Case Study
            </h2>
            <p className="mt-4 max-w-[600px] text-base text-black sm:text-lg">
              Each work were executed individually, in a team, as consultant or
              basically as a product builder.
            </p>
          </Reveal>

          <RevealStagger className="mt-12 space-y-12">
            {projects.map((project, index) => (
              <RevealStaggerChild key={project.slug}>
                <article>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px] lg:gap-10">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group flex aspect-[520/337] items-center justify-center overflow-hidden rounded-[20px] bg-[#0642da] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                    >
                      {project.illustration ? (
                        <Image
                          src={project.illustration.src}
                          alt={project.illustration.alt}
                          width={288}
                          height={288}
                          className="h-auto w-[60%] max-w-[288px] transition-transform duration-500 group-hover:-translate-y-1"
                        />
                      ) : (
                        <span className="sr-only">
                          Placeholder for {project.title}
                        </span>
                      )}
                    </Link>
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold text-[#1b1a1a] sm:text-[28px]">
                        {project.title}
                      </h3>
                      <div className="my-3 h-[3px] w-[151px] bg-black" />
                      <p className="text-base text-[#1b1a1a] sm:text-lg">
                        {project.blurb}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <Link
                            key={tag.slug}
                            href={`/glossary#${tag.slug}`}
                            className="rounded-[5px] border border-black px-3 py-1.5 text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                          >
                            {tag.label}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6">
                        <CtaButton
                          href={`/work/${project.slug}`}
                          variant="primary-dark"
                        >
                          SEE PROJECT
                        </CtaButton>
                      </div>
                    </div>
                  </div>
                  {index < projects.length - 1 && (
                    <div className="mt-12 h-[2px] w-full bg-black/70" />
                  )}
                </article>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
