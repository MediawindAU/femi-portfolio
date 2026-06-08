import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import {
  AnimatedHeroGroup,
  AnimatedHeroItem,
  AnimatedHeroPortrait,
} from "./_components/motion/animated-hero";
import {
  Reveal,
  RevealStagger,
  RevealStaggerChild,
} from "./_components/motion/reveal";
import { CtaButton } from "./_components/motion/cta-button";

const industries = [
  { label: "Healthcare/MedTech", slug: "healthcare-medtech" },
  { label: "E-Commerce", slug: "e-commerce" },
  { label: "Education", slug: "education" },
];
const projectTags = [
  { label: "User Interface", slug: "user-interface" },
  { label: "Illustration", slug: "illustration" },
];

type ProcessCard = {
  title: string;
  body: string;
  tone: "navy" | "yellow";
};

const processRows: [ProcessCard, ProcessCard][] = [
  [
    {
      title: "Discovery",
      body: "Understand project needs and map out strategy for execution.",
      tone: "navy",
    },
    {
      title: "Research",
      body: "Dig deeper into the industry or sector, understand best practices and create path for product success.",
      tone: "yellow",
    },
  ],
  [
    {
      title: "Execution",
      body: "Build products that is structured to meet end users expectations",
      tone: "navy",
    },
    {
      title: "Delivery/Revision",
      body: "Comprehensive handover of product complying with industry standard and revise appropriately and timely.",
      tone: "yellow",
    },
  ],
];

export default function Home() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-gradient-to-l from-[#071459] from-[25%] to-[#07246f] to-[79%]">
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1fr_379px] lg:gap-8 lg:px-8 lg:py-20">
          <AnimatedHeroGroup className="flex flex-col">
            <AnimatedHeroItem>
              <h1 className="max-w-[536px] text-xl font-semibold leading-tight text-white sm:text-2xl">
                Hi, I&apos;m Femi.
                <br />
                Product builder &amp; founder who turns complex problems into
                products people actually use
              </h1>
            </AnimatedHeroItem>
            <AnimatedHeroItem>
              <p className="mt-6 max-w-[536px] text-base leading-relaxed text-white">
                I combine UX design, business analysis, and AI-augmented
                delivery to take products from zero to launch. As founder of
                Mediawind, I&apos;ve shipped digital products end-to-end for
                Australian startups across healthcare, education, and
                e-commerce.
              </p>
            </AnimatedHeroItem>
            <AnimatedHeroItem className="mt-14 flex flex-wrap gap-3">
              <CtaButton href="#work" variant="primary-light">
                SEE WORKS
              </CtaButton>
              <CtaButton href="/contact" variant="outline-light">
                WORK WITH ME
              </CtaButton>
            </AnimatedHeroItem>
            <AnimatedHeroItem className="mt-8 border-t border-white/40 pt-5">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
                Industries — tap to learn more
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/glossary#${industry.slug}`}
                    className="rounded-[5px] border border-white px-3 py-1.5 text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#071459]"
                  >
                    {industry.label}
                  </Link>
                ))}
              </div>
            </AnimatedHeroItem>
          </AnimatedHeroGroup>
          <AnimatedHeroPortrait className="flex items-start justify-center lg:justify-end">
            <div className="relative h-[360px] w-full max-w-[379px] overflow-hidden rounded-[15px] sm:h-[446px]">
              <Image
                src="/images/hero-portrait.png"
                alt="Portrait of Femi Olatunde"
                fill
                priority
                sizes="(min-width: 1024px) 379px, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedHeroPortrait>
        </div>
      </section>

      <section id="work" className="bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 pb-16 pt-10 lg:px-12 lg:pb-24 lg:pt-12">
          <Reveal>
            <h2 className="text-3xl font-semibold text-black sm:text-[32px]">
              Selected Work
            </h2>
            <p className="mt-4 max-w-[579px] text-base text-black sm:text-lg">
              A project executed for a medical centre on the Gold Coast,
              Queensland, Australia.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <Link
                href="/work/dr-amtan"
                className="group flex h-[300px] items-center justify-center overflow-hidden rounded-[20px] bg-[#06bada] transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl sm:h-[344px]"
              >
                <Image
                  src="/images/dr-amtan.png"
                  alt="Dr Amtan illustration"
                  width={288}
                  height={288}
                  className="h-auto w-[70%] max-w-[288px] transition-transform duration-500 group-hover:-translate-y-1"
                />
              </Link>
              <div className="flex flex-col">
                <h3 className="text-[28px] font-semibold text-[#1b1a1a]">
                  Dr Amtan
                </h3>
                <div className="my-4 h-px w-[135px] bg-black/80" />
                <p className="max-w-[435px] text-base text-[#1b1a1a] sm:text-lg">
                  A focused set of projects where systems thinking met real
                  product challenges.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {projectTags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/glossary#${tag.slug}`}
                      className="rounded-[5px] border border-black px-3 py-1.5 text-base text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <CtaButton href="/work/dr-amtan" variant="primary-dark">
                    SEE PROJECT
                  </CtaButton>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <div className="h-px w-full max-w-[419px] bg-black/30" />
            <div className="mt-6 flex flex-wrap gap-5">
              <CtaButton href="/work" variant="primary-dark" className="!bg-[#d10606]">
                MORE PROJECT
              </CtaButton>
              <CtaButton href="/work" variant="primary-dark" className="!bg-[#290d0d]">
                RECENT PROJECT
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#eee]">
        <div className="mx-auto max-w-[960px] px-6 pb-16 pt-10 lg:px-12 lg:pb-24 lg:pt-12">
          <Reveal>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              The process/Ideaology
            </h2>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
              <p className="max-w-[628px] text-base text-black sm:text-lg">
                Every engagement starts with understanding the projects needs
                and wants. I ensure project expectations are set and met within
                agreed timeline.
              </p>
              <CtaButton href="/contact" variant="primary-dark">
                START A PROJECT
              </CtaButton>
            </div>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-y-8 lg:gap-y-12">
            {processRows.map((row, rowIndex) => (
              <RevealStaggerChild key={rowIndex} variant="pop">
                <div
                  className="group grid grid-cols-1 overflow-hidden rounded-[24px] shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:grid-cols-2"
                  style={{ gridTemplateColumns: undefined }}
                >
                  {row.map((card) => (
                    <div
                      key={card.title}
                      className={`flex min-h-[220px] flex-col justify-center p-10 ${
                        card.tone === "navy"
                          ? "bg-[#1a2c58] text-white"
                          : "bg-[#ffd978] text-black"
                      }`}
                    >
                      <h3 className="text-[28px] font-semibold tracking-tight">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed sm:text-lg">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
