import type { Metadata } from "next";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import {
  Reveal,
  RevealStagger,
  RevealStaggerChild,
} from "../_components/motion/reveal";
import { CtaButton } from "../_components/motion/cta-button";

export const metadata: Metadata = {
  title: "Glossary — Femi Olatunde",
  description:
    "Plain-English explanations of the sectors Femi designs for — Healthcare/MedTech, E-Commerce, and Education.",
};

type GlossaryGroup = "Industries" | "Craft";

type Sector = {
  slug: string;
  label: string;
  group: GlossaryGroup;
  short: string;
  body: string[];
  examples: string[];
};

const sectors: Sector[] = [
  {
    slug: "healthcare-medtech",
    label: "Healthcare / MedTech",
    group: "Industries",
    short:
      "Digital products that support patients, clinicians, and the systems connecting them.",
    body: [
      "Healthcare and Medical Technology (MedTech) covers software and digital experiences used across care — from the moment a patient books an appointment to follow-up after a procedure. It includes patient-facing apps (symptom checkers, appointment booking, medication reminders), clinician-facing tools (electronic health records, telehealth dashboards), and the platforms that move data safely between them.",
      "Designing in this sector means working with sensitive information, strict compliance (privacy, safety, accessibility), and users in high-stakes moments. Good design here reduces cognitive load for clinicians and gives patients a sense of agency over their care.",
    ],
    examples: [
      "Patient mobile apps (booking, results, messaging)",
      "Telehealth and video-consult platforms",
      "Clinician dashboards and care-team tools",
      "Health education and adherence products",
    ],
  },
  {
    slug: "e-commerce",
    label: "E-Commerce",
    group: "Industries",
    short:
      "Online retail experiences — discovery, decision, purchase, and the post-buy relationship.",
    body: [
      "E-Commerce is everything that helps a customer find, choose, and buy a product online — and the systems behind it that make ordering, paying, fulfilling, and supporting that purchase work reliably at scale. It covers storefronts, marketplaces, subscription products, direct-to-consumer brand sites, and the back-office tooling merchants use to run them.",
      "Good design in e-commerce balances brand expression with conversion: clear navigation, honest product information, low-friction checkout, and graceful post-purchase touchpoints (shipping updates, returns, support). Small frictions cost real revenue, so iteration and measurement matter.",
    ],
    examples: [
      "Storefronts and product detail pages",
      "Cart and checkout flows",
      "Account, orders, and returns",
      "Merchant dashboards and inventory tools",
    ],
  },
  {
    slug: "beauty-sector",
    label: "Beauty Sector",
    group: "Industries",
    short:
      "Skincare, cosmetics, and personal care — direct-to-consumer brands and clinical-grade product lines.",
    body: [
      "The beauty sector spans everything from mass-market skincare and cosmetics to clinical-grade and dermatologist-developed product lines. It covers e-commerce storefronts, brand sites, education content, and the systems that hold product information, ingredient details, and routines together for customers.",
      "Designing in beauty is part editorial, part conversion: customers want to feel a brand's identity before they trust it, and they want to know exactly what's in a product before they buy. Good design pairs a strong visual story (photography, typography, motion) with clear product information, ingredient transparency, and a smooth path from discovery to checkout.",
    ],
    examples: [
      "Brand storefronts and product detail pages",
      "Routine builders and skin-type quizzes",
      "Ingredient libraries and education content",
      "Subscription and replenishment flows",
    ],
  },
  {
    slug: "african-language",
    label: "African Language",
    group: "Industries",
    short:
      "Digital tools that teach, preserve, and celebrate African languages for native and diaspora learners.",
    body: [
      "African Language products help people learn, practise, and stay connected to languages across the continent — Yoruba, Igbo, Hausa, Swahili, Zulu, Amharic, and many more. They serve native speakers wanting to deepen literacy, diaspora communities passing language to the next generation, and global learners curious about culture they didn't grow up with.",
      "Designing for this space means respecting that each language carries its own tonal system, script, idioms, and oral tradition. Good products go beyond translation: they teach pronunciation honestly, surface cultural context alongside vocabulary, and treat language as something to use — in conversation, story, song — not just memorise.",
    ],
    examples: [
      "Vocabulary and pronunciation practice apps",
      "Story-based and conversational learning",
      "Cultural context and proverb libraries",
      "Community and tutor-led lessons",
    ],
  },
  {
    slug: "education",
    label: "Education / EdTech",
    group: "Industries",
    short:
      "Learning experiences for students, teachers, and lifelong learners.",
    body: [
      "Education technology (EdTech) covers digital products that help people learn or help educators teach — from K-12 and higher education to language learning, professional upskilling, and corporate training. Products range from full learning management systems to focused practice apps and content libraries.",
      "Designing for learning means thinking about motivation, progression, and feedback. The best EdTech products respect the learner's time, communicate progress clearly, and turn complex curricula into manageable steps. Accessibility and inclusivity are core — learners arrive with very different starting points.",
    ],
    examples: [
      "Course platforms and learning paths",
      "Language-learning and practice apps",
      "Teacher dashboards and grading tools",
      "Assessment and feedback systems",
    ],
  },
  {
    slug: "user-interface",
    label: "User Interface (UI)",
    group: "Craft",
    short:
      "The visual and interactive layer of a product — what people see, tap, and respond to.",
    body: [
      "User Interface design is everything a person interacts with on a screen: layout, typography, colour, buttons, forms, menus, motion, and the rhythm of how those elements come together. It's the craft of turning a product idea into something that feels usable, trustworthy, and on-brand.",
      "Good UI quietly does its job. It guides attention without shouting, makes the right action obvious, and stays consistent across every page so people can build a mental model and move fast. For a business, UI is the front line of customer experience — it's what people remember and compare you on.",
    ],
    examples: [
      "Design systems (colour, type, components)",
      "Responsive page and screen layouts",
      "Forms, navigation, and onboarding flows",
      "Dashboards and data visualisations",
    ],
  },
  {
    slug: "illustration",
    label: "Illustration",
    group: "Craft",
    short:
      "Custom visual storytelling that adds personality and explains the hard-to-photograph.",
    body: [
      "Illustration is the use of original drawings — characters, scenes, icons, spot graphics — to support a product or brand. Where photography captures the world as-is, illustration shapes it: simplifying complex ideas, giving abstract concepts a face, and adding warmth that stock imagery can't.",
      "In a digital product, illustration helps you stand out, communicate values, and walk users through unfamiliar journeys (onboarding, empty states, error pages, education screens). For brands competing in crowded spaces, a recognisable illustration style is a long-term asset — people remember the look long after they've forgotten the copy.",
    ],
    examples: [
      "Brand mascots and character systems",
      "Onboarding and empty-state art",
      "Product marketing and landing-page hero art",
      "Editorial and explainer illustrations",
    ],
  },
  {
    slug: "beauty-sector",
    label: "Beauty Sector",
    group: "Industries",
    short:
      "Skincare, cosmetics, and wellness products — design that balances science, ritual, and brand confidence.",
    body: [
      "The beauty sector covers everything from clinical-grade skincare to high-street cosmetics, hair, fragrance, and personal wellness. It blends two demanding worlds: the science of formulation (ingredients, efficacy, safety) and the emotional language of self-care, identity, and routine.",
      "Digital design here has to translate the in-store experience to a screen — clear product education, honest claims, an aspirational but trustworthy tone, and frictionless purchase. Customers expect speed, but they also expect to feel something. Done well, beauty products turn one-off buyers into long-term subscribers and brand advocates.",
    ],
    examples: [
      "Skincare and cosmetics e-commerce",
      "Ingredient education and product-finder quizzes",
      "Subscription and refill flows",
      "Clinic and dermatology booking platforms",
    ],
  },
  {
    slug: "african-language",
    label: "African Language",
    group: "Industries",
    short:
      "Digital products built for African language learners — preserving heritage and opening access.",
    body: [
      "African Language products serve learners, diaspora communities, educators, and anyone wanting to engage with languages like Yoruba, Hausa, Igbo, Swahili, Zulu, and many more. They sit at the intersection of EdTech and cultural technology — preserving heritage while making it accessible on modern devices.",
      "Designing in this space means thinking about distinctive scripts and diacritics, oral traditions vs written learning, voice and audio as a first-class input, and the deeply social way languages are taught and used. It also means designing for a global user base — from a teenager in Lagos to a second-generation learner in London.",
    ],
    examples: [
      "Vocabulary, phrase, and pronunciation apps",
      "Audio-led lessons and storytelling platforms",
      "Diaspora community and conversation products",
      "Classroom and curriculum tools",
    ],
  },
];

