import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import { LetsWorkForm } from "../_components/lets-work-form";
import { Reveal } from "../_components/motion/reveal";
import {
  TextMaskReveal,
  DrawInDivider,
} from "../_components/motion/text-mask-reveal";

const CONTACT_EMAIL = "femi.o@mediawind.co";

export const metadata: Metadata = {
  title: "Contact — Femi Olatunde",
  description:
    "Open for collaboration and freelancing — get in touch with Femi Olatunde.",
};

export default function ContactPage() {
  return (
    <div className="font-sans">
      <SiteHeader />

      <section className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-[960px] px-6 py-12 lg:px-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_330px] lg:items-stretch lg:justify-center lg:gap-8">
            <Reveal>
              <div className="flex h-full flex-col rounded-[20px] bg-[#1e2f5c] p-8 lg:min-h-[440px] lg:p-9">
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                  <TextMaskReveal>Let&apos;s Work</TextMaskReveal>
                </h1>
                <DrawInDivider
                  delay={0.5}
                  className="mt-2 h-[2px] w-[120px] bg-white/40"
                />
                <p className="mt-5 max-w-[380px] text-sm text-white sm:text-base">
                  Open for collaboration and freelancing, in building product
                  ideas to life.
                </p>
                <div className="mt-auto pt-8">
                  <LetsWorkForm email={CONTACT_EMAIL} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[330/440] w-full overflow-hidden rounded-[20px] lg:min-h-[440px]">
                <Image
                  src="/images/femi-contact.png"
                  alt="Portrait of Femi Olatunde"
                  fill
                  priority
                  sizes="(min-width: 1024px) 330px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
