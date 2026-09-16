// // // import { motion } from "framer-motion";
// // // import { ArrowUp, Heart } from "lucide-react";
// // // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // // import { Marquee } from "@/components/ui";
// // // import { profile, projects } from "@/lib/data";

// // // const year = new Date().getFullYear();

// // // export default function Footer() {
// // //   return (
// // //     <footer className="relative overflow-hidden border-t border-paper-300/10 bg-ink-950 text-paper-100">
// // //       <div className="border-b border-paper-300/10 py-5">
// // //         <Marquee
// // //           items={["Vraj Pandya", "Frontend Engineer", "React + TypeScript", "Ahmedabad", "Available 2026"]}
// // //           duration={38}
// // //           reverse
// // //           separator="—"
// // //           itemClassName="font-display text-[9vw] font-extrabold uppercase leading-none tracking-[-0.04em] text-paper-50/[0.14] hover:text-lime-acid sm:text-[6vw]"
// // //         />
// // //       </div>

// // //       <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
// // //         <div>
// // //           <h2 className="font-display text-[34px] leading-[0.95] tracking-[-0.04em] text-paper-50 sm:text-[44px]">
// // //             Let's build the
// // //             <br />
// // //             <span className="text-lime-acid">last 5%.</span>
// // //           </h2>
// // //           <a
// // //             href="#contact"
// // //             className="group mt-6 inline-flex items-center gap-2 rounded-full bg-paper-50 px-5 py-3 font-display text-[15px] font-bold text-ink-900 transition-colors hover:bg-lime-acid"
// // //           >
// // //             Start a project
// // //             <span className="grid size-5 place-items-center rounded-full bg-ink-900 text-paper-50 transition-transform duration-300 group-hover:rotate-45">
// // //               <ArrowUp size={11} />
// // //             </span>
// // //           </a>
// // //         </div>

// // //         <div>
// // //           <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/45">
// // //             Live builds
// // //           </p>
// // //           <ul className="mt-4 space-y-2.5">
// // //             {projects.map((p) => (
// // //               <li key={p.id}>
// // //                 <a
// // //                   href={p.live}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   className="text-[14px] text-paper-200/75 underline-offset-4 transition-colors hover:text-paper-50 hover:underline"
// // //                 >
// // //                   {p.name}
// // //                 </a>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         <div>
// // //           <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/45">
// // //             Elsewhere
// // //           </p>
// // //           <div className="mt-4 flex gap-2">
// // //             <a
// // //               href={profile.github}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
// // //               aria-label="GitHub"
// // //             >
// // //               <GithubIcon className="size-4" />
// // //             </a>
// // //             <a
// // //               href={profile.linkedin}
// // //               target="_blank"
// // //               rel="noreferrer"
// // //               className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
// // //               aria-label="LinkedIn"
// // //             >
// // //               <LinkedinIcon className="size-4" />
// // //             </a>
// // //           </div>
// // //           <p className="mt-5 max-w-[26ch] text-[12.5px] leading-relaxed text-paper-300/45">
// // //             Built from scratch with React, Tailwind CSS and Framer Motion. Photography via Pexels.
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-paper-300/10 px-5 py-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/45 sm:px-8 lg:px-10">
// // //         <span>© {year} {profile.name}</span>
// // //         <span className="flex items-center gap-1.5">
// // //           Made with <Heart size={11} className="text-flare" /> in Ahmedabad
// // //         </span>
// // //         <motion.button
// // //           whileTap={{ scale: 0.94 }}
// // //           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // //           className="flex items-center gap-1.5 transition-colors hover:text-lime-acid"
// // //         >
// // //           Back to top <ArrowUp size={11} />
// // //         </motion.button>
// // //       </div>
// // //     </footer>
// // //   );
// // // }
// // import { motion } from "framer-motion";
// // import { ArrowUp, Heart } from "lucide-react";
// // import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// // import { Marquee } from "@/components/ui";
// // import { profile } from "@/lib/data";

// // const year = new Date().getFullYear();

// // export default function Footer() {
// //   return (
// //     <footer className="relative overflow-hidden border-t border-paper-300/10 bg-ink-950 text-paper-100">
// //       <div className="border-b border-paper-300/10 py-5">
// //         <Marquee
// //           items={["Vraj Pandya", "Frontend Engineer", "React + TypeScript", "Ahmedabad", "Available 2026"]}
// //           duration={38}
// //           reverse
// //           separator="—"
// //           itemClassName="font-display text-[9vw] font-extrabold uppercase leading-none tracking-[-0.04em] text-paper-50/[0.14] hover:text-lime-acid sm:text-[6vw]"
// //         />
// //       </div>

