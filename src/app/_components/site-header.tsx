import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "ARTWORK", href: "/artwork" },
];

export function SiteHeader() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-6 lg:px-8 lg:py-7">
        <Link href="/" aria-label="Femi Olatunde — Home" className="shrink-0">
          <Image
            src="/images/fm-logo.png"
            alt="Femi Olatunde"
            width={112}
            height={91}
            priority
            style={{ height: "auto", width: "auto" }}
            className="max-h-[44px] max-w-[80px] lg:max-h-[60px] lg:max-w-[90px]"
          />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hidden text-sm font-semibold tracking-wide text-black transition-opacity hover:opacity-70 sm:inline-block lg:text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-2 border-[#1c1c1c] px-3 py-1.5 text-xs font-semibold tracking-wide text-black transition-colors hover:bg-black hover:text-white lg:px-4 lg:py-2 lg:text-lg"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
