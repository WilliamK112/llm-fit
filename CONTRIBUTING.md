# Contributing to llm-fit

Thanks for helping improve local LLM fit estimates.

## Benchmark submission format

Use `benchmark-submission.example.json` as template.

Required top-level keys:
- `machine`
- `runtime`
- `model`
- `result`
- `submittedAt`
- `submittedBy`

## Submit benchmark data

1. Copy template:
```bash
cp benchmark-submission.example.json benchmarks/<your-file>.json
```
2. Fill your values.
3. Open a PR with your benchmark JSON.

## Quality bar
- Keep values realistic and reproducible.
- Include runtime/quant details.
- Add notes for unusual settings.
