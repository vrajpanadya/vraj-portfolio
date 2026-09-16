// // // // export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
// // // // export const SPRING = { type: "spring", stiffness: 320, damping: 30, mass: 0.7 } as const;

// // // // export const profile = {
// // // //   name: "Vraj Pandya",
// // // //   firstName: "Vraj",
// // // //   lastName: "Pandya",
// // // //   role: "Frontend Engineer",
// // // //   roleSub: "Full-stack developer",
// // // //   location: "Ahmedabad, Gujarat · IN",
// // // //   status: "Open to internships & freelance builds",
// // // //   tagline: "I turn product ideas into fast, accessible interfaces.",
// // // //   blurb:
// // // //     "React, TypeScript and a database that actually matches the data shape. I build production-ready front ends, wire them to real back ends, and ship them on Vercel — polished down to the last hover state.",
// // // //   github: "https://github.com/vrajpanadya",
// // // //   githubHandle: "vrajpanadya",
// // // //   linkedin: "https://www.linkedin.com/in/vraj-pandya-197217419/",
// // // //   linkedinHandle: "vraj-pandya",
// // // // };

// // // // export const stats = [
// // // //   { value: "03", label: "Products shipped", note: "live on custom domains" },
// // // //   { value: "12", label: "Technologies", note: "front end → data layer" },
// // // //   { value: "2026", label: "B.Sc CS graduation", note: "Gujarat University" },
// // // //   { value: "∞", label: "Coffees per deploy", note: "Ahmedabad, IST" },
// // // // ];

// // // // export const marqueeItems = [
// // // //   "React JS",
// // // //   "TypeScript",
// // // //   "JavaScript",
// // // //   "Tailwind CSS",
// // // //   "HTML5",
// // // //   "CSS3",
// // // //   "MongoDB",
// // // //   "Firebase",
// // // //   "MySQL",
// // // //   "Postman",
// // // //   "Power BI",
// // // //   "Git & GitHub",
// // // //   "Vercel",
// // // //   "Python",
// // // //   "Java",
// // // //   "C#",
// // // //   "PHP",
// // // //   "C",
// // // // ];

// // // // export type Skill = { name: string; level: number; note: string };

// // // // export const skillGroups = [
// // // //   {
// // // //     id: "frontend",
// // // //     label: "Frontend",
// // // //     kicker: "Where the product meets the person",
// // // //     icon: "Code2",
// // // //     tint: "cobalt",
// // // //     skills: [
// // // //       { name: "React JS", level: 92, note: "Hooks, router, context, custom state machines" },
// // // //       { name: "JavaScript (ES6+)", level: 90, note: "Async flows, modules, DOM performance" },
// // // //       { name: "HTML5", level: 95, note: "Semantic markup, accessibility, meta & SEO" },
// // // //       { name: "CSS3", level: 90, note: "Flexbox, grid, custom properties, keyframes" },
// // // //       { name: "TypeScript", level: 82, note: "Typed props, generics, API contracts" },
// // // //       { name: "Tailwind CSS", level: 88, note: "Design tokens, responsive systems, dark mode" },
// // // //     ] as Skill[],
// // // //   },
// // // //   {
// // // //     id: "backend",
// // // //     label: "Backend & Data",
// // // //     kicker: "Storage, schemas, and the truth",
// // // //     icon: "Database",
// // // //     tint: "teal",
// // // //     skills: [
// // // //       { name: "MongoDB", level: 85, note: "Aggregation pipelines, Compass, Mongoose models" },
// // // //       { name: "MySQL", level: 83, note: "Joins, indexing, normalised relational schema" },
// // // //       { name: "Firebase", level: 87, note: "Auth, Firestore, hosting, real-time reads" },
// // // //       { name: "REST APIs", level: 84, note: "Postman-tested endpoints, error handling" },
// // // //       { name: "Data modelling", level: 80, note: "Choosing SQL vs NoSQL per use case" },
// // // //     ] as Skill[],
// // // //   },
// // // //   {
// // // //     id: "languages",
// // // //     label: "Languages",
// // // //     kicker: "Fundamentals from the classroom up",
// // // //     icon: "Braces",
// // // //     tint: "flare",
// // // //     skills: [
// // // //       { name: "C", level: 80, note: "Pointers, memory, data structures lab" },
// // // //       { name: "Java", level: 85, note: "OOP, collections, JDBC, Swing utilities" },
// // // //       { name: "Python", level: 86, note: "Scripting, automation, pandas for analytics" },
// // // //       { name: "C#", level: 74, note: ".NET console & WinForms projects" },
// // // //       { name: "PHP", level: 72, note: "Form handling, sessions, MySQL glue" },
// // // //       { name: "JavaScript", level: 90, note: "Day-one language, browser + Node side" },
// // // //       { name: "TypeScript", level: 82, note: "Preferred for anything React" },
// // // //     ] as Skill[],
// // // //   },
// // // //   {
// // // //     id: "tools",
// // // //     label: "Tools",
// // // //     kicker: "The workflow that keeps shipping fast",
// // // //     icon: "Wrench",
// // // //     tint: "lime",
// // // //     skills: [
// // // //       { name: "Git & GitHub", level: 90, note: "Branching, PR reviews, actions for preview builds" },
// // // //       { name: "VS Code", level: 94, note: "Custom setup, snippets, eslint + prettier pipeline" },
// // // //       { name: "Postman", level: 86, note: "Collections, environments, contract checks" },
// // // //       { name: "MongoDB Compass", level: 82, note: "Query profiler, index tuning, schema explore" },
// // // //       { name: "Power BI", level: 78, note: "DAX measures, KPI dashboards, data stories" },
// // // //       { name: "Vercel", level: 90, note: "Preview deploys, domains, edge caching" },
// // // //     ] as Skill[],
// // // //   },
// // // // ];

// // // // export type Project = {
// // // //   id: string;
// // // //   index: string;
// // // //   name: string;
// // // //   client: string;
// // // //   year: string;
// // // //   live: string;
// // // //   liveLabel: string;
// // // //   role: string;
// // // //   summary: string;
// // // //   bullets: string[];
// // // //   stack: string[];
// // // //   image: string;
// // // //   credit: string;
// // // //   metrics: { label: string; value: string }[];
// // // //   accent: "cobalt" | "lime" | "flare";
// // // // };

// // // // export const projects: Project[] = [
// // // //   {
// // // //     id: "kotak",
// // // //     index: "01",
// // // //     name: "Kotak Associates",
// // // //     client: "Banking & investment distribution",
// // // //     year: "2025",
// // // //     live: "https://kotak-associates-e5rq.vercel.app/",
// // // //     liveLabel: "kotak-associates.vercel.app",
// // // //     role: "Frontend developer · UI system & client journeys",
// // // //     summary:
// // // //       "A trust-first marketing platform for a financial advisory practice — service explainers, scheme discovery and an enquiry funnel that survives real user traffic.",
// // // //     bullets: [
// // // //       "Responsive layout system with a design-token palette shared across every section.",
// // // //       "Enquiry flow with inline validation, so advisors receive clean, structured leads.",
// // // //       "Performance pass: lazy media, compressed assets and a 100/100 accessibility audit on key pages.",
// // // //     ],
// // // //     stack: ["React JS", "Tailwind CSS", "JavaScript", "Vercel"],
// // // //     image: "/projects/kotak-associates.jpg",
// // // //     credit: "Live project screenshot",
// // // //     metrics: [
// // // //       { label: "Pages", value: "9" },
// // // //       { label: "Enquiry steps", value: "3" },
// // // //       { label: "LCP", value: "1.4s" },
// // // //     ],
// // // //     accent: "cobalt",
// // // //   },
// // // //   {
// // // //     id: "rathore",
// // // //     index: "02",
// // // //     name: "Rathore Vlogs",
// // // //     client: "Travel & storytelling creator brand",
// // // //     year: "2025",
// // // //     live: "https://rathore-vlogs.vercel.app/",
// // // //     liveLabel: "rathore-vlogs.vercel.app",
// // // //     role: "Full-stack developer · SPA architecture & media experience",
// // // //     summary:
// // // //       "A hash-routed single-page experience for a travel vlog channel: cinematic hero reel, episode grid, category filters and a watch-first layout that loads in a blink on mobile data.",
// // // //     bullets: [
// // // //       "Client-side routing with animated page transitions for a native-app feel.",
// // // //       "Media pipeline with poster-first loading, so no layout shift while videos resolve.",
// // // //       "Category + search filtering handled entirely in state for instant results.",
// // // //     ],
// // // //     stack: ["React JS", "React Router", "CSS3", "Firebase", "Vercel"],
// // // //     image: "/projects/rathore-vlogs.jpg",
// // // //     credit: "Live project screenshot",
// // // //     metrics: [
// // // //       { label: "Routes", value: "SPA" },
// // // //       { label: "Transitions", value: "60fps" },
// // // //       { label: "Mobile", value: "100%" },
// // // //     ],
// // // //     accent: "flare",
// // // //   },
// // // //   {
// // // //     id: "vishal",
// // // //     index: "03",
// // // //     name: "Vishal Trading Company",
// // // //     client: "Wholesale & industrial supply storefront",
// // // //     year: "2026",
// // // //     live: "https://vishal-trading-company.shop/",
// // // //     liveLabel: "vishal-trading-company.shop",
// // // //     role: "Frontend + data · catalogue, cart and custom domain",
// // // //     summary:
// // // //       "A live commerce site on a real .shop domain: product catalogue with category browsing, cart state, and a direct-to-WhatsApp enquiry handoff built for buyers who never fill a long form.",
// // // //     bullets: [
// // // //       "Catalogue driven by a database so the owner edits prices without touching code.",
// // // //       "Cart + enquiry builder that formats a ready-to-send order message.",
// // // //       "Custom domain, SSL and automated Vercel deploys straight from the main branch.",
// // // //     ],
// // // //     stack: ["React JS", "MongoDB", "TypeScript", "REST", "Vercel"],
// // // //     image: "/projects/vishal-trading-company.jpg",
// // // //     credit: "Live project screenshot",
// // // //     metrics: [
// // // //       { label: "Catalogue", value: "DB-driven" },
// // // //       { label: "Checkout", value: "WhatsApp" },
// // // //       { label: "Domain", value: ".shop" },
// // // //     ],
// // // //     accent: "lime",
// // // //   },
// // // // ];

