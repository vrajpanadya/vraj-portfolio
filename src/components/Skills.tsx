// // // // import { AnimatePresence, motion } from "framer-motion";
// // // // import {
// // // //   BarChart3,
// // // //   Braces,
// // // //   Code2,
// // // //   Database,
// // // //   GitBranch,
// // // //   Send,
// // // //   Wrench,
// // // //   Zap,
// // // // } from "lucide-react";
// // // // import { useState } from "react";
// // // // import { EASE, skillGroups } from "@/lib/data";
// // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // import { cn } from "@/utils/cn";

// // // // const icons = { Code2, Database, Braces, Wrench } as const;

// // // // const pipeline = [
// // // //   { step: "01", label: "Git", note: "branch per feature", icon: GitBranch },
// // // //   { step: "02", label: "VS Code", note: "snippets + eslint", icon: Zap },
// // // //   { step: "03", label: "Postman", note: "contract before UI", icon: Send },
// // // //   { step: "04", label: "Compass", note: "profile the query", icon: Database },
// // // //   { step: "05", label: "Power BI", note: "measure the outcome", icon: BarChart3 },
// // // //   { step: "06", label: "Vercel", note: "preview → prod", icon: Code2 },
// // // // ];

// // // // function Meter({ level, delay, tint }: { level: number; delay: number; tint: string }) {
// // // //   return (
// // // //     <div className="relative mt-3 h-[6px] w-full overflow-hidden rounded-full bg-paper-300/12">
// // // //       <motion.div
// // // //         className={cn("absolute inset-y-0 left-0 rounded-full", tint)}
// // // //         initial={{ width: 0 }}
// // // //         whileInView={{ width: `${level}%` }}
// // // //         viewport={{ once: true }}
// // // //         transition={{ duration: 1.1, delay, ease: EASE }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function Skills() {
// // // //   const [active, setActive] = useState(skillGroups[0].id);
// // // //   const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];
// // // //   const Icon = icons[group.icon as keyof typeof icons] ?? Code2;

// // // //   const tints: Record<string, { bar: string; text: string; glow: string }> = {
// // // //     cobalt: { bar: "bg-cobalt-400", text: "text-cobalt-300", glow: "rgba(90,104,255,0.22)" },
// // // //     teal: { bar: "bg-teal-glow", text: "text-teal-glow", glow: "rgba(55,224,196,0.2)" },
// // // //     flare: { bar: "bg-flare", text: "text-flare", glow: "rgba(255,106,61,0.2)" },
// // // //     lime: { bar: "bg-lime-acid", text: "text-lime-acid", glow: "rgba(205,245,100,0.2)" },
// // // //   };
// // // //   const tint = tints[group.tint] ?? tints.lime;

// // // //   return (
// // // //     <section id="stack" className="relative overflow-hidden bg-ink-900 py-20 text-paper-100 sm:py-28">
// // // //       <div className="dot-grid-dark absolute inset-0 opacity-50" />
// // // //       <motion.div
// // // //         aria-hidden
// // // //         className="absolute -right-40 top-10 size-[520px] rounded-full blur-[110px]"
// // // //         style={{ background: tint.glow, transition: "background 700ms ease" }}
// // // //       />

// // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// // // //           <div>
// // // //             <SectionLabel index="02" label="The stack" dark />
// // // //             <h2 className="mt-5 max-w-[15ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-paper-50 sm:text-[8vw] lg:text-[5.6vw]">
// // // //               Tools I actually <span className="text-lime-acid">ship with.</span>
// // // //             </h2>
// // // //           </div>
// // // //           <Reveal delay={0.1}>
// // // //             <p className="max-w-[36ch] text-[15px] leading-relaxed text-paper-200/70">
// // // //               Pick a column — front end, data layer, the languages from my degree, or the
// // // //               workflow that holds it together.
// // // //             </p>
// // // //           </Reveal>
// // // //         </div>

