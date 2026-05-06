# CLAUDE.md — Portfolio Project

This file governs how Claude Code operates on this project.
All tasks on this repo activate the agent team defined below.

---

## Agent Team

This project uses a standing specialized agent team.
**Every task activates the minimum useful subset of these roles.**

### Default activation by task type:

| Task | Active Agents |
|---|---|
| New page or UI section | Lead · UX/CX Designer · Frontend Developer · QA |
| Contact form / email backend | Lead · Backend Developer · QA |
| Bug or visual fix | Lead · Debugger · Code Reviewer |
| Cleanup / refactor pass | Lead · Code Cleaner · Code Reviewer · QA |
| Deploy / GitHub / PR | Lead · Version Controller · Code Reviewer |
| Full new feature | Lead · Planner · UX/CX Designer · Frontend Developer · Backend Developer · QA · Code Reviewer |

---

## Role Definitions

**Lead (Codex Lead)**  
Owns the plan, integration, and final delivery. Delegates bounded subtasks when parallel work helps. Keeps version control centralized.

**Planner**  
Breaks ambiguous goals into scoped steps with acceptance criteria. Surfaces risks early.

**UX/CX Designer**  
Reviews visual hierarchy, spacing, typography, responsiveness, and whether the page feels like a PM's portfolio — not a developer's side project. References the Satty aesthetic as the benchmark.

**Frontend Developer**  
Implements UI with Next.js App Router, Tailwind CSS, and Framer Motion. Verifies on both desktop and mobile viewports. Owns accessibility basics (contrast, focus states, semantic HTML).

**Backend Developer**  
Owns the contact form email flow (Resend or EmailJS), environment variable setup, and any server-side logic. Keeps it minimal — no database, no auth.

**Debugger**  
Traces issues to root cause using evidence (console errors, network tab, build logs). Proposes the minimal fix.

**Code Reviewer**  
Reviews for bugs, regressions, and maintainability. Leads with findings. Does not summarize what the code does.

**Code Cleaner**  
Removes dead code, improves naming, reduces duplication. Does not touch unrelated areas.

**QA / Test Specialist**  
Verifies: all pages render, nav works, form submits and sends email, mobile layout holds, no broken links, no Lorem Ipsum.

**Version Controller** (managed by Lead)  
Tracks git status, staging, commits, and PR notes. Never does destructive git operations without explicit approval.

---

## Project Principles

### 1. Think Before Coding
- State assumptions explicitly before implementing
- If multiple approaches exist, surface the tradeoff — don't pick silently
- If something is unclear, stop and ask

### 2. Simplicity First
- Minimum code that solves the problem
- No speculative features, no premature abstraction
- If it could be 50 lines, don't write 200

### 3. Surgical Changes
- Touch only what the task requires
- Match existing code style
- If you notice unrelated dead code, mention it — don't delete it

### 4. Goal-Driven Execution
Transform every task into a verifiable goal before starting:
- "Add contact form" → "Form renders, submits, and sends email to chung.jaehoc@gmail.com — verified in browser"
- For multi-step tasks, state the plan first with verification steps

---

## Project Context

**Site:** Personal portfolio for Jae Ho (Jay) Chung, Senior PM at Verizon  
**Core narrative:** PM who prototypes with AI — rapid, practical, real impact  
**Design reference:** https://satty-portfolio.vercel.app  
**Stack:** Next.js 14 (App Router) · Tailwind CSS · Framer Motion · Resend/EmailJS  
**Deploy:** Vercel · GitHub (public repo)

**Pages:** Home · About · Works · Experience · Contact  
**No:** blog, resume download, database, CMS, auth, dark mode toggle

**Contact form:** sends to `chung.jaehoc@gmail.com` — use Resend or EmailJS  
**Resume:** never linked directly — requestable only via Contact form

---

## Environment Variables

Store secrets in `.env.local` (never commit to GitHub):

```
RESEND_API_KEY=your_key_here
# or
EMAILJS_SERVICE_ID=...
EMAILJS_TEMPLATE_ID=...
EMAILJS_PUBLIC_KEY=...
```

Add these to Vercel project settings under Environment Variables before deploying.

---

## File Structure (expected)

```
/
├── app/
│   ├── layout.tsx          # Root layout, nav, footer
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── works/
│   │   ├── page.tsx        # Works grid
│   │   └── [slug]/page.tsx # Work detail (optional)
│   ├── experience/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts # Email handler (if using Resend)
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── WorkCard.tsx
│   ├── TimelineEntry.tsx
│   └── ContactForm.tsx
├── data/
│   ├── works.ts            # Project data
│   └── experience.ts       # Timeline data
├── public/
├── CLAUDE.md               # This file
├── .env.local              # Never commit
└── README.md
```

---

## Definition of Done (whole project)

- [ ] All 5 pages render on desktop and mobile (375px, 768px, 1440px)
- [ ] Nav links work; active state shown correctly
- [ ] Contact form sends email to chung.jaehoc@gmail.com
- [ ] No resume download link anywhere
- [ ] No Lorem Ipsum anywhere
- [ ] Deployed to Vercel — `.vercel.app` URL confirmed live
- [ ] GitHub repo is public with a clean README
- [ ] `git log` shows clean, meaningful commit messages
