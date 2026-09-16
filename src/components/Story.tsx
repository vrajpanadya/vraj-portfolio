// // // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // // // // // // // import { useRef } from "react";
// // // // // // // // import { EASE, principles, profile, services } from "@/lib/data";
// // // // // // // // import { MaskLine, Reveal, SectionLabel } from "@/components/ui";
// // // // // // // // import { cn } from "@/utils/cn";

// // // // // // // // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // // // // // // // const lead = [
// // // // // // // //   "I'm Vraj — a",
// // // // // // // //   "frontend engineer",
// // // // // // // //   "in Ahmedabad who",
// // // // // // // //   "builds for the",
// // // // // // // //   "last 5%.",
// // // // // // // // ];

// // // // // // // // export default function Story() {
// // // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// // // // // // // //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// // // // // // // //   return (
// // // // // // // //     <section id="story" className="relative bg-paper-100 py-20 sm:py-28">
// // // // // // // //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // // // // //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// // // // // // // //           {/* sticky rail */}
// // // // // // // //           <div className="lg:sticky lg:top-28 lg:self-start">
// // // // // // // //             <SectionLabel index="03" label="The story" />
// // // // // // // //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// // // // // // // //               {lead.map((line, i) => (
// // // // // // // //                 <MaskLine key={line} delay={i * 0.08}>
// // // // // // // //                   <span className={cn(i === 1 && "text-cobalt-500", i === 4 && "text-lime-deep")}>
// // // // // // // //                     {line}
// // // // // // // //                   </span>
// // // // // // // //                 </MaskLine>
// // // // // // // //               ))}
// // // // // // // //             </h2>

// // // // // // // //             <motion.div
// // // // // // // //               style={{ rotate: ringRotate }}
// // // // // // // //               aria-hidden
// // // // // // // //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// // // // // // // //             />

// // // // // // // //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// // // // // // // //               <div className="flex items-center gap-4">
// // // // // // // //                 <div className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cobalt-500 via-cobalt-400 to-teal-glow font-display text-[22px] font-extrabold text-paper-50">
// // // // // // // //                   VP
// // // // // // // //                   <span className="absolute inset-0 bg-lime-acid opacity-0 transition-opacity duration-500 hover:opacity-100" />
// // // // // // // //                 </div>
// // // // // // // //                 <div className="min-w-0">
// // // // // // // //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// // // // // // // //                     {profile.name}
// // // // // // // //                   </p>
// // // // // // // //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// // // // // // // //                     {profile.role} · {profile.roleSub}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// // // // // // // //                 {[
// // // // // // // //                   ["Degree", "B.Sc Computer Science '26"],
// // // // // // // //                   ["Next", "MCA · SSIT (pursuing)"],
// // // // // // // //                   ["Base", "Ahmedabad, Gujarat"],
// // // // // // // //                   ["Languages", "EN · HI · GU"],
// // // // // // // //                 ].map(([k, v]) => (
// // // // // // // //                   <div key={k} className="flex items-baseline justify-between gap-3">
// // // // // // // //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// // // // // // // //                     <dd className="text-right text-paper-50">{v}</dd>
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </dl>
// // // // // // // //               <a
// // // // // // // //                 href={profile.linkedin}
// // // // // // // //                 target="_blank"
// // // // // // // //                 rel="noreferrer"
// // // // // // // //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // // // // // //               >
// // // // // // // //                 Connect on LinkedIn <ArrowUpRight size={13} />
// // // // // // // //               </a>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* scrolling body */}
// // // // // // // //           <div ref={ref} className="min-w-0">
// // // // // // // //             <Reveal>
// // // // // // // //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// // // // // // // //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// // // // // // // //                 React applications for real clients — banking advisors, a travel creator brand and a
// // // // // // // //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// // // // // // // //                 compiles into something someone can touch.
// // // // // // // //               </p>
// // // // // // // //             </Reveal>

// // // // // // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// // // // // // // //               <Reveal delay={0.08}>
// // // // // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // // // //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// // // // // // // //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// // // // // // // //                   <span className="font-semibold text-ink-900">
// // // // // // // //                     Shree Swaminarayan Institute of Technology
// // // // // // // //                   </span>{" "}
// // // // // // // //                   is where that turns into architecture: systems that hold data honestly and stay
// // // // // // // //                   fast under real users.
// // // // // // // //                 </p>
// // // // // // // //               </Reveal>
// // // // // // // //               <Reveal delay={0.16}>
// // // // // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // // // //                   On the front end I live in React and TypeScript with Tailwind for the design
// // // // // // // //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// // // // // // // //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// // // // // // // //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// // // // // // // //                   happened afterwards.
// // // // // // // //                 </p>
// // // // // // // //               </Reveal>
// // // // // // // //             </div>

// // // // // // // //             {/* principles */}
// // // // // // // //             <div className="mt-14">
// // // // // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // // // // //                 Four rules I code by
// // // // // // // //               </p>
// // // // // // // //               <ul className="mt-4 border-t border-ink-900/12">
// // // // // // // //                 {principles.map((p, i) => (
// // // // // // // //                   <motion.li
// // // // // // // //                     key={p.n}
// // // // // // // //                     initial={{ opacity: 0, y: 18 }}
// // // // // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //                     viewport={{ once: true, margin: "-10%" }}
// // // // // // // //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// // // // // // // //                     className="group relative border-b border-ink-900/12"
// // // // // // // //                   >
// // // // // // // //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// // // // // // // //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// // // // // // // //                         {p.n}
// // // // // // // //                       </span>
// // // // // // // //                       <div className="min-w-0 flex-1">
// // // // // // // //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// // // // // // // //                           {p.title}
// // // // // // // //                         </h3>
// // // // // // // //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// // // // // // // //                           {p.copy}
// // // // // // // //                         </p>
// // // // // // // //                       </div>
// // // // // // // //                       <ArrowUpRight
// // // // // // // //                         size={18}
// // // // // // // //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// // // // // // // //                       />
// // // // // // // //                     </div>
// // // // // // // //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// // // // // // // //                   </motion.li>
// // // // // // // //                 ))}
// // // // // // // //               </ul>
// // // // // // // //             </div>

// // // // // // // //             {/* services */}
// // // // // // // //             <div className="mt-14">
// // // // // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // // // // //                 What you can hand me
// // // // // // // //               </p>
// // // // // // // //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// // // // // // // //                 {services.map((s, i) => {
// // // // // // // //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// // // // // // // //                   return (
// // // // // // // //                     <motion.article
// // // // // // // //                       key={s.title}
// // // // // // // //                       initial={{ opacity: 0, y: 22 }}
// // // // // // // //                       whileInView={{ opacity: 1, y: 0 }}
// // // // // // // //                       viewport={{ once: true, margin: "-8%" }}
// // // // // // // //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// // // // // // // //                       whileHover={{ y: -5 }}
// // // // // // // //                       className={cn(
// // // // // // // //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// // // // // // // //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// // // // // // // //                       )}
// // // // // // // //                     >
// // // // // // // //                       <div className="flex items-start justify-between gap-3">
// // // // // // // //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// // // // // // // //                           {s.title}
// // // // // // // //                         </h3>
// // // // // // // //                         <span
// // // // // // // //                           className={cn(
// // // // // // // //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// // // // // // // //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// // // // // // // //                           )}
// // // // // // // //                         >
// // // // // // // //                           <SIcon size={16} />
// // // // // // // //                         </span>
// // // // // // // //                       </div>
// // // // // // // //                       <p
// // // // // // // //                         className={cn(
// // // // // // // //                           "mt-3 text-[13.5px] leading-relaxed",
// // // // // // // //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// // // // // // // //                         )}
// // // // // // // //                       >
// // // // // // // //                         {s.copy}
// // // // // // // //                       </p>
// // // // // // // //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// // // // // // // //                         {s.deliverables.map((d) => (
// // // // // // // //                           <li
// // // // // // // //                             key={d}
// // // // // // // //                             className={cn(
// // // // // // // //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // // // // // //                               i === 0
// // // // // // // //                                 ? "bg-paper-50/10 text-paper-200"
// // // // // // // //                                 : "bg-ink-900/[0.055] text-ink-600",
// // // // // // // //                             )}
// // // // // // // //                           >
// // // // // // // //                             {d}
// // // // // // // //                           </li>
// // // // // // // //                         ))}
// // // // // // // //                       </ul>
// // // // // // // //                     </motion.article>
// // // // // // // //                   );
// // // // // // // //                 })}
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             <Reveal delay={0.1}>
// // // // // // // //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// // // // // // // //                 <GraduationCap className="text-ink-900" size={22} />
// // // // // // // //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// // // // // // // //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// // // // // // // //                   design file as carefully as the schema.
// // // // // // // //                 </p>
// // // // // // // //                 <a
// // // // // // // //                   href="#contact"
// // // // // // // //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// // // // // // // //                 >
// // // // // // // //                   Start a chat
// // // // // // // //                 </a>
// // // // // // // //               </div>
// // // // // // // //             </Reveal>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // // // // // // import { useRef } from "react";
// // // // // // // import { EASE, principles, profile, services } from "@/lib/data";
// // // // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // // // import { cn } from "@/utils/cn";

// // // // // // // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // // // // // // const lead = [
// // // // // // //   "I'm Vraj — a",
// // // // // // //   "frontend engineer",
// // // // // // //   "in Ahmedabad who",
// // // // // // //   "builds for the",
// // // // // // //   "last 5%.",
// // // // // // // ];

// // // // // // // export default function Story() {
// // // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// // // // // // //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// // // // // // //   return (
// // // // // // //     <section id="story" className="relative bg-paper-100 py-20 sm:py-28">
// // // // // // //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // // // //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// // // // // // //           {/* sticky rail */}
// // // // // // //           <div className="lg:sticky lg:top-28 lg:self-start">
// // // // // // //             <SectionLabel index="03" label="The story" />
// // // // // // //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// // // // // // //               {lead.map((line, i) => (
// // // // // // //                 <span
// // // // // // //                   key={line}
// // // // // // //                   className={cn(
// // // // // // //                     "block",
// // // // // // //                     i === 1 && "text-cobalt-500",
// // // // // // //                     i === 4 && "text-lime-deep",
// // // // // // //                   )}
// // // // // // //                 >
// // // // // // //                   {line}
// // // // // // //                 </span>
// // // // // // //               ))}
// // // // // // //             </h2>

// // // // // // //             <motion.div
// // // // // // //               style={{ rotate: ringRotate }}
// // // // // // //               aria-hidden
// // // // // // //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// // // // // // //             />

// // // // // // //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// // // // // // //               <div className="flex items-center gap-4">
// // // // // // //                 <div className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cobalt-500 via-cobalt-400 to-teal-glow font-display text-[22px] font-extrabold text-paper-50">
// // // // // // //                   VP
// // // // // // //                   <span className="absolute inset-0 bg-lime-acid opacity-0 transition-opacity duration-500 hover:opacity-100" />
// // // // // // //                 </div>
// // // // // // //                 <div className="min-w-0">
// // // // // // //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// // // // // // //                     {profile.name}
// // // // // // //                   </p>
// // // // // // //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// // // // // // //                     {profile.role} · {profile.roleSub}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// // // // // // //                 {[
// // // // // // //                   ["Degree", "B.Sc Computer Science '26"],
// // // // // // //                   ["Next", "MCA · SSIT (pursuing)"],
// // // // // // //                   ["Base", "Ahmedabad, Gujarat"],
// // // // // // //                   ["Languages", "EN · HI · GU"],
// // // // // // //                 ].map(([k, v]) => (
// // // // // // //                   <div key={k} className="flex items-baseline justify-between gap-3">
// // // // // // //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// // // // // // //                     <dd className="text-right text-paper-50">{v}</dd>
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </dl>
// // // // // // //               <a
// // // // // // //                 href={profile.linkedin}
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // // // // //               >
// // // // // // //                 Connect on LinkedIn <ArrowUpRight size={13} />
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* scrolling body */}
// // // // // // //           <div ref={ref} className="min-w-0">
// // // // // // //             <Reveal>
// // // // // // //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// // // // // // //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// // // // // // //                 React applications for real clients — banking advisors, a travel creator brand and a
// // // // // // //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// // // // // // //                 compiles into something someone can touch.
// // // // // // //               </p>
// // // // // // //             </Reveal>

// // // // // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// // // // // // //               <Reveal delay={0.08}>
// // // // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // // //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// // // // // // //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// // // // // // //                   <span className="font-semibold text-ink-900">
// // // // // // //                     Shree Swaminarayan Institute of Technology
// // // // // // //                   </span>{" "}
// // // // // // //                   is where that turns into architecture: systems that hold data honestly and stay
// // // // // // //                   fast under real users.
// // // // // // //                 </p>
// // // // // // //               </Reveal>
// // // // // // //               <Reveal delay={0.16}>
// // // // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // // //                   On the front end I live in React and TypeScript with Tailwind for the design
// // // // // // //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// // // // // // //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// // // // // // //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// // // // // // //                   happened afterwards.
// // // // // // //                 </p>
// // // // // // //               </Reveal>
// // // // // // //             </div>

// // // // // // //             {/* principles */}
// // // // // // //             <div className="mt-14">
// // // // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // // // //                 Four rules I code by
// // // // // // //               </p>
// // // // // // //               <ul className="mt-4 border-t border-ink-900/12">
// // // // // // //                 {principles.map((p, i) => (
// // // // // // //                   <motion.li
// // // // // // //                     key={p.n}
// // // // // // //                     initial={{ opacity: 0, y: 18 }}
// // // // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // // // //                     viewport={{ once: true, margin: "-10%" }}
// // // // // // //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// // // // // // //                     className="group relative border-b border-ink-900/12"
// // // // // // //                   >
// // // // // // //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// // // // // // //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// // // // // // //                         {p.n}
// // // // // // //                       </span>
// // // // // // //                       <div className="min-w-0 flex-1">
// // // // // // //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// // // // // // //                           {p.title}
// // // // // // //                         </h3>
// // // // // // //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// // // // // // //                           {p.copy}
// // // // // // //                         </p>
// // // // // // //                       </div>
// // // // // // //                       <ArrowUpRight
// // // // // // //                         size={18}
// // // // // // //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// // // // // // //                       />
// // // // // // //                     </div>
// // // // // // //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// // // // // // //                   </motion.li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             </div>

