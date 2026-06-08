import Image from "next/image";
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
  title: "Artwork — Femi Olatunde",
  description:
    "Paintings and figurative works by Femi Olatunde — culture, memory, and the life we recognise in each other.",
};

type Artwork = {
  slug: string;
  title: string;
  src: string;
  alt: string;
  aspect: string;
};

const featuredArtwork: Artwork = {
  slug: "the-northerner",
  title: "The Northerner",
  src: "/images/art-northerner-sii.png",
  alt: "The Northerner II — featured painting",
  aspect: "352/449",
};

const gallery: Artwork[] = [
  {
    slug: "the-northerner",
    title: "The Northerner",
    src: "/images/art-northerner-si.png",
    alt: "Painting of a young woman in a red headscarf — The Northerner",
    aspect: "287/383",
  },
  {
    slug: "springbrook-where",
    title: "Springbrook Where?",
    src: "/images/art-springbrook.png",
    alt: "Sub-tropical Queensland landscape — Springbrook Where?",
    aspect: "256/200",
  },
  {
    slug: "market-ready",
    title: "Market Ready",
    src: "/images/art-market-ready.png",
    alt: "Seated figure preparing for market — Market Ready",
    aspect: "311/356",
  },
  {
    slug: "breaktime",
    title: "Breaktime",
    src: "/images/art-breaktime.png",
    alt: "Street figures sharing a moment — Breaktime",
    aspect: "4/5",
  },
];

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <article className="flex flex-col">
      <div
        className="relative w-full overflow-hidden bg-[#f3f3f3] transition-shadow duration-500 hover:shadow-xl"
        style={{ aspectRatio: artwork.aspect.replace("/", " / ") }}
      >
        <Image
          src={artwork.src}
          alt={artwork.alt}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 text-base text-[#1b1a1a]">
        Work Title:{" "}
        <span className="font-semibold italic">{artwork.title}</span>
      </p>
      <div className="mt-4">
        <CtaButton href={`/artwork/${artwork.slug}`} variant="outline-dark">
          ABOUT WORK
        </CtaButton>
      </div>
    </article>
  );
}

export default function ArtworkPage() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-12 lg:px-12 lg:py-16">
          <Reveal>
            <p className="max-w-[820px] text-lg font-medium leading-relaxed text-black sm:text-[21px]">
              Art, at its most essential, is an act of recognition of the subject
              matter, I see you, I see this, I see us. &ldquo;Every painting
              brings visibility to the subject matter, depicting what is
              happening here what we would miss if we did not slow down?&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_352px] lg:gap-16">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#071459]">
                  Artist Statement
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-black sm:text-[32px]">
                  <TextMaskReveal>Painting as a Social Mirror</TextMaskReveal>
                </h1>
                <DrawInDivider
                  delay={0.65}
                  className="mt-2 h-[2px] w-[151px] bg-black/40"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 space-y-5 text-base text-black">
                  <p>
                    My practice is grounded in the conviction that painting
                    functions most meaningfully as a social mirror, a surface
                    against which individuals may recognise their own cultural
                    experiences, inherited traditions, and contemporary realities.
                    Rooted in the visual culture of Nigeria and expanded through
                    more than a decade of lived experience in Queensland,
                    Australia, my work engages with questions of cultural
                    identity, belonging, and the evolving nature of human
                    community.
                  </p>
                  <p>
                    The Nigerian context remains foundational to my artistic
                    sensibility: the vitality of public life, the significance of
                    adornment and ritual, the geometry of human gathering. These
                    preoccupations rendered through oil on canvas with an
                    expressive, gestural handling of light and form persist
                    across my figurative and portraiture work as an affirmation
                    of cultural specificity and dignity.
                  </p>
                  <p className="font-semibold">
                    My paintings shows our culture, memory, and the life we
                    recognise in each other, or not?
                  </p>
                  <p>
                    Resettlement in Australia has introduced new dimensions to
                    this inquiry. The experience of forming a family within a
                    multicultural society, the encounter with Queensland&apos;s
                    distinctive natural landscape its generous sub-tropical
                    light, its vast skies, its quiet ecological grandeur — and
                    the daily reality of cross-cultural exchange have each
                    contributed to an evolving visual language. My recent body of
                    work reflects this expanded geography of experience, drawing
                    on both the particularity of place and the universality of
                    human connection that transcends it.
                  </p>
                  <p>
                    Across portraiture, landscape, and figurative composition,
                    the underlying aim remains consistent: to produce work that
                    is simultaneously culturally specific and broadly relatable
                    paintings in which a viewer from Lagos and one from Brisbane
                    may each find a point of recognition. It is in that shared
                    moment of identification, across difference, that I locate
                    the social and humanistic function of contemporary painting.
                  </p>
                </div>
                <div className="mt-10 h-px w-full max-w-[419px] bg-black/40" />
                <p className="mt-4 text-base text-black">
                  Olatunde F. | Queensland, Australia
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.25}>
              <div>
                <div className="relative aspect-[352/449] w-full overflow-hidden">
                  <Image
                    src={featuredArtwork.src}
                    alt={featuredArtwork.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 352px, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-base text-[#1b1a1a]">
                  Work Title:{" "}
                  <span className="font-semibold italic">
                    {featuredArtwork.title}
                  </span>
                </p>
                <div className="mt-4">
                  <CtaButton
                    href={`/artwork/${featuredArtwork.slug}`}
                    variant="outline-dark"
                  >
                    ABOUT WORK
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-16 lg:px-12 lg:py-20">
          <RevealStagger className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {gallery.map((artwork, index) => (
              <RevealStaggerChild key={`${artwork.slug}-${index}`}>
                <ArtworkCard artwork={artwork} />
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
