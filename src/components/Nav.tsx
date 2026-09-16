// // // // // // // import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// // // // // // // import { ArrowUpRight, Menu, X } from "lucide-react";
// // // // // // // import { GithubIcon } from "@/components/BrandIcons";
// // // // // // // import { useState } from "react";
// // // // // // // import { EASE, profile } from "@/lib/data";
// // // // // // // import { useActiveSection } from "@/components/ui";
// // // // // // // import { cn } from "@/utils/cn";

// // // // // // // const links = [
// // // // // // //   { id: "work", label: "Work" },
// // // // // // //   { id: "stack", label: "Stack" },
// // // // // // //   { id: "story", label: "Story" },
// // // // // // //   { id: "now", label: "Now" },
// // // // // // //   { id: "contact", label: "Contact" },
// // // // // // // ];

// // // // // // // export default function Nav() {
// // // // // // //   const { scrollYProgress, scrollY } = useScroll();
// // // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // // //   const [open, setOpen] = useState(false);
// // // // // // //   const active = useActiveSection(links.map((l) => l.id));

// // // // // // //   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

// // // // // // //   const go = (id: string) => {
// // // // // // //     setOpen(false);
// // // // // // //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* progress rail */}
// // // // // // //       <motion.div
// // // // // // //         style={{ scaleX: scrollYProgress }}
// // // // // // //         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
// // // // // // //       />

// // // // // // //       <motion.header
// // // // // // //         initial={{ y: -90, opacity: 0 }}
// // // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // // //         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
// // // // // // //         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
// // // // // // //       >
// // // // // // //         <nav
// // // // // // //           className={cn(
// // // // // // //             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
// // // // // // //             scrolled
// // // // // // //               ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
// // // // // // //               : "border-transparent bg-transparent",
// // // // // // //           )}
// // // // // // //         >
// // // // // // //           <button
// // // // // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // // // // //             className="group flex items-center gap-2.5"
// // // // // // //             aria-label="Back to top"
// // // // // // //           >
// // // // // // //             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
// // // // // // //               VP
// // // // // // //               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
// // // // // // //               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
// // // // // // //                 VP
// // // // // // //               </span>
// // // // // // //             </span>
// // // // // // //             <span className="hidden min-w-0 flex-col leading-none sm:flex">
// // // // // // //               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
// // // // // // //                 {profile.name}
// // // // // // //               </span>
// // // // // // //               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
// // // // // // //                 {profile.role}
// // // // // // //               </span>
// // // // // // //             </span>
// // // // // // //           </button>

// // // // // // //           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
// // // // // // //             {links.map((l) => (
// // // // // // //               <li key={l.id}>
// // // // // // //                 <button
// // // // // // //                   onClick={() => go(l.id)}
// // // // // // //                   className={cn(
// // // // // // //                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
// // // // // // //                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
// // // // // // //                   )}
// // // // // // //                 >
// // // // // // //                   {active === l.id && (
// // // // // // //                     <motion.span
// // // // // // //                       layoutId="nav-pill"
// // // // // // //                       className="absolute inset-0 rounded-full bg-ink-900"
// // // // // // //                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
// // // // // // //                     />
// // // // // // //                   )}
// // // // // // //                   <span className="relative z-10">{l.label}</span>
// // // // // // //                 </button>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>

// // // // // // //           <div className="flex items-center gap-2">
// // // // // // //             <a
// // // // // // //               href={profile.github}
// // // // // // //               target="_blank"
// // // // // // //               rel="noreferrer"
// // // // // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
// // // // // // //               aria-label="GitHub profile"
// // // // // // //             >
// // // // // // //               <GithubIcon className="size-4" />
// // // // // // //             </a>
// // // // // // //             <button
// // // // // // //               onClick={() => go("contact")}
// // // // // // //               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
// // // // // // //             >
// // // // // // //               Hire me
// // // // // // //               <ArrowUpRight
// // // // // // //                 size={14}
// // // // // // //                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // // // //               />
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => setOpen((o) => !o)}
// // // // // // //               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
// // // // // // //               aria-label="Toggle menu"
// // // // // // //             >
// // // // // // //               {open ? <X size={17} /> : <Menu size={17} />}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </nav>
// // // // // // //       </motion.header>

