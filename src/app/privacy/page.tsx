import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — Neurantra",
  description:
    "How Neurantra LLC handles information across neurantra.com, Puzzlecub, and Fill the Jar: Shape Puzzle. Advertising disclosures, children's privacy, and your rights.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "September 16, 2026";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader variant="subpage" />

      <main className="border-b border-line">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Privacy Policy
          </p>
          <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[44px]">
            How we handle your information
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <aside className="mt-8 rounded-2xl border border-line bg-white/60 p-6">
            <h2 className="text-lg font-semibold">Fill the Jar account and data deletion</h2>
            <p className="mt-2 text-sm text-muted">
              Request deletion by emailing hello@neurantra.com. No app reinstall is required
              to submit a request.
            </p>
            <a href="#account-deletion" className="mt-3 inline-block font-semibold text-accent underline underline-offset-4">
              View deletion instructions and retention details
            </a>
          </aside>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <p>
                Neurantra LLC (&ldquo;Neurantra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
                respects your privacy. This Privacy Policy explains how we handle information
                when you visit{" "}
                <span className="font-medium text-foreground">neurantra.com</span> or use{" "}
                <span className="font-medium text-foreground">Puzzlecub</span> or{" "}
                <span className="font-medium text-foreground">Fill the Jar: Shape Puzzle</span>
                , our mobile games (together, the &ldquo;Services&rdquo;). App-specific
                sections describe the practices of the named game; their age settings and
                optional online features may differ.
              </p>
              <p className="mt-3">
                Our other products{" "}
                <a
                  href="https://iyerspine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  IyerSpine
                </a>{" "}
                and{" "}
                <a
                  href="https://pawcial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Pawcial
                </a>{" "}
                have their own privacy policies, available on their respective websites.
              </p>
            </section>

            <Section heading="1. Information we collect">
              <h3 className="mt-2 text-base font-semibold text-foreground">
                a. neurantra.com — our marketing website
              </h3>
              <p className="mt-2">
                We do not require accounts on neurantra.com, and we do not run our own analytics
                tools. Like any web server, our hosting provider (Vercel) automatically receives
                standard request information when you visit — IP address, browser type, referring
                URL, and time of request — used solely to operate the site and detect abuse.
              </p>
              <p className="mt-3">
                neurantra.com displays advertising served by Google AdSense (see Section 2a). To
                serve, measure, and personalize those ads, Google and its advertising partners may
                set and read cookies and similar identifiers in your browser and process data
                including your IP address, device and browser information, approximate location,
                and your interactions with ads and the site. Depending on your location and choices,
                this may include personalized (interest-based) advertising. You can control this —
                see Sections 2a and 8.
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                b. Puzzlecub — mobile educational game
              </h3>
              <p className="mt-2">
                Puzzlecub stores gameplay data (scores, levels, progress) locally on the
                device. Ordinary puzzle progress is not synchronized to our servers. Optional
                shared-vault coin transfers are an exception: they use Firebase identifiers
                and server-side balances and transaction records, as described below. Core
                gameplay does not require a name, email address, or password. On first launch,
                Puzzlecub asks for the player&rsquo;s year of birth; this value is stored
                only on the device and is used locally to decide which child-safety
                protections to apply (see Section 4). It is never transmitted to our servers.
              </p>
              <p className="mt-3">
                We do not use Apple&rsquo;s IDFA (Identifier for Advertisers) or Google&rsquo;s
                Advertising ID (AAID) for Puzzlecub advertising. The optional shared vault does
                use persistent anonymous identifiers to connect participating Neurantra games.
                We do not track you across apps or websites
                owned by other companies. The limited technical signals described in Sections 2
                and 3 are processed by Google AdMob and Firebase Crashlytics solely to serve
                non-personalized ads and to diagnose crashes.
              </p>
              <p className="mt-3">
                When you contact us at{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:hello@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  hello@neurantra.com
                </a>
                , we receive the email content and email address you choose to share, processed
                through Google Workspace.
              </p>
            </Section>

            <Section heading="Fill the Jar: Shape Puzzle — information and optional online features">
              <p>
                Fill the Jar stores puzzle progress, settings, cosmetic unlocks, and the local
                coin balance on your device. Core puzzles work offline and do not require a
                name, email address, or password. Ordinary puzzle progress is not synchronized
                to our servers. The local year-of-birth declaration and protected experience
                are described in Section 4.
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">Optional Neurantra coin vault</h3>
              <p className="mt-2">
                Eligible older players can use a shared coin vault across participating
                Neurantra games, including Puzzlecub and Chaturang. The vault uses Google
                Firebase Authentication and Realtime Database. It creates an anonymous user
                identifier and stores vault and member identifiers, game identifiers, coin
                balances, link codes, and transfer records, including amounts, status, and
                timestamps. These records allow transfers to complete reliably and help
                prevent duplicate transfers and abuse. Anonymous identifiers are persistent
                identifiers even though we do not ask for your real name. Game coins have
                no cash value.
              </p>
              <p className="mt-3">
                Firebase also processes technical request information, including IP address
                and client information, to operate and secure its services. Linking a game
                connects it to the shared balance and associated vault records; it does not
                synchronize all gameplay between games. Link codes expire after 30 minutes.
                Keep them private and share them only between devices you intend to link.
              </p>
              <p className="mt-3">
                Unlinking a device does not delete its Firebase identity or historical
                transactions. Deleting the app or clearing app data can erase local progress
                and the birth-year declaration, but does not automatically delete server-side
                vault data. See the account-deletion section below for requests and retention information.
              </p>
              <p className="mt-3">
                Links to other games or our website open separate products or pages with their
                own applicable privacy practices. Fill the Jar does not show sibling-game
                promotions in its protected experience. This policy does not replace the
                privacy notice for Chaturang or other separately described products.
              </p>
            </Section>

            <Section heading="2. Advertising">
              <h3 className="mt-2 text-base font-semibold text-foreground">
                a. neurantra.com — Google AdSense
              </h3>
              <p className="mt-2">
                neurantra.com is supported by advertising served through Google AdSense. neurantra.com
                is a general-audience website and is not directed to children. Google, acting as an
                independent advertising provider, and its partners use cookies and similar
                technologies to serve and measure ads and, where permitted, to show you personalized
                (interest-based) ads based on your prior visits to this and other websites.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  Google&rsquo;s use of advertising cookies enables it and its partners to serve ads
                  to you based on your visit to neurantra.com and other sites on the internet
                </li>
                <li>
                  You can opt out of personalized advertising by visiting Google&rsquo;s{" "}
                  <a
                    href="https://myadcenter.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Ad Settings
                  </a>
                  , or opt out of personalization by some third-party vendors at{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    aboutads.info/choices
                  </a>
                </li>
                <li>
                  For visitors in the European Economic Area, the United Kingdom, and Switzerland,
                  neurantra.com presents a Google-certified consent message before personalized ads
                  are served, so you can consent to or refuse such processing
                </li>
              </ul>
              <p className="mt-3">
                For more on how Google uses information from sites that use its services, see{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  How Google uses information from sites or apps that use its services
                </a>
                .
              </p>

              <h3 className="mt-6 text-base font-semibold text-foreground">
                b. Puzzlecub — Google AdMob
              </h3>
              <p className="mt-2">
                Puzzlecub displays advertising provided by Google AdMob to support continued
                development. Puzzlecub is built for players of every age, but because some
                players are children, the AdMob SDK is configured to serve kid-safe,
                non-personalized ads to any user whose locally-entered year of birth indicates
                they are under 13 (or under 16 in the European Union). For those players, ad
                requests follow Google Play&rsquo;s Families Policy and Apple App Store&rsquo;s
                kid-safe ad requirements:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  Ad requests are flagged with Tag For Child-Directed Treatment (TFCD = true)
                  and, where applicable, Tag For Users under the Age of consent (TFUA = true)
                </li>
                <li>
                  Only Google&rsquo;s certified ad network for child-directed traffic is used;
                  we do not mediate to third-party ad networks that are not Google-certified
                  for kid-safe serving
                </li>
                <li>Ads are non-personalized — no behavioral or interest-based targeting</li>
                <li>No personally identifiable information is shared with advertisers</li>
                <li>Ad content is filtered for age-appropriate material</li>
                <li>
                  AdMob may process limited technical signals (coarse IP address, device type,
                  language, app version) for ad delivery, frequency capping, and fraud
                  prevention; these signals are not used to build a cross-app profile of the
                  player
                </li>
              </ul>
              <p className="mt-3">
                For details on AdMob&rsquo;s data practices for child-directed apps, see
                Google&rsquo;s{" "}
                <a
                  href="https://support.google.com/admob/answer/6223431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  AdMob &amp; AdSense for child-directed traffic
                </a>{" "}
                policy and Google&rsquo;s{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  privacy policy
                </a>
                .
              </p>
              <h3 className="mt-6 text-base font-semibold text-foreground">
                c. Fill the Jar — optional rewarded advertising
              </h3>
              <p className="mt-2">
                Eligible older players can choose rewarded ads through Google AdMob. The
                protected experience has no ad offers or ad requests. For eligible players,
                the app requests consent information and presents Google&rsquo;s consent form
                where required before requesting ads. Ad privacy choices are available from
                the menu when Google requires a privacy-options form.
              </p>
              <p className="mt-3">
                When advertising services are used, Google may process IP-derived approximate
                location, device identifiers, app and ad interactions, advertising data, and
                crash or performance information for ad delivery, measurement, analytics, and
                fraud prevention. Processing depends on platform permissions, consent choices,
                and the SDK configuration. Version 0.1 testing builds use test advertisements;
                test ads do not mean that the SDK processes no information.
              </p>
              <p className="mt-3">
                See Google&rsquo;s{" "}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank"
                  rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">
                  information about services used by apps
                </a>{" "}
                for its advertising data practices. Fill the Jar does not include Firebase
                Analytics or Firebase Crashlytics; ad-SDK diagnostics are separate.
              </p>
            </Section>

            <Section heading="3. Crash diagnostics">
              <p>
                We use Firebase Crashlytics (a Google product) to receive crash reports when
                Puzzlecub unexpectedly terminates, so we can diagnose and fix bugs.
              </p>
              <p className="mt-3">
                Crashlytics is configured for child-directed traffic. In practice this means:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>
                  IP addresses are stripped at ingest and not stored (Firebase&rsquo;s
                  child-directed setting)
                </li>
                <li>We do not collect Apple&rsquo;s IDFA or Google&rsquo;s AAID</li>
                <li>
                  Crash reports use a transient, randomized installation token that resets on
                  app reinstall; they are not associated with any user identifier
                </li>
                <li>
                  Crash data consists of stack traces, device model, OS version, app version,
                  and the state of the app at crash time — no gameplay content, no personally
                  identifying information
                </li>
              </ul>
              <p className="mt-3">
                Crash reports are retained for up to 90 days for diagnostic purposes and then
                automatically deleted by Firebase. For more information, see Google&rsquo;s{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Firebase privacy and security
                </a>{" "}
                page.
              </p>
            </Section>

            <Section heading="4. Children's privacy (COPPA / GDPR-K)">
              <h3 className="mt-2 text-base font-semibold text-foreground">Fill the Jar</h3>
              <p className="mt-2">
                On first launch, Fill the Jar asks for a year of birth with no preselected
                answer. The declaration is stored only on the device and is not sent to the
                vault or used as advertising profile data. This is a self-declaration, not
                identity verification or parental consent.
              </p>
              <p className="mt-3">
                Because we do not ask for a birthday, we calculate a minimum possible age as
                the current year minus the declared birth year minus one. Players whose
                minimum possible age is below 16 receive the protected experience worldwide.
                An unanswered or invalid declaration does not enable online features.
              </p>
              <p className="mt-3">
                Protected players can play every puzzle, earn local coins, and use those coins
                for hints, auto-solve, and cosmetic unlocks. The app does not enable rewarded
                ads, banners, shared-vault connections, sibling-game promotions, or store-rating
                links for these players. A birth-year answer is required before entering the
                game, and there is no in-game shortcut to change it to unlock online features.
              </p>
              <h3 className="mt-5 text-base font-semibold text-foreground">Puzzlecub</h3>
              <p>
                Puzzlecub is designed for players of every age. To meet our obligations under
                the Children&rsquo;s Online Privacy Protection Act (COPPA) in the United States,
                the UK Age-Appropriate Design Code, and GDPR provisions for children under 16 in
                the European Union (GDPR-K), Puzzlecub asks each player to enter their year of
                birth once, on first launch. That value is stored only on the player&rsquo;s
                device and is used locally to decide which protections to apply.
              </p>
              <p className="mt-3 font-medium text-foreground">
                For players whose locally-entered year of birth indicates they are under 13 (or
                under 16 in the EU), Puzzlecub:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Does not knowingly collect personally identifying information</li>
                <li>Keeps all gameplay and progress data on the child&rsquo;s device</li>
                <li>
                  Serves only non-personalized ads through Google AdMob&rsquo;s kid-safe
                  certified network (see Section 2)
                </li>
                <li>
                  Sends crash diagnostics configured for child-directed traffic and containing
                  no personally identifying information (see Section 3)
                </li>
                <li>
                  Protects outbound links (for example, to view this Privacy Policy or to
                  contact support) behind a parental gate — an age-appropriate challenge
                  intended to confirm a parent is present — in compliance with Apple&rsquo;s
                  and Google Play&rsquo;s child-safety requirements
                </li>
              </ul>
              <p className="mt-3 font-medium text-foreground">
                Across all players, regardless of age, Puzzlecub:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6">
                <li>Does not require a name, email address, or password for core gameplay; optional vault use involves anonymous identifiers</li>
                <li>
                  Does not enable in-app chat, social features, user-to-user communication, or
                  user-generated content
                </li>
                <li>
                  Does not currently offer in-app purchases and does not send push notifications.
                  If we add in-app purchases in a future version, we will update this Policy and
                  require parental gating consistent with platform requirements for users under
                  13
                </li>
              </ul>
              <p className="mt-3">
                If you are a parent and believe your child has provided personal information to
                us inadvertently, please contact{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>{" "}
                and we will promptly delete it.
              </p>
              <p className="mt-3">
                Parents and legal guardians may at any time request information about what data
                we hold about their child (typically none, beyond local device storage they
                control), request deletion of any such data, or direct us not to permit any
                further collection from the child.
              </p>
            </Section>

            <Section heading="5. How we use information">
              <p>We use the limited information we receive to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Operate and maintain the Services</li>
                <li>Respond to inquiries and customer support requests</li>
                <li>Detect, prevent, and address technical issues or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell personal information for money. On neurantra.com, however, our use of
                Google AdSense with personalized advertising may be considered &ldquo;sharing&rdquo;
                of personal information for cross-context behavioral advertising under certain laws,
                such as the California Consumer Privacy Act (CCPA/CPRA). You can opt out — see
                Sections 2a and 8. Within Puzzlecub, ads are non-personalized and we do not use
                personal information for cross-context behavioral advertising.
              </p>
            </Section>

            <Section heading="6. Sharing and disclosure">
              <p>We share information only:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  With our hosting and infrastructure providers (Vercel, Cloudflare, Google
                  Workspace) under their respective privacy and security commitments
                </li>
                <li>
                  With Google (AdSense) to serve, measure, and personalize ads on neurantra.com,
                  subject to Section 2a
                </li>
                <li>
                  With Google AdMob to serve ads within Puzzlecub and, for eligible older
                  players, Fill the Jar, subject to the app-specific limits in Section 2
                </li>
                <li>
                  With Google Firebase Authentication and Realtime Database to operate the
                  optional shared vault, and with participating Neurantra games you link to it
                </li>
                <li>
                  With Google (Firebase Crashlytics) to receive crash diagnostic reports,
                  subject to the limits in Section 3
                </li>
                <li>
                  When required by law, valid legal process, or to protect the rights,
                  property, or safety of Neurantra, our users, or others
                </li>
              </ul>
              <p className="mt-3">
                Other than the advertising partners described in Section 2, we do not share
                information with third parties for their own marketing purposes.
              </p>
            </Section>

            <Section heading="7. Third-party services">
              <p>We rely on the following providers, each governed by its own privacy practices:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Vercel
                  </a>{" "}
                  (web hosting)
                </li>
                <li>
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Cloudflare
                  </a>{" "}
                  (DNS)
                </li>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Google Workspace
                  </a>{" "}
                  (email),{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Google AdSense
                  </a>{" "}
                  (advertising on neurantra.com), Google AdMob (advertising in Puzzlecub and eligible Fill the Jar sessions), and{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    Firebase Crashlytics
                  </a>{" "}
                  (crash diagnostics in Puzzlecub), plus Firebase Authentication and Realtime
                  Database (the optional shared coin vault)
                </li>
                <li>
                  Apple App Store and Google Play (app distribution), governed by Apple&rsquo;s
                  and Google&rsquo;s respective privacy policies
                </li>
              </ul>
            </Section>

            <Section heading="8. Your rights">
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or
                receive a portable copy of your personal information; to object to or restrict
                certain processing; to withdraw consent; and to lodge a complaint with a
                supervisory authority.
              </p>
              <p className="mt-3">
                For California residents (CCPA / CPRA), you also have the right to know what
                categories of personal information are collected, to delete that information,
                to correct inaccurate information, and to opt out of sale or sharing for
                cross-context behavioral advertising. We do not sell personal information for
                money. We do &ldquo;share&rdquo; personal information for cross-context behavioral
                advertising on neurantra.com through Google AdSense personalized ads; you can
                opt out of personalized ads using Google&rsquo;s{" "}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Ad Settings
                </a>
                . Fill the Jar advertising data and choices are described separately in Section 2c.
                We do not share Puzzlecub data for cross-context behavioral advertising.
              </p>
              <p className="mt-3">
                For EU, UK, and EEA residents (GDPR / UK GDPR), our legal bases for processing
                are: legitimate interests (operating the Services and detecting abuse), consent
                (for personalized advertising on neurantra.com, collected through Google&rsquo;s
                certified consent message — see Section 2a), and legal obligation.
              </p>
              <p className="mt-3">
                To exercise any right, contact{" "}
                <a
                  href="mailto:admin@neurantra.com"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  admin@neurantra.com
                </a>
                . We will respond within the period required by applicable law.
              </p>
              <p className="mt-3">
                For Fill the Jar access, correction, or deletion requests, email{" "}
                <a href="mailto:hello@neurantra.com?subject=Fill%20the%20Jar%20privacy%20request"
                  className="text-accent underline-offset-2 hover:underline">hello@neurantra.com</a>
                . Tell us which game and request you are contacting us about. Do not send
                passwords or active link codes. We may need additional information to locate
                the relevant anonymous vault records and verify that the request is authorized.
                Unlinking is not a deletion request; the current testing build does not offer
                an automated in-app identity and transaction-history deletion tool.
              </p>
            </Section>

            <section id="account-deletion" className="scroll-mt-24 rounded-2xl border border-line p-6">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Request deletion — Fill the Jar: Shape Puzzle
              </h2>
              <p className="mt-3">
                Neurantra LLC accepts requests to delete your Fill the Jar anonymous vault
                account and associated server-side data by email. You can submit a request
                even if you have already uninstalled the app. This is a manually handled
                request, not an immediate deletion button.
              </p>
              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li>
                  Email{" "}
                  <a href="mailto:hello@neurantra.com?subject=Fill%20the%20Jar%20account%20deletion%20request"
                    className="text-accent underline underline-offset-4">hello@neurantra.com</a>
                  {" "}with the subject <strong>Fill the Jar account deletion request</strong>.
                </li>
                <li>
                  Tell us whether you used the shared coin vault, which Neurantra games you
                  linked, and whether you still have access to any linked device. If available,
                  include approximate dates and amounts of recent vault transfers to help us
                  locate the records. Do not send passwords, active linking codes, or identity
                  documents in your initial email.
                </li>
                <li>
                  We will reply to acknowledge the request and, where needed, help locate the
                  anonymous account and verify your authority before deleting anything. Your
                  email address is not automatically associated with your Firebase identity,
                  and transaction details alone do not establish ownership. If no linked
                  device or usable account information remains, we may be unable to identify
                  or verify the account; we will explain this rather than delete another
                  player&rsquo;s records.
                </li>
              </ol>
              <h3 className="mt-5 font-semibold">What is deleted</h3>
              <p className="mt-2">
                Following verification, we delete the applicable anonymous authentication
                identity, vault membership, related linking records, and associated personal
                data in transfer records, except for limited records retained for the reasons
                below. We confirm the scope with you when a vault also serves Puzzlecub,
                Chaturang, or another linked device. Deleting one app identity does not authorize
                deletion of another player&rsquo;s account or the entire shared balance.
                If your request covers a vault you control in full, its remaining balance and
                associated data are included; deleted coins cannot be recovered.
              </p>
              <h3 className="mt-5 font-semibold">Timing and any retained data</h3>
              <p className="mt-2">
                We aim to complete verified requests within 30 days and confirm completion
                by email. If verification or a shared-vault issue prevents completion within
                that target, we will explain the reason and expected timing. Applicable legal
                deadlines still apply. We may retain limited records where necessary to meet
                legal obligations, resolve an outstanding transfer or dispute, or prevent
                fraud. If an exception applies, our response will identify the categories,
                reason, and applicable retention period or criteria; it does not permit us to
                keep all account data indefinitely. Retained records are removed or anonymized
                when that reason ends. There is no general automatic 90-day deletion schedule
                for vault records.
              </p>
              <h3 className="mt-5 font-semibold">Local progress and other services</h3>
              <p className="mt-2">
                Puzzle progress, the birth-year declaration, settings, cosmetic unlocks, and
                local coins stay on your device. We cannot erase that local save remotely;
                remove the app&rsquo;s data using your device settings to delete it. Removing
                local data, uninstalling, or unlinking a vault does not by itself submit a
                server-side deletion request. Relevant requests for data held by our service
                providers are handled as part of fulfilling your request. Google&rsquo;s own
                advertising privacy controls also remain available through its services.
              </p>
              <p className="mt-3">
                A parent or guardian may contact the same address about a child&rsquo;s data.
                Fill the Jar&rsquo;s protected experience does not enable the shared vault
                or advertising. If you never used online features, there may be no vault
                account for us to delete.
              </p>
            </section>

            <Section heading="9. Data retention">
              <p>
                We retain server logs for up to 90 days for security and operational purposes.
                Email correspondence is retained as long as needed to address your inquiry and
                to satisfy any legal recordkeeping requirements. Puzzlecub gameplay data is
                retained on your device until you delete the app or clear its data. This local-only
                statement does not apply to optional shared-vault records.
              </p>
              <p className="mt-3">
                Fill the Jar local saves and birth-year declarations remain on the device
                until its app data is removed. Server-side vault identities, memberships,
                balances, and transaction records persist independently of the app installation.
                The current testing service does not automatically purge these records on
                uninstall or unlink. Code expiry prevents further linking with that code;
                it does not promise immediate removal of historical records. Contact us to
                request deletion. Requests involving a shared balance or records needed to
                resolve transfers, prevent abuse, or meet legal obligations may require
                retaining limited information; we will explain any applicable limitation
                when responding to the request.
              </p>
            </Section>

            <Section heading="10. Security">
              <p>
                We use commercially reasonable technical and organizational measures to protect
                the limited information we process. No method of transmission or storage is
                100% secure, however, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section heading="11. International users">
              <p>
                Neurantra LLC is based in New Jersey, United States. By using the Services, you
                understand that any information you provide will be processed in the United
                States. If you are visiting from outside the United States, you consent to such
                processing.
              </p>
            </Section>

            <Section heading="12. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise
                the &ldquo;Last updated&rdquo; date at the top. For material changes, we will
                provide more prominent notice (such as on the home page or by other reasonable
                means).
              </p>
            </Section>

            <Section heading="13. Contact us">
              <p>
                Questions about this Privacy Policy or our privacy practices? Contact:
              </p>
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