// // // // export const education = [
// // // //   {
// // // //     period: "Currently pursuing",
// // // //     live: true,
// // // //     title: "Master of Computer Applications (MCA)",
// // // //     school: "Shree Swaminarayan Institute of Technology",
// // // //     place: "Gujarat, IN",
// // // //     detail:
// // // //       "Advanced software engineering, database internals, full-stack architecture and analytics — the layer that turns a B.Sc foundation into production-grade engineering.",
// // // //     tags: ["System design", "Advanced DBMS", "Web architecture"],
// // // //   },
// // // //   {
// // // //     period: "Jul 2023 — May 2026",
// // // //     live: false,
// // // //     title: "Bachelor of Science in Computer Science",
// // // //     school: "Gujarat University",
// // // //     place: "Ahmedabad, IN",
// // // //     detail:
// // // //       "Core computer science: data structures, algorithms, OOP, DBMS, operating systems and software engineering — with lab work in C, Java, Python and C#.",
// // // //     tags: ["DSA", "DBMS", "OOP", "Operating Systems"],
// // // //   },
// // // //   {
// // // //     period: "Jul 2022 — Mar 2023",
// // // //     live: false,
// // // //     title: "Higher Secondary Certificate (HSC)",
// // // //     school: "Madhav Vidya Vihar",
// // // //     place: "Ahmedabad, IN",
// // // //     detail:
// // // //       "Science stream — mathematics and logic foundation that made the jump into algorithms and programming feel like play instead of work.",
// // // //     tags: ["Mathematics", "Logic", "Science stream"],
// // // //   },
// // // // ];

// // // // export const principles = [
// // // //   {
// // // //     n: "01",
// // // //     title: "Interface before feature",
// // // //     copy: "If the interaction is unclear, the feature doesn't exist. I sketch states — empty, loading, error — before I sketch screens.",
// // // //   },
// // // //   {
// // // //     n: "02",
// // // //     title: "Ship small, ship often",
// // // //     copy: "Every branch gets a Vercel preview. Feedback in minutes beats feedback in milestones.",
// // // //   },
// // // //   {
// // // //     n: "03",
// // // //     title: "Pick the boring database",
// // // //     copy: "MongoDB for documents that move, MySQL for relationships that must not lie, Firebase when auth and realtime buy me a week.",
// // // //   },
// // // //   {
// // // //     n: "04",
// // // //     title: "Motion is information",
// // // //     copy: "Framer Motion for transitions that explain where a view came from — never decoration for decoration's sake.",
// // // //   },
// // // // ];

// // // // export const timeline = [
// // // //   {
// // // //     year: "2022",
// // // //     title: "First lines of code",
// // // //     copy: "HSC at Madhav Vidya Vihar. C on a lab machine, a lot of printf, and the realisation that logic beats memorising.",
// // // //   },
// // // //   {
// // // //     year: "2023",
// // // //     title: "B.Sc CS @ Gujarat University",
// // // //     copy: "Data structures, Java and Python. Started building small tools for classmates — and fell for the front end.",
// // // //   },
// // // //   {
// // // //     year: "2024",
// // // //     title: "React, properly",
// // // //     copy: "Component thinking, hooks, state. Freelance pages for local businesses, deployed on Vercel with real domains.",
// // // //   },
// // // //   {
// // // //     year: "2025",
// // // //     title: "Full-stack, in production",
// // // //     copy: "MongoDB + Firebase behind React apps. Postman collections, Compass profiling, and clients who came back.",
// // // //   },
// // // //   {
// // // //     year: "2026",
// // // //     title: "MCA & deeper engineering",
// // // //     copy: "Shree Swaminarayan Institute of Technology — system design, analytics with Power BI, and interfaces at scale.",
// // // //   },
// // // // ];

// // // // export const services = [
// // // //   {
// // // //     title: "React front ends",
// // // //     copy: "Component systems, design tokens, motion, and a build that stays fast as the app grows.",
// // // //     icon: "Component",
// // // //     deliverables: ["Design system", "Reusable UI kit", "State architecture"],
// // // //   },
// // // //   {
// // // //     title: "Landing & marketing sites",
// // // //     copy: "High-converting pages for brands and advisory firms — responsive, accessible, SEO-tidy.",
// // // //     icon: "Rocket",
// // // //     deliverables: ["Pixel-perfect sections", "Analytics & meta", "90+ Lighthouse"],
// // // //   },
// // // //   {
// // // //     title: "Full-stack web apps",
// // // //     copy: "Auth, CRUD, dashboards and APIs wired to MongoDB, MySQL or Firebase.",
// // // //     icon: "Layers",
// // // //     deliverables: ["REST / Firestore", "Admin panels", "Deploy pipeline"],
// // // //   },
// // // //   {
// // // //     title: "Data & dashboards",
// // // //     copy: "Clean SQL, aggregation pipelines and Power BI reports that answer a real question.",
// // // //     icon: "BarChart3",
// // // //     deliverables: ["KPI modelling", "DAX measures", "Visual stories"],
// // // //   },
// // // // ];
// // // export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
// // // export const SPRING = { type: "spring", stiffness: 320, damping: 30, mass: 0.7 } as const;

// // // export const profile = {
// // //   name: "Vraj Pandya",
// // //   firstName: "Vraj",
// // //   lastName: "Pandya",
// // //   role: "Full-Stack Developer",
// // //   roleSub: "Full-stack developer",
// // //   location: "Ahmedabad, Gujarat · IN",
// // //   status: "Open to jobs, internships & freelance builds",
// // //   tagline: "I turn product ideas into fast, accessible interfaces.",
// // //   blurb:
// // //     "React, TypeScript and a database that actually matches the data shape. I build production-ready front ends, wire them to real back ends, and ship them on Vercel — polished down to the last hover state.",
// // //   github: "https://github.com/vrajpanadya",
// // //   githubHandle: "vrajpanadya",
// // //   linkedin: "https://www.linkedin.com/in/vraj-pandya-197217419/",
// // //   linkedinHandle: "vraj-pandya",
// // // };

// // // export const stats = [
// // //   { value: "03", label: "Products shipped", note: "live on custom domains" },
// // //   { value: "12", label: "Technologies", note: "front end → data layer" },
// // //   { value: "2026", label: "B.Sc CS graduation", note: "Gujarat University" },
// // //   { value: "∞", label: "Coffees per deploy", note: "Ahmedabad, IST" },
// // // ];

// // // export const marqueeItems = [
// // //   "React JS",
// // //   "TypeScript",
// // //   "JavaScript",
// // //   "Tailwind CSS",
// // //   "HTML5",
// // //   "CSS3",
// // //   "MongoDB",
// // //   "Firebase",
// // //   "MySQL",
// // //   "Postman",
// // //   "Power BI",
// // //   "Git & GitHub",
// // //   "Vercel",
// // //   "Python",
// // //   "Java",
// // //   "C#",
// // //   "PHP",
// // //   "C",
// // // ];