// // // //         <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(230px,0.72fr)_2.28fr] lg:gap-10">
// // // //           {/* categories */}
// // // //           <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">
// // // //             {skillGroups.map((g) => {
// // // //               const CatIcon = icons[g.icon as keyof typeof icons] ?? Code2;
// // // //               const isActive = g.id === active;
// // // //               return (
// // // //                 <button
// // // //                   key={g.id}
// // // //                   onClick={() => setActive(g.id)}
// // // //                   className={cn(
// // // //                     "group relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors lg:w-full",
// // // //                     isActive
// // // //                       ? "border-transparent text-ink-900"
// // // //                       : "border-paper-300/12 text-paper-100 hover:border-paper-300/35",
// // // //                   )}
// // // //                 >
// // // //                   {isActive && (
// // // //                     <motion.span
// // // //                       layoutId="skill-cat"
// // // //                       className="absolute inset-0 rounded-2xl bg-lime-acid"
// // // //                       transition={{ type: "spring", stiffness: 340, damping: 30 }}
// // // //                     />
// // // //                   )}
// // // //                   <span className="relative z-10">
// // // //                     <CatIcon size={16} className={isActive ? "text-ink-900" : "text-paper-300/60"} />
// // // //                   </span>
// // // //                   <span className="relative z-10 min-w-0">
// // // //                     <span className="block font-display text-[16px] font-bold tracking-tight whitespace-nowrap">
// // // //                       {g.label}
// // // //                     </span>
// // // //                     <span
// // // //                       className={cn(
// // // //                         "hidden text-[12px] leading-snug lg:block",
// // // //                         isActive ? "text-ink-700" : "text-paper-300/45",
// // // //                       )}
// // // //                     >
// // // //                       {g.kicker}
// // // //                     </span>
// // // //                   </span>
// // // //                   <span
// // // //                     className={cn(
// // // //                       "relative z-10 ml-auto hidden font-mono text-[10px] tabular-nums lg:block",
// // // //                       isActive ? "text-ink-700" : "text-paper-300/35",
// // // //                     )}
// // // //                   >
// // // //                     {String(g.skills.length).padStart(2, "0")}
// // // //                   </span>
// // // //                 </button>
// // // //               );
// // // //             })}

// // // //             <div className="mt-1 hidden rounded-2xl border border-paper-300/12 p-4 lg:block">
// // // //               <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/50">
// // // //                 <Icon size={12} className={tint.text} /> {group.label}
// // // //               </div>
// // // //               <p className="mt-2 text-[13px] leading-snug text-paper-200/70">
// // // //                 Average depth across{" "}
// // // //                 <span className={cn("font-mono font-bold", tint.text)}>
// // // //                   {Math.round(group.skills.reduce((s, x) => s + x.level, 0) / group.skills.length)}%
// // // //                 </span>{" "}
// // // //                 — measured by what I've shipped, not by a badge.
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* skills grid */}
// // // //           <div>
// // // //             <AnimatePresence mode="wait">
// // // //               <motion.div
// // // //                 key={group.id}
// // // //                 initial={{ opacity: 0, y: 18 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 exit={{ opacity: 0, y: -12 }}
// // // //                 transition={{ duration: 0.45, ease: EASE }}
// // // //                 className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
// // // //               >
// // // //                 {group.skills.map((s, i) => (
// // // //                   <motion.div
// // // //                     key={s.name}
// // // //                     initial={{ opacity: 0, y: 20 }}
// // // //                     animate={{ opacity: 1, y: 0 }}
// // // //                     transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
// // // //                     whileHover={{ y: -4 }}
// // // //                     className="group relative overflow-hidden rounded-[18px] border border-paper-300/12 bg-paper-50/[0.035] p-4 transition-colors hover:border-paper-300/30"
// // // //                   >
// // // //                     <div className="flex items-baseline justify-between gap-2">
// // // //                       <h3 className="font-display text-[19px] font-bold leading-tight tracking-tight text-paper-50">
// // // //                         {s.name}
// // // //                       </h3>
// // // //                       <span className={cn("font-mono text-[11px] tabular-nums", tint.text)}>
// // // //                         {s.level}
// // // //                       </span>
// // // //                     </div>
// // // //                     <Meter level={s.level} delay={0.15 + i * 0.05} tint={tint.bar} />
// // // //                     <p className="mt-3 text-[12.5px] leading-snug text-paper-300/55">{s.note}</p>
// // // //                     <span
// // // //                       className={cn(
// // // //                         "absolute -right-6 -top-6 size-14 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
// // // //                         tint.bar,
// // // //                       )}
// // // //                     />
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </motion.div>
// // // //             </AnimatePresence>

