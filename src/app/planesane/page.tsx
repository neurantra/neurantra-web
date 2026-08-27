import type { Metadata } from "next";
import Image from "next/image";
import { AdSlot } from "../_components/AdSlot";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { AD_SLOTS } from "@/lib/ads";

export const metadata: Metadata = {
  title: "PlaneSane — Choose the best flight and the best hotel, not just the cheapest",
  description:
    "PlaneSane scores flights on real on-time performance, weather risk, connection safety, and fare quality — and, through StaySane, scores hotels on whether a stay will actually work out. Free on the web and on iOS and Android. A Neurantra product. Advisory only; no booking.",
  alternates: { canonical: "/planesane" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/planesane",
    title: "PlaneSane — Choose the best flight and the best hotel, not just the cheapest",
    description:
      "Flight reliability scores from real on-time, weather, and connection data — plus StaySane hotel risk scores. Free on the web, iOS, and Android. A Neurantra product.",
    locale: "en_US",
  },
};

const PLANESANE_SITE = "https://planesane.com";
const STAYSANE_PAGE = "https://planesane.com/staysane";
const PLANESANE_APP_STORE =
  "https://apps.apple.com/us/app/planesane-best-flight-finder/id6778518658";
const PLANESANE_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.planesane.app";
const DESTINATIONS_PAGE = "https://planesane.com/destinations";

interface Factor {
  eyebrow: string;
  heading: string;
  body: string;
  note: string;
}

const FACTORS: Factor[] = [
  {
    eyebrow: "Reliability",
    heading: "On-time history, not marketing.",
    body:
      "Every option is scored against years of real US Department of Transportation on-time and cancellation records for that carrier and route. A fare that looks great loses its shine when the flight has a habit of running late — PlaneSane surfaces that before you book, not after you're stranded.",
    note: "7+ years of US DOT performance data",
  },
  {
    eyebrow: "Weather risk",
    heading: "The sky the flight actually flies through.",
    body:
      "Departure and arrival airports carry their own weather personalities — a winter hub and a coastal airport are not the same bet in February. PlaneSane folds historical weather patterns across hundreds of US airports into a forward-looking risk score for your specific dates.",
    note: "7 years of weather across 242 airports",
  },
  {
    eyebrow: "Connection safety",
    heading: "Will you actually make the transfer?",
    body:
      "A tight layover at a delay-prone hub is a missed-connection waiting to happen. PlaneSane evaluates each itinerary's connections — layover length against the realistic risk of the inbound leg slipping — so a cheap two-stop ticket doesn't quietly become an overnight in the wrong city.",
    note: "Per-itinerary connection scoring",
  },
  {
    eyebrow: "Fare quality",
    heading: "Cheap, in context.",
    body:
      "Price still matters — it just isn't the only thing. PlaneSane weighs the fare against everything else it knows so you can see when a few dollars more buys a meaningfully more reliable trip, and when the cheap option is genuinely the smart one.",
    note: "One-way · round-trip · multi-city",
  },
];

// StaySane — the lodging half. Factors are described as examples of what the score
// considers; the full input set, the weighting, and the data providers stay proprietary.
const STAY_FACTORS: Factor[] = [
  {
    eyebrow: "Quality & cleanliness",
    heading: "What guests complain about, not the average.",
    body:
      "A four-star average can hide a bathroom everyone hated. StaySane reads guest reviews by category — cleanliness, sleep, bathroom, service, rooms, property — and surfaces the specific complaint rate rather than burying it. “74% of bathroom reviews negative” is a thing you can act on; 4.2 stars is not.",
    note: "Category-level review sentiment",
  },
  {
    eyebrow: "Location & access",
    heading: "How hard is this place to actually use?",
    body:
      "A cheap room an hour from everything is not cheap. StaySane weighs how the property sits against the city around it — what is walkable, what transit reaches it, and how far it really is from the airport you are flying into, with the reference airport in your hands for multi-airport metros.",
    note: "Location · transit · airport access",
  },
  {
    eyebrow: "Price fairness",
    heading: "Value against local peers, not the sticker.",
    body:
      "The nightly rate is judged against other hotels in the same city of comparable quality — so you can see when a rate is a genuine deal and when it is a tourist markup. Cheap somewhere expensive and expensive somewhere cheap are different facts, and a raw price hides both.",
    note: "Quality-per-dollar, within the city",
  },
  {
    eyebrow: "Honest gaps",
    heading: "A thin signal is disclosed, never guessed.",
    body:
      "A property with too few reviews behind it has its headline score withheld rather than invented — the individual factors still show, and the confidence is stated out loud. Neighborhood crime and safety are deliberately left out entirely: there is no reliable global open dataset for it, so StaySane does not pretend otherwise.",
    note: "Withheld beats guessed",
  },
];

