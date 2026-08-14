import type { Metadata } from "next";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Surgery Care — Privacy Policy",
  description:
    "How Neurantra LLC handles your information in Surgery Care, the patient companion app used by surgical practices. Health data (Apple Health / Health Connect), PHI, HIPAA, and your rights.",
  alternates: { canonical: "/surgery-care/privacy" },
};

const LAST_UPDATED = "July 10, 2026";

export default function SurgeryCarePrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      <main className="border-b border-line">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Surgery Care · Privacy Policy
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            How Surgery Care handles your information
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <p>
                Neurantra LLC (&ldquo;Neurantra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
                provides <span className="font-medium text-foreground">Surgery Care</span>, a patient
                companion app that surgical practices use to stay connected with their patients &mdash;
                secure messaging, appointment requests, an educational assistant, and recovery tracking.
                This Privacy Policy explains how the Surgery Care app handles information.
              </p>
              <p className="mt-3">
                <span className="font-medium text-foreground">Surgery Care contains no advertising.</span>{" "}
                We do not use advertising identifiers, do not track you across other apps or websites, and
                do not sell your information.
              </p>
            </section>

            <Section heading="Your practice, and our role (HIPAA)">
              <p>
                Surgery Care is used by the surgical practice that provides your care. That practice is the
                covered entity responsible for your medical information; Neurantra processes that information
                on the practice&rsquo;s behalf as a <span className="font-medium text-foreground">HIPAA
                business associate</span>, under a signed Business Associate Agreement, and under agreements
                with our infrastructure providers. The collection and use of your health information is also
                governed by your practice&rsquo;s own Notice of Privacy Practices and by applicable law
                (including HIPAA in the United States). This policy describes the app; it does not replace
                your practice&rsquo;s notice.
              </p>
            </Section>

            <Section heading="1. Information we handle">
              <h3 className="mt-2 text-base font-semibold text-foreground">a. Account &amp; identity</h3>
              <p className="mt-2">
                Your practice enrolls you and provides your name, email, phone number, and date of birth so
                the app can verify it&rsquo;s you. You sign in with the email or phone on file plus a
                one-time verification code (there is no public self-signup).
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">b. Content you provide</h3>
              <p className="mt-2">
                Messages you send to your surgeon&rsquo;s office or surgeon, medical images you choose to
                attach, appointment requests, and questions you ask the in-app assistant. This content may
                include information about your health (protected health information).
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                c. Health &amp; fitness data (only with your permission)
              </h3>
              <p className="mt-2">
                If you turn it on, Surgery Care reads recent activity, heart-rate, and sleep data from{" "}
                <span className="font-medium text-foreground">Apple Health</span> (iOS) and{" "}
                <span className="font-medium text-foreground">Health Connect</span> (Android) &mdash; such
                as steps, distance, active energy, flights climbed, heart rate, resting heart rate, sleep,
                and walking speed. This is <span className="font-medium text-foreground">read-only</span> and
                is used to show your post-surgical recovery trends to you and to your care team. See Section 2.
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">d. Device &amp; technical</h3>
              <p className="mt-2">
                Device type and operating system, app version, a push-notification token (so we can alert
                you to new messages), IP address, and sign-in/security logs used to operate and secure the
                service. We do not use Apple&rsquo;s IDFA or Google&rsquo;s Advertising ID, and we do not
                maintain a cross-app advertising profile of you.
              </p>
            </Section>

            <Section heading="2. Apple Health & Health Connect">
              <p>
                Reading your health data is entirely optional and happens only after you grant permission
                through the operating system&rsquo;s own prompt (Apple Health on iOS, Health Connect on
                Android). We access it <span className="font-medium text-foreground">read-only</span> and use
                it solely to:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>show you your recovery trends (activity, heart rate, sleep) in the app, and</li>
                <li>share those trends with your surgical care team so they can monitor your recovery.</li>
              </ul>
              <p className="mt-3">
                Your health data is transmitted over encrypted connections to your practice&rsquo;s
                HIPAA-covered systems. It is{" "}
                <span className="font-medium text-foreground">never sold, never used for advertising, and
                never shared with third parties</span> other than your practice and the infrastructure
                providers in Section 4. You can revoke access at any time in Apple Health or Health Connect,
                and you can delete your account at any time (see Section 7).
              </p>
            </Section>

            <Section heading="3. How we use information">
              <p>We use the information above to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Operate the app and verify your identity at sign-in</li>
                <li>Deliver messages between you and your surgical practice</li>
                <li>Let you request appointments and view your post-operative instructions</li>
                <li>Show your recovery trends to you and your care team (only if you enable health data)</li>
                <li>Send you notifications about new messages</li>
                <li>Keep the service secure and prevent abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do <span className="font-medium text-foreground">not</span> use your information for
                advertising and we do <span className="font-medium text-foreground">not</span> sell it.
              </p>
            </Section>

            <Section heading="4. How we share information">
              <p>We share your information only:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  With <span className="font-medium text-foreground">your surgical practice</span> &mdash;
                  the covered entity providing your care &mdash; which is the point of the app
                </li>
                <li>
                  With infrastructure providers who process data on our behalf under contract (and, where
                  applicable, a HIPAA Business Associate Agreement): Amazon Web Services (secure hosting and
                  file storage), Twilio (SMS verification and notifications), Amazon SES (email), and Apple /
                  Google push-notification services
                </li>
                <li>
                  With <span className="font-medium text-foreground">Microsoft Azure OpenAI Service</span>,
                  which generates the in-app assistant&rsquo;s answers. When you ask the assistant a
                  question, we send that question together with limited context about your care &mdash; your
                  procedure, surgery date, how many days into recovery you are, your age and sex, your
                  diagnosis, your medications, and any notes your care team has added. We do{" "}
                  <span className="font-medium text-foreground">not</span> send your name, email address,
                  phone number, address, the messages between you and your care team, or anything from Apple
                  Health. Microsoft processes this on our behalf under a HIPAA Business Associate Agreement,
                  does not use it to train its models, and may not use it for any purpose of its own. The app
                  asks your permission before any of this is sent, and you can withdraw that permission at
                  any time in Settings &mdash; the rest of the app works exactly the same either way.
                </li>
                <li>
                  The same AI service also helps your care team draft replies to the messages you send them.
                  A person at your practice reviews and approves every draft before you receive it, and the
                  same contractual protections apply.
                </li>
                <li>
                  When required by law or valid legal process, or to protect the rights, property, or safety
                  of patients, practices, Neurantra, or others
                </li>
              </ul>
              <p className="mt-3">
                We do not share your information with third parties for their own marketing, and we do not
                sell it.
              </p>
            </Section>

            <Section heading="5. Security">
              <p>
                We use commercially reasonable, HIPAA-aligned safeguards: encryption in transit (TLS) and at
                rest, access controls, two-factor sign-in, audit logging, and malware scanning of uploaded
                files. No method of transmission or storage is 100% secure, however, and we cannot guarantee
                absolute security.
              </p>
            </Section>

            <Section heading="6. Data retention">
              <p>
                App messages and related data are retained according to your practice&rsquo;s configuration
                and our service settings, and then deleted or de-identified. Your clinical and medical
                records are retained by your practice for the period required by law and professional
                medical-record retention rules. When you delete your account (Section 7), your app access is
                removed immediately and your personal profile data is deleted in line with our
                records-retention schedule; records your practice is legally required to keep may be retained
                by the practice.
              </p>
            </Section>

            <Section heading="7. Your choices and rights">
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>
                  <span className="font-medium text-foreground">Health data:</span> turn it on or off, or
                  revoke it entirely, at any time in Apple Health or Health Connect.
                </li>
                <li>
                  <span className="font-medium text-foreground">Delete your account:</span> in the app, open
                  the menu (&#9776;) and tap <span className="font-medium text-foreground">Delete account</span>.
                  Instructions are also at{" "}
                  <a
                    href="https://neurantra.com/surgery-care/delete-account"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    neurantra.com/surgery-care/delete-account
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-foreground">Access, correction, portability:</span>{" "}
                  depending on where you live, you may have rights to access, correct, delete, or receive a
                  copy of your information. For your <span className="font-medium text-foreground">medical
                  records</span>, contact your practice (the covered entity). For your{" "}
                  <span className="font-medium text-foreground">app account</span>, contact{" "}
                  <a
                    href="mailto:admin@neurantra.com"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    admin@neurantra.com
                  </a>
                  .
                </li>
              </ul>
            </Section>

            <Section heading="8. Children and minors">
              <p>
                Surgery Care has no public self-signup; accounts are provisioned by the surgical practice.
                Where a patient is a minor, the practice enrolls them consistent with applicable law and with
                parental or guardian involvement. A parent or legal guardian may contact the practice, or
                contact us at{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>
                , regarding a minor&rsquo;s app account.
              </p>
            </Section>

            <Section heading="9. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the
                &ldquo;Last updated&rdquo; date above and, for material changes, provide more prominent
                notice.
              </p>
            </Section>

            <Section heading="10. Contact us">
              <p>Questions about this Privacy Policy or Surgery Care&rsquo;s privacy practices? Contact:</p>
              <p className="mt-3">
                Neurantra LLC
                <br />
                Email:{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>
                <br />
                State of formation: New Jersey, USA
              </p>
              <p className="mt-3">
                For questions about your medical care or medical records, contact your surgical practice
                directly.
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
