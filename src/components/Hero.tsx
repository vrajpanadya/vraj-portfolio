// // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // import { ArrowDown, MapPin, Terminal } from "lucide-react";
// // // // // // // import { useEffect, useMemo, useRef, useState } from "react";
// // // // // // // import { CountUp, Magnetic, Marquee, Spotlight } from "@/components/ui";
// // // // // // // import { EASE, marqueeItems, profile, stats } from "@/lib/data";
// // // // // // // import { VercelIcon } from "@/components/BrandIcons";
// // // // // // // import { cn } from "@/utils/cn";

// // // // // // // /* ------------------------------------------------------------------ clock */
// // // // // // // function IstClock() {
// // // // // // //   const [now, setNow] = useState("");
// // // // // // //   useEffect(() => {
// // // // // // //     const tick = () =>
// // // // // // //       setNow(
// // // // // // //         new Intl.DateTimeFormat("en-GB", {
// // // // // // //           timeZone: "Asia/Kolkata",
// // // // // // //           hour: "2-digit",
// // // // // // //           minute: "2-digit",
// // // // // // //           second: "2-digit",
// // // // // // //         }).format(new Date()),
// // // // // // //       );
// // // // // // //     tick();
// // // // // // //     const id = setInterval(tick, 1000);
// // // // // // //     return () => clearInterval(id);
// // // // // // //   }, []);
// // // // // // //   return <span className="tabular-nums">{now} IST</span>;
// // // // // // // }

// // // // // // // /* ------------------------------------------------------------------- code */
// // // // // // // type Token = { t: string; c?: string };

// // // // // // // const code: Token[][] = [
// // // // // // //   [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
// // // // // // //   [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // // // //   [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
// // // // // // //   [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // // // //   [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 + MCA\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // // // //   [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
// // // // // // //   [{ t: "};", c: "text-paper-300" }],
// // // // // // // ];

// // // // // // // function CodeConsole() {
// // // // // // //   const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
// // // // // // //   const [n, setN] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     const reduceMotion = window.matchMedia(
// // // // // // //       "(prefers-reduced-motion: reduce)",
// // // // // // //     ).matches;

// // // // // // //     if (reduceMotion) {
// // // // // // //       setN(total);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     let frameId = 0;
// // // // // // //     let restartId: number | undefined;
// // // // // // //     let cancelled = false;
// // // // // // //     const charsPerSecond = 88;
// // // // // // //     const restartDelay = 1800;

// // // // // // //     const startTyping = () => {
// // // // // // //       const startedAt = performance.now();
// // // // // // //       let lastPaintAt = 0;

// // // // // // //       const type = (now: number) => {
// // // // // // //         if (cancelled) return;
// // // // // // //         const next = Math.min(
// // // // // // //           total,
// // // // // // //           Math.floor(((now - startedAt) / 1000) * charsPerSecond),
// // // // // // //         );

// // // // // // //         if (now - lastPaintAt >= 32 || next === total) {
// // // // // // //           lastPaintAt = now;
// // // // // // //           setN((previous) => (previous === next ? previous : next));
// // // // // // //         }

// // // // // // //         if (next < total) {
// // // // // // //           frameId = requestAnimationFrame(type);
// // // // // // //         } else {
// // // // // // //           restartId = window.setTimeout(() => {
// // // // // // //             if (cancelled) return;
// // // // // // //             setN(0);
// // // // // // //             startTyping();
// // // // // // //           }, restartDelay);
// // // // // // //         }
// // // // // // //       };

// // // // // // //       frameId = requestAnimationFrame(type);
// // // // // // //     };

// // // // // // //     startTyping();
// // // // // // //     return () => {
// // // // // // //       cancelled = true;
// // // // // // //       cancelAnimationFrame(frameId);
// // // // // // //       if (restartId !== undefined) window.clearTimeout(restartId);
// // // // // // //     };
// // // // // // //   }, [total]);

// // // // // // //   let cursor = 0;
// // // // // // //   const rendered = code.map((line, i) => {
// // // // // // //     const start = cursor;
// // // // // // //     const lineLen = line.reduce((a, t) => a + t.t.length, 0);
// // // // // // //     cursor += lineLen;
// // // // // // //     const visible = Math.max(0, Math.min(n - start, lineLen));
// // // // // // //     let consumed = 0;
// // // // // // //     return (
// // // // // // //       <div key={i} className="whitespace-pre">
// // // // // // //         {line.map((tok, j) => {
// // // // // // //           const from = consumed;
// // // // // // //           consumed += tok.t.length;
// // // // // // //           const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
// // // // // // //           return (
// // // // // // //             <span key={j} className={tok.c}>
// // // // // // //               {slice}
// // // // // // //             </span>
// // // // // // //           );
// // // // // // //         })}
// // // // // // //         {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
// // // // // // //           <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   });

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
// // // // // // //     >
// // // // // // //       <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
// // // // // // //         <span className="flex gap-1.5">
// // // // // // //           {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // // // // //             <span
// // // // // // //               key={c}
// // // // // // //               className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
// // // // // // //               style={{ background: c }}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </span>
// // // // // // //         <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
// // // // // // //         <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
// // // // // // //           <Terminal size={11} /> live
// // // // // // //         </span>
// // // // // // //       </div>
// // // // // // //       <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
// // // // // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
// // // // // // //         <div className="relative flex gap-4">
// // // // // // //           <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
// // // // // // //             {code.map((_, i) => (
// // // // // // //               <span key={i}>{String(i + 1).padStart(2, "0")}</span>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //           <div className="min-w-0 flex-1">{rendered}</div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
// // // // // // //         <span>
// // // // // // //           <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
// // // // // // //         </span>
// // // // // // //         <span className="flex items-center gap-1.5 text-paper-300/70">
// // // // // // //           <VercelIcon className="size-2.5" /> ready on Vercel
// // // // // // //         </span>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function renderedIndexForCaret(n: number, lines: Token[][]) {
// // // // // // //   let acc = 0;
// // // // // // //   for (let i = 0; i < lines.length; i++) {
// // // // // // //     const len = lines[i].reduce((a, t) => a + t.t.length, 0);
// // // // // // //     if (n < acc + len) return i;
// // // // // // //     acc += len;
// // // // // // //   }
// // // // // // //   return -1;
// // // // // // // }

// // // // // // // /* ------------------------------------------------------------------ seal */
// // // // // // // function RotatingSeal() {
// // // // // // //   return (
// // // // // // //     <div className="relative grid size-[124px] place-items-center">
// // // // // // //       <svg
// // // // // // //         viewBox="0 0 120 120"
// // // // // // //         className="absolute inset-0 size-full"
// // // // // // //         style={{ animation: "spin-slow 22s linear infinite" }}
// // // // // // //       >
// // // // // // //         <defs>
// // // // // // //           <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
// // // // // // //         </defs>
// // // // // // //         <text className="fill-paper-200/70 font-mono text-[10.5px] uppercase tracking-[0.32em]">
// // // // // // //           <textPath href="#seal-path">
// // // // // // //             open to internships · freelance builds · ahmedabad ·
// // // // // // //           </textPath>
// // // // // // //         </text>
// // // // // // //       </svg>
// // // // // // //       <span className="grid size-11 place-items-center rounded-full bg-lime-acid">
// // // // // // //         <ArrowDown size={17} className="text-ink-900" />
// // // // // // //       </span>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* --------------------------------------------------------------- letters */
// // // // // // // function KineticWord({ word, className }: { word: string; className?: string }) {
// // // // // // //   return (
// // // // // // //     <span className={cn("inline-flex", className)}>
// // // // // // //       {word.split("").map((ch, i) => (
// // // // // // //         <motion.span
// // // // // // //           key={`${ch}-${i}`}
// // // // // // //           initial={{ y: "110%", opacity: 0 }}
// // // // // // //           animate={{ y: "0%", opacity: 1 }}
// // // // // // //           transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
// // // // // // //           whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
// // // // // // //           className="inline-block cursor-default transition-colors duration-300"
// // // // // // //         >
// // // // // // //           {ch}
// // // // // // //         </motion.span>
// // // // // // //       ))}
// // // // // // //     </span>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* ------------------------------------------------------------------ hero */
// // // // // // // export default function Hero() {
// // // // // // //   const ref = useRef<HTMLElement>(null);
// // // // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
// // // // // // //   const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
// // // // // // //   const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
// // // // // // //   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // // // // // //   return (
// // // // // // //     <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
// // // // // // //       {/* ambient layers */}
// // // // // // //       <div className="grid-lines-dark absolute inset-0" />
// // // // // // //       <div
// // // // // // //         className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
// // // // // // //         style={{
// // // // // // //           background:
// // // // // // //             "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
// // // // // // //         }}
// // // // // // //       />
// // // // // // //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

// // // // // // //       <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
// // // // // // //         {/* top status row */}
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: -12 }}
// // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
// // // // // // //           className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
// // // // // // //         >
// // // // // // //           <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
// // // // // // //             <span className="relative flex size-2 shrink-0">
// // // // // // //               <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
// // // // // // //               <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
// // // // // // //             </span>
// // // // // // //             <span className="min-w-0 break-words">{profile.status}</span>
// // // // // // //           </span>
// // // // // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // // // // //           <span className="flex items-center gap-1.5">
// // // // // // //             <MapPin size={12} /> {profile.location}
// // // // // // //           </span>
// // // // // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // // // // //           <IstClock />
// // // // // // //         </motion.div>

// // // // // // //         <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
// // // // // // //           {/* left — the mark */}
// // // // // // //           <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
// // // // // // //             {/* <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
// // // // // // //               {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
// // // // // // //               skeleton state, the empty view.
// // // // // // //             </p> */}

// // // // // // //             <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
// // // // // // //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
// // // // // // //                 <KineticWord word="VRAJ" className="text-paper-50" />
// // // // // // //               </span>
// // // // // // //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]">
// // // // // // //                 <KineticWord word="PANDYA" className="text-transparent" />
// // // // // // //               </span>
// // // // // // //             </h1>

// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
// // // // // // //               className="mt-7 flex flex-wrap items-center gap-3"
// // // // // // //             >
// // // // // // //               {/* <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
// // // // // // //                 React · TypeScript
// // // // // // //               </span> */}
              
// // // // // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // // // // //                 B.Sc CS '26 → MCA
// // // // // // //               </span>
// // // // // // //             </motion.div>

// // // // // // //             <motion.p
// // // // // // //               initial={{ opacity: 0 }}
// // // // // // //               animate={{ opacity: 1 }}
// // // // // // //               transition={{ duration: 1, delay: 1.1 }}
// // // // // // //               className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
// // // // // // //             >
// // // // // // //               {profile.blurb}
// // // // // // //             </motion.p>

// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, y: 16 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
// // // // // // //               className="mt-8 flex flex-wrap items-center gap-3"
// // // // // // //             >
// // // // // // //               <Magnetic>
// // // // // // //                 <a
// // // // // // //                   href="#work"
// // // // // // //                   className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// // // // // // //                 >
// // // // // // //                   See the work
// // // // // // //                   <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
// // // // // // //                     <ArrowDown size={12} />
// // // // // // //                   </span>
// // // // // // //                 </a>
// // // // // // //               </Magnetic>
// // // // // // //               <a
// // // // // // //                 href={profile.github}
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
// // // // // // //               >
// // // // // // //                 github/{profile.githubHandle}
// // // // // // //               </a>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>

// // // // // // //           {/* right — console */}
// // // // // // //           <motion.div
// // // // // // //             style={{ y: yCode }}
// // // // // // //             className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
// // // // // // //           >
// // // // // // //             <div className="relative">
// // // // // // //               <motion.div
// // // // // // //                 initial={{ opacity: 0, y: 40, rotate: -2 }}
// // // // // // //                 animate={{ opacity: 1, y: 0, rotate: 0 }}
// // // // // // //                 transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
// // // // // // //               >
// // // // // // //                 <CodeConsole />
// // // // // // //               </motion.div>

// // // // // // //               <motion.div
// // // // // // //                 initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
// // // // // // //                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
// // // // // // //                 transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
// // // // // // //                 className="absolute -bottom-12 -right-5 z-20 hidden lg:block"
// // // // // // //               >
// // // // // // //                 <RotatingSeal />
// // // // // // //               </motion.div>
// // // // // // //             </div>

// // // // // // //             <motion.div
// // // // // // //               initial={{ opacity: 0, y: 24 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
// // // // // // //               className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
// // // // // // //             >
// // // // // // //               {[
// // // // // // //                 // { k: "Focus", v: "Interface engineering" },
// // // // // // //                 // { k: "Mode", v: "Ship → measure → polish" },
// // // // // // //               ].map((row) => (
// // // // // // //                 <div
// // // // // // //                   key={row.k}
// // // // // // //                   className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
// // // // // // //                 >
// // // // // // //                   <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
// // // // // // //                     {row.k}
// // // // // // //                   </p>
// // // // // // //                   <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
// // // // // // //                     {row.v}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </div>

// // // // // // //         {/* stats strip */}
// // // // // // //         <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-paper-300/12 bg-paper-300/12 sm:mt-20 lg:grid-cols-4">
// // // // // // //           {stats.map((s, i) => (
// // // // // // //             <motion.div
// // // // // // //               key={s.label}
// // // // // // //               initial={{ opacity: 0, y: 20 }}
// // // // // // //               animate={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.7, delay: 1.3 + i * 0.08, ease: EASE }}
// // // // // // //               className="group relative bg-ink-950 px-5 py-6 transition-colors hover:bg-ink-900"
// // // // // // //             >
// // // // // // //               <p className="font-display text-[34px] font-extrabold leading-none text-paper-50 sm:text-[42px]">
// // // // // // //                 <CountUp value={s.value} />
// // // // // // //               </p>
// // // // // // //               <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper-100/80">
// // // // // // //                 {s.label}
// // // // // // //               </p>
// // // // // // //               <p className="mt-1 text-[12.5px] text-paper-300/45">{s.note}</p>
// // // // // // //               <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-acid transition-all duration-500 group-hover:w-full" />
// // // // // // //             </motion.div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </Spotlight>

// // // // // // //       {/* ticker */}
// // // // // // //       <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
// // // // // // //         <Marquee
// // // // // // //           items={marqueeItems}
// // // // // // //           duration={40}
// // // // // // //           className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useEffect, useMemo, useRef, useState } from 'react';
// // // // // // import gsap from 'gsap';
// // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // import { API_BASE_URL, apiFetch } from "../lib/api";
// // // // // // import './Hero.css';

// // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // const Hero = () => {
// // // // // //     const [settings, setSettings] = useState({
// // // // // //         heroTitle: 'WE FORGE DIGITAL EXPERIENCES',
// // // // // //         heroSubtitle:
// // // // // //             'We design, build and launch digital products that turn ambitious ideas into meaningful experiences.',
// // // // // //         backgroundVideo: '',
// // // // // //     });
// // // // // //     const heroRef = useRef<HTMLElement | null>(null);
// // // // // //     const titleRef = useRef<HTMLDivElement | null>(null);
// // // // // //     const cursorRef = useRef<HTMLDivElement | null>(null);
// // // // // //     const blueprintRef = useRef<HTMLDivElement | null>(null);
// // // // // //     const particlesRef = useRef<HTMLDivElement | null>(null);
// // // // // //     const processRef = useRef<HTMLDivElement | null>(null);

