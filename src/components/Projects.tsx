// // // // // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // // // // import type { ReactNode } from "react";
// // // // // // // import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
// // // // // // // import { GithubIcon } from "@/components/BrandIcons";
// // // // // // // import type { Project } from "@/lib/data";
// // // // // // // import { EASE, projects, profile } from "@/lib/data";
// // // // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // // // import { cn } from "@/utils/cn";

// // // // // // // const accentMap = {
// // // // // // //   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
// // // // // // //   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
// // // // // // //   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// // // // // // // } as const;

// // // // // // // function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
// // // // // // //   const px = useMotionValue(0.5);
// // // // // // //   const py = useMotionValue(0.5);
// // // // // // //   const sx = useSpring(px, { stiffness: 200, damping: 22 });
// // // // // // //   const sy = useSpring(py, { stiffness: 200, damping: 22 });
// // // // // // //   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
// // // // // // //   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

// // // // // // //   return (
// // // // // // //     <motion.div
// // // // // // //       className={className}
// // // // // // //       style={{ rotateX, rotateY, transformPerspective: 1400 }}
// // // // // // //       onPointerMove={(e) => {
// // // // // // //         const r = e.currentTarget.getBoundingClientRect();
// // // // // // //         px.set((e.clientX - r.left) / r.width);
// // // // // // //         py.set((e.clientY - r.top) / r.height);
// // // // // // //       }}
// // // // // // //       onPointerLeave={() => {
// // // // // // //         px.set(0.5);
// // // // // // //         py.set(0.5);
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {children}
// // // // // // //     </motion.div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function ProjectCard({ p, i }: { p: Project; i: number }) {
// // // // // // //   const a = accentMap[p.accent];

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="mb-5 transition-all duration-500 lg:sticky lg:mb-8"
// // // // // // //       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
// // // // // // //     >
// // // // // // //       <Reveal y={40}>
// // // // // // //         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
// // // // // // //           <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
// // // // // // //             {/* visual */}
// // // // // // //             <div className="relative overflow-hidden bg-ink-900">
// // // // // // //               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
// // // // // // //                 <span className="flex gap-1.5">
// // // // // // //                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // // // // //                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
// // // // // // //                   ))}
// // // // // // //                 </span>
// // // // // // //                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
// // // // // // //                   <ExternalLink size={9} className="shrink-0 opacity-60" />
// // // // // // //                   {p.liveLabel}
// // // // // // //                 </span>
// // // // // // //               </div>

// // // // // // //               <div className="relative overflow-hidden">
// // // // // // //   <motion.img
// // // // // // //     src={p.image}
// // // // // // //     alt={`${p.name} preview`}
// // // // // // //     loading="lazy"
// // // // // // //     className="block h-auto w-full opacity-90"
// // // // // // //     initial={{ scale: 1 }}
// // // // // // //     whileInView={{ scale: 1 }}
// // // // // // //     viewport={{ once: true }}
// // // // // // //     transition={{ duration: 0.6, ease: "linear" }}
// // // // // // //   />

// // // // // // //   <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/65 via-ink-950/20 to-transparent" />
// // // // // // //   <div className="dot-grid-dark absolute inset-0 opacity-40" />

// // // // // // //   {/* અહીં floating UI mockનો હાલનો code રાખવો */}
// // // // // // // </div>
// // // // // // //                 <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/65 via-ink-950/20 to-transparent" />
// // // // // // //                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

// // // // // // //                 {/* floating UI mock */}
// // // // // // //                 <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
// // // // // // //                   <motion.div
// // // // // // //                     initial={{ opacity: 0, y: 26 }}
// // // // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // // // //                     viewport={{ once: true }}
// // // // // // //                     transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
// // // // // // //                     className="rounded-2xl border border-paper-300/15 bg-ink-900/75 p-3.5 backdrop-blur-md"
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center justify-between">
// // // // // // //                       <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper-300/60">
// // // // // // //                         {p.client}
// // // // // // //                       </span>
// // // // // // //                       <span className={cn("rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-900", a.bg)}>
// // // // // // //                         live
// // // // // // //                       </span>
// // // // // // //                     </div>
// // // // // // //                     <div className="mt-3 grid grid-cols-3 gap-2">
// // // // // // //                       {p.metrics.map((m) => (
// // // // // // //                         <div key={m.label} className="rounded-xl bg-paper-50/[0.06] px-2.5 py-2">
// // // // // // //                           <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper-300/50">
// // // // // // //                             {m.label}
// // // // // // //                           </p>
// // // // // // //                           <p className="mt-0.5 font-display text-[15px] font-bold text-paper-50">
// // // // // // //                             {m.value}
// // // // // // //                           </p>
// // // // // // //                         </div>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   </motion.div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* content */}
// // // // // // //             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
// // // // // // //               <span className={cn("absolute right-0 top-0 h-full w-[3px] lg:h-[3px] lg:w-full", a.soft)} />
// // // // // // //               <div>
// // // // // // //                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
// // // // // // //                   <span>
// // // // // // //                     {p.index} / {p.year}
// // // // // // //                   </span>
// // // // // // //                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
// // // // // // //                 </div>
// // // // // // //                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
// // // // // // //                   {p.name}
// // // // // // //                 </h3>
// // // // // // //                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
// // // // // // //                   {p.summary}
// // // // // // //                 </p>

// // // // // // //                 <ul className="mt-5 space-y-2.5">
// // // // // // //                   {p.bullets.map((b, bi) => (
// // // // // // //                     <motion.li
// // // // // // //                       key={b}
// // // // // // //                       initial={{ opacity: 0, x: -12 }}
// // // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // // //                       viewport={{ once: true }}
// // // // // // //                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
// // // // // // //                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
// // // // // // //                     >
// // // // // // //                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
// // // // // // //                       {b}
// // // // // // //                     </motion.li>
// // // // // // //                   ))}
// // // // // // //                 </ul>

