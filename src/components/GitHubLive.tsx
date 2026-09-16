// import { AnimatePresence, motion } from "framer-motion";
// import { AlertCircle, GitBranch, Star, TrendingUp } from "lucide-react";
// import { useEffect, useState } from "react";
// import { GithubIcon } from "@/components/BrandIcons";
// import { EASE, profile } from "@/lib/data";
// import { SectionLabel } from "@/components/ui";

// type Repo = {
//   name: string;
//   description: string | null;
//   language: string | null;
//   stargazers_count: number;
//   forks_count: number;
//   html_url: string;
//   pushed_at: string;
//   topics?: string[];
// };

// type Owner = {
//   public_repos: number;
//   followers: number;
//   following: number;
//   name: string | null;
//   bio: string | null;
// };

// const langColor: Record<string, string> = {
//   TypeScript: "#3178c6",
//   JavaScript: "#f1e05a",
//   HTML: "#e34c26",
//   CSS: "#563d7c",
//   Python: "#3572A5",
//   Java: "#b07219",
//   "C#": "#178600",
//   C: "#555555",
//   PHP: "#4F5D95",
//   Shell: "#89e051",
// };

// function relTime(iso: string) {
//   const diff = Date.now() - new Date(iso).getTime();
//   const d = Math.floor(diff / 86_400_000);
//   if (d < 1) return "today";
//   if (d < 31) return `${d}d ago`;
//   const m = Math.floor(d / 30);
//   if (m < 12) return `${m}mo ago`;
//   return `${Math.floor(m / 12)}y ago`;
// }

// export default function GitHubLive() {
//   const [repos, setRepos] = useState<Repo[]>([]);
//   const [owner, setOwner] = useState<Owner | null>(null);
//   const [state, setState] = useState<"loading" | "ready" | "error">("loading");

//   useEffect(() => {
//     const ctrl = new AbortController();
//     (async () => {
//       try {
//         const [r1, r2] = await Promise.all([
//           fetch(`https://api.github.com/users/${profile.githubHandle}`, { signal: ctrl.signal }),
//           fetch(
//             `https://api.github.com/users/${profile.githubHandle}/repos?sort=updated&per_page=6`,
//             { signal: ctrl.signal },
//           ),
//         ]);
//         if (!r1.ok || !r2.ok) throw new Error("github");
//         const [user, list] = await Promise.all([r1.json(), r2.json()]);
//         setOwner(user);
//         setRepos(
//           (Array.isArray(list) ? list : [])
//             .filter((r: Repo) => !r.name.toLowerCase().includes("profile"))
//             .slice(0, 6),
//         );
//         setState("ready");
//       } catch (err) {
//         if ((err as Error).name !== "AbortError") setState("error");
//       }
//     })();
//     return () => ctrl.abort();
//   }, []);

//   return (
//     <section id="github" className="relative overflow-hidden bg-ink-950 py-16 text-paper-100 sm:py-20">
//       <div className="dot-grid-dark absolute inset-0 opacity-40" />
//       <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
//         <div className="flex flex-wrap items-end justify-between gap-6">
//           <div>
//             <SectionLabel index="02b" label="Live from GitHub" dark />
//             <h2 className="mt-4 font-display text-[8vw] leading-[0.95] tracking-[-0.04em] text-paper-50 sm:text-[4.4vw]">
//               github.com/<span className="text-lime-acid">{profile.githubHandle}</span>
//             </h2>
//           </div>
//           <div className="flex items-center gap-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-300/50">
//             <span className="flex items-center gap-1.5">
//               <GitBranch size={13} className="text-teal-glow" />
//               {state === "ready" ? `${owner?.public_repos ?? repos.length} public repos` : "syncing…"}
//             </span>
//             <span className="hidden items-center gap-1.5 sm:flex">
//               <TrendingUp size={13} className="text-lime-acid" />
//               {owner ? `${owner.followers} followers` : "—"}
//             </span>
//           </div>
//         </div>

//         <div className="mt-8 min-h-[168px]">
//           {state === "loading" && (
//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-[118px] animate-pulse rounded-[18px] border border-paper-300/10 bg-paper-50/[0.03]"
//                   style={{ animationDelay: `${i * 90}ms` }}
//                 />
//               ))}
//             </div>
//           )}

//           {state === "error" && (
//             <div className="flex flex-wrap items-center gap-4 rounded-[18px] border border-paper-300/15 bg-paper-50/[0.03] px-5 py-6">
//               <AlertCircle size={18} className="text-flare" />
//               <p className="flex-1 text-[14px] text-paper-200/70">
//                 Live feed is paused (GitHub API or network). The profile itself is always open.
//               </p>
//               <a
//                 href={profile.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-lime-acid"
//               >
//                 <GithubIcon className="size-3.5" /> open profile
//               </a>
//             </div>
//           )}

//           {state === "ready" && (
//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//               <AnimatePresence>
//                 {repos.map((r, i) => (
//                   <motion.a
//                     key={r.name}
//                     href={r.html_url}
//                     target="_blank"
//                     rel="noreferrer"
//                     initial={{ opacity: 0, y: 22 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-6%" }}
//                     transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
//                     whileHover={{ y: -5 }}
//                     className="group flex min-h-[118px] flex-col justify-between rounded-[18px] border border-paper-300/12 bg-paper-50/[0.03] p-4 transition-colors hover:border-lime-acid/45 hover:bg-paper-50/[0.06]"
//                   >
//                     <div>
//                       <div className="flex items-start justify-between gap-2">
//                         <h3 className="font-display text-[16px] font-bold leading-tight break-words text-paper-50 group-hover:text-lime-acid">
//                           {r.name.replace(/-/g, " ")}
//                         </h3>
//                         {r.stargazers_count > 0 && (
//                           <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-paper-300/60">
//                             <Star size={11} /> {r.stargazers_count}
//                           </span>
//                         )}
//                       </div>
//                       <p className="mt-2 line-clamp-2 text-[12.5px] leading-snug text-paper-300/55">
//                         {r.description ?? "Source code & experiments — open the repo to see the build."}
//                       </p>
//                     </div>
//                     <div className="mt-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-300/45">
//                       {r.language && (
//                         <span className="flex items-center gap-1.5">
//                           <span
//                             className="size-2 rounded-full"
//                             style={{ background: langColor[r.language] ?? "#cdf564" }}
//                           />
//                           {r.language}
//                         </span>
//                       )}
//                       <span>· {relTime(r.pushed_at)}</span>
//                     </div>
//                   </motion.a>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
