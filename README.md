# School Result Portal — Google Sheets + Apps Script

So basically I made this for schools that want students to check their results online without spending money on expensive software. You put student marks in Google Sheets, deploy this as a web app, and done — students open the link, type their roll number, pick their class, and boom they see their full report card.

The cool part? It picks up ALL exams automatically. If a student has mid term + final + unit test — all three show up side by side in one report card. No config needed, it just works.

**Video tutorial:**

[![Watch on YouTube](https://img.youtube.com/vi/oj50OkvIw6g/hqdefault.jpg)](https://youtu.be/oj50OkvIw6g)

## What you get

- Student enters roll number + class, gets full report card
- All exams show together (mid term, final, test 1, test 2 — whatever you have)
- Auto total, percentage, grade (A+ to F), pass/fail per subject
- Print button — prints a proper black & white report card
- Works on phones, tablets, laptops — everything
- Add a new class? Just create a new sheet tab. That's it
- Add a new subject? Just add a column. Done
- Completely free — no server, no hosting, no database fees

## Setup (takes like 5 min)

1. Go to [script.google.com](https://script.google.com), make a new project
2. Paste `Code.gs` in the default file
3. Make a new HTML file called `index.html`, paste the code
4. Run `setupDemoData()` once — this creates 3 classes with 15 demo students
5. Deploy > New Deployment > Web App (Execute as Me, Anyone can access)
6. Share the URL with students

No hosting. No domain. No backend server. Google handles everything for free.

## Test it with these roll numbers

| Class | Roll Numbers |
|-------|-------------|
| Grade 10 (A) | 1001, 1002, 1003, 1004, 1005 |
| Grade 10 (B) | 2001, 2002, 2003, 2004, 2005 |
| CLASS 9 | 3001, 3002, 3003, 3004, 3005 |

## How the sheet is structured

Each class = its own sheet tab. Sheet name = class name in dropdown.

| Exam Type | Admission No | Roll Check | Student Name | Father Name | Remarks | English | Math | Science | ... |
|-----------|-------------|------------|--------------|-------------|---------|---------|------|---------|-----|
| | | | | | Max Marks | 100 | 100 | 100 | ... |
| MID TERM | 1001 | NO | Student A | Father A | Good | 85 | 92 | 78 | ... |
| FINAL | 1001 | NO | Student A | Father A | Good | 88 | 95 | 82 | ... |

- Row 1 = subject names (start from column G, add as many as you want)
- Row 2 = max marks per subject
- Row 3 onwards = student data, one row per exam
- Column A = exam type (write anything — MID TERM, FINAL, UNIT TEST 1, whatever)
- Column B = roll number / admission number
- Column C = put "NO" to keep result visible

## Grades

| % | Grade |
|---|-------|
| 80%+ | A+ |
| 70-79 | A |
| 60-69 | B |
| 50-59 | C |
| 40-49 | D |
| 33-39 | E |
| Below 33 | F |

33% is the pass mark per subject. Green = pass, red = fail.

## Quick answers

**Is it free?** — Yeah, 100%. Google Sheets + Apps Script costs nothing.

**Can I use it for my school?** — Of course. Just change school name, logo, address in the code.

**Can students edit marks?** — Nope. It's read-only. Only you (sheet owner) can change anything.

**How many students?** — Google Sheets handles millions of cells so you're good unless you have like 50,000 students lol.

**More exam types?** — Just add rows with the exam name in Column A. Portal picks them up on its own.

**Works on phone?** — Yep. Android, iPhone, tablet, whatever.

## Built with

- Google Apps Script (backend, free)
- Google Sheets (database, free)
- HTML + CSS + JS (single file frontend)
- Font Awesome for icons
- Inter font from Google Fonts

## License

MIT — use it however you want.

---

Made by **[rameezimdad](https://www.youtube.com/@rameezimdad)** — if this saved you time, drop a star and sub to the channel for more stuff like this.
