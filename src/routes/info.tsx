import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Info — Abdullah Saleem" },
      {
        name: "description",
        content:
          "Creative developer & computer science student specialized in security-focused tools and web development.",
      },
      { property: "og:title", content: "Info — Abdullah Saleem" },
      {
        property: "og:description",
        content:
          "Creative developer & computer science student specialized in security-focused tools and web development.",
      },
    ],
  }),
  component: InfoPage,
});

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
        {title}
      </div>
      <ul className="mt-4 space-y-1.5 text-sm text-white/85 md:text-base">
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

function CornerMarks() {
  const base =
    "absolute h-4 w-4 text-white/40 font-mono-ui text-base leading-none";
  return (
    <>
      <span className={`${base} -top-1 -left-1`}>+</span>
      <span className={`${base} -top-1 -right-1 text-right`}>+</span>
      <span className={`${base} -bottom-1 -left-1`}>+</span>
      <span className={`${base} -bottom-1 -right-1 text-right`}>+</span>
    </>
  );
}

function InfoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Atmospheric red glow */}
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
        {/* Top bar */}
        <header className="flex items-start justify-between gap-4">
          <h1
            className="font-display-sans text-white"
            style={{
              fontSize: "clamp(48px, 9vw, 140px)",
              lineHeight: 0.9,
            }}
          >
            Info
          </h1>
          <Link
            to="/"
            className="font-mono-ui mt-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white md:text-xs"
          >
            ← Back
          </Link>
        </header>

        {/* Main grid */}
        <section className="mt-12 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16">
          {/* Left: image + meta */}
          <div>
            <div className="relative aspect-[4/5] w-full max-w-sm">
              <CornerMarks />
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60,10,15,0.6), rgba(20,5,8,0.9))",
                }}
              />
            </div>
            <dl className="mt-8 max-w-sm space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <dt className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Based in
                </dt>
                <dd className="text-white">Helsinki, Finland</dd>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <dt className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Status
                </dt>
                <dd className="text-white">Open to opportunities</dd>
              </div>
            </dl>
          </div>

          {/* Right: about */}
          <div>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
              About
            </div>
            <h2
              className="font-display-sans mt-4 text-white"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Abdullah Saleem.
            </h2>
            <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
              Creative developer & computer science student, specialized in web
              development.
            </p>
            <div className="mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-white/60 md:text-base">
              <p>
                I build security-focused tools that make systems harder to
                break. My work spans biometric authentication, computer vision,
                offline-first technologies, and website design.
              </p>
              <p>
                With an offensive security mindset, I design and engineer
                solutions by understanding how systems fail — then improving
                them.
              </p>
              <p>
                Focused on practical, real-world security, I create tools that
                stay reliable even without cloud dependency.
              </p>
            </div>

            <hr className="my-10 border-white/10" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <SkillGroup
                title="Security & Tools"
                items={[
                  "Linux · Bash",
                  "OWASP",
                  "Nmap · Metasploit",
                  "Docker · Git",
                ]}
              />
              <SkillGroup
                title="Frontend"
                items={[
                  "HTML / CSS",
                  "JavaScript · TypeScript",
                  "React",
                  "Next.js",
                ]}
              />
              <SkillGroup
                title="Backend"
                items={[
                  "Node.js · Express",
                  "Python",
                  "MySQL · PostgreSQL",
                  "MongoDB · Supabase",
                  "C++",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 flex items-end justify-between gap-4 pt-8">
          <a
            href="mailto:Abdullahsaleem874@gmail.com"
            className="text-sm text-white transition-colors hover:text-white/70 md:text-base"
          >
            Abdullahsaleem874@gmail.com
          </a>
          <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40 md:text-xs">
            → V1.0
          </span>
        </footer>
      </div>
    </main>
  );
}