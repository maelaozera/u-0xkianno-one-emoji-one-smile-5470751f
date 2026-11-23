# One Emoji, One Smile 🌞

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/maelaozera/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/maelaozera/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun)

Entry for the [make.fun](https://make.fun) bounty **One Emoji, One Smile**
(`u-0xkianno-one-emoji-one-smile-5470751f`, $5 escrow, top 10 places paid).

## The entry

Exactly one emoji — **🌞 U+1F31E SUN WITH FACE** — the one most likely to
make a stranger smile.

Why this one, against the judge's brief:

1. **Warm and friendly at first glance.** The sun is the universal symbol of
   warmth, and the face gives it a smile — a stranger reads a warm greeting
   with no context needed.
2. **Universal.** Every age and background reads a smiling sun the same way;
   there is no irony, in-joke or cultural reference that could land wrong.
3. **Chosen, not default.** It is a deliberate pick, not the first smiley
   that comes to mind, while staying instantly readable.
4. **Right for a stranger.** A sun carries no intimacy, sarcasm or flirtation
   — it is safe and cheerful coming from someone unknown.

It was picked from 30 single-emoji candidates, beating the plain default
smileys (too much the first thing that comes to mind), the heart-faces
(too intimate from a stranger), the hug (too familiar from a stranger),
and the flowers, animals and objects (no face, so less directly a smile).

## How it works

`main.ts` (Node 22, program/v1) writes exactly the one emoji — one
character, 4 bytes UTF-8, no trailing newline — to `/output/entry.txt`:

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `LICENSE` — MIT
- `README.md` — this file