// // // // // // //             {/* services */}
// // // // // // //             <div className="mt-14">
// // // // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // // // //                 What you can hand me
// // // // // // //               </p>
// // // // // // //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// // // // // // //                 {services.map((s, i) => {
// // // // // // //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// // // // // // //                   return (
// // // // // // //                     <motion.article
// // // // // // //                       key={s.title}
// // // // // // //                       initial={{ opacity: 0, y: 22 }}
// // // // // // //                       whileInView={{ opacity: 1, y: 0 }}
// // // // // // //                       viewport={{ once: true, margin: "-8%" }}
// // // // // // //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// // // // // // //                       whileHover={{ y: -5 }}
// // // // // // //                       className={cn(
// // // // // // //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// // // // // // //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// // // // // // //                       )}
// // // // // // //                     >
// // // // // // //                       <div className="flex items-start justify-between gap-3">
// // // // // // //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// // // // // // //                           {s.title}
// // // // // // //                         </h3>
// // // // // // //                         <span
// // // // // // //                           className={cn(
// // // // // // //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// // // // // // //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// // // // // // //                           )}
// // // // // // //                         >
// // // // // // //                           <SIcon size={16} />
// // // // // // //                         </span>
// // // // // // //                       </div>
// // // // // // //                       <p
// // // // // // //                         className={cn(
// // // // // // //                           "mt-3 text-[13.5px] leading-relaxed",
// // // // // // //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// // // // // // //                         )}
// // // // // // //                       >
// // // // // // //                         {s.copy}
// // // // // // //                       </p>
// // // // // // //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// // // // // // //                         {s.deliverables.map((d) => (
// // // // // // //                           <li
// // // // // // //                             key={d}
// // // // // // //                             className={cn(
// // // // // // //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // // // // //                               i === 0
// // // // // // //                                 ? "bg-paper-50/10 text-paper-200"
// // // // // // //                                 : "bg-ink-900/[0.055] text-ink-600",
// // // // // // //                             )}
// // // // // // //                           >
// // // // // // //                             {d}
// // // // // // //                           </li>
// // // // // // //                         ))}
// // // // // // //                       </ul>
// // // // // // //                     </motion.article>
// // // // // // //                   );
// // // // // // //                 })}
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <Reveal delay={0.1}>
// // // // // // //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// // // // // // //                 <GraduationCap className="text-ink-900" size={22} />
// // // // // // //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// // // // // // //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// // // // // // //                   design file as carefully as the schema.
// // // // // // //                 </p>
// // // // // // //                 <a
// // // // // // //                   href="#contact"
// // // // // // //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// // // // // // //                 >
// // // // // // //                   Start a chat
// // // // // // //                 </a>
// // // // // // //               </div>
// // // // // // //             </Reveal>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // // // // // import { useRef } from "react";
// // // // // // import { EASE, principles, profile, services } from "@/lib/data";
// // // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // // import { cn } from "@/utils/cn";

// // // // // // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // // // // // const lead = [
// // // // // //   "I'm Vraj — a",
// // // // // //   "frontend engineer",
// // // // // //   "in Ahmedabad who",
// // // // // //   "builds for the",
// // // // // //   "last 5%.",
// // // // // // ];

// // // // // // export default function Story() {
// // // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// // // // // //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// // // // // //   return (
// // // // // //     <section id="story" className="relative bg-paper-100 py-20 sm:py-28">
// // // // // //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // // //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// // // // // //           {/* sticky rail */}
// // // // // //           <div className="lg:sticky lg:top-28 lg:self-start">
// // // // // //             <SectionLabel index="03" label="The story" />
// // // // // //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// // // // // //               {lead.map((line, i) => (
// // // // // //                 <span
// // // // // //                   key={line}
// // // // // //                   className={cn(
// // // // // //                     "block",
// // // // // //                     i === 1 && "text-cobalt-500",
// // // // // //                     i === 4 && "text-lime-deep",
// // // // // //                   )}
// // // // // //                 >
// // // // // //                   {line}
// // // // // //                 </span>
// // // // // //               ))}
// // // // // //             </h2>

// // // // // //             <motion.div
// // // // // //               style={{ rotate: ringRotate }}
// // // // // //               aria-hidden
// // // // // //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// // // // // //             />

// // // // // //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// // // // // //               <div className="flex items-center gap-4">
// // // // // //                 <div className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cobalt-500 via-cobalt-400 to-teal-glow font-display text-[22px] font-extrabold text-paper-50">
// // // // // //                   VP
// // // // // //                   <span className="absolute inset-0 bg-lime-acid opacity-0 transition-opacity duration-500 hover:opacity-100" />
// // // // // //                 </div>
// // // // // //                 <div className="min-w-0">
// // // // // //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// // // // // //                     {profile.name}
// // // // // //                   </p>
// // // // // //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// // // // // //                     {profile.role} · {profile.roleSub}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// // // // // //                 {[
// // // // // //                   ["Degree", "B.Sc Computer Science '26"],
// // // // // //                   ["Next", "MCA · SSIT (pursuing)"],
// // // // // //                   ["Base", "Ahmedabad, Gujarat"],
// // // // // //                   ["Languages", "EN · HI · GU"],
// // // // // //                 ].map(([k, v]) => (
// // // // // //                   <div key={k} className="flex items-baseline justify-between gap-3">
// // // // // //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// // // // // //                     <dd className="text-right text-paper-50">{v}</dd>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </dl>
// // // // // //               <a
// // // // // //                 href={profile.linkedin}
// // // // // //                 target="_blank"
// // // // // //                 rel="noreferrer"
// // // // // //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // // // //               >
// // // // // //                 Connect on LinkedIn <ArrowUpRight size={13} />
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* scrolling body */}
// // // // // //           <div ref={ref} className="min-w-0">
// // // // // //             <Reveal>
// // // // // //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// // // // // //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// // // // // //                 React applications for real clients — banking advisors, a travel creator brand and a
// // // // // //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// // // // // //                 compiles into something someone can touch.
// // // // // //               </p>
// // // // // //             </Reveal>

// // // // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// // // // // //               <Reveal delay={0.08}>
// // // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// // // // // //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// // // // // //                   <span className="font-semibold text-ink-900">
// // // // // //                     Shree Swaminarayan Institute of Technology
// // // // // //                   </span>{" "}
// // // // // //                   is where that turns into architecture: systems that hold data honestly and stay
// // // // // //                   fast under real users.
// // // // // //                 </p>
// // // // // //               </Reveal>
// // // // // //               <Reveal delay={0.16}>
// // // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // // //                   On the front end I live in React and TypeScript with Tailwind for the design
// // // // // //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// // // // // //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// // // // // //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// // // // // //                   happened afterwards.
// // // // // //                 </p>
// // // // // //               </Reveal>
// // // // // //             </div>

// // // // // //             {/* principles */}
// // // // // //             <div className="mt-14">
// // // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // // //                 Four rules I code by
// // // // // //               </p>
// // // // // //               <ul className="mt-4 border-t border-ink-900/12">
// // // // // //                 {principles.map((p, i) => (
// // // // // //                   <motion.li
// // // // // //                     key={p.n}
// // // // // //                     initial={{ opacity: 0, y: 18 }}
// // // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // // //                     viewport={{ once: true, margin: "-10%" }}
// // // // // //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// // // // // //                     className="group relative border-b border-ink-900/12"
// // // // // //                   >
// // // // // //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// // // // // //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// // // // // //                         {p.n}
// // // // // //                       </span>
// // // // // //                       <div className="min-w-0 flex-1">
// // // // // //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// // // // // //                           {p.title}
// // // // // //                         </h3>
// // // // // //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// // // // // //                           {p.copy}
// // // // // //                         </p>
// // // // // //                       </div>
// // // // // //                       <ArrowUpRight
// // // // // //                         size={18}
// // // // // //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// // // // // //                       />
// // // // // //                     </div>
// // // // // //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// // // // // //                   </motion.li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //             </div>

