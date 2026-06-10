import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import { Reveal } from "../_components/motion/reveal";
import { CtaButton } from "../_components/motion/cta-button";

export const metadata: Metadata = {
  title: "About — Femi Olatunde",
  description:
    "Product designer based in Brisbane with a knack for turning complex problems into intuitive digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#f5f5f5]">
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-[380px_240px] lg:items-center lg:justify-center lg:gap-8 lg:px-12 lg:py-16">
          <Reveal>
            <div className="flex h-full min-h-[240px] flex-col justify-center rounded-[20px] bg-[#05245f] p-8 lg:p-9">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Call me, Femi
              </h1>
              <div className="mt-5 max-w-[320px] space-y-3 text-sm text-white sm:text-base">
                <p>
                  Journeyed from the world of fine art into the the world of
                  design, and product development.
                </p>
                <p>It has been a roller coaster.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-[20px]">
              <Image
                src="/images/femi-smile.png"
                alt="Femi Olatunde portrait"
                fill
                priority
                sizes="(min-width: 1024px) 240px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-16 pt-10 lg:px-12 lg:pb-24 lg:pt-12">
          <Reveal>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              About Me
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-[926px] space-y-6 text-base text-black sm:text-lg">
              <p>
                Product builder and founder based in Brisbane with a knack for
                turning complex problems into intuitive digital experiences.
                With a background spanning UX design, user research, business
                analysis, and digital marketing, I bring a rare full-picture
                perspective to every product I work on — from understanding
                the why behind user behaviour, to crafting the interfaces
                people actually want to use, to making sure each decision ties
                back to a real business outcome.
              </p>
              <p>
                Over the past decade, I&apos;ve worked across freelance, contract,
                and in-house environments including time with Australian Skin
                Lab — designing products that balance business goals with
                genuine human needs. I hold a Master of Interactive Media Design
                from Griffith University and undergoing MBA (Advanced) at
                Torrens University.
              </p>
              <p>
                Today, I run Mediawind, a product development company where I
                lead cross-functional teams to help businesses go from idea to
                fully realised digital product. Working across design,
                development, and strategy, Mediawind has allowed me to expand
                beyond the design craft thereby orchestrating the full product
                lifecycle and collaborating with diverse teams to bring ambitious
                ideas to life.
              </p>
              <p>
                Whether it&apos;s a mobile app, an e-commerce experience, or an
                enterprise tool, I bring curiosity, craft, and a user-first
                mindset to every brief.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <CtaButton href="/resume" variant="outline-dark">
              RESUME
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
