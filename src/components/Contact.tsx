// // // // // // import { AnimatePresence, motion } from "framer-motion";
// // // // // // import { ArrowUpRight, Check, Copy, Send, Sparkles } from "lucide-react";
// // // // // // import { useState, type FormEvent } from "react";
// // // // // // import { GithubIcon, LinkedinIcon, VercelIcon } from "@/components/BrandIcons";
// // // // // // import { EASE, profile } from "@/lib/data";
// // // // // // import { Magnetic, Reveal, SectionLabel } from "@/components/ui";
// // // // // // import { cn } from "@/utils/cn";

// // // // // // const intents = ["Frontend build", "Full-stack app", "Landing page", "Dashboard / BI", "Internship"];

// // // // // // type Errors = Partial<Record<"name" | "email" | "message", string>>;

// // // // // // export default function Contact() {
// // // // // //   const [form, setForm] = useState({ name: "", email: "", message: "", intent: "Frontend build" });
// // // // // //   const [errors, setErrors] = useState<Errors>({});
// // // // // //   const [sent, setSent] = useState(false);
// // // // // //   const [copied, setCopied] = useState(false);

// // // // // //   const validate = () => {
// // // // // //     const e: Errors = {};
// // // // // //     if (form.name.trim().length < 2) e.name = "Tell me who you are";
// // // // // //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
// // // // // //     if (form.message.trim().length < 12) e.message = "A little more detail helps";
// // // // // //     return e;
// // // // // //   };

// // // // // //   const onSubmit = (ev: FormEvent) => {
// // // // // //     ev.preventDefault();
// // // // // //     const e = validate();
// // // // // //     setErrors(e);
// // // // // //     if (Object.keys(e).length === 0) setSent(true);
// // // // // //   };

// // // // // //   const summary = `Project: ${form.intent}
// // // // // // From: ${form.name} <${form.email}>

// // // // // // ${form.message}`;

// // // // // //   const copy = async () => {
// // // // // //     try {
// // // // // //       await navigator.clipboard.writeText(summary);
// // // // // //       setCopied(true);
// // // // // //       setTimeout(() => setCopied(false), 2200);
// // // // // //     } catch {
// // // // // //       setCopied(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const field =
// // // // // //     "peer w-full border-0 border-b border-paper-300/20 bg-transparent px-0 py-3 font-sans text-[15px] text-paper-50 outline-none transition-colors placeholder:text-paper-300/35 focus:border-lime-acid";

// // // // // //   return (
// // // // // //     <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
// // // // // //       <div className="grid-lines-dark absolute inset-0 opacity-80" />
// // // // // //       <div
// // // // // //         className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
// // // // // //         style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
// // // // // //       />

// // // // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // // //         <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
// // // // // //           {/* pitch */}
// // // // // //           <div>
// // // // // //             <SectionLabel index="05" label="Contact" dark />
// // // // // //             <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
// // // // // //               <span className="block">Have an idea</span>
// // // // // //               <span className="block text-stroke-paper">worth building?</span>
// // // // // //             </h2>

// // // // // //             <Reveal delay={0.1}>
// // // // // //               <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
// // // // // //                 Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
// // // // // //                 a timeline and an honest yes or no.
// // // // // //               </p>
// // // // // //             </Reveal>

// // // // // //             <div className="mt-9 space-y-2.5">
// // // // // //               {[
// // // // // //                 {
// // // // // //                   label: "GitHub",
// // // // // //                   value: `/${profile.githubHandle}`,
// // // // // //                   href: profile.github,
// // // // // //                   Icon: GithubIcon,
// // // // // //                   note: "code, repos, READMEs",
// // // // // //                 },
// // // // // //                 {
// // // // // //                   label: "LinkedIn",
// // // // // //                   value: `/${profile.linkedinHandle}`,
// // // // // //                   href: profile.linkedin,
// // // // // //                   Icon: LinkedinIcon,
// // // // // //                   note: "roles, referrals, DMs",
// // // // // //                 },
// // // // // //                 {
// // // // // //                   label: "Live builds",
// // // // // //                   value: "3 deployed products",
// // // // // //                   href: "https://vishal-trading-company.shop/",
// // // // // //                   Icon: VercelIcon,
// // // // // //                   note: "open them, they're real",
// // // // // //                 },
// // // // // //               ].map((c) => (
// // // // // //                 <a
// // // // // //                   key={c.label}
// // // // // //                   href={c.href}
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
// // // // // //                 >
// // // // // //                   <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
// // // // // //                     <c.Icon className="size-4" />
// // // // // //                   </span>
// // // // // //                   <span className="min-w-0 flex-1">
// // // // // //                     <span className="block font-display text-[16px] font-bold text-paper-50">
// // // // // //                       {c.label}{" "}
// // // // // //                       <span className="font-mono text-[12px] font-normal text-lime-acid">
// // // // // //                         {c.value}
// // // // // //                       </span>
// // // // // //                     </span>
// // // // // //                     <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
// // // // // //                       {c.note}
// // // // // //                     </span>
// // // // // //                   </span>
// // // // // //                   <ArrowUpRight
// // // // // //                     size={17}
// // // // // //                     className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
// // // // // //                   />
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
// // // // // //               <span className="relative flex size-2">
// // // // // //                 <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
// // // // // //                 <span className="relative size-2 rounded-full bg-lime-acid" />
// // // // // //               </span>
// // // // // //               {profile.status}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* form */}
// // // // // //           <Reveal delay={0.15}>
// // // // // //             <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 backdrop-blur-sm sm:p-7">
// // // // // //               <div className="dot-grid-dark absolute inset-0 opacity-40" />
// // // // // //               <AnimatePresence mode="wait">
// // // // // //                 {!sent ? (
// // // // // //                   <motion.form
// // // // // //                     key="form"
// // // // // //                     onSubmit={onSubmit}
// // // // // //                     noValidate
// // // // // //                     exit={{ opacity: 0, y: -16 }}
// // // // // //                     transition={{ duration: 0.4, ease: EASE }}
// // // // // //                     className="relative"
// // // // // //                   >
// // // // // //                     <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/50">
// // // // // //                       New enquiry
// // // // // //                     </p>

// // // // // //                     <div className="mt-5 flex flex-wrap gap-1.5">
// // // // // //                       {intents.map((t) => (
// // // // // //                         <button
// // // // // //                           key={t}
// // // // // //                           type="button"
// // // // // //                           onClick={() => setForm((f) => ({ ...f, intent: t }))}
// // // // // //                           className={cn(
// // // // // //                             "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
// // // // // //                             form.intent === t
// // // // // //                               ? "border-lime-acid bg-lime-acid text-ink-900"
// // // // // //                               : "border-paper-300/20 text-paper-200/70 hover:border-paper-300/50",
// // // // // //                           )}
// // // // // //                         >
// // // // // //                           {t}
// // // // // //                         </button>
// // // // // //                       ))}
// // // // // //                     </div>

// // // // // //                     <div className="mt-6 space-y-5">
// // // // // //                       <div className="grid gap-5 sm:grid-cols-2">
// // // // // //                         <label className="block">
// // // // // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // // // //                             Your name
// // // // // //                           </span>
// // // // // //                           <input
// // // // // //                             value={form.name}
// // // // // //                             onChange={(e) => setForm({ ...form, name: e.target.value })}
// // // // // //                             placeholder="Priya Shah"
// // // // // //                             className={cn(field, errors.name && "border-flare")}
// // // // // //                           />
// // // // // //                           {errors.name && (
// // // // // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // // // //                               {errors.name}
// // // // // //                             </span>
// // // // // //                           )}
// // // // // //                         </label>
// // // // // //                         <label className="block">
// // // // // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // // // //                             Email
// // // // // //                           </span>
// // // // // //                           <input
// // // // // //                             value={form.email}
// // // // // //                             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // // // //                             placeholder="you@company.com"
// // // // // //                             className={cn(field, errors.email && "border-flare")}
// // // // // //                           />
// // // // // //                           {errors.email && (
// // // // // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // // // //                               {errors.email}
// // // // // //                             </span>
// // // // // //                           )}
// // // // // //                         </label>
// // // // // //                       </div>

