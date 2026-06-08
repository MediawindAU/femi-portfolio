import Image from "next/image";

const BRAND = "#06b4da";
const BRAND_DARK = "#048ba8";
const BRAND_INK = "#0f3a5a";
const SURFACE = "#f3fbfd";

function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-white" : "text-black";
  return (
    <div
      className={`relative flex h-6 items-center justify-between px-5 text-[10px] font-semibold ${color}`}
    >
      <span className="tabular-nums">9:41</span>
      <div className="absolute left-1/2 top-1.5 h-3.5 w-16 -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
      <div className="flex items-center gap-1">
        <svg
          viewBox="0 0 18 12"
          aria-hidden
          className="h-2.5 w-4"
          fill="currentColor"
        >
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.5" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg
          viewBox="0 0 16 12"
          aria-hidden
          className="h-2.5 w-3.5"
          fill="currentColor"
        >
          <path d="M8 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M5.5 7.5l1 1c0.83-0.83 2.17-0.83 3 0l1-1c-1.38-1.38-3.62-1.38-5 0z" />
          <path d="M3 5l1 1c2.21-2.21 5.79-2.21 8 0l1-1c-2.76-2.76-7.24-2.76-10 0z" />
        </svg>
        <div className="flex items-center">
          <div className="relative h-2.5 w-5 rounded-[2.5px] border border-current">
            <div className="absolute inset-[1.5px] rounded-[1.5px] bg-current opacity-90" />
          </div>
          <div className="h-1.5 w-[1.5px] rounded-r-sm bg-current opacity-70" />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`absolute bottom-1.5 left-1/2 z-20 h-[3px] w-[90px] -translate-x-1/2 rounded-full ${
        dark ? "bg-white/60" : "bg-black/40"
      }`}
    />
  );
}