// // // // // // //       <AnimatePresence>
// // // // // // //         {open && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0 }}
// // // // // // //             animate={{ opacity: 1 }}
// // // // // // //             exit={{ opacity: 0 }}
// // // // // // //             transition={{ duration: 0.3 }}
// // // // // // //             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
// // // // // // //           >
// // // // // // //             <div className="dot-grid-dark absolute inset-0 opacity-60" />
// // // // // // //             {links.map((l, i) => (
// // // // // // //               <motion.button
// // // // // // //                 key={l.id}
// // // // // // //                 onClick={() => go(l.id)}
// // // // // // //                 initial={{ y: 40, opacity: 0 }}
// // // // // // //                 animate={{ y: 0, opacity: 1 }}
// // // // // // //                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
// // // // // // //                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
// // // // // // //               >
// // // // // // //                 {l.label}
// // // // // // //                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
// // // // // // //                   0{i + 1}
// // // // // // //                 </span>
// // // // // // //               </motion.button>
// // // // // // //             ))}
// // // // // // //             <div className="relative z-10 mt-8 flex gap-3">
// // // // // // //               <a
// // // // // // //                 href={profile.github}
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
// // // // // // //               >
// // // // // // //                 GitHub
// // // // // // //               </a>
// // // // // // //               <a
// // // // // // //                 href={profile.linkedin}
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
// // // // // // //               >
// // // // // // //                 LinkedIn
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }
// // // // // // import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// // // // // // import { ArrowUpRight, Menu, X } from "lucide-react";
// // // // // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // // // // import { useState } from "react";
// // // // // // import { EASE, profile } from "@/lib/data";
// // // // // // import { useActiveSection } from "@/components/ui";
// // // // // // import { cn } from "@/utils/cn";

// // // // // // const links = [
// // // // // //   { id: "work", label: "Work" },
// // // // // //   { id: "stack", label: "Stack" },
// // // // // //   { id: "story", label: "Story" },
// // // // // //   { id: "now  ", label: "Now" },
// // // // // //   { id: "contact", label: "Contact" },
// // // // // // ];

// // // // // // const sectionIds = links.map((link) => link.id);

// // // // // // export default function Nav() {
// // // // // //   const { scrollYProgress, scrollY } = useScroll();
// // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   const active = useActiveSection(sectionIds);

// // // // // //   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

// // // // // //   const go = (id: string) => {
// // // // // //     setOpen(false);
// // // // // //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* progress rail */}
// // // // // //       <motion.div
// // // // // //         style={{ scaleX: scrollYProgress }}
// // // // // //         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
// // // // // //       />

// // // // // //       <motion.header
// // // // // //         initial={{ y: -90, opacity: 0 }}
// // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // //         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
// // // // // //         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
// // // // // //       >
// // // // // //         <nav
// // // // // //           className={cn(
// // // // // //             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
// // // // // //             scrolled
// // // // // //               ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
// // // // // //               : "border-transparent bg-transparent",
// // // // // //           )}
// // // // // //         >
// // // // // //           <button
// // // // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // // // //             className="group flex items-center gap-2.5"
// // // // // //             aria-label="Back to top"
// // // // // //           >
// // // // // //             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
// // // // // //               VP
// // // // // //               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
// // // // // //               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
// // // // // //                 VP
// // // // // //               </span>
// // // // // //             </span>
// // // // // //             <span className="hidden min-w-0 flex-col leading-none sm:flex">
// // // // // //               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
// // // // // //                 {profile.name}
// // // // // //               </span>
// // // // // //               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
// // // // // //                 {profile.role}
// // // // // //               </span>
// // // // // //             </span>
// // // // // //           </button>

// // // // // //           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
// // // // // //             {links.map((l) => (
// // // // // //               <li key={l.id}>
// // // // // //                 <button
// // // // // //                   onClick={() => go(l.id)}
// // // // // //                   className={cn(
// // // // // //                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
// // // // // //                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
// // // // // //                   )}
// // // // // //                 >
// // // // // //                   {active === l.id && (
// // // // // //                     <motion.span
// // // // // //                       layoutId="nav-pill"
// // // // // //                       className="absolute inset-0 rounded-full bg-ink-900"
// // // // // //                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
// // // // // //                     />
// // // // // //                   )}
// // // // // //                   <span className="relative z-10">{l.label}</span>
// // // // // //                 </button>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>