// //       <div className="mx-auto flex max-w-[1240px] justify-end px-5 py-12 sm:px-8 lg:px-10">
// //         <div className="w-full max-w-sm">
// //           <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-paper-300/45">
// //             Elsewhere
// //           </p>
// //           <div className="mt-4 flex gap-2">
// //             <a
// //               href={profile.github}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
// //               aria-label="GitHub"
// //             >
// //               <GithubIcon className="size-4" />
// //             </a>
// //             <a
// //               href={profile.linkedin}
// //               target="_blank"
// //               rel="noreferrer"
// //               className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
// //               aria-label="LinkedIn"
// //             >
// //               <LinkedinIcon className="size-4" />
// //             </a>
// //           </div>
// //           <p className="mt-5 max-w-[26ch] text-[12.5px] leading-relaxed text-paper-300/45">
// //             Built from scratch with React, Tailwind CSS and Framer Motion. Photography via Pexels.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-paper-300/10 px-5 py-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/45 sm:px-8 lg:px-10">
// //         <span>© {year} {profile.name}</span>
// //         <span className="flex items-center gap-1.5">
// //           Made with <Heart size={11} className="text-flare" /> in Ahmedabad
// //         </span>
// //         <motion.button
// //           whileTap={{ scale: 0.94 }}
// //           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// //           className="flex items-center gap-1.5 transition-colors hover:text-lime-acid"
// //         >
// //           Back to top <ArrowUp size={11} />
// //         </motion.button>
// //       </div>
// //     </footer>
// //   );
// // }
// import { motion } from "framer-motion";
// import { ArrowUp, Heart, Instagram } from "lucide-react";
// import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
// import { Marquee } from "@/components/ui";
// import { profile } from "@/lib/data";

// const year = new Date().getFullYear();

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden border-t border-paper-300/10 bg-ink-950 text-paper-100">
//       {/* <div className="border-b border-paper-300/10 py-5">
//         <Marquee
//           items={["Vraj Pandya", "Full-Stack Developer", "React + TypeScript", "Ahmedabad", "Available 2026"]}
//           duration={38}
//           reverse
//           separator="—"
//           itemClassName="font-display text-[9vw] font-extrabold uppercase leading-none tracking-[-0.04em] text-paper-50/[0.14] hover:text-lime-acid sm:text-[6vw]"
//         />
//       </div> */}

//       <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
//         <div className="flex items-center gap-4">
//           <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime-acid font-display text-sm font-extrabold text-ink-950">
//             VP
//           </span>
//           <div>
//             <p className="font-display text-xl font-bold text-paper-50">{profile.name}</p>
//             <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper-300/45">
//               Full-Stack Developer · Ahmedabad
//             </p>
//           </div>
//         </div>

//         {/* <p className="max-w-[34ch] text-[12.5px] leading-relaxed text-paper-300/45 md:text-center">
//           Built with React, Tailwind CSS and Framer Motion.
//         </p> */}

//         <div className="flex items-center gap-3">
//           <p className="mr-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper-300/45">
//             Elsewhere
//           </p>
//           <div className="flex gap-2">
//             <a
//               href={profile.github}
//               target="_blank"
//               rel="noreferrer"
//               className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
//               aria-label="GitHub"
//             >
//               <GithubIcon className="size-4" />
//             </a>
//             <a
//               href={profile.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="grid size-10 place-items-center rounded-xl border border-paper-300/15 text-paper-100 transition-colors hover:border-lime-acid hover:bg-lime-acid hover:text-ink-900"
//               aria-label="LinkedIn"
//             >
//               <LinkedinIcon className="size-4" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-paper-300/10 px-5 py-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-300/45 sm:px-8 lg:px-10">
//         <span>© {year} {profile.name}</span>
//         <span className="flex items-center gap-1.5">
//           Made with <Heart size={11} className="text-flare" /> in Ahmedabad
//         </span>
//         <motion.button
//           whileTap={{ scale: 0.94 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="flex items-center gap-1.5 transition-colors hover:text-lime-acid"
//         >
//           Back to top <ArrowUp size={11} />
//         </motion.button>
//       </div>
//     </footer>
//   );
// }
import { motion } from "framer-motion";
import { ArrowUp, Heart, Instagram } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper-300/10 bg-ink-950 text-paper-100">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime-acid font-display text-sm font-extrabold text-ink-950">
            VP
          </span>
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
              <Instagram className="size-4" />
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