// // // export type Skill = { name: string; level: number; note: string };

// // // export const skillGroups = [
// // //   {
// // //     id: "frontend",
// // //     label: "Frontend",
// // //     kicker: "Where the product meets the person",
// // //     icon: "Code2",
// // //     tint: "cobalt",
// // //     skills: [
// // //       { name: "React JS", level: 92, note: "Hooks, router, context, custom state machines" },
// // //       { name: "JavaScript (ES6+)", level: 90, note: "Async flows, modules, DOM performance" },
// // //       { name: "HTML5", level: 95, note: "Semantic markup, accessibility, meta & SEO" },
// // //       { name: "CSS3", level: 90, note: "Flexbox, grid, custom properties, keyframes" },
// // //       { name: "TypeScript", level: 82, note: "Typed props, generics, API contracts" },
// // //       { name: "Tailwind CSS", level: 88, note: "Design tokens, responsive systems, dark mode" },
// // //     ] as Skill[],
// // //   },
// // //   {
// // //     id: "backend",
// // //     label: "Backend & Data",
// // //     kicker: "Storage, schemas, and the truth",
// // //     icon: "Database",
// // //     tint: "teal",
// // //     skills: [
// // //       { name: "MongoDB", level: 85, note: "Aggregation pipelines, Compass, Mongoose models" },
// // //       { name: "MySQL", level: 83, note: "Joins, indexing, normalised relational schema" },
// // //       { name: "Firebase", level: 87, note: "Auth, Firestore, hosting, real-time reads" },
// // //       { name: "REST APIs", level: 84, note: "Postman-tested endpoints, error handling" },
// // //       { name: "Data modelling", level: 80, note: "Choosing SQL vs NoSQL per use case" },
// // //     ] as Skill[],
// // //   },
// // //   {
// // //     id: "languages",
// // //     label: "Languages",
// // //     kicker: "Fundamentals from the classroom up",
// // //     icon: "Braces",
// // //     tint: "flare",
// // //     skills: [
// // //       { name: "C", level: 80, note: "Pointers, memory, data structures lab" },
// // //       { name: "Java", level: 85, note: "OOP, collections, JDBC, Swing utilities" },
// // //       { name: "Python", level: 86, note: "Scripting, automation, pandas for analytics" },
// // //       { name: "C#", level: 74, note: ".NET console & WinForms projects" },
// // //       { name: "PHP", level: 72, note: "Form handling, sessions, MySQL glue" },
// // //       { name: "JavaScript", level: 90, note: "Day-one language, browser + Node side" },
// // //       { name: "TypeScript", level: 82, note: "Preferred for anything React" },
// // //     ] as Skill[],
// // //   },
// // //   {
// // //     id: "tools",
// // //     label: "Tools",
// // //     kicker: "The workflow that keeps shipping fast",
// // //     icon: "Wrench",
// // //     tint: "lime",
// // //     skills: [
// // //       { name: "Git & GitHub", level: 90, note: "Branching, PR reviews, actions for preview builds" },
// // //       { name: "VS Code", level: 94, note: "Custom setup, snippets, eslint + prettier pipeline" },
// // //       { name: "Postman", level: 86, note: "Collections, environments, contract checks" },
// // //       { name: "MongoDB Compass", level: 82, note: "Query profiler, index tuning, schema explore" },
// // //       { name: "Power BI", level: 78, note: "DAX measures, KPI dashboards, data stories" },
// // //       { name: "Vercel", level: 90, note: "Preview deploys, domains, edge caching" },
// // //     ] as Skill[],
// // //   },
// // // ];

// // // export type Project = {
// // //   id: string;
// // //   index: string;
// // //   name: string;
// // //   client: string;
// // //   year: string;
// // //   live: string;
// // //   liveLabel: string;
// // //   role: string;
// // //   summary: string;
// // //   bullets: string[];
// // //   stack: string[];
// // //   image: string;
// // //   credit: string;
// // //   metrics: { label: string; value: string }[];
// // //   accent: "cobalt" | "lime" | "flare";
// // // };

// // // export const projects: Project[] = [
// // //   {
// // //     id: "kotak",
// // //     index: "01",
// // //     name: "Kotak Associates",
// // //     client: "Banking & investment distribution",
// // //     year: "2025",
// // //     live: "https://kotak-associates-e5rq.vercel.app/",
// // //     liveLabel: "kotak-associates.vercel.app",
// // //     role: "Frontend developer · UI system & client journeys",
// // //     summary:
// // //       "A trust-first marketing platform for a financial advisory practice — service explainers, scheme discovery and an enquiry funnel that survives real user traffic.",
// // //     bullets: [
// // //       "Responsive layout system with a design-token palette shared across every section.",
// // //       "Enquiry flow with inline validation, so advisors receive clean, structured leads.",
// // //       "Performance pass: lazy media, compressed assets and a 100/100 accessibility audit on key pages.",
// // //     ],
// // //     stack: ["React JS", "Tailwind CSS", "JavaScript", "Vercel"],
// // //     image: "/projects/kotak-associates.jpg",
// // //     credit: "Live project screenshot",
// // //     metrics: [
// // //       { label: "Pages", value: "9" },
// // //       { label: "Enquiry steps", value: "3" },
// // //       { label: "LCP", value: "1.4s" },
// // //     ],
// // //     accent: "cobalt",
// // //   },
// // //   {
// // //     id: "rathore",
// // //     index: "02",
// // //     name: "Rathore Vlogs",
// // //     client: "Travel & storytelling creator brand",
// // //     year: "2025",
// // //     live: "https://rathore-vlogs.vercel.app/",
// // //     liveLabel: "rathore-vlogs.vercel.app",
// // //     role: "Full-stack developer · SPA architecture & media experience",
// // //     summary:
// // //       "A hash-routed single-page experience for a travel vlog channel: cinematic hero reel, episode grid, category filters and a watch-first layout that loads in a blink on mobile data.",
// // //     bullets: [
// // //       "Client-side routing with animated page transitions for a native-app feel.",
// // //       "Media pipeline with poster-first loading, so no layout shift while videos resolve.",
// // //       "Category + search filtering handled entirely in state for instant results.",
// // //     ],
// // //     stack: ["React JS", "React Router", "CSS3", "Firebase", "Vercel"],
// // //     image: "/projects/rathore-vlogs.jpg",
// // //     credit: "Live project screenshot",
// // //     metrics: [
// // //       { label: "Routes", value: "SPA" },
// // //       { label: "Transitions", value: "60fps" },
// // //       { label: "Mobile", value: "100%" },
// // //     ],
// // //     accent: "flare",
// // //   },
// // //   {
// // //     id: "vishal",
// // //     index: "03",
// // //     name: "Vishal Trading Company",
// // //     client: "Wholesale & industrial supply storefront",
// // //     year: "2026",
// // //     live: "https://vishal-trading-company.shop/",
// // //     liveLabel: "vishal-trading-company.shop",
// // //     role: "Frontend + data · catalogue, cart and custom domain",
// // //     summary:
// // //       "A live commerce site on a real .shop domain: product catalogue with category browsing, cart state, and a direct-to-WhatsApp enquiry handoff built for buyers who never fill a long form.",
// // //     bullets: [
// // //       "Catalogue driven by a database so the owner edits prices without touching code.",
// // //       "Cart + enquiry builder that formats a ready-to-send order message.",
// // //       "Custom domain, SSL and automated Vercel deploys straight from the main branch.",
// // //     ],
// // //     stack: ["React JS", "MongoDB", "TypeScript", "REST", "Vercel"],
// // //     image: "/projects/vishal-trading-company.jpg",
// // //     credit: "Live project screenshot",
// // //     metrics: [
// // //       { label: "Catalogue", value: "DB-driven" },
// // //       { label: "Checkout", value: "WhatsApp" },
// // //       { label: "Domain", value: ".shop" },
// // //     ],
// // //     accent: "lime",
// // //   },
// // // ];

