import type en from "./en";

// English is the source of truth for shape. fr.ts and ar.ts are typed
// against this, so if a key is missing/renamed in any locale file,
// TypeScript will fail the build with a precise error pointing at the
// exact missing/mismatched key — instead of silently letting the three
// files drift out of sync.
export type Translations = typeof en;
