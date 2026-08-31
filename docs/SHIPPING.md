# Shipping — every Neurantra project

Canonical copy. Lives here because `neurantra-web` is the organisation's own repo; every
project's local `/dev/SHIPPING.md` is a pointer to this file, not a copy, so there is nothing
to keep in sync.

Last verified against all ten repositories: **31 August 2026**.

Companion: the infrastructure tracker at `~/dev/outputs/infra-tracker.xlsx` records *what
exists* — repos, hosting, services, secret names, open risks. This file records *how to ship*.
The tracker is generated, not maintained:

```bash
cd ~/dev/neurantra-web && uv run --with openpyxl python scripts/build-infra-tracker.py
```

---

## Branches

`main` is the production branch in **all ten** repositories, and none of them enforces branch
protection or pull requests.

`iyerspine-web` was the exception until 2026-08-31 and the reason is worth keeping. It held two
histories with **no common ancestor**: a `main` last touched on 12 March, describing an older
"Neurantra AI Platform" model with `release/1.x` maintenance branches, and a `web-main` carrying
everything actually live. The stale one is now `legacy/platform-main` — renamed, not deleted, so
all 254 of its commits stay reachable — and `web-main` became `main`.

Its old line is still there and is not part of any flow: `legacy/platform-main`,
`release/web-v1`, `platform-mobile`, `sync/web-main-to-v1.2`, `tooling/amd64-build-flags`.
The live line is `main`, `release/web-v1.3`, `hipaa-hardening`, `feat/multi-tenancy-p5`.

Renaming a branch on GitHub leaves a redirect that reserves the old name, so `web-main` could not
simply be renamed to `main` once the stale `main` had moved aside. `main` was created at
`web-main`'s commit, made default, and `web-main` deleted after confirming both pointed at the
same SHA.

One working tree deliberately differs: **`planesane-web-and-app` is developed on `staging`** and
fast-forwarded to `main` to release. Every other clone sits on `main`.

Stale branches worth pruning elsewhere: `legacy-rn` (puzzlecub-app), `homepage-foundation`
(neurantra-web), `cloudflare/workers-autoconfig` (surgerycare-web).

---

## Websites — push to main, nothing else

All five Vercel projects build on push and are confirmed deploying. The **root directory** is
the only per-project setting, and the only reason a rebuilt project would fail.

| repo | host | root directory |
|---|---|---|
| `indiamasala-web` | Vercel | `web` |
| `pawcial-web-and-app` | Vercel | `apps/web` |
| `planesane-web-and-app` | Vercel | `web` |
| `puzzlecub-web` | Vercel | *(repo root)* |
| `neurantra-web` | Vercel | *(repo root)* |
| `surgerycare-web` | Cloudflare Pages via GitHub Actions | *(repo root)* → `dist` |
| `iyerspine-web` | AWS, manual scripts | `neurantra-agents/ortho-ai-assistant/app` |

`surgerycare-web` reaches the same result by a different route: the Cloudflare Pages project has
**no Git integration** and cannot be given one, so `.github/workflows/deploy.yml` builds and hands
it a finished `dist/`. When a deploy does not appear, read the Action's log — Cloudflare's build
log for that project is empty and always will be.

`iyerspine-web` is the one exception to "push to main". It deploys through
`deploy.config.*.json` and a mix of shell and PowerShell scripts, by hand.

---

## Mobile — one command to prepare, then build in Xcode

iOS builds are **manual**, from Xcode on the Mac. Xcode Cloud was considered and set aside: five
apps building on every commit is metered compute, and the pre-build step below is the part that
actually caused problems.

### Before every release build, in any app

```bash
./scripts/release-prep.sh            # bump both build numbers, keep the version
./scripts/release-prep.sh 1.8.0      # set the marketing version too
./scripts/release-prep.sh --sync     # repair disagreement, spending no build number
./scripts/release-prep.sh --check    # report and change nothing
```

Then `git diff`, commit the bump, and build:

1. Open the `.xcworkspace` in Xcode
2. Destination → **Any iOS Device (arm64)**
3. Product → **Archive**
4. Distribute App → App Store Connect

Android, when you want it:

```bash
./scripts/build-android.sh           # signed .aab for Play
./scripts/build-android.sh --apk     # signed .apk for sideload / QA
```

