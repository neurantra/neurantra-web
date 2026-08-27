import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Surgery Care — the patient companion app for surgical practices",
  description:
    "Surgery Care keeps patients connected to their surgeon's practice through the ninety days around an operation — human-reviewed messages, post-op instructions, an educational assistant, appointments, and recovery tracking from Apple Health / Health Connect. Live on iOS and Android. A Neurantra product.",
  alternates: { canonical: "/surgery-care" },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: "https://neurantra.com/surgery-care",
    title: "Surgery Care — the patient companion app for surgical practices",
    description:
      "Message your surgeon's office, read your post-op instructions, ask the assistant, and track your recovery — in one secure app. Live on iOS and Android.",
    locale: "en_US",
  },
};

const APP_STORE = "https://apps.apple.com/us/app/surgery-care/id6789693355";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.mysurgeon.app";

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
    eyebrow: "Messaging",
    heading: "Stay in touch with your care team.",
    body:
      "Read follow-up messages from the office after your surgery and reply right in the app. Every response is reviewed by a person on your care team before it reaches you, and arrives attributed and timestamped. Need the surgeon directly? Send a short note to their care line. You can attach a medical image to any message when your team asks for one.",
    note: "Care messages · message your surgeon · attach images",
    screenshot: "/surgery-care/screen-messages.png",
    screenshotAlt: "Surgery Care — a secure care-message thread with the practice",
  },
  {
    eyebrow: "Atlas",
    heading: "Answers about your recovery, any time.",
    body:
      "Ask Atlas, the in-app assistant, about symptoms, recovery, and what to expect next. It answers from your practice's own prep sheets and post-operative instructions rather than the open internet, and it is clearly framed as educational — not medical advice, and never a replacement for your surgeon. You are shown exactly what is sent before Atlas is switched on, and you can turn it off again from Settings without affecting anything else.",
    note: "Educational only · not medical advice · you opt in",
    screenshot: "/surgery-care/screen-atlas.png",
    screenshotAlt: "Surgery Care — asking Atlas about post-operative recovery",
  },
  {
    eyebrow: "Post-op instructions",
    heading: "Your surgeon's instructions, for your operation.",
    body:
      "The recovery instructions your practice wrote, for the procedure you actually had — available the moment surgery is done, not folded into a discharge packet you will lose. Surgery prep works the same way in reverse: it is open while you are pre-op and closes when your operation starts, so you are never reading guidance meant for a different week.",
    note: "Procedure-specific · opens when surgery is done",
    screenshot: "/surgery-care/screen-postop.png",
    screenshotAlt: "Surgery Care — procedure-specific post-operative instructions",
  },
  {
    eyebrow: "Recovery",
    heading: "See your recovery, share it with your team.",
    body:
      "With your permission, Surgery Care reads recent activity, heart-rate, and sleep from Apple Health or Health Connect and turns it into a simple recovery trend — for you to follow and for your care team to monitor. Read-only, never sold, never used for ads. Turn it off any time.",
    note: "Steps · heart rate · sleep · you control the permission",
    screenshot: "/surgery-care/screen-health.png",
    screenshotAlt: "Surgery Care — connecting Apple Health / Health Connect for recovery trends",
  },
  {
    eyebrow: "Appointments",
    heading: "Request a visit in a few taps.",
    body:
      "Pick a location and preferred date, choose a time preference, add a short reason, and send it to the office — no phone tag. Your requests and confirmed visits live in one place.",
    note: "Location · preferred date · sent to the office",
    screenshot: "/surgery-care/screen-appointments.png",
    screenshotAlt: "Surgery Care — requesting an appointment",
  },
];

