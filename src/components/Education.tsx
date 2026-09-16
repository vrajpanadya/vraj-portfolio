// // // // // import { motion, useScroll, useSpring } from "framer-motion";
// // // // // import { BookOpen, Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
// // // // // import { useRef } from "react";
// // // // // import { EASE, education, timeline } from "@/lib/data";
// // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // import { cn } from "@/utils/cn";

// // // // // export default function Education() {
// // // // //   const railRef = useRef<HTMLDivElement>(null);
// // // // //   const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 55%"] });
// // // // //   const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

// // // // //   return (
// // // // //     <section id="now" className="relative overflow-hidden bg-paper-50 py-20 sm:py-28">
// // // // //       <div className="grid-lines absolute inset-0 opacity-60" />
// // // // //       <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-cobalt-300/12 blur-[100px]" />

// // // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// // // // //           <div>
// // // // //             <SectionLabel index="04" label="Now & next" />
// // // // //             <h2 className="mt-5 max-w-[18ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[5.6vw]">
// // // // //               Still a student, <span className="text-cobalt-500">already shipping.</span>
// // // // //             </h2>
// // // // //           </div>
// // // // //           <Reveal delay={0.1}>
// // // // //             <div className="flex flex-wrap gap-2">
// // // // //               {[
// // // // //                 { k: "Studying", v: "MCA · SSIT" },
// // // // //                 { k: "Building", v: "React + MongoDB" },
// // // // //                 { k: "Reading", v: "System design" },
// // // // //               ].map((c) => (
// // // // //                 <span
// // // // //                   key={c.k}
// // // // //                   className="group flex items-center gap-2 rounded-full border border-ink-900/12 bg-paper-100 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-600 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
// // // // //                 >
// // // // //                   <Sparkles size={11} className="text-lime-deep" />
// // // // //                   {c.k}
// // // // //                   <span className="text-ink-900/40 group-hover:text-lime-acid">/</span>
// // // // //                   <span className="text-ink-900 group-hover:text-paper-50">{c.v}</span>
// // // // //                 </span>
// // // // //               ))}
// // // // //             </div>
// // // // //           </Reveal>
// // // // //         </div>

// // // // //         <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
// // // // //           {/* education */}
// // // // //           <div>
// // // // //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // //               Education
// // // // //             </p>
// // // // //             <div className="mt-4 space-y-3">
// // // // //               {education.map((e, i) => (
// // // // //                 <motion.article
// // // // //                   key={e.title}
// // // // //                   initial={{ opacity: 0, y: 26 }}
// // // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // // //                   viewport={{ once: true, margin: "-10%" }}
// // // // //                   transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
// // // // //                   className={cn(
// // // // //                     "group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6",
// // // // //                     e.live
// // // // //                       ? "border-ink-900 bg-ink-900 text-paper-100"
// // // // //                       : "border-ink-900/12 bg-paper-100 hover:border-ink-900/40",
// // // // //                   )}
// // // // //                 >
// // // // //                   <span
// // // // //                     className={cn(
// // // // //                       "absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100",
// // // // //                       e.live ? "bg-lime-acid" : "bg-cobalt-500",
// // // // //                     )}
// // // // //                   />
// // // // //                   <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
// // // // //                     <span
// // // // //                       className={cn(
// // // // //                         "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
// // // // //                         e.live ? "bg-lime-acid text-ink-900" : "bg-ink-900/[0.06] text-ink-600",
// // // // //                       )}
// // // // //                     >
// // // // //                       {e.live && (
// // // // //                         <span className="relative flex size-1.5">
// // // // //                           <span className="absolute size-full animate-ping rounded-full bg-ink-900/60" />
// // // // //                           <span className="relative size-1.5 rounded-full bg-ink-900" />
// // // // //                         </span>
// // // // //                       )}
// // // // //                       {e.period}
// // // // //                     </span>
// // // // //                     <span
// // // // //                       className={cn(
// // // // //                         "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]",
// // // // //                         e.live ? "text-paper-300/60" : "text-ink-500",
// // // // //                       )}
// // // // //                     >
// // // // //                       <MapPin size={10} /> {e.place}
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   <h3
// // // // //                     className={cn(
// // // // //                       "mt-3 font-display text-[23px] leading-[1.05] tracking-tight sm:text-[27px]",
// // // // //                       e.live ? "text-paper-50" : "text-ink-900",
// // // // //                     )}
// // // // //                   >
// // // // //                     {e.title}
// // // // //                   </h3>
// // // // //                   <p
// // // // //                     className={cn(
// // // // //                       "mt-1.5 flex items-center gap-1.5 text-[14px] font-medium",
// // // // //                       e.live ? "text-lime-acid" : "text-cobalt-600",
// // // // //                     )}
// // // // //                   >
// // // // //                     <Building2 size={14} /> {e.school}
// // // // //                   </p>
// // // // //                   <p
// // // // //                     className={cn(
// // // // //                       "mt-3 max-w-[60ch] text-[13.5px] leading-relaxed",
// // // // //                       e.live ? "text-paper-200/70" : "text-ink-600",
// // // // //                     )}
// // // // //                   >
// // // // //                     {e.detail}
// // // // //                   </p>

