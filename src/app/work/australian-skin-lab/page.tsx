import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "../../_components/site-header";
import { SiteFooter } from "../../_components/site-footer";
import {
  Reveal,
  RevealStagger,
  RevealStaggerChild,
} from "../../_components/motion/reveal";
import { CtaButton } from "../../_components/motion/cta-button";
import {
  TextMaskReveal,
  DrawInDivider,
} from "../../_components/motion/text-mask-reveal";
import { ZoomableImage } from "../../_components/motion/zoomable-image";

export const metadata: Metadata = {
  title: "Australian Skin Lab — Femi Olatunde",
  description:
    "E-commerce and brand identity case study for Australian Skin Lab — product design and UI by Femi Olatunde.",
};

const designProcess = ["Discover", "Define", "Design", "Deliver"];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-2xl font-extrabold uppercase tracking-tight text-[#8e8e8e] sm:text-[28px]">
      <TextMaskReveal>{children}</TextMaskReveal>
    </p>
  );
}

const anchorNav = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "process", label: "Process" },
  { id: "discover", label: "Discover" },
  { id: "branding", label: "Branding" },
  { id: "user-flow", label: "Flow" },
  { id: "lo-fi", label: "Lo-Fi" },
  { id: "hi-fi", label: "Hi-Fi" },
  { id: "lessons", label: "Lessons" },
];

const lofiWireframes = [
  {
    src: "/images/asl-lofi-1.png",
    alt: "ASL lo-fi wireframe — landing page",
    aspect: "1899/4393",
  },
  {
    src: "/images/asl-lofi-2.png",
    alt: "ASL lo-fi wireframe — categories",
    aspect: "1890/3684",
  },
  {
    src: "/images/asl-lofi-3.png",
    alt: "ASL lo-fi wireframe — product detail",
    aspect: "1946/9419",
  },
  {
    src: "/images/asl-lofi-4.png",
    alt: "ASL lo-fi wireframe — newsletter & footer",
    aspect: "1899/3911",
  },
];

const hifiScreens = [
  { src: "/images/asl-hifi-home.jpg", alt: "ASL hi-fi home page", aspect: "484/1181" },
  { src: "/images/asl-hifi-shop.png", alt: "ASL hi-fi shop page", aspect: "484/1181" },
  { src: "/images/asl-hifi-product.png", alt: "ASL hi-fi product page", aspect: "484/1181" },
  { src: "/images/asl-hifi-testimonial.png", alt: "ASL hi-fi testimonials page", aspect: "484/1181" },
];

