import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { WEB_GAMES } from "@/lib/games";

const DESCRIPTION = "Play six free browser games on puzzlecub.com. Explore the four-game PuzzleCub mobile app and standalone puzzle apps at puzzlecub.app.";
export const metadata: Metadata = {
  title: "PuzzleCub — browser games and mobile apps",
  description: DESCRIPTION,
  alternates: { canonical: "/puzzlecub" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/puzzlecub",
    title: "PuzzleCub — browser games and mobile apps",
    description: DESCRIPTION,
  },
};

const MOBILE_GAMES = [
  { slug: "math", name: "Tap the Answer", description: "Solve the equation and catch the correct falling number. Choose your operation and difficulty, or take an untimed scenic round." },
  { slug: "sand", name: "Answer It", description: "Type your answer to mental-math questions or compare values with a tap. Protect your gems and keep your streak going." },
  { slug: "stack", name: "Build the Sum", description: "Pick two numbers, then tap the target they make. Explore addition, subtraction, multiplication, and division." },
  { slug: "word", name: "Find the Word", description: "Follow a clue and uncover the hidden word one letter at a time. Use a hint when you need a nudge." },
];
const button = "inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90";

export default function PuzzlecubPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <Image src="/puzzlecub/icon.webp" alt="PuzzleCub" width={80} height={80} priority className="mb-8 rounded-2xl" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Games by Neurantra</p>
          <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[60px]">A little thought.<br />A bright discovery.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">PuzzleCub brings together puzzles, word games, geography, and strategy. Play six games in your browser at puzzlecub.com, or explore our mobile apps at puzzlecub.app.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://puzzlecub.com" target="_blank" rel="noopener noreferrer" className={button}>Play browser games →</a>
            <a href="https://puzzlecub.app" target="_blank" rel="noopener noreferrer" className={button}>Explore mobile apps →</a>
          </div>
        </div>
      </section>
      <section id="browser-games" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight">Six games. Ready in your browser.</h2>
          <p className="mt-5 text-lg text-muted">Free to play, with no download or account needed.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WEB_GAMES.map(game => (
              <a key={game.slug} href={`https://puzzlecub.com/${game.slug}`} target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-2xl border border-line bg-white/60 p-7 transition-colors hover:bg-white">
                <div className="flex items-center gap-4">
                  <Image src={game.icon} alt="" width={56} height={56} className="rounded-xl" />
                  <h3 className="text-2xl font-semibold">{game.name}</h3>
                </div>
                <p className="mt-5 text-sm font-semibold text-accent">{game.category}</p>
                <p className="mt-3 leading-relaxed text-muted">{game.description}</p>
                <p className="mt-4 text-sm text-muted">{game.details}</p>
                <span className="mt-6 text-sm font-semibold text-accent">Play {game.name} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="mobile-app" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">The PuzzleCub mobile app</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight">Four quick-thinking games in one app.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">Catch falling answers, solve mental-math challenges, build sums, and uncover hidden words. Choose your difficulty and round settings, build streaks, and chase your personal bests. Available on iOS and Android with free, ad-supported play.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://apps.apple.com/app/id6768766852" target="_blank" rel="noopener noreferrer" className={button}>Download on the App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.sumquest.app" target="_blank" rel="noopener noreferrer" className={button}>Get it on Google Play</a>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MOBILE_GAMES.map(game => (
              <article key={game.slug}>
                <Image src={`/puzzlecub/${game.slug}.webp`} alt={`${game.name} gameplay`} width={800} height={1738} sizes="(min-width: 1024px) 240px, (min-width: 640px) 40vw, 80vw" className="mx-auto h-auto w-full max-w-[240px] rounded-2xl" />
                <h3 className="mt-6 text-xl font-semibold">{game.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{game.description}</p>
                <a href={`https://puzzlecub.app/games/${game.slug}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-accent">Explore {game.name} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight">More games to take with you.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">Discover the standalone Chaturang, Alphadoku, Maze Words, Slide &amp; Sort, Mapopia, and Fill the Jar apps. Visit the mobile collection for each game&rsquo;s store links and current availability.</p>
          <a href="https://puzzlecub.app" target="_blank" rel="noopener noreferrer" className={`${button} mt-8`}>Browse the mobile collection →</a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
