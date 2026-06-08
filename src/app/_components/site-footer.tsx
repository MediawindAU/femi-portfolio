import { ContactForm } from "./contact-form";
import { Reveal, RevealStagger, RevealStaggerChild } from "./motion/reveal";
import { AnimatedSocial } from "./motion/animated-social";
import { AnimatedLine } from "./motion/animated-line";

const CONTACT_EMAIL = "femi.o@mediawind.co";

const socials = [
  {
    href: "https://www.instagram.com/olatunde_olufemi/",
    src: "/images/insta-white.png",
    alt: "",
    label: "Instagram",
    width: 40,
    height: 40,
  },
  {
    href: "https://www.facebook.com/olatunde.o.olaniyi",
    src: "/images/facebook-white.png",
    alt: "",
    label: "Facebook",
    width: 46,
    height: 46,
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    src: "/images/mail-white.png",
    alt: "",
    label: "Email",
    width: 44,
    height: 30,
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-[960px] px-6 py-16 lg:px-12 lg:py-20">
        <AnimatedLine className="mb-12" />

        <Reveal>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Let&apos;s Talk
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-center text-base sm:text-lg">
            Get a timely delivery on your project expectation.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <ContactForm email={CONTACT_EMAIL} />
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <Reveal delay={0.05}>
            <div>
              <p className="text-2xl font-semibold">Femi Olatunde</p>
              <p className="text-lg">Product Builder &amp; Founder</p>
            </div>
          </Reveal>
          <RevealStagger className="flex items-center gap-6">
            {socials.map((social) => (
              <RevealStaggerChild key={social.label}>
                <AnimatedSocial {...social} />
              </RevealStaggerChild>
            ))}
          </RevealStagger>
        </div>
      </div>
    </footer>
  );
}