### Why release-prep exists

A build whose version sources disagree is not a build that fails. It compiles, signs, uploads,
and is rejected by App Store Connect afterwards — which costs a round trip to discover. planesane
lost two uploads to this on 2026-08-29: `Info.plist` held the version as a literal, so bumping
`app.json` and the pbxproj left the bundle itself behind.

Both Expo apps with a committed `ios/` were changed on 2026-08-31 to read `$(MARKETING_VERSION)`
and `$(CURRENT_PROJECT_VERSION)` from the build setting instead — the Xcode default, and what the
Flutter apps already did. That took the count from four places to three, and removed the two that
had actually gone stale.

The same script is in all five apps and adapts to three different shapes, detected rather than
configured:

| app | framework | what release-prep touches |
|---|---|---|
| `planesane-web-and-app/mobile` | Expo, `ios/` committed | app.json, gradle, pbxproj — Info.plist defers |
| `iyerspine-web/…/surgerycare-app` | Expo, `ios/` committed | same three |
| `pawcial-web-and-app/apps/mobile` | Expo, **CNG** | `app.json` only — `ios/` and `android/` are gitignored and regenerated by prebuild, so nothing can disagree |
| `chaturang-app` | Flutter | `pubspec.yaml` only |
| `puzzlecub-app` | Flutter | `pubspec.yaml` only |

Flutter needs no syncing: `Info.plist` reads `$(FLUTTER_BUILD_NAME)`/`$(FLUTTER_BUILD_NUMBER)` and
Gradle reads `flutter.versionName`/`flutter.versionCode`, so `pubspec.yaml` is genuinely the only
version. `--check` exists to prove that stays true — one hardcoded literal, easy to introduce while
chasing an unrelated build error, turns a pubspec bump into a no-op that ships the old version.

iOS build number and Android versionCode bump **independently**. They count uploads to two
different stores and drift apart legitimately.

---

## Every app, both scripts

| app | `release-prep.sh` | `build-android.sh` |
|---|---|---|
| planesane | ✅ | ✅ |
| pawcial | ✅ | ✅ |
| surgerycare-app | ✅ | ✅ *(wraps the existing npm pipeline)* |
| chaturang-app | ✅ | ✅ |
| puzzlecub-app | ✅ | ✅ |

`release-prep.sh` is byte-identical in the three Expo apps and `build-android.sh` is
byte-identical in the two Flutter apps, so a fix in one is a copy away from the rest.

Signing differs by framework and never lives in a repo. Expo reads
`~/.gradle/gradle.properties` under an app-specific prefix — `PLANESANE_UPLOAD_*`,
`PAWCIAL_UPLOAD_*`, and `MYSURGEON_UPLOAD_*` for surgerycare, whose prefix predates the app's
rename and is kept because the plugin and any existing properties already use it. Flutter reads
`android/key.properties`, gitignored, pointing at a keystore in `android/app/` — Gradle resolves
that relative path against the module directory, not `android/`.

surgerycare's script is a wrapper rather than a rewrite. Its npm pipeline refuses to build
without `EXPO_PUBLIC_API_BASE_URL`, and then opens the finished bundle to confirm the host is
inside it — written after a hostless AAB reached the Play Store twice, in 1.0.2 and again in
1.0.3, each time shipping an app whose every screen read "NO API HOST".

---

## Things that bite

**Android keystores are irreplaceable.** Lose one and that app can never be updated on Play under
the same listing. They live outside the repo by design, which also means a fresh machine cannot
produce an uploadable build until both the keystore file and its `gradle.properties` entries are
restored. Keep them together in the password manager.

**`surgerycare-app` is a repository inside another repository.** It sits at
`iyerspine-web/neurantra-agents/ortho-ai-assistant/surgerycare-app`, gitignored by its parent
(`.gitignore` names that path literally — rename the folder and the parent stops ignoring 13 MB).
Nothing in the parent tracks it, so `git clean -fdx` in `iyerspine-web` would delete it along with
anything uncommitted inside.

**GitHub Actions bills to the `neurantra` org**, which has a $25 budget with *Stop usage: Yes* and
3,000 included minutes. `indiamasala-web` is ~94% of that load. The daily digest reports the month's
pace and warns at 80% of the cap.