// // // // // // //                 <div className="mt-6 flex flex-wrap gap-1.5">
// // // // // // //                   {p.stack.map((s) => (
// // // // // // //                     <span
// // // // // // //                       key={s}
// // // // // // //                       className="rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
// // // // // // //                     >
// // // // // // //                       {s}
// // // // // // //                     </span>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <div className="flex flex-wrap items-center gap-2.5">
// // // // // // //                 <a
// // // // // // //                   href={p.live}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
// // // // // // //                 >
// // // // // // //                   Visit live site
// // // // // // //                   <ArrowUpRight
// // // // // // //                     size={15}
// // // // // // //                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // // // //                   />
// // // // // // //                 </a>
// // // // // // //                 <a
// // // // // // //                   href={profile.github}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
// // // // // // //                 >
// // // // // // //                   <GithubIcon className="size-3.5" /> source
// // // // // // //                 </a>
// // // // // // //                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
// // // // // // //                   photo: {p.credit}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </TiltCard>
// // // // // // //       </Reveal>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default function Projects() {
// // // // // // //   return (
// // // // // // //     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
// // // // // // //       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
// // // // // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // // // //         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
// // // // // // //           <div>
// // // // // // //             <SectionLabel index="01" label="Selected work" />
// // // // // // //             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
// // // // // // //               Three builds,
// // // // // // //               <br />
// // // // // // //               <span className="text-cobalt-500">live right now.</span>
// // // // // // //             </h2>
// // // // // // //           </div>
// // // // // // //           <Reveal delay={0.1} className="max-w-[38ch]">
// // // // // // //             <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // // //               Every card below is a deployed product with a real domain — not a mockup. Open them,
// // // // // // //               resize the window, click around. The interactions you feel are the work.
// // // // // // //             </p>
// // // // // // //             <a
// // // // // // //               href={profile.github}
// // // // // // //               target="_blank"
// // // // // // //               rel="noreferrer"
// // // // // // //               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
// // // // // // //             >
// // // // // // //               <GithubIcon className="size-3.5" /> more repos on github
// // // // // // //             </a>
// // // // // // //           </Reveal>
// // // // // // //         </div>

// // // // // // //         <div className="relative">
// // // // // // //           {projects.map((p, i) => (
// // // // // // //             <ProjectCard key={p.id} p={p} i={i} />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // // // import type { ReactNode } from "react";
// // // // // // import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
// // // // // // import { GithubIcon } from "@/components/BrandIcons";
// // // // // // import type { Project } from "@/lib/data";
// // // // // // import { EASE, projects, profile } from "@/lib/data";
// // // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // // import { cn } from "@/utils/cn";

// // // // // // const accentMap = {
// // // // // //   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
// // // // // //   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
// // // // // //   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// // // // // // } as const;

// // // // // // function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
// // // // // //   const px = useMotionValue(0.5);
// // // // // //   const py = useMotionValue(0.5);
// // // // // //   const sx = useSpring(px, { stiffness: 200, damping: 22 });
// // // // // //   const sy = useSpring(py, { stiffness: 200, damping: 22 });
// // // // // //   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
// // // // // //   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       className={className}
// // // // // //       style={{ rotateX, rotateY, transformPerspective: 1400 }}
// // // // // //       onPointerMove={(e) => {
// // // // // //         const r = e.currentTarget.getBoundingClientRect();
// // // // // //         px.set((e.clientX - r.left) / r.width);
// // // // // //         py.set((e.clientY - r.top) / r.height);
// // // // // //       }}
// // // // // //       onPointerLeave={() => {
// // // // // //         px.set(0.5);
// // // // // //         py.set(0.5);
// // // // // //       }}
// // // // // //     >
// // // // // //       {children}
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // }

// // // // // // function ProjectCard({ p, i }: { p: Project; i: number }) {
// // // // // //   const a = accentMap[p.accent];

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="mb-5 transition-all duration-500 lg:sticky lg:mb-8"
// // // // // //       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
// // // // // //     >
// // // // // //       <Reveal y={40}>
// // // // // //         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
// // // // // //           <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
// // // // // //             {/* visual */}
// // // // // //             <div className="relative self-start overflow-hidden bg-paper-50">
// // // // // //               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
// // // // // //                 <span className="flex gap-1.5">
// // // // // //                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // // // //                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
// // // // // //                   ))}
// // // // // //                 </span>
// // // // // //                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
// // // // // //                   <ExternalLink size={9} className="shrink-0 opacity-60" />
// // // // // //                   {p.liveLabel}
// // // // // //                 </span>
// // // // // //               </div>

// // // // // //               <div className="relative overflow-hidden">
// // // // // //                 <motion.img
// // // // // //                   src={p.image}
// // // // // //                   alt={`${p.name} preview`}
// // // // // //                   loading="lazy"
// // // // // //                   className="block h-auto w-full"
// // // // // //                   initial={{ opacity: 0 }}
// // // // // //                   whileInView={{ opacity: 1 }}
// // // // // //                   viewport={{ once: true }}
// // // // // //                   transition={{ duration: 0.7, ease: EASE }}
// // // // // //                 />

// // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
// // // // // //                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

// // // // // //                 {/* floating UI mock */}
// // // // // //                 <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
// // // // // //                   <motion.div
// // // // // //                     initial={{ opacity: 0, y: 26 }}
// // // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // // //                     viewport={{ once: true }}
// // // // // //                     transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
// // // // // //                     className="rounded-2xl border border-paper-300/15 bg-ink-900/75 p-3.5 backdrop-blur-md"
// // // // // //                   >
// // // // // //                     <div className="flex items-center justify-between">
// // // // // //                       <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper-300/60">
// // // // // //                         {p.client}
// // // // // //                       </span>
// // // // // //                       <span className={cn("rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-900", a.bg)}>
// // // // // //                         live
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                     <div className="mt-3 grid grid-cols-3 gap-2">
// // // // // //                       {p.metrics.map((m) => (
// // // // // //                         <div key={m.label} className="rounded-xl bg-paper-50/[0.06] px-2.5 py-2">
// // // // // //                           <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper-300/50">
// // // // // //                             {m.label}
// // // // // //                           </p>
// // // // // //                           <p className="mt-0.5 font-display text-[15px] font-bold text-paper-50">
// // // // // //                             {m.value}
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </motion.div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* content */}
// // // // // //             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
// // // // // //               <span className={cn("absolute right-0 top-0 h-full w-[3px] lg:h-[3px] lg:w-full", a.soft)} />
// // // // // //               <div>
// // // // // //                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
// // // // // //                   <span>
// // // // // //                     {p.index} / {p.year}
// // // // // //                   </span>
// // // // // //                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
// // // // // //                 </div>
// // // // // //                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
// // // // // //                   {p.name}
// // // // // //                 </h3>
// // // // // //                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
// // // // // //                   {p.summary}
// // // // // //                 </p>