// // // // // //                       <label className="block">
// // // // // //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // // // //                           The brief
// // // // // //                         </span>
// // // // // //                         <textarea
// // // // // //                           rows={4}
// // // // // //                           value={form.message}
// // // // // //                           onChange={(e) => setForm({ ...form, message: e.target.value })}
// // // // // //                           placeholder="What are we building, and what does success look like?"
// // // // // //                           className={cn(field, "resize-none", errors.message && "border-flare")}
// // // // // //                         />
// // // // // //                         {errors.message && (
// // // // // //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // // // //                             {errors.message}
// // // // // //                           </span>
// // // // // //                         )}
// // // // // //                       </label>
// // // // // //                     </div>

// // // // // //                     <div className="mt-7 flex flex-wrap items-center gap-3">
// // // // // //                       <Magnetic strength={0.25}>
// // // // // //                         <button
// // // // // //                           type="submit"
// // // // // //                           className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50"
// // // // // //                         >
// // // // // //                           Prepare message
// // // // // //                           <Send
// // // // // //                             size={15}
// // // // // //                             className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // // //                           />
// // // // // //                         </button>
// // // // // //                       </Magnetic>
// // // // // //                       <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-paper-300/40">
// // // // // //                         then send it via LinkedIn or copy it to your inbox
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   </motion.form>
// // // // // //                 ) : (
// // // // // //                   <motion.div
// // // // // //                     key="sent"
// // // // // //                     initial={{ opacity: 0, y: 20 }}
// // // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // // //                     transition={{ duration: 0.55, ease: EASE }}
// // // // // //                     className="relative py-2"
// // // // // //                   >
// // // // // //                     <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
// // // // // //                       <Check size={22} strokeWidth={3} />
// // // // // //                     </span>
// // // // // //                     <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
// // // // // //                       Nice — it's drafted, {form.name.split(" ")[0]}.
// // // // // //                     </h3>
// // // // // //                     <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
// // // // // //                       Copy the brief below and fire it over on LinkedIn (fastest), or open my GitHub
// // // // // //                       and say hi there. I read both.
// // // // // //                     </p>

// // // // // //                     <pre className="mt-5 max-h-[190px] overflow-auto whitespace-pre-wrap rounded-2xl border border-paper-300/12 bg-ink-950/70 p-4 font-mono text-[11.5px] leading-relaxed text-paper-200/80">
// // // // // //                       {summary}
// // // // // //                     </pre>

// // // // // //                     <div className="mt-5 flex flex-wrap gap-2.5">
// // // // // //                       <button
// // // // // //                         onClick={copy}
// // // // // //                         className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // // // //                       >
// // // // // //                         {copied ? <Check size={13} /> : <Copy size={13} />}
// // // // // //                         {copied ? "copied to clipboard" : "copy brief"}
// // // // // //                       </button>
// // // // // //                       <a
// // // // // //                         href={profile.linkedin}
// // // // // //                         target="_blank"
// // // // // //                         rel="noreferrer"
// // // // // //                         className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-100 transition-colors hover:border-paper-100"
// // // // // //                       >
// // // // // //                         <LinkedinIcon className="size-3.5" /> send on linkedin
// // // // // //                       </a>
// // // // // //                       <button
// // // // // //                         onClick={() => {
// // // // // //                           setSent(false);
// // // // // //                           setForm({ name: "", email: "", message: "", intent: "Frontend build" });
// // // // // //                         }}
// // // // // //                         className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/55 transition-colors hover:text-paper-100"
// // // // // //                       >
// // // // // //                         <Sparkles size={13} /> write another
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   </motion.div>
// // // // // //                 )}
// // // // // //               </AnimatePresence>
// // // // // //             </div>
// // // // // //           </Reveal>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // // // import { AnimatePresence, motion } from "framer-motion";
// // // // // import { ArrowUpRight, Check, Copy, Send, Sparkles } from "lucide-react";
// // // // // import { useState, type FormEvent } from "react";
// // // // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // // // import { EASE, profile } from "@/lib/data";
// // // // // import { Magnetic, Reveal, SectionLabel } from "@/components/ui";
// // // // // import { cn } from "@/utils/cn";

// // // // // const intents = ["Frontend build", "Full-stack app", "Landing page", "Dashboard / BI", "Internship"];

// // // // // type Errors = Partial<Record<"name" | "email" | "message", string>>;

// // // // // export default function Contact() {
// // // // //   const [form, setForm] = useState({ name: "", email: "", message: "", intent: "Frontend build" });
// // // // //   const [errors, setErrors] = useState<Errors>({});
// // // // //   const [sent, setSent] = useState(false);
// // // // //   const [copied, setCopied] = useState(false);

// // // // //   const validate = () => {
// // // // //     const e: Errors = {};
// // // // //     if (form.name.trim().length < 2) e.name = "Tell me who you are";
// // // // //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
// // // // //     if (form.message.trim().length < 12) e.message = "A little more detail helps";
// // // // //     return e;
// // // // //   };

// // // // //   const onSubmit = (ev: FormEvent) => {
// // // // //     ev.preventDefault();
// // // // //     const e = validate();
// // // // //     setErrors(e);
// // // // //     if (Object.keys(e).length === 0) setSent(true);
// // // // //   };

// // // // //   const summary = `Project: ${form.intent}
// // // // // From: ${form.name} <${form.email}>

// // // // // ${form.message}`;

// // // // //   const copy = async () => {
// // // // //     try {
// // // // //       await navigator.clipboard.writeText(summary);
// // // // //       setCopied(true);
// // // // //       setTimeout(() => setCopied(false), 2200);
// // // // //     } catch {
// // // // //       setCopied(false);
// // // // //     }
// // // // //   };

// // // // //   const field =
// // // // //     "peer w-full border-0 border-b border-paper-300/20 bg-transparent px-0 py-3 font-sans text-[15px] text-paper-50 outline-none transition-colors placeholder:text-paper-300/35 focus:border-lime-acid";

// // // // //   return (
// // // // //     <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
// // // // //       <div className="grid-lines-dark absolute inset-0 opacity-80" />
// // // // //       <div
// // // // //         className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
// // // // //         style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
// // // // //       />

// // // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // // //         <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
// // // // //           {/* pitch */}
// // // // //           <div>
// // // // //             <SectionLabel index="05" label="Contact" dark />
// // // // //             <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
// // // // //               <span className="block">Have an idea</span>
// // // // //               <span className="block text-stroke-paper">worth building?</span>
// // // // //             </h2>

// // // // //             <Reveal delay={0.1}>
// // // // //               <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
// // // // //                 Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
// // // // //                 a timeline and an honest yes or no.
// // // // //               </p>
// // // // //             </Reveal>