// // // // //                   <ul className="mt-4 flex flex-wrap gap-1.5">
// // // // //                     {e.tags.map((t) => (
// // // // //                       <li
// // // // //                         key={t}
// // // // //                         className={cn(
// // // // //                           "rounded-md px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // // //                           e.live
// // // // //                             ? "bg-paper-50/[0.08] text-paper-200"
// // // // //                             : "bg-ink-900/[0.05] text-ink-500",
// // // // //                         )}
// // // // //                       >
// // // // //                         {t}
// // // // //                       </li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </motion.article>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* journey timeline */}
// // // // //           <div ref={railRef} className="relative">
// // // // //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // //               The path so far
// // // // //             </p>
// // // // //             <div className="relative mt-5 pl-8">
// // // // //               <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink-900/12" />
// // // // //               <motion.div
// // // // //                 style={{ scaleY: lineScale }}
// // // // //                 className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-cobalt-500 via-teal-glow to-lime-acid"
// // // // //               />
// // // // //               {timeline.map((t, i) => (
// // // // //                 <motion.div
// // // // //                   key={t.year}
// // // // //                   initial={{ opacity: 0, x: 22 }}
// // // // //                   whileInView={{ opacity: 1, x: 0 }}
// // // // //                   viewport={{ once: true, margin: "-12%" }}
// // // // //                   transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
// // // // //                   className="group relative pb-7 last:pb-0"
// // // // //                 >
// // // // //                   <span className="absolute -left-8 top-1 grid size-[15px] place-items-center rounded-full border border-ink-900/20 bg-paper-50 transition-colors duration-300 group-hover:border-cobalt-500">
// // // // //                     <span className="size-[7px] rounded-full bg-ink-900/30 transition-colors duration-300 group-hover:bg-cobalt-500" />
// // // // //                   </span>
// // // // //                   <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
// // // // //                     <CalendarDays size={11} /> {t.year}
// // // // //                   </p>
// // // // //                   <h3 className="mt-1.5 font-display text-[19px] font-bold tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600">
// // // // //                     {t.title}
// // // // //                   </h3>
// // // // //                   <p className="mt-1 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-600">
// // // // //                     {t.copy}
// // // // //                   </p>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="mt-6 flex items-start gap-3 rounded-[20px] border border-ink-900/12 bg-paper-100 p-4">
// // // // //               <BookOpen size={18} className="mt-0.5 shrink-0 text-cobalt-500" />
// // // // //               <p className="text-[13.5px] leading-relaxed text-ink-600">
// // // // //                 <span className="font-semibold text-ink-900">Degree in progress, commits too.</span>{" "}
// // // // //                 Everything on this page was learned between a lab bench, a client call and a
// // // // //                 late-night deploy.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { motion, useScroll, useSpring } from "framer-motion";
// // // // import { BookOpen, Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
// // // // import { useRef } from "react";
// // // // import { EASE, education, timeline } from "@/lib/data";
// // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // import { cn } from "@/utils/cn";

// // // // export default function Education() {
// // // //   const railRef = useRef<HTMLDivElement>(null);
// // // //   const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 55%"] });
// // // //   const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

// // // //   return (
// // // //     <section id="education" className="relative overflow-hidden bg-paper-50 py-20 sm:py-28">
// // // //       <div className="grid-lines absolute inset-0 opacity-60" />
// // // //       <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-cobalt-300/12 blur-[100px]" />

// // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// // // //           <div>
// // // //             <SectionLabel index="04" label="Now & next" />
// // // //             <h2 className="mt-5 max-w-[18ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[5.6vw]">
// // // //               <span className="text-cobalt-500">Education</span>
// // // //             </h2>
// // // //           </div>
// // // //           <Reveal delay={0.1}>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {[
// // // //                 { k: "Studying", v: "MCA · SSIT" },
// // // //                 { k: "Building", v: "React + MongoDB" },
// // // //                 { k: "Reading", v: "System design" },
// // // //               ].map((c) => (
// // // //                 <span
// // // //                   key={c.k}
// // // //                   className="group flex items-center gap-2 rounded-full border border-ink-900/12 bg-paper-100 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-600 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
// // // //                 >
// // // //                   <Sparkles size={11} className="text-lime-deep" />
// // // //                   {c.k}
// // // //                   <span className="text-ink-900/40 group-hover:text-lime-acid">/</span>
// // // //                   <span className="text-ink-900 group-hover:text-paper-50">{c.v}</span>
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </Reveal>
// // // //         </div>