// // // // // //             {/* services */}
// // // // // //             <div className="mt-14">
// // // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // // //                 What you can hand me
// // // // // //               </p>
// // // // // //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// // // // // //                 {services.map((s, i) => {
// // // // // //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// // // // // //                   return (
// // // // // //                     <motion.article
// // // // // //                       key={s.title}
// // // // // //                       initial={{ opacity: 0, y: 22 }}
// // // // // //                       whileInView={{ opacity: 1, y: 0 }}
// // // // // //                       viewport={{ once: true, margin: "-8%" }}
// // // // // //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// // // // // //                       whileHover={{ y: -5 }}
// // // // // //                       className={cn(
// // // // // //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// // // // // //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// // // // // //                       )}
// // // // // //                     >
// // // // // //                       <div className="flex items-start justify-between gap-3">
// // // // // //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// // // // // //                           {s.title}
// // // // // //                         </h3>
// // // // // //                         <span
// // // // // //                           className={cn(
// // // // // //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// // // // // //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// // // // // //                           )}
// // // // // //                         >
// // // // // //                           <SIcon size={16} />
// // // // // //                         </span>
// // // // // //                       </div>
// // // // // //                       <p
// // // // // //                         className={cn(
// // // // // //                           "mt-3 text-[13.5px] leading-relaxed",
// // // // // //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// // // // // //                         )}
// // // // // //                       >
// // // // // //                         {s.copy}
// // // // // //                       </p>
// // // // // //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// // // // // //                         {s.deliverables.map((d) => (
// // // // // //                           <li
// // // // // //                             key={d}
// // // // // //                             className={cn(
// // // // // //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // // // //                               i === 0
// // // // // //                                 ? "bg-paper-50/10 text-paper-200"
// // // // // //                                 : "bg-ink-900/[0.055] text-ink-600",
// // // // // //                             )}
// // // // // //                           >
// // // // // //                             {d}
// // // // // //                           </li>
// // // // // //                         ))}
// // // // // //                       </ul>
// // // // // //                     </motion.article>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <Reveal delay={0.1}>
// // // // // //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// // // // // //                 <GraduationCap className="text-ink-900" size={22} />
// // // // // //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// // // // // //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// // // // // //                   design file as carefully as the schema.
// // // // // //                 </p>
// // // // // //                 <a
// // // // // //                   href="#contact"
// // // // // //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// // // // // //                 >
// // // // // //                   Start a chat
// // // // // //                 </a>
// // // // // //               </div>
// // // // // //             </Reveal>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // // // // import { useRef } from "react";
// // // // // import { EASE, principles, profile, services } from "@/lib/data";
// // // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // // import { cn } from "@/utils/cn";

// // // // // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // // // // const lead = [
// // // // //   "Turning ideas into",
// // // // //   "complete web products—",
// // // // //   "from frontend",
// // // // //   "to backend.",
// // // // // ];

// // // // // export default function Story() {
// // // // //   const ref = useRef<HTMLDivElement>(null);
// // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// // // // //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// // // // //   return (
// // // // //     <section id="story" className="relative bg-paper-100 py-20 sm:py-28">
// // // // //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// // // // //           {/* sticky rail */}
// // // // //           <div className="lg:sticky lg:top-28 lg:self-start">
// // // // //             <SectionLabel index="03" label="Profile" />
// // // // //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// // // // //               {lead.map((line, i) => (
// // // // //                 <span
// // // // //                   key={line}
// // // // //                   className={cn(
// // // // //                     "block",
// // // // //                     i === 1 && "text-cobalt-500",
// // // // //                     i === 3 && "text-lime-deep",
// // // // //                   )}
// // // // //                 >
// // // // //                   {line}
// // // // //                 </span>
// // // // //               ))}
// // // // //             </h2>

// // // // //             <motion.div
// // // // //               style={{ rotate: ringRotate }}
// // // // //               aria-hidden
// // // // //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// // // // //             />

// // // // //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// // // // //               <div className="flex items-center gap-4">
// // // // //                 <div className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cobalt-500 via-cobalt-400 to-teal-glow font-display text-[22px] font-extrabold text-paper-50">
// // // // //                   VP
// // // // //                   <span className="absolute inset-0 bg-lime-acid opacity-0 transition-opacity duration-500 hover:opacity-100" />
// // // // //                 </div>
// // // // //                 <div className="min-w-0">
// // // // //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// // // // //                     {profile.name}
// // // // //                   </p>
// // // // //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// // // // //                     {profile.role} · {profile.roleSub}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// // // // //                 {[
// // // // //                   ["Degree", "B.Sc Computer Science '26"],
// // // // //                   ["Next", "MCA · SSIT (pursuing)"],
// // // // //                   ["Base", "Ahmedabad, Gujarat"],
// // // // //                   ["Languages", "EN · HI · GU"],
// // // // //                 ].map(([k, v]) => (
// // // // //                   <div key={k} className="flex items-baseline justify-between gap-3">
// // // // //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// // // // //                     <dd className="text-right text-paper-50">{v}</dd>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </dl>
// // // // //               <a
// // // // //                 href={profile.linkedin}
// // // // //                 target="_blank"
// // // // //                 rel="noreferrer"
// // // // //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // // //               >
// // // // //                 Connect on LinkedIn <ArrowUpRight size={13} />
// // // // //               </a>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* scrolling body */}
// // // // //           <div ref={ref} className="min-w-0">
// // // // //             <Reveal>
// // // // //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// // // // //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// // // // //                 React applications for real clients — banking advisors, a travel creator brand and a
// // // // //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// // // // //                 compiles into something someone can touch.
// // // // //               </p>
// // // // //             </Reveal>

// // // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// // // // //               <Reveal delay={0.08}>
// // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// // // // //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// // // // //                   <span className="font-semibold text-ink-900">
// // // // //                     Shree Swaminarayan Institute of Technology
// // // // //                   </span>{" "}
// // // // //                   is where that turns into architecture: systems that hold data honestly and stay
// // // // //                   fast under real users.
// // // // //                 </p>
// // // // //               </Reveal>
// // // // //               <Reveal delay={0.16}>
// // // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // // //                   On the front end I live in React and TypeScript with Tailwind for the design
// // // // //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// // // // //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// // // // //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// // // // //                   happened afterwards.
// // // // //                 </p>
// // // // //               </Reveal>
// // // // //             </div>

// // // // //             {/* principles */}
// // // // //             <div className="mt-14">
// // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // //                 Four rules I code by
// // // // //               </p>
// // // // //               <ul className="mt-4 border-t border-ink-900/12">
// // // // //                 {principles.map((p, i) => (
// // // // //                   <motion.li
// // // // //                     key={p.n}
// // // // //                     initial={{ opacity: 0, y: 18 }}
// // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // //                     viewport={{ once: true, margin: "-10%" }}
// // // // //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// // // // //                     className="group relative border-b border-ink-900/12"
// // // // //                   >
// // // // //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// // // // //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// // // // //                         {p.n}
// // // // //                       </span>
// // // // //                       <div className="min-w-0 flex-1">
// // // // //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// // // // //                           {p.title}
// // // // //                         </h3>
// // // // //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// // // // //                           {p.copy}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       <ArrowUpRight
// // // // //                         size={18}
// // // // //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// // // // //                       />
// // // // //                     </div>
// // // // //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// // // // //                   </motion.li>
// // // // //                 ))}
// // // // //               </ul>
// // // // //             </div>

// // // // //             {/* services */}
// // // // //             <div className="mt-14">
// // // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // // //                 What you can hand me
// // // // //               </p>
// // // // //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// // // // //                 {services.map((s, i) => {
// // // // //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// // // // //                   return (
// // // // //                     <motion.article
// // // // //                       key={s.title}
// // // // //                       initial={{ opacity: 0, y: 22 }}
// // // // //                       whileInView={{ opacity: 1, y: 0 }}
// // // // //                       viewport={{ once: true, margin: "-8%" }}
// // // // //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// // // // //                       whileHover={{ y: -5 }}
// // // // //                       className={cn(
// // // // //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// // // // //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// // // // //                       )}
// // // // //                     >
// // // // //                       <div className="flex items-start justify-between gap-3">
// // // // //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// // // // //                           {s.title}
// // // // //                         </h3>
// // // // //                         <span
// // // // //                           className={cn(
// // // // //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// // // // //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// // // // //                           )}
// // // // //                         >
// // // // //                           <SIcon size={16} />
// // // // //                         </span>
// // // // //                       </div>
// // // // //                       <p
// // // // //                         className={cn(
// // // // //                           "mt-3 text-[13.5px] leading-relaxed",
// // // // //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// // // // //                         )}
// // // // //                       >
// // // // //                         {s.copy}
// // // // //                       </p>
// // // // //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// // // // //                         {s.deliverables.map((d) => (
// // // // //                           <li
// // // // //                             key={d}
// // // // //                             className={cn(
// // // // //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // // //                               i === 0
// // // // //                                 ? "bg-paper-50/10 text-paper-200"
// // // // //                                 : "bg-ink-900/[0.055] text-ink-600",
// // // // //                             )}
// // // // //                           >
// // // // //                             {d}
// // // // //                           </li>
// // // // //                         ))}
// // // // //                       </ul>
// // // // //                     </motion.article>
// // // // //                   );
// // // // //                 })}
// // // // //               </div>
// // // // //             </div>