// // // // //             <div className="mt-9 space-y-2.5">
// // // // //               {[
// // // // //                 {
// // // // //                   label: "GitHub",
// // // // //                   value: `/${profile.githubHandle}`,
// // // // //                   href: profile.github,
// // // // //                   Icon: GithubIcon,
// // // // //                   note: "code, repos, READMEs",
// // // // //                 },
// // // // //                 {
// // // // //                   label: "LinkedIn",
// // // // //                   value: `/${profile.linkedinHandle}`,
// // // // //                   href: profile.linkedin,
// // // // //                   Icon: LinkedinIcon,
// // // // //                   note: "roles, referrals, DMs",
// // // // //                 },
// // // // //               ].map((c) => (
// // // // //                 <a
// // // // //                   key={c.label}
// // // // //                   href={c.href}
// // // // //                   target="_blank"
// // // // //                   rel="noreferrer"
// // // // //                   className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
// // // // //                 >
// // // // //                   <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
// // // // //                     <c.Icon className="size-4" />
// // // // //                   </span>
// // // // //                   <span className="min-w-0 flex-1">
// // // // //                     <span className="block font-display text-[16px] font-bold text-paper-50">
// // // // //                       {c.label}{" "}
// // // // //                       <span className="font-mono text-[12px] font-normal text-lime-acid">
// // // // //                         {c.value}
// // // // //                       </span>
// // // // //                     </span>
// // // // //                     <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
// // // // //                       {c.note}
// // // // //                     </span>
// // // // //                   </span>
// // // // //                   <ArrowUpRight
// // // // //                     size={17}
// // // // //                     className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
// // // // //                   />
// // // // //                 </a>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
// // // // //               <span className="relative flex size-2">
// // // // //                 <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
// // // // //                 <span className="relative size-2 rounded-full bg-lime-acid" />
// // // // //               </span>
// // // // //               {profile.status}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* form */}
// // // // //           <Reveal delay={0.15}>
// // // // //             <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 backdrop-blur-sm sm:p-7">
// // // // //               <div className="dot-grid-dark absolute inset-0 opacity-40" />
// // // // //               <AnimatePresence mode="wait">
// // // // //                 {!sent ? (
// // // // //                   <motion.form
// // // // //                     key="form"
// // // // //                     onSubmit={onSubmit}
// // // // //                     noValidate
// // // // //                     exit={{ opacity: 0, y: -16 }}
// // // // //                     transition={{ duration: 0.4, ease: EASE }}
// // // // //                     className="relative"
// // // // //                   >
// // // // //                     <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-paper-300/50">
// // // // //                       New enquiry
// // // // //                     </p>

// // // // //                     <div className="mt-5 flex flex-wrap gap-1.5">
// // // // //                       {intents.map((t) => (
// // // // //                         <button
// // // // //                           key={t}
// // // // //                           type="button"
// // // // //                           onClick={() => setForm((f) => ({ ...f, intent: t }))}
// // // // //                           className={cn(
// // // // //                             "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
// // // // //                             form.intent === t
// // // // //                               ? "border-lime-acid bg-lime-acid text-ink-900"
// // // // //                               : "border-paper-300/20 text-paper-200/70 hover:border-paper-300/50",
// // // // //                           )}
// // // // //                         >
// // // // //                           {t}
// // // // //                         </button>
// // // // //                       ))}
// // // // //                     </div>

// // // // //                     <div className="mt-6 space-y-5">
// // // // //                       <div className="grid gap-5 sm:grid-cols-2">
// // // // //                         <label className="block">
// // // // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // // //                             Your name
// // // // //                           </span>
// // // // //                           <input
// // // // //                             value={form.name}
// // // // //                             onChange={(e) => setForm({ ...form, name: e.target.value })}
// // // // //                             placeholder="Priya Shah"
// // // // //                             className={cn(field, errors.name && "border-flare")}
// // // // //                           />
// // // // //                           {errors.name && (
// // // // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // // //                               {errors.name}
// // // // //                             </span>
// // // // //                           )}
// // // // //                         </label>
// // // // //                         <label className="block">
// // // // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // // //                             Email
// // // // //                           </span>
// // // // //                           <input
// // // // //                             value={form.email}
// // // // //                             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // // //                             placeholder="you@company.com"
// // // // //                             className={cn(field, errors.email && "border-flare")}
// // // // //                           />
// // // // //                           {errors.email && (
// // // // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // // //                               {errors.email}
// // // // //                             </span>
// // // // //                           )}
// // // // //                         </label>
// // // // //                       </div>

// // // // //                       <label className="block">
// // // // //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // // //                           The brief
// // // // //                         </span>
// // // // //                         <textarea
// // // // //                           rows={4}
// // // // //                           value={form.message}
// // // // //                           onChange={(e) => setForm({ ...form, message: e.target.value })}
// // // // //                           placeholder="What are we building, and what does success look like?"
// // // // //                           className={cn(field, "resize-none", errors.message && "border-flare")}
// // // // //                         />
// // // // //                         {errors.message && (
// // // // //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // // //                             {errors.message}
// // // // //                           </span>
// // // // //                         )}
// // // // //                       </label>
// // // // //                     </div>

// // // // //                     <div className="mt-7 flex flex-wrap items-center gap-3">
// // // // //                       <Magnetic strength={0.25}>
// // // // //                         <button
// // // // //                           type="submit"
// // // // //                           className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50"
// // // // //                         >
// // // // //                           Prepare message
// // // // //                           <Send
// // // // //                             size={15}
// // // // //                             className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // // //                           />
// // // // //                         </button>
// // // // //                       </Magnetic>
// // // // //                       <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-paper-300/40">
// // // // //                         then send it via LinkedIn or copy it to your inbox
// // // // //                       </p>
// // // // //                     </div>
// // // // //                   </motion.form>
// // // // //                 ) : (
// // // // //                   <motion.div
// // // // //                     key="sent"
// // // // //                     initial={{ opacity: 0, y: 20 }}
// // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // //                     transition={{ duration: 0.55, ease: EASE }}
// // // // //                     className="relative py-2"
// // // // //                   >
// // // // //                     <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
// // // // //                       <Check size={22} strokeWidth={3} />
// // // // //                     </span>
// // // // //                     <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
// // // // //                       Nice — it's drafted, {form.name.split(" ")[0]}.
// // // // //                     </h3>
// // // // //                     <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
// // // // //                       Copy the brief below and fire it over on LinkedIn (fastest), or open my GitHub
// // // // //                       and say hi there. I read both.
// // // // //                     </p>

// // // // //                     <pre className="mt-5 max-h-[190px] overflow-auto whitespace-pre-wrap rounded-2xl border border-paper-300/12 bg-ink-950/70 p-4 font-mono text-[11.5px] leading-relaxed text-paper-200/80">
// // // // //                       {summary}
// // // // //                     </pre>

// // // // //                     <div className="mt-5 flex flex-wrap gap-2.5">
// // // // //                       <button
// // // // //                         onClick={copy}
// // // // //                         className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // // //                       >
// // // // //                         {copied ? <Check size={13} /> : <Copy size={13} />}
// // // // //                         {copied ? "copied to clipboard" : "copy brief"}
// // // // //                       </button>
// // // // //                       <a
// // // // //                         href={profile.linkedin}
// // // // //                         target="_blank"
// // // // //                         rel="noreferrer"
// // // // //                         className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-100 transition-colors hover:border-paper-100"
// // // // //                       >
// // // // //                         <LinkedinIcon className="size-3.5" /> send on linkedin
// // // // //                       </a>
// // // // //                       <button
// // // // //                         onClick={() => {
// // // // //                           setSent(false);
// // // // //                           setForm({ name: "", email: "", message: "", intent: "Frontend build" });
// // // // //                         }}
// // // // //                         className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/55 transition-colors hover:text-paper-100"
// // // // //                       >
// // // // //                         <Sparkles size={13} /> write another
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 )}
// // // // //               </AnimatePresence>
// // // // //             </div>
// // // // //           </Reveal>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // import { AnimatePresence, motion } from "framer-motion";
// // // // import { ArrowUpRight, Check, Copy, Send, Sparkles } from "lucide-react";
// // // // import { useState, type FormEvent } from "react";
// // // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // // import { EASE, profile } from "@/lib/data";
// // // // import { Magnetic, Reveal, SectionLabel } from "@/components/ui";
// // // // import { cn } from "@/utils/cn";

// // // // type Errors = Partial<Record<"name" | "email" | "message", string>>;

// // // // export default function Contact() {
// // // //   const [form, setForm] = useState({ name: "", email: "", message: "" });
// // // //   const [errors, setErrors] = useState<Errors>({});
// // // //   const [sent, setSent] = useState(false);
// // // //   const [copied, setCopied] = useState(false);