// // // //             {/* pipeline */}
// // // //             <div className="mt-10 rounded-[22px] border border-paper-300/12 bg-ink-950/60 p-4 sm:p-5">
// // // //               <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/45">
// // // //                 How a feature moves through my machine
// // // //               </p>
// // // //               <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
// // // //                 {pipeline.map((p, i) => {
// // // //                   const StepIcon = p.icon;
// // // //                   return (
// // // //                     <div
// // // //                       key={p.label}
// // // //                       className="group flex min-w-[132px] flex-1 items-start gap-2.5 rounded-xl border border-transparent px-2.5 py-2 transition-colors hover:border-paper-300/20 hover:bg-paper-50/[0.04]"
// // // //                     >
// // // //                       <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-paper-50/[0.06] text-paper-300/70 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
// // // //                         <StepIcon size={13} />
// // // //                       </span>
// // // //                       <span>
// // // //                         <span className="block font-display text-[13.5px] font-semibold text-paper-50">
// // // //                           {p.label}
// // // //                         </span>
// // // //                         <span className="block text-[11.5px] leading-snug text-paper-300/50">
// // // //                           {p.note}
// // // //                         </span>
// // // //                       </span>
// // // //                       {i < pipeline.length - 1 && (
// // // //                         <span className="ml-auto hidden font-mono text-[10px] text-paper-300/25 sm:block">
// // // //                           →
// // // //                         </span>
// // // //                       )}
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { motion } from "framer-motion";
// // // import { Braces, Code2, Database, Wrench } from "lucide-react";
// // // import { EASE, skillGroups } from "@/lib/data";
// // // import { Reveal, SectionLabel } from "@/components/ui";
// // // import { cn } from "@/utils/cn";

// // // const categoryIcons = { Code2, Database, Braces, Wrench } as const;

// // // const skillIcons: Record<string, string> = {
// // //   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
// // //   "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// // //   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// // //   HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
// // //   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
// // //   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
// // //   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
// // //   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// // //   "MongoDB Compass": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// // //   MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
// // //   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
// // //   "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
// // //   C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
// // //   Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
// // //   Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
// // //   "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
// // //   PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
// // //   "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
// // //   "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
// // //   Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
// // //   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// // // };

// // // const accents = {
// // //   cobalt: { icon: "text-cobalt-300", glow: "group-hover:border-cobalt-300/35 group-hover:bg-cobalt-500/[0.08]", orb: "bg-cobalt-500/20" },
// // //   teal: { icon: "text-teal-glow", glow: "group-hover:border-teal-glow/35 group-hover:bg-teal-glow/[0.06]", orb: "bg-teal-glow/20" },
// // //   flare: { icon: "text-flare", glow: "group-hover:border-flare/35 group-hover:bg-flare/[0.06]", orb: "bg-flare/20" },
// // //   lime: { icon: "text-lime-acid", glow: "group-hover:border-lime-acid/35 group-hover:bg-lime-acid/[0.06]", orb: "bg-lime-acid/20" },
// // // } as const;

// // // export default function Skills() {
// // //   return (
// // //     <section id="stack" className="relative overflow-hidden bg-ink-900 py-20 text-paper-100 sm:py-28">
// // //       <div className="dot-grid-dark absolute inset-0 opacity-45" />
// // //       <div className="absolute -right-40 top-10 size-[520px] rounded-full bg-cobalt-500/10 blur-[110px]" />

// // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// // //           <div>
// // //             <SectionLabel index="02" label="The stack" dark />
// // //             <h2 className="mt-5 max-w-[15ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-paper-50 sm:text-[8vw] lg:text-[5.6vw]">
// // //               Tools I actually <span className="text-lime-acid">ship with.</span>
// // //             </h2>
// // //           </div>
// // //           <Reveal delay={0.1}>
// // //             <p className="max-w-[38ch] text-[15px] leading-relaxed text-paper-200/70">
// // //               A practical toolkit shaped by coursework, experiments and products already live.
// // //             </p>
// // //           </Reveal>
// // //         </div>

// // //         <div className="mt-12 grid gap-5 md:grid-cols-2">
// // //           {skillGroups.map((group, groupIndex) => {
// // //             const CategoryIcon = categoryIcons[group.icon as keyof typeof categoryIcons] ?? Code2;
// // //             const accent = accents[group.tint as keyof typeof accents] ?? accents.lime;