// // // export const education = [
// // //   {
// // //     period: "Currently pursuing",
// // //     live: true,
// // //     title: "Master of Computer Applications (MCA)",
// // //     school: "Shree Swaminarayan Institute of Technology",
// // //     place: "Gujarat, IN",
// // //     detail:
// // //       "Advanced software engineering, database internals, full-stack architecture and analytics — the layer that turns a B.Sc foundation into production-grade engineering.",
// // //     tags: ["System design", "Advanced DBMS", "Web architecture"],
// // //   },
// // //   {
// // //     period: "Jul 2023 — May 2026",
// // //     live: false,
// // //     title: "Bachelor of Science in Computer Science",
// // //     school: "Gujarat University",
// // //     place: "Ahmedabad, IN",
// // //     detail:
// // //       "Core computer science: data structures, algorithms, OOP, DBMS, operating systems and software engineering — with lab work in C, Java, Python and C#.",
// // //     tags: ["DSA", "DBMS", "OOP", "Operating Systems"],
// // //   },
// // //   {
// // //     period: "Jul 2022 — Mar 2023",
// // //     live: false,
// // //     title: "Higher Secondary Certificate (HSC)",
// // //     school: "Madhav Vidya Vihar",
// // //     place: "Ahmedabad, IN",
// // //     detail:
// // //       "  Mathematics and logic foundation that made the jump into algorithms and programming feel like play instead of work.",
// // //     tags: ["Mathematics", "Logic",],
// // //   },
// // // ];

// // // export const principles = [
// // //   {
// // //     n: "01",
// // //     title: "Interface before feature",
// // //     copy: "If the interaction is unclear, the feature doesn't exist. I sketch states — empty, loading, error — before I sketch screens.",
// // //   },
// // //   {
// // //     n: "02",
// // //     title: "Ship small, ship often",
// // //     copy: "Every branch gets a Vercel preview. Feedback in minutes beats feedback in milestones.",
// // //   },
// // //   {
// // //     n: "03",
// // //     title: "Pick the boring database",
// // //     copy: "MongoDB for documents that move, MySQL for relationships that must not lie, Firebase when auth and realtime buy me a week.",
// // //   },
// // //   {
// // //     n: "04",
// // //     title: "Motion is information",
// // //     copy: "Framer Motion for transitions that explain where a view came from — never decoration for decoration's sake.",
// // //   },
// // // ];

// // // export const timeline = [
// // //   {
// // //     year: "2022",
// // //     title: "First lines of code",
// // //     copy: "HSC at Madhav Vidya Vihar. C on a lab machine, a lot of printf, and the realisation that logic beats memorising.",
// // //   },
// // //   {
// // //     year: "2023",
// // //     title: "B.Sc CS @ Gujarat University",
// // //     copy: "Data structures, Java and Python. Started building small tools for classmates — and fell for the front end.",
// // //   },
// // //   {
// // //     year: "2024",
// // //     title: "React, properly",
// // //     copy: "Component thinking, hooks, state. Freelance pages for local businesses, deployed on Vercel with real domains.",
// // //   },
// // //   {
// // //     year: "2025",
// // //     title: "Full-stack, in production",
// // //     copy: "MongoDB + Firebase behind React apps. Postman collections, Compass profiling, and clients who came back.",
// // //   },
// // //   {
// // //     year: "2026",
// // //     title: "MCA & deeper engineering",
// // //     copy: "Shree Swaminarayan Institute of Technology — system design, analytics with Power BI, and interfaces at scale.",
// // //   },
// // // ];

// // // export const services = [
// // //   {
// // //     title: "React front ends",
// // //     copy: "Component systems, design tokens, motion, and a build that stays fast as the app grows.",
// // //     icon: "Component",
// // //     deliverables: ["Design system", "Reusable UI kit", "State architecture"],
// // //   },
// // //   {
// // //     title: "Landing & marketing sites",
// // //     copy: "High-converting pages for brands and advisory firms — responsive, accessible, SEO-tidy.",
// // //     icon: "Rocket",
// // //     deliverables: ["Pixel-perfect sections", "Analytics & meta", "90+ Lighthouse"],
// // //   },
// // //   {
// // //     title: "Full-stack web apps",
// // //     copy: "Auth, CRUD, dashboards and APIs wired to MongoDB, MySQL or Firebase.",
// // //     icon: "Layers",
// // //     deliverables: ["REST / Firestore", "Admin panels", "Deploy pipeline"],
// // //   },
// // //   {
// // //     title: "Data & dashboards",
// // //     copy: "Clean SQL, aggregation pipelines and Power BI reports that answer a real question.",
// // //     icon: "BarChart3",
// // //     deliverables: ["KPI modelling", "DAX measures", "Visual stories"],
// // //   },
// // // ];
// // export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
// // export const SPRING = { type: "spring", stiffness: 320, damping: 30, mass: 0.7 } as const;

// // export const profile = {
// //   name: "Vraj Pandya",
// //   firstName: "Vraj",
// //   lastName: "Pandya",
// //   role: "Frontend Engineer",
// //   roleSub: "Full-stack developer",
// //   location: "Ahmedabad, Gujarat · IN",
// //   status: "Open to jobs, internships & freelance builds",
// //   tagline: "I turn product ideas into fast, accessible interfaces.",
// //   blurb:
// //     "",
// //   github: "https://github.com/vrajpanadya",
// //   githubHandle: "vrajpanadya",
// //   linkedin: "https://www.linkedin.com/in/vraj-pandya-197217419/",
// //   linkedinHandle: "vraj-pandya",
// // };

// // export const stats = [
// //   { value: "03", label: "Products shipped", note: "live on custom domains" },
// //   { value: "12", label: "Technologies", note: "front end → data layer" },
// //   { value: "2026", label: "B.Sc CS graduation", note: "Gujarat University" },
// //   { value: "∞", label: "Coffees per deploy", note: "Ahmedabad, IST" },
// // ];

// // export const marqueeItems = [
// //   "React JS",
// //   "TypeScript",
// //   "JavaScript",
// //   "Tailwind CSS",
// //   "HTML5",
// //   "CSS3",
// //   "MongoDB",
// //   "Firebase",
// //   "MySQL",
// //   "Postman",
// //   "Power BI",
// //   "Git & GitHub",
// //   "Vercel",
// //   "Python",
// //   "Java",
// //   "C#",
// //   "PHP",
// //   "C",
// // ];

// // export type Skill = { name: string; level: number; note: string };

// // export const skillGroups = [
// //   {
// //     id: "frontend",
// //     label: "Frontend",
// //     kicker: "Where the product meets the person",
// //     icon: "Code2",
// //     tint: "cobalt",
// //     skills: [
// //       { name: "React JS", level: 92, note: "Hooks, router, context, custom state machines" },
// //       { name: "JavaScript (ES6+)", level: 90, note: "Async flows, modules, DOM performance" },
// //       { name: "HTML5", level: 95, note: "Semantic markup, accessibility, meta & SEO" },
// //       { name: "CSS3", level: 90, note: "Flexbox, grid, custom properties, keyframes" },
// //       { name: "TypeScript", level: 82, note: "Typed props, generics, API contracts" },
// //       { name: "Tailwind CSS", level: 88, note: "Design tokens, responsive systems, dark mode" },
// //     ] as Skill[],
// //   },
// //   {
// //     id: "backend",
// //     label: "Backend & Data",
// //     kicker: "Storage, schemas, and the truth",
// //     icon: "Database",
// //     tint: "teal",
// //     skills: [
// //       { name: "MongoDB", level: 85, note: "Aggregation pipelines, Compass, Mongoose models" },
// //       { name: "MySQL", level: 83, note: "Joins, indexing, normalised relational schema" },
// //       { name: "Firebase", level: 87, note: "Auth, Firestore, hosting, real-time reads" },
// //       { name: "REST APIs", level: 84, note: "Postman-tested endpoints, error handling" },
// //       { name: "Data modelling", level: 80, note: "Choosing SQL vs NoSQL per use case" },
// //     ] as Skill[],
// //   },
// //   {
// //     id: "languages",
// //     label: "Languages",
// //     kicker: "Fundamentals from the classroom up",
// //     icon: "Braces",
// //     tint: "flare",
// //     skills: [
// //       { name: "C", level: 80, note: "Pointers, memory, data structures lab" },
// //       { name: "Java", level: 85, note: "OOP, collections, JDBC, Swing utilities" },
// //       { name: "Python", level: 86, note: "Scripting, automation, pandas for analytics" },
// //       { name: "C#", level: 74, note: ".NET console & WinForms projects" },
// //       { name: "PHP", level: 72, note: "Form handling, sessions, MySQL glue" },
// //       { name: "JavaScript", level: 90, note: "Day-one language, browser + Node side" },
// //       { name: "TypeScript", level: 82, note: "Preferred for anything React" },
// //     ] as Skill[],
// //   },
// //   {
// //     id: "tools",
// //     label: "Tools",
// //     kicker: "The workflow that keeps shipping fast",
// //     icon: "Wrench",
// //     tint: "lime",
// //     skills: [
// //       { name: "Git & GitHub", level: 90, note: "Branching, PR reviews, actions for preview builds" },
// //       { name: "VS Code", level: 94, note: "Custom setup, snippets, eslint + prettier pipeline" },
// //       { name: "Postman", level: 86, note: "Collections, environments, contract checks" },
// //       { name: "MongoDB Compass", level: 82, note: "Query profiler, index tuning, schema explore" },
// //       { name: "Power BI", level: 78, note: "DAX measures, KPI dashboards, data stories" },
// //       { name: "Vercel", level: 90, note: "Preview deploys, domains, edge caching" },
// //     ] as Skill[],
// //   },
// // ];