// // // //   const validate = () => {
// // // //     const e: Errors = {};
// // // //     if (form.name.trim().length < 2) e.name = "Tell me who you are";
// // // //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
// // // //     if (form.message.trim().length < 12) e.message = "A little more detail helps";
// // // //     return e;
// // // //   };

// // // //   const onSubmit = (ev: FormEvent) => {
// // // //     ev.preventDefault();
// // // //     const e = validate();
// // // //     setErrors(e);
// // // //     if (Object.keys(e).length === 0) setSent(true);
// // // //   };

// // // //   const summary = `From: ${form.name} <${form.email}>

// // // // ${form.message}`;

// // // //   const copy = async () => {
// // // //     try {
// // // //       await navigator.clipboard.writeText(summary);
// // // //       setCopied(true);
// // // //       setTimeout(() => setCopied(false), 2200);
// // // //     } catch {
// // // //       setCopied(false);
// // // //     }
// // // //   };

// // // //   const field =
// // // //     "peer w-full border-0 border-b border-paper-300/20 bg-transparent px-0 py-3 font-sans text-[15px] text-paper-50 outline-none transition-colors placeholder:text-paper-300/35 focus:border-lime-acid";

// // // //   return (
// // // //     <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
// // // //       <div className="grid-lines-dark absolute inset-0 opacity-80" />
// // // //       <div
// // // //         className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
// // // //         style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
// // // //       />

// // // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // // //         <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
// // // //           {/* pitch */}
// // // //           <div>
// // // //             <SectionLabel index="05" label="Contact" dark />
// // // //             <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
// // // //               <span className="block">Have an idea</span>
// // // //               <span className="block text-stroke-paper">worth building?</span>
// // // //             </h2>

// // // //             <Reveal delay={0.1}>
// // // //               <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
// // // //                 Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
// // // //                 a timeline and an honest yes or no.
// // // //               </p>
// // // //             </Reveal>

// // // //             <div className="mt-9 space-y-2.5">
// // // //               {[
// // // //                 {
// // // //                   label: "GitHub",
// // // //                   value: `/${profile.githubHandle}`,
// // // //                   href: profile.github,
// // // //                   Icon: GithubIcon,
// // // //                   note: "code, repos, READMEs",
// // // //                 },
// // // //                 {
// // // //                   label: "LinkedIn",
// // // //                   value: `/${profile.linkedinHandle}`,
// // // //                   href: profile.linkedin,
// // // //                   Icon: LinkedinIcon,
// // // //                   note: "roles, referrals, DMs",
// // // //                 },
// // // //               ].map((c) => (
// // // //                 <a
// // // //                   key={c.label}
// // // //                   href={c.href}
// // // //                   target="_blank"
// // // //                   rel="noreferrer"
// // // //                   className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
// // // //                 >
// // // //                   <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
// // // //                     <c.Icon className="size-4" />
// // // //                   </span>
// // // //                   <span className="min-w-0 flex-1">
// // // //                     <span className="block font-display text-[16px] font-bold text-paper-50">
// // // //                       {c.label}{" "}
// // // //                       <span className="font-mono text-[12px] font-normal text-lime-acid">
// // // //                         {c.value}
// // // //                       </span>
// // // //                     </span>
// // // //                     <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
// // // //                       {c.note}
// // // //                     </span>
// // // //                   </span>
// // // //                   <ArrowUpRight
// // // //                     size={17}
// // // //                     className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
// // // //                   />
// // // //                 </a>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
// // // //               <span className="relative flex size-2">
// // // //                 <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
// // // //                 <span className="relative size-2 rounded-full bg-lime-acid" />
// // // //               </span>
// // // //               {profile.status}
// // // //             </div>
// // // //           </div>

// // // //           {/* form */}
// // // //           <Reveal delay={0.15}>
// // // //             <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 backdrop-blur-sm sm:p-7">
// // // //               <div className="dot-grid-dark absolute inset-0 opacity-40" />
// // // //               <AnimatePresence mode="wait">
// // // //                 {!sent ? (
// // // //                   <motion.form
// // // //                     key="form"
// // // //                     onSubmit={onSubmit}
// // // //                     noValidate
// // // //                     exit={{ opacity: 0, y: -16 }}
// // // //                     transition={{ duration: 0.4, ease: EASE }}
// // // //                     className="relative"
// // // //                   >
// // // //                     <div className="space-y-5">
// // // //                       <div className="grid gap-5 sm:grid-cols-2">
// // // //                         <label className="block">
// // // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // //                             Your name
// // // //                           </span>
// // // //                           <input
// // // //                             value={form.name}
// // // //                             onChange={(e) => setForm({ ...form, name: e.target.value })}
// // // //                             placeholder="Priya Shah"
// // // //                             className={cn(field, errors.name && "border-flare")}
// // // //                           />
// // // //                           {errors.name && (
// // // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // //                               {errors.name}
// // // //                             </span>
// // // //                           )}
// // // //                         </label>
// // // //                         <label className="block">
// // // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // //                             Email
// // // //                           </span>
// // // //                           <input
// // // //                             value={form.email}
// // // //                             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // //                             placeholder="you@company.com"
// // // //                             className={cn(field, errors.email && "border-flare")}
// // // //                           />
// // // //                           {errors.email && (
// // // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // //                               {errors.email}
// // // //                             </span>
// // // //                           )}
// // // //                         </label>
// // // //                       </div>

// // // //                       <label className="block">
// // // //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // // //                           The brief
// // // //                         </span>
// // // //                         <textarea
// // // //                           rows={4}
// // // //                           value={form.message}
// // // //                           onChange={(e) => setForm({ ...form, message: e.target.value })}
// // // //                           placeholder="What are we building, and what does success look like?"
// // // //                           className={cn(field, "resize-none", errors.message && "border-flare")}
// // // //                         />
// // // //                         {errors.message && (
// // // //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // // //                             {errors.message}
// // // //                           </span>
// // // //                         )}
// // // //                       </label>
// // // //                     </div>

// // // //                     <div className="mt-7 flex flex-wrap items-center gap-3">
// // // //                       <Magnetic strength={0.25}>
// // // //                         <button
// // // //                           type="submit"
// // // //                           className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50"
// // // //                         >
// // // //                           Prepare message
// // // //                           <Send
// // // //                             size={15}
// // // //                             className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // // //                           />
// // // //                         </button>
// // // //                       </Magnetic>
// // // //                       <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-paper-300/40">
// // // //                         then send it via LinkedIn or copy it to your inbox
// // // //                       </p>
// // // //                     </div>
// // // //                   </motion.form>
// // // //                 ) : (
// // // //                   <motion.div
// // // //                     key="sent"
// // // //                     initial={{ opacity: 0, y: 20 }}
// // // //                     animate={{ opacity: 1, y: 0 }}
// // // //                     transition={{ duration: 0.55, ease: EASE }}
// // // //                     className="relative py-2"
// // // //                   >
// // // //                     <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
// // // //                       <Check size={22} strokeWidth={3} />
// // // //                     </span>
// // // //                     <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
// // // //                       Nice — it's drafted, {form.name.split(" ")[0]}.
// // // //                     </h3>
// // // //                     <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
// // // //                       Copy the brief below and fire it over on LinkedIn (fastest), or open my GitHub
// // // //                       and say hi there. I read both.
// // // //                     </p>

// // // //                     <pre className="mt-5 max-h-[190px] overflow-auto whitespace-pre-wrap rounded-2xl border border-paper-300/12 bg-ink-950/70 p-4 font-mono text-[11.5px] leading-relaxed text-paper-200/80">
// // // //                       {summary}
// // // //                     </pre>