// // // //         <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
// // // //           {/* education */}
// // // //           <div>
// // // //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // //               Education
// // // //             </p>
// // // //             <div className="mt-4 space-y-3">
// // // //               {education.map((e, i) => (
// // // //                 <motion.article
// // // //                   key={e.title}
// // // //                   initial={{ opacity: 0, y: 26 }}
// // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // //                   viewport={{ once: true, margin: "-10%" }}
// // // //                   transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
// // // //                   className={cn(
// // // //                     "group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6",
// // // //                     e.live
// // // //                       ? "border-ink-900 bg-ink-900 text-paper-100"
// // // //                       : "border-ink-900/12 bg-paper-100 hover:border-ink-900/40",
// // // //                   )}
// // // //                 >
// // // //                   <span
// // // //                     className={cn(
// // // //                       "absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100",
// // // //                       e.live ? "bg-lime-acid" : "bg-cobalt-500",
// // // //                     )}
// // // //                   />
// // // //                   <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
// // // //                     <span
// // // //                       className={cn(
// // // //                         "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
// // // //                         e.live ? "bg-lime-acid text-ink-900" : "bg-ink-900/[0.06] text-ink-600",
// // // //                       )}
// // // //                     >
// // // //                       {e.live && (
// // // //                         <span className="relative flex size-1.5">
// // // //                           <span className="absolute size-full animate-ping rounded-full bg-ink-900/60" />
// // // //                           <span className="relative size-1.5 rounded-full bg-ink-900" />
// // // //                         </span>
// // // //                       )}
// // // //                       {e.period}
// // // //                     </span>
// // // //                     <span
// // // //                       className={cn(
// // // //                         "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]",
// // // //                         e.live ? "text-paper-300/60" : "text-ink-500",
// // // //                       )}
// // // //                     >
// // // //                       <MapPin size={10} /> {e.place}
// // // //                     </span>
// // // //                   </div>

// // // //                   <h3
// // // //                     className={cn(
// // // //                       "mt-3 font-display text-[23px] leading-[1.05] tracking-tight sm:text-[27px]",
// // // //                       e.live ? "text-paper-50" : "text-ink-900",
// // // //                     )}
// // // //                   >
// // // //                     {e.title}
// // // //                   </h3>
// // // //                   <p
// // // //                     className={cn(
// // // //                       "mt-1.5 flex items-center gap-1.5 text-[14px] font-medium",
// // // //                       e.live ? "text-lime-acid" : "text-cobalt-600",
// // // //                     )}
// // // //                   >
// // // //                     <Building2 size={14} /> {e.school}
// // // //                   </p>
// // // //                   <p
// // // //                     className={cn(
// // // //                       "mt-3 max-w-[60ch] text-[13.5px] leading-relaxed",
// // // //                       e.live ? "text-paper-200/70" : "text-ink-600",
// // // //                     )}
// // // //                   >
// // // //                     {e.detail}
// // // //                   </p>

// // // //                   <ul className="mt-4 flex flex-wrap gap-1.5">
// // // //                     {e.tags.map((t) => (
// // // //                       <li
// // // //                         key={t}
// // // //                         className={cn(
// // // //                           "rounded-md px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // //                           e.live
// // // //                             ? "bg-paper-50/[0.08] text-paper-200"
// // // //                             : "bg-ink-900/[0.05] text-ink-500",
// // // //                         )}
// // // //                       >
// // // //                         {t}
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </motion.article>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* journey timeline */}
// // // //           <div ref={railRef} className="relative">
// // // //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // //               The path so far
// // // //             </p>
// // // //             <div className="relative mt-5 pl-8">
// // // //               <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink-900/12" />
// // // //               <motion.div
// // // //                 style={{ scaleY: lineScale }}
// // // //                 className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-cobalt-500 via-teal-glow to-lime-acid"
// // // //               />
// // // //               {timeline.map((t, i) => (
// // // //                 <motion.div
// // // //                   key={t.year}
// // // //                   initial={{ opacity: 0, x: 22 }}
// // // //                   whileInView={{ opacity: 1, x: 0 }}
// // // //                   viewport={{ once: true, margin: "-12%" }}
// // // //                   transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
// // // //                   className="group relative pb-7 last:pb-0"
// // // //                 >
// // // //                   <span className="absolute -left-8 top-1 grid size-[15px] place-items-center rounded-full border border-ink-900/20 bg-paper-50 transition-colors duration-300 group-hover:border-cobalt-500">
// // // //                     <span className="size-[7px] rounded-full bg-ink-900/30 transition-colors duration-300 group-hover:bg-cobalt-500" />
// // // //                   </span>
// // // //                   <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
// // // //                     <CalendarDays size={11} /> {t.year}
// // // //                   </p>
// // // //                   <h3 className="mt-1.5 font-display text-[19px] font-bold tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600">
// // // //                     {t.title}
// // // //                   </h3>
// // // //                   <p className="mt-1 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-600">
// // // //                     {t.copy}
// // // //                   </p>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mt-6 flex items-start gap-3 rounded-[20px] border border-ink-900/12 bg-paper-100 p-4">
// // // //               <BookOpen size={18} className="mt-0.5 shrink-0 text-cobalt-500" />
// // // //               <p className="text-[13.5px] leading-relaxed text-ink-600">
// // // //                 <span className="font-semibold text-ink-900">Degree in progress, commits too.</span>{" "}
// // // //                 Everything on this page was learned between a lab bench, a client call and a
// // // //                 late-night deploy.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { motion, useScroll, useSpring } from "framer-motion";
// // // import { BookOpen, Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
// // // import { useRef } from "react";
// // // import { EASE, education, timeline } from "@/lib/data";
// // // import { Reveal, SectionLabel } from "@/components/ui";
// // // import { cn } from "@/utils/cn";