// // // // // //     useEffect(() => {
// // // // // //         let active = true;

// // // // // //         apiFetch<{ success: boolean; data: Partial<typeof settings> }>('/settings')
// // // // // //             .then((response) => {
// // // // // //                 if (!active || !response.data) return;

// // // // // //                 setSettings((current) => ({
// // // // // //                     ...current,
// // // // // //                     ...response.data,
// // // // // //                     heroTitle: response.data.heroTitle?.trim() || current.heroTitle,
// // // // // //                     heroSubtitle: response.data.heroSubtitle?.trim() || current.heroSubtitle,
// // // // // //                 }));
// // // // // //             })
// // // // // //             .catch((error) => {
// // // // // //                 console.warn('[Hero] Could not load website settings:', error);
// // // // // //             });

// // // // // //         return () => {
// // // // // //             active = false;
// // // // // //         };
// // // // // //     }, []);

// // // // // //     const titleLines = useMemo(() => {
// // // // // //         const words = settings.heroTitle.trim().split(/\s+/).filter(Boolean);

// // // // // //         if (words.length >= 4) {
// // // // // //             return [words.slice(0, 2).join(' '), words.slice(2, -1).join(' '), words.at(-1) || ''];
// // // // // //         }

// // // // // //         if (words.length === 3) return words;
// // // // // //         if (words.length === 2) return [words[0], words[1]];
// // // // // //         return [words[0] || 'DEVFORGE'];
// // // // // //     }, [settings.heroTitle]);

// // // // // //     const backgroundVideoUrl = useMemo(() => {
// // // // // //         const value = settings.backgroundVideo?.trim();
// // // // // //         if (!value) return '';
// // // // // //         if (/^(https?:|data:|blob:)/i.test(value)) return value;

// // // // // //         const serverBase = API_BASE_URL.replace(/\/api\/?$/, '');
// // // // // //         return `${serverBase}${value.startsWith('/') ? value : `/${value}`}`;
// // // // // //     }, [settings.backgroundVideo]);

// // // // // //     useEffect(() => {
// // // // // //         const hero = heroRef.current;
// // // // // //         const title = titleRef.current;
// // // // // //         const cursor = cursorRef.current;
// // // // // //         const blueprint = blueprintRef.current;
// // // // // //         const particles = particlesRef.current;
// // // // // //         const process = processRef.current;

// // // // // //         if (
// // // // // //             !hero ||
// // // // // //             !title ||
// // // // // //             !cursor ||
// // // // // //             !blueprint ||
// // // // // //             !particles
// // // // // //         ) {
// // // // // //             return;
// // // // // //         }

// // // // // //         const ctx = gsap.context(() => {
// // // // // //             /* =====================================================
// // // // // //                ELEMENTS
// // // // // //             ===================================================== */

// // // // // //             const words =
// // // // // //                 title.querySelectorAll<HTMLElement>(
// // // // // //                     '.hero__word'
// // // // // //                 );

// // // // // //             const letters =
// // // // // //                 title.querySelectorAll<HTMLElement>(
// // // // // //                     '.hero__letter'
// // // // // //                 );

// // // // // //             /* =====================================================
// // // // // //                INTRO ANIMATION
// // // // // //             ===================================================== */

// // // // // //             gsap.set(words, {
// // // // // //                 yPercent: 115,
// // // // // //                 opacity: 0,
// // // // // //             });

// // // // // //             gsap.set(
// // // // // //                 [
// // // // // //                     '.hero__eyebrow',
// // // // // //                     '.hero__description',
// // // // // //                     '.hero__actions',
// // // // // //                     '.hero__meta',
// // // // // //                 ],
// // // // // //                 {
// // // // // //                     opacity: 0,
// // // // // //                     y: 24,
// // // // // //                 }
// // // // // //             );

// // // // // //             gsap.set(blueprint, {
// // // // // //                 opacity: 0,
// // // // // //                 scale: 0.84,
// // // // // //                 x: 50,
// // // // // //                 rotate: -2,
// // // // // //             });

// // // // // //             gsap.set(process, {
// // // // // //                 y: 40,
// // // // // //                 opacity: 0,
// // // // // //             });

// // // // // //             const intro = gsap.timeline({
// // // // // //                 delay: 0.15,
// // // // // //             });

// // // // // //             intro
// // // // // //                 .to(words, {
// // // // // //                     yPercent: 0,
// // // // // //                     opacity: 1,
// // // // // //                     duration: 1.15,
// // // // // //                     stagger: 0.12,
// // // // // //                     ease: 'power4.out',
// // // // // //                 })
// // // // // //                 .to(
// // // // // //                     '.hero__eyebrow',
// // // // // //                     {
// // // // // //                         opacity: 1,
// // // // // //                         y: 0,
// // // // // //                         duration: 0.5,
// // // // // //                         ease: 'power3.out',
// // // // // //                     },
// // // // // //                     '-=0.7'
// // // // // //                 )
// // // // // //                 .to(
// // // // // //                     '.hero__description',
// // // // // //                     {
// // // // // //                         opacity: 1,
// // // // // //                         y: 0,
// // // // // //                         duration: 0.55,
// // // // // //                         ease: 'power3.out',
// // // // // //                     },
// // // // // //                     '-=0.3'
// // // // // //                 )
// // // // // //                 .to(
// // // // // //                     '.hero__actions',
// // // // // //                     {
// // // // // //                         opacity: 1,
// // // // // //                         y: 0,
// // // // // //                         duration: 0.5,
// // // // // //                         ease: 'power3.out',
// // // // // //                     },
// // // // // //                     '-=0.3'
// // // // // //                 )
// // // // // //                 .to(
// // // // // //                     '.hero__meta',
// // // // // //                     {
// // // // // //                         opacity: 1,
// // // // // //                         y: 0,
// // // // // //                         duration: 0.45,
// // // // // //                         ease: 'power3.out',
// // // // // //                     },
// // // // // //                     '-=0.25'
// // // // // //                 )
// // // // // //                 .to(
// // // // // //                     blueprint,
// // // // // //                     {
// // // // // //                         opacity: 1,
// // // // // //                         scale: 1,
// // // // // //                         x: 0,
// // // // // //                         rotate: 0,
// // // // // //                         duration: 1.15,
// // // // // //                         ease: 'power4.out',
// // // // // //                     },
// // // // // //                     '-=0.75'
// // // // // //                 );

// // // // // //             /* =====================================================
// // // // // //                POINTER STATE
// // // // // //             ===================================================== */

// // // // // //             const pointer = {
// // // // // //                 x: window.innerWidth / 2,
// // // // // //                 y: window.innerHeight / 2,
// // // // // //                 targetX: window.innerWidth / 2,
// // // // // //                 targetY: window.innerHeight / 2,
// // // // // //                 active: false,
// // // // // //             };

// // // // // //             let waveTime = 0;
// // // // // //             let animationFrame = 0;

// // // // // //             /* =====================================================
// // // // // //                CURSOR MOVE
// // // // // //             ===================================================== */

// // // // // //             const handlePointerMove = (
// // // // // //                 event: PointerEvent
// // // // // //             ) => {
// // // // // //                 pointer.targetX = event.clientX;
// // // // // //                 pointer.targetY = event.clientY;

// // // // // //                 pointer.active = true;
// // // // // //             };

// // // // // //             const handlePointerEnter = () => {
// // // // // //                 pointer.active = true;
// // // // // //             };

// // // // // //             const handlePointerLeave = () => {
// // // // // //                 pointer.active = false;
// // // // // //             };

// // // // // //             hero.addEventListener(
// // // // // //                 'pointermove',
// // // // // //                 handlePointerMove
// // // // // //             );

// // // // // //             hero.addEventListener(
// // // // // //                 'pointerenter',
// // // // // //                 handlePointerEnter
// // // // // //             );

// // // // // //             hero.addEventListener(
// // // // // //                 'pointerleave',
// // // // // //                 handlePointerLeave
// // // // // //             );

// // // // // //             /* =====================================================
// // // // // //                LIQUID WAVE ENGINE
// // // // // //             ===================================================== */

// // // // // //             const animateLiquidWave = () => {
// // // // // //                 pointer.x +=
// // // // // //                     (pointer.targetX - pointer.x) *
// // // // // //                     0.11;

// // // // // //                 pointer.y +=
// // // // // //                     (pointer.targetY - pointer.y) *
// // // // // //                     0.11;

// // // // // //                 waveTime += 0.045;

// // // // // //                 /* ---------------------------------------------
// // // // // //                    Cursor glow
// // // // // //                 --------------------------------------------- */

// // // // // //                 const heroRect =
// // // // // //                     hero.getBoundingClientRect();

// // // // // //                 const localX =
// // // // // //                     pointer.x - heroRect.left;

// // // // // //                 const localY =
// // // // // //                     pointer.y - heroRect.top;

// // // // // //                 gsap.set(cursor, {
// // // // // //                     x:
// // // // // //                         localX -
// // // // // //                         heroRect.width / 2,
// // // // // //                     y:
// // // // // //                         localY -
// // // // // //                         heroRect.height / 2,
// // // // // //                 });

// // // // // //                 /* ---------------------------------------------
// // // // // //                    Blueprint parallax
// // // // // //                 --------------------------------------------- */

// // // // // //                 const normalizedX =
// // // // // //                     (localX / heroRect.width - 0.5) * 2;

// // // // // //                 const normalizedY =
// // // // // //                     (localY / heroRect.height - 0.5) * 2;

// // // // // //                 gsap.set(blueprint, {
// // // // // //                     x: normalizedX * -18,
// // // // // //                     y: normalizedY * -12,
// // // // // //                     rotateX: normalizedY * -2.5,
// // // // // //                     rotateY: normalizedX * 3,
// // // // // //                 });

// // // // // //                 /* ---------------------------------------------
// // // // // //                    Background grid parallax
// // // // // //                 --------------------------------------------- */

// // // // // //                 const grid =
// // // // // //                     hero.querySelector<HTMLElement>(
// // // // // //                         '.hero__grid'
// // // // // //                     );

// // // // // //                 if (grid) {
// // // // // //                     gsap.set(grid, {
// // // // // //                         x: normalizedX * -8,
// // // // // //                         y: normalizedY * -6,
// // // // // //                     });
// // // // // //                 }

// // // // // //                 /* ---------------------------------------------
// // // // // //                    TEXT LIQUID RIPPLE
// // // // // //                 --------------------------------------------- */

// // // // // //                 letters.forEach((letter) => {
// // // // // //                     const rect =
// // // // // //                         letter.getBoundingClientRect();

// // // // // //                     const centerX =
// // // // // //                         rect.left +
// // // // // //                         rect.width / 2;

// // // // // //                     const centerY =
// // // // // //                         rect.top +
// // // // // //                         rect.height / 2;

// // // // // //                     const dx =
// // // // // //                         centerX - pointer.x;

// // // // // //                     const dy =
// // // // // //                         centerY - pointer.y;

// // // // // //                     const distance =
// // // // // //                         Math.sqrt(
// // // // // //                             dx * dx +
// // // // // //                             dy * dy
// // // // // //                         );

// // // // // //                     /*
// // // // // //                      * Bigger = wider water field.
// // // // // //                      */
// // // // // //                     const radius = 245;

// // // // // //                     if (
// // // // // //                         pointer.active &&
// // // // // //                         distance < radius
// // // // // //                     ) {
// // // // // //                         /*
// // // // // //                          * Smooth radial influence.
// // // // // //                          */
// // // // // //                         const normalizedDistance =
// // // // // //                             distance / radius;

// // // // // //                         const influence =
// // // // // //                             Math.pow(
// // // // // //                                 1 -
// // // // // //                                 normalizedDistance,
// // // // // //                                 2
// // // // // //                             );

// // // // // //                         /*
// // // // // //                          * The ripple travels outward.
// // // // // //                          */
// // // // // //                         const phase =
// // // // // //                             distance * 0.052 -
// // // // // //                             waveTime * 5.5;

// // // // // //                         /*
// // // // // //                          * Main vertical wave.
// // // // // //                          */
// // // // // //                         const verticalWave =
// // // // // //                             Math.sin(phase) *
// // // // // //                             influence *
// // // // // //                             25;

// // // // // //                         /*
// // // // // //                          * Secondary horizontal wave.
// // // // // //                          */
// // // // // //                         const horizontalWave =
// // // // // //                             Math.cos(
// // // // // //                                 phase * 0.72
// // // // // //                             ) *
// // // // // //                             influence *
// // // // // //                             9;

// // // // // //                         /*
// // // // // //                          * Slight circular movement.
// // // // // //                          */
// // // // // //                         const orbitalX =
// // // // // //                             Math.cos(
// // // // // //                                 phase * 0.5
// // // // // //                             ) *
// // // // // //                             influence *
// // // // // //                             4;

// // // // // //                         /*
// // // // // //                          * Rotation follows the wave.
// // // // // //                          */
// // // // // //                         const rotation =
// // // // // //                             Math.sin(
// // // // // //                                 phase
// // // // // //                             ) *
// // // // // //                             influence *
// // // // // //                             5.5;

// // // // // //                         /*
// // // // // //                          * Liquid stretching.
// // // // // //                          */
// // // // // //                         const scaleX =
// // // // // //                             1 +
// // // // // //                             Math.cos(
// // // // // //                                 phase * 0.8
// // // // // //                             ) *
// // // // // //                             influence *
// // // // // //                             0.055;

// // // // // //                         const scaleY =
// // // // // //                             1 +
// // // // // //                             Math.sin(
// // // // // //                                 phase + 1
// // // // // //                             ) *
// // // // // //                             influence *
// // // // // //                             0.09;

// // // // // //                         /*
// // // // // //                          * Fade tiny distortion on
// // // // // //                          * very distant letters.
// // // // // //                          */
// // // // // //                         const opacity =
// // // // // //                             1 -
// // // // // //                             influence * 0.03;

// // // // // //                         gsap.set(letter, {
// // // // // //                             x:
// // // // // //                                 horizontalWave +
// // // // // //                                 orbitalX,
// // // // // //                             y: verticalWave,
// // // // // //                             rotation,
// // // // // //                             scaleX,
// // // // // //                             scaleY,
// // // // // //                             opacity,
// // // // // //                         });
// // // // // //                     } else {
// // // // // //                         /*
// // // // // //                          * Smooth return.
// // // // // //                          */
// // // // // //                         gsap.to(letter, {
// // // // // //                             x: 0,
// // // // // //                             y: 0,
// // // // // //                             rotation: 0,
// // // // // //                             scaleX: 1,
// // // // // //                             scaleY: 1,
// // // // // //                             opacity: 1,
// // // // // //                             duration: 0.55,
// // // // // //                             ease: 'power3.out',
// // // // // //                             overwrite: true,
// // // // // //                         });
// // // // // //                     }
// // // // // //                 });

// // // // // //                 /* ---------------------------------------------
// // // // // //                    PARTICLES
// // // // // //                 --------------------------------------------- */

// // // // // //                 const particleNodes =
// // // // // //                     particles.querySelectorAll<HTMLElement>(
// // // // // //                         '.hero__particle'
// // // // // //                     );

// // // // // //                 particleNodes.forEach(
// // // // // //                     (particle, index) => {
// // // // // //                         const depth =
// // // // // //                             3 +
// // // // // //                             (index % 5) * 3;