export default function SurgeryCarePage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      {/* ── Hero ── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/surgery-care/surgery-care-logo.png"
                alt="Surgery Care logo"
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
              Your surgeon&rsquo;s practice, in your pocket.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Surgery Care is the patient companion app that surgical practices use to stay connected with
              their patients through the ninety days around an operation — human-reviewed messages, your
              surgeon&rsquo;s own post-op instructions, an educational assistant, appointments, and recovery
              tracking. Private by design: no ads, no tracking across other apps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Download on the App Store
              </a>
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get it on Google Play
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              For established patients of a participating surgical practice. Your practice enrolls you and you
              sign in with a one-time code.
            </p>
          </div>
          <div className="relative mx-auto aspect-[1320/2868] w-full max-w-[320px]">
            <Image
              src="/surgery-care/screen-episode.png"
              alt="Surgery Care — the recovery home screen, one day after surgery"
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
                A course of care that opens, runs, and closes.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                After an operation, staying connected to your care team shouldn&rsquo;t mean phone tag and
                voicemail. Surgery Care opens when your office enrolls you, carries the weeks of preparation,
                the day itself, and your recovery, and then closes — about ninety days, set by your practice.
                It is a finite piece of care with a beginning and an end, not an inbox that accumulates
                forever. The app follows where you actually are, so prep and post-op instructions surface at
                the right time on their own.
              </p>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-foreground sm:text-[34px]">
                Built by Neurantra, private by design.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Surgery Care contains no advertising and does not track you across other apps or websites.
                Your health information is handled under HIPAA safeguards on behalf of your surgical practice,
                and one practice&rsquo;s patients are walled off from every other&rsquo;s. You control whether
                the app reads your Apple Health / Health Connect data, Face ID or a fingerprint locks the app
                on your device, and you can delete your account any time from within the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The product principle: Atlas drafts, a clinician decides ── */}
      <section className="border-b border-line bg-accent/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            The product principle
          </p>
          <h2 className="max-w-3xl text-[30px] font-semibold leading-tight tracking-tight text-foreground sm:text-[38px]">
            AI drafts. A clinician decides. Every time.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            There is no path through Surgery Care where an AI-written reply reaches a patient without someone
            on the practice&rsquo;s team approving it first. This is how the product is built, not a setting
            anyone can switch off.
          </p>
          <ol className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Drafted",
                body:
                  "The assistant writes a reply from the practice's own knowledge base — their prep sheets, their post-op instructions, their FAQs. Not the open internet.",
              },
              {
                step: "02",
                title: "Reviewed",
                body:
                  "It lands in a provider's review queue. Approve, edit, or discard. Until a person acts on it, the patient sees nothing at all.",
              },
              {
                step: "03",
                title: "Delivered",
                body:
                  "The patient gets the approved reply in the app, attributed and timestamped — so they know a person at their practice stood behind the answer.",
              },
            ].map(s => (
              <li
                key={s.step}
                className="rounded-2xl border border-line bg-white/70 p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {s.step} · {s.title}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            The educational assistant is separate and clearly labeled as such — it answers questions about
            recovery, and it is never a substitute for professional medical advice, diagnosis, or treatment.
            In an emergency, call 911.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Inside the app
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
                  <p className="mt-5 text-base leading-relaxed text-muted">{f.body}</p>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {f.note}
                  </p>
                </div>
              );
              const imageBlock = (
                <div className="relative mx-auto aspect-[1320/2868] w-full max-w-[300px]">
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

      {/* ── Get it ── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Get Surgery Care
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Ask your surgical practice if they use Surgery Care.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Surgery Care is live on the App Store and Google Play, and available to patients of participating
            practices. Your practice enrolls you, then you sign in with the email or phone on file plus a
            one-time verification code.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Download on the App Store
            </a>
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-transparent px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get it on Google Play
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <Link
              href="/surgery-care/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/surgery-care/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Use
            </Link>
            <Link
              href="/surgery-care/communication"
              className="transition-colors hover:text-foreground"
            >
              Communication Policy
            </Link>
            <Link
              href="/surgery-care/delete-account"
              className="transition-colors hover:text-foreground"
            >
              Delete your account
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