// // // export default function Education() {
// // //   const railRef = useRef<HTMLDivElement>(null);
// // //   const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 55%"] });
// // //   const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

// // //   return (
// // //     <section id="education" className="relative overflow-hidden bg-paper-50 py-20 sm:py-28">
// // //       <div className="grid-lines absolute inset-0 opacity-60" />
// // //       <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-cobalt-300/12 blur-[100px]" />

// // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// // //           <div>
// // //             <SectionLabel index="04" label="Now & next" />
// // //             <h2 className="mt-5 max-w-[18ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[5.6vw]">
// // //               <span className="text-cobalt-500">Education</span>
// // //             </h2>
// // //           </div>
// // //           <Reveal delay={0.1}>
// // //             <div className="flex flex-wrap gap-2">
// // //               {[
// // //                 { k: "Studying", v: "MCA · SSIT" },
// // //                 { k: "Building", v: "React + MongoDB" },
// // //                 { k: "Reading", v: "System design" },
// // //               ].map((c) => (
// // //                 <span
// // //                   key={c.k}
// // //                   className="group flex items-center gap-2 rounded-full border border-ink-900/12 bg-paper-100 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-600 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
// // //                 >
// // //                   <Sparkles size={11} className="text-lime-deep" />
// // //                   {c.k}
// // //                   <span className="text-ink-900/40 group-hover:text-lime-acid">/</span>
// // //                   <span className="text-ink-900 group-hover:text-paper-50">{c.v}</span>
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </Reveal>
// // //         </div>

// // //         <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
// // //           {/* education */}
// // //           <div>
// // //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // //               Education
// // //             </p>
// // //             <div className="mt-4 space-y-3">
// // //               {education.map((e, i) => (
// // //                 <motion.article
// // //                   key={e.title}
// // //                   initial={{ opacity: 0, y: 26 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true, margin: "-10%" }}
// // //                   transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
// // //                   className={cn(
// // //                     "group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6",
// // //                     e.live
// // //                       ? "border-ink-900 bg-ink-900 text-paper-100"
// // //                       : "border-ink-900/12 bg-paper-100 hover:border-ink-900/40",
// // //                   )}
// // //                 >
// // //                   <span
// // //                     className={cn(
// // //                       "absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100",
// // //                       e.live ? "bg-lime-acid" : "bg-cobalt-500",
// // //                     )}
// // //                   />
// // //                   <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
// // //                     <span
// // //                       className={cn(
// // //                         "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
// // //                         e.live ? "bg-lime-acid text-ink-900" : "bg-ink-900/[0.06] text-ink-600",
// // //                       )}
// // //                     >
// // //                       {e.live && (
// // //                         <span className="relative flex size-1.5">
// // //                           <span className="absolute size-full animate-ping rounded-full bg-ink-900/60" />
// // //                           <span className="relative size-1.5 rounded-full bg-ink-900" />
// // //                         </span>
// // //                       )}
// // //                       {e.period}
// // //                     </span>
// // //                     <span
// // //                       className={cn(
// // //                         "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]",
// // //                         e.live ? "text-paper-300/60" : "text-ink-500",
// // //                       )}
// // //                     >
// // //                       <MapPin size={10} /> {e.place}
// // //                     </span>
// // //                   </div>

// // //                   <h3
// // //                     className={cn(
// // //                       "mt-3 font-display text-[23px] leading-[1.05] tracking-tight sm:text-[27px]",
// // //                       e.live ? "text-paper-50" : "text-ink-900",
// // //                     )}
// // //                   >
// // //                     {e.title}
// // //                   </h3>
// // //                   <p
// // //                     className={cn(
// // //                       "mt-1.5 flex items-center gap-1.5 text-[14px] font-medium",
// // //                       e.live ? "text-lime-acid" : "text-cobalt-600",
// // //                     )}
// // //                   >
// // //                     <Building2 size={14} /> {e.school}
// // //                   </p>
// // //                   <p
// // //                     className={cn(
// // //                       "mt-3 max-w-[60ch] text-[13.5px] leading-relaxed",
// // //                       e.live ? "text-paper-200/70" : "text-ink-600",
// // //                     )}
// // //                   >
// // //                     {e.detail}
// // //                   </p>