// // // // // //                         const px =
// // // // // //                             normalizedX * depth;

// // // // // //                         const py =
// // // // // //                             normalizedY * depth;

// // // // // //                         gsap.set(particle, {
// // // // // //                             x: px,
// // // // // //                             y: py,
// // // // // //                         });
// // // // // //                     }
// // // // // //                 );

// // // // // //                 animationFrame =
// // // // // //                     requestAnimationFrame(
// // // // // //                         animateLiquidWave
// // // // // //                     );
// // // // // //             };

// // // // // //             animationFrame =
// // // // // //                 requestAnimationFrame(
// // // // // //                     animateLiquidWave
// // // // // //                 );

// // // // // //             /* =====================================================
// // // // // //                CLICK RIPPLE
// // // // // //             ===================================================== */

// // // // // //             const handleClick = (
// // // // // //                 event: MouseEvent
// // // // // //             ) => {
// // // // // //                 const rect =
// // // // // //                     hero.getBoundingClientRect();

// // // // // //                 const x =
// // // // // //                     event.clientX -
// // // // // //                     rect.left;

// // // // // //                 const y =
// // // // // //                     event.clientY -
// // // // // //                     rect.top;

// // // // // //                 const ripple =
// // // // // //                     document.createElement(
// // // // // //                         'span'
// // // // // //                     );

// // // // // //                 ripple.className =
// // // // // //                     'hero__click-ripple';

// // // // // //                 ripple.style.left = `${x}px`;
// // // // // //                 ripple.style.top = `${y}px`;

// // // // // //                 hero.appendChild(ripple);

// // // // // //                 gsap.fromTo(
// // // // // //                     ripple,
// // // // // //                     {
// // // // // //                         width: 0,
// // // // // //                         height: 0,
// // // // // //                         opacity: 0.7,
// // // // // //                     },
// // // // // //                     {
// // // // // //                         width: 420,
// // // // // //                         height: 420,
// // // // // //                         opacity: 0,
// // // // // //                         duration: 1,
// // // // // //                         ease: 'power3.out',
// // // // // //                         onComplete: () => {
// // // // // //                             ripple.remove();
// // // // // //                         },
// // // // // //                     }
// // // // // //                 );
// // // // // //             };

// // // // // //             hero.addEventListener(
// // // // // //                 'click',
// // // // // //                 handleClick
// // // // // //             );

// // // // // //             /* =====================================================
// // // // // //                SCROLL TRANSITION
// // // // // //             ===================================================== */

// // // // // //             const scrollTrigger =
// // // // // //                 ScrollTrigger.create({
// // // // // //                     trigger: hero,
// // // // // //                     start: 'top top',
// // // // // //                     end: '+=110%',
// // // // // //                     pin: true,
// // // // // //                     scrub: 1,
// // // // // //                     anticipatePin: 1,

// // // // // //                     onUpdate: (self) => {
// // // // // //                         const progress =
// // // // // //                             self.progress;

// // // // // //                         /*
// // // // // //                          * Typography moves upward
// // // // // //                          * and becomes tighter.
// // // // // //                          */
// // // // // //                         gsap.set(
// // // // // //                             '.hero__title-inner',
// // // // // //                             {
// // // // // //                                 y:
// // // // // //                                     -progress *
// // // // // //                                     165,
// // // // // //                                 scale:
// // // // // //                                     1 -
// // // // // //                                     progress *
// // // // // //                                     0.2,
// // // // // //                             }
// // // // // //                         );

// // // // // //                         /*
// // // // // //                          * Blueprint exits toward
// // // // // //                          * the right.
// // // // // //                          */
// // // // // //                         gsap.set(
// // // // // //                             '.hero__blueprint',
// // // // // //                             {
// // // // // //                                 x:
// // // // // //                                     progress *
// // // // // //                                     130,
// // // // // //                                 rotate:
// // // // // //                                     progress * 5,
// // // // // //                                 scale:
// // // // // //                                     1 -
// // // // // //                                     progress *
// // // // // //                                     0.17,
// // // // // //                                 opacity:
// // // // // //                                     1 -
// // // // // //                                     progress *
// // // // // //                                     0.85,
// // // // // //                             }
// // // // // //                         );

// // // // // //                         /*
// // // // // //                          * Copy fades.
// // // // // //                          */
// // // // // //                         gsap.set(
// // // // // //                             '.hero__copy',
// // // // // //                             {
// // // // // //                                 y:
// // // // // //                                     -progress *
// // // // // //                                     80,
// // // // // //                                 opacity:
// // // // // //                                     1 -
// // // // // //                                     progress *
// // // // // //                                     0.85,
// // // // // //                             }
// // // // // //                         );

// // // // // //                         /*
// // // // // //                          * Process strip enters.
// // // // // //                          */
// // // // // //                         gsap.set(
// // // // // //                             process,
// // // // // //                             {
// // // // // //                                 y:
// // // // // //                                     40 -
// // // // // //                                     progress *
// // // // // //                                     40,
// // // // // //                                 opacity:
// // // // // //                                     progress,
// // // // // //                             }
// // // // // //                         );

// // // // // //                         hero.style.setProperty(
// // // // // //                             '--hero-progress',
// // // // // //                             String(progress)
// // // // // //                         );
// // // // // //                     },
// // // // // //                 });

// // // // // //             /* =====================================================
// // // // // //                CLEANUP
// // // // // //             ===================================================== */

// // // // // //             return () => {
// // // // // //                 cancelAnimationFrame(
// // // // // //                     animationFrame
// // // // // //                 );

// // // // // //                 hero.removeEventListener(
// // // // // //                     'pointermove',
// // // // // //                     handlePointerMove
// // // // // //                 );

// // // // // //                 hero.removeEventListener(
// // // // // //                     'pointerenter',
// // // // // //                     handlePointerEnter
// // // // // //                 );

// // // // // //                 hero.removeEventListener(
// // // // // //                     'pointerleave',
// // // // // //                     handlePointerLeave
// // // // // //                 );

// // // // // //                 hero.removeEventListener(
// // // // // //                     'click',
// // // // // //                     handleClick
// // // // // //                 );

// // // // // //                 scrollTrigger.kill();
// // // // // //             };
// // // // // //         }, heroRef);

// // // // // //         return () => {
// // // // // //             ctx.revert();
// // // // // //         };
// // // // // //     }, []);

// // // // // //     return (
// // // // // //         <section
// // // // // //             id="hero"
// // // // // //             ref={heroRef}
// // // // // //             className="hero"
// // // // // //         >
// // // // // //             {backgroundVideoUrl && (
// // // // // //                 <video
// // // // // //                     key={backgroundVideoUrl}
// // // // // //                     src={backgroundVideoUrl}
// // // // // //                     autoPlay
// // // // // //                     muted
// // // // // //                     loop
// // // // // //                     playsInline
// // // // // //                     aria-hidden="true"
// // // // // //                     style={{
// // // // // //                         position: 'absolute',
// // // // // //                         inset: 0,
// // // // // //                         width: '100%',
// // // // // //                         height: '100%',
// // // // // //                         objectFit: 'cover',
// // // // // //                         opacity: 0.28,
// // // // // //                         pointerEvents: 'none',
// // // // // //                     }}
// // // // // //                 />
// // // // // //             )}
// // // // // //             {/* =================================================
// // // // // //                 BACKGROUND GRID
// // // // // //             ================================================= */}

// // // // // //             <div
// // // // // //                 className="hero__grid"
// // // // // //                 aria-hidden="true"
// // // // // //             />

// // // // // //             {/* =================================================
// // // // // //                 CURSOR / LIQUID FIELD
// // // // // //             ================================================= */}

// // // // // //             <div
// // // // // //                 ref={cursorRef}
// // // // // //                 className="hero__cursor-field"
// // // // // //                 aria-hidden="true"
// // // // // //             >
// // // // // //                 <span className="hero__cursor-core" />

// // // // // //                 <span className="hero__cursor-ring hero__cursor-ring--1" />
// // // // // //                 <span className="hero__cursor-ring hero__cursor-ring--2" />
// // // // // //                 <span className="hero__cursor-ring hero__cursor-ring--3" />
// // // // // //             </div>

// // // // // //             {/* =================================================
// // // // // //                 PARTICLES
// // // // // //             ================================================= */}

// // // // // //             <div
// // // // // //                 ref={particlesRef}
// // // // // //                 className="hero__particles"
// // // // // //                 aria-hidden="true"
// // // // // //             >
// // // // // //                 {Array.from({
// // // // // //                     length: 42,
// // // // // //                 }).map((_, index) => (
// // // // // //                     <span
// // // // // //                         key={index}
// // // // // //                         className="hero__particle"
// // // // // //                         style={{
// // // // // //                             left: `${12 +
// // // // // //                                 ((index * 19) %
// // // // // //                                     76)
// // // // // //                                 }%`,
// // // // // //                             top: `${10 +
// // // // // //                                 ((index * 29) %
// // // // // //                                     76)
// // // // // //                                 }%`,
// // // // // //                             animationDelay: `${index * -0.17
// // // // // //                                 }s`,
// // // // // //                         }}
// // // // // //                     />
// // // // // //                 ))}
// // // // // //             </div>

// // // // // //             {/* =================================================
// // // // // //                 MAIN CONTAINER
// // // // // //             ================================================= */}

// // // // // //             <div className="hero__container">
// // // // // //                 {/* =================================================
// // // // // //                     LEFT CONTENT
// // // // // //                 ================================================= */}

// // // // // //                 <div className="hero__copy">
// // // // // //                     <div className="hero__eyebrow">
// // // // // //                         <span className="hero__eyebrow-dot" />

// // // // // //                         Creative Development Studio
// // // // // //                     </div>

// // // // // //                     {/* =================================================
// // // // // //                         LIQUID TYPOGRAPHY
// // // // // //                     ================================================= */}

// // // // // //                     <div
// // // // // //                         ref={titleRef}
// // // // // //                         className="hero__title"
// // // // // //                     >
// // // // // //                         <div className="hero__title-inner">
// // // // // //                             {titleLines.map((line, lineIndex) => (
// // // // // //                                 <span
// // // // // //                                     key={`${line}-${lineIndex}`}
// // // // // //                                     className={`hero__word ${lineIndex === 1 ? 'hero__word--green' : ''}`}
// // // // // //                                 >
// // // // // //                                     {line.split('').map((char, charIndex) => (
// // // // // //                                         <span
// // // // // //                                             key={`${lineIndex}-${charIndex}`}
// // // // // //                                             className="hero__letter"
// // // // // //                                         >
// // // // // //                                             {char === ' ' ? '\u00A0' : char}
// // // // // //                                         </span>
// // // // // //                                     ))}

// // // // // //                                     {lineIndex === titleLines.length - 1 && (
// // // // // //                                         <span className="hero__dot">.</span>
// // // // // //                                     )}
// // // // // //                                 </span>
// // // // // //                             ))}
// // // // // //                         </div>
// // // // // //                     </div>

// // // // // //                     {/* =================================================
// // // // // //                         DESCRIPTION
// // // // // //                     ================================================= */}

// // // // // //                     <p className="hero__description">
// // // // // //                         {settings.heroSubtitle}
// // // // // //                     </p>

// // // // // //                     {/* =================================================
// // // // // //                         ACTIONS
// // // // // //                     ================================================= */}

// // // // // //                     <div className="hero__actions">
// // // // // //                         <a
// // // // // //                             href="#contact"
// // // // // //                             className="hero__primary"
// // // // // //                         >
// // // // // //                             Start a project

// // // // // //                             <span>
// // // // // //                                 ↗
// // // // // //                             </span>
// // // // // //                         </a>

// // // // // //                         <a
// // // // // //                             href="#projects"
// // // // // //                             className="hero__secondary"
// // // // // //                         >
// // // // // //                             View our work

// // // // // //                             <span>
// // // // // //                                 →
// // // // // //                             </span>
// // // // // //                         </a>
// // // // // //                     </div>

// // // // // //                     {/* =================================================
// // // // // //                         META
// // // // // //                     ================================================= */}

// // // // // //                     <div className="hero__meta">
// // // // // //                         <span>
// // // // // //                             BUILD
// // // // // //                         </span>

// // // // // //                         <i />

// // // // // //                         <span>
// // // // // //                             CODE
// // // // // //                         </span>

// // // // // //                         <i />

// // // // // //                         <span>
// // // // // //                             LAUNCH
// // // // // //                         </span>

// // // // // //                         <strong>
// // // // // //                             01 / 05
// // // // // //                         </strong>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 {/* =================================================
// // // // // //                     BLUEPRINT
// // // // // //                 ================================================= */}

// // // // // //                 <div
// // // // // //                     ref={blueprintRef}
// // // // // //                     className="hero__blueprint"
// // // // // //                 >
// // // // // //                     <div className="hero__blueprint-label">
// // // // // //                         SYSTEM / 001
// // // // // //                     </div>

// // // // // //                     <div className="hero__blueprint-coordinate">
// // // // // //                         <span>●</span>

// // // // // //                         CURSOR X
// // // // // //                         <b>0642</b>

// // // // // //                         <br />

// // // // // //                         <span>●</span>

// // // // // //                         CURSOR Y
// // // // // //                         <b>0318</b>

// // // // // //                         <br />

// // // // // //                         <em>—</em>
// // // // // //                     </div>

// // // // // //                     <div className="hero__blueprint-grid" />

// // // // // //                     <svg
// // // // // //                         className="hero__df-svg"
// // // // // //                         viewBox="0 0 500 500"
// // // // // //                         fill="none"
// // // // // //                         aria-hidden="true"
// // // // // //                     >
// // // // // //                         {/* =========================
// // // // // //         D — FRAGMENTED
// // // // // //     ========================= */}

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--1"
// // // // // //                             d="M85 75V425"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--2"
// // // // // //                             d="M85 75H195"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--3"
// // // // // //                             d="M195 75C285 75 335 140 335 250"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--4"
// // // // // //                             d="M335 250C335 360 285 425 195 425H85"
// // // // // //                         />

// // // // // //                         {/* D inner broken construction */}

// // // // // //                         <path
// // // // // //                             className="df-detail"
// // // // // //                             d="M125 120V380"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-detail"
// // // // // //                             d="M125 120H190"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-detail"
// // // // // //                             d="M190 120C245 120 285 170 285 250"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-detail"
// // // // // //                             d="M285 250C285 330 245 380 190 380H125"
// // // // // //                         />


// // // // // //                         {/* =========================
// // // // // //         F — FRAGMENTED
// // // // // //     ========================= */}

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--5"
// // // // // //                             d="M285 75H425"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--6"
// // // // // //                             d="M285 75V425"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-segment df-segment--7"
// // // // // //                             d="M285 250H405"
// // // // // //                         />

// // // // // //                         {/* F broken details */}

// // // // // //                         <path
// // // // // //                             className="df-detail"
// // // // // //                             d="M325 115H425"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-detail"
// // // // // //                             d="M325 250H395"
// // // // // //                         />


// // // // // //                         {/* =========================
// // // // // //         FLOATING FRAGMENTS
// // // // // //     ========================= */}