// // //             return (
// // //               <motion.article
// // //                 key={group.id}
// // //                 initial={{ opacity: 0, y: 28 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true, margin: "-10%" }}
// // //                 transition={{ duration: 0.7, delay: groupIndex * 0.08, ease: EASE }}
// // //                 whileHover={{ y: -5 }}
// // //                 className={cn("group relative overflow-hidden rounded-[28px] border border-paper-300/12 bg-ink-950/55 p-5 transition-colors sm:p-7", accent.glow)}
// // //               >
// // //                 <div className={cn("absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accent.orb)} />
// // //                 <div className="relative flex items-start gap-3">
// // //                   <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-paper-300/12 bg-paper-50/[0.05]">
// // //                     <CategoryIcon size={18} className={accent.icon} />
// // //                   </span>
// // //                   <div>
// // //                     <h3 className="font-display text-[24px] font-bold tracking-tight text-paper-50">{group.label}</h3>
// // //                     <p className="mt-1 text-[12.5px] text-paper-300/50">{group.kicker}</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="relative mt-6 flex flex-wrap gap-2.5">
// // //                   {group.skills.map((skill, skillIndex) => (
// // //                     <motion.div
// // //                       key={skill.name}
// // //                       initial={{ opacity: 0, scale: 0.9 }}
// // //                       whileInView={{ opacity: 1, scale: 1 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ duration: 0.45, delay: groupIndex * 0.06 + skillIndex * 0.035, ease: EASE }}
// // //                       whileHover={{ y: -2, scale: 1.025 }}
// // //                       title={skill.note}
// // //                       className="flex items-center gap-2 rounded-full border border-paper-300/15 bg-paper-50/[0.055] px-3.5 py-2 text-[13px] font-medium text-paper-200 transition-colors hover:border-paper-300/35 hover:bg-paper-50/[0.1] hover:text-paper-50"
// // //                     >
// // //                       {skillIcons[skill.name] ? (
// // //                         <span className="grid size-6 place-items-center rounded-md bg-paper-50/95 p-1">
// // //                           <img src={skillIcons[skill.name]} alt="" loading="lazy" className="size-full object-contain" />
// // //                         </span>
// // //                       ) : (
// // //                         <span className="grid size-6 place-items-center rounded-md bg-paper-50/[0.08]">
// // //                           <Code2 size={13} className={accent.icon} />
// // //                         </span>
// // //                       )}
// // //                       {skill.name}
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>
// // //               </motion.article>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { motion } from "framer-motion";
// // import { Braces, Code2, Database, Wrench } from "lucide-react";
// // import { EASE, skillGroups } from "@/lib/data";
// // import { Reveal, SectionLabel } from "@/components/ui";
// // import { cn } from "@/utils/cn";

// // const categoryIcons = { Code2, Database, Braces, Wrench } as const;

// // const skillIcons: Record<string, string> = {
// //   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
// //   "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// //   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
// //   HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
// //   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
// //   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
// //   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
// //   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// //   "MongoDB Compass": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
// //   MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
// //   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
// //   "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
// //   C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
// //   Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
// //   Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
// //   "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
// //   PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
// //   "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
// //   "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
// //   Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
// //   "Power BI": "https://cdn.simpleicons.org/powerbi/F2C811",
// //   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// // };

// // const accents = {
// //   cobalt: { icon: "text-cobalt-300", glow: "group-hover:border-cobalt-300/35 group-hover:bg-cobalt-500/[0.08]", orb: "bg-cobalt-500/20" },
// //   teal: { icon: "text-teal-glow", glow: "group-hover:border-teal-glow/35 group-hover:bg-teal-glow/[0.06]", orb: "bg-teal-glow/20" },
// //   flare: { icon: "text-flare", glow: "group-hover:border-flare/35 group-hover:bg-flare/[0.06]", orb: "bg-flare/20" },
// //   lime: { icon: "text-lime-acid", glow: "group-hover:border-lime-acid/35 group-hover:bg-lime-acid/[0.06]", orb: "bg-lime-acid/20" },
// // } as const;

// // export default function Skills() {
// //   return (
// //     <section id="stack" className="relative overflow-hidden bg-ink-900 py-20 text-paper-100 sm:py-28">
// //       <div className="dot-grid-dark absolute inset-0 opacity-45" />
// //       <div className="absolute -right-40 top-10 size-[520px] rounded-full bg-cobalt-500/10 blur-[110px]" />