// // //                   <ul className="mt-4 flex flex-wrap gap-1.5">
// // //                     {e.tags.map((t) => (
// // //                       <li
// // //                         key={t}
// // //                         className={cn(
// // //                           "rounded-md px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // //                           e.live
// // //                             ? "bg-paper-50/[0.08] text-paper-200"
// // //                             : "bg-ink-900/[0.05] text-ink-500",
// // //                         )}
// // //                       >
// // //                         {t}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </motion.article>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* journey timeline */}
// // //           <div ref={railRef} className="relative">
// // //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // //               The path so far
// // //             </p>
// // //             <div className="relative mt-5 pl-8">
// // //               <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink-900/12" />
// // //               <motion.div
// // //                 style={{ scaleY: lineScale }}
// // //                 className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-cobalt-500 via-teal-glow to-lime-acid"
// // //               />
// // //               {timeline.map((t, i) => (
// // //                 <motion.div
// // //                   key={t.year}
// // //                   initial={{ opacity: 0, x: 22 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   viewport={{ once: true, margin: "-12%" }}
// // //                   transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
// // //                   className="group relative pb-7 last:pb-0"
// // //                 >
// // //                   <span className="absolute -left-8 top-1 grid size-[15px] place-items-center rounded-full border border-ink-900/20 bg-paper-50 transition-colors duration-300 group-hover:border-cobalt-500">
// // //                     <span className="size-[7px] rounded-full bg-ink-900/30 transition-colors duration-300 group-hover:bg-cobalt-500" />
// // //                   </span>
// // //                   <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
// // //                     <CalendarDays size={11} /> {t.year}
// // //                   </p>
// // //                   <h3 className="mt-1.5 font-display text-[19px] font-bold tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600">
// // //                     {t.title}
// // //                   </h3>
// // //                   <p className="mt-1 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-600">
// // //                     {t.copy}
// // //                   </p>
// // //                 </motion.div>
// // //               ))}
// // //             </div>

// // //             <div className="mt-6 flex items-start gap-3 rounded-[20px] border border-ink-900/12 bg-paper-100 p-4">
// // //               <BookOpen size={18} className="mt-0.5 shrink-0 text-cobalt-500" />
// // //               <p className="text-[13.5px] leading-relaxed text-ink-600">
// // //                 <span className="font-semibold text-ink-900">Degree in progress, commits too.</span>{" "}
// // //                 Everything on this page was learned between a lab bench, a client call and a
// // //                 late-night deploy.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { motion, useScroll, useSpring } from "framer-motion";
// // import { BookOpen, Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
// // import { useRef } from "react";
// // import { EASE, education, timeline } from "@/lib/data";
// // import { Reveal, SectionLabel } from "@/components/ui";
// // import { cn } from "@/utils/cn";

// // export default function Education() {
// //   const railRef = useRef<HTMLDivElement>(null);
// //   const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 55%"] });
// //   const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

// //   return (
// //     <section id="education" className="relative overflow-hidden bg-paper-50 py-20 sm:py-28">
// //       <div className="grid-lines absolute inset-0 opacity-60" />
// //       <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-cobalt-300/12 blur-[100px]" />

// //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// //           <div>
// //             <SectionLabel index="04" label="Now & next" />
// //             <h2 className="mt-5 max-w-[18ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[5.6vw]">
// //               <span className="text-cobalt-500">Education</span>
// //             </h2>
// //           </div>
// //           <Reveal delay={0.1}>
// //             <div className="flex flex-wrap gap-2">
// //               {[
// //                 { k: "Studying", v: "MCA · SSIT" },
// //                 { k: "Building", v: "React + MongoDB" },
// //                 { k: "Reading", v: "System design" },
// //               ].map((c) => (
// //                 <span
// //                   key={c.k}
// //                   className="group flex items-center gap-2 rounded-full border border-ink-900/12 bg-paper-100 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-600 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
// //                 >
// //                   <Sparkles size={11} className="text-lime-deep" />
// //                   {c.k}
// //                   <span className="text-ink-900/40 group-hover:text-lime-acid">/</span>
// //                   <span className="text-ink-900 group-hover:text-paper-50">{c.v}</span>
// //                 </span>
// //               ))}
// //             </div>
// //           </Reveal>
// //         </div>

// //         <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
// //           {/* education */}
// //           <div>
// //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// //               Education
// //             </p>
// //             <div className="mt-4 space-y-3">
// //               {education.map((e, i) => (
// //                 <motion.article
// //                   key={e.title}
// //                   initial={{ opacity: 0, y: 26 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true, margin: "-10%" }}
// //                   transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
// //                   className={cn(
// //                     "group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6",
// //                     e.live
// //                       ? "border-ink-900 bg-ink-900 text-paper-100"
// //                       : "border-ink-900/12 bg-paper-100 hover:border-ink-900/40",
// //                   )}
// //                 >
// //                   <span
// //                     className={cn(
// //                       "absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100",
// //                       e.live ? "bg-lime-acid" : "bg-cobalt-500",
// //                     )}
// //                   />
// //                   <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
// //                     <span
// //                       className={cn(
// //                         "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
// //                         e.live ? "bg-lime-acid text-ink-900" : "bg-ink-900/[0.06] text-ink-600",
// //                       )}
// //                     >
// //                       {e.live && (
// //                         <span className="relative flex size-1.5">
// //                           <span className="absolute size-full animate-ping rounded-full bg-ink-900/60" />
// //                           <span className="relative size-1.5 rounded-full bg-ink-900" />
// //                         </span>
// //                       )}
// //                       {e.period}
// //                     </span>
// //                     <span
// //                       className={cn(
// //                         "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]",
// //                         e.live ? "text-paper-300/60" : "text-ink-500",
// //                       )}
// //                     >
// //                       <MapPin size={10} /> {e.place}
// //                     </span>
// //                   </div>

