# Rendering glitch fix

## Symptom

When the hero code animation reached the end of its loop, characters from the
code panel and other text on the page could briefly disappear or flicker in
Chromium-based browsers and screen recordings.

## Root cause

`CodeConsole` updated React state every 34 ms and reset the visible character
count from the complete snippet back to zero on every loop. That large text-node
removal happened while the page also had a fixed SVG-noise blend layer,
backdrop blur, and a large continuously rotating blurred gradient. Together,
those operations triggered an expensive full composited repaint at the reset
boundary and exposed a Chromium glyph-rendering artifact.

## Changes

- Replaced the infinite reset interval with a frame-synchronised, one-time
  typing animation that holds the completed code.
- Capped React text updates to roughly 30 FPS.
- Added `prefers-reduced-motion` support.
- Isolated the code console's layout/paint work.
- Removed the console backdrop blur, the full-screen noise blend mode, and the
  large blurred gradient's continuous rotation while preserving their visual
  appearance.

## Verification

```bash
npm ci
npm run build
npm run preview
```

The production build completes successfully and the generated single-file app
is served by Vite Preview with HTTP 200.

## Wide-screen crop and mobile overflow follow-up

- Expanded the hero and navigation shells from 1240 px to 1800 px so the main
  content no longer starts roughly 300 px from the left on a 1918 px display.
- Added explicit width and minimum-width constraints to the hero grid, console,
  status text, navigation, and application root.
- Changed root horizontal overflow protection from `clip` to `hidden` for more
  consistent Chromium behavior during viewport resizing and narrow previews.
- Kept the code console capped at 640 px on desktop so the wider shell does not
  stretch the panel.
