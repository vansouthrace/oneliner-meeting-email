import { mkdirSync, writeFileSync } from "node:fs";

const entry = "This meeting ran so long the follow-up email about it was scheduled, held, and minuted before we finished debating the agenda for the follow-up meeting.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Entry written (${entry.length} chars)`);