export default function GlossaryPage() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-6 pb-4 pt-10 lg:px-12 lg:pb-4 lg:pt-12">
          <Reveal>
            <h1 className="text-3xl font-semibold text-black sm:text-4xl">
              Glossary
            </h1>
            <div className="mt-5 h-[3px] w-[151px] bg-black" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[620px] text-base text-black sm:text-lg">
              A quick guide to the sectors I work in — what they mean, what kind
              of products live inside them, and how I approach design within each.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4">
              {(["Industries", "Craft"] as const).map((group) => (
                <div key={group}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {sectors
                      .filter((s) => s.group === group)
                      .map((sector) => (
                        <a
                          key={sector.slug}
                          href={`#${sector.slug}`}
                          className="rounded-[5px] border border-black px-3 py-1.5 text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                        >
                          {sector.label}
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3f3f3]">
        <div className="mx-auto max-w-[960px] px-6 py-12 lg:px-12 lg:py-16">
          <div className="space-y-14">
            {sectors.map((sector, index) => (
              <article
                key={sector.slug}
                id={sector.slug}
                className="scroll-mt-24"
              >
                <Reveal>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#071459]">
                    {sector.group} · {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-black sm:text-[28px]">
                    {sector.label}
                  </h2>
                  <div className="mt-4 mb-5 h-[3px] w-[151px] bg-black" />
                  <p className="max-w-[680px] text-base text-black sm:text-lg">
                    {sector.short}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-6 max-w-[680px] space-y-5 text-base text-black sm:text-lg">
                    {sector.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/70">
                      Common products
                    </p>
                    <RevealStagger className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {sector.examples.map((example) => (
                        <RevealStaggerChild key={example}>
                          <div className="rounded-[5px] border border-black/60 bg-white px-4 py-3 text-base text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:shadow-md">
                            {example}
                          </div>
                        </RevealStaggerChild>
                      ))}
                    </RevealStagger>
                  </div>
                </Reveal>
                {index < sectors.length - 1 && (
                  <div className="mt-14 h-[2px] w-full bg-black/40" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-6 py-12 lg:px-12 lg:py-16">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#071459]">
                  See it in practice
                </p>
                <p className="mt-2 max-w-[520px] text-base text-black sm:text-lg">
                  Each sector is reflected in a case study — explore the work.
                </p>
              </div>
              <CtaButton href="/work" variant="primary-dark">
                SEE WORK
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
