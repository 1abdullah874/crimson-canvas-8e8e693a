import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abdullah Saleem" },
      {
        name: "description",
        content:
          "Get in touch about freelance work, internships, and collaborations in cybersecurity and web development.",
      },
      { property: "og:title", content: "Contact — Abdullah Saleem" },
      {
        property: "og:description",
        content:
          "Get in touch about freelance work, internships, and collaborations in cybersecurity and web development.",
      },
    ],
  }),
  component: ContactPage,
});

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-t border-white/10 py-4">
      <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
        {label}
      </span>
      <span className="text-sm text-white md:text-base">{value}</span>
    </div>
  );
}

function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 70% 10%, rgba(139,0,0,0.8) 0%, rgba(90,0,10,0.45) 30%, transparent 65%)",
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
            Contact
          </h1>
          <Link
            to="/"
            className="font-mono-ui mt-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white md:text-xs"
          >
            ← Back
          </Link>
        </header>

        <section className="mt-16 grid grid-cols-1 gap-14 md:mt-24 md:grid-cols-[300px_minmax(0,1fr)] md:gap-20">
          {/* Left column */}
          <aside className="w-full md:max-w-[300px]">
            <div className="rounded-sm border border-white/10 p-6">
              <h2 className="text-[20px] font-light leading-snug text-white">
                Let's talk about your project.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                I respond quickly to internship requests, freelance missions and
                collaborations around cybersecurity and web development.
              </p>
            </div>

            <div className="mt-10">
              <InfoRow label="Based in" value="Helsinki, Finland" />
              <InfoRow label="Status" value="Student / Freelance" />
              <InfoRow label="Avg. response" value="48h" />
              <div className="border-t border-white/10" />
            </div>
          </aside>

          {/* Right column */}
          <div>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.28em] text-white/40">
              Contact
            </div>
            <h2
              className="font-display-sans mt-5 font-light text-white"
              style={{
                fontSize: "clamp(44px, 7vw, 80px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Let's build together.
            </h2>
            <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                Security-focused developer, building web apps where precision
                meets performance.
              </p>
              <p>
                If you have a project in mind, an ambitious idea, or you're
                looking for a security-aware developer — I'd be glad to discuss
                it with you.
              </p>
            </div>

            <hr className="my-12 border-white/10" />

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Shortcuts
                </div>
                <ul className="mt-5 space-y-2 text-base text-white">
                  <li>
                    <a
                      href="mailto:Abdullahsaleem874@gmail.com"
                      className="hover:underline underline-offset-4"
                    >
                      Direct mail
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdullah-ali-saleem-5b8bab298/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/1abdullah874"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Brief format
                </div>
                <ul className="mt-5 space-y-2 text-base text-white/85">
                  <li>Product goal</li>
                  <li>Target deadline</li>
                  <li>Tech stack</li>
                  <li>Expected deliverables</li>
                </ul>
              </div>
            </div>
          </div>
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
              Available 2026
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}