// // // //                     <div className="mt-5 flex flex-wrap gap-2.5">
// // // //                       <button
// // // //                         onClick={copy}
// // // //                         className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // // //                       >
// // // //                         {copied ? <Check size={13} /> : <Copy size={13} />}
// // // //                         {copied ? "copied to clipboard" : "copy brief"}
// // // //                       </button>
// // // //                       <a
// // // //                         href={profile.linkedin}
// // // //                         target="_blank"
// // // //                         rel="noreferrer"
// // // //                         className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-100 transition-colors hover:border-paper-100"
// // // //                       >
// // // //                         <LinkedinIcon className="size-3.5" /> send on linkedin
// // // //                       </a>
// // // //                       <button
// // // //                         onClick={() => {
// // // //                           setSent(false);
// // // //                           setForm({ name: "", email: "", message: "", intent: "Frontend build" });
// // // //                         }}
// // // //                         className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/55 transition-colors hover:text-paper-100"
// // // //                       >
// // // //                         <Sparkles size={13} /> write another
// // // //                       </button>
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 )}
// // // //               </AnimatePresence>
// // // //             </div>
// // // //           </Reveal>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { ArrowUpRight, Check, Copy, Send, Sparkles } from "lucide-react";
// // // import { useState, type FormEvent } from "react";
// // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // import { EASE, profile } from "@/lib/data";
// // // import { Magnetic, Reveal, SectionLabel } from "@/components/ui";
// // // import { cn } from "@/utils/cn";

// // // type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

// // // export default function Contact() {
// // //   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
// // //   const [errors, setErrors] = useState<Errors>({});
// // //   const [sent, setSent] = useState(false);
// // //   const [copied, setCopied] = useState(false);

// // //   const validate = () => {
// // //     const e: Errors = {};
// // //     if (form.name.trim().length < 2) e.name = "Tell me who you are";
// // //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
// // //     if (form.subject.trim().length < 3) e.subject = "Add a short subject";
// // //     if (form.message.trim().length < 12) e.message = "A little more detail helps";
// // //     return e;
// // //   };

// // //   const onSubmit = (ev: FormEvent) => {
// // //     ev.preventDefault();
// // //     const e = validate();
// // //     setErrors(e);
// // //     if (Object.keys(e).length === 0) setSent(true);
// // //   };

// // //   const summary = `Subject: ${form.subject}
// // // From: ${form.name} <${form.email}>

// // // ${form.message}`;

// // //   const copy = async () => {
// // //     try {
// // //       await navigator.clipboard.writeText(summary);
// // //       setCopied(true);
// // //       setTimeout(() => setCopied(false), 2200);
// // //     } catch {
// // //       setCopied(false);
// // //     }
// // //   };

// // //   const field =
// // //     "peer w-full border-0 border-b border-paper-300/20 bg-transparent px-0 py-3 font-sans text-[15px] text-paper-50 outline-none transition-colors placeholder:text-paper-300/35 focus:border-lime-acid";

// // //   return (
// // //     <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
// // //       <div className="grid-lines-dark absolute inset-0 opacity-80" />
// // //       <div
// // //         className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
// // //         style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
// // //       />

// // //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// // //         <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
// // //           {/* pitch */}
// // //           <div>
// // //             <SectionLabel index="05" label="Contact" dark />
// // //             <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
// // //               <span className="block">Have an idea</span>
// // //               <span className="block text-stroke-paper">worth building?</span>
// // //             </h2>

// // //             <Reveal delay={0.1}>
// // //               <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
// // //                 Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
// // //                 a timeline and an honest yes or no.
// // //               </p>
// // //             </Reveal>

// // //             <div className="mt-9 space-y-2.5">
// // //               {[
// // //                 {
// // //                   label: "GitHub",
// // //                   value: `/${profile.githubHandle}`,
// // //                   href: profile.github,
// // //                   Icon: GithubIcon,
// // //                   note: "code, repos, READMEs",
// // //                 },
// // //                 {
// // //                   label: "LinkedIn",
// // //                   value: `/${profile.linkedinHandle}`,
// // //                   href: profile.linkedin,
// // //                   Icon: LinkedinIcon,
// // //                   note: "roles, referrals, DMs",
// // //                 },
// // //               ].map((c) => (
// // //                 <a
// // //                   key={c.label}
// // //                   href={c.href}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
// // //                 >
// // //                   <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
// // //                     <c.Icon className="size-4" />
// // //                   </span>
// // //                   <span className="min-w-0 flex-1">
// // //                     <span className="block font-display text-[16px] font-bold text-paper-50">
// // //                       {c.label}{" "}
// // //                       <span className="font-mono text-[12px] font-normal text-lime-acid">
// // //                         {c.value}
// // //                       </span>
// // //                     </span>
// // //                     <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
// // //                       {c.note}
// // //                     </span>
// // //                   </span>
// // //                   <ArrowUpRight
// // //                     size={17}
// // //                     className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
// // //                   />
// // //                 </a>
// // //               ))}
// // //             </div>

// // //             <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
// // //               <span className="relative flex size-2">
// // //                 <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
// // //                 <span className="relative size-2 rounded-full bg-lime-acid" />
// // //               </span>
// // //               {profile.status}
// // //             </div>
// // //           </div>

// // //           {/* form */}
// // //           <Reveal delay={0.15}>
// // //             <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 backdrop-blur-sm sm:p-7">
// // //               <div className="dot-grid-dark absolute inset-0 opacity-40" />
// // //               <AnimatePresence mode="wait">
// // //                 {!sent ? (
// // //                   <motion.form
// // //                     key="form"
// // //                     onSubmit={onSubmit}
// // //                     noValidate
// // //                     exit={{ opacity: 0, y: -16 }}
// // //                     transition={{ duration: 0.4, ease: EASE }}
// // //                     className="relative"
// // //                   >
// // //                     <div className="space-y-5">
// // //                       <div className="grid gap-5 sm:grid-cols-2">
// // //                         <label className="block">
// // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // //                             Your name
// // //                           </span>
// // //                           <input
// // //                             value={form.name}
// // //                             onChange={(e) => setForm({ ...form, name: e.target.value })}
// // //                             placeholder="Priya Shah"
// // //                             className={cn(field, errors.name && "border-flare")}
// // //                           />
// // //                           {errors.name && (
// // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // //                               {errors.name}
// // //                             </span>
// // //                           )}
// // //                         </label>
// // //                         <label className="block">
// // //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // //                             Email
// // //                           </span>
// // //                           <input
// // //                             value={form.email}
// // //                             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // //                             placeholder="you@company.com"
// // //                             className={cn(field, errors.email && "border-flare")}
// // //                           />
// // //                           {errors.email && (
// // //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // //                               {errors.email}
// // //                             </span>
// // //                           )}
// // //                         </label>
// // //                       </div>

// // //                       <label className="block">
// // //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // //                           Subject
// // //                         </span>
// // //                         <input
// // //                           value={form.subject}
// // //                           onChange={(e) => setForm({ ...form, subject: e.target.value })}
// // //                           placeholder="Project enquiry"
// // //                           className={cn(field, errors.subject && "border-flare")}
// // //                         />
// // //                         {errors.subject && (
// // //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // //                             {errors.subject}
// // //                           </span>
// // //                         )}
// // //                       </label>

// // //                       <label className="block">
// // //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// // //                           The brief
// // //                         </span>
// // //                         <textarea
// // //                           rows={4}
// // //                           value={form.message}
// // //                           onChange={(e) => setForm({ ...form, message: e.target.value })}
// // //                           placeholder="What are we building, and what does success look like?"
// // //                           className={cn(field, "resize-none", errors.message && "border-flare")}
// // //                         />
// // //                         {errors.message && (
// // //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// // //                             {errors.message}
// // //                           </span>
// // //                         )}
// // //                       </label>
// // //                     </div>