export default function PlaneSanePage() {
  // schema.org for the product page — PlaneSane ships as a free web app and a free
  // mobile app, so they are declared as two nodes rather than one blurred together.
  const publisher = {
    "@type": "Organization",
    name: "Neurantra LLC",
    url: "https://neurantra.com",
  };
  const freeOffer = { "@type": "Offer", price: "0", priceCurrency: "USD" };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "PlaneSane",
        url: PLANESANE_SITE,
        applicationCategory: "TravelApplication",
        operatingSystem: "Web",
        description:
          "PlaneSane scores flights on on-time performance, weather risk, connection safety, and fare quality, and — through StaySane — scores hotels on whether a stay will actually work out, so travelers can choose the most reliable trip rather than the cheapest one.",
        offers: freeOffer,
        publisher,
      },
      {
        "@type": "MobileApplication",
        name: "PlaneSane: Best Flight Finder",
        applicationCategory: "TravelApplication",
        operatingSystem: "iOS, Android",
        description:
          "The PlaneSane app scores every flight option on reliability, weather risk, connection safety, and fare quality, and carries Wright, the in-product assistant that explains the score.",
        installUrl: [PLANESANE_APP_STORE, PLANESANE_PLAY_STORE],
        offers: freeOffer,
        publisher,
      },
    ],
  };

  return (
    <div className="flex flex-col flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader variant="subpage" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/planesane/planesane-logo.svg"
              alt="PlaneSane logo"
              width={72}
              height={72}
              priority
              className="h-[72px] w-[72px] rounded-2xl"
            />
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9DED7] bg-[#E6F0EC] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4C40]">
              Live on the web, iOS &amp; Android
            </span>
          </div>
          <h1 className="max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
            Choose the best trip,<br className="hidden sm:block" /> not just the cheapest.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            PlaneSane scores every flight option on real on-time history, weather
            risk, connection safety, and fare quality. StaySane, its lodging half,
            does the same for where you sleep. Both are explainable advisors, not
            booking engines: no payments, no booking, ever.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PLANESANE_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Visit planesane.com →
            </a>
            <a
              href="#staysane"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Meet StaySane
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={PLANESANE_APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Download on the App Store
            </a>
            <a
              href={PLANESANE_PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ── What it is ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            What it is
          </p>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                A reliability layer over the whole trip.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                The cheapest flight and the fastest flight are easy to find.
                The <em>best</em> one — the flight most likely to leave on time,
                survive the weather, and get you to your connection — is harder.
                The same is true of a hotel: stars and price are easy, a clean
                room and a quiet night are not. PlaneSane combines historical
                performance with a forward-looking model and explains its
                reasoning, so the recommendation is something you can actually
                trust — on both halves of the trip.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                Built by Neurantra, advisory by design.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                PlaneSane is deterministic where it counts: the scoring engine is
                rules- and data-driven, and AI is used to explain and classify —
                never to invent a number. Wright, the in-product assistant, reads
                the score you are looking at and answers from it rather than from
                the open internet. PlaneSane runs at planesane.com and as a free
                app on iOS and Android; the full flight and hotel experience is on
                the web today, and the app carries flights and Wright with hotels
                following. Scores inform a decision; they are not a guarantee of
                on-time performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it scores ── */}
      <section id="how-it-scores" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            How it scores a flight
          </p>
          <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {FACTORS.map(f => (
              <article key={f.heading} className="border-t border-line pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {f.eyebrow}
                </p>
                <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-tight text-foreground sm:text-[28px]">
                  {f.heading}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted">{f.body}</p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {f.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── StaySane ── */}
      <section id="staysane" className="border-b border-line bg-accent/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              StaySane · the lodging half
            </p>
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9DED7] bg-[#E6F0EC] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4C40]">
              New
            </span>
          </div>
          <h2 className="mt-5 max-w-3xl text-[30px] font-semibold leading-tight tracking-tight text-foreground sm:text-[40px]">
            A hotel risk score, not a star rating.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            PlaneSane answers <em>will this flight actually work out?</em> StaySane
            asks the same question of where you sleep. It cuts past the two things
            hotel search shows you — stars and price — to the things that actually
            ruin a trip: a dirty room, a noisy night, a location that eats an hour
            a day, a rate well above what the city charges for the same quality.
            Every hotel gets a StaySane Score from 0 to 100, and the reasoning
            behind it is shown, not implied.
          </p>
          <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {STAY_FACTORS.map(f => (
              <article key={f.heading} className="border-t border-line pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {f.eyebrow}
                </p>
                <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-tight text-foreground sm:text-[28px]">
                  {f.heading}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted">{f.body}</p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {f.note}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={DESTINATIONS_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Browse scored destinations →
            </a>
            <a
              href={STAYSANE_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              How the StaySane Score works
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Advisory, like the flight side: StaySane scores and explains, then hands
            you off to a booking partner. Wright, the in-product assistant, carries
            the hotel you are looking at — ask it what the biggest risk here is and
            it answers from that property&rsquo;s own score. StaySane is live on the
            web now, and is coming to the iOS and Android apps.
          </p>
        </div>
      </section>

      {/* ── Ad ── */}
      <AdSlot
        slot={AD_SLOTS.product}
        className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10"
      />

      {/* ── Get it ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Try PlaneSane
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Free to use. No account, no booking — just a clearer decision.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Search a route on planesane.com and see every flight scored on the
            things that actually decide whether your trip goes smoothly — then
            switch to hotels and do the same for where you land.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={PLANESANE_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Visit planesane.com →
            </a>
            <a
              href={PLANESANE_APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Download on the App Store
            </a>
            <a
              href={PLANESANE_PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
