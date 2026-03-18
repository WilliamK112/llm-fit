# llm-fit

**Can my laptop run this model?**

`llm-fit` gives instant local LLM fit + speed estimates from your hardware profile, then suggests exact run commands.

## Why
People keep asking:
- Can I run 7B / 14B locally?
- How fast will it be on my machine?
- Which command should I use right now?

This tool answers in seconds.

## Quick start

```bash
cd llm-fit
npm run cli -- --ram=16 --vram=8 --cpu=mid --platform=apple-silicon
```

## Web demo (local)

```bash
npm start
# open http://localhost:4173
```

## CLI output example

```bash
✅ Good fit  Qwen2.5 7B Q4
   ~33.6 tok/s | min VRAM 6GB | cmd: ollama run qwen2.5:7b
```

## Flags

- `--ram=16`
- `--vram=8`
- `--cpu=low|mid|high`
- `--platform=apple-silicon|nvidia|amd|cpu`

## How we differ from ollama-benchmark

- **Built for real laptops, not lab servers** – llm-fit focuses on what actually runs well on common Mac/PC hardware (RAM/VRAM tiers, CPU classes), instead of abstract throughput numbers from big server GPUs.
- **Opinionated presets over config soup** – instead of making you tune dozens of knobs, llm-fit gives curated presets for typical machines (e.g., "8GB MacBook Air", "32GB workstation") and recommends models that *fit*.
- **End-user workflow first** – the CLI and docs are written for people trying to get work done (chat, coding, local agents), not just benchmark graphs; every command is meant to be copy–paste runnable.

## Next milestones

- [ ] Auto-detect machine hardware
- [ ] Pull benchmark data from community submissions
- [ ] Add GGUF quant-specific estimates (Q2_K/Q4_K_M/Q8_0)
- [ ] One-click export for Ollama / vLLM / llama.cpp

## License
MIT

## Architecture Overview

This project follows a modular structure with clear separation between interface, execution logic, and outputs/artifacts. The exact implementation details vary by repository, but the intent is to keep core logic testable and easy to extend.


## Project Structure

```text
.
├─ src/            # Core source code (if present)
├─ public/         # Static assets / UI resources (if present)
├─ docs/           # Documentation and notes (if present)
├─ scripts/        # Utility scripts (if present)
├─ test/           # Tests (if present)
└─ README.md       # Project overview
```

> Folder names vary by project; this section describes the intended organization pattern.


## Quick Start

1. Clone the repository
2. Install dependencies (if any)
3. Run the project using its local start/build instructions

If this repo is a library or static project, refer to scripts/config files for exact commands.


## Current Scope

This repository reflects the project’s current implementation and active direction. Planned improvements are tracked through issues/commits and may evolve over time.