// // //                     <div className="mt-7 flex flex-wrap items-center gap-3">
// // //                       <Magnetic strength={0.25}>
// // //                         <button
// // //                           type="submit"
// // //                           className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50"
// // //                         >
// // //                           Prepare message
// // //                           <Send
// // //                             size={15}
// // //                             className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// // //                           />
// // //                         </button>
// // //                       </Magnetic>
// // //                       <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-paper-300/40">
// // //                         then send it via LinkedIn or copy it to your inbox
// // //                       </p>
// // //                     </div>
// // //                   </motion.form>
// // //                 ) : (
// // //                   <motion.div
// // //                     key="sent"
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.55, ease: EASE }}
// // //                     className="relative py-2"
// // //                   >
// // //                     <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
// // //                       <Check size={22} strokeWidth={3} />
// // //                     </span>
// // //                     <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
// // //                       Nice — it's drafted, {form.name.split(" ")[0]}.
// // //                     </h3>
// // //                     <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
// // //                       Copy the brief below and fire it over on LinkedIn (fastest), or open my GitHub
// // //                       and say hi there. I read both.
// // //                     </p>

// // //                     <pre className="mt-5 max-h-[190px] overflow-auto whitespace-pre-wrap rounded-2xl border border-paper-300/12 bg-ink-950/70 p-4 font-mono text-[11.5px] leading-relaxed text-paper-200/80">
// // //                       {summary}
// // //                     </pre>

// // //                     <div className="mt-5 flex flex-wrap gap-2.5">
// // //                       <button
// // //                         onClick={copy}
// // //                         className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// // //                       >
// // //                         {copied ? <Check size={13} /> : <Copy size={13} />}
// // //                         {copied ? "copied to clipboard" : "copy brief"}
// // //                       </button>
// // //                       <a
// // //                         href={profile.linkedin}
// // //                         target="_blank"
// // //                         rel="noreferrer"
// // //                         className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-100 transition-colors hover:border-paper-100"
// // //                       >
// // //                         <LinkedinIcon className="size-3.5" /> send on linkedin
// // //                       </a>
// // //                       <button
// // //                         onClick={() => {
// // //                           setSent(false);
// // //                           setForm({ name: "", email: "", message: "", intent: "Frontend build" });
// // //                         }}
// // //                         className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/55 transition-colors hover:text-paper-100"
// // //                       >
// // //                         <Sparkles size={13} /> write another
// // //                       </button>
// // //                     </div>
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>
// // //             </div>
// // //           </Reveal>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // import { AnimatePresence, motion } from "framer-motion";
// // import { ArrowUpRight, Check, Copy, Send, Sparkles } from "lucide-react";
// // import { useState, type FormEvent } from "react";
// // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // import { EASE, profile } from "@/lib/data";
// // import { Magnetic, Reveal, SectionLabel } from "@/components/ui";
// // import { cn } from "@/utils/cn";

// // type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

// // export default function Contact() {
// //   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
// //   const [errors, setErrors] = useState<Errors>({});
// //   const [sent, setSent] = useState(false);
// //   const [copied, setCopied] = useState(false);

// //   const validate = () => {
// //     const e: Errors = {};
// //     if (form.name.trim().length < 2) e.name = "Tell me who you are";
// //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
// //     if (form.subject.trim().length < 3) e.subject = "Add a short subject";
// //     if (form.message.trim().length < 12) e.message = "A little more detail helps";
// //     return e;
// //   };

// //   const onSubmit = (ev: FormEvent) => {
// //     ev.preventDefault();
// //     const e = validate();
// //     setErrors(e);
// //     if (Object.keys(e).length === 0) setSent(true);
// //   };

// //   const summary = `Subject: ${form.subject}
// // From: ${form.name} <${form.email}>

// // ${form.message}`;

// //   const copy = async () => {
// //     try {
// //       await navigator.clipboard.writeText(summary);
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 2200);
// //     } catch {
// //       setCopied(false);
// //     }
// //   };

// //   const field =
// //     "peer w-full border-0 border-b border-paper-300/20 bg-transparent px-0 py-3 font-sans text-[15px] text-paper-50 outline-none transition-colors placeholder:text-paper-300/35 focus:border-lime-acid";

// //   return (
// //     <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
// //       <div className="grid-lines-dark absolute inset-0 opacity-80" />
// //       <div
// //         className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
// //         style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
// //       />

// //       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
// //         <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
// //           {/* pitch */}
// //           <div>
// //             <SectionLabel index="05" label="Contact" dark />
// //             <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
// //               <span className="block">Have an idea</span>
// //               <span className="block text-stroke-paper">worth building?</span>
// //             </h2>

// //             <Reveal delay={0.1}>
// //               <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
// //                 Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
// //                 a timeline and an honest yes or no.
// //               </p>
// //             </Reveal>

// //             <div className="mt-9 space-y-2.5">
// //               {[
// //                 {
// //                   label: "GitHub",
// //                   value: `/${profile.githubHandle}`,
// //                   href: profile.github,
// //                   Icon: GithubIcon,
// //                   note: "code, repos, READMEs",
// //                 },
// //                 {
// //                   label: "LinkedIn",
// //                   value: `/${profile.linkedinHandle}`,
// //                   href: profile.linkedin,
// //                   Icon: LinkedinIcon,
// //                   note: "roles, referrals, DMs",
// //                 },
// //               ].map((c) => (
// //                 <a
// //                   key={c.label}
// //                   href={c.href}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
// //                 >
// //                   <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
// //                     <c.Icon className="size-4" />
// //                   </span>
// //                   <span className="min-w-0 flex-1">
// //                     <span className="block font-display text-[16px] font-bold text-paper-50">
// //                       {c.label}{" "}
// //                       <span className="font-mono text-[12px] font-normal text-lime-acid">
// //                         {c.value}
// //                       </span>
// //                     </span>
// //                     <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
// //                       {c.note}
// //                     </span>
// //                   </span>
// //                   <ArrowUpRight
// //                     size={17}
// //                     className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
// //                   />
// //                 </a>
// //               ))}
// //             </div>

// //             <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
// //               <span className="relative flex size-2">
// //                 <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
// //                 <span className="relative size-2 rounded-full bg-lime-acid" />
// //               </span>
// //               {profile.status}
// //             </div>
// //           </div>

// //           {/* form */}
// //           <Reveal delay={0.15}>
// //             <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 backdrop-blur-sm sm:p-7">
// //               <div className="dot-grid-dark absolute inset-0 opacity-40" />
// //               <AnimatePresence mode="wait">
// //                 {!sent ? (
// //                   <motion.form
// //                     key="form"
// //                     onSubmit={onSubmit}
// //                     noValidate
// //                     exit={{ opacity: 0, y: -16 }}
// //                     transition={{ duration: 0.4, ease: EASE }}
// //                     className="relative"
// //                   >
// //                     <div className="space-y-5">
// //                       <div className="grid gap-5 sm:grid-cols-2">
// //                         <label className="block">
// //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// //                             Your name
// //                           </span>
// //                           <input
// //                             value={form.name}
// //                             onChange={(e) => setForm({ ...form, name: e.target.value })}
// //                             className={cn(field, errors.name && "border-flare")}
// //                           />
// //                           {errors.name && (
// //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// //                               {errors.name}
// //                             </span>
// //                           )}
// //                         </label>
// //                         <label className="block">
// //                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// //                             Email
// //                           </span>
// //                           <input
// //                             value={form.email}
// //                             onChange={(e) => setForm({ ...form, email: e.target.value })}
// //                             className={cn(field, errors.email && "border-flare")}
// //                           />
// //                           {errors.email && (
// //                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// //                               {errors.email}
// //                             </span>
// //                           )}
// //                         </label>
// //                       </div>