// // // // //             <Reveal delay={0.1}>
// // // // //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// // // // //                 <GraduationCap className="text-ink-900" size={22} />
// // // // //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// // // // //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// // // // //                   design file as carefully as the schema.
// // // // //                 </p>
// // // // //                 <a
// // // // //                   href="#contact"
// // // // //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// // // // //                 >
// // // // //                   Start a chat
// // // // //                 </a>
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // // // import { useRef } from "react";
// // // // import { EASE, principles, profile, services } from "@/lib/data";
// // // // import { Reveal, SectionLabel } from "@/components/ui";
// // // // import { cn } from "@/utils/cn";

// // // // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // // // const lead = [
// // // //   "Turning ideas into",
// // // //   "complete web products—",
// // // //   "from frontend",
// // // //   "to backend.",
// // // // ];

// // // // export default function Story() {
// // // //   const ref = useRef<HTMLDivElement>(null);
// // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// // // //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// // // //   return (
// // // //     <section id="profile" className="relative bg-paper-100 py-20 sm:py-28">
// // // //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// // // //           {/* sticky rail */}
// // // //           <div className="lg:sticky lg:top-28 lg:self-start">
// // // //             <SectionLabel index="03" label="Profile" />
// // // //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// // // //               {lead.map((line, i) => (
// // // //                 <span
// // // //                   key={line}
// // // //                   className={cn(
// // // //                     "block",
// // // //                     i === 1 && "text-cobalt-500",
// // // //                     i === 3 && "text-lime-deep",
// // // //                   )}
// // // //                 >
// // // //                   {line}
// // // //                 </span>
// // // //               ))}
// // // //             </h2>

// // // //             <motion.div
// // // //               style={{ rotate: ringRotate }}
// // // //               aria-hidden
// // // //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// // // //             />

// // // //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// // // //               <div className="flex items-center gap-4">
// // // //                 <div className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cobalt-500 via-cobalt-400 to-teal-glow font-display text-[22px] font-extrabold text-paper-50">
// // // //                   VP
// // // //                   <span className="absolute inset-0 bg-lime-acid opacity-0 transition-opacity duration-500 hover:opacity-100" />
// // // //                 </div>
// // // //                 <div className="min-w-0">
// // // //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// // // //                     {profile.name}
// // // //                   </p>
// // // //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// // // //                     {profile.role} · {profile.roleSub}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// // // //                 {[
// // // //                   ["Degree", "B.Sc Computer Science '26"],
// // // //                   ["Next", "MCA · SSIT (pursuing)"],
// // // //                   ["Base", "Ahmedabad, Gujarat"],
// // // //                   ["Languages", "EN · HI · GU"],
// // // //                 ].map(([k, v]) => (
// // // //                   <div key={k} className="flex items-baseline justify-between gap-3">
// // // //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// // // //                     <dd className="text-right text-paper-50">{v}</dd>
// // // //                   </div>
// // // //                 ))}
// // // //               </dl>
// // // //               <a
// // // //                 href={profile.linkedin}
// // // //                 target="_blank"
// // // //                 rel="noreferrer"
// // // //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // //               >
// // // //                 Connect on LinkedIn <ArrowUpRight size={13} />
// // // //               </a>
// // // //             </div>
// // // //           </div>

// // // //           {/* scrolling body */}
// // // //           <div ref={ref} className="min-w-0">
// // // //             <Reveal>
// // // //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// // // //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// // // //                 React applications for real clients — banking advisors, a travel creator brand and a
// // // //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// // // //                 compiles into something someone can touch.
// // // //               </p>
// // // //             </Reveal>

// // // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// // // //               <Reveal delay={0.08}>
// // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// // // //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// // // //                   <span className="font-semibold text-ink-900">
// // // //                     Shree Swaminarayan Institute of Technology
// // // //                   </span>{" "}
// // // //                   is where that turns into architecture: systems that hold data honestly and stay
// // // //                   fast under real users.
// // // //                 </p>
// // // //               </Reveal>
// // // //               <Reveal delay={0.16}>
// // // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // // //                   On the front end I live in React and TypeScript with Tailwind for the design
// // // //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// // // //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// // // //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// // // //                   happened afterwards.
// // // //                 </p>
// // // //               </Reveal>
// // // //             </div>

// // // //             {/* principles */}
// // // //             <div className="mt-14">
// // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // //                 Four rules I code by
// // // //               </p>
// // // //               <ul className="mt-4 border-t border-ink-900/12">
// // // //                 {principles.map((p, i) => (
// // // //                   <motion.li
// // // //                     key={p.n}
// // // //                     initial={{ opacity: 0, y: 18 }}
// // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // //                     viewport={{ once: true, margin: "-10%" }}
// // // //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// // // //                     className="group relative border-b border-ink-900/12"
// // // //                   >
// // // //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// // // //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// // // //                         {p.n}
// // // //                       </span>
// // // //                       <div className="min-w-0 flex-1">
// // // //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// // // //                           {p.title}
// // // //                         </h3>
// // // //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// // // //                           {p.copy}
// // // //                         </p>
// // // //                       </div>
// // // //                       <ArrowUpRight
// // // //                         size={18}
// // // //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// // // //                       />
// // // //                     </div>
// // // //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// // // //                   </motion.li>
// // // //                 ))}
// // // //               </ul>
// // // //             </div>

// // // //             {/* services */}
// // // //             <div className="mt-14">
// // // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // // //                 What you can hand me
// // // //               </p>
// // // //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// // // //                 {services.map((s, i) => {
// // // //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// // // //                   return (
// // // //                     <motion.article
// // // //                       key={s.title}
// // // //                       initial={{ opacity: 0, y: 22 }}
// // // //                       whileInView={{ opacity: 1, y: 0 }}
// // // //                       viewport={{ once: true, margin: "-8%" }}
// // // //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// // // //                       whileHover={{ y: -5 }}
// // // //                       className={cn(
// // // //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// // // //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// // // //                       )}
// // // //                     >
// // // //                       <div className="flex items-start justify-between gap-3">
// // // //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// // // //                           {s.title}
// // // //                         </h3>
// // // //                         <span
// // // //                           className={cn(
// // // //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// // // //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// // // //                           )}
// // // //                         >
// // // //                           <SIcon size={16} />
// // // //                         </span>
// // // //                       </div>
// // // //                       <p
// // // //                         className={cn(
// // // //                           "mt-3 text-[13.5px] leading-relaxed",
// // // //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// // // //                         )}
// // // //                       >
// // // //                         {s.copy}
// // // //                       </p>
// // // //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// // // //                         {s.deliverables.map((d) => (
// // // //                           <li
// // // //                             key={d}
// // // //                             className={cn(
// // // //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // // //                               i === 0
// // // //                                 ? "bg-paper-50/10 text-paper-200"
// // // //                                 : "bg-ink-900/[0.055] text-ink-600",
// // // //                             )}
// // // //                           >
// // // //                             {d}
// // // //                           </li>
// // // //                         ))}
// // // //                       </ul>
// // // //                     </motion.article>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>

// // // //             <Reveal delay={0.1}>
// // // //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// // // //                 <GraduationCap className="text-ink-900" size={22} />
// // // //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// // // //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// // // //                   design file as carefully as the schema.
// // // //                 </p>
// // // //                 <a
// // // //                   href="#contact"
// // // //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// // // //                 >
// // // //                   Start a chat
// // // //                 </a>
// // // //               </div>
// // // //             </Reveal>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // // import { useRef } from "react";
// // // import { EASE, principles, profile, services } from "@/lib/data";
// // // import { Reveal, SectionLabel } from "@/components/ui";
// // // import { cn } from "@/utils/cn";

// // // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // // const lead = [
// // //   "Turning ideas into",
// // //   "complete web products—",
// // //   "from frontend",
// // //   "to backend.",
// // // ];

// // // export default function Story() {
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// // //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// // //   return (
// // //     <section id="profile" className="relative bg-paper-100 py-20 sm:py-28">
// // //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// // //           {/* sticky rail */}
// // //           <div className="lg:sticky lg:top-28 lg:self-start">
// // //             <SectionLabel index="03" label="Profile" />
// // //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// // //               {lead.map((line, i) => (
// // //                 <span
// // //                   key={line}
// // //                   className={cn(
// // //                     "block",
// // //                     i === 1 && "text-cobalt-500",
// // //                     i === 3 && "text-lime-deep",
// // //                   )}
// // //                 >
// // //                   {line}
// // //                 </span>
// // //               ))}
// // //             </h2>

// // //             <motion.div
// // //               style={{ rotate: ringRotate }}
// // //               aria-hidden
// // //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// // //             />

// // //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// // //               <div className="flex items-center gap-4">
// // //                 <div className="min-w-0">
// // //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// // //                     {profile.name}
// // //                   </p>
// // //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// // //                     {profile.role} · {profile.roleSub}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// // //                 {[
// // //                   ["Degree", "B.Sc Computer Science '26"],
// // //                   ["Next", "MCA · SSIT (pursuing)"],
// // //                   ["Base", "Ahmedabad, Gujarat"],
// // //                   ["Languages", "EN · HI · GU"],
// // //                 ].map(([k, v]) => (
// // //                   <div key={k} className="flex items-baseline justify-between gap-3">
// // //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// // //                     <dd className="text-right text-paper-50">{v}</dd>
// // //                   </div>
// // //                 ))}
// // //               </dl>
// // //               <a
// // //                 href={profile.linkedin}
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // //               >
// // //                 Connect on LinkedIn <ArrowUpRight size={13} />
// // //               </a>
// // //             </div>
// // //           </div>

// // //           {/* scrolling body */}
// // //           <div ref={ref} className="min-w-0">
// // //             <Reveal>
// // //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// // //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// // //                 React applications for real clients — banking advisors, a travel creator brand and a
// // //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// // //                 compiles into something someone can touch.
// // //               </p>
// // //             </Reveal>

// // //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// // //               <Reveal delay={0.08}>
// // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// // //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// // //                   <span className="font-semibold text-ink-900">
// // //                     Shree Swaminarayan Institute of Technology
// // //                   </span>{" "}
// // //                   is where that turns into architecture: systems that hold data honestly and stay
// // //                   fast under real users.
// // //                 </p>
// // //               </Reveal>
// // //               <Reveal delay={0.16}>
// // //                 <p className="text-[15px] leading-relaxed text-ink-600">
// // //                   On the front end I live in React and TypeScript with Tailwind for the design
// // //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// // //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// // //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// // //                   happened afterwards.
// // //                 </p>
// // //               </Reveal>
// // //             </div>

// // //             {/* principles */}
// // //             <div className="mt-14">
// // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // //                 Four rules I code by
// // //               </p>
// // //               <ul className="mt-4 border-t border-ink-900/12">
// // //                 {principles.map((p, i) => (
// // //                   <motion.li
// // //                     key={p.n}
// // //                     initial={{ opacity: 0, y: 18 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true, margin: "-10%" }}
// // //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// // //                     className="group relative border-b border-ink-900/12"
// // //                   >
// // //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// // //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// // //                         {p.n}
// // //                       </span>
// // //                       <div className="min-w-0 flex-1">
// // //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// // //                           {p.title}
// // //                         </h3>
// // //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// // //                           {p.copy}
// // //                         </p>
// // //                       </div>
// // //                       <ArrowUpRight
// // //                         size={18}
// // //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// // //                       />
// // //                     </div>
// // //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// // //                   </motion.li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             {/* services */}
// // //             <div className="mt-14">
// // //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// // //                 What you can hand me
// // //               </p>
// // //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// // //                 {services.map((s, i) => {
// // //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// // //                   return (
// // //                     <motion.article
// // //                       key={s.title}
// // //                       initial={{ opacity: 0, y: 22 }}
// // //                       whileInView={{ opacity: 1, y: 0 }}
// // //                       viewport={{ once: true, margin: "-8%" }}
// // //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// // //                       whileHover={{ y: -5 }}
// // //                       className={cn(
// // //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// // //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// // //                       )}
// // //                     >
// // //                       <div className="flex items-start justify-between gap-3">
// // //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// // //                           {s.title}
// // //                         </h3>
// // //                         <span
// // //                           className={cn(
// // //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// // //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// // //                           )}
// // //                         >
// // //                           <SIcon size={16} />
// // //                         </span>
// // //                       </div>
// // //                       <p
// // //                         className={cn(
// // //                           "mt-3 text-[13.5px] leading-relaxed",
// // //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// // //                         )}
// // //                       >
// // //                         {s.copy}
// // //                       </p>
// // //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// // //                         {s.deliverables.map((d) => (
// // //                           <li
// // //                             key={d}
// // //                             className={cn(
// // //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// // //                               i === 0
// // //                                 ? "bg-paper-50/10 text-paper-200"
// // //                                 : "bg-ink-900/[0.055] text-ink-600",
// // //                             )}
// // //                           >
// // //                             {d}
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </motion.article>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>

// // //             <Reveal delay={0.1}>
// // //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// // //                 <GraduationCap className="text-ink-900" size={22} />
// // //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// // //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// // //                   design file as carefully as the schema.
// // //                 </p>
// // //                 <a
// // //                   href="#contact"
// // //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// // //                 >
// // //                   Start a chat
// // //                 </a>
// // //               </div>
// // //             </Reveal>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// // import { useRef } from "react";
// // import { EASE, principles, profile, services } from "@/lib/data";
// // import { Reveal, SectionLabel } from "@/components/ui";
// // import { cn } from "@/utils/cn";

// // const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// // const lead = [
// //   "Turning ideas into",
// //   "complete web products—",
// //   "from frontend",
// //   "to backend.",
// // ];

// // export default function Story() {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
// //   const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

// //   return (
// //     <section id="profile" className="relative bg-paper-100 py-20 sm:py-28">
// //       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// //         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
// //           {/* sticky rail */}
// //           <div className="lg:sticky lg:top-28 lg:self-start">
// //             <SectionLabel index="03" label="Profile" />
// //             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
// //               {lead.map((line, i) => (
// //                 <span
// //                   key={line}
// //                   className={cn(
// //                     "block",
// //                     i === 1 && "text-cobalt-500",
// //                     i === 3 && "text-lime-deep",
// //                   )}
// //                 >
// //                   {line}
// //                 </span>
// //               ))}
// //             </h2>

// //             <motion.div
// //               style={{ rotate: ringRotate }}
// //               aria-hidden
// //               className="mt-8 hidden size-[92px] rounded-full border border-dashed border-ink-900/30 lg:block"
// //             />

// //             <div className="mt-8 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
// //               <div className="flex items-center gap-4">
// //                 <div className="min-w-0">
// //                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
// //                     {profile.name}
// //                   </p>
// //                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
// //                     {profile.role} · {profile.roleSub}
// //                   </p>
// //                 </div>
// //               </div>
// //               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
// //                 {[
// //                   ["Degree", "B.Sc Computer Science '26"],
// //                   ["Next", "MCA · SSIT (pursuing)"],
// //                   ["Base", "Ahmedabad, Gujarat"],
// //                   ["Languages", "EN · HI · GU"],
// //                 ].map(([k, v]) => (
// //                   <div key={k} className="flex items-baseline justify-between gap-3">
// //                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
// //                     <dd className="text-right text-paper-50">{v}</dd>
// //                   </div>
// //                 ))}
// //               </dl>
// //               <a
// //                 href={profile.linkedin}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// //               >
// //                 Connect on LinkedIn <ArrowUpRight size={13} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* scrolling body */}
// //           <div ref={ref} className="min-w-0">
// //             <Reveal>
// //               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
// //                 I started with a C lab, a pointer bug and three hours of stubbornness. Now I build
// //                 React applications for real clients — banking advisors, a travel creator brand and a
// //                 wholesale trader — and I still get that same feeling when a stubborn thing finally
// //                 compiles into something someone can touch.
// //               </p>
// //             </Reveal>