// // // // // //           <div className="flex items-center gap-2">
// // // // // //             <a
// // // // // //               href={profile.github}
// // // // // //               target="_blank"
// // // // // //               rel="noreferrer"
// // // // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
// // // // // //               aria-label="GitHub profile"
// // // // // //             >
// // // // // //               <GithubIcon className="size-4" />
// // // // // //             </a>
// // // // // //             <a
// // // // // //               href={profile.linkedin}
// // // // // //               target="_blank"
// // // // // //               rel="noreferrer"
// // // // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
// // // // // //               aria-label="LinkedIn profile"
// // // // // //             >
// // // // // //               <LinkedinIcon className="size-4" />
// // // // // //             </a>
// // // // // //             <button
// // // // // //               onClick={() => go("contact")}
// // // // // //               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
// // // // // //             >
// // // // // //               Hire me
// // // // // //               <ArrowUpRight
// // // // // //                 size={14}
// // // // // //                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // // //               />
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => setOpen((o) => !o)}
// // // // // //               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
// // // // // //               aria-label="Toggle menu"
// // // // // //             >
// // // // // //               {open ? <X size={17} /> : <Menu size={17} />}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </nav>
// // // // // //       </motion.header>

// // // // // //       <AnimatePresence>
// // // // // //         {open && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 1 }}
// // // // // //             exit={{ opacity: 0 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
// // // // // //           >
// // // // // //             <div className="dot-grid-dark absolute inset-0 opacity-60" />
// // // // // //             {links.map((l, i) => (
// // // // // //               <motion.button
// // // // // //                 key={l.id}
// // // // // //                 onClick={() => go(l.id)}
// // // // // //                 initial={{ y: 40, opacity: 0 }}
// // // // // //                 animate={{ y: 0, opacity: 1 }}
// // // // // //                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
// // // // // //                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
// // // // // //               >
// // // // // //                 {l.label}
// // // // // //                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
// // // // // //                   0{i + 1}
// // // // // //                 </span>
// // // // // //               </motion.button>
// // // // // //             ))}
// // // // // //             <div className="relative z-10 mt-8 flex gap-3">
// // // // // //               <a
// // // // // //                 href={profile.github}
// // // // // //                 target="_blank"
// // // // // //                 rel="noreferrer"
// // // // // //                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
// // // // // //               >
// // // // // //                 GitHub
// // // // // //               </a>
// // // // // //               <a
// // // // // //                 href={profile.linkedin}
// // // // // //                 target="_blank"
// // // // // //                 rel="noreferrer"
// // // // // //                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
// // // // // //               >
// // // // // //                 LinkedIn
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   );
// // // // // // }
// // // // // import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// // // // // import { ArrowUpRight, Menu, X } from "lucide-react";
// // // // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // // // import { useState } from "react";
// // // // // import { EASE, profile } from "@/lib/data";
// // // // // import { useActiveSection } from "@/components/ui";
// // // // // import { cn } from "@/utils/cn";

// // // // // const links = [
// // // // //   { id: "work", label: "Work" },
// // // // //   { id: "stack", label: "Stack" },
// // // // //   { id: "story", label: "Story" },
// // // // //   { id: "education", label: "Education" },
// // // // //   { id: "contact", label: "Contact" },
// // // // // ];

// // // // // const sectionIds = links.map((link) => link.id);

// // // // // export default function Nav() {
// // // // //   const { scrollYProgress, scrollY } = useScroll();
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const [open, setOpen] = useState(false);
// // // // //   const active = useActiveSection(sectionIds);

// // // // //   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

// // // // //   const go = (id: string) => {
// // // // //     setOpen(false);
// // // // //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {/* progress rail */}
// // // // //       <motion.div
// // // // //         style={{ scaleX: scrollYProgress }}
// // // // //         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
// // // // //       />

// // // // //       <motion.header
// // // // //         initial={{ y: -90, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
// // // // //         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
// // // // //       >
// // // // //         <nav
// // // // //           className={cn(
// // // // //             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 sm:gap-4 sm:px-4",
// // // // //             scrolled
// // // // //               ? "border-white/70 bg-paper-50/78 shadow-[0_14px_45px_-20px_rgba(12,16,16,0.42),inset_0_1px_0_rgba(255,255,255,0.9)]"
// // // // //               : "border-white/55 bg-paper-50/48 shadow-[0_10px_35px_-24px_rgba(12,16,16,0.35),inset_0_1px_0_rgba(255,255,255,0.75)]",
// // // // //           )}
// // // // //         >
// // // // //           <button
// // // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // // //             className="group flex items-center gap-2.5"
// // // // //             aria-label="Back to top"
// // // // //           >
// // // // //             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
// // // // //               VP
// // // // //               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
// // // // //               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
// // // // //                 VP
// // // // //               </span>
// // // // //             </span>
// // // // //             <span className="hidden min-w-0 flex-col leading-none sm:flex">
// // // // //               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
// // // // //                 {profile.name}
// // // // //               </span>
// // // // //               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
// // // // //                 {profile.role}
// // // // //               </span>
// // // // //             </span>
// // // // //           </button>

