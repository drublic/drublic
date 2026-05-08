# Existing Content Optimization Plan (No Pipeline)

## Goal

Improve the quality and consistency of the **current published content** in this repository by applying a repeatable editorial and technical optimization pass.  
This plan explicitly avoids building a new content pipeline.

## Scope

- Included:
  - `content/**`
  - `content-ai/**`
  - `content-leadership/**`
  - Existing rendering/indexing code paths already in use (`pages/api/posts/index.ts`, `lib/components/Head.tsx`, `pages/sitemap.ts`, `pages/feed.ts`)
- Excluded:
  - New autonomous generation workflows
  - New pipeline orchestration, queueing, or runtime workers
  - New Supabase data model for content operations

## Principles

1. Optimize what already exists before creating anything new.
2. Keep changes deterministic and reviewable.
3. Enforce metadata and structure quality with lightweight scripts.
4. Ship in small batches so regressions are easy to catch and revert.

## Success Criteria

- 100% of non-hidden posts have valid and normalized metadata fields.
- 100% of non-hidden posts have a usable summary (`abstract`) and social metadata.
- No broken sitemap/feed generation after content updates.
- No visible rendering regressions in representative old/new articles.
- All changes are tracked as explicit file diffs in `data.json` / `article.md`.

## Content Quality Contract (Applied to Existing Posts)

Each non-hidden post should satisfy:

- Required fields in `data.json`:
  - `title`
  - `date`
  - `abstract`
  - `meta-title`
  - `meta-description`
- Recommended fields:
  - `tags` (array, normalized capitalization and spacing)
  - `image` / `headerImage` where available and valid
- Normalization rules:
  - trim leading/trailing spaces
  - collapse duplicated whitespace
  - avoid HTML in `meta-title` and `meta-description`
  - keep `abstract` meaningful and non-empty
- Consistency rules:
  - `meta-title` should match post intent/title (not unrelated boilerplate)
  - `meta-description` should summarize article value clearly
  - slug/date/title should remain coherent after edits

## Work Plan

## Phase 1 - Inventory and Baseline

1. Build a one-time inventory script for all `data.json` files in included folders.
2. Emit a report with:
   - missing required fields
   - empty/very short metadata
   - suspiciously duplicated metadata across many posts
   - malformed types (`tags` not array, etc.)
3. Save baseline report in repo (for comparison after cleanup).

Deliverable: `reports/content-baseline.json` (or markdown equivalent).

## Phase 2 - Deterministic Metadata Cleanup

1. Add a local script to normalize metadata across existing `data.json` files.
2. Automatic fixes only:
   - trim and whitespace normalization
   - populate `meta-title` from `title` if blank
   - populate `meta-description` from `abstract` if blank
   - normalize `tags` format (if present)
3. Do not invent new article meaning in automatic mode.

Deliverables:
- `scripts/content/normalize-metadata.ts`
- Batch PR with deterministic edits only.

## Phase 3 - Editorial Upgrade Pass

1. Prioritize posts by impact:
   - latest posts first
   - cornerstone topics next
   - long-tail archive last
2. Manually improve weak `abstract`, `meta-title`, and `meta-description`.
3. Ensure each post has a clear value statement and consistent tone.
4. Keep article body edits minimal unless clearly needed for clarity/correctness.

Deliverable: batched content edit PRs (for example 10-20 posts per PR).

## Phase 4 - Validation in Existing Runtime

1. Add validation script that fails on hard-contract violations for non-hidden posts.
2. Integrate validation into build flow before `next build`.
3. Keep behavior lightweight; no runtime pipeline changes.

Deliverables:
- `scripts/content/validate-metadata.ts`
- `package.json` scripts:
  - `content:report`
  - `content:normalize`
  - `content:validate`
  - `build` calls `content:validate` first

## Phase 5 - Rendering and Index Verification

1. Verify `Head` behavior on posts with and without optional image fields.
2. Verify sitemap generation includes expected URLs and dates.
3. Verify feed generation has valid XML entities and summaries.
4. Spot-check a sample of legacy + recent posts in browser.

Deliverable: short verification checklist in PR description.

## Implementation Notes (Code Integration Points)

- `pages/api/posts/index.ts`
  - keep as primary content loader
  - optionally apply safe normalization during read path (non-destructive)
- `lib/components/Head.tsx`
  - ensure resilient fallback when metadata is missing
- `pages/sitemap.ts`
  - rely on validated content set
- `pages/feed.ts`
  - rely on normalized abstract/description quality

No new pipeline modules are required.

## Rollout Strategy

1. Commit scripts first (no content changes yet).
2. Run report and share baseline.
3. Run deterministic normalization and commit.
4. Run manual editorial batches in small reviewable PRs.
5. Gate all future builds with metadata validation.

## Risks and Mitigations

- Risk: Overwriting intentional legacy phrasing.
  - Mitigation: deterministic pass only auto-fixes formatting and empty fallbacks.
- Risk: Large noisy diffs.
  - Mitigation: split by folder and age range.
- Risk: Feed/sitemap regressions from malformed content.
  - Mitigation: validate first, then run build and spot checks.

## Definition of Done

- Validation scripts are in place and used in local/CI build.
- Existing posts pass metadata contract (excluding intentionally hidden drafts).
- Sitemap/feed/build remain stable.
- Optimization work is complete without introducing a new generation pipeline.
