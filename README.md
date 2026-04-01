# School Result Portal - Check Student Exam Results Online (Free)

A **free online result checking system** for schools, colleges, and coaching centers. Built with **Google Apps Script** and **Google Sheets** — no server, no hosting, no database cost. Just copy, paste, deploy, and share the link with students.

Students open the portal, enter their **roll number / admission number**, select their **class**, and instantly see their **complete report card** with marks, percentage, grade, and pass/fail status. Works on **mobile phones, tablets, and computers**.

## Who Is This For?

- School owners who want an **online result portal** without paying for expensive software
- Teachers who want to **share exam results online** with students and parents
- Coaching centers / tuition academies that need a **simple result checking website**
- Anyone who stores student marks in **Google Sheets** and wants a clean portal for it

## What Does It Do?

- Students enter roll number and class to **check their result online**
- Shows **all exams together** (Mid Term, Final, Unit Test, etc.) in one report card
- **Auto calculates** total marks, percentage, and grade (A+ to F)
- **Pass/Fail marking** on each subject (green = pass, red = fail)
- **Print the report card** with one click — comes out clean in black and white
- **Works on any phone** — fully mobile responsive, no app needed
- **Add new classes** just by creating a new sheet tab — no coding needed
- **Add new subjects** just by adding columns — everything is dynamic

## How to Set Up (5 Minutes)

1. Open [Google Apps Script](https://script.google.com) and create a new project
2. Copy **`Code.gs`** content into the default Code.gs file
3. Create a new HTML file called **`index.html`** and paste the content
4. Run **`setupDemoData()`** from the editor to create sample data with 3 classes and 15 students
5. Click **Deploy > New Deployment > Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the web app URL and share it with your students

**That's it. No hosting. No domain. No database. Completely free.**

## Demo Roll Numbers to Test

| Class | Roll Numbers |
|-------|-------------|
| Grade 10 (A) | 1001, 1002, 1003, 1004, 1005 |
| Grade 10 (B) | 2001, 2002, 2003, 2004, 2005 |
| CLASS 9 | 3001, 3002, 3003, 3004, 3005 |

## How the Google Sheet Works

Each class is a **separate sheet tab** (e.g., "Grade 10 (A)", "CLASS 9"). The sheet name becomes the class name in the dropdown automatically.

| Exam Type | Admission No | Roll Check | Student Name | Father Name | Remarks | English | Math | Science | ... |
|-----------|-------------|------------|--------------|-------------|---------|---------|------|---------|-----|
| | | | | | Max Marks | 100 | 100 | 100 | ... |
| MID TERM | 1001 | NO | Ali Ahmed | Father A | Good | 85 | 92 | 78 | ... |
| FINAL | 1001 | NO | Ali Ahmed | Father A | Good | 88 | 95 | 82 | ... |

- **Row 1** = Subject headers (add/remove subjects by adding/removing columns)
- **Row 2** = Maximum marks per subject (can be different for each subject)
- **Row 3+** = Student data (one row per exam per student)
- **Column A** = Exam type (MID TERM, FINAL, TEST 1, TEST 2 — anything you want)
- **Column B** = Admission/Roll number (the lookup key)
- **Column C** = "NO" means result is active and visible

## Grade System

| Percentage | Grade | Color |
|-----------|-------|-------|
| 80% and above | A+ | Green |
| 70% - 79% | A | Green |
| 60% - 69% | B | Blue |
| 50% - 59% | C | Amber |
| 40% - 49% | D | Orange |
| 33% - 39% | E | Red |
| Below 33% | F (Fail) | Red |

Pass mark per subject: **33%**

## Features at a Glance

| Feature | Details |
|---------|---------|
| Cost | Completely **FREE** |
| Database | Google Sheets (no MySQL, no Firebase) |
| Hosting | Google Apps Script (no server needed) |
| Mobile Friendly | Yes — works on all phones and tablets |
| Print Report Card | Yes — clean black & white print layout |
| Multiple Exams | Yes — Mid Term, Final, Tests all shown together |
| Multiple Classes | Yes — one sheet tab per class, unlimited |
| Dynamic Subjects | Yes — add/remove subjects by editing columns |
| Dynamic Max Marks | Yes — different max marks per subject supported |
| Grade Calculation | Automatic — A+ to F based on percentage |
| Pass/Fail per Subject | Automatic — 33% threshold |
| Demo Data | Included — run setupDemoData() once |
| Coding Required | No — just copy paste and deploy |

## Tech Stack

- **Google Apps Script** — backend (free, no server)
- **Google Sheets** — database (free, easy to edit)
- **HTML / CSS / JavaScript** — frontend (all in one file)
- **Font Awesome 6.5.1** — icons
- **Google Fonts (Inter)** — clean typography

## Common Questions

**Q: Is this really free?**
Yes. Google Apps Script and Google Sheets are free. No hidden costs.

**Q: Can I use this for my school?**
Yes. Change the school name, logo, and address in the code and you're good to go.

**Q: Can students hack or change their marks?**
No. The portal is read-only. Only people with access to the Google Sheet can edit marks.

**Q: How many students can it handle?**
Google Sheets supports up to 10 million cells. For most schools, that's more than enough.

**Q: Can I add more exam types like Unit Test, Pre-Board, etc.?**
Yes. Just add rows with the new exam type name in Column A. The portal picks them up automatically.

**Q: Does it work on phones?**
Yes. Fully responsive — works on Android, iPhone, tablets, and desktop.

## Keywords

`school result portal` `online result checking system` `student result checker` `google sheets result portal` `free school software` `exam result website` `report card generator` `google apps script school project` `check result by roll number` `online marksheet` `school management system free` `student marks portal` `print report card online` `school result website free` `google sheets school database`

## License

MIT License — free to use, modify, and distribute.

---

**Developed by [Rameez Scripts](https://www.youtube.com/@RameezScripts)**

If this helped you, please give it a star and subscribe to the YouTube channel for more free school management tools.