export function PhoneFrame({
  children,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[36px] border-[6px] border-[#0e0e0e] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ${
        isDark ? "bg-[#0e0e0e]" : "bg-white"
      } ${className}`}
      style={{ aspectRatio: "280 / 580" }}
    >
      <StatusBar dark={isDark} />
      <div className="relative h-[calc(100%-30px)] overflow-hidden">
        {children}
      </div>
      <HomeIndicator dark={isDark} />
    </div>
  );
}

export function WelcomeScreen() {
  return (
    <div
      className="flex h-full flex-col text-white"
      style={{
        background: `linear-gradient(180deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
      }}
    >
      <div className="flex flex-1 flex-col items-center px-6 pt-2 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">
          Amtan Medical
        </p>
        <div className="relative mt-3 h-40 w-32">
          <Image
            src="/images/dr-amtan.png"
            alt="Dr Amtan character"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
        <h3 className="mt-3 text-[19px] font-bold leading-tight">
          Meet Dr. Amtan
        </h3>
        <p className="mt-1.5 text-[11px] leading-relaxed text-white/85">
          Your daily health companion
        </p>
        <ul className="mt-5 w-full space-y-2 text-left text-[10.5px]">
          {[
            "One healthy habit, every morning",
            "Book and manage appointments",
            "Read everything in plain language",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[1px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-bold text-[#048ba8]">
                ✓
              </span>
              <span className="text-white/95">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-16">
        <div className="rounded-xl bg-white py-2.5 text-center text-[12px] font-bold text-[#06b4da] shadow-md">
          Get Started
        </div>
        <p className="mt-2.5 text-center text-[9.5px] text-white/80">
          Already a patient?{" "}
          <span className="font-semibold underline">Sign in</span>
        </p>
      </div>
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-start justify-between px-4 pt-3">
        <div>
          <p className="text-[9px] text-black/55">Good morning,</p>
          <h3 className="mt-0.5 text-[14px] font-bold text-black">
            Janet 👋
          </h3>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-[11px]">
          🔔
        </div>
      </div>

      <div
        className="mx-4 mt-3 rounded-2xl p-3 text-white shadow-sm"
        style={{ backgroundColor: BRAND }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[8.5px] font-bold uppercase tracking-wider opacity-90">
            Today&apos;s tip
          </p>
          <p className="text-[8.5px] font-bold opacity-85">Day 14</p>
        </div>
        <div className="mt-2 flex gap-2.5">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white/25">
            <Image
              src="/images/dr-amtan.png"
              alt=""
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-[11.5px] font-bold leading-snug">
              Drink water before your morning coffee
            </h4>
            <p className="mt-0.5 text-[9px] leading-snug opacity-90">
              60 seconds to read · Hydration
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-lg bg-white py-1.5 text-[10px] font-bold shadow-sm"
          style={{ color: BRAND }}
        >
          Read full tip →
        </button>
      </div>

      <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
        <div
          className="rounded-xl p-2.5"
          style={{ backgroundColor: SURFACE }}
        >
          <div
            className="flex h-6 w-6 items-center justify-center rounded-lg"
            style={{ backgroundColor: BRAND }}
          >
            <span className="text-[10px] text-white">📅</span>
          </div>
          <p className="mt-1.5 text-[10.5px] font-bold leading-tight text-black">
            Book a
            <br />
            doctor
          </p>
          <p className="mt-0.5 text-[8.5px] text-black/55">
            Next: Today 3:30 PM
          </p>
        </div>
        <div className="rounded-xl bg-[#fff7e6] p-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#f0a83c]">
            <span className="text-[10px] text-white">✦</span>
          </div>
          <p className="mt-1.5 text-[10.5px] font-bold leading-tight text-black">
            Streak
            <br />2 weeks
          </p>
          <p className="mt-0.5 text-[8.5px] text-black/55">14 tips read</p>
        </div>
      </div>

      <div className="mx-4 mt-3">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-black/55">
            Recent tips
          </p>
          <p className="text-[8.5px] font-semibold text-[#06b4da]">View all</p>
        </div>
        <div className="mt-1.5 space-y-1">
          {[
            { tip: "15-minute morning walk", done: true },
            { tip: "Reduce evening screen time", done: true },
            { tip: "Stretch after sitting an hour", done: false },
          ].map((item) => (
            <div
              key={item.tip}
              className="flex items-center gap-2 rounded-lg border border-black/10 px-2 py-1.5"
            >
              <div
                className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: item.done ? BRAND : "transparent",
                  border: item.done ? "none" : "1.5px solid rgba(0,0,0,0.3)",
                }}
              >
                {item.done && (
                  <span className="text-[7px] font-bold text-white">✓</span>
                )}
              </div>
              <p className="text-[9px] text-black">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-black/10 bg-white pb-3 pt-1.5 text-[8.5px] font-semibold">
        {["Home", "Tips", "Book", "Profile"].map((label, i) => (
          <div
            key={label}
            className="flex flex-col items-center gap-0.5"
            style={{ color: i === 0 ? BRAND : "rgba(0,0,0,0.4)" }}
          >
            <div
              className="h-[3px] w-4 rounded-full"
              style={{
                backgroundColor: i === 0 ? BRAND : "transparent",
              }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BookScreen() {
  const doctors = [
    {
      name: "Dr. Sarah Tanya",
      role: "General Practice",
      next: "Today",
      time: "3:30 PM",
      selected: true,
      tone: "navy" as const,
      stars: 5,
    },
    {
      name: "Dr. Michael Patel",
      role: "Family Medicine",
      next: "Tomorrow",
      time: "9:00 AM",
      selected: false,
      tone: "amber" as const,
      stars: 5,
    },
    {
      name: "Dr. Aisha Chen",
      role: "General Practice",
      next: "Wed",
      time: "11:15 AM",
      selected: false,
      tone: "rose" as const,
      stars: 4,
    },
  ];

  const avatarColors: Record<"navy" | "amber" | "rose", string> = {
    navy: BRAND_INK,
    amber: "#d99a4e",
    rose: "#c97171",
  };

  return (
    <div className="h-full bg-white">
      <div className="px-4 pt-3 pb-2.5">
        <p className="text-[10px] text-black/55">← Back</p>
        <h3 className="mt-2 text-[15px] font-bold leading-tight text-black">
          Choose your doctor
        </h3>
        <p className="mt-0.5 text-[9.5px] text-black/55">
          Step 1 of 3 · Amtan Medical Group
        </p>
        <div className="mt-2.5 flex gap-1">
          <div
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: BRAND }}
          />
          <div className="h-1 flex-1 rounded-full bg-black/15" />
          <div className="h-1 flex-1 rounded-full bg-black/15" />
        </div>
      </div>

      <div className="mt-2 space-y-1.5 px-4">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className={`flex items-center gap-2.5 rounded-xl p-2.5 ${
              doc.selected
                ? "border-2 border-[#06b4da] bg-[#f3fbfd]"
                : "border border-black/10"
            }`}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ backgroundColor: avatarColors[doc.tone] }}
            >
              {doc.name
                .split(" ")
                .map((p) => p[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-black leading-tight">
                {doc.name}
              </p>
              <p className="text-[8.5px] text-black/55">{doc.role}</p>
              <p className="mt-0.5 text-[8px] text-[#d99a4e]">
                {"★".repeat(doc.stars)}
                <span className="text-black/30">
                  {"★".repeat(5 - doc.stars)}
                </span>
              </p>
            </div>
            <div className="text-right">
              <p
                className="text-[8.5px] font-bold leading-tight"
                style={{ color: doc.selected ? BRAND : "rgba(0,0,0,0.7)" }}
              >
                {doc.next}
              </p>
              <p className="text-[8.5px] text-black/55">{doc.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-3 flex items-start gap-2 rounded-lg border border-dashed border-black/20 p-2.5">
        <span className="text-[12px] leading-none">+</span>
        <div>
          <p className="text-[9px] font-bold text-black leading-tight">
            Booking for a family member?
          </p>
          <p className="text-[8.5px] text-black/55">
            Add their details once and switch any time.
          </p>
        </div>
      </div>

      <div className="absolute bottom-16 left-4 right-4">
        <button
          type="button"
          className="w-full rounded-xl bg-[#1a1a1a] py-2.5 text-[11px] font-bold text-white"
        >
          Continue to time →
        </button>
      </div>
    </div>
  );
}

export function TipDetailScreen() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center justify-between px-4 pt-3 pb-1.5">
        <p className="text-[10px] text-black/55">← Back</p>
        <p className="text-[9px] text-black/55">Mon · 15 Oct</p>
      </div>

      <div className="mx-4 mt-2 overflow-hidden rounded-2xl">
        <div
          className="px-3.5 pb-2 pt-3"
          style={{ backgroundColor: BRAND }}
        >
          <p className="text-[8.5px] font-bold uppercase tracking-wider text-white/85">
            Healthy Habit · #14
          </p>
          <h3 className="mt-1 text-[13.5px] font-bold leading-tight text-white">
            Drink water before your morning coffee
          </h3>
          <p className="mt-1.5 text-[9.5px] text-white/85">
            60 seconds to read
          </p>
        </div>
        <div
          className="relative flex h-28 items-end justify-center overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
          }}
        >
          <div
            aria-hidden
            className="absolute -bottom-4 -left-2 h-20 w-20 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10"
          />
          <Image
            src="/images/dr-amtan.png"
            alt="Dr Amtan demonstrating the daily tip"
            width={150}
            height={150}
            className="relative h-32 w-auto object-contain"
          />
        </div>
      </div>

      <div className="mx-4 mt-3 space-y-1.5">
        <p className="text-[9.5px] leading-relaxed text-black">
          Coffee is a mild diuretic. If it&apos;s the first thing you drink,
          your body starts the day a little dehydrated.
        </p>
        <p className="text-[9.5px] leading-relaxed text-black">
          Try a full glass of water about 10 minutes before your first coffee —
          your kidneys, skin, and concentration will all thank you.
        </p>
      </div>

      <div
        className="mx-4 mt-3 flex items-start gap-2 rounded-lg px-2.5 py-1.5"
        style={{ backgroundColor: "#fff5e1" }}
      >
        <span className="text-[10px] leading-none">💡</span>
        <p className="text-[8.5px] text-black/75 leading-tight">
          <span className="font-bold">From Dr. Tanya:</span> keep a glass on
          your bedside table tonight as a reminder.
        </p>
      </div>

      <div className="absolute bottom-16 left-4 right-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-xl border-2 py-2 text-[10px] font-bold"
          style={{ borderColor: BRAND, color: BRAND }}
        >
          ♡ Save
        </button>
        <button
          type="button"
          className="flex-[1.5] rounded-xl py-2 text-[10px] font-bold text-white shadow-md"
          style={{ backgroundColor: BRAND }}
        >
          ✓ Mark as done
        </button>
      </div>
    </div>
  );
}

export function WireframePhone({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[210px] overflow-hidden rounded-[28px] border-2 border-black/40 bg-white shadow-md"
      style={{ aspectRatio: "210 / 440" }}
    >
      <div className="flex items-center justify-center bg-black/5 py-1.5 text-[7.5px] font-mono uppercase tracking-wider text-black/40">
        status bar
      </div>
      <div className="relative h-[calc(100%-22px)] overflow-hidden bg-white p-3">
        {children}
      </div>
      <div className="absolute bottom-1 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-black/20" />
    </div>
  );
}

export function LoFiWelcome() {
  return (
    <WireframePhone>
      <div className="flex h-full flex-col items-center justify-between text-black/40">
        <div className="mt-3 flex w-full flex-col items-center gap-2">
          <div className="h-1 w-16 rounded bg-black/15" />
          <div className="mt-3 h-16 w-16 rounded-full bg-black/15" />
          <div className="mt-1 h-2 w-24 rounded bg-black/35" />
          <div className="h-1.5 w-28 rounded bg-black/15" />
          <div className="mt-3 w-full space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-black/30" />
              <div className="h-1.5 flex-1 rounded bg-black/15" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-black/30" />
              <div className="h-1.5 flex-1 rounded bg-black/15" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-black/30" />
              <div className="h-1.5 flex-1 rounded bg-black/15" />
            </div>
          </div>
        </div>
        <div className="mb-10 w-full space-y-1.5">
          <div className="h-6 w-full rounded bg-black/30" />
          <div className="mx-auto h-1.5 w-20 rounded bg-black/15" />
        </div>
      </div>
    </WireframePhone>
  );
}

export function LoFiHome() {
  return (
    <WireframePhone>
      <div className="flex h-full flex-col gap-2 text-black/40">
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <div className="h-1 w-10 rounded bg-black/15" />
            <div className="h-1.5 w-16 rounded bg-black/35" />
          </div>
          <div className="h-4 w-4 rounded-full bg-black/15" />
        </div>

        <div className="rounded-lg border border-dashed border-black/30 bg-black/5 p-2">
          <div className="flex justify-between">
            <div className="h-1 w-10 rounded bg-black/30" />
            <div className="h-1 w-6 rounded bg-black/15" />
          </div>
          <div className="mt-1.5 flex gap-1.5">
            <div className="h-6 w-6 shrink-0 rounded-full bg-black/30" />
            <div className="flex-1 space-y-0.5">
              <div className="h-1.5 w-full rounded bg-black/30" />
              <div className="h-1.5 w-3/4 rounded bg-black/30" />
              <div className="h-1 w-1/2 rounded bg-black/15" />
            </div>
          </div>
          <div className="mt-2 h-3 w-full rounded bg-black/30" />
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded border border-dashed border-black/20 p-1.5">
            <div className="h-2.5 w-2.5 rounded bg-black/30" />
            <div className="mt-1 h-1 w-8 rounded bg-black/30" />
            <div className="mt-0.5 h-1 w-6 rounded bg-black/15" />
          </div>
          <div className="rounded border border-dashed border-black/20 p-1.5">
            <div className="h-2.5 w-2.5 rounded bg-black/30" />
            <div className="mt-1 h-1 w-8 rounded bg-black/30" />
            <div className="mt-0.5 h-1 w-6 rounded bg-black/15" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <div className="h-1 w-10 rounded bg-black/20" />
            <div className="h-1 w-6 rounded bg-black/15" />
          </div>
          <div className="h-3 rounded bg-black/8" />
          <div className="h-3 rounded bg-black/8" />
        </div>

        <div className="mt-auto flex justify-around border-t border-dashed border-black/30 pt-1.5">
          <div className="h-1.5 w-3 rounded bg-black/40" />
          <div className="h-1.5 w-3 rounded bg-black/15" />
          <div className="h-1.5 w-3 rounded bg-black/15" />
          <div className="h-1.5 w-3 rounded bg-black/15" />
        </div>
      </div>
    </WireframePhone>
  );
}

export function LoFiBook() {
  return (
    <WireframePhone>
      <div className="flex h-full flex-col gap-2 text-black/40">
        <div className="h-1 w-6 rounded bg-black/15" />
        <div className="space-y-0.5">
          <div className="h-2 w-24 rounded bg-black/30" />
          <div className="h-1 w-16 rounded bg-black/15" />
        </div>
        <div className="flex gap-0.5">
          <div className="h-0.5 flex-1 rounded bg-black/40" />
          <div className="h-0.5 flex-1 rounded bg-black/15" />
          <div className="h-0.5 flex-1 rounded bg-black/15" />
        </div>

        <div className="mt-1 space-y-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 rounded p-1.5 ${
                i === 1
                  ? "border border-black/40 bg-black/10"
                  : "border border-black/15"
              }`}
            >
              <div className="h-5 w-5 rounded-full bg-black/30" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1.5 w-12 rounded bg-black/30" />
                <div className="h-1 w-8 rounded bg-black/15" />
              </div>
              <div className="space-y-0.5">
                <div className="h-1 w-6 rounded bg-black/25" />
                <div className="h-1 w-5 rounded bg-black/15" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto mb-8 h-4 w-full rounded bg-black/30" />
      </div>
    </WireframePhone>
  );
}

export function LoFiTipDetail() {
  return (
    <WireframePhone>
      <div className="flex h-full flex-col gap-2 text-black/40">
        <div className="flex justify-between">
          <div className="h-1 w-6 rounded bg-black/15" />
          <div className="h-1 w-10 rounded bg-black/15" />
        </div>

        <div className="overflow-hidden rounded border border-dashed border-black/30">
          <div className="bg-black/8 px-2 py-1.5">
            <div className="h-1 w-12 rounded bg-black/30" />
            <div className="mt-1 h-1.5 w-full rounded bg-black/35" />
            <div className="mt-0.5 h-1.5 w-3/4 rounded bg-black/35" />
          </div>
          <div className="flex h-12 items-center justify-center bg-black/15">
            <div className="h-10 w-10 rounded-full bg-black/30" />
          </div>
        </div>

        <div className="space-y-0.5">
          <div className="h-1.5 w-full rounded bg-black/15" />
          <div className="h-1.5 w-full rounded bg-black/15" />
          <div className="h-1.5 w-3/4 rounded bg-black/15" />
        </div>

        <div className="rounded border border-dashed border-black/20 p-1.5">
          <div className="h-1 w-12 rounded bg-black/20" />
          <div className="mt-0.5 h-1 w-3/4 rounded bg-black/15" />
        </div>

        <div className="mt-auto mb-8 flex gap-1.5">
          <div className="h-4 flex-1 rounded border border-black/30" />
          <div className="h-4 flex-1 rounded bg-black/35" />
        </div>
      </div>
    </WireframePhone>
  );
}

export function UserFlowDiagram() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm lg:p-8">
      <div className="mx-auto max-w-md space-y-2">
        <FlowCard step="01" title="Open app" sub="From home screen" type="start" />
        <FlowConnector />
        <FlowCard step="02" title="Welcome" sub="Sign in or sign up" type="step" />
        <FlowConnector />
        <FlowCard step="03" title="Home" sub="Today's tip + actions" type="hub" />
      </div>

      <div className="mt-3 flex justify-center">
        <div className="flex flex-col items-center">
          <span aria-hidden className="text-base text-black/25">
            ↓
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55">
            Path splits
          </p>
          <span aria-hidden className="text-base text-black/25">
            ↓
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span
              className="inline-flex h-6 items-center rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: BRAND }}
            >
              Path A
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-black/70">
              Daily Tip
            </p>
          </div>
          <div className="space-y-2">
            <FlowCard step="04" title="Browse tips" sub="Recent + all habits" type="step" />
            <FlowConnector />
            <FlowCard step="05" title="Tip detail" sub="Read + illustration" type="step" />
            <FlowConnector />
            <FlowCard step="06" title="Mark as done" sub="Saved to history" type="end" tone="brand" />
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span
              className="inline-flex h-6 items-center rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: BRAND_INK }}
            >
              Path B
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-black/70">
              Book a Doctor
            </p>
          </div>
          <div className="space-y-2">
            <FlowCard step="04" title="Choose doctor" sub="Next-available slot" type="step" />
            <FlowConnector />
            <FlowCard step="05" title="Choose time" sub="Available slots" type="step" />
            <FlowConnector />
            <FlowCard step="06" title="Confirm" sub="Calendar invite sent" type="end" tone="ink" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowCard({
  step,
  title,
  sub,
  type,
  tone = "neutral",
}: {
  step: string;
  title: string;
  sub?: string;
  type: "start" | "step" | "hub" | "end";
  tone?: "brand" | "ink" | "neutral";
}) {
  let cls = "";
  if (type === "start") cls = "bg-[#06b4da] text-white border-transparent";
  else if (type === "hub")
    cls = "bg-[#0f3a5a] text-white border-transparent";
  else if (type === "end" && tone === "brand")
    cls = "bg-[#06b4da] text-white border-transparent";
  else if (type === "end" && tone === "ink")
    cls = "bg-[#0f3a5a] text-white border-transparent";
  else cls = "bg-white text-black border-black/15";

  return (
    <div
      className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 shadow-sm ${cls}`}
    >
      <span
        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
          type === "step" ? "bg-black/10 text-black/60" : "bg-white/20 text-white"
        }`}
      >
        {step}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-tight">{title}</p>
        {sub && (
          <p
            className={`mt-0.5 text-[11px] leading-tight ${
              type === "step" ? "text-black/55" : "text-white/80"
            }`}
          >
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex justify-center">
      <span aria-hidden className="text-base text-black/25">
        ↓
      </span>
    </div>
  );
}