// // // // // //                         <path
// // // // // //                             className="df-fragment df-fragment--1"
// // // // // //                             d="M55 145H72"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-fragment df-fragment--2"
// // // // // //                             d="M55 355H72"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-fragment df-fragment--3"
// // // // // //                             d="M350 110L365 100"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-fragment df-fragment--4"
// // // // // //                             d="M350 390L365 400"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-fragment df-fragment--5"
// // // // // //                             d="M420 215H442"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-fragment df-fragment--6"
// // // // // //                             d="M420 285H442"
// // // // // //                         />


// // // // // //                         {/* =========================
// // // // // //         TECHNICAL NODES
// // // // // //     ========================= */}

// // // // // //                         <circle className="df-node" cx="85" cy="75" r="5" />
// // // // // //                         <circle className="df-node" cx="85" cy="425" r="5" />

// // // // // //                         <circle className="df-node" cx="195" cy="75" r="4" />
// // // // // //                         <circle className="df-node" cx="335" cy="250" r="5" />
// // // // // //                         <circle className="df-node" cx="195" cy="425" r="4" />

// // // // // //                         <circle className="df-node" cx="285" cy="75" r="5" />
// // // // // //                         <circle className="df-node" cx="425" cy="75" r="4" />

// // // // // //                         <circle className="df-node" cx="285" cy="250" r="5" />
// // // // // //                         <circle className="df-node" cx="405" cy="250" r="4" />
// // // // // //                         <circle className="df-node" cx="285" cy="425" r="5" />


// // // // // //                         {/* =========================
// // // // // //         CENTER TARGET
// // // // // //     ========================= */}

// // // // // //                         <circle
// // // // // //                             className="df-target"
// // // // // //                             cx="250"
// // // // // //                             cy="250"
// // // // // //                             r="8"
// // // // // //                         />

// // // // // //                         <circle
// // // // // //                             className="df-target-inner"
// // // // // //                             cx="250"
// // // // // //                             cy="250"
// // // // // //                             r="2"
// // // // // //                         />

// // // // // //                         <path
// // // // // //                             className="df-crosshair"
// // // // // //                             d="
// // // // // //             M250 232V242
// // // // // //             M250 258V268
// // // // // //             M232 250H242
// // // // // //             M258 250H268
// // // // // //         "
// // // // // //                         />
// // // // // //                     </svg>

// // // // // //                     {/* Blueprint status */}

// // // // // //                     <div className="hero__blueprint-status">
// // // // // //                         <span>
// // // // // //                             ●
// // // // // //                         </span>

// // // // // //                         CURSOR ACTIVE

// // // // // //                         <b>
// // // // // //                             MOVE TO EXPLORE
// // // // // //                         </b>
// // // // // //                     </div>

// // // // // //                     <div className="hero__blueprint-side">
// // // // // //                         DEVFORGE
// // // // // //                         <br />
// // // // // //                         DIGITAL SYSTEM
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 {/* =================================================
// // // // // //                     SCROLL INDICATOR
// // // // // //                 ================================================= */}

// // // // // //                 <div className="hero__scroll">
// // // // // //                     <span>
// // // // // //                         SCROLL TO EXPLORE
// // // // // //                     </span>

// // // // // //                     <b>
// // // // // //                         ↓
// // // // // //                     </b>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {/* =================================================
// // // // // //                 PROCESS STRIP
// // // // // //             ================================================= */}

// // // // // //             <div
// // // // // //                 ref={processRef}
// // // // // //                 className="hero__process"
// // // // // //             >
// // // // // //                 <div className="hero__process-label">
// // // // // //                     <span />

// // // // // //                     OUR PROCESS
// // // // // //                 </div>

// // // // // //                 <div className="hero__process-items">
// // // // // //                     <div>
// // // // // //                         <strong>
// // // // // //                             01
// // // // // //                         </strong>

// // // // // //                         <b>
// // // // // //                             IDEA
// // // // // //                         </b>

// // // // // //                         <span>
// // // // // //                             Strategy
// // // // // //                         </span>
// // // // // //                     </div>

// // // // // //                     <i>
// // // // // //                         →
// // // // // //                     </i>

// // // // // //                     <div>
// // // // // //                         <strong>
// // // // // //                             02
// // // // // //                         </strong>

// // // // // //                         <b>
// // // // // //                             DESIGN
// // // // // //                         </b>

// // // // // //                         <span>
// // // // // //                             Experience
// // // // // //                         </span>
// // // // // //                     </div>

// // // // // //                     <i>
// // // // // //                         →
// // // // // //                     </i>

// // // // // //                     <div>
// // // // // //                         <strong>
// // // // // //                             03
// // // // // //                         </strong>

// // // // // //                         <b>
// // // // // //                             CODE
// // // // // //                         </b>

// // // // // //                         <span>
// // // // // //                             Development
// // // // // //                         </span>
// // // // // //                     </div>

// // // // // //                     <i>
// // // // // //                         →
// // // // // //                     </i>

// // // // // //                     <div>
// // // // // //                         <strong>
// // // // // //                             04
// // // // // //                         </strong>

// // // // // //                         <b>
// // // // // //                             LAUNCH
// // // // // //                         </b>

// // // // // //                         <span>
// // // // // //                             Growth
// // // // // //                         </span>
// // // // // //                     </div>

// // // // // //                     <div className="hero__process-cta">
// // // // // //                         <span>
// // // // // //                             ↗
// // // // // //                         </span>

// // // // // //                         LET'S BUILD
// // // // // //                         <br />
// // // // // //                         TOGETHER
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </section>
// // // // // //     );
// // // // // // };

// // // // // // export default Hero;
// // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // import { ArrowDown, MapPin, Terminal } from "lucide-react";
// // // // // import { useEffect, useMemo, useRef, useState } from "react";
// // // // // import { Magnetic, Marquee, Spotlight } from "@/components/ui";
// // // // // import { EASE, marqueeItems, profile } from "@/lib/data";
// // // // // import { VercelIcon } from "@/components/BrandIcons";
// // // // // import { cn } from "@/utils/cn";

// // // // // /* ------------------------------------------------------------------ clock */
// // // // // function IstClock() {
// // // // //   const [now, setNow] = useState("");
// // // // //   useEffect(() => {
// // // // //     const tick = () =>
// // // // //       setNow(
// // // // //         new Intl.DateTimeFormat("en-GB", {
// // // // //           timeZone: "Asia/Kolkata",
// // // // //           hour: "2-digit",
// // // // //           minute: "2-digit",
// // // // //           second: "2-digit",
// // // // //         }).format(new Date()),
// // // // //       );
// // // // //     tick();
// // // // //     const id = setInterval(tick, 1000);
// // // // //     return () => clearInterval(id);
// // // // //   }, []);
// // // // //   return <span className="tabular-nums">{now} IST</span>;
// // // // // }

// // // // // /* ------------------------------------------------------------------- code */
// // // // // type Token = { t: string; c?: string };

// // // // // const code: Token[][] = [
// // // // //   [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
// // // // //   [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // //   [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
// // // // //   [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // //   [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // //   [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
// // // // //   [{ t: "};", c: "text-paper-300" }],
// // // // // ];

// // // // // function CodeConsole() {
// // // // //   const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
// // // // //   const [n, setN] = useState(0);

// // // // //   useEffect(() => {
// // // // //     const reduceMotion = window.matchMedia(
// // // // //       "(prefers-reduced-motion: reduce)",
// // // // //     ).matches;

// // // // //     if (reduceMotion) {
// // // // //       setN(total);
// // // // //       return;
// // // // //     }

// // // // //     let frameId = 0;
// // // // //     let restartId: number | undefined;
// // // // //     let cancelled = false;
// // // // //     const charsPerSecond = 88;
// // // // //     const restartDelay = 1800;

// // // // //     const startTyping = () => {
// // // // //       const startedAt = performance.now();
// // // // //       let lastPaintAt = 0;

// // // // //       const type = (now: number) => {
// // // // //         if (cancelled) return;
// // // // //         const next = Math.min(
// // // // //           total,
// // // // //           Math.floor(((now - startedAt) / 1000) * charsPerSecond),
// // // // //         );

// // // // //         if (now - lastPaintAt >= 32 || next === total) {
// // // // //           lastPaintAt = now;
// // // // //           setN((previous) => (previous === next ? previous : next));
// // // // //         }

// // // // //         if (next < total) {
// // // // //           frameId = requestAnimationFrame(type);
// // // // //         } else {
// // // // //           restartId = window.setTimeout(() => {
// // // // //             if (cancelled) return;
// // // // //             setN(0);
// // // // //             startTyping();
// // // // //           }, restartDelay);
// // // // //         }
// // // // //       };

// // // // //       frameId = requestAnimationFrame(type);
// // // // //     };

// // // // //     startTyping();
// // // // //     return () => {
// // // // //       cancelled = true;
// // // // //       cancelAnimationFrame(frameId);
// // // // //       if (restartId !== undefined) window.clearTimeout(restartId);
// // // // //     };
// // // // //   }, [total]);

// // // // //   let cursor = 0;
// // // // //   const rendered = code.map((line, i) => {
// // // // //     const start = cursor;
// // // // //     const lineLen = line.reduce((a, t) => a + t.t.length, 0);
// // // // //     cursor += lineLen;
// // // // //     const visible = Math.max(0, Math.min(n - start, lineLen));
// // // // //     let consumed = 0;
// // // // //     return (
// // // // //       <div key={i} className="min-h-[1.85em] whitespace-pre">
// // // // //         {line.map((tok, j) => {
// // // // //           const from = consumed;
// // // // //           consumed += tok.t.length;
// // // // //           const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
// // // // //           return (
// // // // //             <span key={j} className={tok.c}>
// // // // //               {slice}
// // // // //             </span>
// // // // //           );
// // // // //         })}
// // // // //         {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
// // // // //           <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   });

// // // // //   return (
// // // // //     <div
// // // // //       className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
// // // // //     >
// // // // //       <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
// // // // //         <span className="flex gap-1.5">
// // // // //           {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // // //             <span
// // // // //               key={c}
// // // // //               className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
// // // // //               style={{ background: c }}
// // // // //             />
// // // // //           ))}
// // // // //         </span>
// // // // //         <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
// // // // //         <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
// // // // //           <Terminal size={11} /> live
// // // // //         </span>
// // // // //       </div>
// // // // //       <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
// // // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
// // // // //         <div className="relative flex gap-4">
// // // // //           <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
// // // // //             {code.map((_, i) => (
// // // // //               <span key={i}>{String(i + 1).padStart(2, "0")}</span>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div className="min-w-0 flex-1">{rendered}</div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
// // // // //         <span>
// // // // //           <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
// // // // //         </span>
// // // // //         <span className="flex items-center gap-1.5 text-paper-300/70">
// // // // //           <VercelIcon className="size-2.5" /> ready on Vercel
// // // // //         </span>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function renderedIndexForCaret(n: number, lines: Token[][]) {
// // // // //   let acc = 0;
// // // // //   for (let i = 0; i < lines.length; i++) {
// // // // //     const len = lines[i].reduce((a, t) => a + t.t.length, 0);
// // // // //     if (n < acc + len) return i;
// // // // //     acc += len;
// // // // //   }
// // // // //   return -1;
// // // // // }

// // // // // /* ------------------------------------------------------------------ seal */
// // // // // function RotatingSeal() {
// // // // //   return (
// // // // //     <div className="relative grid size-[124px] place-items-center">
// // // // //       <svg
// // // // //         viewBox="0 0 120 120"
// // // // //         className="absolute inset-0 size-full"
// // // // //         style={{ animation: "spin-slow 22s linear infinite" }}
// // // // //       >
// // // // //         <defs>
// // // // //           <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
// // // // //         </defs>
// // // // //         <text className="fill-paper-200/70 font-mono text-[10.5px] uppercase tracking-[0.32em]">
// // // // //           <textPath href="#seal-path">
// // // // //             open to internships · freelance builds · ahmedabad ·
// // // // //           </textPath>
// // // // //         </text>
// // // // //       </svg>
// // // // //       <span className="grid size-11 place-items-center rounded-full bg-lime-acid">
// // // // //         <ArrowDown size={17} className="text-ink-900" />
// // // // //       </span>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* --------------------------------------------------------------- letters */
// // // // // function KineticWord({ word, className }: { word: string; className?: string }) {
// // // // //   return (
// // // // //     <span className={cn("inline-flex", className)}>
// // // // //       {word.split("").map((ch, i) => (
// // // // //         <motion.span
// // // // //           key={`${ch}-${i}`}
// // // // //           initial={{ y: "110%", opacity: 0 }}
// // // // //           animate={{ y: "0%", opacity: 1 }}
// // // // //           transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
// // // // //           whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
// // // // //           className="inline-block cursor-default transition-colors duration-300"
// // // // //         >
// // // // //           {ch}
// // // // //         </motion.span>
// // // // //       ))}
// // // // //     </span>
// // // // //   );
// // // // // }

// // // // // /* ------------------------------------------------------------------ hero */
// // // // // export default function Hero() {
// // // // //   const ref = useRef<HTMLElement>(null);
// // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
// // // // //   const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
// // // // //   const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
// // // // //   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // // // //   return (
// // // // //     <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
// // // // //       {/* ambient layers */}
// // // // //       <div className="grid-lines-dark absolute inset-0" />
// // // // //       <div
// // // // //         className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
// // // // //         style={{
// // // // //           background:
// // // // //             "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
// // // // //         }}
// // // // //       />
// // // // //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

// // // // //       <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
// // // // //         {/* top status row */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: -12 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
// // // // //           className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
// // // // //         >
// // // // //           <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
// // // // //             <span className="relative flex size-2 shrink-0">
// // // // //               <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
// // // // //               <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
// // // // //             </span>
// // // // //             <span className="min-w-0 break-words">{profile.status}</span>
// // // // //           </span>
// // // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // // //           <span className="flex items-center gap-1.5">
// // // // //             <MapPin size={12} /> {profile.location}
// // // // //           </span>
// // // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // // //           <IstClock />
// // // // //         </motion.div>

// // // // //         <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
// // // // //           {/* left — the mark */}
// // // // //           <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
// // // // //             <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
// // // // //               {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
// // // // //               skeleton state, the empty view.
// // // // //             </p>

// // // // //             <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
// // // // //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
// // // // //                 <KineticWord word="VRAJ" className="text-paper-50" />
// // // // //               </span>
// // // // //               <span
// // // // //                 className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
// // // // //                 style={{ WebkitTextStroke: "1.4px rgba(243, 240, 232, 0.78)" }}
// // // // //               >
// // // // //                 <KineticWord word="PANDYA" className="text-transparent" />
// // // // //               </span>
// // // // //             </h1>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 20 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
// // // // //               className="mt-7 flex flex-wrap items-center gap-3"
// // // // //             >
// // // // //               <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
// // // // //                 React · TypeScript
// // // // //               </span>
// // // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // // //                 MongoDB · Firebase · MySQL
// // // // //               </span>
// // // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // // //                 B.Sc CS '26 · MCA Pursuing
// // // // //               </span>
// // // // //             </motion.div>

