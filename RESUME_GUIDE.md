# llm-fit Resume Guide (for next session)

Last updated: 2026-03-09 (America/Chicago)

## Mission
Reach **1000 GitHub stars** for `llm-fit` before next week by combining:
1) product quality improvements,
2) clear positioning,
3) fast distribution + feedback loops.

Repo: https://github.com/WilliamK112/llm-fit

---

## Current Progress Snapshot

- **Build progress:** `███████░░░ 70%`
- **Launch readiness:** `█████░░░░░ 50%`
- **Star progress:** `░░░░░░░░░░ 0%` (0/1000)

### Latest shipped commits
- `cc9a9e2` feat: benchmark submission schema + contribution guide
- `3fa24b6` feat: improved detect output + README usage docs
- `355d766` docs: v0.1.0 release notes
- `7c579a8` feat: `--detect` + macOS auto-detection

### Release
- v0.1.0: https://github.com/WilliamK112/llm-fit/releases/tag/v0.1.0

---

## What is already done
- CLI estimator works.
- Web local UI works (`npm start` → http://localhost:4173).
- Progress dashboard works (`/progress.html`).
- `--detect` mode implemented (macOS via `system_profiler`).
- README includes differentiation vs benchmark-only tools.
- `CONTRIBUTING.md` + benchmark template added.
- Launch-post templates exist in `LAUNCH_POSTS.md`.

---

## Remaining TODO (priority order)

### P0 (immediate)
1. Add README conversion assets:
   - badges,
   - screenshot/GIF,
   - stronger above-the-fold demo section.
2. Publish distribution wave:
   - X post,
   - Reddit post(s),
   - Show HN post.
3. Monitor reactions and ship 1 fast follow-up patch (v0.2) from feedback.

### P1
4. Improve estimator realism:
   - quant-aware estimates,
   - confidence ranges,
   - clearer fallback guidance.
5. Add machine profile presets and import/export.

### P2
6. Add lightweight test coverage for core estimator logic.

---

## Expectations
- Move fast with small, high-quality commits.
- Never wait for a huge perfect release.
- Every work block should end in one of:
  1) pushed commit,
  2) launched distribution action,
  3) clear unblock request.
- Report progress in PR-style updates with:
  - commit hash,
  - progress bars,
  - star delta,
  - next highest-leverage action.

---

## Limitations / Constraints
- Stars cannot be guaranteed on a fixed timeline.
- External platform posting may require human approval/session context.
- No personal/privacy leakage.
- No actions that impersonate user voice without explicit direction.
- If required auth/platform access is missing, request shortest unblock step.

---

## Allowed actions (pre-approved by user intent)
- Continue building and improving `llm-fit` autonomously.
- Install/use safe skills when needed (prefer vetted/security-reviewed flow).
- Commit and push directly to the project repo.
- Prepare launch/distribution content and execute where access permits.
- Keep heartbeat-driven 10-minute progress checks aligned with `HEARTBEAT.md`.

---

## Do/Don’t checklist for next session

### Do
- Read `llm-fit/STAR_SPRINT.md` first.
- Run quick sanity checks before push:
  - `npm run cli -- --detect`
  - `npm run cli -- --ram=16 --vram=8 --cpu=mid --platform=apple-silicon`
- Keep README and launch copy synchronized with current capabilities.

### Don’t
- Don’t claim launch/post actions were done unless verified.
- Don’t stall on planning without shipping.
- Don’t modify unrelated repos/files for this sprint.

---

## Quick command block

```bash
cd /Users/William/.openclaw/workspace/llm-fit
npm run cli -- --detect
npm start
# progress dashboard
open http://localhost:4173/progress.html

# git flow
git status
git add .
git commit -m "<small focused change>"
git push
```