// //                       <label className="block">
// //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// //                           Subject
// //                         </span>
// //                         <input
// //                           value={form.subject}
// //                           onChange={(e) => setForm({ ...form, subject: e.target.value })}
// //                           className={cn(field, errors.subject && "border-flare")}
// //                         />
// //                         {errors.subject && (
// //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// //                             {errors.subject}
// //                           </span>
// //                         )}
// //                       </label>

// //                       <label className="block">
// //                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
// //                           The brief
// //                         </span>
// //                         <textarea
// //                           rows={4}
// //                           value={form.message}
// //                           onChange={(e) => setForm({ ...form, message: e.target.value })}
// //                           className={cn(field, "resize-none", errors.message && "border-flare")}
// //                         />
// //                         {errors.message && (
// //                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
// //                             {errors.message}
// //                           </span>
// //                         )}
// //                       </label>
// //                     </div>

// //                     <div className="mt-7 flex flex-wrap items-center gap-3">
// //                       <Magnetic strength={0.25}>
// //                         <button
// //                           type="submit"
// //                           className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50"
// //                         >
// //                           Prepare message
// //                           <Send
// //                             size={15}
// //                             className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
// //                           />
// //                         </button>
// //                       </Magnetic>
// //                       <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-paper-300/40">
// //                         then send it via LinkedIn or copy it to your inbox
// //                       </p>
// //                     </div>
// //                   </motion.form>
// //                 ) : (
// //                   <motion.div
// //                     key="sent"
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.55, ease: EASE }}
// //                     className="relative py-2"
// //                   >
// //                     <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
// //                       <Check size={22} strokeWidth={3} />
// //                     </span>
// //                     <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
// //                       Nice — it's drafted, {form.name.split(" ")[0]}.
// //                     </h3>
// //                     <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
// //                       Copy the brief below and fire it over on LinkedIn (fastest), or open my GitHub
// //                       and say hi there. I read both.
// //                     </p>

// //                     <pre className="mt-5 max-h-[190px] overflow-auto whitespace-pre-wrap rounded-2xl border border-paper-300/12 bg-ink-950/70 p-4 font-mono text-[11.5px] leading-relaxed text-paper-200/80">
// //                       {summary}
// //                     </pre>

// //                     <div className="mt-5 flex flex-wrap gap-2.5">
// //                       <button
// //                         onClick={copy}
// //                         className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
// //                       >
// //                         {copied ? <Check size={13} /> : <Copy size={13} />}
// //                         {copied ? "copied to clipboard" : "copy brief"}
// //                       </button>
// //                       <a
// //                         href={profile.linkedin}
// //                         target="_blank"
// //                         rel="noreferrer"
// //                         className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-100 transition-colors hover:border-paper-100"
// //                       >
// //                         <LinkedinIcon className="size-3.5" /> send on linkedin
// //                       </a>
// //                       <button
// //                         onClick={() => {
// //                           setSent(false);
// //                           setForm({ name: "", email: "", message: "", intent: "Frontend build" });
// //                         }}
// //                         className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/55 transition-colors hover:text-paper-100"
// //                       >
// //                         <Sparkles size={13} /> write another
// //                       </button>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUpRight, Check, Copy, Send, Sparkles } from "lucide-react";
// import { useState, type FormEvent } from "react";
// import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// import { EASE, profile } from "@/lib/data";
// import { Magnetic, Reveal, SectionLabel } from "@/components/ui"; 
// import { cn } from "@/utils/cn";

// type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
//   const [errors, setErrors] = useState<Errors>({});
//   const [sent, setSent] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const validate = () => {
//     const e: Errors = {};
//     if (form.name.trim().length < 2) e.name = "Tell me who you are";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
//     if (form.subject.trim().length < 3) e.subject = "Add a short subject";
//     if (form.message.trim().length < 12) e.message = "A little more detail helps";
//     return e;
//   };

//   const onSubmit = (ev: FormEvent) => {
//     ev.preventDefault();
//     const e = validate();
//     setErrors(e);
//     if (Object.keys(e).length === 0) setSent(true);
//   };

//   const summary = `Subject: ${form.subject}
// From: ${form.name} <${form.email}>

// ${form.message}`;

//   const copy = async () => {
//     try {
//       await navigator.clipboard.writeText(summary);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2200);
//     } catch {
//       setCopied(false);
//     }
//   };

//   const field =
//     "peer mt-2 w-full rounded-xl border border-paper-300/15 bg-paper-50/[0.035] px-4 py-3.5 font-sans text-[15px] text-paper-50 outline-none transition-all duration-300 focus:border-lime-acid/70 focus:bg-paper-50/[0.06] focus:shadow-[0_0_0_3px_rgba(205,245,100,0.08)]";

//   return (
//     <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
//       <div className="grid-lines-dark absolute inset-0 opacity-80" />
//       <div
//         className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
//         style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
//       />

//       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
//         <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
//           {/* pitch */}
//           <div>
//             <SectionLabel index="05" label="Contact" dark />
//             <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
//               <span className="block">Have an idea</span>
//               <span className="block text-stroke-paper">worth building?</span>
//             </h2>

//             <Reveal delay={0.1}>
//               <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
//                 Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
//                 a timeline and an honest yes or no.
//               </p>
//             </Reveal>

//             <div className="mt-9 space-y-2.5">
//               {[
//                 {
//                   label: "GitHub",
//                   value: `/${profile.githubHandle}`,
//                   href: profile.github,
//                   Icon: GithubIcon,
//                   note: "code, repos, READMEs",
//                 },
//                 {
//                   label: "LinkedIn",
//                   value: `/${profile.linkedinHandle}`,
//                   href: profile.linkedin,
//                   Icon: LinkedinIcon,
//                   note: "roles, referrals, DMs",
//                 },
//               ].map((c) => (
//                 <a
//                   key={c.label}
//                   href={c.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
//                 >
//                   <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
//                     <c.Icon className="size-4" />
//                   </span>
//                   <span className="min-w-0 flex-1">
//                     <span className="block font-display text-[16px] font-bold text-paper-50">
//                       {c.label}{" "}
//                       <span className="font-mono text-[12px] font-normal text-lime-acid">
//                         {c.value}
//                       </span>
//                     </span>
//                     <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
//                       {c.note}
//                     </span>
//                   </span>
//                   <ArrowUpRight
//                     size={17}
//                     className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
//                   />
//                 </a>
//               ))}
//             </div>

//             <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
//               <span className="relative flex size-2">
//                 <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
//                 <span className="relative size-2 rounded-full bg-lime-acid" />
//               </span>
//               {profile.status}
//             </div>
//           </div>

//           {/* form */}
//           <Reveal delay={0.15}>
//             <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-7">
//               <div className="dot-grid-dark absolute inset-0 opacity-40" />
//               <AnimatePresence mode="wait">
//                 {!sent ? (
//                   <motion.form
//                     key="form"
//                     onSubmit={onSubmit}
//                     noValidate
//                     exit={{ opacity: 0, y: -16 }}
//                     transition={{ duration: 0.4, ease: EASE }}
//                     className="relative"
//                   >
//                     <div className="space-y-5">
//                       <div className="grid gap-5 sm:grid-cols-2">
//                         <label className="block">
//                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
//                             Your name
//                           </span>
//                           <input
//                             value={form.name}
//                             onChange={(e) => setForm({ ...form, name: e.target.value })}
//                             className={cn(field, errors.name && "border-flare")}
//                           />
//                           {errors.name && (
//                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
//                               {errors.name}
//                             </span>
//                           )}
//                         </label>
//                         <label className="block">
//                           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
//                             Email
//                           </span>
//                           <input
//                             value={form.email}
//                             onChange={(e) => setForm({ ...form, email: e.target.value })}
//                             className={cn(field, errors.email && "border-flare")}
//                           />
//                           {errors.email && (
//                             <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
//                               {errors.email}
//                             </span>
//                           )}
//                         </label>
//                       </div>