// // // // //           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
// // // // //             {links.map((l) => (
// // // // //               <li key={l.id}>
// // // // //                 <button
// // // // //                   onClick={() => go(l.id)}
// // // // //                   className={cn(
// // // // //                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
// // // // //                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
// // // // //                   )}
// // // // //                 >
// // // // //                   {active === l.id && (
// // // // //                     <motion.span
// // // // //                       layoutId="nav-pill"
// // // // //                       className="absolute inset-0 rounded-full bg-ink-900"
// // // // //                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
// // // // //                     />
// // // // //                   )}
// // // // //                   <span className="relative z-10">{l.label}</span>
// // // // //                 </button>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>

// // // // //           <div className="flex items-center gap-2">
// // // // //             <a
// // // // //               href={profile.github}
// // // // //               target="_blank"
// // // // //               rel="noreferrer"
// // // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
// // // // //               aria-label="GitHub profile"
// // // // //             >
// // // // //               <GithubIcon className="size-4" />
// // // // //             </a>
// // // // //             <a
// // // // //               href={profile.linkedin}
// // // // //               target="_blank"
// // // // //               rel="noreferrer"
// // // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
// // // // //               aria-label="LinkedIn profile"
// // // // //             >
// // // // //               <LinkedinIcon className="size-4" />
// // // // //             </a>
// // // // //             <button
// // // // //               onClick={() => go("contact")}
// // // // //               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
// // // // //             >
// // // // //               Hire me
// // // // //               <ArrowUpRight
// // // // //                 size={14}
// // // // //                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // //               />
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setOpen((o) => !o)}
// // // // //               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
// // // // //               aria-label="Toggle menu"
// // // // //             >
// // // // //               {open ? <X size={17} /> : <Menu size={17} />}
// // // // //             </button>
// // // // //           </div>
// // // // //         </nav>
// // // // //       </motion.header>

// // // // //       <AnimatePresence>
// // // // //         {open && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
// // // // //           >
// // // // //             <div className="dot-grid-dark absolute inset-0 opacity-60" />
// // // // //             {links.map((l, i) => (
// // // // //               <motion.button
// // // // //                 key={l.id}
// // // // //                 onClick={() => go(l.id)}
// // // // //                 initial={{ y: 40, opacity: 0 }}
// // // // //                 animate={{ y: 0, opacity: 1 }}
// // // // //                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
// // // // //                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
// // // // //               >
// // // // //                 {l.label}
// // // // //                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
// // // // //                   0{i + 1}
// // // // //                 </span>
// // // // //               </motion.button>
// // // // //             ))}
// // // // //             <div className="relative z-10 mt-8 flex gap-3">
// // // // //               <a
// // // // //                 href={profile.github}
// // // // //                 target="_blank"
// // // // //                 rel="noreferrer"
// // // // //                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
// // // // //               >
// // // // //                 GitHub
// // // // //               </a>
// // // // //               <a
// // // // //                 href={profile.linkedin}
// // // // //                 target="_blank"
// // // // //                 rel="noreferrer"
// // // // //                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
// // // // //               >
// // // // //                 LinkedIn
// // // // //               </a>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </>
// // // // //   );
// // // // // }
// // // // import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// // // // import { ArrowUpRight, Menu, X } from "lucide-react";
// // // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // // import { useState } from "react";
// // // // import { EASE, profile } from "@/lib/data";
// // // // import { useActiveSection } from "@/components/ui";
// // // // import { cn } from "@/utils/cn";

// // // // const links = [
// // // //   { id: "work", label: "Work" },
// // // //   { id: "stack", label: "Stack" },
// // // //   { id: "story", label: "Profile" },
// // // //   { id: "education", label: "Education" },
// // // //   { id: "contact", label: "Contact" },
// // // // ];

// // // // const sectionIds = links.map((link) => link.id);

// // // // export default function Nav() {
// // // //   const { scrollYProgress, scrollY } = useScroll();
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [open, setOpen] = useState(false);
// // // //   const active = useActiveSection(sectionIds);

// // // //   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

// // // //   const go = (id: string) => {
// // // //     setOpen(false);
// // // //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* progress rail */}
// // // //       <motion.div
// // // //         style={{ scaleX: scrollYProgress }}
// // // //         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
// // // //       />