// // export type Project = {
// //   id: string;
// //   index: string;
// //   name: string;
// //   client: string;
// //   year: string;
// //   live: string;
// //   liveLabel: string;
// //   role: string;
// //   summary: string;
// //   bullets: string[];
// //   stack: string[];
// //   image: string;
// //   credit: string;
// //   metrics: { label: string; value: string }[];
// //   accent: "cobalt" | "lime" | "flare";
// // };

// // export const projects: Project[] = [
// //   {
// //     id: "kotak",
// //     index: "01",
// //     name: "Kotak Associates",
// //     client: "Banking & investment distribution",
// //     year: "2025",
// //     live: "https://kotak-associates-e5rq.vercel.app/",
// //     liveLabel: "kotak-associates.vercel.app",
// //     role: "Frontend developer · UI system & client journeys",
// //     summary:
// //       "A trust-first marketing platform for a financial advisory practice — service explainers, scheme discovery and an enquiry funnel that survives real user traffic.",
// //     bullets: [
// //       "Responsive layout system with a design-token palette shared across every section.",
// //       "Enquiry flow with inline validation, so advisors receive clean, structured leads.",
// //       "Performance pass: lazy media, compressed assets and a 100/100 accessibility audit on key pages.",
// //     ],
// //     stack: ["React JS", "Tailwind CSS", "JavaScript", "Vercel"],
// //     image: "/projects/kotak-associates.jpg",
// //     credit: "Live project screenshot",
// //     metrics: [
// //       { label: "Pages", value: "9" },
// //       { label: "Enquiry steps", value: "3" },
// //       { label: "LCP", value: "1.4s" },
// //     ],
// //     accent: "cobalt",
// //   },
// //   {
// //     id: "rathore",
// //     index: "02",
// //     name: "Rathore Vlogs",
// //     client: "Travel & storytelling creator brand",
// //     year: "2025",
// //     live: "https://rathore-vlogs.vercel.app/",
// //     liveLabel: "rathore-vlogs.vercel.app",
// //     role: "Full-stack developer · SPA architecture & media experience",
// //     summary:
// //       "A hash-routed single-page experience for a travel vlog channel: cinematic hero reel, episode grid, category filters and a watch-first layout that loads in a blink on mobile data.",
// //     bullets: [
// //       "Client-side routing with animated page transitions for a native-app feel.",
// //       "Media pipeline with poster-first loading, so no layout shift while videos resolve.",
// //       "Category + search filtering handled entirely in state for instant results.",
// //     ],
// //     stack: ["React JS", "React Router", "CSS3", "Firebase", "Vercel"],
// //     image: "/projects/rathore-vlogs.jpg",
// //     credit: "Live project screenshot",
// //     metrics: [
// //       { label: "Routes", value: "SPA" },
// //       { label: "Transitions", value: "60fps" },
// //       { label: "Mobile", value: "100%" },
// //     ],
// //     accent: "flare",
// //   },
// //   {
// //     id: "vishal",
// //     index: "03",
// //     name: "Vishal Trading Company",
// //     client: "Wholesale & industrial supply storefront",
// //     year: "2026",
// //     live: "https://vishal-trading-company.shop/",
// //     liveLabel: "vishal-trading-company.shop",
// //     role: "Frontend + data · catalogue, cart and custom domain",
// //     summary:
// //       "A live commerce site on a real .shop domain: product catalogue with category browsing, cart state, and a direct-to-WhatsApp enquiry handoff built for buyers who never fill a long form.",
// //     bullets: [
// //       "Catalogue driven by a database so the owner edits prices without touching code.",
// //       "Cart + enquiry builder that formats a ready-to-send order message.",
// //       "Custom domain, SSL and automated Vercel deploys straight from the main branch.",
// //     ],
// //     stack: ["React JS", "MongoDB", "TypeScript", "REST", "Vercel"],
// //     image: "/projects/vishal-trading-company.jpg",
// //     credit: "Live project screenshot",
// //     metrics: [
// //       { label: "Catalogue", value: "DB-driven" },
// //       { label: "Checkout", value: "WhatsApp" },
// //       { label: "Domain", value: ".shop" },
// //     ],
// //     accent: "lime",
// //   },
// // ];

// // export const education = [
// //   {
// //     period: "Currently pursuing",
// //     live: true,
// //     title: "Master of Computer Applications (MCA)",
// //     school: "Shree Swaminarayan Institute of Technology",
// //     place: "Gujarat, IN",
// //     detail:
// //       "Advanced software engineering, database internals, full-stack architecture and analytics — the layer that turns a B.Sc foundation into production-grade engineering.",
// //     tags: ["System design", "Advanced DBMS", "Web architecture"],
// //   },
// //   {
// //     period: "Jul 2023 — May 2026",
// //     live: false,
// //     title: "Bachelor of Science in Computer Science",
// //     school: "Gujarat University",
// //     place: "Ahmedabad, IN",
// //     detail:
// //       "Core computer science: data structures, algorithms, OOP, DBMS, operating systems and software engineering — with lab work in C, Java, Python and C#.",
// //     tags: ["DSA", "DBMS", "OOP", "Operating Systems"],
// //   },
// //   {
// //     period: "Jul 2022 — Mar 2023",
// //     live: false,
// //     title: "Higher Secondary Certificate (HSC)",
// //     school: "Madhav Vidya Vihar",
// //     place: "Ahmedabad, IN",
// //     detail:
// //       " Mathematics and logic foundation that made the jump into algorithms and programming feel like play instead of work.",
// //     tags: ["Mathematics", "Logic",  ],
// //   },
// // ];

// // export const principles = [
// //   {
// //     n: "01",
// //     title: "Interface before feature",
// //     copy: "If the interaction is unclear, the feature doesn't exist. I sketch states — empty, loading, error — before I sketch screens.",
// //   },
// //   {
// //     n: "02",
// //     title: "Ship small, ship often",
// //     copy: "Every branch gets a Vercel preview. Feedback in minutes beats feedback in milestones.",
// //   },
// //   {
// //     n: "03",
// //     title: "Pick the boring database",
// //     copy: "MongoDB for documents that move, MySQL for relationships that must not lie, Firebase when auth and realtime buy me a week.",
// //   },
// //   {
// //     n: "04",
// //     title: "Motion is information",
// //     copy: "Framer Motion for transitions that explain where a view came from — never decoration for decoration's sake.",
// //   },
// // ];

// // export const timeline = [
// //   {
// //     year: "2023",
// //     title: "Completed HSC",
// //     copy: "Completed my HSC from Madhav Vidya Vihar with a Commerce background.",
// //   },
// //   {
// //     year: "2023",
// //     title: "Started B.Sc Computer Science",
// //     copy: "Joined Gujarat University and started learning programming, databases and computer fundamentals.",
// //   },
// //   {
// //     year: "2024",
// //     title: "Started Web Development",
// //     copy: "Learned HTML, CSS and JavaScript and began creating responsive websites.",
// //   },
// //   {
// //     year: "2025",
// //     title: "Learned React & Backend",
// //     copy: "Started building projects using React, Tailwind CSS, MongoDB, Firebase and MySQL.",
// //   },
// //   {
// //     year: "2026",
// //     title: "Built Real Projects",
// //     copy: "Created and deployed complete websites for real businesses using frontend and backend technologies.",
// //   },
// //   {
// //     year: "Now",
// //     title: "Pursuing MCA",
// //     copy: "Currently pursuing MCA at Shree Swaminarayan Institute of Technology and improving my full-stack development skills.",
// //   },
// // ];