// // // // // //                 <ul className="mt-5 space-y-2.5">
// // // // // //                   {p.bullets.map((b, bi) => (
// // // // // //                     <motion.li
// // // // // //                       key={b}
// // // // // //                       initial={{ opacity: 0, x: -12 }}
// // // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // // //                       viewport={{ once: true }}
// // // // // //                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
// // // // // //                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
// // // // // //                     >
// // // // // //                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
// // // // // //                       {b}
// // // // // //                     </motion.li>
// // // // // //                   ))}
// // // // // //                 </ul>

// // // // // //                 <div className="mt-6 flex flex-wrap gap-1.5">
// // // // // //                   {p.stack.map((s) => (
// // // // // //                     <span
// // // // // //                       key={s}
// // // // // //                       className="rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
// // // // // //                     >
// // // // // //                       {s}
// // // // // //                     </span>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="flex flex-wrap items-center gap-2.5">
// // // // // //                 <a
// // // // // //                   href={p.live}
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
// // // // // //                 >
// // // // // //                   Visit live site
// // // // // //                   <ArrowUpRight
// // // // // //                     size={15}
// // // // // //                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // // //                   />
// // // // // //                 </a>
// // // // // //                 <a
// // // // // //                   href={profile.github}
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
// // // // // //                 >
// // // // // //                   <GithubIcon className="size-3.5" /> source
// // // // // //                 </a>
// // // // // //                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
// // // // // //                   photo: {p.credit}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </TiltCard>
// // // // // //       </Reveal>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default function Projects() {
// // // // // //   return (
// // // // // //     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
// // // // // //       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
// // // // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // // //         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
// // // // // //           <div>
// // // // // //             <SectionLabel index="01" label="Selected work" />
// // // // // //             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
// // // // // //               Three builds,
// // // // // //               <br />
// // // // // //               <span className="text-cobalt-500">live right now.</span>
// // // // // //             </h2>
// // // // // //           </div>
// // // // // //           <Reveal delay={0.1} className="max-w-[38ch]">
// // // // // //             <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // //               Every card below is a deployed product with a real domain — not a mockup. Open them,
// // // // // //               resize the window, click around. The interactions you feel are the work.
// // // // // //             </p>
// // // // // //             <a
// // // // // //               href={profile.github}
// // // // // //               target="_blank"
// // // // // //               rel="noreferrer"
// // // // // //               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
// // // // // //             >
// // // // // //               <GithubIcon className="size-3.5" /> more repos on github
// // // // // //             </a>
// // // // // //           </Reveal>
// // // // // //         </div>

// // // // // //         <div className="relative">
// // // // // //           {projects.map((p, i) => (
// // // // // //             <ProjectCard key={p.id} p={p} i={i} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // // import type { ReactNode } from "react";
// // // // // import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
// // // // // import { GithubIcon } from "@/components/BrandIcons";
// // // // // import type { Project } from "@/lib/data";
// // // // // import { EASE, projects, profile } from "@/lib/data";
// // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // import { cn } from "@/utils/cn";

// // // // // const accentMap = {
// // // // //   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
// // // // //   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
// // // // //   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// // // // // } as const;

// // // // // function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
// // // // //   const px = useMotionValue(0.5);
// // // // //   const py = useMotionValue(0.5);
// // // // //   const sx = useSpring(px, { stiffness: 200, damping: 22 });
// // // // //   const sy = useSpring(py, { stiffness: 200, damping: 22 });
// // // // //   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
// // // // //   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

// // // // //   return (
// // // // //     <motion.div
// // // // //       className={className}
// // // // //       style={{ rotateX, rotateY, transformPerspective: 1400 }}
// // // // //       onPointerMove={(e) => {
// // // // //         const r = e.currentTarget.getBoundingClientRect();
// // // // //         px.set((e.clientX - r.left) / r.width);
// // // // //         py.set((e.clientY - r.top) / r.height);
// // // // //       }}
// // // // //       onPointerLeave={() => {
// // // // //         px.set(0.5);
// // // // //         py.set(0.5);
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // // function ProjectCard({ p, i }: { p: Project; i: number }) {
// // // // //   const a = accentMap[p.accent];

// // // // //   return (
// // // // //     <div
// // // // //       className="mb-5 transition-all duration-500 lg:sticky lg:mb-8"
// // // // //       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
// // // // //     >
// // // // //       <Reveal y={40}>
// // // // //         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
// // // // //           <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
// // // // //             {/* visual */}
// // // // //             <div className="relative self-start overflow-hidden bg-paper-50">
// // // // //               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
// // // // //                 <span className="flex gap-1.5">
// // // // //                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // // //                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
// // // // //                   ))}
// // // // //                 </span>
// // // // //                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
// // // // //                   <ExternalLink size={9} className="shrink-0 opacity-60" />
// // // // //                   {p.liveLabel}
// // // // //                 </span>
// // // // //               </div>

// // // // //               <div className="relative overflow-hidden">
// // // // //                 <motion.img
// // // // //                   src={p.image}
// // // // //                   alt={`${p.name} preview`}
// // // // //                   loading="lazy"
// // // // //                   className="block h-auto w-full"
// // // // //                   initial={{ opacity: 0 }}
// // // // //                   whileInView={{ opacity: 1 }}
// // // // //                   viewport={{ once: true }}
// // // // //                   transition={{ duration: 0.7, ease: EASE }}
// // // // //                 />

// // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
// // // // //                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

// // // // //               </div>
// // // // //             </div>

// // // // //             {/* content */}
// // // // //             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
// // // // //               <span className={cn("absolute right-0 top-0 h-full w-[3px] lg:h-[3px] lg:w-full", a.soft)} />
// // // // //               <div>
// // // // //                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
// // // // //                   <span>
// // // // //                     {p.index} / {p.year}
// // // // //                   </span>
// // // // //                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
// // // // //                 </div>
// // // // //                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
// // // // //                   {p.name}
// // // // //                 </h3>
// // // // //                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
// // // // //                   {p.summary}
// // // // //                 </p>

// // // // //                 <ul className="mt-5 space-y-2.5">
// // // // //                   {p.bullets.map((b, bi) => (
// // // // //                     <motion.li
// // // // //                       key={b}
// // // // //                       initial={{ opacity: 0, x: -12 }}
// // // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // // //                       viewport={{ once: true }}
// // // // //                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
// // // // //                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
// // // // //                     >
// // // // //                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
// // // // //                       {b}
// // // // //                     </motion.li>
// // // // //                   ))}
// // // // //                 </ul>

// // // // //                 <div className="mt-6 flex flex-wrap gap-1.5">
// // // // //                   {p.stack.map((s) => (
// // // // //                     <span
// // // // //                       key={s}
// // // // //                       className="rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
// // // // //                     >
// // // // //                       {s}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex flex-wrap items-center gap-2.5">
// // // // //                 <a
// // // // //                   href={p.live}
// // // // //                   target="_blank"
// // // // //                   rel="noreferrer"
// // // // //                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
// // // // //                 >
// // // // //                   Visit live site
// // // // //                   <ArrowUpRight
// // // // //                     size={15}
// // // // //                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // //                   />
// // // // //                 </a>
// // // // //                 <a
// // // // //                   href={profile.github}
// // // // //                   target="_blank"
// // // // //                   rel="noreferrer"
// // // // //                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
// // // // //                 >
// // // // //                   <GithubIcon className="size-3.5" /> source
// // // // //                 </a>
// // // // //                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
// // // // //                   photo: {p.credit}
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </TiltCard>
// // // // //       </Reveal>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default function Projects() {
// // // // //   return (
// // // // //     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
// // // // //       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
// // // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // //         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
// // // // //           <div>
// // // // //             <SectionLabel index="01" label="Selected work" />
// // // // //             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
// // // // //               Three builds,
// // // // //               <br />
// // // // //               <span className="text-cobalt-500">live right now.</span>
// // // // //             </h2>
// // // // //           </div>
// // // // //           <Reveal delay={0.1} className="max-w-[38ch]">
// // // // //             <p className="text-[15px] leading-relaxed text-ink-600">
// // // // //               Every card below is a deployed product with a real domain — not a mockup. Open them,
// // // // //               resize the window, click around. The interactions you feel are the work.
// // // // //             </p>
// // // // //             <a
// // // // //               href={profile.github}
// // // // //               target="_blank"
// // // // //               rel="noreferrer"
// // // // //               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
// // // // //             >
// // // // //               <GithubIcon className="size-3.5" /> more repos on github
// // // // //             </a>
// // // // //           </Reveal>
// // // // //         </div>

// // // // //         <div className="relative">
// // // // //           {projects.map((p, i) => (
// // // // //             <ProjectCard key={p.id} p={p} i={i} />
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // import type { ReactNode } from "react";
// // // // import { ArrowUpRight, Check, Code2, ExternalLink } from "lucide-react";
// // // // import { GithubIcon } from "@/components/BrandIcons";
// // // // import type { Project } from "@/lib/data";
// // // // import { EASE, projects, profile } from "@/lib/data";
// // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // import { cn } from "@/utils/cn";

// // // // const accentMap = {
// // // //   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
// // // //   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
// // // //   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// // // // } as const;

// // // // const techIconMap: Record<string, string> = {
// // // //   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
// // // //   "React Router": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
// // // //   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
// // // //   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// // // //   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
// // // //   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
// // // //   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
// // // //   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// // // //   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// // // // };

// // // // function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
// // // //   const px = useMotionValue(0.5);
// // // //   const py = useMotionValue(0.5);
// // // //   const sx = useSpring(px, { stiffness: 200, damping: 22 });
// // // //   const sy = useSpring(py, { stiffness: 200, damping: 22 });
// // // //   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
// // // //   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

// // // //   return (
// // // //     <motion.div
// // // //       className={className}
// // // //       style={{ rotateX, rotateY, transformPerspective: 1400 }}
// // // //       onPointerMove={(e) => {
// // // //         const r = e.currentTarget.getBoundingClientRect();
// // // //         px.set((e.clientX - r.left) / r.width);
// // // //         py.set((e.clientY - r.top) / r.height);
// // // //       }}
// // // //       onPointerLeave={() => {
// // // //         px.set(0.5);
// // // //         py.set(0.5);
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // function ProjectCard({ p, i }: { p: Project; i: number }) {
// // // //   const a = accentMap[p.accent];

// // // //   return (
// // // //     <div
// // // //       className="mb-5 transition-all duration-500 md:sticky md:mb-8"
// // // //       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
// // // //     >
// // // //       <Reveal y={40}>
// // // //         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
// // // //           <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
// // // //             {/* visual */}
// // // //             <div className="relative self-start overflow-hidden bg-paper-50">
// // // //               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
// // // //                 <span className="flex gap-1.5">
// // // //                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // //                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
// // // //                   ))}
// // // //                 </span>
// // // //                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
// // // //                   <ExternalLink size={9} className="shrink-0 opacity-60" />
// // // //                   {p.liveLabel}
// // // //                 </span>
// // // //               </div>