// //             <div className="mt-7 grid gap-6 sm:grid-cols-2">
// //               <Reveal delay={0.08}>
// //                 <p className="text-[15px] leading-relaxed text-ink-600">
// //                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
// //                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
// //                   <span className="font-semibold text-ink-900">
// //                     Shree Swaminarayan Institute of Technology
// //                   </span>{" "}
// //                   is where that turns into architecture: systems that hold data honestly and stay
// //                   fast under real users.
// //                 </p>
// //               </Reveal>
// //               <Reveal delay={0.16}>
// //                 <p className="text-[15px] leading-relaxed text-ink-600">
// //                   On the front end I live in React and TypeScript with Tailwind for the design
// //                   system and Framer Motion for the transitions. On the back end it's MongoDB, MySQL
// //                   and Firebase — whichever one fits the shape of the data. Postman to prove the API
// //                   works, Compass when it doesn't, Vercel to ship it, Power BI when someone asks what
// //                   happened afterwards.
// //                 </p>
// //               </Reveal>
// //             </div>

// //             {/* principles */}
// //             <div className="mt-14">
// //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// //                 Four rules I code by
// //               </p>
// //               <ul className="mt-4 border-t border-ink-900/12">
// //                 {principles.map((p, i) => (
// //                   <motion.li
// //                     key={p.n}
// //                     initial={{ opacity: 0, y: 18 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true, margin: "-10%" }}
// //                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
// //                     className="group relative border-b border-ink-900/12"
// //                   >
// //                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
// //                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
// //                         {p.n}
// //                       </span>
// //                       <div className="min-w-0 flex-1">
// //                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
// //                           {p.title}
// //                         </h3>
// //                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
// //                           {p.copy}
// //                         </p>
// //                       </div>
// //                       <ArrowUpRight
// //                         size={18}
// //                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
// //                       />
// //                     </div>
// //                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
// //                   </motion.li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* services */}
// //             <div className="mt-14">
// //               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
// //                 What you can hand me
// //               </p>
// //               <div className="mt-4 grid gap-3 sm:grid-cols-2">
// //                 {services.map((s, i) => {
// //                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
// //                   return (
// //                     <motion.article
// //                       key={s.title}
// //                       initial={{ opacity: 0, y: 22 }}
// //                       whileInView={{ opacity: 1, y: 0 }}
// //                       viewport={{ once: true, margin: "-8%" }}
// //                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
// //                       whileHover={{ y: -5 }}
// //                       className={cn(
// //                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
// //                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
// //                       )}
// //                     >
// //                       <div className="flex items-start justify-between gap-3">
// //                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
// //                           {s.title}
// //                         </h3>
// //                         <span
// //                           className={cn(
// //                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
// //                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
// //                           )}
// //                         >
// //                           <SIcon size={16} />
// //                         </span>
// //                       </div>
// //                       <p
// //                         className={cn(
// //                           "mt-3 text-[13.5px] leading-relaxed",
// //                           i === 0 ? "text-paper-200/75" : "text-ink-600",
// //                         )}
// //                       >
// //                         {s.copy}
// //                       </p>
// //                       <ul className="mt-4 flex flex-wrap gap-1.5">
// //                         {s.deliverables.map((d) => (
// //                           <li
// //                             key={d}
// //                             className={cn(
// //                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
// //                               i === 0
// //                                 ? "bg-paper-50/10 text-paper-200"
// //                                 : "bg-ink-900/[0.055] text-ink-600",
// //                             )}
// //                           >
// //                             {d}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </motion.article>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             <Reveal delay={0.1}>
// //               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
// //                 <GraduationCap className="text-ink-900" size={22} />
// //                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
// //                   Graduating May 2026 — looking for a team that wants a developer who reads the
// //                   design file as carefully as the schema.
// //                 </p>
// //                 <a
// //                   href="#contact"
// //                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
// //                 >
// //                   Start a chat
// //                 </a>
// //               </div>
// //             </Reveal>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { motion } from "framer-motion";
// import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
// import { EASE, principles, profile, services } from "@/lib/data";
// import { Reveal, SectionLabel } from "@/components/ui";
// import { cn } from "@/utils/cn";

// const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

// const lead = [
//   "Turning ideas into",
//   "complete web products—",
//   "from frontend",
//   "to backend.",
// ];

// export default function Story() {
//   return (
//     <section id="profile" className="relative bg-paper-100 py-20 sm:py-28">
//       <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
//         <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
//           {/* sticky rail */}
//           <div className="lg:sticky lg:top-28 lg:self-start">
//             <SectionLabel index="03" label="Profile" />
//             <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
//               {lead.map((line, i) => (
//                 <span
//                   key={line}
//                   className={cn(
//                     "block",
//                     i === 1 && "text-cobalt-500",
//                     i === 3 && "text-lime-deep",
//                   )}
//                 >
//                   {line}
//                 </span>
//               ))}
//             </h2>
//             <div className="mt-6 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
//               <div className="flex items-center gap-4">
//                 <div className="min-w-0">
//                   <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
//                     {profile.name}
//                   </p>
//                   <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
//                     {profile.role} · {profile.roleSub}
//                   </p>
//                 </div>
//               </div>
//               <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
//                 {[
//                   ["Degree", "B.Sc Computer Science '26"],
//                   ["Next", "MCA · SSIT (pursuing)"],
//                   ["Base", "Ahmedabad, Gujarat"],
//                   ["Languages", "EN · HI · GU"],
//                 ].map(([k, v]) => (
//                   <div key={k} className="flex items-baseline justify-between gap-3">
//                     <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
//                     <dd className="text-right text-paper-50">{v}</dd>
//                   </div>
//                 ))}
//               </dl>
//               <a
//                 href={profile.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
//               >
//                 Connect on LinkedIn <ArrowUpRight size={13} />
//               </a>
//             </div>
//           </div>

//           {/* scrolling body */}
//           <div className="min-w-0">
//             <Reveal>
//               <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
//                 I’m a Full-Stack Developer based in Ahmedabad, focused on turning ideas into complete and reliable web products. I build responsive React interfaces, connect them to practical back-end systems, and refine every project until it feels fast, clear and ready for real users.

//               </p>
//             </Reveal>

//             <div className="mt-7 grid gap-6 sm:grid-cols-2">
//               <Reveal delay={0.08}>
//                 <p className="text-[15px] leading-relaxed text-ink-600">
//                   B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
//                   data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
//                   <span className="font-semibold text-ink-900">
//                     Shree Swaminarayan Institute of Technology
//                   </span>{" "}
//                   is where that turns into architecture: systems that hold data honestly and stay
//                   fast under real users.
//                 </p>
//               </Reveal>
//               <Reveal delay={0.16}>
//                 <p className="text-[15px] leading-relaxed text-ink-600">
//                  I build responsive front-end applications using React, JavaScript and TypeScript, with MongoDB and MySQL for data management. I deploy my projects through Vercel and use Power BI to transform data into clear and useful insights.

//                 </p>
//               </Reveal>
//             </div>