// // export const services = [
// //   {
// //     title: "React front ends",
// //     copy: "Component systems, design tokens, motion, and a build that stays fast as the app grows.",
// //     icon: "Component",
// //     deliverables: ["Design system", "Reusable UI kit", "State architecture"],
// //   },
// //   {
// //     title: "Landing & marketing sites",
// //     copy: "High-converting pages for brands and advisory firms — responsive, accessible, SEO-tidy.",
// //     icon: "Rocket",
// //     deliverables: ["Pixel-perfect sections", "Analytics & meta", "90+ Lighthouse"],
// //   },
// //   {
// //     title: "Full-stack web apps",
// //     copy: "Auth, CRUD, dashboards and APIs wired to MongoDB, MySQL or Firebase.",
// //     icon: "Layers",
// //     deliverables: ["REST / Firestore", "Admin panels", "Deploy pipeline"],
// //   },
// //   {
// //     title: "Data & dashboards",
// //     copy: "Clean SQL, aggregation pipelines and Power BI reports that answer a real question.",
// //     icon: "BarChart3",
// //     deliverables: ["KPI modelling", "DAX measures", "Visual stories"],
// //   },
// // ];
// export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
// export const SPRING = { type: "spring", stiffness: 320, damping: 30, mass: 0.7 } as const;

// export const profile = {
//   name: "Vraj Pandya",
//   firstName: "Vraj",
//   lastName: "Pandya",
//   role: "Full-Stack Developer",
//   roleSub: "Full-stack developer",
//   location: "Ahmedabad, Gujarat · IN",
//   status: "Open to jobs, internships & freelance builds",
//   tagline: "I turn product ideas into fast, accessible interfaces.",
//   blurb:
//     "",
//   github: "https://github.com/vrajpanadya",
//   githubHandle: "vrajpanadya",
//   linkedin: "https://www.linkedin.com/in/vraj-pandya-197217419/",
//   linkedinHandle: "vraj-pandya",
// };

// export const stats = [
//   { value: "03", label: "Products shipped", note: "live on custom domains" },
//   { value: "12", label: "Technologies", note: "front end → data layer" },
//   { value: "2026", label: "B.Sc CS graduation", note: "Gujarat University" },
//   { value: "∞", label: "Coffees per deploy", note: "Ahmedabad, IST" },
// ];

// export const marqueeItems = [
//   "React JS",
//   "TypeScript",
//   "JavaScript",
//   "Tailwind CSS",
//   "HTML5",
//   "CSS3",
//   "MongoDB",
//   "Firebase",
//   "MySQL",
//   "Postman",
//   "Power BI",
//   "Git & GitHub",
//   "Vercel",
//   "Python",
//   "Java",
//   "C#",
//   "PHP",
//   "C",
// ];

// export type Skill = { name: string; level: number; note: string };

// export const skillGroups = [
//   {
//     id: "frontend",
//     label: "Frontend",
//     kicker: "Where the product meets the person",
//     icon: "Code2",
//     tint: "cobalt",
//     skills: [
//       { name: "React JS", level: 92, note: "Hooks, router, context, custom state machines" },
//       { name: "JavaScript (ES6+)", level: 90, note: "Async flows, modules, DOM performance" },
//       { name: "HTML5", level: 95, note: "Semantic markup, accessibility, meta & SEO" },
//       { name: "CSS3", level: 90, note: "Flexbox, grid, custom properties, keyframes" },
//       { name: "TypeScript", level: 82, note: "Typed props, generics, API contracts" },
//       { name: "Tailwind CSS", level: 88, note: "Design tokens, responsive systems, dark mode" },
//     ] as Skill[],
//   },
//   {
//     id: "backend",
//     label: "Backend & Data",
//     kicker: "Storage, schemas, and the truth",
//     icon: "Database",
//     tint: "teal",
//     skills: [
//       { name: "MongoDB", level: 85, note: "Aggregation pipelines, Compass, Mongoose models" },
//       { name: "MySQL", level: 83, note: "Joins, indexing, normalised relational schema" },
//       { name: "Firebase", level: 87, note: "Auth, Firestore, hosting, real-time reads" },
//       { name: "REST APIs", level: 84, note: "Postman-tested endpoints, error handling" },
//       { name: "Data modelling", level: 80, note: "Choosing SQL vs NoSQL per use case" },
//     ] as Skill[],
//   },
//   {
//     id: "languages",
//     label: "Languages",
//     kicker: "Fundamentals from the classroom up",
//     icon: "Braces",
//     tint: "flare",
//     skills: [
//       { name: "C", level: 80, note: "Pointers, memory, data structures lab" },
//       { name: "Java", level: 85, note: "OOP, collections, JDBC, Swing utilities" },
//       { name: "Python", level: 86, note: "Scripting, automation, pandas for analytics" },
//       { name: "C#", level: 74, note: ".NET console & WinForms projects" },
//       { name: "PHP", level: 72, note: "Form handling, sessions, MySQL glue" },
//       { name: "JavaScript", level: 90, note: "Day-one language, browser + Node side" },
//       { name: "TypeScript", level: 82, note: "Preferred for anything React" },
//     ] as Skill[],
//   },
//   {
//     id: "tools",
//     label: "Tools",
//     kicker: "The workflow that keeps shipping fast",
//     icon: "Wrench",
//     tint: "lime",
//     skills: [
//       { name: "Git & GitHub", level: 90, note: "Branching, PR reviews, actions for preview builds" },
//       { name: "VS Code", level: 94, note: "Custom setup, snippets, eslint + prettier pipeline" },
//       { name: "Postman", level: 86, note: "Collections, environments, contract checks" },
//       { name: "MongoDB Compass", level: 82, note: "Query profiler, index tuning, schema explore" },
//       { name: "Power BI", level: 78, note: "DAX measures, KPI dashboards, data stories" },
//       { name: "Vercel", level: 90, note: "Preview deploys, domains, edge caching" },
//     ] as Skill[],
//   },
// ];

// export type Project = {
//   id: string;
//   index: string;
//   name: string;
//   client: string;
//   year: string;
//   live: string;
//   liveLabel: string;
//   role: string;
//   summary: string;
//   bullets: string[];
//   stack: string[];
//   image: string;
//   credit: string;
//   metrics: { label: string; value: string }[];
//   accent: "cobalt" | "lime" | "flare";
// };

// export const projects: Project[] = [
//   {
//     id: "kotak",
//     index: "01",
//     name: "Kotak Associates",
//     client: "Banking & investment distribution",
//     year: "2025",
//     live: "https://kotak-associates-e5rq.vercel.app/",
//     liveLabel: "kotak-associates.vercel.app",
//     role: "Frontend developer · UI system & client journeys",
//     summary:
//       "A trust-first marketing platform for a financial advisory practice — service explainers, scheme discovery and an enquiry funnel that survives real user traffic.",
//     bullets: [
//       "Responsive layout system with a design-token palette shared across every section.",
//       "Enquiry flow with inline validation, so advisors receive clean, structured leads.",
//       "Performance pass: lazy media, compressed assets and a 100/100 accessibility audit on key pages.",
//     ],
//     stack: ["React JS", "Tailwind CSS", "JavaScript", "Vercel"],
//     image: "/projects/kotak-associates.jpg",
//     credit: "Live project screenshot",
//     metrics: [
//       { label: "Pages", value: "9" },
//       { label: "Enquiry steps", value: "3" },
//       { label: "LCP", value: "1.4s" },
//     ],
//     accent: "cobalt",
//   },
//   {
//     id: "rathore",
//     index: "02",
//     name: "Rathore Vlogs",
//     client: "Travel & storytelling creator brand",
//     year: "2025",
//     live: "https://rathore-vlogs.vercel.app/",
//     liveLabel: "rathore-vlogs.vercel.app",
//     role: "Full-stack developer · SPA architecture & media experience",
//     summary:
//       "A hash-routed single-page experience for a travel vlog channel: cinematic hero reel, episode grid, category filters and a watch-first layout that loads in a blink on mobile data.",
//     bullets: [
//       "Client-side routing with animated page transitions for a native-app feel.",
//       "Media pipeline with poster-first loading, so no layout shift while videos resolve.",
//       "Category + search filtering handled entirely in state for instant results.",
//     ],
//     stack: ["React JS", "React Router", "CSS3", "Firebase", "Vercel"],
//     image: "/projects/rathore-vlogs.jpg",
//     credit: "Live project screenshot",
//     metrics: [
//       { label: "Routes", value: "SPA" },
//       { label: "Transitions", value: "60fps" },
//       { label: "Mobile", value: "100%" },
//     ],
//     accent: "flare",
//   },
//   {
//     id: "vishal",
//     index: "03",
//     name: "Vishal Trading Company",
//     client: "Wholesale & industrial supply storefront",
//     year: "2026",
//     live: "https://vishal-trading-company.shop/",
//     liveLabel: "vishal-trading-company.shop",
//     role: "Frontend + data · catalogue, cart and custom domain",
//     summary:
//       "A live commerce site on a real .shop domain: product catalogue with category browsing, cart state, and a direct-to-WhatsApp enquiry handoff built for buyers who never fill a long form.",
//     bullets: [
//       "Catalogue driven by a database so the owner edits prices without touching code.",
//       "Cart + enquiry builder that formats a ready-to-send order message.",
//       "Custom domain, SSL and automated Vercel deploys straight from the main branch.",
//     ],
//     stack: ["React JS", "MongoDB", "TypeScript", "REST", "Vercel"],
//     image: "/projects/vishal-trading-company.jpg",
//     credit: "Live project screenshot",
//     metrics: [
//       { label: "Catalogue", value: "DB-driven" },
//       { label: "Checkout", value: "WhatsApp" },
//       { label: "Domain", value: ".shop" },
//     ],
//     accent: "lime",
//   },
// ];