// // // //               <div className="relative overflow-hidden">
// // // //                 <motion.img
// // // //                   src={p.image}
// // // //                   alt={`${p.name} preview`}
// // // //                   loading="lazy"
// // // //                   className="block h-auto w-full"
// // // //                   initial={{ opacity: 0 }}
// // // //                   whileInView={{ opacity: 1 }}
// // // //                   viewport={{ once: false, amount: 0.2 }}
// // // //                   transition={{ duration: 0.7, ease: EASE }}
// // // //                 />

// // // //                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
// // // //                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

// // // //               </div>
// // // //             </div>

// // // //             {/* content */}
// // // //             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
// // // //               <span className={cn("absolute right-0 top-0 h-full w-[3px] lg:h-[3px] lg:w-full", a.soft)} />
// // // //               <div>
// // // //                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
// // // //                   <span>
// // // //                     {p.index} / {p.year}
// // // //                   </span>
// // // //                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
// // // //                 </div>
// // // //                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
// // // //                   {p.name}
// // // //                 </h3>
// // // //                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
// // // //                   {p.summary}
// // // //                 </p>

// // // //                 <ul className="mt-5 space-y-2.5">
// // // //                   {p.bullets.map((b, bi) => (
// // // //                     <motion.li
// // // //                       key={b}
// // // //                       initial={{ opacity: 0, x: -12 }}
// // // //                       whileInView={{ opacity: 1, x: 0 }}
// // // //                       viewport={{ once: true }}
// // // //                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
// // // //                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
// // // //                     >
// // // //                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
// // // //                       {b}
// // // //                     </motion.li>
// // // //                   ))}
// // // //                 </ul>

// // // //                 <div className="mt-6 flex flex-wrap gap-1.5">
// // // //                   {p.stack.map((s) => (
// // // //                     <span
// // // //                       key={s}
// // // //                       className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
// // // //                     >
// // // //                       {techIconMap[s] ? (
// // // //                         <img src={techIconMap[s]} alt="" className="size-4 object-contain" />
// // // //                       ) : (
// // // //                         <Code2 size={14} aria-hidden />
// // // //                       )}
// // // //                       {s}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex flex-wrap items-center gap-2.5">
// // // //                 <a
// // // //                   href={p.live}
// // // //                   target="_blank"
// // // //                   rel="noreferrer"
// // // //                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
// // // //                 >
// // // //                   Visit live site
// // // //                   <ArrowUpRight
// // // //                     size={15}
// // // //                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // //                   />
// // // //                 </a>
// // // //                 <a
// // // //                   href={profile.github}
// // // //                   target="_blank"
// // // //                   rel="noreferrer"
// // // //                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
// // // //                 >
// // // //                   <GithubIcon className="size-3.5" /> source
// // // //                 </a>
// // // //                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
// // // //                   photo: {p.credit}
// // // //                 </span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </TiltCard>
// // // //       </Reveal>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function Projects() {
// // // //   return (
// // // //     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
// // // //       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
// // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // //         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
// // // //           <div>
// // // //             <SectionLabel index="01" label="Selected work" />
// // // //             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
// // // //               Three builds,
// // // //               <br />
// // // //               <span className="text-cobalt-500">live right now.</span>
// // // //             </h2>
// // // //           </div>
// // // //           <Reveal delay={0.1} className="max-w-[38ch]">
// // // //             <p className="text-[15px] leading-relaxed text-ink-600">
// // // //               Every card below is a deployed product with a real domain — not a mockup. Open them,
// // // //               resize the window, click around. The interactions you feel are the work.
// // // //             </p>
// // // //             <a
// // // //               href={profile.github}
// // // //               target="_blank"
// // // //               rel="noreferrer"
// // // //               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
// // // //             >
// // // //               <GithubIcon className="size-3.5" /> more repos on github
// // // //             </a>
// // // //           </Reveal>
// // // //         </div>

// // // //         <div className="relative">
// // // //           {projects.map((p, i) => (
// // // //             <ProjectCard key={p.id} p={p} i={i} />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // import type { ReactNode } from "react";
// // // import { ArrowUpRight, Check, Code2, ExternalLink } from "lucide-react";
// // // import { GithubIcon } from "@/components/BrandIcons";
// // // import type { Project } from "@/lib/data";
// // // import { EASE, projects, profile } from "@/lib/data";
// // // import { Reveal, SectionLabel } from "@/components/ui";
// // // import { cn } from "@/utils/cn";

// // // const accentMap = {
// // //   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
// // //   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
// // //   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// // // } as const;

// // // const techIconMap: Record<string, string> = {
// // //   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
// // //   "React Router": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
// // //   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
// // //   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// // //   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
// // //   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
// // //   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
// // //   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// // //   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// // // };

// // // function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
// // //   const px = useMotionValue(0.5);
// // //   const py = useMotionValue(0.5);
// // //   const sx = useSpring(px, { stiffness: 200, damping: 22 });
// // //   const sy = useSpring(py, { stiffness: 200, damping: 22 });
// // //   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
// // //   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

// // //   return (
// // //     <motion.div
// // //       className={className}
// // //       style={{ rotateX, rotateY, transformPerspective: 1400 }}
// // //       onPointerMove={(e) => {
// // //         const r = e.currentTarget.getBoundingClientRect();
// // //         px.set((e.clientX - r.left) / r.width);
// // //         py.set((e.clientY - r.top) / r.height);
// // //       }}
// // //       onPointerLeave={() => {
// // //         px.set(0.5);
// // //         py.set(0.5);
// // //       }}
// // //     >
// // //       {children}
// // //     </motion.div>
// // //   );
// // // }

// // // function ProjectCard({ p, i }: { p: Project; i: number }) {
// // //   const a = accentMap[p.accent];

