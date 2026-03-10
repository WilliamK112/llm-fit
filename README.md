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

Auto-detect (macOS):

```bash
npm run cli -- --detect
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

## How this differs from benchmark-only tools

Most Ollama/llama.cpp benchmark repos answer: **"How fast did model X run on machine Y?"**

`llm-fit` focuses on the earlier decision moment:
- **Can I run it at all?** (fit classification)
- **What should I try first?** (starter command)
- **Roughly how fast will it be?** (instant estimate)

So benchmarks are about *measurement after setup*; `llm-fit` is about *choosing before setup*.

## Community benchmark submissions

A standard submission template is included:
- `benchmark-submission.example.json`
- contribution guide: `CONTRIBUTING.md`

This lets us improve estimator quality with real hardware data.

## Next milestones

- [ ] Auto-detect machine hardware
- [x] Add benchmark submission JSON format
- [ ] Pull benchmark data from community submissions
- [ ] Add GGUF quant-specific estimates (Q2_K/Q4_K_M/Q8_0)
- [ ] One-click export for Ollama / vLLM / llama.cpp

## Run from anywhere

```bash
cd llm-fit
npm link
llm-fit --detect
```

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

