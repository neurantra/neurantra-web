import type { Metadata } from "next";
import Image from "next/image";
import { AdSlot } from "../_components/AdSlot";
import { QuestIcon } from "../_components/QuestIcon";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { AD_SLOTS } from "@/lib/ads";

export const metadata: Metadata = {
  title: "Puzzlecub — seven AI-driven games in one app",
  description:
    "Puzzlecub is a single app with seven AI-driven games — Math, Word, Sand, Alpha, Maze, Geo, and Stack — bound together by a shared wallet, daily streak, and an AI that adapts to how you play. Live on iOS and Android. A Neurantra app.",
  alternates: { canonical: "/puzzlecub" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/puzzlecub",
    title: "Puzzlecub — seven AI-driven games in one app",
    description:
      "Math, Word, Sand, Alpha, Maze, Geo, and Stack — bound by a shared wallet, a daily streak, and an AI that adapts to how you play. Live on iOS and Android.",
    locale: "en_US",
  },
};

const PUZZLECUB_SITE = "https://puzzlecub.com";
const PUZZLECUB_APP_STORE = "https://apps.apple.com/us/app/questiverse/id6768766852";
const PUZZLECUB_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.sumquest.app";

type QuestKey = "math" | "word" | "tide" | "alpha" | "maze" | "geo" | "stack";

interface Quest {
  key: QuestKey;
  name: string;
  tagline: string;
  body: string;
  skills: string;
  screenshot: string | null;
  screenshotAlt?: string;
}

const QUESTS: Quest[] = [
  {
    key: "math",
    name: "Math Quest",
    tagline: "Find the answer, stop the drop.",
    body:
      "Quick-fire arithmetic, rendered as a quest. Pick an operation, pick a difficulty, race the clock. Each correct answer unlocks the next scene of the quest and earns coins toward your wallet. The AI behind the scenes tunes pacing as you play: clean streaks accelerate, slips loosen the timer.",
    skills: "Addition · subtraction · multiplication · division · mixed mode",
    screenshot: "/puzzlecub/puzzlecub-math.png",
    screenshotAlt: "Math Quest gameplay — 11 + 18, Halloween scene",
  },
  {
    key: "word",
    name: "Word Quest",
    tagline: "Find the word, save the cart.",
    body:
      "Each round gives you a definition. The keyboard runs A through Z; the word stays hidden. You pick letters one by one — each one tells you something. Hints peel back a single letter; reveal jumps to the answer. Word Quest grows your vocabulary without ever feeling like flashcards.",
    skills: "Vocabulary · spelling · pattern recognition",
    screenshot: "/puzzlecub/puzzlecub-word.png",
    screenshotAlt: "Word Quest gameplay — definition-driven word puzzle with A-Z keyboard",
  },
  {
    key: "tide",
    name: "Sand Quest",
    tagline: "Stop the ball, save the castle.",
    body:
      "Math problems set against a tide line and a sandcastle you have to defend. Every right answer holds back the wave; every wrong one crumbles a tower. Each round serves up a piece of trivia alongside the problem — a fact about prime numbers, a stat about how far waves travel. Slower than Math Quest; the satisfaction is in the rhythm.",
    skills: "Mental math · numeracy · general knowledge",
    screenshot: "/puzzlecub/puzzlecub-sand.png",
    screenshotAlt: "Sand Quest gameplay — beach scene with a math question and trivia",
  },
  {
    key: "alpha",
    name: "Alpha Quest",
    tagline: "Slide the letters, bring 'em home.",
    body:
      "Slide letters around a grid to spell as many valid words as you can. Solo mode is a contemplative puzzle. vs-AI mode is a race against one of three opponents — Doodle the Apprentice, Cipher the Journeyman, or Sphinx the Master. You play first with no AI visible; when you finish, your opponent plays the same shuffle. Beat their move count for a bonus.",
    skills: "Word formation · spatial reasoning · strategy",
    screenshot: "/puzzlecub/puzzlecub-alpha.png",
    screenshotAlt: "Alpha Quest vs-AI race against Doodle",
  },
  {
    key: "maze",
    name: "Maze Quest",
    tagline: "Walk the maze, form the words.",
    body:
      "A maze you walk one cell at a time, picking up letters as you go. The shape of the maze decides which words you can spell, and which paths cost you. Half puzzle, half pathfinding — the only Puzzlecub game where there is no clock, only choices.",
    skills: "Word formation · spatial reasoning · planning",
    screenshot: null,
  },
  {
    key: "geo",
    name: "Geo Quest",
    tagline: "Slot the piece, make the map.",
    body:
      "Assemble a region — USA states, European countries, Oceania, South America, Africa — from their real piece shapes. Difficulty is set by what's on the tray card: Beginner shows the country shape, Medium shows the name, Hard shows only the capital, Expert shows a single fact. The board always shows the full outlined map; on Hard and Expert, you build outward, each new piece touching one already placed. Or race a Cartographer AI.",
    skills: "Geography · spatial reasoning · world knowledge",
    screenshot: "/puzzlecub/puzzlecub-geo.png",
    screenshotAlt: "Geo Quest — Oceania region intro card with tray pieces",
  },
  {
    key: "stack",
    name: "Stack Quest",
    tagline: "Stack the pucks, beat the water.",
    body:
      "The newest quest. A beaker fills while you play: tap two numbers on the grid, then the answer pill they make, and a puck drops into the tube. Solve fast enough and the stack outruns the rising water. Each round runs on one operation you pick at setup — division gets its own two-pool board with clean reverse-times-table answers. Spend coins on a Slow Fill power-up, or a hint that lights the cells that solve.",
    skills: "Arithmetic fluency · pattern spotting · working under pressure",
    screenshot: null,
  },
];

