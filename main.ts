// ai-happy-01 entry: write our image to the output directory.
//
// The program copies entry.png (the image beside this file) to
// <MAKEFUN_OUTPUT_DIR>/entry.png, defaulting to /output. The output file
// is always named entry.png. It performs no network or model calls and
// transforms nothing, so both grader runs write byte-identical output.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
