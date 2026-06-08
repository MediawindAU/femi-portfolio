import type { Metadata } from "next";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import {
  Reveal,
  RevealStagger,
  RevealStaggerChild,
} from "../_components/motion/reveal";
import {
  TextMaskReveal,
  DrawInDivider,
} from "../_components/motion/text-mask-reveal";
import { CtaButton } from "../_components/motion/cta-button";
import { PrintButton } from "../_components/print-button";

export const metadata: Metadata = {
  title: "Resume — Femi Olatunde",
  description:
    "CV / Resume for Femi Olatunde — Product Builder, Founder, and Senior Product Designer based in Brisbane.",
};

const profile = {
  name: "Femi Olatunde",
  title:
    "Product Builder & Founder · Senior Product Designer · Tech Entrepreneur",
  location: "Brisbane, QLD",
  email: "femi.o@mediawind.co",
  phone: "040 528 5286",
  websites: ["mediawind.co", "olatundefemi.com.au"],
  summary:
    "I'm a product builder and founder who combines UX design, business analysis, and AI-augmented delivery to take products from zero to launch. As founder of Mediawind, I've shipped 3 digital products for Australian startups end-to-end, owning everything from discovery and UX strategy to delivery and post-launch growth. My MBA (Advanced) grounds my design decisions in business outcomes, and I am now bringing that full-stack builder mindset into a senior in-house role where I can drive meaningful product impact at scale.",
};

const experience = [
  {
    role: "Founder & Managing Director",
    company: "Mediawind",
    location: "Brisbane, QLD",
    period: "2021 — Present",
    highlights: [
      "Founded and scaled a digital product studio delivering app development, UX/UI design, and consultancy for early-stage Australian startups.",
      "Shipped 3 end-to-end products, including Bawo Africa — a bite-sized African language-learning platform — while overseeing product strategy, UX, build, and post-launch growth.",
      "Applied business analysis frameworks (stakeholder mapping, requirements gathering, cost-benefit analysis) to align product decisions with client commercial goals.",
      "Leverage AI-assisted workflows (Cursor, v0, Claude, Galileo AI) to accelerate delivery and prototype faster without a full dev team.",
      "Developed startup-friendly commercial models (revenue share, retainer, fixed MVP) tailored to pre-seed and seed-stage founders.",
      "Managed full project delivery lifecycle — scoping, resourcing, sprint planning, and client reporting — across concurrent engagements.",
    ],
  },
  {
    role: "Senior Product Designer & Consultant",
    company: "Freelance",
    location: "Brisbane, QLD",
    period: "Feb 2016 — Present",
    highlights: [
      "Led client engagements end-to-end, from business requirements and UX research through to interactive prototype and launch-ready build.",
      "Delivered user research, usability testing, information architecture, and high-fidelity UI design across web and mobile products.",
      "Advised clients on product strategy and roadmap prioritisation, connecting UX decisions to measurable business outcomes.",
    ],
  },
  {
    role: "UX Researcher",
    company: "MyKates",
    location: "Remote · India",
    period: "Nov 2020 — Feb 2021",
    highlights: [
      "Designed and executed a structured beta-testing programme to validate a new digital product pre-launch.",
      "Synthesised micro-testing findings into actionable UX improvements for the development team.",
    ],
  },
  {
    role: "Digital Marketing Manager",
    company: "Amtan Group",
    location: "Gold Coast, QLD",
    period: "Oct 2018 — Nov 2020",
    highlights: [
      "Owned full digital marketing strategy — annual planning, paid media (Google Ads, Meta), SEO, and EDM campaigns.",
      "Managed multi-brand website content and produced creative assets across social media, display, and Google My Business.",
    ],
  },
  {
    role: "Product Designer · Part-time",
    company: "Australian Skin Lab",
    location: "Gold Coast, QLD",
    period: "Sep 2018 — 2022",
    highlights: [
      "Redesigned the company's e-commerce UI on Adobe XD to accommodate an expanded product range.",
      "Conducted user-testing sessions and iterated on findings to improve conversion and usability.",
    ],
  },
];

const education = [
  {
    degree: "MBA (Advanced)",
    school: "Torrens University",
    period: "2024 — Dec 2025",
    status:
      "Currently enrolled · Business Analysis, Strategic Planning, Project Management, OKRs",
  },
  {
    degree: "MA Interactive Media Design",
    school: "Griffith University",
    period: "2016 — 2018",
  },
  {
    degree: "BA Fine & Applied Arts",
    school: "Obafemi Awolowo University",
    period: "2008 — 2012",
  },
];

const skills: Record<string, string[]> = {
  "Product & Strategy": [
    "Product Thinking",
    "UX Strategy",
    "Design Sprint",
    "MVP Planning",
    "OKR Planning",
    "User Testing",
  ],
  "Business & Analysis": [
    "Business Analysis",
    "Requirements Gathering",
    "Stakeholder Management",
    "Strategic Planning",
    "Project Delivery",
  ],
  "Design & Prototype": [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Illustrator",
  ],
  "Build & Launch": [
    "Webflow",
    "WordPress",
    "Shopify",
    "HTML · CSS",
    "SEO",
  ],
  Marketing: [
    "Google Ads",
    "Meta Ads",
    "EDM",
    "Google Analytics",
    "Content Strategy",
  ],
  "AI & Modern Tooling": [
    "Cursor",
    "v0 by Vercel",
    "Claude AI",
    "Galileo AI",
    "Notion AI",
    "Runway ML",
  ],
};

