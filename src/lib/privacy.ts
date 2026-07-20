import { APP_NAME, CONTACT_EMAIL, PRIVACY_UPDATED } from "./config";

/* Structured privacy policy. The content below reflects what the app in
   ../sandclean actually does: every scanner runs locally, scan history and
   settings are persisted on the Mac, and there is no SandClean server. The
   only outbound traffic is (a) Sparkle's update check, (b) the optional AI
   Analysis feature when it is configured to use a remote provider, and
   (c) Firebase Analytics on this website. */

export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type Section = { id: string; title: string; blocks: Block[] };

export const PRIVACY_DOC: {
  title: string;
  updatedLabel: string;
  updated: string;
  backHome: string;
  intro: Block[];
  sections: Section[];
} = {
  title: "Privacy Policy",
  updatedLabel: "Last updated",
  updated: PRIVACY_UPDATED,
  backHome: "Back to home",
  intro: [
    {
      type: "p",
      text: `${APP_NAME} is a storage cleaner that runs entirely on your Mac. There is no account to create and no ${APP_NAME} server to send your files to — the app reads your disk locally to tell you what is taking up space, and everything it finds stays with you.`,
    },
    {
      type: "p",
      text: "This policy covers both the macOS app and this website, and is explicit about the few moments when anything does leave your machine.",
    },
  ],
  sections: [
    {
      id: "app-data",
      title: "1. What the app reads and stores",
      blocks: [
        {
          type: "p",
          text: `To find reclaimable space, ${APP_NAME} reads file and folder metadata — names, paths, sizes, and modification dates — across the locations you scan. For duplicate detection it also reads file contents to compute a hash. All of this happens locally, in memory, and results are discarded when you close the app.`,
        },
        {
          type: "ul",
          items: [
            "Scan results live only in memory while the app is open.",
            "Cleaning history (timestamps, categories, and bytes freed) and your settings and exclusion list are stored on your Mac.",
            "Nothing is uploaded, and no file contents are ever transmitted.",
          ],
        },
      ],
    },
    {
      id: "permissions",
      title: "2. Full Disk Access",
      blocks: [
        {
          type: "p",
          text: "macOS protects locations such as ~/Library, Mail data, and Time Machine snapshots. Granting Full Disk Access lets the app see those areas so scans are complete. The permission is used only for scanning and cleaning, it is optional, and you can revoke it at any time in System Settings → Privacy & Security.",
        },
      ],
    },
    {
      id: "deletion",
      title: "3. How deletion works",
      blocks: [
        {
          type: "p",
          text: "Items you clean are moved to the Trash rather than deleted outright, so you can restore them until you empty it. The exceptions are operations that are handed off to another tool's own command line — for example Docker's prune commands — which follow that tool's behaviour and are not reversible.",
        },
      ],
    },
    {
      id: "ai",
      title: "4. AI Analysis (optional)",
      blocks: [
        {
          type: "p",
          text: "AI Analysis is off until you use it. When you run it, the app sends only the path and size of up to ten items you selected — never file contents — to the provider you chose:",
        },
        {
          type: "ul",
          items: [
            "Apple Foundation Models (the default on macOS 26): runs on-device, nothing leaves your Mac.",
            "Claude CLI: the app invokes the claude command already installed on your Mac, which talks to Anthropic under your own account and their privacy policy.",
            "Anthropic API key: your key is stored in your login keychain and the request goes directly to Anthropic. We never see it.",
          ],
        },
      ],
    },
    {
      id: "updates",
      title: "5. Updates",
      blocks: [
        {
          type: "p",
          text: "The app checks for updates using Sparkle, which requests an appcast file from this site and downloads releases from GitHub. Like any web request, these reveal your IP address and app version to the servers involved. Updates are verified with an EdDSA signature before installing. You can turn automatic checks off in Settings.",
        },
      ],
    },
    {
      id: "website",
      title: "6. This website",
      blocks: [
        {
          type: "p",
          text: "This site uses Firebase Analytics (Google) to count page views and download clicks, so we know whether the project is useful. Two events are recorded: a page view, and a download event carrying the app version and platform. We do not build user profiles, sell data, or run advertising. Google's own privacy policy applies to the data it processes, and blocking analytics scripts does not affect the download.",
        },
      ],
    },
    {
      id: "children",
      title: "7. Children",
      blocks: [
        {
          type: "p",
          text: `${APP_NAME} is a system utility intended for general audiences and is not directed at children. It does not knowingly collect personal information from anyone.`,
        },
      ],
    },
    {
      id: "changes",
      title: "8. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "If the app's data practices change, this page is updated along with the date above. Material changes will also be noted in the release notes.",
        },
      ],
    },
    {
      id: "contact",
      title: "9. Contact",
      blocks: [
        {
          type: "p",
          text: `Questions about privacy, or something in this policy that looks wrong? Email ${CONTACT_EMAIL} or open an issue on GitHub.`,
        },
      ],
    },
  ],
};