// //                   <h3
// //                     className={cn(
// //                       "mt-3 font-display text-[23px] leading-[1.05] tracking-tight sm:text-[27px]",
// //                       e.live ? "text-paper-50" : "text-ink-900",
// //                     )}
// //                   >
// //                     {e.title}
// //                   </h3>
// //                   <p
// //                     className={cn(
// //                       "mt-1.5 flex items-center gap-1.5 text-[14px] font-medium",
// //                       e.live ? "text-lime-acid" : "text-cobalt-600",
// //                     )}
// //                   >
// //                     <Building2 size={14} /> {e.school}
// //                   </p>
// //                   <p
// //                     className={cn(
// //                       "mt-3 max-w-[60ch] text-[13.5px] leading-relaxed",
// //                       e.live ? "text-paper-200/70" : "text-ink-600",
// //                     )}
// //                   >
// //                     {e.detail}
// //                   </p>

// //                   <ul className="mt-4 flex flex-wrap gap-1.5">
// //                     {e.tags.map((t) => (
// //                       <li
// //                         key={t}
// //                         className={cn(
// //                           "rounded-md px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// //                           e.live
// //                             ? "bg-paper-50/[0.08] text-paper-200"
// //                             : "bg-ink-900/[0.05] text-ink-500",
// //                         )}
// //                       >
// //                         {t}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </motion.article>
// //               ))}
// //             </div>
// //           </div>

// //           {/* journey timeline */}
// //           <div ref={railRef} className="relative">
// //             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// //               The path so far
// //             </p>
// //             <div className="relative mt-5 pl-8">
// //               <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink-900/12" />
// //               <motion.div
// //                 style={{ scaleY: lineScale }}
// //                 className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-cobalt-500 via-teal-glow to-lime-acid"
// //               />
// //               {timeline.map((t, i) => (
// //                 <motion.div
// //                   key={`${t.year}-${t.title}`}
// //                   initial={{ opacity: 0, x: 22 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   viewport={{ once: true, margin: "-12%" }}
// //                   transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
// //                   className="group relative pb-7 last:pb-0"
// //                 >
// //                   <span className="absolute -left-8 top-1 grid size-[15px] place-items-center rounded-full border border-ink-900/20 bg-paper-50 transition-colors duration-300 group-hover:border-cobalt-500">
// //                     <span className="size-[7px] rounded-full bg-ink-900/30 transition-colors duration-300 group-hover:bg-cobalt-500" />
// //                   </span>
// //                   <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
// //                     <CalendarDays size={11} /> {t.year}
// //                   </p>
// //                   <h3 className="mt-1.5 font-display text-[19px] font-bold tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600">
// //                     {t.title}
// //                   </h3>
// //                   <p className="mt-1 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-600">
// //                     {t.copy}
// //                   </p>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             <div className="mt-6 flex items-start gap-3 rounded-[20px] border border-ink-900/12 bg-paper-100 p-4">
// //               <BookOpen size={18} className="mt-0.5 shrink-0 text-cobalt-500" />
// //               <p className="text-[13.5px] leading-relaxed text-ink-600">
// //                 <span className="font-semibold text-ink-900">Learning, building and improving every day.</span>{" "}
// //                 From a Commerce background to becoming a Full-Stack Developer.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { motion, useScroll, useSpring } from "framer-motion";
// import { BookOpen, Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
// import { useRef } from "react";
// import { EASE, education, timeline } from "@/lib/data";
// import { Reveal, SectionLabel } from "@/components/ui";
// import { cn } from "@/utils/cn";

// export default function Education() {
//   const railRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 55%"] });
//   const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

//   return (
//     <section id="education" className="relative overflow-hidden bg-paper-50 py-20 sm:py-28">
//       <div className="grid-lines absolute inset-0 opacity-60" />
//       <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-cobalt-300/12 blur-[100px]" />

