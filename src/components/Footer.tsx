import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper-300/10 bg-ink-950 text-paper-100">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-4">
          {/* <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime-acid font-display text-sm font-extrabold text-ink-950">
            VP
          </span> */}
          <div>
            <p className="font-display text-xl font-bold text-paper-50">{profile.name}</p>
            <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper-300/45">
              Full-Stack Developer · Ahmedabad
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="mr-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper-300/45">
            Elsewhere
          </p>
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/vraj_20.1/"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM17.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-paper-300/10 px-5 py-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/45 sm:px-8 lg:px-10">
        <span>© {year} {profile.name}</span>
        <span className="flex items-center gap-1.5">
          Made with <Heart size={11} className="text-flare" /> in Ahmedabad
        </span>
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 transition-colors hover:text-lime-acid"
        >
          Back to top <ArrowUp size={11} />
        </motion.button>
      </div>
    </footer>
  );
}