// // //   return (
// // //     <div
// // //       className="mb-5 transition-all duration-500 md:sticky md:mb-8"
// // //       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
// // //     >
// // //       <Reveal y={40} once={false}>
// // //         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
// // //           <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
// // //             {/* visual */}
// // //             <div className="relative self-start overflow-hidden bg-paper-50">
// // //               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
// // //                 <span className="flex gap-1.5">
// // //                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // //                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
// // //                   ))}
// // //                 </span>
// // //                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
// // //                   <ExternalLink size={9} className="shrink-0 opacity-60" />
// // //                   {p.liveLabel}
// // //                 </span>
// // //               </div>

// // //               <div className="relative overflow-hidden">
// // //                 <motion.img
// // //                   src={p.image}
// // //                   alt={`${p.name} preview`}
// // //                   loading="lazy"
// // //                   className="block h-auto w-full"
// // //                   initial={{ opacity: 0 }}
// // //                   whileInView={{ opacity: 1 }}
// // //                   viewport={{ once: false, amount: 0.2 }}
// // //                   transition={{ duration: 0.7, ease: EASE }}
// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
// // //                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

// // //               </div>
// // //             </div>

// // //             {/* content */}
// // //             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
// // //               <span className={cn("absolute right-0 top-0 h-full w-[3px] md:h-[3px] md:w-full", a.soft)} />
// // //               <div>
// // //                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
// // //                   <span>
// // //                     {p.index} / {p.year}
// // //                   </span>
// // //                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
// // //                 </div>
// // //                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
// // //                   {p.name}
// // //                 </h3>
// // //                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
// // //                   {p.summary}
// // //                 </p>

// // //                 <ul className="mt-5 space-y-2.5">
// // //                   {p.bullets.map((b, bi) => (
// // //                     <motion.li
// // //                       key={b}
// // //                       initial={{ opacity: 0, x: -12 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
// // //                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
// // //                     >
// // //                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
// // //                       {b}
// // //                     </motion.li>
// // //                   ))}
// // //                 </ul>

// // //                 <div className="mt-6 flex flex-wrap gap-1.5">
// // //                   {p.stack.map((s) => (
// // //                     <span
// // //                       key={s}
// // //                       className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
// // //                     >
// // //                       {techIconMap[s] ? (
// // //                         <img src={techIconMap[s]} alt="" className="size-4 object-contain" />
// // //                       ) : (
// // //                         <Code2 size={14} aria-hidden />
// // //                       )}
// // //                       {s}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="flex flex-wrap items-center gap-2.5">
// // //                 <a
// // //                   href={p.live}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
// // //                 >
// // //                   Visit live site
// // //                   <ArrowUpRight
// // //                     size={15}
// // //                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // //                   />
// // //                 </a>
// // //                 <a
// // //                   href={profile.github}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
// // //                 >
// // //                   <GithubIcon className="size-3.5" /> source
// // //                 </a>
// // //                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
// // //                   photo: {p.credit}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </TiltCard>
// // //       </Reveal>
// // //     </div>
// // //   );
// // // }

// // // export default function Projects() {
// // //   return (
// // //     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
// // //       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
// // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // //         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
// // //           <div>
// // //             <SectionLabel index="01" label="Selected work" />
// // //             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
// // //               Three builds,
// // //               <br />
// // //               <span className="text-cobalt-500">live right now.</span>
// // //             </h2>
// // //           </div>
// // //           <Reveal delay={0.1} className="max-w-[38ch]">
// // //             <p className="text-[15px] leading-relaxed text-ink-600">
// // //               Every card below is a deployed product with a real domain — not a mockup. Open them,
// // //               resize the window, click around. The interactions you feel are the work.
// // //             </p>
// // //             <a
// // //               href={profile.github}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
// // //             >
// // //               <GithubIcon className="size-3.5" /> more repos on github
// // //             </a>
// // //           </Reveal>
// // //         </div>

// // //         <div className="relative">
// // //           {projects.map((p, i) => (
// // //             <ProjectCard key={p.id} p={p} i={i} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // import type { ReactNode } from "react";
// // import { ArrowUpRight, Check, Code2, ExternalLink } from "lucide-react";
// // import { GithubIcon } from "@/components/BrandIcons";
// // import type { Project } from "@/lib/data";
// // import { EASE, projects, profile } from "@/lib/data";
// // import { Reveal, SectionLabel } from "@/components/ui";
// // import { cn } from "@/utils/cn";

// // const accentMap = {
// //   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
// //   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
// //   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// // } as const;

// // const techIconMap: Record<string, string> = {
// //   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
// //   "React Router": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
// //   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
// //   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// //   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
// //   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
// //   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
// //   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// //   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// // };

// // function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
// //   const px = useMotionValue(0.5);
// //   const py = useMotionValue(0.5);
// //   const sx = useSpring(px, { stiffness: 200, damping: 22 });
// //   const sy = useSpring(py, { stiffness: 200, damping: 22 });
// //   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
// //   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

// //   return (
// //     <motion.div
// //       className={className}
// //       style={{ rotateX, rotateY, transformPerspective: 1400 }}
// //       onPointerMove={(e) => {
// //         const r = e.currentTarget.getBoundingClientRect();
// //         px.set((e.clientX - r.left) / r.width);
// //         py.set((e.clientY - r.top) / r.height);
// //       }}
// //       onPointerLeave={() => {
// //         px.set(0.5);
// //         py.set(0.5);
// //       }}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // }

// // function ProjectCard({ p, i }: { p: Project; i: number }) {
// //   const a = accentMap[p.accent];

// //   return (
// //     <div
// //       className="sticky mb-8 transition-all duration-500"
// //       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
// //     >
// //       <Reveal y={40} once={false}>
// //         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
// //           <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
// //             {/* visual */}
// //             <div className="relative self-start overflow-hidden bg-paper-50">
// //               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
// //                 <span className="flex gap-1.5">
// //                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// //                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
// //                   ))}
// //                 </span>
// //                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
// //                   <ExternalLink size={9} className="shrink-0 opacity-60" />
// //                   {p.liveLabel}
// //                 </span>
// //               </div>

