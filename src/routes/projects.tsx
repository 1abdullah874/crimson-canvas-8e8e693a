import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abdullah Saleem" },
      {
        name: "description",
        content:
          "Selected projects across security, computer vision, and full-stack web development.",
      },
      { property: "og:title", content: "Projects — Abdullah Saleem" },
      {
        property: "og:description",
        content:
          "Selected projects across security, computer vision, and full-stack web development.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  num: string;
  title: string;
  href: string;
  desc: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "MFA Face Authentication",
    href: "https://github.com/1abdullah874/MFA-Face-Authentication",
    desc: "Multi-factor authentication system requiring both password and live face scan to grant access. Runs 100% offline with bcrypt-hashed passwords and 128-point face encodings. Full access log dashboard.",
    tags: ["Python", "face_recognition", "dlib", "PySide6", "bcrypt", "OpenCV"],
  },
  {
    num: "02",
    title: "Sign Language Translator",
    href: "https://github.com/1abdullah874/Sign_Language",
    desc: "Real-time ASL finger-spelling translator using webcam and MediaPipe hand landmark detection. Detects 21+ signs and common words offline. Includes a sentence builder to compose words letter by letter.",
    tags: ["Python", "MediaPipe", "OpenCV", "PyQt5", "Computer Vision"],
  },
  {
    num: "03",
    title: "PhishGuard",
    href: "https://phishing-shield.vercel.app/",
    desc: "Full-stack AI-powered web app that detects phishing emails. Users input email content and get real-time predictions with confidence scores and risk levels (Safe, Suspicious, or Dangerous) powered by TF-IDF and XGBoost.",
    tags: ["React", "FastAPI", "XGBoost", "Scikit-learn", "Vite", "Railway"],
  },
];

function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(139,0,0,0.75) 0%, rgba(90,0,10,0.45) 30%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      <div className="grain-overlay" aria-hidden />

      <div className="relative z-10 flex min-h-screen w-full flex-col px-6 py-8 md:px-14 md:py-12">
        <header className="flex items-start justify-between gap-4">
          <h1
            className="font-display-sans text-white"
            style={{ fontSize: "clamp(48px, 9vw, 140px)", lineHeight: 0.9 }}
          >
            Projects
          </h1>
          <Link
            to="/"
            className="font-mono-ui mt-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white md:text-xs"
          >
            ← Back
          </Link>
        </header>

        <section className="mt-16 md:mt-24">
          <ul className="divide-y divide-white/10">
            {PROJECTS.map((p) => (
              <li key={p.num} className="group py-10 md:py-14">
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {p.num} —
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-baseline gap-3 text-white transition-colors hover:text-white/70"
                >
                  <span
                    className="font-display-sans font-light"
                    style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
                  >
                    {p.title}
                  </span>
                  <span className="text-white/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-[15px]">
                  {p.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/45 md:text-xs">
                  {p.tags.map((t, i) => (
                    <span key={t} className="flex items-center gap-3">
                      <span>{t}</span>
                      {i < p.tags.length - 1 && (
                        <span className="text-[#8b0000]/70">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-auto pt-16">
          <div className="h-px w-full bg-white/15" />
          <div className="mt-5 flex items-end justify-between gap-4">
            <a
              href="mailto:Abdullahsaleem874@gmail.com"
              className="text-sm text-white transition-colors hover:text-white/70 md:text-base"
            >
              Abdullahsaleem874@gmail.com
            </a>
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40 md:text-xs">
              → V3.0
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}