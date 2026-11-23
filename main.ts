// One Emoji, One Smile — entry for make.fun competition
// u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is a single emoji: U+1F31E SUN WITH FACE.
// A smiling sun is read at a glance as warm and friendly: the sun itself
// is the universal symbol of warmth, and the face gives it a smile, so a
// stranger sees a warm greeting with no context, no irony and no in-joke.
// It is a chosen pick rather than the first default smiley, and a sun is
// safe coming from a stranger — no intimacy, sarcasm or flirtation.
// Exactly one character (4 bytes UTF-8, no trailing newline), inside the
// gate's 1–8 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const emoji = "🌞";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", emoji, "utf8");