export default function PuzzlecubPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/puzzlecub/puzzlecub-logo.png"
                alt="Puzzlecub logo"
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl"
              />
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#C9DED7] bg-[#E6F0EC] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4C40]">
                Live on iOS &amp; Android
              </span>
            </div>
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[60px]">
              Seven quests.<br />One Puzzlecub.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Puzzlecub is a single app, seven games — Math, Word, Sand, Alpha,
              Maze, Geo, and Stack — bound together by a shared wallet, a daily
              streak, a Daily Challenge, and an AI that adapts to how you play.
              Built for everyone. Live now on the App Store and Google Play.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={PUZZLECUB_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Visit puzzlecub.com →
              </a>
              <a
                href={PUZZLECUB_APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Download on the App Store
              </a>
              <a
                href={PUZZLECUB_PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[320px]">
            <Image
              src="/puzzlecub/puzzlecub-hero-geo.png"
              alt="Puzzlecub gameplay — Geo Quest assembling the Oceania map"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 320px, 80vw"
            />
          </div>
        </div>
      </section>

      {/* ── Made for everyone, with AI at the heart ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Made for everyone · safe for kids
          </p>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                AI that tutors, races, and gets out of the way.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Puzzlecub&rsquo;s AI is woven through gameplay, not bolted on.
                It tunes difficulty in Math Quest based on your streak. It plays
                the same letter shuffle as you in Alpha Quest&rsquo;s vs-AI mode
                and offers three opponents at three skill levels. It races you
                across a Cartographer&rsquo;s map in Geo Quest. It picks the
                next definition in Word Quest based on what you&rsquo;ve already
                guessed. The AI is the tutor, the antagonist, and the narrator —
                present without interrupting.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                One question on first launch keeps younger players safe.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Puzzlecub is built for players of every age. On first launch it
                asks one thing — your year of birth — and uses that, locally,
                to decide what to show you. Under 13: ads are non-personalized
                through Google&rsquo;s kid-safe certified network, and outbound
                links are protected by a parental gate. Older players: friction
                free. Either way, no account is required, no progress leaves
                your device, and no personal information is ever collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The seven quests ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            The seven quests
          </p>
          <div className="space-y-24">
            {QUESTS.map((q, i) => {
              const isReversed = i % 2 === 1;
              const textBlock = (
                <div>
                  <div className="flex items-center gap-4">
                    <QuestIcon name={q.key} size={56} />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                      {q.name}
                    </p>
                  </div>
                  <h3 className="mt-5 text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-[32px]">
                    {q.tagline}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {q.body}
                  </p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {q.skills}
                  </p>
                  <a
                    href={PUZZLECUB_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Visit {q.name} on puzzlecub.com →
                  </a>
                </div>
              );
              const imageBlock = q.screenshot ? (
                <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[300px]">
                  <Image
                    src={q.screenshot}
                    alt={q.screenshotAlt ?? ""}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 300px, 75vw"
                  />
                </div>
              ) : (
                <div className="flex aspect-[9/19.5] w-full max-w-[300px] mx-auto items-center justify-center">
                  <QuestIcon name={q.key} size={170} />
                </div>
              );
              return (
                <article
                  key={q.name}
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
            Get Puzzlecub
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Seven games, one cub. Free, ad-supported, no account required.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Puzzlecub is live now on iOS and Android — seven games, the newest
            being Stack Quest. Tap a store below to
            download — or drop us a note if you have feedback once you&rsquo;ve
            played.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PUZZLECUB_APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Download on the App Store
            </a>
            <a
              href={PUZZLECUB_PLAY_STORE}
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
