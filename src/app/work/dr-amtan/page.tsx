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
import {
  WelcomeScreen,
  HomeScreen,
  BookScreen,
  TipDetailScreen,
  PhoneFrame,
  LoFiWelcome,
  LoFiHome,
  LoFiBook,
  LoFiTipDetail,
  UserFlowDiagram,
} from "./_components/phone-mockups";

export const metadata: Metadata = {
  title: "Dr Amtan — Femi Olatunde",
  description:
    "MedTech mobile app case study for Amtan Medical Group — one daily health tip + frictionless doctor booking, with illustration, UX and UI design by Femi Olatunde.",
};

const designProcess = ["Discover", "Define", "Design", "Deliver"];

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

const hifiScreens = [
  {
    label: "Welcome",
    caption:
      "Warm, on-brand first impression — what the app does, before any sign-up.",
    Component: WelcomeScreen,
  },
  {
    label: "Today's Tip",
    caption:
      "One single daily tip leads the home — the centre of the habit loop.",
    Component: HomeScreen,
  },
  {
    label: "Tip Detail",
    caption:
      "Short read, big illustration, a doctor's note for trust, and one clear action.",
    Component: TipDetailScreen,
  },
  {
    label: "Book a Doctor",
    caption:
      "Doctor list with next-available baked in — most patients book in two taps.",
    Component: BookScreen,
  },
];

const lofiScreens = [
  { label: "Welcome", Component: LoFiWelcome },
  { label: "Home", Component: LoFiHome },
  { label: "Book", Component: LoFiBook },
  { label: "Tip Detail", Component: LoFiTipDetail },
];

const palette = [
  { name: "Cyan", hex: "#06B4DA", bg: "bg-[#06b4da]", text: "text-white" },
  { name: "Deep", hex: "#048BA8", bg: "bg-[#048ba8]", text: "text-white" },
  { name: "Ink", hex: "#0F3A5A", bg: "bg-[#0f3a5a]", text: "text-white" },
  { name: "Mist", hex: "#F3FBFD", bg: "bg-[#f3fbfd]", text: "text-black" },
];

const lessons = [
  {
    title: "Cut features, not care",
    body: "Chat, prescription history, symptom checker — all were scoped at the start and all were cut. What stayed was what patients actually used every day.",
  },
  {
    title: "One tip beats ten articles",
    body: "Short daily prompts won every round of user testing. Patients remembered them, acted on them, and came back for the next one.",
  },
  {
    title: "Design for the person, not the persona",
    body: "Older patients didn't need a 'simplified' version — they needed the same product, designed honestly: clear labels, generous tap targets, plain English.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-2xl font-extrabold uppercase tracking-tight text-[#8e8e8e] sm:text-[28px]">
      <TextMaskReveal>{children}</TextMaskReveal>
    </p>
  );
}

