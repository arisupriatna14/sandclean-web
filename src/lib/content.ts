import {
  Beer,
  Bot,
  Box,
  Braces,
  Brain,
  Cloud,
  Code2,
  Copy,
  FolderClock,
  Ghost,
  GitBranch,
  Globe,
  HardDrive,
  History,
  Images,
  LayoutDashboard,
  LayoutGrid,
  ListChecks,
  Mail,
  MonitorDot,
  Network,
  PieChart,
  RefreshCw,
  ScanSearch,
  ScrollText,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Trash2,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ── Landing page content ──────────────────────────────────────────────────
   All copy for the marketing page lives here so the section components stay
   pure layout. Feature entries mirror the scanners that actually ship in
   ../sandclean (SandClean/Features/*).                                     */

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  /* Spans two columns in the bento grid, with room for a visual accent. */
  wide?: boolean;
};

export const PILLARS = [
  {
    icon: Zap,
    title: "Truly native",
    description:
      "Swift and SwiftUI, not Electron. Scanners run as actors with structured concurrency, so a full sweep of your disk takes seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by default",
    description:
      "Everything SandClean removes goes to the Trash, never straight to /dev/null. Change your mind and put it back.",
  },
  {
    icon: Terminal,
    title: "Built for developers",
    description:
      "DerivedData, node_modules, simulator runtimes, Docker layers, Python venvs, Gradle and Cargo caches — the junk other cleaners miss.",
  },
  {
    icon: RefreshCw,
    title: "Free, and stays current",
    description:
      "No subscription, no account. Sparkle keeps the app up to date with signed, notarized releases.",
  },
];

export const CLEANING_FEATURES: Feature[] = [
  {
    icon: Trash2,
    title: "System Cache",
    description:
      "Scan and delete user & system caches, browser caches (Chrome, Safari, Firefox, Edge), and Photos cache.",
    accent: "var(--color-brand)",
    wide: true,
  },
  {
    icon: Code2,
    title: "Xcode Cleaner",
    description:
      "Delete DerivedData, Archives, Simulator devices, and unused iOS Device Support files — usually the biggest win on a developer's Mac.",
    accent: "var(--color-ember)",
    wide: true,
  },
  {
    icon: HardDrive,
    title: "System Data",
    description:
      "Analyze Time Machine snapshots, iOS backups, iCloud cache, and diagnostic reports.",
    accent: "var(--color-violet)",
  },
  {
    icon: Copy,
    title: "Large & Duplicate Files",
    description:
      "Find files >50 MB and detect exact duplicates using SHA-256 two-pass hashing.",
    accent: "#e11d48",
  },
  {
    icon: LayoutGrid,
    title: "Applications",
    description:
      "Scan installed applications, view their sizes, and permanently remove unused ones.",
    accent: "var(--color-emerald)",
  },
  {
    icon: Ghost,
    title: "App Leftovers",
    description:
      "Find orphaned Preferences, Application Support, Containers, and Saved State from uninstalled apps.",
    accent: "#d97706",
  },
  {
    icon: Terminal,
    title: "Dev Tools Cache",
    description:
      "Clean cache from npm, Yarn, pip, CocoaPods, Swift PM, Gradle, Maven, Cargo, Go, Ruby Gems, and Pub.",
    accent: "var(--color-brand)",
  },
  {
    icon: Beer,
    title: "Homebrew Deep Clean",
    description:
      "Analyze Homebrew cache in detail — find old bottles, cask cache, and update outdated formulas.",
    accent: "#d97706",
  },
  {
    icon: ScrollText,
    title: "Log Files",
    description:
      "Scan and delete old log files and crash reports older than a configurable number of days.",
    accent: "#64748b",
  },
  {
    icon: GitBranch,
    title: "Git Repository Cleaner",
    description:
      "Find and delete node_modules, .build, Pods, vendor, and other dependency folders across local repos.",
    accent: "var(--color-ember)",
  },
  {
    icon: Box,
    title: "Docker Cleanup",
    description:
      "Remove dangling images, stopped containers, unused volumes, and build cache via the Docker CLI.",
    accent: "#0891b2",
  },
  {
    icon: Globe,
    title: "Language Pack",
    description:
      "Find and remove unused .lproj language resource files bundled inside installed applications.",
    accent: "var(--color-emerald)",
  },
  {
    icon: Smartphone,
    title: "iOS Simulator Manager",
    description:
      "Find and delete unused iOS, watchOS, and tvOS simulator runtimes to free disk space.",
    accent: "var(--color-violet)",
  },
  {
    icon: Bot,
    title: "Android Cleaner",
    description:
      "Reclaim space from Android SDK system images, AVD emulators, and the Gradle build cache.",
    accent: "var(--color-emerald)",
  },
  {
    icon: Images,
    title: "Duplicate Photos",
    description:
      "Find visually similar duplicate photos using a perceptual hash (dHash) across Pictures, Desktop, Downloads, and Documents.",
    accent: "#e11d48",
  },
  {
    icon: FolderClock,
    title: "Old Downloads & Files",
    description:
      "Scan Downloads, Desktop, and Documents for files that haven't been modified in months.",
    accent: "var(--color-ember)",
  },
  {
    icon: Mail,
    title: "Mail Attachments Cleaner",
    description:
      "Find old email attachments stored locally — safely re-downloadable from your mail server.",
    accent: "var(--color-brand)",
  },
  {
    icon: Braces,
    title: "Python venv Finder",
    description:
      "Locate forgotten Python virtual environments in old projects — each can be 300 MB to 1 GB+.",
    accent: "#d97706",
  },
  {
    icon: Network,
    title: "Network & External Drive",
    description:
      "Scan mounted network volumes and external drives for junk files and duplicates.",
    accent: "var(--color-emerald)",
  },
  {
    icon: Cloud,
    title: "iCloud Storage Analyzer",
    description:
      "Find iCloud Drive files stored locally and evict them to free up disk space.",
    accent: "#0891b2",
  },
];

export const UTILITY_FEATURES: Feature[] = [
  {
    icon: PieChart,
    title: "Disk Visualizer",
    description:
      "A visual treemap breakdown of disk usage by folder and file type — see what's big at a glance.",
    accent: "var(--color-violet)",
    wide: true,
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Overview of total cleaned storage, active scan results, and quick access to every scanner.",
    accent: "var(--color-brand)",
  },
  {
    icon: TrendingUp,
    title: "Storage Timeline",
    description: "Track storage usage over time and see your cleaning history as a chart.",
    accent: "var(--color-emerald)",
  },
  {
    icon: Shield,
    title: "Security Scan",
    description:
      "Detect potentially sensitive files left on disk — credentials, private keys, and old backups.",
    accent: "#e11d48",
  },
  {
    icon: Zap,
    title: "Startup Manager",
    description: "View and manage Login Items and Launch Agents that run at startup.",
    accent: "#d97706",
  },
  {
    icon: History,
    title: "History",
    description: "A full log of every cleaning session with timestamps and bytes freed.",
    accent: "#64748b",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Optional second opinion on what's safe to delete — via Apple's on-device Foundation Models, your local Claude CLI, or your own Anthropic API key.",
    accent: "var(--color-ember)",
  },
  {
    icon: MonitorDot,
    title: "Menu Bar",
    description:
      "A menu bar item showing current disk usage, with a one-click shortcut to start a scan.",
    accent: "var(--color-brand)",
  },
];

export const TOTAL_FEATURES = CLEANING_FEATURES.length + UTILITY_FEATURES.length;

/* Real app screenshots from /public/screenshots. 03 is intentionally skipped. */
export const SHOWCASE = [
  {
    src: "/screenshots/01.png",
    title: "Dashboard",
    description: "Disk usage at a glance, with every scanner one click away.",
  },
  {
    src: "/screenshots/02.png",
    title: "Smart Scan",
    description: "All categories scanned concurrently, reporting sizes as they land.",
  },
  {
    src: "/screenshots/04.png",
    title: "Xcode Cleaner",
    description: "DerivedData, Archives, Simulators, and iOS Device Support.",
  },
  {
    src: "/screenshots/05.png",
    title: "System Cache",
    description: "App, system, and browser caches that are safe to clear.",
  },
  {
    src: "/screenshots/06.png",
    title: "System Data",
    description: "Find out what's really behind that mysterious System Data blob.",
  },
  {
    src: "/screenshots/07.png",
    title: "Large & Duplicate Files",
    description: "Files over 50 MB and exact duplicates, hashed with SHA-256.",
  },
  {
    src: "/screenshots/08.png",
    title: "Applications",
    description: "Every installed app with its real size on disk.",
  },
  {
    src: "/screenshots/09.png",
    title: "App Leftovers",
    description: "Preferences and containers left behind by apps you deleted.",
  },
  {
    src: "/screenshots/10.png",
    title: "Dev Tools Cache",
    description: "Homebrew, npm, yarn, pip, CocoaPods, Gradle, Cargo, Go, and more.",
  },
];

export const STEPS = [
  {
    icon: ScanSearch,
    title: "Scan",
    description:
      "Hit Smart Scan and SandClean analyzes every category concurrently — seconds, not minutes.",
    accent: "var(--color-brand)",
  },
  {
    icon: ListChecks,
    title: "Review",
    description:
      "See exactly what's using your storage, broken down by category with sizes. Decide what stays and what goes.",
    accent: "var(--color-violet)",
  },
  {
    icon: Sparkles,
    title: "Clean",
    description:
      "Remove the clutter in one click. Everything moves to the Trash — nothing disappears without your say-so.",
    accent: "var(--color-ember)",
  },
];

export const PLATFORM = [
  {
    title: "Menu Bar",
    description: "Live disk usage in the menu bar, with a one-click scan shortcut.",
  },
  {
    title: "Finder Extension",
    description:
      "Right-click any folder to scan it with SandClean, or add it to your exclusion list.",
  },
  {
    title: "Widget",
    description: "A desktop widget tracking your storage and the results of the last scan.",
  },
  {
    title: "Command Line",
    description:
      "A bundled CLI: sandclean scan --category xcode --dry-run --json, plus history and version.",
  },
  {
    title: "Sparkle Updates",
    description: "Signed, notarized in-app updates — no App Store round trip.",
  },
  {
    title: "Notifications",
    description: "An in-app toast in the foreground, a system notification in the background.",
  },
];

export const PRIVACY_POINTS = [
  "Every scan runs locally on your Mac",
  "No account, no sign-in, no subscription",
  "Deleted items go to the Trash — reversible",
  "AI Analysis is opt-in, and can run fully on-device",
];

export const FAQ = [
  {
    q: "Is SandClean free?",
    a: "Yes. SandClean is free, with no subscription, no in-app purchases, and no ads. It's distributed as a signed and notarized DMG.",
  },
  {
    q: "Why does it ask for Full Disk Access?",
    a: "macOS protects folders like ~/Library, Mail, and Time Machine snapshots. Without Full Disk Access those areas are invisible to SandClean, so scans come back much smaller than the junk you actually have. You can grant it in System Settings → Privacy & Security → Full Disk Access.",
  },
  {
    q: "Is it safe to delete what SandClean finds?",
    a: "Every scanner targets caches, build artifacts, and leftovers that macOS and your tools regenerate on demand. Nothing is selected for you blindly — you review each category and its size before cleaning.",
  },
  {
    q: "Can I undo a clean-up?",
    a: "Yes. Cleaned items are moved to the Trash rather than deleted outright, so you can restore them until you empty it. The only exceptions are operations delegated to another tool's own CLI, such as Docker prune.",
  },
  {
    q: "How do updates work?",
    a: "SandClean uses Sparkle. It checks a signed appcast, and updates are verified with an EdDSA signature before they install — so an update can only come from the real developer.",
  },
  {
    q: "Which Macs are supported?",
    a: "macOS 13 Ventura or later, on both Apple Silicon and Intel.",
  },
  {
    q: "Does SandClean send my data anywhere?",
    a: "No. All scanning and cleaning happens on your Mac and there is no SandClean server. The only exception is the optional AI Analysis feature, which you trigger explicitly.",
  },
  {
    q: "What does AI Analysis actually send?",
    a: "Only the path and size of up to ten items you selected — never file contents. On macOS 26 it defaults to Apple's Foundation Models, which run entirely on-device. You can also point it at the Claude CLI installed on your Mac, or your own Anthropic API key stored in your login keychain.",
  },
];
