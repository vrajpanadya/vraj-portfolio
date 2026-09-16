import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
// import GitHubLive from "@/components/GitHubLive";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Story from "@/components/Story";
import { Noise, Reveal } from "@/components/ui";
import { profile } from "@/lib/data";

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-cobalt-500 py-12 text-paper-50 sm:py-16">
      <div className="dot-grid-dark absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Reveal>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-paper-50/70">
            2026 · open for offers
          </p>
          <h2 className="mt-3 max-w-[20ch] font-display text-[9vw] leading-[0.92] tracking-[-0.045em] sm:text-[6vw] lg:text-[3.4vw]">
            Complex made simple
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-7 py-4 font-display text-[17px] font-bold text-lime-acid transition-transform duration-300 hover:-translate-y-1"
          >
            Get in touch
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>
      </div>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 size-64 rounded-full border-[26px] border-paper-50/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper-100 antialiased">
      <Noise />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        {/* <GitHubLive /> */}
        <Story />
        <Education />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <span className="sr-only">
        {profile.name} — {profile.role}, {profile.location}. Full-stack development portfolio built
        with React, Tailwind CSS and Framer Motion.
      </span>
    </div>
  );
}
