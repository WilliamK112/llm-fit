# llm-fit STAR_SPRINT (goal: 1000⭐)

## NOW
- [x] Add auto hardware detection (macOS first)
- [x] Add `--detect` CLI mode (basic implementation in `llm-fit/src/detect.mjs` that auto-detects RAM/CPU/platform; now wired into package.json `bin` + npm scripts: `llm-fit-detect` and `npm run detect`)
- [x] Add README section: "How we differ from ollama-benchmark"
  - Outline key differences:
    - Focus on practical laptop fit (RAM/VRAM/CPU tiers) vs. raw throughput benchmarks
    - Opinionated presets for common hardware profiles instead of generic server configs
    - Emphasis on end-user commands and ergonomics, not just model zoo completeness
  - Concrete next step: draft a 3-bullet "Why llm-fit, not ollama-benchmark" comparison blurb in a SCRATCH section below for later copy-paste into README.
 
## SCRATCH: README comparison blurb (draft)
- **Built for real laptops, not lab servers** – llm-fit focuses on what actually runs well on common Mac/PC hardware (RAM/VRAM tiers, CPU classes), instead of abstract throughput numbers from big server GPUs.
- **Opinionated presets over config soup** – instead of making you tune dozens of knobs, llm-fit gives curated presets for typical machines (e.g., "8GB MacBook Air", "32GB workstation") and recommends models that *fit*.
- **End-user workflow first** – the CLI and docs are written for people trying to get work done (chat, coding, local agents), not just benchmark graphs; every command is meant to be copy–paste runnable.