//                       <label className="block">
//                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
//                           Subject
//                         </span>
//                         <input
//                           value={form.subject}
//                           onChange={(e) => setForm({ ...form, subject: e.target.value })}
//                           className={cn(field, errors.subject && "border-flare")}
//                         />
//                         {errors.subject && (
//                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
//                             {errors.subject}
//                           </span>
//                         )}
//                       </label>

//                       <label className="block">
//                         <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
//                           The brief
//                         </span>
//                         <textarea
//                           rows={3}
//                           value={form.message}
//                           onChange={(e) => setForm({ ...form, message: e.target.value })}
//                           className={cn(field, "resize-none", errors.message && "border-flare")}
//                         />
//                         {errors.message && (
//                           <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
//                             {errors.message}
//                           </span>
//                         )}
//                       </label>
//                     </div>

//                     <div className="mt-6 flex flex-col gap-3 border-t border-paper-300/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
//                       <Magnetic strength={0.25}>
//                         <button
//                           type="submit"
//                           className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50"
//                         >
//                           Send Message
//                           <Send
//                             size={15}
//                             className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                           />
//                         </button>
//                       </Magnetic>
//                       {/* <p className="max-w-[26ch] font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-paper-300/40 sm:text-right">
//                         then send it via LinkedIn or copy it to your inbox
//                       </p> */}
//                     </div>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     key="sent"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.55, ease: EASE }}
//                     className="relative py-2"
//                   >
//                     <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
//                       <Check size={22} strokeWidth={3} />
//                     </span>
//                     <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
//                       Nice — it's drafted, {form.name.split(" ")[0]}.
//                     </h3>
//                     <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
//                       Copy the brief below and fire it over on LinkedIn (fastest), or open my GitHub
//                       and say hi there. I read both.
//                     </p>

//                     <pre className="mt-5 max-h-[190px] overflow-auto whitespace-pre-wrap rounded-2xl border border-paper-300/12 bg-ink-950/70 p-4 font-mono text-[11.5px] leading-relaxed text-paper-200/80">
//                       {summary}
//                     </pre>

//                     <div className="mt-5 flex flex-wrap gap-2.5">
//                       <button
//                         onClick={copy}
//                         className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
//                       >
//                         {copied ? <Check size={13} /> : <Copy size={13} />}
//                         {copied ? "copied to clipboard" : "copy brief"}
//                       </button>
//                       <a
//                         href={profile.linkedin}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="inline-flex items-center gap-2 rounded-full border border-paper-300/25 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-100 transition-colors hover:border-paper-100"
//                       >
//                         <LinkedinIcon className="size-3.5" /> send on linkedin
//                       </a>
//                       <button
//                         onClick={() => {
//                           setSent(false);
//                           setForm({ name: "", email: "", message: "", intent: "Frontend build" });
//                         }}
//                         className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/55 transition-colors hover:text-paper-100"
//                       >
//                         <Sparkles size={13} /> write another
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Send, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { EASE, profile } from "@/lib/data";
import { Magnetic, Reveal, SectionLabel } from "@/components/ui";
import { cn } from "@/utils/cn";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Tell me who you are";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = "Needs a valid email";
    if (form.subject.trim().length < 3) e.subject = "Add a short subject";
    if (form.message.trim().length < 12) e.message = "A little more detail helps";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0 || sending) return;

    setSending(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");
      setSent(true);
    } catch {
  setSubmitError("Message could not be sent. Please try again in a moment.");
}
  };

  const field =
    "peer mt-2 w-full rounded-xl border border-paper-300/15 bg-paper-50/[0.035] px-4 py-3.5 font-sans text-[15px] text-paper-50 outline-none transition-all duration-300 focus:border-lime-acid/70 focus:bg-paper-50/[0.06] focus:shadow-[0_0_0_3px_rgba(205,245,100,0.08)]";

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
      <div className="grid-lines-dark absolute inset-0 opacity-80" />
      <div
        className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle at 30% 30%, #2b39f6, transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* pitch */}
          <div>
            <SectionLabel index="05" label="Contact" dark />
            <h2 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-[-0.05em] text-paper-50 sm:text-[9vw] lg:text-[5.8vw]">
              <span className="block">Have an idea</span>
              <span className="block text-stroke-paper">worth building?</span>
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[44ch] text-[15.5px] leading-relaxed text-paper-200/70">
                Send a brief — what it does, who it's for, when it's due. I'll reply with a plan,
                a timeline and an honest yes or no.
              </p>
            </Reveal>

            <div className="mt-9 space-y-2.5">
              {[
                {
                  label: "GitHub",
                  value: `/${profile.githubHandle}`,
                  href: profile.github,
                  Icon: GithubIcon,
                  note: "code, repos, READMEs",
                },
                {
                  label: "LinkedIn",
                  value: `/${profile.linkedinHandle}`,
                  href: profile.linkedin,
                  Icon: LinkedinIcon,
                  note: "roles, referrals, DMs",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-paper-300/12 bg-ink-900/50 px-4 py-3.5 transition-all duration-400 hover:-translate-y-0.5 hover:border-lime-acid/50 hover:bg-ink-900"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-paper-50/[0.07] text-paper-100 transition-colors group-hover:bg-lime-acid group-hover:text-ink-900">
                    <c.Icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[16px] font-bold text-paper-50">
                      {c.label}{" "}
                      <span className="font-mono text-[12px] font-normal text-lime-acid">
                        {c.value}
                      </span>
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-paper-300/45">
                      {c.note}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-paper-300/40 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper-50"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/55">
              <span className="relative flex size-2">
                <span className="absolute size-full animate-ping rounded-full bg-lime-acid/70" />
                <span className="relative size-2 rounded-full bg-lime-acid" />
              </span>
              {profile.status}
            </div>
          </div>

          {/* form */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[26px] border border-paper-300/12 bg-ink-900/70 p-5 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-7">
              <div className="dot-grid-dark absolute inset-0 opacity-40" />
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="relative"
                  >
                    <div className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
                            Your name
                          </span>
                          <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={cn(field, errors.name && "border-flare")}
                          />
                          {errors.name && (
                            <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
                              {errors.name}
                            </span>
                          )}
                        </label>
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
                            Email
                          </span>
                          <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={cn(field, errors.email && "border-flare")}
                          />
                          {errors.email && (
                            <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
                              {errors.email}
                            </span>
                          )}
                        </label>
                      </div>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
                          Subject
                        </span>
                        <input
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className={cn(field, errors.subject && "border-flare")}
                        />
                        {errors.subject && (
                          <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
                            {errors.subject}
                          </span>
                        )}
                      </label>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-300/45">
                          The brief
                        </span>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className={cn(field, "resize-none", errors.message && "border-flare")}
                        />
                        {errors.message && (
                          <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-flare">
                            {errors.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-paper-300/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <Magnetic strength={0.25}>
                        <button
                          type="submit"
                          disabled={sending}
                          className="group inline-flex items-center gap-2 rounded-full bg-lime-acid px-6 py-3.5 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-paper-50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {sending ? "Sending..." : "Send Message"}
                          <Send
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </button>
                      </Magnetic>
                      {/* <p className="max-w-[26ch] font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-paper-300/40 sm:text-right">
                        then send it via LinkedIn or copy it to your inbox
                      </p> */}
                    </div>
                    {submitError && (
                      <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-flare">
                        {submitError}
                      </p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="relative py-2"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-lime-acid text-ink-900">
                      <Check size={22} strokeWidth={3} />
                    </span>
                    <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-paper-50">
                      Message sent, {form.name.split(" ")[0]}.
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-paper-200/70">
                      Thanks for reaching out. Your enquiry has reached my inbox and I’ll reply as
                      soon as possible.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      <button
                        onClick={() => {
                          setSent(false);
                          setForm({ name: "", email: "", subject: "", message: "" });
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
                      >
                        <Sparkles size={13} /> write another
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