const awards = [
  {
    title: "1st Place — UX Design",
    event: "Rio Tinto Super People Hack",
    place: "Brisbane",
    year: "2022",
    body:
      "Won first place in Rio Tinto's internal 3-day design hackathon, competing against cross-functional teams. Delivered a complete UX solution addressing a workers' compensation challenge.",
  },
];

const cardSection =
  "rounded-[20px] border border-black/10 bg-white p-6 shadow-sm print:border-0 print:shadow-none print:rounded-none print:p-0";

export default function ResumePage() {
  return (
    <div className="font-sans">
      <div className="print:hidden">
        <SiteHeader />
      </div>

      <main className="bg-[#f5f5f5] print:bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-16 pt-10 lg:px-12 lg:pb-24 lg:pt-12 print:px-0 print:py-0">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 print:gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#071459]">
                  Curriculum vitae
                </p>
                <h1 className="mt-2 text-3xl font-semibold leading-tight text-black sm:text-4xl">
                  <TextMaskReveal>{profile.name}</TextMaskReveal>
                </h1>
                <DrawInDivider
                  delay={0.55}
                  className="mt-3 h-[2px] w-[120px] bg-black/40"
                />
                <p className="mt-3 text-base text-black sm:text-lg">
                  {profile.title}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 print:hidden">
                <CtaButton href="/resume.pdf" variant="outline-dark" download>
                  DOWNLOAD PDF
                </CtaButton>
                <PrintButton />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 grid grid-cols-2 gap-3 rounded-[14px] border border-black/10 bg-white p-4 text-sm sm:grid-cols-4 sm:text-base print:rounded-none print:border-0 print:p-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 block break-words font-medium text-black hover:underline"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55">
                  Phone
                </p>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="mt-1 block font-medium text-black hover:underline"
                >
                  {profile.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55">
                  Web
                </p>
                <div className="mt-1 space-y-0.5">
                  {profile.websites.map((w) => (
                    <p key={w} className="font-medium text-black">
                      {w}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55">
                  Location
                </p>
                <p className="mt-1 font-medium text-black">
                  {profile.location}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={`mt-6 ${cardSection}`}>
              <SectionEyebrow>Profile</SectionEyebrow>
              <p className="mt-3 max-w-[760px] text-base text-black sm:text-lg">
                {profile.summary}
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            <Reveal delay={0.2}>
              <section className={cardSection}>
                <SectionEyebrow>Experience</SectionEyebrow>
                <div className="mt-5 space-y-7">
                  {experience.map((role, index) => (
                    <article key={`${role.company}-${index}`}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-lg font-semibold text-black sm:text-xl">
                          {role.role}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#071459]">
                          {role.period}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-black/70">
                        {role.company} · {role.location}
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm text-black sm:text-base">
                        {role.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[#071459]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      {index < experience.length - 1 && (
                        <div className="mt-5 h-px w-full bg-black/10" />
                      )}
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.25}>
                <section className={cardSection}>
                  <SectionEyebrow>Education</SectionEyebrow>
                  <div className="mt-5 space-y-5">
                    {education.map((edu) => (
                      <article key={edu.degree}>
                        <h4 className="text-base font-semibold text-black">
                          {edu.degree}
                        </h4>
                        <p className="mt-0.5 text-sm text-black/70">
                          {edu.school}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#071459]">
                          {edu.period}
                        </p>
                        {edu.status && (
                          <p className="mt-0.5 text-xs italic text-black/55">
                            {edu.status}
                          </p>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              </Reveal>

              <Reveal delay={0.3}>
                <section className={cardSection}>
                  <SectionEyebrow>Awards & Recognition</SectionEyebrow>
                  <div className="mt-5 space-y-5">
                    {awards.map((award) => (
                      <article key={award.title}>
                        <h4 className="text-base font-semibold text-black">
                          {award.title}
                        </h4>
                        <p className="mt-0.5 text-sm text-black/70">
                          {award.event}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#071459]">
                          {award.place} · {award.year}
                        </p>
                        <p className="mt-2 text-sm text-black/80">
                          {award.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.35}>
            <section className={`mt-6 ${cardSection}`}>
              <SectionEyebrow>Skills</SectionEyebrow>
              <RevealStagger className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skills).map(([group, items]) => (
                  <RevealStaggerChild key={group}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#071459]">
                        {group}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="rounded-[5px] border border-black/20 bg-white px-2 py-1 text-xs text-black"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </RevealStaggerChild>
                ))}
              </RevealStagger>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
              <p className="text-sm text-black/60">
                Looking for the file? Use Download PDF above — or print this
                page for an A4-ready copy.
              </p>
              <CtaButton href="/contact" variant="primary-dark">
                GET IN TOUCH
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </main>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#071459]">
      {children}
    </p>
  );
}