// export const education = [
//   {
//     period: "Currently pursuing",
//     live: true,
//     title: "Master of Computer Applications (MCA)",
//     school: "Shree Swaminarayan Institute of Technology",
//     place: "Gujarat, IN",
//     detail:
//       "Advanced software engineering, database internals, full-stack architecture and analytics — the layer that turns a B.Sc foundation into production-grade engineering.",
//     tags: ["System design", "Advanced DBMS", "Web architecture"],
//   },
//   {
//     period: "Jul 2023 — May 2026",
//     live: false,
//     title: "Bachelor of Science in Computer Science",
//     school: "Gujarat University",
//     place: "Ahmedabad, IN",
//     detail:
//       "Core computer science: data structures, algorithms, OOP, DBMS, operating systems and software engineering — with lab work in C, Java, Python and C#.",
//     tags: ["DSA", "DBMS", "OOP", "Operating Systems"],
//   },
//   {
//     period: "Jul 2022 — Mar 2023",
//     live: false,
//     title: "Higher Secondary Certificate (HSC)",
//     school: "Madhav Vidya Vihar",
//     place: "Ahmedabad, IN",
//     detail:
//       "Science stream — mathematics and logic foundation that made the jump into algorithms and programming feel like play instead of work.",
//     tags: ["Mathematics", "Logic", "Science stream"],
//   },
// ];

// export const principles = [
//   {
//     n: "01",
//     title: "Interface before feature",
//     copy: "If the interaction is unclear, the feature doesn't exist. I sketch states — empty, loading, error — before I sketch screens.",
//   },
//   {
//     n: "02",
//     title: "Ship small, ship often",
//     copy: "Every branch gets a Vercel preview. Feedback in minutes beats feedback in milestones.",
//   },
//   {
//     n: "03",
//     title: "Pick the boring database",
//     copy: "MongoDB for documents that move, MySQL for relationships that must not lie, Firebase when auth and realtime buy me a week.",
//   },
//   {
//     n: "04",
//     title: "Motion is information",
//     copy: "Framer Motion for transitions that explain where a view came from — never decoration for decoration's sake.",
//   },
// ];

// export const timeline = [
//   {
//     year: "2023",
//     title: "Completed HSC",
//     copy: "Completed my HSC from Madhav Vidya Vihar with a Commerce background.",
//   },
//   {
//     year: "2023",
//     title: "Started B.Sc Computer Science",
//     copy: "Joined Gujarat University and started learning programming, databases and computer fundamentals.",
//   },
//   {
//     year: "2024",
//     title: "Started Web Development",
//     copy: "Learned HTML, CSS and JavaScript and began creating responsive websites.",
//   },
//   {
//     year: "2025",
//     title: "Learned React & Backend",
//     copy: "Started building projects using React, Tailwind CSS, MongoDB, Firebase and MySQL.",
//   },
//   {
//     year: "2026",
//     title: "Built Real Projects",
//     copy: "Created and deployed complete websites for real businesses using frontend and backend technologies.",
//   },
//   {
//     year: "Now",
//     title: "Pursuing MCA",
//     copy: "Currently pursuing MCA at Shree Swaminarayan Institute of Technology and improving my full-stack development skills.",
//   },
// ];

// export const services = [
//   {
//     title: "React front ends",
//     copy: "Component systems, design tokens, motion, and a build that stays fast as the app grows.",
//     icon: "Component",
//     deliverables: ["Design system", "Reusable UI kit", "State architecture"],
//   },
//   {
//     title: "Landing & marketing sites",
//     copy: "High-converting pages for brands and advisory firms — responsive, accessible, SEO-tidy.",
//     icon: "Rocket",
//     deliverables: ["Pixel-perfect sections", "Analytics & meta", "90+ Lighthouse"],
//   },
//   {
//     title: "Full-stack web apps",
//     copy: "Auth, CRUD, dashboards and APIs wired to MongoDB, MySQL or Firebase.",
//     icon: "Layers",
//     deliverables: ["REST / Firestore", "Admin panels", "Deploy pipeline"],
//   },
//   {
//     title: "Data & dashboards",
//     copy: "Clean SQL, aggregation pipelines and Power BI reports that answer a real question.",
//     icon: "BarChart3",
//     deliverables: ["KPI modelling", "DAX measures", "Visual stories"],
//   },
// ];
export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
export const SPRING = { type: "spring", stiffness: 320, damping: 30, mass: 0.7 } as const;

export const profile = {
  name: "Vraj Pandya",
  firstName: "Vraj",
  lastName: "Pandya",
  role: "Full-Stack Developer",
  roleSub: "Full-stack developer",
  location: "Ahmedabad, Gujarat · IN",
  status: "Open to jobs, internships & freelance builds",
  tagline: "I turn product ideas into fast, accessible interfaces.",
  blurb:
    "",
  github: "https://github.com/vrajpanadya",
  githubHandle: "vrajpanadya",
  linkedin: "https://www.linkedin.com/in/vraj-pandya-197217419/",
  linkedinHandle: "vraj-pandya",
};

export const stats = [
  { value: "03", label: "Products shipped", note: "live on custom domains" },
  { value: "12", label: "Technologies", note: "front end → data layer" },
  { value: "2026", label: "B.Sc CS graduation", note: "Gujarat University" },
  { value: "∞", label: "Coffees per deploy", note: "Ahmedabad, IST" },
];

export const marqueeItems = [
  "React JS",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "MongoDB",
  "Firebase",
  "MySQL",
  "Postman",
  "Power BI",
  "Git & GitHub",
  "Vercel",
  "Python",
  "Java",
  "C#",
  "PHP",
  "C",
];

export type Skill = { name: string; level: number; note: string };

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    kicker: "Where the product meets the person",
    icon: "Code2",
    tint: "cobalt",
    skills: [
      { name: "React JS", level: 92, note: "Hooks, router, context, custom state machines" },
      { name: "JavaScript (ES6+)", level: 90, note: "Async flows, modules, DOM performance" },
      { name: "HTML5", level: 95, note: "Semantic markup, accessibility, meta & SEO" },
      { name: "CSS3", level: 90, note: "Flexbox, grid, custom properties, keyframes" },
      { name: "TypeScript", level: 82, note: "Typed props, generics, API contracts" },
      { name: "Tailwind CSS", level: 88, note: "Design tokens, responsive systems, dark mode" },
    ] as Skill[],
  },
  {
    id: "backend",
    label: "Backend & Data",
    kicker: "Storage, schemas, and the truth",
    icon: "Database",
    tint: "teal",
    skills: [
      { name: "MongoDB", level: 85, note: "Aggregation pipelines, Compass, Mongoose models" },
      { name: "MySQL", level: 83, note: "Joins, indexing, normalised relational schema" },
      { name: "Firebase", level: 87, note: "Auth, Firestore, hosting, real-time reads" },
      { name: "REST APIs", level: 84, note: "Postman-tested endpoints, error handling" },
      { name: "Data modelling", level: 80, note: "Choosing SQL vs NoSQL per use case" },
    ] as Skill[],
  },
  {
    id: "languages",
    label: "Languages",
    kicker: "Fundamentals from the classroom up",
    icon: "Braces",
    tint: "flare",
    skills: [
      { name: "C", level: 80, note: "Pointers, memory, data structures lab" },
      { name: "Java", level: 85, note: "OOP, collections, JDBC, Swing utilities" },
      { name: "Python", level: 86, note: "Scripting, automation, pandas for analytics" },
      { name: "C#", level: 74, note: ".NET console & WinForms projects" },
      { name: "PHP", level: 72, note: "Form handling, sessions, MySQL glue" },
      { name: "JavaScript", level: 90, note: "Day-one language, browser + Node side" },
      { name: "TypeScript", level: 82, note: "Preferred for anything React" },
    ] as Skill[],
  },
  {
    id: "tools",
    label: "Tools",
    kicker: "The workflow that keeps shipping fast",
    icon: "Wrench",
    tint: "lime",
    skills: [
      { name: "Git & GitHub", level: 90, note: "Branching, PR reviews, actions for preview builds" },
      { name: "VS Code", level: 94, note: "Custom setup, snippets, eslint + prettier pipeline" },
      { name: "Postman", level: 86, note: "Collections, environments, contract checks" },
      { name: "MongoDB Compass", level: 82, note: "Query profiler, index tuning, schema explore" },
      { name: "Power BI", level: 78, note: "DAX measures, KPI dashboards, data stories" },
      { name: "Vercel", level: 90, note: "Preview deploys, domains, edge caching" },
    ] as Skill[],
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  client: string;
  year: string;
  live: string;
  liveLabel: string;
  role: string;
  summary: string;
  bullets: string[];
  stack: string[];
  image: string;
  credit: string;
  metrics: { label: string; value: string }[];
  accent: "cobalt" | "lime" | "flare";
};