// // // //       <motion.header
// // // //         initial={{ y: -90, opacity: 0 }}
// // // //         animate={{ y: 0, opacity: 1 }}
// // // //         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
// // // //         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
// // // //       >
// // // //         <nav
// // // //           className={cn(
// // // //             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
// // // //             scrolled
// // // //               ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
// // // //               : "border-transparent bg-transparent",
// // // //           )}
// // // //         >
// // // //           <button
// // // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // //             className="group flex items-center gap-2.5"
// // // //             aria-label="Back to top"
// // // //           >
// // // //             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
// // // //               VP
// // // //               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
// // // //               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
// // // //                 VP
// // // //               </span>
// // // //             </span>
// // // //             <span className="hidden min-w-0 flex-col leading-none sm:flex">
// // // //               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
// // // //                 {profile.name}
// // // //               </span>
// // // //               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
// // // //                 {profile.role}
// // // //               </span>
// // // //             </span>
// // // //           </button>

// // // //           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
// // // //             {links.map((l) => (
// // // //               <li key={l.id}>
// // // //                 <button
// // // //                   onClick={() => go(l.id)}
// // // //                   className={cn(
// // // //                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
// // // //                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
// // // //                   )}
// // // //                 >
// // // //                   {active === l.id && (
// // // //                     <motion.span
// // // //                       layoutId="nav-pill"
// // // //                       className="absolute inset-0 rounded-full bg-ink-900"
// // // //                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
// // // //                     />
// // // //                   )}
// // // //                   <span className="relative z-10">{l.label}</span>
// // // //                 </button>
// // // //               </li>
// // // //             ))}
// // // //           </ul>

// // // //           <div className="flex items-center gap-2">
// // // //             <a
// // // //               href={profile.github}
// // // //               target="_blank"
// // // //               rel="noreferrer"
// // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
// // // //               aria-label="GitHub profile"
// // // //             >
// // // //               <GithubIcon className="size-4" />
// // // //             </a>
// // // //             <a
// // // //               href={profile.linkedin}
// // // //               target="_blank"
// // // //               rel="noreferrer"
// // // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
// // // //               aria-label="LinkedIn profile"
// // // //             >
// // // //               <LinkedinIcon className="size-4" />
// // // //             </a>
// // // //             <button
// // // //               onClick={() => go("contact")}
// // // //               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
// // // //             >
// // // //               Hire me
// // // //               <ArrowUpRight
// // // //                 size={14}
// // // //                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // //               />
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setOpen((o) => !o)}
// // // //               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
// // // //               aria-label="Toggle menu"
// // // //             >
// // // //               {open ? <X size={17} /> : <Menu size={17} />}
// // // //             </button>
// // // //           </div>
// // // //         </nav>
// // // //       </motion.header>

// // // //       <AnimatePresence>
// // // //         {open && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
// // // //           >
// // // //             <div className="dot-grid-dark absolute inset-0 opacity-60" />
// // // //             {links.map((l, i) => (
// // // //               <motion.button
// // // //                 key={l.id}
// // // //                 onClick={() => go(l.id)}
// // // //                 initial={{ y: 40, opacity: 0 }}
// // // //                 animate={{ y: 0, opacity: 1 }}
// // // //                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
// // // //                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
// // // //               >
// // // //                 {l.label}
// // // //                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
// // // //                   0{i + 1}
// // // //                 </span>
// // // //               </motion.button>
// // // //             ))}
// // // //             <div className="relative z-10 mt-8 flex gap-3">
// // // //               <a
// // // //                 href={profile.github}
// // // //                 target="_blank"
// // // //                 rel="noreferrer"
// // // //                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
// // // //               >
// // // //                 GitHub
// // // //               </a>
// // // //               <a
// // // //                 href={profile.linkedin}
// // // //                 target="_blank"
// // // //                 rel="noreferrer"
// // // //                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
// // // //               >
// // // //                 LinkedIn
// // // //               </a>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   );
// // // // }
// // //   import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// // // import { ArrowUpRight, Menu, X } from "lucide-react";
// // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // import { useState } from "react";
// // // import { EASE, profile } from "@/lib/data";
// // // import { useActiveSection } from "@/components/ui";
// // // import { cn } from "@/utils/cn";

// // // const links = [
// // //   { id: "work", label: "Projects" },
// // //   { id: "stack", label: "Stack" },
// // //   { id: "story", label: "Story" },
// // //   { id: "education", label: "Education" },
// // //   { id: "contact", label: "Contact" },
// // // ];

// // // const sectionIds = links.map((link) => link.id);

// // // export default function Nav() {
// // //   const { scrollYProgress, scrollY } = useScroll();
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [open, setOpen] = useState(false);
// // //   const active = useActiveSection(sectionIds);

// // //   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

// // //   const go = (id: string) => {
// // //     setOpen(false);
// // //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// // //   };

// // //   return (
// // //     <>
// // //       {/* progress rail */}
// // //       <motion.div
// // //         style={{ scaleX: scrollYProgress }}
// // //         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
// // //       />

