import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdullah Saleem — Creative Developer" },
      {
        name: "description",
        content:
          "Creative developer bringing ideas to life through code, design and motion.",
      },
      { property: "og:title", content: "Abdullah Saleem — Creative Developer" },
      {
        property: "og:description",
        content:
          "Creative developer bringing ideas to life through code, design and motion.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([firstNameRef.current, lastNameRef.current], {
        yPercent: 110,
        opacity: 0,
      });
      gsap.set(taglineRef.current, { opacity: 0, y: 20 });
      gsap.set(footerRef.current, { opacity: 0, y: 20 });
      gsap.set(glowRef.current, { opacity: 0, scale: 1.1 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(glowRef.current, { opacity: 1, scale: 1, duration: 2.2 })
        .to(
          firstNameRef.current,
          { yPercent: 0, opacity: 1, duration: 1.6 },
          0.3,
        )
        .to(
          lastNameRef.current,
          { yPercent: 0, opacity: 1, duration: 1.6 },
          0.55,
        )
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 1.2 }, 0.9)
        .to(footerRef.current, { opacity: 1, y: 0, duration: 1.2 }, 1.1);

      const handleMove = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1.2,
          ease: "power3.out",
        });
      };
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative h-screen w-screen overflow-hidden bg-black text-white"
    >
      {/* Gradient glow background */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 15%, rgba(255,40,40,0.85) 0%, rgba(220,20,30,0.55) 25%, transparent 60%), radial-gradient(45% 40% at 95% 25%, rgba(255,90,40,0.55) 0%, transparent 55%), radial-gradient(55% 50% at 70% 5%, rgba(120,10,20,0.85) 0%, transparent 60%), radial-gradient(70% 60% at 100% 0%, rgba(60,0,10,0.9) 0%, transparent 70%), radial-gradient(40% 40% at 30% 90%, rgba(80,5,15,0.5) 0%, transparent 70%)",
          filter: "blur(120px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Mouse-following soft light */}
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,80,60,0.18) 0%, rgba(255,40,40,0.06) 35%, transparent 70%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Grain */}
      <div className="grain-overlay" aria-hidden />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col px-8 py-8 md:px-14 md:py-12">
        {/* Tagline top-left */}
        <p
          ref={taglineRef}
          className="font-mono-ui max-w-xs text-[11px] uppercase leading-relaxed tracking-[0.15em] text-white/55 md:text-xs"
        >
          Creative developer, bringing ideas
          <br />
          to life through code, design and motion.
        </p>

        {/* Name block */}
        <div className="mt-auto flex w-full items-end justify-between gap-4">
          <h1 className="flex w-full items-end justify-between gap-4 leading-[0.85]">
            <span className="overflow-hidden block">
              <span
                ref={firstNameRef}
                className="font-display-serif block text-white"
                style={{
                  fontSize: "clamp(48px, 14vw, 260px)",
                  lineHeight: 0.85,
                }}
              >
                Abdullah
              </span>
            </span>
            <span className="overflow-hidden block">
              <span
                ref={lastNameRef}
                className="font-display-serif block text-white"
                style={{
                  fontSize: "clamp(48px, 14vw, 260px)",
                  lineHeight: 0.85,
                }}
              >
                Saleem.
              </span>
            </span>
          </h1>
        </div>

        {/* Footer */}
        <footer ref={footerRef} className="mt-10 w-full">
          <div className="h-px w-full bg-white/15" />
          {/* Desktop / tablet footer */}
          <div className="font-mono-ui mt-5 hidden grid-cols-3 items-center text-[10px] uppercase tracking-[0.22em] text-white/55 sm:grid md:text-xs">
            <div className="text-left">V1.0</div>
            <div className="flex justify-center gap-5 md:gap-8">
              <a
                href="https://github.com/1abdullah874"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-ali-saleem-5b8bab298/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex justify-end gap-5 md:gap-8">
              <Link to="/info" className="transition-colors hover:text-white">
                Info
              </Link>
              <Link to="/projects" className="transition-colors hover:text-white">
                Projects
              </Link>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile footer: version + burger */}
          <div className="font-mono-ui mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/55 sm:hidden">
            <span>V1.0</span>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex flex-col items-end gap-[5px] py-1"
            >
              <span className="block h-px w-6 bg-white/80" />
              <span className="block h-px w-4 bg-white/80" />
            </button>
          </div>
        </footer>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 px-8 py-8 backdrop-blur-sm sm:hidden">
          <div className="flex items-center justify-between">
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/55">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="font-mono-ui text-[11px] uppercase tracking-[0.22em] text-white"
            >
              Close
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-7">
            <Link
              to="/info"
              onClick={() => setMenuOpen(false)}
              className="font-display-serif text-5xl text-white"
            >
              Info
            </Link>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="font-display-serif text-5xl text-white"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-display-serif text-5xl text-white"
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto flex items-center justify-between border-t border-white/15 pt-5 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-white/55">
            <a
              href="https://github.com/1abdullah874"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-ali-saleem-5b8bab298/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