// //               <div className="relative overflow-hidden">
// //                 <motion.img
// //                   src={p.image}
// //                   alt={`${p.name} preview`}
// //                   loading="lazy"
// //                   className="block h-auto w-full"
// //                   initial={{ opacity: 0 }}
// //                   whileInView={{ opacity: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.7, ease: EASE }}
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
// //                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

// //               </div>
// //             </div>

// //             {/* content */}
// //             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
// //               <span className={cn("absolute right-0 top-0 h-full w-[3px] md:h-[3px] md:w-full", a.soft)} />
// //               <div>
// //                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
// //                   <span>
// //                     {p.index} / {p.year}
// //                   </span>
// //                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
// //                 </div>
// //                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
// //                   {p.name}
// //                 </h3>
// //                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
// //                   {p.summary}
// //                 </p>

// //                 <ul className="mt-5 space-y-2.5">
// //                   {p.bullets.map((b, bi) => (
// //                     <motion.li
// //                       key={b}
// //                       initial={{ opacity: 0, x: -12 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       viewport={{ once: true }}
// //                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
// //                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
// //                     >
// //                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
// //                       {b}
// //                     </motion.li>
// //                   ))}
// //                 </ul>

// //                 <div className="mt-6 flex flex-wrap gap-1.5">
// //                   {p.stack.map((s) => (
// //                     <span
// //                       key={s}
// //                       className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
// //                     >
// //                       {techIconMap[s] ? (
// //                         <img src={techIconMap[s]} alt="" className="size-4 object-contain" />
// //                       ) : (
// //                         <Code2 size={14} aria-hidden />
// //                       )}
// //                       {s}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="flex flex-wrap items-center gap-2.5">
// //                 <a
// //                   href={p.live}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
// //                 >
// //                   Visit live site
// //                   <ArrowUpRight
// //                     size={15}
// //                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// //                   />
// //                 </a>
// //                 <a
// //                   href={profile.github}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
// //                 >
// //                   <GithubIcon className="size-3.5" /> source
// //                 </a>
// //                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
// //                   photo: {p.credit}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </TiltCard>
// //       </Reveal>
// //     </div>
// //   );
// // }

// // export default function Projects() {
// //   return (
// //     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
// //       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
// //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// //         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
// //           <div>
// //             <SectionLabel index="01" label="Selected work" />
// //             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
// //               Three builds,
// //               <br />
// //               <span className="text-cobalt-500">live right now.</span>
// //             </h2>
// //           </div>
// //           <Reveal delay={0.1} className="max-w-[38ch]">
// //             <p className="text-[15px] leading-relaxed text-ink-600">
// //               Every card below is a deployed product with a real domain — not a mockup. Open them,
// //               resize the window, click around. The interactions you feel are the work.
// //             </p>
// //             <a
// //               href={profile.github}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
// //             >
// //               <GithubIcon className="size-3.5" /> more repos on github
// //             </a>
// //           </Reveal>
// //         </div>

// //         <div className="relative">
// //           {projects.map((p, i) => (
// //             <ProjectCard key={p.id} p={p} i={i} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import type { ReactNode } from "react";
// import { ArrowUpRight, Check, Code2, ExternalLink } from "lucide-react";
// import { GithubIcon } from "@/components/BrandIcons";
// import type { Project } from "@/lib/data";
// import { EASE, projects, profile } from "@/lib/data";
// import { Reveal, SectionLabel } from "@/components/ui";
// import { cn } from "@/utils/cn";

// const accentMap = {
//   cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
//   lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
//   flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
// } as const;

// const techIconMap: Record<string, string> = {
//   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   "React Router": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
//   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
//   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
//   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
//   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// };

// function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
//   const px = useMotionValue(0.5);
//   const py = useMotionValue(0.5);
//   const sx = useSpring(px, { stiffness: 200, damping: 22 });
//   const sy = useSpring(py, { stiffness: 200, damping: 22 });
//   const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
//   const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