// // //       <motion.header
// // //         initial={{ y: -90, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
// // //         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
// // //       >
// // //         <nav
// // //           className={cn(
// // //             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
// // //             scrolled
// // //               ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
// // //               : "border-transparent bg-transparent",
// // //           )}
// // //         >
// // //           <button
// // //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // //             className="group flex items-center gap-2.5"
// // //             aria-label="Back to top"
// // //           >
// // //             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
// // //               VP
// // //               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
// // //               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
// // //                 VP
// // //               </span>
// // //             </span>
// // //             <span className="hidden min-w-0 flex-col leading-none sm:flex">
// // //               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
// // //                 {profile.name}
// // //               </span>
// // //               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
// // //                 {profile.role}
// // //               </span>
// // //             </span>
// // //           </button>

// // //           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
// // //             {links.map((l) => (
// // //               <li key={l.id}>
// // //                 <button
// // //                   onClick={() => go(l.id)}
// // //                   className={cn(
// // //                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
// // //                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
// // //                   )}
// // //                 >
// // //                   {active === l.id && (
// // //                     <motion.span
// // //                       layoutId="nav-pill"
// // //                       className="absolute inset-0 rounded-full bg-ink-900"
// // //                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
// // //                     />
// // //                   )}
// // //                   <span className="relative z-10">{l.label}</span>
// // //                 </button>
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           <div className="flex items-center gap-2">
// // //             <a
// // //               href={profile.github}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
// // //               aria-label="GitHub profile"
// // //             >
// // //               <GithubIcon className="size-4" />
// // //             </a>
// // //             <a
// // //               href={profile.linkedin}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
// // //               aria-label="LinkedIn profile"
// // //             >
// // //               <LinkedinIcon className="size-4" />
// // //             </a>
// // //             <button
// // //               onClick={() => go("contact")}
// // //               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
// // //             >
// // //               Hire me
// // //               <ArrowUpRight
// // //                 size={14}
// // //                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // //               />
// // //             </button>
// // //             <button
// // //               onClick={() => setOpen((o) => !o)}
// // //               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
// // //               aria-label="Toggle menu"
// // //             >
// // //               {open ? <X size={17} /> : <Menu size={17} />}
// // //             </button>
// // //           </div>
// // //         </nav>
// // //       </motion.header>

// // //       <AnimatePresence>
// // //         {open && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
// // //           >
// // //             <div className="dot-grid-dark absolute inset-0 opacity-60" />
// // //             {links.map((l, i) => (
// // //               <motion.button
// // //                 key={l.id}
// // //                 onClick={() => go(l.id)}
// // //                 initial={{ y: 40, opacity: 0 }}
// // //                 animate={{ y: 0, opacity: 1 }}
// // //                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
// // //                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
// // //               >
// // //                 {l.label}
// // //                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
// // //                   0{i + 1}
// // //                 </span>
// // //               </motion.button>
// // //             ))}
// // //             <div className="relative z-10 mt-8 flex gap-3">
// // //               <a
// // //                 href={profile.github}
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
// // //               >
// // //                 GitHub
// // //               </a>
// // //               <a
// // //                 href={profile.linkedin}
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
// // //               >
// // //                 LinkedIn
// // //               </a>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // }
// // import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// // import { ArrowUpRight, Menu, X } from "lucide-react";
// // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // import { useState } from "react";
// // import { EASE, profile } from "@/lib/data";
// // import { useActiveSection } from "@/components/ui";
// // import { cn } from "@/utils/cn";

// // const links = [
// //   { id: "work", label: "Projects" },
// //   { id: "skills", label: "Skills" },
// //   { id: "story", label: "Story" },
// //   { id: "education", label: "Education" },
// //   { id: "contact", label: "Contact" },
// // ];

// // const sectionIds = links.map((link) => link.id);

// // export default function Nav() {
// //   const { scrollYProgress, scrollY } = useScroll();
// //   const [scrolled, setScrolled] = useState(false);
// //   const [open, setOpen] = useState(false);
// //   const active = useActiveSection(sectionIds);

// //   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

// //   const go = (id: string) => {
// //     setOpen(false);
// //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
// //   };

// //   return (
// //     <>
// //       {/* progress rail */}
// //       <motion.div
// //         style={{ scaleX: scrollYProgress }}
// //         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
// //       />