// //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// //         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
// //           <div>
// //             <SectionLabel index="02" label="The stack" dark />
// //             <h2 className="mt-5 max-w-[15ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-paper-50 sm:text-[8vw] lg:text-[5.6vw]">
// //               Tools I actually <span className="text-lime-acid">ship with.</span>
// //             </h2>
// //           </div>
// //           <Reveal delay={0.1}>
// //             <p className="max-w-[38ch] text-[15px] leading-relaxed text-paper-200/70">
// //               A practical toolkit shaped by coursework, experiments and products already live.
// //             </p>
// //           </Reveal>
// //         </div>

// //         <div className="mt-12 grid gap-5 md:grid-cols-2">
// //           {skillGroups.map((group, groupIndex) => {
// //             const CategoryIcon = categoryIcons[group.icon as keyof typeof categoryIcons] ?? Code2;
// //             const accent = accents[group.tint as keyof typeof accents] ?? accents.lime;

// //             return (
// //               <motion.article
// //                 key={group.id}
// //                 initial={{ opacity: 0, y: 28 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, margin: "-10%" }}
// //                 transition={{ duration: 0.7, delay: groupIndex * 0.08, ease: EASE }}
// //                 whileHover={{ y: -5 }}
// //                 className={cn("group relative overflow-hidden rounded-[28px] border border-paper-300/12 bg-ink-950/55 p-5 transition-colors sm:p-7", accent.glow)}
// //               >
// //                 <div className={cn("absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accent.orb)} />
// //                 <div className="relative flex items-start gap-3">
// //                   <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-paper-300/12 bg-paper-50/[0.05]">
// //                     <CategoryIcon size={18} className={accent.icon} />
// //                   </span>
// //                   <div>
// //                     <h3 className="font-display text-[24px] font-bold tracking-tight text-paper-50">{group.label}</h3>
// //                     <p className="mt-1 text-[12.5px] text-paper-300/50">{group.kicker}</p>
// //                   </div>
// //                 </div>

// //                 <div className="relative mt-6 flex flex-wrap gap-2.5">
// //                   {group.skills.map((skill, skillIndex) => (
// //                     <motion.div
// //                       key={skill.name}
// //                       initial={{ opacity: 0, scale: 0.9 }}
// //                       whileInView={{ opacity: 1, scale: 1 }}
// //                       viewport={{ once: true }}
// //                       transition={{ duration: 0.45, delay: groupIndex * 0.06 + skillIndex * 0.035, ease: EASE }}
// //                       whileHover={{ y: -2, scale: 1.025 }}
// //                       title={skill.note}
// //                       className="flex items-center gap-2 rounded-full border border-paper-300/15 bg-paper-50/[0.055] px-3.5 py-2 text-[13px] font-medium text-paper-200 transition-colors hover:border-paper-300/35 hover:bg-paper-50/[0.1] hover:text-paper-50"
// //                     >
// //                       {skill.name === "Data modelling" ? (
// //                         <span className="grid size-6 place-items-center rounded-md bg-teal-glow/15">
// //                           <Database size={14} className="text-teal-glow" />
// //                         </span>
// //                       ) : skillIcons[skill.name] ? (
// //                         <span className="grid size-6 place-items-center rounded-md bg-paper-50/95 p-1">
// //                           <img src={skillIcons[skill.name]} alt="" loading="lazy" className="size-full object-contain" />
// //                         </span>
// //                       ) : (
// //                         <span className="grid size-6 place-items-center rounded-md bg-paper-50/[0.08]">
// //                           <Code2 size={13} className={accent.icon} />
// //                         </span>
// //                       )}
// //                       {skill.name}
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.article>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { motion } from "framer-motion";
// import { Braces, Code2, Database, Wrench } from "lucide-react";
// import { EASE, skillGroups } from "@/lib/data";
// import { Reveal, SectionLabel } from "@/components/ui";
// import { cn } from "@/utils/cn";

// const categoryIcons = { Code2, Database, Braces, Wrench } as const;

// const skillIcons: Record<string, string> = {
//   "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
//   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
//   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   "MongoDB Compass": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
//   MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
//   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
//   "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
//   C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
//   Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
//   Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
//   "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
//   PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
//   "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
//   "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
//   Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
//   Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
// };