// // // // //             <motion.p
// // // // //               initial={{ opacity: 0 }}
// // // // //               animate={{ opacity: 1 }}
// // // // //               transition={{ duration: 1, delay: 1.1 }}
// // // // //               className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
// // // // //             >
// // // // //               {profile.blurb}
// // // // //             </motion.p>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 16 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
// // // // //               className="mt-8 flex flex-wrap items-center gap-3"
// // // // //             >
// // // // //               <Magnetic>
// // // // //                 <a
// // // // //                   href="#work"
// // // // //                   className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// // // // //                 >
// // // // //                   See the work
// // // // //                   <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
// // // // //                     <ArrowDown size={12} />
// // // // //                   </span>
// // // // //                 </a>
// // // // //               </Magnetic>
// // // // //               <a
// // // // //                 href={profile.github}
// // // // //                 target="_blank"
// // // // //                 rel="noreferrer"
// // // // //                 className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
// // // // //               >
// // // // //                 github/{profile.githubHandle}
// // // // //               </a>
// // // // //             </motion.div>
// // // // //           </motion.div>

// // // // //           {/* right — console */}
// // // // //           <motion.div
// // // // //             style={{ y: yCode }}
// // // // //             className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
// // // // //           >
// // // // //             <div className="relative">
// // // // //               <motion.div
// // // // //                 initial={{ opacity: 0, y: 40, rotate: -2 }}
// // // // //                 animate={{ opacity: 1, y: 0, rotate: 0 }}
// // // // //                 transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
// // // // //               >
// // // // //                 <CodeConsole />
// // // // //               </motion.div>

// // // // //               <motion.div
// // // // //                 initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
// // // // //                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
// // // // //                 transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
// // // // //                 className="absolute -right-28 top-1/2 z-20 hidden -translate-y-1/2 2xl:block"
// // // // //               >
// // // // //                 <RotatingSeal />
// // // // //               </motion.div>
// // // // //             </div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 24 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
// // // // //               className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
// // // // //             >
// // // // //               {[
// // // // //                 { k: "Focus", v: "Interface engineering" },
// // // // //                 { k: "Mode", v: "Ship → measure → polish" },
// // // // //               ].map((row) => (
// // // // //                 <div
// // // // //                   key={row.k}
// // // // //                   className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
// // // // //                 >
// // // // //                   <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
// // // // //                     {row.k}
// // // // //                   </p>
// // // // //                   <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
// // // // //                     {row.v}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //       </Spotlight>

// // // // //       {/* ticker */}
// // // // //       <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
// // // // //         <Marquee
// // // // //           items={marqueeItems}
// // // // //           duration={40}
// // // // //           className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
// // // // //         />
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // import { ArrowDown, MapPin, Terminal } from "lucide-react";
// // // // // import { useEffect, useMemo, useRef, useState } from "react";
// // // // // import { Magnetic, Marquee, Spotlight } from "@/components/ui";
// // // // // import { EASE, marqueeItems, profile } from "@/lib/data";
// // // // // import { VercelIcon } from "@/components/BrandIcons";
// // // // // import { cn } from "@/utils/cn";

// // // // // /* ------------------------------------------------------------------ clock */
// // // // // function IstClock() {
// // // // //   const [now, setNow] = useState("");
// // // // //   useEffect(() => {
// // // // //     const tick = () =>
// // // // //       setNow(
// // // // //         new Intl.DateTimeFormat("en-GB", {
// // // // //           timeZone: "Asia/Kolkata",
// // // // //           hour: "2-digit",
// // // // //           minute: "2-digit",
// // // // //           second: "2-digit",
// // // // //         }).format(new Date()),
// // // // //       );
// // // // //     tick();
// // // // //     const id = setInterval(tick, 1000);
// // // // //     return () => clearInterval(id);
// // // // //   }, []);
// // // // //   return <span className="tabular-nums">{now} IST</span>;
// // // // // }

// // // // // /* ------------------------------------------------------------------- code */
// // // // // type Token = { t: string; c?: string };

// // // // // const code: Token[][] = [
// // // // //   [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
// // // // //   [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // //   [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
// // // // //   [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // //   [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // // //   [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
// // // // //   [{ t: "};", c: "text-paper-300" }],
// // // // // ];

// // // // // function CodeConsole() {
// // // // //   const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
// // // // //   const [n, setN] = useState(0);

// // // // //   useEffect(() => {
// // // // //     const reduceMotion = window.matchMedia(
// // // // //       "(prefers-reduced-motion: reduce)",
// // // // //     ).matches;

// // // // //     if (reduceMotion) {
// // // // //       setN(total);
// // // // //       return;
// // // // //     }

// // // // //     let frameId = 0;
// // // // //     let restartId: number | undefined;
// // // // //     let cancelled = false;
// // // // //     const charsPerSecond = 88;
// // // // //     const restartDelay = 1800;

// // // // //     const startTyping = () => {
// // // // //       const startedAt = performance.now();
// // // // //       let lastPaintAt = 0;

// // // // //       const type = (now: number) => {
// // // // //         if (cancelled) return;
// // // // //         const next = Math.min(
// // // // //           total,
// // // // //           Math.floor(((now - startedAt) / 1000) * charsPerSecond),
// // // // //         );

// // // // //         if (now - lastPaintAt >= 32 || next === total) {
// // // // //           lastPaintAt = now;
// // // // //           setN((previous) => (previous === next ? previous : next));
// // // // //         }

// // // // //         if (next < total) {
// // // // //           frameId = requestAnimationFrame(type);
// // // // //         } else {
// // // // //           restartId = window.setTimeout(() => {
// // // // //             if (cancelled) return;
// // // // //             setN(0);
// // // // //             startTyping();
// // // // //           }, restartDelay);
// // // // //         }
// // // // //       };

// // // // //       frameId = requestAnimationFrame(type);
// // // // //     };

// // // // //     startTyping();
// // // // //     return () => {
// // // // //       cancelled = true;
// // // // //       cancelAnimationFrame(frameId);
// // // // //       if (restartId !== undefined) window.clearTimeout(restartId);
// // // // //     };
// // // // //   }, [total]);

// // // // //   let cursor = 0;
// // // // //   const rendered = code.map((line, i) => {
// // // // //     const start = cursor;
// // // // //     const lineLen = line.reduce((a, t) => a + t.t.length, 0);
// // // // //     cursor += lineLen;
// // // // //     const visible = Math.max(0, Math.min(n - start, lineLen));
// // // // //     let consumed = 0;
// // // // //     return (
// // // // //       <div key={i} className="min-h-[1.85em] whitespace-pre">
// // // // //         {line.map((tok, j) => {
// // // // //           const from = consumed;
// // // // //           consumed += tok.t.length;
// // // // //           const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
// // // // //           return (
// // // // //             <span key={j} className={tok.c}>
// // // // //               {slice}
// // // // //             </span>
// // // // //           );
// // // // //         })}
// // // // //         {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
// // // // //           <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   });

// // // // //   return (
// // // // //     <div
// // // // //       className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
// // // // //     >
// // // // //       <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
// // // // //         <span className="flex gap-1.5">
// // // // //           {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // // //             <span
// // // // //               key={c}
// // // // //               className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
// // // // //               style={{ background: c }}
// // // // //             />
// // // // //           ))}
// // // // //         </span>
// // // // //         <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
// // // // //         <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
// // // // //           <Terminal size={11} /> live
// // // // //         </span>
// // // // //       </div>
// // // // //       <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
// // // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
// // // // //         <div className="relative flex gap-4">
// // // // //           <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
// // // // //             {code.map((_, i) => (
// // // // //               <span key={i}>{String(i + 1).padStart(2, "0")}</span>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div className="min-w-0 flex-1">{rendered}</div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
// // // // //         <span>
// // // // //           <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
// // // // //         </span>
// // // // //         <span className="flex items-center gap-1.5 text-paper-300/70">
// // // // //           <VercelIcon className="size-2.5" /> ready on Vercel
// // // // //         </span>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function renderedIndexForCaret(n: number, lines: Token[][]) {
// // // // //   let acc = 0;
// // // // //   for (let i = 0; i < lines.length; i++) {
// // // // //     const len = lines[i].reduce((a, t) => a + t.t.length, 0);
// // // // //     if (n < acc + len) return i;
// // // // //     acc += len;
// // // // //   }
// // // // //   return -1;
// // // // // }

// // // // // /* ------------------------------------------------------------------ seal */
// // // // // function RotatingSeal() {
// // // // //   return (
// // // // //     <div className="relative grid size-[124px] place-items-center">
// // // // //       <svg
// // // // //         viewBox="0 0 120 120"
// // // // //         className="absolute inset-0 size-full"
// // // // //         style={{ animation: "spin-slow 22s linear infinite" }}
// // // // //       >
// // // // //         <defs>
// // // // //           <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
// // // // //         </defs>
// // // // //         <text className="fill-paper-200/70 font-mono text-[10.5px] uppercase tracking-[0.32em]">
// // // // //           <textPath href="#seal-path">
// // // // //             open to internships · freelance builds · ahmedabad ·
// // // // //           </textPath>
// // // // //         </text>
// // // // //       </svg>
// // // // //       <span className="grid size-11 place-items-center rounded-full bg-lime-acid">
// // // // //         <ArrowDown size={17} className="text-ink-900" />
// // // // //       </span>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* --------------------------------------------------------------- letters */
// // // // // function KineticWord({ word, className }: { word: string; className?: string }) {
// // // // //   return (
// // // // //     <span className={cn("inline-flex", className)}>
// // // // //       {word.split("").map((ch, i) => (
// // // // //         <motion.span
// // // // //           key={`${ch}-${i}`}
// // // // //           initial={{ y: "110%", opacity: 0 }}
// // // // //           animate={{ y: "0%", opacity: 1 }}
// // // // //           transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
// // // // //           whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
// // // // //           className="inline-block cursor-default transition-colors duration-300"
// // // // //         >
// // // // //           {ch}
// // // // //         </motion.span>
// // // // //       ))}
// // // // //     </span>
// // // // //   );
// // // // // }

// // // // // /* ------------------------------------------------------------------ hero */
// // // // // export default function Hero() {
// // // // //   const ref = useRef<HTMLElement>(null);
// // // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
// // // // //   const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
// // // // //   const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
// // // // //   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // // // //   return (
// // // // //     <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
// // // // //       {/* ambient layers */}
// // // // //       <div className="grid-lines-dark absolute inset-0" />
// // // // //       <div
// // // // //         className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
// // // // //         style={{
// // // // //           background:
// // // // //             "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
// // // // //         }}
// // // // //       />
// // // // //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

// // // // //       <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
// // // // //         {/* top status row */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: -12 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
// // // // //           className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
// // // // //         >
// // // // //           <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
// // // // //             <span className="relative flex size-2 shrink-0">
// // // // //               <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
// // // // //               <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
// // // // //             </span>
// // // // //             <span className="min-w-0 break-words">{profile.status}</span>
// // // // //           </span>
// // // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // // //           <span className="flex items-center gap-1.5">
// // // // //             <MapPin size={12} /> {profile.location}
// // // // //           </span>
// // // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // // //           <IstClock />
// // // // //         </motion.div>

// // // // //         <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
// // // // //           {/* left — the mark */}
// // // // //           <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
// // // // //             <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
// // // // //               {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
// // // // //               skeleton state, the empty view.
// // // // //             </p>

// // // // //             <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
// // // // //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
// // // // //                 <KineticWord word="VRAJ" className="text-paper-50" />
// // // // //               </span>
// // // // //               <span
// // // // //                 className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
// // // // //                 style={{ WebkitTextStroke: "1.4px rgba(243, 240, 232, 0.78)" }}
// // // // //               >
// // // // //                 <KineticWord word="PANDYA" className="text-transparent" />
// // // // //               </span>
// // // // //             </h1>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 20 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
// // // // //               className="mt-7 flex flex-wrap items-center gap-3"
// // // // //             >
// // // // //               <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
// // // // //                 React · TypeScript
// // // // //               </span>
// // // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // // //                 MongoDB · Firebase · MySQL
// // // // //               </span>
// // // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // // //                 B.Sc CS '26 · MCA Pursuing
// // // // //               </span>
// // // // //             </motion.div>

// // // // //             <motion.p
// // // // //               initial={{ opacity: 0 }}
// // // // //               animate={{ opacity: 1 }}
// // // // //               transition={{ duration: 1, delay: 1.1 }}
// // // // //               className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
// // // // //             >
// // // // //               {profile.blurb}
// // // // //             </motion.p>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 16 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
// // // // //               className="mt-8 flex flex-wrap items-center gap-3"
// // // // //             >
// // // // //               <Magnetic>
// // // // //                 <a
// // // // //                   href="#work"
// // // // //                   className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// // // // //                 >
// // // // //                   See the work
// // // // //                   <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
// // // // //                     <ArrowDown size={12} />
// // // // //                   </span>
// // // // //                 </a>
// // // // //               </Magnetic>
// // // // //               <a
// // // // //                 href={profile.github}
// // // // //                 target="_blank"
// // // // //                 rel="noreferrer"
// // // // //                 className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
// // // // //               >
// // // // //                 github/{profile.githubHandle}
// // // // //               </a>
// // // // //             </motion.div>
// // // // //           </motion.div>

// // // // //           {/* right — console */}
// // // // //           <motion.div
// // // // //             style={{ y: yCode }}
// // // // //             className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
// // // // //           >
// // // // //             <div className="relative">
// // // // //               <motion.div
// // // // //                 initial={{ opacity: 0, y: 40, rotate: -2 }}
// // // // //                 animate={{ opacity: 1, y: 0, rotate: 0 }}
// // // // //                 transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
// // // // //               >
// // // // //                 <CodeConsole />
// // // // //               </motion.div>

// // // // //               <motion.div
// // // // //                 initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
// // // // //                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
// // // // //                 transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
// // // // //                 className="absolute -right-28 top-1/2 z-20 hidden -translate-y-1/2 2xl:block"
// // // // //               >
// // // // //                 <RotatingSeal />
// // // // //               </motion.div>
// // // // //             </div>

// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, y: 24 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
// // // // //               className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
// // // // //             >
// // // // //               {[
// // // // //                 { k: "Focus", v: "Interface engineering" },
// // // // //                 { k: "Mode", v: "Ship → measure → polish" },
// // // // //               ].map((row) => (
// // // // //                 <div
// // // // //                   key={row.k}
// // // // //                   className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
// // // // //                 >
// // // // //                   <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
// // // // //                     {row.k}
// // // // //                   </p>
// // // // //                   <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
// // // // //                     {row.v}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //       </Spotlight>

// // // // //       {/* ticker */}
// // // // //       <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
// // // // //         <Marquee
// // // // //           items={marqueeItems}
// // // // //           duration={40}
// // // // //           className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
// // // // //         />
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // import { ArrowDown, MapPin, Terminal } from "lucide-react";
// // // // import { useEffect, useMemo, useRef, useState } from "react";
// // // // import { Magnetic, Marquee, Spotlight } from "@/components/ui";
// // // // import { EASE, marqueeItems, profile } from "@/lib/data";
// // // // import { VercelIcon } from "@/components/BrandIcons";
// // // // import { cn } from "@/utils/cn";

// // // // /* ------------------------------------------------------------------ clock */
// // // // function IstClock() {
// // // //   const [now, setNow] = useState("");
// // // //   useEffect(() => {
// // // //     const tick = () =>
// // // //       setNow(
// // // //         new Intl.DateTimeFormat("en-GB", {
// // // //           timeZone: "Asia/Kolkata",
// // // //           hour: "2-digit",
// // // //           minute: "2-digit",
// // // //           second: "2-digit",
// // // //         }).format(new Date()),
// // // //       );
// // // //     tick();
// // // //     const id = setInterval(tick, 1000);
// // // //     return () => clearInterval(id);
// // // //   }, []);
// // // //   return <span className="tabular-nums">{now} IST</span>;
// // // // }