// //       <motion.header
// //         initial={{ y: -90, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
// //         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
// //       >
// //         <nav
// //           className={cn(
// //             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
// //             scrolled
// //               ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
// //               : "border-transparent bg-transparent",
// //           )}
// //         >
// //           <button
// //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// //             className="group flex items-center gap-2.5"
// //             aria-label="Back to top"
// //           >
// //             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
// //               VP
// //               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
// //               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
// //                 VP
// //               </span>
// //             </span>
// //             <span className="hidden min-w-0 flex-col leading-none sm:flex">
// //               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
// //                 {profile.name}
// //               </span>
// //               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
// //                 {profile.role}
// //               </span>
// //             </span>
// //           </button>

// //           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
// //             {links.map((l) => (
// //               <li key={l.id}>
// //                 <button
// //                   onClick={() => go(l.id)}
// //                   className={cn(
// //                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
// //                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
// //                   )}
// //                 >
// //                   {active === l.id && (
// //                     <motion.span
// //                       layoutId="nav-pill"
// //                       className="absolute inset-0 rounded-full bg-ink-900"
// //                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
// //                     />
// //                   )}
// //                   <span className="relative z-10">{l.label}</span>
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="flex items-center gap-2">
// //             <a
// //               href={profile.github}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
// //               aria-label="GitHub profile"
// //             >
// //               <GithubIcon className="size-4" />
// //             </a>
// //             <a
// //               href={profile.linkedin}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
// //               aria-label="LinkedIn profile"
// //             >
// //               <LinkedinIcon className="size-4" />
// //             </a>
// //             <button
// //               onClick={() => go("contact")}
// //               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
// //             >
// //               Hire me
// //               <ArrowUpRight
// //                 size={14}
// //                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// //               />
// //             </button>
// //             <button
// //               onClick={() => setOpen((o) => !o)}
// //               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
// //               aria-label="Toggle menu"
// //             >
// //               {open ? <X size={17} /> : <Menu size={17} />}
// //             </button>
// //           </div>
// //         </nav>
// //       </motion.header>

// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.3 }}
// //             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
// //           >
// //             <div className="dot-grid-dark absolute inset-0 opacity-60" />
// //             {links.map((l, i) => (
// //               <motion.button
// //                 key={l.id}
// //                 onClick={() => go(l.id)}
// //                 initial={{ y: 40, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
// //                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
// //               >
// //                 {l.label}
// //                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
// //                   0{i + 1}
// //                 </span>
// //               </motion.button>
// //             ))}
// //             <div className="relative z-10 mt-8 flex gap-3">
// //               <a
// //                 href={profile.github}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
// //               >
// //                 GitHub
// //               </a>
// //               <a
// //                 href={profile.linkedin}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
// //               >
// //                 LinkedIn
// //               </a>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }
// import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// import { useState } from "react";
// import { EASE, profile } from "@/lib/data";
// import { useActiveSection } from "@/components/ui";
// import { cn } from "@/utils/cn";

// const links = [
//   { id: "work", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "profile", label: "Profile" },
//   { id: "education", label: "Education" },
//   { id: "contact", label: "Contact" },
// ];

// const sectionIds = links.map((link) => link.id);

// export default function Nav() {
//   const { scrollYProgress, scrollY } = useScroll();
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const active = useActiveSection(sectionIds);

//   useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

//   const go = (id: string) => {
//     setOpen(false);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <>
//       {/* progress rail */}
//       <motion.div
//         style={{ scaleX: scrollYProgress }}
//         className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
//       />

//       <motion.header
//         initial={{ y: -90, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
//         className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
//       >
//         <nav
//           className={cn(
//             "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
//             scrolled
//               ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
//               : "border-transparent bg-transparent",
//           )}
//         >
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="group flex items-center gap-2.5"
//             aria-label="Back to top"
//           >
//             <span className="relative grid size-9 place-items-center overflow-hidden rounded-[12px] bg-ink-900 font-display text-[13px] font-extrabold text-lime-acid">
//               VP
//               <span className="absolute inset-0 -translate-x-full bg-cobalt-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
//               <span className="absolute inset-0 grid place-items-center font-display text-[13px] font-extrabold text-paper-50 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
//                 VP
//               </span>
//             </span>
//             <span className="hidden min-w-0 flex-col leading-none sm:flex">
//               <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
//                 {profile.name}
//               </span>
//               <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-500">
//                 {profile.role}
//               </span>
//             </span>
//           </button>