export default function AustralianSkinLabCaseStudy() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#010f12]">
        <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center gap-6 px-6 py-12 sm:flex-row sm:gap-10 lg:px-12">
          <Reveal>
            <Image
              src="/images/asl-logo.png"
              alt="Australian Skin Lab logo"
              width={109}
              height={225}
              className="h-[180px] w-auto sm:h-[225px]"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-center text-white sm:text-left">
              <p className="text-4xl font-light leading-tight sm:text-5xl">
                Australian
                <br />
                Skin Lab
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study sections"
        className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-md"
      >
        <div className="mx-auto max-w-[960px] px-6 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            <span className="mr-2 shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#071459]">
              Jump to
            </span>
            {anchorNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 rounded-[5px] border border-black/20 px-2.5 py-1 text-xs text-black transition-colors hover:bg-black hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-12 pt-10 lg:px-12 lg:pb-14 lg:pt-14">
          <SectionLabel>Overview</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
              <p className="max-w-[550px] text-base text-black sm:text-lg">
                Australian skin lab is the vision of a skincare expert to develop
                and produce different safe health products by fusing ancient-long
                indigenous Indian ingredients with modern skincare products
                technology.
              </p>
              <dl className="space-y-6">
                <div>
                  <dt className="text-base font-semibold text-black sm:text-lg">
                    Role
                  </dt>
                  <dd className="mt-1 text-base text-black">
                    Product Designer / Brand Identity / UI
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold text-black sm:text-lg">
                    Client
                  </dt>
                  <dd className="mt-1 text-base text-black">
                    Australian Skin Lab PTY
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="challenge" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-12 lg:px-12 lg:pb-14">
          <RevealStagger className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            <RevealStaggerChild variant="pop">
              <div className="rounded-[20px] bg-[#06b4da] p-8 transition-shadow duration-500 hover:shadow-xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Challenge
                </h2>
                <p className="mt-5 text-sm font-medium text-white sm:text-base">
                  Client sell their skincare products on Television Shopping
                  Network (TVSN) platform that involves sharing its sales return
                  with TVSN. This has affected the business profit considering
                  all the logistics involved in creating the product.
                </p>
              </div>
            </RevealStaggerChild>
            <RevealStaggerChild variant="pop">
              <div className="rounded-[20px] bg-[#06b4da] p-8 transition-shadow duration-500 hover:shadow-xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Brief
                </h2>
                <p className="mt-5 text-sm font-medium text-white sm:text-base">
                  The client wants to rebrand its products and build an
                  e-commerce website to eliminate TVSN&apos;s platform as a point
                  of sale.
                </p>
              </div>
            </RevealStaggerChild>
          </RevealStagger>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-12 lg:px-12 lg:pb-14">
          <SectionLabel>Design Process</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <RevealStagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {designProcess.map((step) => (
              <RevealStaggerChild key={step} variant="pop">
                <div className="flex h-[88px] items-center justify-center rounded-[18px] bg-[#d9d9d9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#cfcfcf] hover:shadow-md">
                  <span className="text-xl font-extrabold uppercase text-[#7e7d7d] sm:text-2xl">
                    {step}
                  </span>
                </div>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section id="discover" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-14 lg:px-12 lg:pb-16">
          <SectionLabel>Discover</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-black">Research</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#071459]">
                  Who buys these products?
                </p>
                <p className="text-base text-black sm:text-lg">
                  The initial research was based on the category of users that
                  purchased the products. A deeper understanding of how the
                  product can distinctively set itself apart from similar
                  products.
                </p>
                <p className="text-base text-black sm:text-lg">
                  Research showed how the target of product rage from age 28 –
                  55. The product range has a proven traditional way of assisting
                  clients with skin tightening, anti-ageing, and afterglow skin.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-black">
                  Comparative Advantage
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#071459]">
                  What sets ASL apart?
                </p>
                <p className="text-base text-black sm:text-lg">
                  While there are other natural ingredient skincare products non
                  has efficiently tapped into the ancient long efficiency of the
                  skincare regime that has proven to be effective for all skin
                  types.
                </p>
                <p className="text-base text-black sm:text-lg">
                  The skincare ingredients comprise of natural components fused
                  with modern ingredients through the expert knowledge of the
                  dermatologist, Dr Tanya (A Gold Coast medical general
                  practitioner).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="branding" className="scroll-mt-20 bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 py-14 lg:px-12 lg:py-16">
          <SectionLabel>Branding</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[760px] text-base text-black sm:text-lg">
              The Australian Skin Lab mark grew out of the brand&apos;s two
              strengths — ancient ingredient wisdom and modern skincare science
              — distilled into one calm, confident wordmark. We sketched,
              refined, and tested it across product packaging, storefronts, and
              social profiles to make sure it reads cleanly at every scale.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr] lg:gap-10">
              <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/asl-instagram.png"
                  alt="Australian Skin Lab social brand identity — Instagram avatar and grid layout"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[553/829] w-full overflow-hidden rounded-[36px]">
                <Image
                  src="/images/asl-logo-creation.png"
                  alt="Australian Skin Lab logo design process — exploration sketches and refined wordmark variations"
                  fill
                  sizes="(min-width: 1024px) 553px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="user-flow" className="scroll-mt-20 bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 pb-14 lg:px-12 lg:pb-16">
          <SectionLabel>User Flow</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[700px] text-base text-black sm:text-lg">
              A user flow maps every step a customer takes through a product —
              from the moment they land on the homepage to the moment they
              leave. It shows decisions, screens, and actions in sequence so the
              whole team can see the journey before a single pixel is designed.
              For Australian Skin Lab the flow surfaces gaps, removes
              unnecessary steps, and gives shoppers a path that feels natural
              from discovery to purchase.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <ZoomableImage
                src="/images/asl-userflow.png"
                alt="Australian Skin Lab customer user flow diagram — homepage to checkout journey"
                aspect="1996/856"
                sizes="(min-width: 1024px) 880px, 100vw"
              />
              <p className="mt-3 text-xs text-black/60">
                Tip: click the diagram to open a zoomable view. Use the
                <span className="mx-1 inline-flex items-center rounded border border-black/20 px-1.5 font-mono text-[11px]">
                  +
                </span>
                and
                <span className="mx-1 inline-flex items-center rounded border border-black/20 px-1.5 font-mono text-[11px]">
                  −
                </span>
                buttons (or keys) to zoom in and read each step.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="lo-fi" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-14 lg:px-12 lg:py-16">
          <SectionLabel>Lo-Fidelity Wireframe</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[760px] text-base text-black sm:text-lg">
              Quick black-and-white sketches of every screen that lock in
              layout and content order — no colour, no fonts yet — so the
              structure can be tested and improved before any visual design
              begins.
            </p>
          </Reveal>
          <RevealStagger className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {lofiWireframes.map((wireframe, index) => (
              <RevealStaggerChild key={index} variant="pop">
                <div className="flex flex-col">
                  <div className="relative aspect-[1/2] w-full overflow-hidden rounded-md bg-[#f3f3f3] transition-shadow duration-500 hover:shadow-lg">
                    <Image
                      src={wireframe.src}
                      alt={wireframe.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 h-px w-full bg-black/30" />
                </div>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section id="hi-fi" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-14 lg:px-12 lg:py-16">
          <SectionLabel>Hi-Fidelity Wireframe</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[760px] text-base text-black sm:text-lg">
              The full-colour, on-brand version of each screen — pixel-accurate
              mockups that show exactly how the finished site will look and
              feel before a single line of code is written.
            </p>
          </Reveal>
          <RevealStagger className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-10">
            {hifiScreens.map((screen, index) => (
              <RevealStaggerChild key={index} variant="pop">
                <div className="flex flex-col">
                  <div
                    className="relative w-full overflow-hidden rounded-md bg-[#f3f3f3] transition-shadow duration-500 hover:shadow-xl"
                    style={{
                      aspectRatio: screen.aspect.replace("/", " / "),
                    }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      sizes="(min-width: 1024px) 432px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 h-px w-full bg-black/30" />
                </div>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section id="lessons" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-14 lg:px-12 lg:py-16">
          <SectionLabel>Lesson Learned</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[760px] text-base text-black sm:text-lg">
              Australian Skin Lab is the vision of a skincare expert to develop
              and produce different safe health products by fusing ancient-long
              indigenous Indian ingredients with modern skincare products
              technology. The project reinforced how brand identity, an honest
              ingredient story, and a smooth checkout path together do the heavy
              lifting in direct-to-consumer beauty.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <div className="h-[2px] w-full max-w-[419px] bg-black/40" />
            <div className="mt-6">
              <CtaButton href="/work" variant="outline-dark">
                SEE MORE WORKS
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
