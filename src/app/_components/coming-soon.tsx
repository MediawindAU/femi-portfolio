import Link from "next/link";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function ComingSoon({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="font-sans">
      <SiteHeader />
      <section className="bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center px-6 py-32 text-center lg:px-12 lg:py-48">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#071459]">
            Coming soon
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-black sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-[600px] text-lg text-black sm:text-2xl">
            {body}
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex h-[62px] w-[240px] items-center justify-center rounded-[7px] border-2 border-black text-2xl font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            BACK HOME
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