//       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <SectionLabel index="04" label="Now & next" />
//             <h2 className="mt-5 max-w-[18ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[5.6vw]">
//               <span className="text-cobalt-500">Education</span>
//             </h2>
//           </div>
//           <Reveal delay={0.1}>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 { k: "Studying", v: "MCA · SSIT" },
//                 { k: "Building", v: "React + MongoDB" },
//                 { k: "Reading", v: "System design" },
//               ].map((c) => (
//                 <span
//                   key={c.k}
//                   className="group flex items-center gap-2 rounded-full border border-ink-900/12 bg-paper-100 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-600 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
//                 >
//                   <Sparkles size={11} className="text-lime-deep" />
//                   {c.k}
//                   <span className="text-ink-900/40 group-hover:text-lime-acid">/</span>
//                   <span className="text-ink-900 group-hover:text-paper-50">{c.v}</span>
//                 </span>
//               ))}
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
//           {/* education */}
//           <div>
//             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
//               Education
//             </p>
//             <div className="mt-4 space-y-3">
//               {education.map((e, i) => (
//                 <motion.article
//                   key={e.title}
//                   initial={{ opacity: 0, y: 26 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-10%" }}
//                   transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
//                   className={cn(
//                     "group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6",
//                     e.live
//                       ? "border-ink-900 bg-ink-900 text-paper-100"
//                       : "border-ink-900/12 bg-paper-100 hover:border-ink-900/40",
//                   )}
//                 >
//                   <span
//                     className={cn(
//                       "absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100",
//                       e.live ? "bg-lime-acid" : "bg-cobalt-500",
//                     )}
//                   />
//                   <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
//                     <span
//                       className={cn(
//                         "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
//                         e.live ? "bg-lime-acid text-ink-900" : "bg-ink-900/[0.06] text-ink-600",
//                       )}
//                     >
//                       {e.live && (
//                         <span className="relative flex size-1.5">
//                           <span className="absolute size-full animate-ping rounded-full bg-ink-900/60" />
//                           <span className="relative size-1.5 rounded-full bg-ink-900" />
//                         </span>
//                       )}
//                       {e.period}
//                     </span>
//                     <span
//                       className={cn(
//                         "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]",
//                         e.live ? "text-paper-300/60" : "text-ink-500",
//                       )}
//                     >
//                       <MapPin size={10} /> {e.place}
//                     </span>
//                   </div>

//                   <h3
//                     className={cn(
//                       "mt-3 font-display text-[23px] leading-[1.05] tracking-tight sm:text-[27px]",
//                       e.live ? "text-paper-50" : "text-ink-900",
//                     )}
//                   >
//                     {e.title}
//                   </h3>
//                   <p
//                     className={cn(
//                       "mt-1.5 flex items-center gap-1.5 text-[14px] font-medium",
//                       e.live ? "text-lime-acid" : "text-cobalt-600",
//                     )}
//                   >
//                     <Building2 size={14} /> {e.school}
//                   </p>
//                   <p
//                     className={cn(
//                       "mt-3 max-w-[60ch] text-[13.5px] leading-relaxed",
//                       e.live ? "text-paper-200/70" : "text-ink-600",
//                     )}
//                   >
//                     {e.detail}
//                   </p>

//                   <ul className="mt-4 flex flex-wrap gap-1.5">
//                     {e.tags.map((t) => (
//                       <li
//                         key={t}
//                         className={cn(
//                           "rounded-md px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
//                           e.live
//                             ? "bg-paper-50/[0.08] text-paper-200"
//                             : "bg-ink-900/[0.05] text-ink-500",
//                         )}
//                       >
//                         {t}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.article>
//               ))}
//             </div>
//           </div>