export default function DrAmtanCaseStudy() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#139dbb]">
        <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center gap-6 px-6 py-14 lg:flex-row lg:items-end lg:justify-start lg:gap-12 lg:px-12 lg:py-16">
          <Reveal>
            <div className="flex items-end gap-3 lg:gap-4">
              <div className="relative h-[230px] w-[130px] overflow-hidden rounded-[10px] shadow-2xl sm:h-[294px] sm:w-[166px]">
                <Image
                  src="/images/dr-amtan-mobile.png"
                  alt="Dr Amtan mobile app — welcome screen preview"
                  fill
                  priority
                  sizes="(min-width: 640px) 166px, 130px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-[230px] w-[135px] sm:h-[290px] sm:w-[171px]">
                <Image
                  src="/images/dr-amtan-anime.png"
                  alt="Dr Amtan character illustration"
                  fill
                  priority
                  sizes="(min-width: 640px) 171px, 135px"
                  className="object-contain"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-5xl font-extrabold italic leading-none text-white sm:text-6xl lg:ml-auto lg:text-[64px]">
              Dr. Amtan
            </p>
          </Reveal>
        </div>
      </section>

      <nav
        aria-label="Case study sections"
        className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-md"
      >
        <div className="mx-auto max-w-[960px] px-6 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            <span className="mr-2 shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#139dbb]">
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
              <div className="space-y-4">
                <p className="text-lg font-medium text-black sm:text-xl">
                  A mobile app that turns one local GP centre&apos;s clinical
                  expertise into a daily, in-pocket health companion.
                </p>
                <p className="max-w-[560px] text-base text-black sm:text-lg">
                  Dr. Amtan brings two of the clinic&apos;s most-used services
                  directly to the patient&apos;s home screen — a friendly
                  daily health-habit tip in plain English, and a friction-free
                  way to book or change appointments with their preferred
                  doctor.
                </p>
              </div>
              <dl className="space-y-6">
                <div>
                  <dt className="text-base font-semibold text-black sm:text-lg">
                    Role
                  </dt>
                  <dd className="mt-1 text-base text-black">
                    Illustrator / UX &amp; UI Designer
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold text-black sm:text-lg">
                    Client
                  </dt>
                  <dd className="mt-1 text-base text-black">
                    Amtan Medical Group
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold text-black sm:text-lg">
                    Platform
                  </dt>
                  <dd className="mt-1 text-base text-black">iOS &amp; Android</dd>
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
                  The clinic&apos;s patients are mostly adults 45–75, who learn
                  best from short, daily prompts — not long medical leaflets.
                  Reception was also fielding too many calls each week just to
                  book or move appointments, pulling staff away from in-person
                  care.
                </p>
              </div>
            </RevealStaggerChild>
            <RevealStaggerChild variant="pop">
              <div className="rounded-[20px] bg-[#06b4da] p-8 transition-shadow duration-500 hover:shadow-xl">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Brief
                </h2>
                <p className="mt-5 text-sm font-medium text-white sm:text-base">
                  Design a calm, confident mobile app that delivers one daily
                  habit tip in plain language, and lets patients book or change
                  an appointment with their preferred doctor — without picking
                  up the phone.
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
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#139dbb]">
                  Who are the patients?
                </p>
                <p className="text-base text-black sm:text-lg">
                  Patient interviews and reception data pointed to the same
                  audience: adults 45–75, confident on the phone for calls and
                  messages but cautious with new apps. They trusted the clinic
                  deeply but rarely used its website.
                </p>
                <p className="text-base text-black sm:text-lg">
                  Across the board, patients asked for two things: clearer
                  everyday health advice in plain language, and an easier way
                  to manage appointments without calling during clinic hours.
                </p>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-black">
                  Comparative Advantage
                </h3>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#139dbb]">
                  What sets Dr. Amtan apart?
                </p>
                <p className="text-base text-black sm:text-lg">
                  Most health apps in the App Store try to serve everyone. Dr.
                  Amtan does the opposite — it&apos;s tied to one trusted
                  clinic, so the tips, doctor list, and bookings are all from
                  the patient&apos;s actual care team rather than strangers.
                </p>
                <p className="text-base text-black sm:text-lg">
                  Bite-sized daily habits also outperformed long articles in
                  testing: one short tip a day was remembered and acted on,
                  while multi-page reads were skimmed and forgotten.
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
              Dr. Amtan started as a way to make the app feel personal — like a
              familiar face on a clinic wall. We crafted a warm, approachable
              character that patients of any age can read as a doctor without
              falling into clichés: calm posture, gentle palette, white coat as
              the only clinical signal.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-8">
              <div className="rounded-[20px] bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#139dbb]">
                  Character notes
                </p>
                <ul className="mt-5 space-y-3.5 text-base text-black sm:text-lg">
                  <li className="flex gap-3">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#06b4da]" />
                    <span>
                      <strong>White coat, no stethoscope.</strong> Enough to
                      signal &quot;doctor&quot; without feeling cold or clinical.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#06b4da]" />
                    <span>
                      <strong>Neutral, gentle expression.</strong> Reads as
                      approachable for a 9-year-old and a 75-year-old.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#06b4da]" />
                    <span>
                      <strong>Soft cyan brand palette.</strong> Calm and clean
                      — distinct from corporate blue health-tech.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#06b4da]" />
                    <span>
                      <strong>Reads at any size.</strong> Works as a small
                      in-app avatar and as a full-character hero on print.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="flex items-center justify-center rounded-[20px] p-6"
                style={{
                  background:
                    "linear-gradient(180deg, #06b4da 0%, #048ba8 100%)",
                }}
              >
                <Image
                  src="/images/dr-amtan.png"
                  alt="Dr Amtan character — final illustration"
                  width={240}
                  height={240}
                  className="h-auto w-full max-w-[220px] object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 rounded-[20px] bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#139dbb]">
                Brand palette
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {palette.map((color) => (
                  <div
                    key={color.name}
                    className="overflow-hidden rounded-[14px] border border-black/10"
                  >
                    <div
                      className={`flex h-20 items-end p-3 ${color.bg} ${color.text}`}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider">
                        {color.name}
                      </p>
                    </div>
                    <div className="bg-white px-3 py-2">
                      <p className="font-mono text-[11px] text-black/70">
                        {color.hex}
                      </p>
                    </div>
                  </div>
                ))}
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
            <p className="mt-6 max-w-[760px] text-base text-black sm:text-lg">
              The whole product reduces to two short journeys — the daily tip
              loop and the booking loop. Mapping them side-by-side made it
              clear how much could be trimmed: every step that didn&apos;t
              serve one of those two journeys was cut before any visual design
              started.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <UserFlowDiagram />
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
              structure can be tested with patients before any visual design
              begins.
            </p>
          </Reveal>
          <RevealStagger className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-5">
            {lofiScreens.map((screen) => (
              <RevealStaggerChild key={screen.label} variant="pop">
                <div className="flex flex-col items-center">
                  <screen.Component />
                  <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-black/60">
                    {screen.label}
                  </p>
                </div>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section id="hi-fi" className="scroll-mt-20 bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 py-14 lg:px-12 lg:py-16">
          <SectionLabel>Hi-Fidelity Wireframe</SectionLabel>
          <DrawInDivider
            delay={0.55}
            className="mt-2 h-[2px] w-[120px] bg-black/40"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[760px] text-base text-black sm:text-lg">
              Full-colour, on-brand screens that show exactly how the finished
              app looks and feels. Dr. Amtan appears as a quiet co-pilot
              throughout — large on the welcome, small on the home tip card,
              and centre-stage in the tip detail.
            </p>
          </Reveal>
          <RevealStagger className="mt-10 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:gap-x-12">
            {hifiScreens.map((screen) => (
              <RevealStaggerChild key={screen.label} variant="pop">
                <div className="flex flex-col items-center">
                  <PhoneFrame>
                    <screen.Component />
                  </PhoneFrame>
                  <div className="mt-5 max-w-[280px] text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#139dbb]">
                      {screen.label}
                    </p>
                    <p className="mt-1.5 text-sm text-black/75">
                      {screen.caption}
                    </p>
                  </div>
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
              Designing for an older patient audience reinforced an old rule:
              less is usually more. Three takeaways carried over into every
              project after this one.
            </p>
          </Reveal>
          <RevealStagger className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
            {lessons.map((lesson, index) => (
              <RevealStaggerChild key={lesson.title} variant="pop">
                <div className="h-full rounded-[18px] border border-black/10 bg-white p-6 transition-shadow duration-500 hover:shadow-md">
                  <p
                    className="text-3xl font-extrabold leading-none"
                    style={{ color: "#06b4da" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-base font-bold text-black sm:text-lg">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/75 sm:text-base">
                    {lesson.body}
                  </p>
                </div>
              </RevealStaggerChild>
            ))}
          </RevealStagger>
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