// // // // /* ------------------------------------------------------------------- code */
// // // // type Token = { t: string; c?: string };

// // // // const code: Token[][] = [
// // // //   [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
// // // //   [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // //   [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
// // // //   [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // //   [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // // //   [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
// // // //   [{ t: "};", c: "text-paper-300" }],
// // // // ];

// // // // function CodeConsole() {
// // // //   const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
// // // //   const [n, setN] = useState(0);

// // // //   useEffect(() => {
// // // //     const reduceMotion = window.matchMedia(
// // // //       "(prefers-reduced-motion: reduce)",
// // // //     ).matches;

// // // //     if (reduceMotion) {
// // // //       setN(total);
// // // //       return;
// // // //     }

// // // //     let frameId = 0;
// // // //     let restartId: number | undefined;
// // // //     let cancelled = false;
// // // //     const charsPerSecond = 88;
// // // //     const restartDelay = 1800;

// // // //     const startTyping = () => {
// // // //       const startedAt = performance.now();
// // // //       let lastPaintAt = 0;

// // // //       const type = (now: number) => {
// // // //         if (cancelled) return;
// // // //         const next = Math.min(
// // // //           total,
// // // //           Math.floor(((now - startedAt) / 1000) * charsPerSecond),
// // // //         );

// // // //         if (now - lastPaintAt >= 32 || next === total) {
// // // //           lastPaintAt = now;
// // // //           setN((previous) => (previous === next ? previous : next));
// // // //         }

// // // //         if (next < total) {
// // // //           frameId = requestAnimationFrame(type);
// // // //         } else {
// // // //           restartId = window.setTimeout(() => {
// // // //             if (cancelled) return;
// // // //             setN(0);
// // // //             startTyping();
// // // //           }, restartDelay);
// // // //         }
// // // //       };

// // // //       frameId = requestAnimationFrame(type);
// // // //     };

// // // //     startTyping();
// // // //     return () => {
// // // //       cancelled = true;
// // // //       cancelAnimationFrame(frameId);
// // // //       if (restartId !== undefined) window.clearTimeout(restartId);
// // // //     };
// // // //   }, [total]);

// // // //   let cursor = 0;
// // // //   const rendered = code.map((line, i) => {
// // // //     const start = cursor;
// // // //     const lineLen = line.reduce((a, t) => a + t.t.length, 0);
// // // //     cursor += lineLen;
// // // //     const visible = Math.max(0, Math.min(n - start, lineLen));
// // // //     let consumed = 0;
// // // //     return (
// // // //       <div key={i} className="min-h-[1.85em] whitespace-pre">
// // // //         {line.map((tok, j) => {
// // // //           const from = consumed;
// // // //           consumed += tok.t.length;
// // // //           const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
// // // //           return (
// // // //             <span key={j} className={tok.c}>
// // // //               {slice}
// // // //             </span>
// // // //           );
// // // //         })}
// // // //         {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
// // // //           <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
// // // //         )}
// // // //       </div>
// // // //     );
// // // //   });

// // // //   return (
// // // //     <div
// // // //       className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
// // // //     >
// // // //       <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
// // // //         <span className="flex gap-1.5">
// // // //           {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // // //             <span
// // // //               key={c}
// // // //               className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
// // // //               style={{ background: c }}
// // // //             />
// // // //           ))}
// // // //         </span>
// // // //         <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
// // // //         <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
// // // //           <Terminal size={11} /> live
// // // //         </span>
// // // //       </div>
// // // //       <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
// // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
// // // //         <div className="relative flex gap-4">
// // // //           <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
// // // //             {code.map((_, i) => (
// // // //               <span key={i}>{String(i + 1).padStart(2, "0")}</span>
// // // //             ))}
// // // //           </div>
// // // //           <div className="min-w-0 flex-1">{rendered}</div>
// // // //         </div>
// // // //       </div>
// // // //       <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
// // // //         <span>
// // // //           <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
// // // //         </span>
// // // //         <span className="flex items-center gap-1.5 text-paper-300/70">
// // // //           <VercelIcon className="size-2.5" /> ready on Vercel
// // // //         </span>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function renderedIndexForCaret(n: number, lines: Token[][]) {
// // // //   let acc = 0;
// // // //   for (let i = 0; i < lines.length; i++) {
// // // //     const len = lines[i].reduce((a, t) => a + t.t.length, 0);
// // // //     if (n < acc + len) return i;
// // // //     acc += len;
// // // //   }
// // // //   return -1;
// // // // }

// // // // /* --------------------------------------------------------------- letters */
// // // // function KineticWord({ word, className }: { word: string; className?: string }) {
// // // //   return (
// // // //     <span className={cn("inline-flex", className)}>
// // // //       {word.split("").map((ch, i) => (
// // // //         <motion.span
// // // //           key={`${ch}-${i}`}
// // // //           initial={{ y: "110%", opacity: 0 }}
// // // //           animate={{ y: "0%", opacity: 1 }}
// // // //           transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
// // // //           whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
// // // //           className="inline-block cursor-default transition-colors duration-300"
// // // //         >
// // // //           {ch}
// // // //         </motion.span>
// // // //       ))}
// // // //     </span>
// // // //   );
// // // // }

// // // // /* ------------------------------------------------------------------ hero */
// // // // export default function Hero() {
// // // //   const ref = useRef<HTMLElement>(null);
// // // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
// // // //   const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
// // // //   const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
// // // //   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // // //   return (
// // // //     <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
// // // //       {/* ambient layers */}
// // // //       <div className="grid-lines-dark absolute inset-0" />
// // // //       <div
// // // //         className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
// // // //         style={{
// // // //           background:
// // // //             "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
// // // //         }}
// // // //       />
// // // //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

// // // //       <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
// // // //         {/* top status row */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: -12 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
// // // //           className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
// // // //         >
// // // //           <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
// // // //             <span className="relative flex size-2 shrink-0">
// // // //               <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
// // // //               <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
// // // //             </span>
// // // //             <span className="min-w-0 break-words">{profile.status}</span>
// // // //           </span>
// // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // //           <span className="flex items-center gap-1.5">
// // // //             <MapPin size={12} /> {profile.location}
// // // //           </span>
// // // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // // //           <IstClock />
// // // //         </motion.div>

// // // //         <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
// // // //           {/* left — the mark */}
// // // //           <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
// // // //             <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
// // // //               {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
// // // //               skeleton state, the empty view.
// // // //             </p>

// // // //             <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
// // // //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
// // // //                 <KineticWord word="VRAJ" className="text-paper-50" />
// // // //               </span>
// // // //               <span
// // // //                 className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
// // // //                 style={{ WebkitTextStroke: "1.4px rgba(243, 240, 232, 0.78)" }}
// // // //               >
// // // //                 <KineticWord word="PANDYA" className="text-transparent" />
// // // //               </span>
// // // //             </h1>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
// // // //               className="mt-7 flex flex-wrap items-center gap-3"
// // // //             >
// // // //               <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
// // // //                 React · TypeScript
// // // //               </span>
// // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // //                 MongoDB · Firebase · MySQL
// // // //               </span>
// // // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // // //                 B.Sc CS '26 · MCA Pursuing
// // // //               </span>
// // // //             </motion.div>

// // // //             <motion.p
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ duration: 1, delay: 1.1 }}
// // // //               className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
// // // //             >
// // // //               {profile.blurb}
// // // //             </motion.p>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 16 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
// // // //               className="mt-8 flex flex-wrap items-center gap-3"
// // // //             >
// // // //               <Magnetic>
// // // //                 <a
// // // //                   href="#work"
// // // //                   className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// // // //                 >
// // // //                   See the work
// // // //                   <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
// // // //                     <ArrowDown size={12} />
// // // //                   </span>
// // // //                 </a>
// // // //               </Magnetic>
// // // //               <a
// // // //                 href={profile.github}
// // // //                 target="_blank"
// // // //                 rel="noreferrer"
// // // //                 className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
// // // //               >
// // // //                 github/{profile.githubHandle}
// // // //               </a>
// // // //             </motion.div>
// // // //           </motion.div>

// // // //           {/* right — console */}
// // // //           <motion.div
// // // //             style={{ y: yCode }}
// // // //             className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
// // // //           >
// // // //             <div className="relative">
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 40, rotate: -2 }}
// // // //                 animate={{ opacity: 1, y: 0, rotate: 0 }}
// // // //                 transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
// // // //               >
// // // //                 <CodeConsole />
// // // //               </motion.div>

// // // //             </div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 24 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
// // // //               className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
// // // //             >
// // // //               {[
// // // //                 { k: "Focus", v: "Interface engineering" },
// // // //                 { k: "Mode", v: "Ship → measure → polish" },
// // // //               ].map((row) => (
// // // //                 <div
// // // //                   key={row.k}
// // // //                   className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
// // // //                 >
// // // //                   <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
// // // //                     {row.k}
// // // //                   </p>
// // // //                   <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
// // // //                     {row.v}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>

// // // //       </Spotlight>

// // // //       {/* ticker */}
// // // //       <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
// // // //         <Marquee
// // // //           items={marqueeItems}
// // // //           duration={40}
// // // //           className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
// // // //         />
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import { ArrowDown, MapPin, Terminal } from "lucide-react";
// // // import { useEffect, useMemo, useRef, useState } from "react";
// // // import { Magnetic, Marquee, Spotlight } from "@/components/ui";
// // // import { EASE, marqueeItems, profile } from "@/lib/data";
// // // import { VercelIcon } from "@/components/BrandIcons";
// // // import { cn } from "@/utils/cn";

// // // /* ------------------------------------------------------------------ clock */
// // // function IstClock() {
// // //   const [now, setNow] = useState("");
// // //   useEffect(() => {
// // //     const tick = () =>
// // //       setNow(
// // //         new Intl.DateTimeFormat("en-GB", {
// // //           timeZone: "Asia/Kolkata",
// // //           hour: "2-digit",
// // //           minute: "2-digit",
// // //           second: "2-digit",
// // //         }).format(new Date()),
// // //       );
// // //     tick();
// // //     const id = setInterval(tick, 1000);
// // //     return () => clearInterval(id);
// // //   }, []);
// // //   return <span className="tabular-nums">{now} IST</span>;
// // // }

// // // /* ------------------------------------------------------------------- code */
// // // type Token = { t: string; c?: string };

// // // const code: Token[][] = [
// // //   [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
// // //   [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // //   [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
// // //   [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // //   [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// // //   [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
// // //   [{ t: "};", c: "text-paper-300" }],
// // // ];

// // // function CodeConsole() {
// // //   const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
// // //   const [n, setN] = useState(0);

// // //   useEffect(() => {
// // //     const reduceMotion = window.matchMedia(
// // //       "(prefers-reduced-motion: reduce)",
// // //     ).matches;

// // //     if (reduceMotion) {
// // //       setN(total);
// // //       return;
// // //     }

// // //     let frameId = 0;
// // //     let restartId: number | undefined;
// // //     let cancelled = false;
// // //     const charsPerSecond = 88;
// // //     const restartDelay = 1800;

// // //     const startTyping = () => {
// // //       const startedAt = performance.now();
// // //       let lastPaintAt = 0;

// // //       const type = (now: number) => {
// // //         if (cancelled) return;
// // //         const next = Math.min(
// // //           total,
// // //           Math.floor(((now - startedAt) / 1000) * charsPerSecond),
// // //         );

// // //         if (now - lastPaintAt >= 32 || next === total) {
// // //           lastPaintAt = now;
// // //           setN((previous) => (previous === next ? previous : next));
// // //         }

// // //         if (next < total) {
// // //           frameId = requestAnimationFrame(type);
// // //         } else {
// // //           restartId = window.setTimeout(() => {
// // //             if (cancelled) return;
// // //             setN(0);
// // //             startTyping();
// // //           }, restartDelay);
// // //         }
// // //       };

// // //       frameId = requestAnimationFrame(type);
// // //     };

// // //     startTyping();
// // //     return () => {
// // //       cancelled = true;
// // //       cancelAnimationFrame(frameId);
// // //       if (restartId !== undefined) window.clearTimeout(restartId);
// // //     };
// // //   }, [total]);

// // //   let cursor = 0;
// // //   const rendered = code.map((line, i) => {
// // //     const start = cursor;
// // //     const lineLen = line.reduce((a, t) => a + t.t.length, 0);
// // //     cursor += lineLen;
// // //     const visible = Math.max(0, Math.min(n - start, lineLen));
// // //     let consumed = 0;
// // //     return (
// // //       <div key={i} className="min-h-[1.85em] whitespace-pre">
// // //         {line.map((tok, j) => {
// // //           const from = consumed;
// // //           consumed += tok.t.length;
// // //           const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
// // //           return (
// // //             <span key={j} className={tok.c}>
// // //               {slice}
// // //             </span>
// // //           );
// // //         })}
// // //         {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
// // //           <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
// // //         )}
// // //       </div>
// // //     );
// // //   });

// // //   return (
// // //     <div
// // //       className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
// // //     >
// // //       <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
// // //         <span className="flex gap-1.5">
// // //           {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// // //             <span
// // //               key={c}
// // //               className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
// // //               style={{ background: c }}
// // //             />
// // //           ))}
// // //         </span>
// // //         <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
// // //         <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
// // //           <Terminal size={11} /> live
// // //         </span>
// // //       </div>
// // //       <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
// // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
// // //         <div className="relative flex gap-4">
// // //           <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
// // //             {code.map((_, i) => (
// // //               <span key={i}>{String(i + 1).padStart(2, "0")}</span>
// // //             ))}
// // //           </div>
// // //           <div className="min-w-0 flex-1">{rendered}</div>
// // //         </div>
// // //       </div>
// // //       <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
// // //         <span>
// // //           <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
// // //         </span>
// // //         <span className="flex items-center gap-1.5 text-paper-300/70">
// // //           <VercelIcon className="size-2.5" /> ready on Vercel
// // //         </span>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function renderedIndexForCaret(n: number, lines: Token[][]) {
// // //   let acc = 0;
// // //   for (let i = 0; i < lines.length; i++) {
// // //     const len = lines[i].reduce((a, t) => a + t.t.length, 0);
// // //     if (n < acc + len) return i;
// // //     acc += len;
// // //   }
// // //   return -1;
// // // }

// // // /* --------------------------------------------------------------- letters */
// // // function KineticWord({ word, className }: { word: string; className?: string }) {
// // //   return (
// // //     <span className={cn("inline-flex", className)}>
// // //       {word.split("").map((ch, i) => (
// // //         <motion.span
// // //           key={`${ch}-${i}`}
// // //           initial={{ y: "110%", opacity: 0 }}
// // //           animate={{ y: "0%", opacity: 1 }}
// // //           transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
// // //           whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
// // //           className="inline-block cursor-default transition-colors duration-300"
// // //         >
// // //           {ch}
// // //         </motion.span>
// // //       ))}
// // //     </span>
// // //   );
// // // }