//             {/* principles */}
//             <div className="mt-14">
//               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
//                 Four rules I code by
//               </p>
//               <ul className="mt-4 border-t border-ink-900/12">
//                 {principles.map((p, i) => (
//                   <motion.li
//                     key={p.n}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-10%" }}
//                     transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
//                     className="group relative border-b border-ink-900/12"
//                   >
//                     <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
//                       <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
//                         {p.n}
//                       </span>
//                       <div className="min-w-0 flex-1">
//                         <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
//                           {p.title}
//                         </h3>
//                         <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
//                           {p.copy}
//                         </p>
//                       </div>
//                       <ArrowUpRight
//                         size={18}
//                         className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
//                       />
//                     </div>
//                     <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>

//             {/* services */}
//             <div className="mt-14">
//               <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
//                 What you can hand me
//               </p>
//               <div className="mt-4 grid gap-3 sm:grid-cols-2">
//                 {services.map((s, i) => {
//                   const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
//                   return (
//                     <motion.article
//                       key={s.title}
//                       initial={{ opacity: 0, y: 22 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, margin: "-8%" }}
//                       transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
//                       whileHover={{ y: -5 }}
//                       className={cn(
//                         "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
//                         i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
//                       )}
//                     >
//                       <div className="flex items-start justify-between gap-3">
//                         <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
//                           {s.title}
//                         </h3>
//                         <span
//                           className={cn(
//                             "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
//                             i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
//                           )}
//                         >
//                           <SIcon size={16} />
//                         </span>
//                       </div>
//                       <p
//                         className={cn(
//                           "mt-3 text-[13.5px] leading-relaxed",
//                           i === 0 ? "text-paper-200/75" : "text-ink-600",
//                         )}
//                       >
//                         {s.copy}
//                       </p>
//                       <ul className="mt-4 flex flex-wrap gap-1.5">
//                         {s.deliverables.map((d) => (
//                           <li
//                             key={d}
//                             className={cn(
//                               "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
//                               i === 0
//                                 ? "bg-paper-50/10 text-paper-200"
//                                 : "bg-ink-900/[0.055] text-ink-600",
//                             )}
//                           >
//                             {d}
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.article>
//                   );
//                 })}
//               </div>
//             </div>

//             <Reveal delay={0.1}>
//               <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
//                 <GraduationCap className="text-ink-900" size={22} />
//                 <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
//                   Graduating May 2026 — looking for a team that wants a developer who reads the
//                   design file as carefully as the schema.
//                 </p>
//                 <a
//                   href="#contact"
//                   className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
//                 >
//                   Start a chat
//                 </a>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Component, GraduationCap, Layers, Rocket } from "lucide-react";
import { EASE, principles, profile, services } from "@/lib/data";
import { Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/utils/cn";

const serviceIcons = { Component, Rocket, Layers, BarChart3 } as const;

const lead = [
  "Turning ideas into",
  "complete web products—",
  "from frontend",
  "to backend.",
];

export default function Story() {
  return (
    <section id="profile" className="relative bg-paper-100 py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.6fr] lg:gap-16">
          {/* sticky rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="03" label="Profile" />
            <h2 className="mt-5 font-display text-[12vw] leading-[0.9] tracking-[-0.045em] text-ink-900 sm:text-[8vw] lg:text-[3.5vw] xl:text-[2.9vw]">
              {lead.map((line, i) => (
                <span
                  key={line}
                  className={cn(
                    "block",
                    i === 1 && "text-cobalt-500",
                    i === 3 && "text-lime-deep",
                  )}
                >
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-ink-900/12 bg-ink-900 p-5 text-paper-100">
              <div className="flex items-center gap-4">
                <div className="min-w-0">
                  <p className="font-display text-[19px] font-bold leading-tight text-paper-50">
                    {profile.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lime-acid">
                    {profile.role} · {profile.roleSub}
                  </p>
                </div>
              </div>
              <dl className="mt-5 space-y-2.5 border-t border-paper-300/12 pt-4 font-mono text-[11px]">
                {[
                  ["Degree", "B.Sc Computer Science '26"],
                  ["Next", "MCA · SSIT (pursuing)"],
                  ["Base", "Ahmedabad, Gujarat"],
                  ["Languages", "EN · HI · GU"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3">
                    <dt className="uppercase tracking-[0.16em] text-paper-300/45">{k}</dt>
                    <dd className="text-right text-paper-50">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-paper-50 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
              >
                Connect on LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* scrolling body */}
          <div className="min-w-0">
            <Reveal>
              <p className="font-display text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-ink-900 sm:text-[27px]">
                I’m a Full-Stack Developer based in Ahmedabad, focused on turning ideas into complete and reliable web products. I build responsive React interfaces, connect them to practical back-end systems, and refine every project until it feels fast, clear and ready for real users.

              </p>
            </Reveal>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.08}>
                <p className="text-[15px] leading-relaxed text-ink-600">
                  B.Sc Computer Science at Gujarat University (2023–2026) taught me the theory —
                  data structures, DBMS, operating systems, OOP in C, Java, Python and C#. My MCA at{" "}
                  <span className="font-semibold text-ink-900">
                    Shree Swaminarayan Institute of Technology
                  </span>{" "}
                  is where that turns into architecture: systems that hold data honestly and stay
                  fast under real users.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-[15px] leading-relaxed text-ink-600">
                 I build responsive front-end applications using React, JavaScript and TypeScript, with MongoDB and MySQL for data management. I deploy my projects through Vercel and use Power BI to transform data into clear and useful insights.

                </p>
              </Reveal>
            </div>

            {/* principles */}
            <div className="mt-14">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
                How I work
              </p>
              <ul className="mt-4 border-t border-ink-900/12">
                {principles.map((p, i) => (
                  <motion.li
                    key={p.n}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                    className="group relative border-b border-ink-900/12"
                  >
                    <div className="relative flex items-start gap-4 py-5 transition-transform duration-500 group-hover:translate-x-2 sm:gap-6">
                      <span className="mt-1 font-mono text-[11px] text-ink-500 transition-colors group-hover:text-cobalt-500">
                        {p.n}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-[21px] font-bold tracking-tight text-ink-900 sm:text-[24px]">
                          {p.title}
                        </h3>
                        <p className="mt-1.5 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-600">
                          {p.copy}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-ink-900/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-500"
                      />
                    </div>
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-ink-900 transition-all duration-700 group-hover:w-full" />
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* services */}
            <div className="mt-14">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-ink-500">
                What I can build for you
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s, i) => {
                  const SIcon = serviceIcons[s.icon as keyof typeof serviceIcons] ?? Component;
                  return (
                    <motion.article
                      key={s.title}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-8%" }}
                      transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
                      whileHover={{ y: -5 }}
                      className={cn(
                        "group relative overflow-hidden rounded-[22px] border border-ink-900/12 p-5 transition-colors",
                        i === 0 ? "bg-ink-900 text-paper-100" : "bg-paper-50 text-ink-900",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="max-w-[16ch] font-display text-[20px] font-bold leading-tight tracking-tight">
                          {s.title}
                        </h3>
                        <span
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[10deg]",
                            i === 0 ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
                          )}
                        >
                          <SIcon size={16} />
                        </span>
                      </div>
                      <p
                        className={cn(
                          "mt-3 text-[13.5px] leading-relaxed",
                          i === 0 ? "text-paper-200/75" : "text-ink-600",
                        )}
                      >
                        {s.copy}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            className={cn(
                              "rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em]",
                              i === 0
                                ? "bg-paper-50/10 text-paper-200"
                                : "bg-ink-900/[0.055] text-ink-600",
                            )}
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[22px] border border-ink-900/12 bg-lime-acid/35 p-4 sm:p-5">
                <GraduationCap className="text-ink-900" size={22} />
                <p className="flex-1 text-[14.5px] leading-snug text-ink-800">
                  Graduating May 2026 — looking for a team that wants a developer who reads the
                  design file as carefully as the schema.
                </p>
                <a
                  href="#contact"
                  className="rounded-full bg-ink-900 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-50 transition-transform hover:-translate-y-0.5"
                >
                  Start a chat
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