// const accents = {
//   cobalt: { icon: "text-cobalt-300", glow: "group-hover:border-cobalt-300/35 group-hover:bg-cobalt-500/[0.08]", orb: "bg-cobalt-500/20" },
//   teal: { icon: "text-teal-glow", glow: "group-hover:border-teal-glow/35 group-hover:bg-teal-glow/[0.06]", orb: "bg-teal-glow/20" },
//   flare: { icon: "text-flare", glow: "group-hover:border-flare/35 group-hover:bg-flare/[0.06]", orb: "bg-flare/20" },
//   lime: { icon: "text-lime-acid", glow: "group-hover:border-lime-acid/35 group-hover:bg-lime-acid/[0.06]", orb: "bg-lime-acid/20" },
// } as const;

// export default function Skills() {
//   return (
//     <section id="stack" className="relative overflow-hidden bg-ink-900 py-20 text-paper-100 sm:py-28">
//       <div className="dot-grid-dark absolute inset-0 opacity-45" />
//       <div className="absolute -right-40 top-10 size-[520px] rounded-full bg-cobalt-500/10 blur-[110px]" />

//       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <SectionLabel index="02" label="The stack" dark />
//            <h2 className="mt-5 max-w-[15ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-paper-50 sm:text-[8vw] lg:text-[5.6vw]">
//   Technical <span className="text-lime-acid">Skills.</span>
// </h2>
//           </div>
//           <Reveal delay={0.1}>
//             <p className="max-w-[48ch] text-[15px] leading-relaxed text-paper-200/70">
//   A collection of my technical skills honed through various projects and experience.
// </p>
//           </Reveal>
//         </div>

//         <div className="mt-12 grid gap-5 md:grid-cols-2">
//           {skillGroups.map((group, groupIndex) => {
//             const CategoryIcon = categoryIcons[group.icon as keyof typeof categoryIcons] ?? Code2;
//             const accent = accents[group.tint as keyof typeof accents] ?? accents.lime;

//             return (
//               <motion.article
//                 key={group.id}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-10%" }}
//                 transition={{ duration: 0.7, delay: groupIndex * 0.08, ease: EASE }}
//                 whileHover={{ y: -5 }}
//                 className={cn("group relative overflow-hidden rounded-[28px] border border-paper-300/12 bg-ink-950/55 p-5 transition-colors sm:p-7", accent.glow)}
//               >
//                 <div className={cn("absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accent.orb)} />
//                 <div className="relative flex items-start gap-3">
//                   <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-paper-300/12 bg-paper-50/[0.05]">
//                     <CategoryIcon size={18} className={accent.icon} />
//                   </span>
//                   <div>
//                     <h3 className="font-display text-[24px] font-bold tracking-tight text-paper-50">{group.label}</h3>
//                     <p className="mt-1 text-[12.5px] text-paper-300/50">{group.kicker}</p>
//                   </div>
//                 </div>

