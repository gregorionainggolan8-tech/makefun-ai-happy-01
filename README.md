# ai-happy-01 — Puddle Joy

## The image

A small child in a bright yellow raincoat and yellow rain boots, arms thrown
up, laughing with eyes squeezed shut as they jump high in a rain puddle —
while a scruffy brown dog beside them shakes water off its fur, droplets
sparkling in warm golden evening light. A fresh, specific happy moment: the
joy of jumping in puddles after the rain, shared with a dog. No text.

## How it was made

The image was generated as a 1024×1024 digital painting from a detailed
prompt (child in yellow raincoat jumping in a puddle, dog shaking off water,
golden evening light), then resized to 1024×1024 and palette-compressed to
fit the 1 MiB limit. Nothing in the image is copied from the kit's starter,
judge, or ladder images.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` unchanged — no network or model calls at
run time, so two runs produce byte-identical output.