export const projects: Project[] = [
  {
    id: "kotak",
    index: "01",
    name: "Kotak Associates",
    client: "Banking & investment distribution",
    year: "2025",
    live: "https://kotak-associates-e5rq.vercel.app/",
    liveLabel: "kotak-associates.vercel.app",
    role: "Frontend developer · UI system & client journeys",
    summary:
      "A trust-first marketing platform for a financial advisory practice — service explainers, scheme discovery and an enquiry funnel that survives real user traffic.",
    bullets: [
      "Responsive layout system with a design-token palette shared across every section.",
      "Enquiry flow with inline validation, so advisors receive clean, structured leads.",
      "Performance pass: lazy media, compressed assets and a 100/100 accessibility audit on key pages.",
    ],
    stack: ["React JS", "Tailwind CSS", "JavaScript", "Vercel"],
    image: "/projects/kotak-associates.jpg",
    credit: "Live project screenshot",
    metrics: [
      { label: "Pages", value: "9" },
      { label: "Enquiry steps", value: "3" },
      { label: "LCP", value: "1.4s" },
    ],
    accent: "cobalt",
  },
  {
    id: "rathore",
    index: "02",
    name: "Rathore Vlogs",
    client: "Travel & storytelling creator brand",
    year: "2025",
    live: "https://rathore-vlogs.vercel.app/",
    liveLabel: "rathore-vlogs.vercel.app",
    role: "Full-stack developer · SPA architecture & media experience",
    summary:
      "A hash-routed single-page experience for a travel vlog channel: cinematic hero reel, episode grid, category filters and a watch-first layout that loads in a blink on mobile data.",
    bullets: [
      "Client-side routing with animated page transitions for a native-app feel.",
      "Media pipeline with poster-first loading, so no layout shift while videos resolve.",
      "Category + search filtering handled entirely in state for instant results.",
    ],
    stack: ["React JS", "React Router", "CSS3", "Firebase", "Vercel"],
    image: "/projects/rathore-vlogs.jpg",
    credit: "Live project screenshot",
    metrics: [
      { label: "Routes", value: "SPA" },
      { label: "Transitions", value: "60fps" },
      { label: "Mobile", value: "100%" },
    ],
    accent: "flare",
  },
  {
    id: "vishal",
    index: "03",
    name: "Vishal Trading Company",
    client: "Wholesale & industrial supply storefront",
    year: "2026",
    live: "https://vishal-trading-company.shop/",
    liveLabel: "vishal-trading-company.shop",
    role: "Frontend + data · catalogue, cart and custom domain",
    summary:
      "A live commerce site on a real .shop domain: product catalogue with category browsing, cart state, and a direct-to-WhatsApp enquiry handoff built for buyers who never fill a long form.",
    bullets: [
      "Catalogue driven by a database so the owner edits prices without touching code.",
      "Cart + enquiry builder that formats a ready-to-send order message.",
      "Custom domain, SSL and automated Vercel deploys straight from the main branch.",
    ],
    stack: ["React JS", "MongoDB", "TypeScript", "REST", "Vercel"],
    image: "/projects/vishal-trading-company.jpg",
    credit: "Live project screenshot",
    metrics: [
      { label: "Catalogue", value: "DB-driven" },
      { label: "Checkout", value: "WhatsApp" },
      { label: "Domain", value: ".shop" },
    ],
    accent: "lime",
  },
];

export const education = [
  {
    period: "Currently pursuing",
    live: true,
    title: "Master of Computer Applications (MCA)",
    school: "Shree Swaminarayan Institute of Technology",
    place: "Gujarat, IN",
    detail:
      "Advanced software engineering, database internals, full-stack architecture and analytics — the layer that turns a B.Sc foundation into production-grade engineering.",
    tags: ["System design", "Advanced DBMS", "Web architecture"],
  },
  {
    period: "Jul 2023 — May 2026",
    live: false,
    title: "Bachelor of Science in Computer Science",
    school: "Gujarat University",
    place: "Ahmedabad, IN",
    detail:
      "Core computer science: data structures, algorithms, OOP, DBMS, operating systems and software engineering — with lab work in C, Java, Python and C#.",
    tags: ["DSA", "DBMS", "OOP", "Operating Systems"],
  },
  {
    period: "Jul 2022 — Mar 2023",
    live: false,
    title: "Higher Secondary Certificate (HSC)",
    school: "Madhav Vidya Vihar",
    place: "Ahmedabad, IN",
    detail:
      "Science stream — mathematics and logic foundation that made the jump into algorithms and programming feel like play instead of work.",
    tags: ["Mathematics", "Logic", "Science stream"],
  },
];

export const principles = [
  {
    n: "01",
    title: "Simple design",
    copy: "I create clean and easy-to-use websites that work well on mobile, tablet and desktop.",
  },
  {
    n: "02",
    title: "Clean code",
    copy: "I write organized and reusable code so the project is easy to understand and update.",
  },
  {
    n: "03",
    title: "Proper data management",
    copy: "I use MongoDB or MySQL to store and manage project data safely.",
  },
  {
    n: "04",
    title: "Test and deploy",
    copy: "I test every important feature before making the website live on Vercel.",
  },
];

export const timeline = [
  {
    year: "2023",
    title: "Completed HSC",
    copy: "Completed my HSC from Madhav Vidya Vihar with a Commerce background.",
  },
  {
    year: "2023",
    title: "Started B.Sc Computer Science",
    copy: "Joined Gujarat University and started learning programming, databases and computer fundamentals.",
  },
  {
    year: "2024",
    title: "Started Web Development",
    copy: "Learned HTML, CSS and JavaScript and began creating responsive websites.",
  },
  {
    year: "2025",
    title: "Learned React & Backend",
    copy: "Started building projects using React, Tailwind CSS, MongoDB, Firebase and MySQL.",
  },
  {
    year: "2026",
    title: "Built Real Projects",
    copy: "Created and deployed complete websites for real businesses using frontend and backend technologies.",
  },
  {
    year: "Now",
    title: "Pursuing MCA",
    copy: "Currently pursuing MCA at Shree Swaminarayan Institute of Technology and improving my full-stack development skills.",
  },
];

export const services = [
  {
    title: "Front-end websites",
    icon: "component",
    desc: "I create clean, responsive and easy-to-use websites using React, JavaScript and TypeScript.",
    deliverables: [
      "Mobile-friendly design",
      "Reusable components",
      "Smooth user experience",
    ],
    accent: "cobalt",
  },
  {
    title: "Business websites",
    icon: "rocket",
    desc: "I build professional websites that clearly present your business, services and contact information.",
    deliverables: [
      "Modern page design",
      "Contact and enquiry forms",
      "Search-engine friendly pages",
    ],
    accent: "lime",
  },
  {
    title: "Full-stack web applications",
    icon: "layers",
    desc: "I build complete web applications with a working front end, back end and database.",
    deliverables: [
      "Login and user accounts",
      "Admin panels",
      "MongoDB or MySQL database",
    ],
    accent: "teal",
  },
  {
    title: "Data dashboards",
    icon: "chart",
    desc: "I create clear dashboards and reports that make business data easier to understand.",
    deliverables: [
      "Power BI reports",
      "Charts and key metrics",
      "Simple data insights",
    ],
    accent: "flare",
  },
];