// // // /* ------------------------------------------------------------------ hero */
// // // export default function Hero() {
// // //   const ref = useRef<HTMLElement>(null);
// // //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
// // //   const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
// // //   const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
// // //   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // //   return (
// // //     <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
// // //       {/* ambient layers */}
// // //       <div className="grid-lines-dark absolute inset-0" />
// // //       <div
// // //         className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
// // //         style={{
// // //           background:
// // //             "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
// // //         }}
// // //       />
// // //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

// // //       <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
// // //         {/* top status row */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -12 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
// // //           className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
// // //         >
// // //           <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
// // //             <span className="relative flex size-2 shrink-0">
// // //               <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
// // //               <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
// // //             </span>
// // //             <span className="min-w-0 break-words">{profile.status}</span>
// // //           </span>
// // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // //           <span className="flex items-center gap-1.5">
// // //             <MapPin size={12} /> {profile.location}
// // //           </span>
// // //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// // //           <IstClock />
// // //         </motion.div>

// // //         <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
// // //           {/* left — the mark */}
// // //           <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
// // //             <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
// // //               {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
// // //               skeleton state, the empty view.
// // //             </p>

// // //             <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
// // //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
// // //                 <KineticWord word="VRAJ" className="text-paper-50" />
// // //               </span>
// // //               <span
// // //                 className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
// // //                 style={{ WebkitTextStroke: "1.4px rgba(243, 240, 232, 0.78)" }}
// // //               >
// // //                 <KineticWord word="PANDYA" className="text-transparent" />
// // //               </span>
// // //             </h1>

// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
// // //               className="mt-7 flex flex-wrap items-center gap-3"
// // //             >
// // //               <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
// // //                 React · TypeScript
// // //               </span>
// // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // //                 MongoDB · Firebase · MySQL
// // //               </span>
// // //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// // //                 B.Sc CS '26 · MCA Pursuing
// // //               </span>
// // //             </motion.div>

// // //             <motion.p
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ duration: 1, delay: 1.1 }}
// // //               className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
// // //             >
// // //               {profile.blurb}
// // //             </motion.p>

// // //             <motion.div
// // //               initial={{ opacity: 0, y: 16 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
// // //               className="mt-8 flex flex-wrap items-center gap-3"
// // //             >
// // //               <Magnetic>
// // //                 <a
// // //                   href="#work"
// // //                   className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// // //                 >
// // //                   See the work
// // //                   <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
// // //                     <ArrowDown size={12} />
// // //                   </span>
// // //                 </a>
// // //               </Magnetic>
// // //               <a
// // //                 href="/Vraj-Pandya-CV.pdf"
// // //                 download="Vraj-Pandya-CV.pdf"
// // //                 className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
// // //               >
// // //                 Download CV
// // //               </a>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* right — console */}
// // //           <motion.div
// // //             style={{ y: yCode }}
// // //             className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
// // //           >
// // //             <div className="relative">
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 40, rotate: -2 }}
// // //                 animate={{ opacity: 1, y: 0, rotate: 0 }}
// // //                 transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
// // //               >
// // //                 <CodeConsole />
// // //               </motion.div>

// // //             </div>

// // //             <motion.div
// // //               initial={{ opacity: 0, y: 24 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
// // //               className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
// // //             >
// // //               {[
// // //                 { k: "Focus", v: "Interface engineering" },
// // //                 { k: "Mode", v: "Ship → measure → polish" },
// // //               ].map((row) => (
// // //                 <div
// // //                   key={row.k}
// // //                   className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
// // //                 >
// // //                   <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
// // //                     {row.k}
// // //                   </p>
// // //                   <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
// // //                     {row.v}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>

// // //       </Spotlight>

// // //       {/* ticker */}
// // //       <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
// // //         <Marquee
// // //           items={marqueeItems}
// // //           duration={40}
// // //           className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
// // //         />
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { ArrowDown, MapPin, Terminal } from "lucide-react";
// // import { useEffect, useMemo, useRef, useState } from "react";
// // import { Magnetic, Marquee, Spotlight } from "@/components/ui";
// // import { EASE, marqueeItems, profile } from "@/lib/data";
// // import { VercelIcon } from "@/components/BrandIcons";
// // import { cn } from "@/utils/cn";

// // /* ------------------------------------------------------------------ clock */
// // function IstClock() {
// //   const [now, setNow] = useState("");
// //   useEffect(() => {
// //     const tick = () =>
// //       setNow(
// //         new Intl.DateTimeFormat("en-GB", {
// //           timeZone: "Asia/Kolkata",
// //           hour: "2-digit",
// //           minute: "2-digit",
// //           second: "2-digit",
// //         }).format(new Date()),
// //       );
// //     tick();
// //     const id = setInterval(tick, 1000);
// //     return () => clearInterval(id);
// //   }, []);
// //   return <span className="tabular-nums">{now} IST</span>;
// // }

// // /* ------------------------------------------------------------------- code */
// // type Token = { t: string; c?: string };

// // const code: Token[][] = [
// //   [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
// //   [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// //   [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
// //   [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// //   [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
// //   [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
// //   [{ t: "};", c: "text-paper-300" }],
// // ];

// // function CodeConsole() {
// //   const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
// //   const [n, setN] = useState(0);

// //   useEffect(() => {
// //     const reduceMotion = window.matchMedia(
// //       "(prefers-reduced-motion: reduce)",
// //     ).matches;

// //     if (reduceMotion) {
// //       setN(total);
// //       return;
// //     }

// //     let frameId = 0;
// //     let restartId: number | undefined;
// //     let cancelled = false;
// //     const charsPerSecond = 88;
// //     const restartDelay = 1800;

// //     const startTyping = () => {
// //       const startedAt = performance.now();
// //       let lastPaintAt = 0;

// //       const type = (now: number) => {
// //         if (cancelled) return;
// //         const next = Math.min(
// //           total,
// //           Math.floor(((now - startedAt) / 1000) * charsPerSecond),
// //         );

// //         if (now - lastPaintAt >= 32 || next === total) {
// //           lastPaintAt = now;
// //           setN((previous) => (previous === next ? previous : next));
// //         }

// //         if (next < total) {
// //           frameId = requestAnimationFrame(type);
// //         } else {
// //           restartId = window.setTimeout(() => {
// //             if (cancelled) return;
// //             setN(0);
// //             startTyping();
// //           }, restartDelay);
// //         }
// //       };

// //       frameId = requestAnimationFrame(type);
// //     };

// //     startTyping();
// //     return () => {
// //       cancelled = true;
// //       cancelAnimationFrame(frameId);
// //       if (restartId !== undefined) window.clearTimeout(restartId);
// //     };
// //   }, [total]);

// //   let cursor = 0;
// //   const rendered = code.map((line, i) => {
// //     const start = cursor;
// //     const lineLen = line.reduce((a, t) => a + t.t.length, 0);
// //     cursor += lineLen;
// //     const visible = Math.max(0, Math.min(n - start, lineLen));
// //     let consumed = 0;
// //     return (
// //       <div key={i} className="min-h-[1.85em] whitespace-pre">
// //         {line.map((tok, j) => {
// //           const from = consumed;
// //           consumed += tok.t.length;
// //           const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
// //           return (
// //             <span key={j} className={tok.c}>
// //               {slice}
// //             </span>
// //           );
// //         })}
// //         {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
// //           <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
// //         )}
// //       </div>
// //     );
// //   });

// //   return (
// //     <div
// //       className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
// //     >
// //       <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
// //         <span className="flex gap-1.5">
// //           {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
// //             <span
// //               key={c}
// //               className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
// //               style={{ background: c }}
// //             />
// //           ))}
// //         </span>
// //         <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
// //         <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
// //           <Terminal size={11} /> live
// //         </span>
// //       </div>
// //       <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
// //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
// //         <div className="relative flex gap-4">
// //           <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
// //             {code.map((_, i) => (
// //               <span key={i}>{String(i + 1).padStart(2, "0")}</span>
// //             ))}
// //           </div>
// //           <div className="min-w-0 flex-1">{rendered}</div>
// //         </div>
// //       </div>
// //       <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
// //         <span>
// //           <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
// //         </span>
// //         <span className="flex items-center gap-1.5 text-paper-300/70">
// //           <VercelIcon className="size-2.5" /> ready on Vercel
// //         </span>
// //       </div>
// //     </div>
// //   );
// // }

// // function renderedIndexForCaret(n: number, lines: Token[][]) {
// //   let acc = 0;
// //   for (let i = 0; i < lines.length; i++) {
// //     const len = lines[i].reduce((a, t) => a + t.t.length, 0);
// //     if (n < acc + len) return i;
// //     acc += len;
// //   }
// //   return -1;
// // }

// // /* --------------------------------------------------------------- letters */
// // function KineticWord({ word, className }: { word: string; className?: string }) {
// //   return (
// //     <span className={cn("inline-flex", className)}>
// //       {word.split("").map((ch, i) => (
// //         <motion.span
// //           key={`${ch}-${i}`}
// //           initial={{ y: "110%", opacity: 0 }}
// //           animate={{ y: "0%", opacity: 1 }}
// //           transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
// //           whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
// //           className="inline-block cursor-default transition-colors duration-300"
// //         >
// //           {ch}
// //         </motion.span>
// //       ))}
// //     </span>
// //   );
// // }

// // /* ------------------------------------------------------------------ hero */
// // export default function Hero() {
// //   const ref = useRef<HTMLElement>(null);
// //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
// //   const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
// //   const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
// //   const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// //   return (
// //     <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
// //       {/* ambient layers */}
// //       <div className="grid-lines-dark absolute inset-0" />
// //       <div
// //         className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
// //         style={{
// //           background:
// //             "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
// //         }}
// //       />
// //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

// //       <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
// //         {/* top status row */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -12 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
// //           className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
// //         >
// //           <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
// //             <span className="relative flex size-2 shrink-0">
// //               <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
// //               <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
// //             </span>
// //             <span className="min-w-0 break-words">{profile.status}</span>
// //           </span>
// //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// //           <span className="flex items-center gap-1.5">
// //             <MapPin size={12} /> {profile.location}
// //           </span>
// //           <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
// //           <IstClock />
// //         </motion.div>

// //         <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
// //           {/* left — the mark */}
// //           <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
// //             <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
// //               {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
// //               skeleton state, the empty view.
// //             </p>

// //             <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
// //               <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
// //                 <KineticWord word="VRAJ" className="text-paper-50" />
// //               </span>
// //               <span
// //                 className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
// //                 style={{ WebkitTextStroke: "1.4px rgba(243, 240, 232, 0.78)" }}
// //               >
// //                 <KineticWord word="PANDYA" className="text-transparent" />
// //               </span>
// //             </h1>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
// //               className="mt-7 flex flex-wrap items-center gap-3"
// //             >
// //               <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
// //                 React · TypeScript
// //               </span>
// //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// //                 MongoDB · Firebase · MySQL
// //               </span>
// //               <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
// //                 B.Sc CS '26 · MCA Pursuing
// //               </span>
// //             </motion.div>

// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 1, delay: 1.1 }}
// //               className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
// //             >
// //               {profile.blurb}
// //             </motion.p>

// //             <motion.div
// //               initial={{ opacity: 0, y: 16 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
// //               className="mt-8 flex flex-wrap items-center gap-3"
// //             >
// //               <Magnetic>
// //                 <a
// //                   href="#work"
// //                   className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// //                 >
// //                   See the work
// //                   <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
// //                     <ArrowDown size={12} />
// //                   </span>
// //                 </a>
// //               </Magnetic>
// //               <a
// //                 href="/projects/Vraj-Pandya-CV.pdf"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
// //               >
// //                 Download CV
// //               </a>
// //             </motion.div>
// //           </motion.div>

// //           {/* right — console */}
// //           <motion.div
// //             style={{ y: yCode }}
// //             className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
// //           >
// //             <div className="relative">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 40, rotate: -2 }}
// //                 animate={{ opacity: 1, y: 0, rotate: 0 }}
// //                 transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
// //               >
// //                 <CodeConsole />
// //               </motion.div>

// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 24 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
// //               className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
// //             >
// //               {[
// //                 { k: "Focus", v: "Interface engineering" },
// //                 { k: "Mode", v: "Ship → measure → polish" },
// //               ].map((row) => (
// //                 <div
// //                   key={row.k}
// //                   className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
// //                 >
// //                   <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
// //                     {row.k}
// //                   </p>
// //                   <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
// //                     {row.v}
// //                   </p>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //       </Spotlight>

// //       {/* ticker */}
// //       <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
// //         <Marquee
// //           items={marqueeItems}
// //           duration={40}
// //           className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
// //         />
// //       </div>
// //     </section>
// //   );
// // }
//   import { motion, useScroll, useTransform } from "framer-motion";
//   import { ArrowDown, MapPin, Terminal } from "lucide-react";
//   import { useEffect, useMemo, useRef, useState } from "react";
//   import { Magnetic, Marquee, Spotlight } from "@/components/ui";
//   import { EASE, marqueeItems, profile } from "@/lib/data";
//   import { VercelIcon } from "@/components/BrandIcons";
//   import { cn } from "@/utils/cn";

//   /* ------------------------------------------------------------------ clock */
//   function IstClock() {
//     const [now, setNow] = useState("");
//     useEffect(() => {
//       const tick = () =>
//         setNow(
//           new Intl.DateTimeFormat("en-GB", {
//             timeZone: "Asia/Kolkata",
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//           }).format(new Date()),
//         );
//       tick();
//       const id = setInterval(tick, 1000);
//       return () => clearInterval(id);
//     }, []);
//     return <span className="tabular-nums">{now} IST</span>;
//   }

//   /* ------------------------------------------------------------------- code */
//   type Token = { t: string; c?: string };

//   const code: Token[][] = [
//     [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
//     [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
//     [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
//     [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
//     [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
//     [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
//     [{ t: "};", c: "text-paper-300" }],
//   ];

//   function CodeConsole() {
//     const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
//     const [n, setN] = useState(0);

//     useEffect(() => {
//       const reduceMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)",
//       ).matches;

//       if (reduceMotion) {
//         setN(total);
//         return;
//       }

//       let frameId = 0;
//       let restartId: number | undefined;
//       let cancelled = false;
//       const charsPerSecond = 88;
//       const restartDelay = 1800;

//       const startTyping = () => {
//         const startedAt = performance.now();
//         let lastPaintAt = 0;

//         const type = (now: number) => {
//           if (cancelled) return;
//           const next = Math.min(
//             total,
//             Math.floor(((now - startedAt) / 1000) * charsPerSecond),
//           );

//           if (now - lastPaintAt >= 32 || next === total) {
//             lastPaintAt = now;
//             setN((previous) => (previous === next ? previous : next));
//           }

//           if (next < total) {
//             frameId = requestAnimationFrame(type);
//           } else {
//             restartId = window.setTimeout(() => {
//               if (cancelled) return;
//               setN(0);
//               startTyping();
//             }, restartDelay);
//           }
//         };

//         frameId = requestAnimationFrame(type);
//       };

//       startTyping();
//       return () => {
//         cancelled = true;
//         cancelAnimationFrame(frameId);
//         if (restartId !== undefined) window.clearTimeout(restartId);
//       };
//     }, [total]);