//           <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
//             {links.map((l) => (
//               <li key={l.id}>
//                 <button
//                   onClick={() => go(l.id)}
//                   className={cn(
//                     "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
//                     active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
//                   )}
//                 >
//                   {active === l.id && (
//                     <motion.span
//                       layoutId="nav-pill"
//                       className="absolute inset-0 rounded-full bg-ink-900"
//                       transition={{ type: "spring", stiffness: 380, damping: 32 }}
//                     />
//                   )}
//                   <span className="relative z-10">{l.label}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-2">
//             <a
//               href={profile.github}
//               target="_blank"
//               rel="noreferrer"
//               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
//               aria-label="GitHub profile"
//             >
//               <GithubIcon className="size-4" />
//             </a>
//             <a
//               href={profile.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
//               aria-label="LinkedIn profile"
//             >
//               <LinkedinIcon className="size-4" />
//             </a>
//             <button
//               onClick={() => go("contact")}
//               className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
//             >
//               Hire me
//               <ArrowUpRight
//                 size={14}
//                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </button>
//             <button
//               onClick={() => setOpen((o) => !o)}
//               className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
//               aria-label="Toggle menu"
//             >
//               {open ? <X size={17} /> : <Menu size={17} />}
//             </button>
//           </div>
//         </nav>
//       </motion.header>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-[64] flex flex-col justify-center bg-ink-900 px-6 md:hidden"
//           >
//             <div className="dot-grid-dark absolute inset-0 opacity-60" />
//             {links.map((l, i) => (
//               <motion.button
//                 key={l.id}
//                 onClick={() => go(l.id)}
//                 initial={{ y: 40, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
//                 className="relative z-10 flex items-baseline justify-between border-b border-paper-300/12 py-4 text-left font-display text-[13vw] font-bold tracking-tight text-paper-100"
//               >
//                 {l.label}
//                 <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
//                   0{i + 1}
//                 </span>
//               </motion.button>
//             ))}
//             <div className="relative z-10 mt-8 flex gap-3">
//               <a
//                 href={profile.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
//               >
//                 GitHub
//               </a>
//               <a
//                 href={profile.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
//               >
//                 LinkedIn
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { useState } from "react";
import { EASE, profile } from "@/lib/data";
import { useActiveSection } from "@/components/ui";
import { cn } from "@/utils/cn";

const links = [
  { id: "home", label: "Home" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const sectionIds = links.map((link) => link.id);

export default function Nav() {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const go = (id: string) => {
  setOpen(false);

  const section = document.getElementById(id);
  if (!section) return;

  const navbarOffset = 88;
  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    navbarOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

  return (
    <>
      {/* progress rail */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cobalt-500 via-teal-glow to-lime-acid"
      />

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={cn(
            "mx-auto flex w-full min-w-0 max-w-[1800px] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-4",
            scrolled
              ? "border-ink-900/12 bg-paper-50/85 shadow-[0_10px_40px_-24px_rgba(12,16,16,0.5)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="flex min-w-0 flex-col leading-none">
              <span
                className={cn(
                  "font-display text-[15px] font-bold tracking-tight transition-colors duration-300",
                  scrolled ? "text-ink-900" : "text-paper-50",
                )}
              >
                {profile.name}
              </span>
              <span
                className={cn(
                  "mt-0.5 hidden font-mono text-[9.5px] uppercase tracking-[0.22em] transition-colors duration-300 sm:block",
                  scrolled ? "text-ink-500" : "text-paper-300/65",
                )}
              >
                {profile.role}
              </span>
            </span>
          </button>

          <ul className="hidden items-center gap-0.5 rounded-full border border-ink-900/8 bg-paper-100/70 p-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                    active === l.id ? "text-paper-50" : "text-ink-500 hover:text-ink-900",
                  )}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink-900"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-lime-acid sm:grid"
              aria-label="GitHub profile"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden size-9 place-items-center rounded-full border border-ink-900/12 text-ink-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white sm:grid"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <button
              onClick={() => go("contact")}
              className="group flex items-center gap-1.5 rounded-full bg-cobalt-500 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-ink-900"
            >
              Hire me
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid size-9 place-items-center rounded-full border border-ink-900/12 text-ink-900 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[64] flex flex-col justify-start overflow-y-auto bg-ink-900 px-6 pb-8 pt-24 md:hidden"
          >
            <div className="dot-grid-dark absolute inset-0 opacity-60" />
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                onClick={() => go(l.id)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
                className="relative z-10 flex shrink-0 items-baseline justify-between border-b border-paper-300/12 py-3 text-left font-display text-[clamp(2.2rem,11vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-paper-100"
              >
                {l.label}
                <span className="font-mono text-[11px] tracking-[0.3em] text-lime-acid">
                  0{i + 1}
                </span>
              </motion.button>
            ))}
            <div className="relative z-10 mt-8 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-paper-300/25 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-lime-acid py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-900"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
