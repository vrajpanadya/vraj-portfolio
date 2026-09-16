import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, ElementType } from "react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/lib/data";
import { cn } from "@/utils/cn";

/* ---------------------------------------------------------------- Reveal */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------- Line reveal text */

export function MaskLine({
  children,
  delay = 0,
  className,
  as: Tag = "span",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  return (
    <span className={cn("-my-[0.18em] block overflow-hidden py-[0.18em]", className)}>
      <motion.span
        className="block"
        initial={{ y: "132%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
        style={{ display: "block" }}
      >
        <Tag className="block">{children}</Tag>
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------- Magnetic */

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------- Spotlight */

export function Spotlight({
  children,
  className,
  color = "rgba(205,245,100,0.16)",
  size = 620,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const x = useSpring(mx, { stiffness: 140, damping: 22 });
  const y = useSpring(my, { stiffness: 140, damping: 22 });
  const bg = useTransform(
    [x, y],
    ([nx, ny]: number[]) =>
      `radial-gradient(${size}px circle at ${nx}px ${ny}px, ${color}, transparent 72%)`,
  );

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        mx.set(-9999);
        my.set(-9999);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: bg }}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------- Section heading */

export function SectionLabel({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] uppercase",
        dark ? "text-paper-300/70" : "text-ink-500",
      )}
    >
      <span
        className={cn(
          "grid size-6 place-items-center rounded-full text-[10px]",
          dark ? "bg-lime-acid text-ink-900" : "bg-ink-900 text-lime-acid",
        )}
      >
        {index}
      </span>
      {label}
      <span className={cn("h-px w-10", dark ? "bg-paper-300/30" : "bg-ink-900/25")} />
    </div>
  );
}

/* --------------------------------------------------------------- Marquee */

export function Marquee({
  items,
  reverse = false,
  duration = 34,
  className,
  itemClassName,
  separator = "✳",
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
  itemClassName?: string;
  separator?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className="flex w-max items-center gap-8"
        style={{
          animation: `marquee-x ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className={cn("flex shrink-0 items-center gap-8", itemClassName)}>
            {item}
            <span className="opacity-45">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- Count up stat */

export function CountUp({ value, className }: { value: string; className?: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  const numeric = Number(value.replace(/\D/g, ""));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSeen(true),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen || Number.isNaN(numeric) || numeric === 0) return;
    let frame = 0;
    const total = 46;
    const pad = value.startsWith("0");
    const tick = () => {
      frame += 1;
      const p = 1 - Math.pow(1 - frame / total, 3);
      const next = Math.round(numeric * p);
      setDisplay(pad ? String(next).padStart(value.length, "0") : String(next));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, numeric, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ------------------------------------------------------- Noise / textures */

export function Noise({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "grain pointer-events-none fixed inset-0 z-[60] opacity-[0.035]",
        className,
      )}
    />
  );
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .slice(0, 1)
          .forEach((e) => setActive(e.target.id));
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-18% 0px -45% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
