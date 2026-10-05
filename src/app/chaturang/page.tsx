import type { Metadata } from "next";
import Image from "next/image";
import { AdSlot } from "../_components/AdSlot";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { AD_SLOTS } from "@/lib/ads";

export const metadata: Metadata = {
  title: "Chaturang — the 8th-century ancestor of chess",
  description:
    "Chaturang is the 8th-century Indian board game that became chess — reborn on mobile with a strong, self-play-tuned AI and a Mughal-themed board. Play on the web or download for iOS and Android. A Neurantra game.",
  alternates: { canonical: "/chaturang" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/chaturang",
    title: "Chaturang — the 8th-century ancestor of chess",
    description:
      "The game chess came from, reborn with a strong, self-play-tuned AI. Play on the web or download for iOS and Android.",
    locale: "en_US",
  },
};

const CHATURANG_APP_STORE = "https://apps.apple.com/us/app/chaturang/id6770267722";
const CHATURANG_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.chaturang.app";

interface Feature {
  eyebrow: string;
  heading: string;
  body: string;
  note: string;
  screenshot: string;
  screenshotAlt: string;
}

const FEATURES: Feature[] = [
  {
    eyebrow: "The opponent",
    heading: "An AI that learned the game, not memorized it.",
    body:
      "Chaturang's engine was tuned over hundreds of thousands of self-play positions, with a Chaturang-specific evaluation rather than a chess engine in disguise. Three difficulty levels: Easy beats casual players who blunder and is ideal for learning; Medium unlocks after three Easy wins and gives a real fight; Hard unlocks after five Medium wins and searches six plies deep. King-and-Rook versus lone King endgames are played perfectly, from a built-in tablebase computed by retrograde analysis.",
    note: "Easy · Medium · Hard — earned, not just selected",
    screenshot: "/chaturang/chaturang-board.png",
    screenshotAlt: "Chaturang mid-game board with ornate piece silhouettes",
  },
  {
    eyebrow: "Not chess",
    heading: "Its 8th-century ancestor, rules and all.",
    body:
      "Chaturang is played on an uncheckered 8×8 board, the Ashtāpada, with the two Kings starting diagonally opposite. The pieces are weaker than their chess descendants: the Mantri (Counsellor) moves a single square diagonally — nothing like a Queen — and the Gaja (Elephant) jumps exactly two squares diagonally, reaching only eight squares on the whole board. There is no castling. The one tactical lifeline is the Raja's once-per-game Knight-like leap, which can even escape check — a single move that shapes the whole game.",
    note: "Raja · Mantri · Gaja · Rook · Knight · pawns",
    screenshot: "/chaturang/chaturang-rules.png",
    screenshotAlt: "Chaturang How to Play screen explaining piece movement",
  },
  {
    eyebrow: "The depth",
    heading: "Set the game you want to play.",
    body:
      "Every game opens with a royal card-pick ceremony to reveal your side. From there, tune the challenge: turn on optional 5-minute blitz clocks, or cap the game with a move-count limit that draws if reached. Difficulty tiers unlock as you win, so the game grows with you rather than handing you everything at once.",
    note: "Card-pick ceremony · blitz clocks · move-limit mode",
    screenshot: "/chaturang/chaturang-settings.png",
    screenshotAlt: "Chaturang settings — difficulty tiers, timed game, move limit",
  },
  {
    eyebrow: "The loop",
    heading: "Hints when you need them, streaks to keep.",
    body:
      "Stuck? Spend coins on a hint and the engine shows you its recommended move, highlighted on the board. Earn coins back by winning, drawing, or watching an ad. A day-streak counter and lifetime stats track every game — all of it wrapped in a Mughal-themed aesthetic with ornate piece silhouettes and the Kalam typeface. Solo play needs no signup; optional connected features are described in our privacy policy.",
    note: "Hints · coins · day streaks · lifetime stats",
    screenshot: "/chaturang/chaturang-stats.png",
    screenshotAlt: "Chaturang statistics screen — coins, games, streaks",
  },
];

export default function ChaturangPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/chaturang/chaturang-logo.png"
                alt="Chaturang logo"
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl"
              />
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9DED7] bg-[#E6F0EC] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4C40]">
                Web, iOS &amp; Android
              </span>
            </div>
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
              The game chess came from.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Chaturang is the 8th-century Indian board game widely considered
              the earliest known form of chess. The pieces are weaker, there is
              no castling, and the King has a single once-per-game Knight leap.
              Play it against an AI tuned over hundreds of thousands of self-play
              positions. Play in your browser at puzzlecub.com, or download from the App Store and Google Play.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="https://puzzlecub.com/chaturang" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Play in your browser →
              </a>
              <a
                href={CHATURANG_APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Download on the App Store
              </a>
              <a
                href={CHATURANG_PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[1419/2796] w-full max-w-[320px]">
            <Image
              src="/chaturang/chaturang-cardpick.png"
              alt="Chaturang card-pick screen — choose your side"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 320px, 80vw"
            />
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
                A 1,200-year-old game, played the way it was meant to be.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Chaturang spread from India along the trade routes and slowly
                became the chess the world plays today. Chaturang restores the
                original: the slower pieces, the diagonally-opposed Kings, the
                absence of castling. It is not a chess clone with a coat of
                paint — it is the game chess grew out of, with its own tactics
                and its own rhythm.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                Built by Neurantra, quiet by design.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Play against the AI without signing up. The mobile app also
                offers optional online play and a shared Coin Vault for eligible
                players. Those connected features use server-side data; see our{" "}
                <a href="/privacy" className="text-accent underline">privacy policy</a>{" "}
                for details. Game progress and purchases remain separate across apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Inside the game
          </p>
          <div className="space-y-24">
            {FEATURES.map((f, i) => {
              const isReversed = i % 2 === 1;
              const textBlock = (
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {f.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-[32px]">
                    {f.heading}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {f.body}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {f.note}
                  </p>
                </div>
              );
              const imageBlock = (
                <div className="relative mx-auto aspect-[1419/2796] w-full max-w-[300px]">
                  <Image
                    src={f.screenshot}
                    alt={f.screenshotAlt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 300px, 75vw"
                  />
                </div>
              );
              return (
                <article
                  key={f.heading}
                  className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center"
                >
                  {isReversed ? (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {imageBlock}
                    </>
                  )}
                </article>
              );
            })}
          </div>
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
            Get Chaturang
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Free, ad-supported, no account required.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Play Chaturang in your browser, or download the mobile app for iOS and Android.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="https://puzzlecub.com/chaturang" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Play in your browser →
            </a>
            <a
              href={CHATURANG_APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Download on the App Store
            </a>
            <a
              href={CHATURANG_PLAY_STORE}
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