//                 <div className="relative mt-6 flex flex-wrap gap-2.5">
//                   {group.skills.map((skill, skillIndex) => (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.45, delay: groupIndex * 0.06 + skillIndex * 0.035, ease: EASE }}
//                       whileHover={{ y: -2, scale: 1.025 }}
//                       title={skill.note}
//                       className="flex items-center gap-2 rounded-full border border-paper-300/15 bg-paper-50/[0.055] px-3.5 py-2 text-[13px] font-medium text-paper-200 transition-colors hover:border-paper-300/35 hover:bg-paper-50/[0.1] hover:text-paper-50"
//                     >
//                       {skill.name === "Power BI" ? (
//                         <span className="flex size-6 items-end justify-center gap-[2px] rounded-md bg-paper-50/95 p-1">
//                           <span className="h-2 w-[3px] rounded-sm bg-[#F2C811]" />
//                           <span className="h-3 w-[3px] rounded-sm bg-[#E8B909]" />
//                           <span className="h-4 w-[3px] rounded-sm bg-[#DFA900]" />
//                         </span>
//                       ) : skill.name === "Data modelling" ? (
//                         <span className="grid size-6 place-items-center rounded-md bg-teal-glow/15">
//                           <Database size={14} className="text-teal-glow" />
//                         </span>
//                       ) : skillIcons[skill.name] ? (
//                         <span className="grid size-6 place-items-center rounded-md bg-paper-50/95 p-1">
//                           <img src={skillIcons[skill.name]} alt="" loading="lazy" className="size-full object-contain" />
//                         </span>
//                       ) : (
//                         <span className="grid size-6 place-items-center rounded-md bg-paper-50/[0.08]">
//                           <Code2 size={13} className={accent.icon} />
//                         </span>
//                       )}
//                       {skill.name}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Braces, Code2, Database, Wrench } from "lucide-react";
import { EASE, skillGroups } from "@/lib/data";
import { Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/utils/cn";

const categoryIcons = { Code2, Database, Braces, Wrench } as const;

const skillIcons: Record<string, string> = {
  "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "MongoDB Compass": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
};

const accents = {
  cobalt: { icon: "text-cobalt-300", glow: "group-hover:border-cobalt-300/35 group-hover:bg-cobalt-500/[0.08]", orb: "bg-cobalt-500/20" },
  teal: { icon: "text-teal-glow", glow: "group-hover:border-teal-glow/35 group-hover:bg-teal-glow/[0.06]", orb: "bg-teal-glow/20" },
  flare: { icon: "text-flare", glow: "group-hover:border-flare/35 group-hover:bg-flare/[0.06]", orb: "bg-flare/20" },
  lime: { icon: "text-lime-acid", glow: "group-hover:border-lime-acid/35 group-hover:bg-lime-acid/[0.06]", orb: "bg-lime-acid/20" },
} as const;

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-ink-900 py-20 text-paper-100 sm:py-28">
      <div className="dot-grid-dark absolute inset-0 opacity-45" />
      <div className="absolute -right-40 top-10 size-[520px] rounded-full bg-cobalt-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="02" label="Skills" dark />
            <h2 className="mt-5 max-w-[15ch] font-display text-[12vw] leading-[0.88] tracking-[-0.045em] text-paper-50 sm:text-[8vw] lg:text-[5.6vw]">
              Technical <span className="text-lime-acid">Skills</span>
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[38ch] text-[15px] leading-relaxed text-paper-200/70">
              A practical toolkit shaped by coursework, experiments and products already live.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const CategoryIcon = categoryIcons[group.icon as keyof typeof categoryIcons] ?? Code2;
            const accent = accents[group.tint as keyof typeof accents] ?? accents.lime;

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: groupIndex * 0.08, ease: EASE }}
                whileHover={{ y: -5 }}
                className={cn("group relative overflow-hidden rounded-[28px] border border-paper-300/12 bg-ink-950/55 p-5 transition-colors sm:p-7", accent.glow)}
              >
                <div className={cn("absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100", accent.orb)} />
                <div className="relative flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-paper-300/12 bg-paper-50/[0.05]">
                    <CategoryIcon size={18} className={accent.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-[24px] font-bold tracking-tight text-paper-50">{group.label}</h3>
                    <p className="mt-1 text-[12.5px] text-paper-300/50">{group.kicker}</p>
                  </div>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: groupIndex * 0.06 + skillIndex * 0.035, ease: EASE }}
                      whileHover={{ y: -2, scale: 1.025 }}
                      title={skill.note}
                      className="flex items-center gap-2 rounded-full border border-paper-300/15 bg-paper-50/[0.055] px-3.5 py-2 text-[13px] font-medium text-paper-200 transition-colors hover:border-paper-300/35 hover:bg-paper-50/[0.1] hover:text-paper-50"
                    >
                      {skill.name === "Power BI" ? (
                        <span className="flex size-6 items-end justify-center gap-[2px] rounded-md bg-paper-50/95 p-1">
                          <span className="h-2 w-[3px] rounded-sm bg-[#F2C811]" />
                          <span className="h-3 w-[3px] rounded-sm bg-[#E8B909]" />
                          <span className="h-4 w-[3px] rounded-sm bg-[#DFA900]" />
                        </span>
                      ) : skill.name === "Data modelling" ? (
                        <span className="grid size-6 place-items-center rounded-md bg-teal-glow/15">
                          <Database size={14} className="text-teal-glow" />
                        </span>
                      ) : skillIcons[skill.name] ? (
                        <span className="grid size-6 place-items-center rounded-md bg-paper-50/95 p-1">
                          <img src={skillIcons[skill.name]} alt="" loading="lazy" className="size-full object-contain" />
                        </span>
                      ) : (
                        <span className="grid size-6 place-items-center rounded-md bg-paper-50/[0.08]">
                          <Code2 size={13} className={accent.icon} />
                        </span>
                      )}
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