//   return (
//     <motion.div
//       className={className}
//       style={{ rotateX, rotateY, transformPerspective: 1400 }}
//       onPointerMove={(e) => {
//         const r = e.currentTarget.getBoundingClientRect();
//         px.set((e.clientX - r.left) / r.width);
//         py.set((e.clientY - r.top) / r.height);
//       }}
//       onPointerLeave={() => {
//         px.set(0.5);
//         py.set(0.5);
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function ProjectCard({ p, i }: { p: Project; i: number }) {
//   const a = accentMap[p.accent];

//   return (
//     <div
//       className="sticky mb-8 transition-all duration-500"
//       style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
//     >
//       <Reveal y={40} once={false}>
//         <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
//           <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
//             {/* visual */}
//             <div className="relative self-start overflow-hidden bg-paper-50">
//               <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
//                 <span className="flex gap-1.5">
//                   {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
//                     <span key={c} className="size-2 rounded-full" style={{ background: c }} />
//                   ))}
//                 </span>
//                 <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
//                   <ExternalLink size={9} className="shrink-0 opacity-60" />
//                   {p.liveLabel}
//                 </span>
//               </div>

//               <div className="relative overflow-hidden">
//                 <motion.img
//                   src={p.image}
//                   alt={`${p.name} preview`}
//                   loading="lazy"
//                   className="block h-auto w-full"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.7, ease: EASE }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
//                 <div className="dot-grid-dark absolute inset-0 opacity-40" />

//               </div>
//             </div>

//             {/* content */}
//             <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
//               <span className={cn("absolute right-0 top-0 h-full w-[3px] md:h-[3px] md:w-full", a.soft)} />
//               <div>
//                 <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
//                   <span>
//                     {p.index} / {p.year}
//                   </span>
//                   <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
//                 </div>
//                 <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
//                   {p.name}
//                 </h3>
//                 <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
//                   {p.summary}
//                 </p>

//                 <ul className="mt-5 space-y-2.5">
//                   {p.bullets.map((b, bi) => (
//                     <motion.li
//                       key={b}
//                       initial={{ opacity: 0, x: -12 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
//                       className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
//                     >
//                       <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
//                       {b}
//                     </motion.li>
//                   ))}
//                 </ul>

//                 <div className="mt-6 flex flex-wrap gap-1.5">
//                   {p.stack.map((s) => (
//                     <span
//                       key={s}
//                       className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
//                     >
//                       {techIconMap[s] ? (
//                         <img src={techIconMap[s]} alt="" className="size-4 object-contain" />
//                       ) : (
//                         <Code2 size={14} aria-hidden />
//                       )}
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center gap-2.5">
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
//                 >
//                   Visit live site
//                   <ArrowUpRight
//                     size={15}
//                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                   />
//                 </a>
//                 <a
//                   href={profile.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
//                 >
//                   <GithubIcon className="size-3.5" /> source
//                 </a>
//                 <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
//                   photo: {p.credit}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </TiltCard>
//       </Reveal>
//     </div>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
//       <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
//       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
//         <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <SectionLabel index="01" label="Selected work" />
//             <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
//               <span className="text-cobalt-500">Projects</span>
//             </h2>
//           </div>
//           <Reveal delay={0.1} className="max-w-[38ch]">
//             <p className="text-[15px] leading-relaxed text-ink-600">
//               Every card below is a deployed product with a real domain — not a mockup. Open them,
//               resize the window, click around. The interactions you feel are the work.
//             </p>
//             <a
//               href={profile.github}
//               target="_blank"
//               rel="noreferrer"
//               className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
//             >
//               <GithubIcon className="size-3.5" /> more repos on github
//             </a>
//           </Reveal>
//         </div>

//         <div className="relative">
//           {projects.map((p, i) => (
//             <ProjectCard key={p.id} p={p} i={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowUpRight, Check, Code2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import type { Project } from "@/lib/data";
import { EASE, projects, profile } from "@/lib/data";
import { Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/utils/cn";

const accentMap = {
  cobalt: { bg: "bg-cobalt-500", text: "text-cobalt-500", soft: "bg-cobalt-500/10" },
  lime: { bg: "bg-lime-acid", text: "text-lime-deep", soft: "bg-lime-acid/20" },
  flare: { bg: "bg-flare", text: "text-flare", soft: "bg-flare/10" },
} as const;

const techIconMap: Record<string, string> = {
  "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "React Router": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
};

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 200, damping: 22 });
  const sy = useSpring(py, { stiffness: 200, damping: 22 });
  const rotateX = useTransform(sy, [0, 1], [2.4, -2.4]);
  const rotateY = useTransform(sx, [0, 1], [-2.6, 2.6]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const a = accentMap[p.accent];

  return (
    <div
      className="sticky mb-8 transition-all duration-500"
      style={{ top: `${96 + i * 18}px`, zIndex: 10 + i }}
    >
      <Reveal y={40} once={false}>
        <TiltCard className="overflow-hidden rounded-[26px] border border-ink-900/12 bg-paper-50 shadow-[0_40px_80px_-50px_rgba(12,16,16,0.7)]">
          <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
            {/* visual */}
            <div className="relative self-start overflow-hidden bg-paper-50">
              <div className="flex items-center gap-2 border-b border-paper-300/10 bg-ink-800 px-3.5 py-2.5">
                <span className="flex gap-1.5">
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} className="size-2 rounded-full" style={{ background: c }} />
                  ))}
                </span>
                <span className="ml-1.5 flex flex-1 items-center gap-1.5 truncate rounded-md bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-paper-300/70">
                  <ExternalLink size={9} className="shrink-0 opacity-60" />
                  {p.liveLabel}
                </span>
              </div>

              <div className="relative overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  className="block h-auto w-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
                <div className="dot-grid-dark absolute inset-0 opacity-40" />

              </div>
            </div>

            {/* content */}
            <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-9">
              <span className={cn("absolute right-0 top-0 h-full w-[3px] md:h-[3px] md:w-full", a.soft)} />
              <div>
                <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-500">
                  <span>
                    {p.index} / {p.year}
                  </span>
                  <span className="hidden sm:inline">{p.role.split("·")[0].trim()}</span>
                </div>
                <h3 className="mt-3 font-display text-[34px] leading-[0.95] tracking-tight text-ink-900 sm:text-[42px]">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink-600">
                  {p.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.15 + bi * 0.1, ease: EASE }}
                      className="flex gap-2.5 text-[13.5px] leading-snug text-ink-700"
                    >
                      <Check size={15} className={cn("mt-0.5 shrink-0", a.text)} strokeWidth={3} />
                      {b}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/12 bg-paper-100 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-600 transition-colors hover:border-ink-900/40 hover:bg-paper-200"
                    >
                      {techIconMap[s] ? (
                        <img src={techIconMap[s]} alt="" className="size-4 object-contain" />
                      ) : (
                        <Code2 size={14} aria-hidden />
                      )}
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 font-display text-[14px] font-bold text-paper-50 transition-colors hover:bg-cobalt-500"
                >
                  Visit live site
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-600 transition-colors hover:border-ink-900 hover:text-ink-900"
                >
                  <GithubIcon className="size-3.5" /> source
                </a>
                <span className="ml-auto font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-500/60">
                  photo: {p.credit}
                </span>
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative bg-paper-200/70 py-20 sm:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-col gap-8 border-b border-ink-900/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="01" label="Selected work" />
            <h2 className="mt-5 max-w-[16ch] font-display text-[13vw] leading-[0.86] tracking-[-0.045em] text-ink-900 sm:text-[9vw] lg:text-[6.4vw]">
              <span className="text-cobalt-500">Projects</span>
            </h2>
          </div>
          <Reveal delay={0.1} className="max-w-[38ch]">
            <p className="text-[15px] leading-relaxed text-ink-600">
              Every card below is a deployed product with a real domain — not a mockup. Open them,
              resize the window, click around. The interactions you feel are the work.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 underline decoration-lime-deep decoration-2 underline-offset-4 transition-colors hover:decoration-cobalt-500"
            >
              <GithubIcon className="size-3.5" /> more repos on github
            </a>
          </Reveal>
        </div>

        <div className="relative">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
