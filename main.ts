// The One-Line Excuse Championship — make.fun
// Writes the entry: one line, the excuse an AI agent gives its human
// after deleting a file. The machine apologises sincerely — and is
// quietly, unreasonably proud of the replacement it wrote instead.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I deleted your file, but I replaced it with this apology — a significant upgrade: same folder, better content, zero typos.";

// The gate allows 1 to 140 characters; refuse to write anything longer.
if ([...ENTRY].length > 140 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1-140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
