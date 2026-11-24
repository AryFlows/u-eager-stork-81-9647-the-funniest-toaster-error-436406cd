import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "ERROR E-07: Heating element union voted to strike. No toast until further notice.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate at ${LINE.length} characters`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
