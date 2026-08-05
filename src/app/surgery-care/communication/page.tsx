import type { Metadata } from "next";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Surgery Care — Communication Policy",
  description:
    "How Surgery Care communicates with patients: secure in-app messages, text and email reminders that contain no medical detail, sign-in codes, and how to turn any of it off.",
  alternates: { canonical: "/surgery-care/communication" },
};

const LAST_UPDATED = "August 5, 2026";

export default function SurgeryCareCommunicationPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      <main className="border-b border-line">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Surgery Care · Communication Policy
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            Communication Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-6 rounded-2xl border border-[#FDE68A] bg-[#FFF8E6] p-5 text-[15px] leading-relaxed text-[#7c5e10]">
            <span className="font-semibold text-[#92400E]">Not for emergencies.</span>{" "}
            Messages in Surgery Care are read during office hours and are not monitored continuously. If you
            have a medical emergency, call 911 or your local emergency number &mdash; do not send a message.
          </div>

          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/90">
            Surgery Care is the patient companion app that surgical practices use to stay in touch with their
            patients. This page explains every way the app and your surgeon&rsquo;s office may contact you,
            what those messages can and cannot contain, and how to change or stop any of it.
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <Section heading="Your messages live in the app">
              <p>
                Secure messages between you and your care team are read and answered inside Surgery Care. The
                app is the record of that conversation. Anything we send outside the app &mdash; a text or an
                email &mdash; exists only to tell you that something is waiting for you here.
              </p>
            </Section>

            <Section heading="Texts and emails never contain medical information">
              <p>
                A text or email from us tells you that a secure message is waiting, or reminds you of
                something you asked to be reminded about. It does not include your diagnosis, your procedure,
                your results, or anything else about your care. To read the message itself, you open the app.
              </p>
              <p className="mt-3">
                This is deliberate: text messages and email are not secure channels, and phones are seen by
                other people. Keeping medical detail inside the app is what lets a reminder be a small thing
                to agree to.
              </p>
            </Section>

            <Section heading="Sign-in codes">
              <p>
                Signing in sends a one-time code that confirms it is you. Codes go by email by default. They
                are sent by text only if you have explicitly agreed to be texted &mdash; the app asks you
                once, in your own words, and your answer is recorded.
              </p>
              <p className="mt-3">
                If you agree to texts, you can expect a code each time you sign in on a new device, plus the
                occasional notice about your account&rsquo;s security. That is a handful of messages across
                your recovery, not a stream. Message and data rates may apply. Reply{" "}
                <span className="font-medium text-foreground">STOP</span> to any message to stop them, or{" "}
                <span className="font-medium text-foreground">HELP</span> for help.
              </p>
              <p className="mt-3">
                Declining texts costs you nothing. Your codes come by email instead, and no part of the app is
                held back either way.
              </p>
            </Section>

            <Section heading="What your care team may send you">
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Replies from your surgeon&rsquo;s office to messages you send</li>
                <li>Check-ins during your recovery, on a schedule tied to your surgery date</li>
                <li>Preparation instructions before surgery and post-operative instructions after it</li>
                <li>Appointment confirmations, changes, and reminders</li>
                <li>Notices about your account, such as a sign-in from a new device</li>
              </ul>
              <p className="mt-3">
                Every message a member of your care team sends you is written or approved by a person at your
                practice. The in-app assistant can help draft a reply, but no message reaches you without a
                human at the practice reviewing it first.
              </p>
            </Section>

            <Section heading="We never send you marketing">
              <p>
                Surgery Care is not used to advertise to you. We do not send promotional texts or emails, we
                do not sell or share your contact details for marketing, and your health information is never
                used for advertising.
              </p>
            </Section>

            <Section heading="Changing or stopping any of this">
              <p>
                Open the app, go to{" "}
                <span className="font-medium text-foreground">Settings</span>, and choose how you want to be
                reached. You can turn text and email reminders on or off for each kind of message, and turn
                text messages off entirely. Changes take effect immediately.
              </p>
              <p className="mt-3">
                You can also reply <span className="font-medium text-foreground">STOP</span> to any text to
                stop texts, or use the unsubscribe link in a reminder email. Stopping reminders does not
                affect your care, and your messages continue to be waiting for you in the app.
              </p>
            </Section>

            <Section heading="Who is contacting you">
              <p>
                Messages come from your surgical practice, sent through Surgery Care. Your practice decides
                what is sent and when; Surgery Care provides the software and delivers the messages on the
                practice&rsquo;s behalf as its business associate under HIPAA. How your information is
                handled is set out in the{" "}
                <a
                  href="https://neurantra.com/surgery-care/privacy"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Surgery Care Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section heading="Questions">
              <p>
                For questions about the app, email{" "}
                <a
                  href="mailto:hello@surgerycare.app"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  hello@surgerycare.app
                </a>
                . For questions about your care or about a message you received, contact your surgeon&rsquo;s
                office directly &mdash; their details are in the app under{" "}
                <span className="font-medium text-foreground">About the practice</span>.
              </p>
            </Section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{heading}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