//           {/* journey timeline */}
//           <div ref={railRef} className="relative">
//             <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
//               The path so far
//             </p>
//             <div className="relative mt-5 pl-8">
//               <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink-900/12" />
//               <motion.div
//                 aria-hidden
//                 style={{
//                   scaleY: lineScale,
//                   backgroundSize: "100% 220%",
//                 }}
//                 animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-[6px] top-2 h-[calc(100%-1rem)] w-[3px] origin-top rounded-full bg-gradient-to-b from-cobalt-500 via-teal-glow to-lime-acid shadow-[0_0_12px_rgba(55,224,196,0.5)]"
//               />
//               {timeline.map((t, i) => (
//                 <motion.div
//                   key={`${t.year}-${t.title}`}
//                   initial={{ opacity: 0, x: 22 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: "-12%" }}
//                   transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
//                   className="group relative pb-7 last:pb-0"
//                 >
//                   <motion.span
//                     aria-hidden
//                     animate={{
//                       scale: [1, 1.16, 1],
//                       boxShadow: [
//                         "0 0 0 0 rgba(43,57,246,0)",
//                         "0 0 0 6px rgba(43,57,246,0.12)",
//                         "0 0 0 0 rgba(43,57,246,0)",
//                       ],
//                     }}
//                     transition={{
//                       duration: 2.4,
//                       delay: i * 0.28,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute -left-8 top-1 grid size-[15px] place-items-center rounded-full border border-ink-900/20 bg-paper-50 transition-colors duration-300 group-hover:border-cobalt-500"
//                   >
//                     <span className="size-[7px] rounded-full bg-ink-900/30 transition-colors duration-300 group-hover:bg-cobalt-500" />
//                   </motion.span>
//                   <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
//                     <CalendarDays size={11} /> {t.year}
//                   </p>
//                   <h3 className="mt-1.5 font-display text-[19px] font-bold tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600">
//                     {t.title}
//                   </h3>
//                   <p className="mt-1 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-600">
//                     {t.copy}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-6 flex items-start gap-3 rounded-[20px] border border-ink-900/12 bg-paper-100 p-4">
//               <BookOpen size={18} className="mt-0.5 shrink-0 text-cobalt-500" />
//               <p className="text-[13.5px] leading-relaxed text-ink-600">
//                 <span className="font-semibold text-ink-900">Learning, building and improving every day.</span>{" "}
//                 From a Commerce background to becoming a Full-Stack Developer.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion, useScroll, useSpring } from "framer-motion";
import { BookOpen, Building2, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import { EASE, education, timeline } from "@/lib/data";
import { Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function Education() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 82%", "end 35%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  return (
    <section id="education" className="relative overflow-hidden bg-paper-50 py-20 sm:py-28">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-cobalt-300/12 blur-[100px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="04" label="Now & next" />
            <h2 className="mt-5 max-w-[18ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[5.6vw]">
              <span className="text-cobalt-500">Education</span>
            </h2>
          </div>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {[
                { k: "Studying", v: "MCA · SSIT" },
                { k: "Building", v: "React + MongoDB" },
                { k: "Reading", v: "System design" },
              ].map((c) => (
                <span
                  key={c.k}
                  className="group flex items-center gap-2 rounded-full border border-ink-900/12 bg-paper-100 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-600 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
                >
                  <Sparkles size={11} className="text-lime-deep" />
                  {c.k}
                  <span className="text-ink-900/40 group-hover:text-lime-acid">/</span>
                  <span className="text-ink-900 group-hover:text-paper-50">{c.v}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* education */}
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
              Education
            </p>
            <div className="mt-4 space-y-3">
              {education.map((e, i) => (
                <motion.article
                  key={e.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
                  className={cn(
                    "group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6",
                    e.live
                      ? "border-ink-900 bg-ink-900 text-paper-100"
                      : "border-ink-900/12 bg-paper-100 hover:border-ink-900/40",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100",
                      e.live ? "bg-lime-acid" : "bg-cobalt-500",
                    )}
                  />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span
                      className={cn(
                        "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
                        e.live ? "bg-lime-acid text-ink-900" : "bg-ink-900/[0.06] text-ink-600",
                      )}
                    >
                      {e.live && (
                        <span className="relative flex size-1.5">
                          <span className="absolute size-full animate-ping rounded-full bg-ink-900/60" />
                          <span className="relative size-1.5 rounded-full bg-ink-900" />
                        </span>
                      )}
                      {e.period}
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]",
                        e.live ? "text-paper-300/60" : "text-ink-500",
                      )}
                    >
                      <MapPin size={10} /> {e.place}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "mt-3 font-display text-[23px] leading-[1.05] tracking-tight sm:text-[27px]",
                      e.live ? "text-paper-50" : "text-ink-900",
                    )}
                  >
                    {e.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1.5 flex items-center gap-1.5 text-[14px] font-medium",
                      e.live ? "text-lime-acid" : "text-cobalt-600",
                    )}
                  >
                    <Building2 size={14} /> {e.school}
                  </p>
                  <p
                    className={cn(
                      "mt-3 max-w-[60ch] text-[13.5px] leading-relaxed",
                      e.live ? "text-paper-200/70" : "text-ink-600",
                    )}
                  >
                    {e.detail}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <li
                        key={t}
                        className={cn(
                          "rounded-md px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
                          e.live
                            ? "bg-paper-50/[0.08] text-paper-200"
                            : "bg-ink-900/[0.05] text-ink-500",
                        )}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          {/* journey timeline */}
          <div ref={railRef} className="relative">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
              The path so far
            </p>
            <div className="relative mt-5 pl-8">
              <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] rounded-full bg-ink-900/12" />
              <motion.div
                aria-hidden
                style={{ scaleY: lineScale }}
                className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-[2px] origin-top rounded-full bg-gradient-to-b from-cobalt-500 via-teal-glow to-lime-acid shadow-[0_0_8px_rgba(55,224,196,0.35)]"
              />
              {timeline.map((t, i) => (
                <motion.div
                  key={`${t.year}-${t.title}`}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                  className="group relative pb-7 last:pb-0"
                >
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0.45, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                      delay: i * 0.06,
                    }}
                    className="absolute -left-8 top-1 grid size-[15px] place-items-center rounded-full border border-ink-900/20 bg-paper-50 transition-colors duration-300 group-hover:border-cobalt-500"
                  >
                    <span className="size-[7px] rounded-full bg-ink-900/30 transition-colors duration-300 group-hover:bg-cobalt-500" />
                  </motion.span>
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
                    <CalendarDays size={11} /> {t.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-[19px] font-bold tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600">
                    {t.title}
                  </h3>
                  <p className="mt-1 max-w-[42ch] text-[13.5px] leading-relaxed text-ink-600">
                    {t.copy}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-[20px] border border-ink-900/12 bg-paper-100 p-4">
              <BookOpen size={18} className="mt-0.5 shrink-0 text-cobalt-500" />
              <p className="text-[13.5px] leading-relaxed text-ink-600">
                <span className="font-semibold text-ink-900">Learning, building and improving every day.</span>{" "}
                From a Commerce background to becoming a Full-Stack Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
