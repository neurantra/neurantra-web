import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "./_components/AdSlot";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { AD_SLOTS } from "@/lib/ads";

type ProductStatus = "Live" | "Beta" | "Coming soon";

interface Product {
  name: string;
  tagline: string;
  domain: string;
  status: ProductStatus;
  statusLabel?: string;
  url?: string;
  internal?: boolean;
  logo?: string;
}

const PRODUCTS: Product[] = [
  {
    name: "IyerSpine",
    tagline: "An AI assistant that helps patients navigate spine care questions and next steps with confidence.",
    domain: "Healthcare",
    status: "Live",
    url: "https://iyerspine.com",
    logo: "/iyerspine-logo.png",
  },
  {
    name: "Surgery Care",
    tagline: "The patient companion app surgical practices use to stay connected — human-reviewed messages, post-op instructions, an educational assistant, and recovery tracking.",
    domain: "Healthcare · patient app",
    status: "Live",
    url: "/surgery-care",
    internal: true,
    logo: "/surgery-care/surgery-care-logo.png",
  },
  {
    name: "Pawcial",
    tagline: "Location-aware social check-ins for dog parents — find compatible playdates and trusted walkers nearby.",
    domain: "Consumer · social",
    status: "Live",
    url: "https://www.pawcial.com",
    logo: "/pawcial-logo.png",
  },
  {
    name: "PlaneSane",
    tagline: "Choose the best flight — and now the best hotel — not just the cheapest. Reliability, weather, connection, and fare risk from years of flight data; hotels scored by StaySane.",
    domain: "Travel · web, iOS & Android",
    status: "Live",
    url: "/planesane",
    internal: true,
    logo: "/planesane/planesane-logo.svg",
  },
  {
    name: "Puzzlecub",
    tagline: "Seven AI-driven games in one app — Math, Word, Sand, Alpha, Maze, Geo, and Stack — adapting to how you play.",
    domain: "Games · all ages",
    status: "Live",
    url: "/puzzlecub",
    internal: true,
    logo: "/puzzlecub/puzzlecub-logo.png",
  },
  {
    name: "Chaturang",
    tagline: "The 8th-century Indian ancestor of chess, reborn with a strong, self-play-tuned AI.",
    domain: "Games · board & strategy",
    status: "Live",
    url: "/chaturang",
    internal: true,
    logo: "/chaturang/chaturang-logo.png",
  },
];

// The three or four most recent shipping milestones. Newest first; prune the tail
// rather than letting this grow into a changelog.
const LATEST = [
  {
    when: "August 2026",
    product: "Surgery Care",
    href: "/surgery-care",
    headline: "Live on the App Store and Google Play.",
    body:
      "Out of beta and running in a surgical practice today — with the ninety-day course of care, procedure-specific post-op instructions, and the Atlas assistant, every practice reply reviewed by a person before a patient sees it.",
  },
  {
    when: "August 2026",
    product: "PlaneSane",
    href: "/planesane",
    headline: "Hotels, scored the way flights are.",
    body:
      "StaySane is the lodging half — a 0-100 risk score built from what guests actually complain about, how the location really works, and whether the rate is fair for that city. Thin evidence is withheld, not guessed. On the web now; the flight side is also a free app on iOS and Android.",
  },
  {
    when: "July 2026",
    product: "Puzzlecub",
    href: "/puzzlecub",
    headline: "A seventh game: Stack Quest.",
    body:
      "Tap two numbers and the answer they make to drop a puck into the tube, and stack them faster than the beaker fills. It joins the Daily Challenge rotation alongside the other six.",
  },
];

const PRACTICES = [
  {
    label: "Domain-specific AI assistants",
    body:
      "Conversational AI tuned for the questions a real customer actually asks at a high-stakes moment — clinic visit, claim, return, transaction. Trained on a single domain's vocabulary, integrated into the systems already running it, designed to defer when it should.",
  },
  {
    label: "AI-driven educational games",
    body:
      "Games where the AI is the tutor, the antagonist, and the narrator — adapting difficulty in real time and turning practice into play. Currently building reading and math fluency tools for children ages 5 through 12.",
  },
];

function StatusPill({ status, label }: { status: ProductStatus; label?: string }) {
  const styles =
    status === "Live"
      ? "bg-[#E6F0EC] text-[#1F4C40] border-[#C9DED7]"
      : status === "Beta"
        ? "bg-[#FFF3D8] text-[#92400E] border-[#FDE68A]"
        : "bg-[#F5EFE8] text-[#78716C] border-[#E8E2D6]";
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles}`}
    >
      {label ?? status}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="home" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            AI for high-trust moments
          </p>
          <h1 className="max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[64px]">
            Calm, deeply integrated AI for the moments where clarity matters most.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Neurantra is a small product studio. We build domain-specific AI
            assistants and AI-driven educational games, with a bias toward
            tools that are quiet, careful, and earn their keep.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#products"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              See what we&apos;re building
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section id="what-we-build" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            What we build
          </p>
          <div className="grid gap-12 sm:grid-cols-2">
            {PRACTICES.map(p => (
              <div key={p.label} className="border-t border-line pt-8">
                <h2 className="text-[26px] font-semibold leading-tight tracking-tight text-foreground">
                  {p.label}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest ── */}
      <section id="latest" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Latest
          </p>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-3">
            {LATEST.map(item => (
              <Link
                key={`${item.product}-${item.headline}`}
                href={item.href}
                className="group block border-t border-line pt-8"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.product}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.when}
                  </p>
                </div>
                <h3 className="mt-3 text-[21px] font-semibold leading-snug tracking-tight text-foreground">
                  {item.headline}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Products
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {PRODUCTS.map(prod => {
              const inner = (
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white/60 p-7 transition-colors hover:bg-white">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {prod.logo && (
                        <Image
                          src={prod.logo}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 rounded-lg object-contain"
                        />
                      )}
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {prod.name}
                      </h3>
                    </div>
                    <StatusPill status={prod.status} label={prod.statusLabel} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {prod.domain}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {prod.tagline}
                  </p>
                  {prod.url && (
                    <p className="mt-6 inline-flex items-center text-[13px] font-semibold text-accent">
                      {prod.internal ? "Learn more" : `Visit ${prod.name}`} →
                    </p>
                  )}
                </article>
              );
              if (!prod.url) {
                return <div key={prod.name}>{inner}</div>;
              }
              if (prod.internal) {
                return (
                  <Link key={prod.name} href={prod.url} className="group block">
                    {inner}
                  </Link>
                );
              }
              return (
                <a
                  key={prod.name}
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ad ── */}
      <AdSlot
        slot={AD_SLOTS.home}
        className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10"
      />

      {/* ── Contact ── */}
      <section id="contact" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Have a question, an idea, or want to talk shop?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            We&apos;re a small team and we read everything.
          </p>
          <a
            href="mailto:hello@neurantra.com"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            hello@neurantra.com
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