//     let cursor = 0;
//     const rendered = code.map((line, i) => {
//       const start = cursor;
//       const lineLen = line.reduce((a, t) => a + t.t.length, 0);
//       cursor += lineLen;
//       const visible = Math.max(0, Math.min(n - start, lineLen));
//       let consumed = 0;
//       return (
//         <div key={i} className="min-h-[1.85em] whitespace-pre">
//           {line.map((tok, j) => {
//             const from = consumed;
//             consumed += tok.t.length;
//             const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
//             return (
//               <span key={j} className={tok.c}>
//                 {slice}
//               </span>
//             );
//           })}
//           {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
//             <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
//           )}
//         </div>
//       );
//     });

//     return (
//       <div
//         className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
//       >
//         <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
//           <span className="flex gap-1.5">
//             {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
//               <span
//                 key={c}
//                 className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
//                 style={{ background: c }}
//               />
//             ))}
//           </span>
//           <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
//           <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
//             <Terminal size={11} /> live
//           </span>
//         </div>
//         <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
//           <div className="relative flex gap-4">
//             <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
//               {code.map((_, i) => (
//                 <span key={i}>{String(i + 1).padStart(2, "0")}</span>
//               ))}
//             </div>
//             <div className="min-w-0 flex-1">{rendered}</div>
//           </div>
//         </div>
//         <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
//           <span>
//             <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
//           </span>
//           <span className="flex items-center gap-1.5 text-paper-300/70">
//             <VercelIcon className="size-2.5" /> ready on Vercel
//           </span>
//         </div>
//       </div>
//     );
//   }

//   function renderedIndexForCaret(n: number, lines: Token[][]) {
//     let acc = 0;
//     for (let i = 0; i < lines.length; i++) {
//       const len = lines[i].reduce((a, t) => a + t.t.length, 0);
//       if (n < acc + len) return i;
//       acc += len;
//     }
//     return -1;
//   }

//   /* --------------------------------------------------------------- letters */
//   function KineticWord({ word, className }: { word: string; className?: string }) {
//     return (
//       <span className={cn("inline-flex", className)}>
//         {word.split("").map((ch, i) => (
//           <motion.span
//             key={`${ch}-${i}`}
//             initial={{ y: "110%", opacity: 0 }}
//             animate={{ y: "0%", opacity: 1 }}
//             transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
//             whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
//             className="inline-block cursor-default transition-colors duration-300"
//           >
//             {ch}
//           </motion.span>
//         ))}
//       </span>
//     );
//   }

//   /* ------------------------------------------------------------------ hero */
//   export default function Hero() {
//     const ref = useRef<HTMLElement>(null);
//     const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
//     const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
//     const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
//     const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//     return (
//       <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
//         {/* ambient layers */}
//         <div className="grid-lines-dark absolute inset-0" />
//         <div
//           className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
//           style={{
//             background:
//               "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
//           }}
//         />
//         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

//         <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
//           {/* top status row */}
//           <motion.div
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
//             className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
//           >
//             <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
//               <span className="relative flex size-2 shrink-0">
//                 <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
//                 <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
//               </span>
//               <span className="min-w-0 break-words">{profile.status}</span>
//             </span>
//             <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
//             <span className="flex items-center gap-1.5">
//               <MapPin size={12} /> {profile.location}
//             </span>
//             <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
//             <IstClock />
//           </motion.div>

//           <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
//             {/* left — the mark */}
//             <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
//               {/* <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
//                 {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
//                 skeleton state, the empty view.
//               </p> */}

//               <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
//                 <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
//                   <KineticWord word="VRAJ" className="text-paper-50" />
//                 </span>
//                 <span
//                   className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
//                   style={{ WebkitTextStroke: "1.4px rgba(243, 240, 232, 0.78)" }}
//                 >
//                   <KineticWord word="PANDYA" className="text-transparent" />
//                 </span>
//               </h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
//                 className="mt-7 flex flex-wrap items-center gap-3"
//               >
//                 {/* <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
//                   React · TypeScript
//                 </span>
//                 <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
//                   MongoDB · Firebase · MySQL
//                 </span> */}
//                 <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
//                   B.Sc CS '26 · MCA Pursuing
//                 </span>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 1.1 }}
//                 className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
//               >
//                 {profile.blurb}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
//                 className="mt-8 flex flex-wrap items-center gap-3"
//               >
//                 <Magnetic>
//                   <a
//                     href="#work"
//                     className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
//                   >
//                     See the work
//                     <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
//                       <ArrowDown size={12} />
//                     </span>
//                   </a>
//                 </Magnetic>
//                 <a
//                   href="https://drive.google.com/file/d/1x3WZWjbemEfamzaPpUKY60lV7df86lHU/view?usp=drive_link"
//                   download="Vraj-Pandya-CV.pdf"
//                   className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
//                 >
//                   Download CV
//                 </a>
//               </motion.div>
//             </motion.div>

//             {/* right — console */}
//             <motion.div
//               style={{ y: yCode }}
//               className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
//             >
//               <div className="relative">
//                 <motion.div
//                   initial={{ opacity: 0, y: 40, rotate: -2 }}
//                   animate={{ opacity: 1, y: 0, rotate: 0 }}
//                   transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
//                 >
//                   <CodeConsole />
//                 </motion.div>

//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
//                 className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
//               >
//                 {[
//                   // { k: "Focus", v: "Interface engineering" },
//                   // { k: "Mode", v: "Ship → measure → polish" },
//                 ].map((row) => (
//                   <div
//                     key={row.k}
//                     className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
//                   >
//                     <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
//                       {row.k}
//                     </p>
//                     <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
//                       {row.v}
//                     </p>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//         </Spotlight>

//         {/* ticker */}
//         <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
//           <Marquee
//             items={marqueeItems}
//             duration={40}
//             className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
//           />
//         </div>
//       </section>
//     );
//   }
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Terminal } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Magnetic, Marquee, Spotlight } from "@/components/ui";
import { EASE, marqueeItems, profile } from "@/lib/data";
import { VercelIcon } from "@/components/BrandIcons";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ clock */
function IstClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{now} IST</span>;
}

/* ------------------------------------------------------------------- code */
type Token = { t: string; c?: string };

const code: Token[][] = [
  [{ t: "const", c: "text-cobalt-300" }, { t: " vraj ", c: "text-paper-50" }, { t: "= {", c: "text-paper-300" }],
  [{ t: "  role:", c: "text-teal-glow" }, { t: " \"Full-Stack Developer\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
  [{ t: "  stack:", c: "text-teal-glow" }, { t: " [", c: "text-paper-300" }, { t: "\"react\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"ts\"", c: "text-lime-acid" }, { t: ", ", c: "text-paper-300" }, { t: "\"mongo\"", c: "text-lime-acid" }, { t: "],", c: "text-paper-300" }],
  [{ t: "  based:", c: "text-teal-glow" }, { t: " \"Ahmedabad, IN\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
  [{ t: "  degree:", c: "text-teal-glow" }, { t: " \"B.Sc CS '26 · MCA Pursuing\"", c: "text-lime-acid" }, { t: ",", c: "text-paper-300" }],
  [{ t: "  builds:", c: "text-teal-glow" }, { t: " UIs ", c: "text-paper-50" }, { t: "that", c: "text-cobalt-300" }, { t: " ship ", c: "text-paper-50" }, { t: "→", c: "text-flare" }, { t: " 🚀", c: "" }],
  [{ t: "};", c: "text-paper-300" }],
];

function CodeConsole() {
  const total = useMemo(() => code.reduce((s, l) => s + l.reduce((a, t) => a + t.t.length, 0), 0), []);
  const [n, setN] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setN(total);
      return;
    }

    let frameId = 0;
    let restartId: number | undefined;
    let cancelled = false;
    const charsPerSecond = 88;
    const restartDelay = 1800;

    const startTyping = () => {
      const startedAt = performance.now();
      let lastPaintAt = 0;

      const type = (now: number) => {
        if (cancelled) return;
        const next = Math.min(
          total,
          Math.floor(((now - startedAt) / 1000) * charsPerSecond),
        );

        if (now - lastPaintAt >= 32 || next === total) {
          lastPaintAt = now;
          setN((previous) => (previous === next ? previous : next));
        }

        if (next < total) {
          frameId = requestAnimationFrame(type);
        } else {
          restartId = window.setTimeout(() => {
            if (cancelled) return;
            setN(0);
            startTyping();
          }, restartDelay);
        }
      };

      frameId = requestAnimationFrame(type);
    };

    startTyping();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      if (restartId !== undefined) window.clearTimeout(restartId);
    };
  }, [total]);

  let cursor = 0;
  const rendered = code.map((line, i) => {
    const start = cursor;
    const lineLen = line.reduce((a, t) => a + t.t.length, 0);
    cursor += lineLen;
    const visible = Math.max(0, Math.min(n - start, lineLen));
    let consumed = 0;
    return (
      <div key={i} className="min-h-[1.85em] whitespace-pre">
        {line.map((tok, j) => {
          const from = consumed;
          consumed += tok.t.length;
          const slice = tok.t.slice(0, Math.max(0, Math.min(visible - from, tok.t.length)));
          return (
            <span key={j} className={tok.c}>
              {slice}
            </span>
          );
        })}
        {visible > 0 && visible < lineLen && i === renderedIndexForCaret(n, code) && (
          <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-lime-acid align-middle animate-panic" />
        )}
      </div>
    );
  });

  return (
    <div
      className="code-console group relative w-full max-w-full overflow-hidden rounded-[20px] border border-paper-300/12 bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
    >
      <div className="flex items-center gap-3 border-b border-paper-300/10 bg-ink-800/80 px-4 py-2.5">
        <span className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span
              key={c}
              className="size-2.5 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
              style={{ background: c }}
            />
          ))}
        </span>
        <span className="ml-1 font-mono text-[11px] text-paper-300/70">vraj.config.ts</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-acid/90">
          <Terminal size={11} /> live
        </span>
      </div>
      <div className="relative px-4 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-5 sm:text-[13px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(43,57,246,0.18),transparent_60%)]" />
        <div className="relative flex gap-4">
          <div className="hidden select-none flex-col gap-[0.28rem] border-r border-paper-300/10 pr-3 text-right text-[11px] text-paper-300/25 sm:flex">
            {code.map((_, i) => (
              <span key={i}>{String(i + 1).padStart(2, "0")}</span>
            ))}
          </div>
          <div className="min-w-0 flex-1">{rendered}</div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-paper-300/10 bg-ink-950/60 px-4 py-2 font-mono text-[10px] text-paper-300/55">
        <span>
          <span className="text-teal-glow">0</span> errors · <span className="text-lime-acid">0</span> warnings
        </span>
        <span className="flex items-center gap-1.5 text-paper-300/70">
          <VercelIcon className="size-2.5" /> ready on Vercel
        </span>
      </div>
    </div>
  );
}

function renderedIndexForCaret(n: number, lines: Token[][]) {
  let acc = 0;
  for (let i = 0; i < lines.length; i++) {
    const len = lines[i].reduce((a, t) => a + t.t.length, 0);
    if (n < acc + len) return i;
    acc += len;
  }
  return -1;
}

/* --------------------------------------------------------------- letters */
function KineticWord({ word, className }: { word: string; className?: string }) {
  return (
    <span className={cn("inline-flex", className)}>
      {word.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 + i * 0.055, ease: EASE }}
          whileHover={{ y: -8, rotate: i % 2 ? 3 : -3, color: "#cdf564" }}
          className="inline-block cursor-default transition-colors duration-300"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ hero */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCode = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-ink-950 text-paper-100">
      {/* ambient layers */}
      <div className="grid-lines-dark absolute inset-0" />
      <div
        className="absolute -top-[28%] left-[52%] size-[720px] rounded-full opacity-[0.16] blur-[90px]"
        style={{
          background:
            "conic-gradient(from 140deg, #2b39f6, #37e0c4, #cdf564, #ff6a3d, #2b39f6)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <Spotlight className="relative z-10 mx-auto w-full min-w-0 max-w-[1600px] overflow-x-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10">
        {/* top status row */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/60 sm:mb-12"
        >
          <span className="flex min-w-0 max-w-full items-center gap-2 text-paper-100">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-acid opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-lime-acid" />
            </span>
            <span className="min-w-0 break-words">{profile.status}</span>
          </span>
          <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
          <span className="flex items-center gap-1.5">
            <MapPin size={12} /> {profile.location}
          </span>
          <span className="hidden h-3 w-px bg-paper-300/25 sm:block" />
          <IstClock />
        </motion.div>

        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
          {/* left — the mark */}
          <motion.div style={{ y: yText, opacity: fade }} className="min-w-0">
            {/* <p className="mb-4 max-w-[34ch] font-mono text-[12px] leading-relaxed text-paper-300/70 sm:mb-6">
              {">"} Hello, I'm a developer who cares about the last 5% — the focus ring, the
              skeleton state, the empty view.
            </p> */}

            <h1 className="max-w-full overflow-hidden font-display leading-[0.84] tracking-[-0.05em]">
              <span className="-mt-[0.2em] block overflow-hidden pt-[0.2em] pb-[0.05em] text-[17vw] sm:text-[14vw] lg:text-[8.6vw]">
                <KineticWord word="VRAJ" className="text-paper-50" />
              </span>
              <span
                className="-mt-[0.28em] block overflow-hidden pt-[0.2em] pb-[0.08em] text-[15.5vw] text-stroke-paper sm:text-[12.6vw] lg:text-[7.9vw]"
                style={{ WebkitTextStroke: "1.6px rgba(243, 240, 232, 0.78)" }}
              >
                <KineticWord word="PANDYA" className="text-transparent" />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              {/* <span className="rounded-full bg-lime-acid px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-900">
                React · TypeScript
              </span>
              <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
                MongoDB · Firebase · MySQL
              </span> */}
              <span className="rounded-full border border-paper-300/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-200">
                B.Sc CS '26 · MCA Pursuing
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper-200/75 sm:text-[17px]"
            >
              {profile.blurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
                >
                  See the work
                  <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:translate-y-0.5">
                    <ArrowDown size={12} />
                  </span>
                </a>
              </Magnetic>
              <a
                href="https://drive.google.com/file/d/1x3WZWjbemEfamzaPpUKY60lV7df86lHU/view?usp=drive_link"
                download="Vraj-Pandya-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-100 transition-colors hover:border-paper-100 hover:bg-paper-100/5"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* right — console */}
          <motion.div
            style={{ y: yCode }}
            className="relative w-full min-w-0 lg:max-w-[640px] lg:justify-self-end"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
              >
                <CodeConsole />
              </motion.div>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
              className="mt-6 grid grid-cols-2 gap-3 lg:mt-10"
            >
              {[
                // { k: "Focus", v: "Interface engineering" },
                // { k: "Mode", v: "Ship → measure → polish" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="rounded-2xl border border-paper-300/12 bg-ink-900/60 px-4 py-3 transition-colors hover:border-lime-acid/40"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/50">
                    {row.k}
                  </p>
                  <p className="mt-1 font-display text-[15px] font-semibold text-paper-50">
                    {row.v}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </Spotlight>

      {/* ticker */}
      <div className="relative z-10 border-y border-paper-300/12 bg-lime-acid py-2.5 text-ink-900">
        <Marquee
          items={marqueeItems}
          duration={40}
          className="font-mono text-[12px] font-medium uppercase tracking-[0.18em]"
        />
      </div>
    </section>
  );
}
