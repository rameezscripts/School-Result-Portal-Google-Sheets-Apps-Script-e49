# School Result Portal - Google Apps Script

A dynamic, mobile-friendly **School Result Portal** built with **Google Apps Script** and **Google Sheets** as the database. Students can look up their exam results by entering their admission number and selecting their class. The portal automatically finds **all exam types** (Mid Term, Final, Test 1, Test 2, etc.) and displays them **side by side** in a single, printable report card.

## Features

- **Dynamic Report Card** - Automatically combines all exam types into one table with side-by-side columns
- **Google Sheets Database** - Each class is a separate sheet tab; add a new sheet = new class appears automatically
- **Auto Grade Calculation** - Grades from A+ to F with color-coded display based on percentage
- **Pass/Fail Highlighting** - Subject-wise pass/fail marking (33% threshold) with green/red indicators
- **Print-Ready** - Clean, traditional black & white report card layout optimized for printing (Ctrl+P)
- **Mobile Responsive** - Works on all devices with proper touch handling and no iOS zoom issues
- **Demo Data Included** - One-click `setupDemoData()` function seeds 3 classes with 15 students

## How It Works

1. Student opens the portal
2. Enters admission number and selects class from dropdown
3. Portal fetches **all exam records** for that student from Google Sheets
4. Displays a complete progress report with marks, totals, percentages, grades, and remarks

## Sheet Structure

Each class sheet follows this layout:

| Exam Type | Admission No | Roll Check | Student Name | Father Name | Remarks | English | Math | ... |
|-----------|-------------|------------|--------------|-------------|---------|---------|------|-----|
| | | | | | Max Marks | 100 | 100 | ... |
| MID TERM | 1001 | NO | Student A | Father A | Good | 85 | 92 | ... |
| FINAL | 1001 | NO | Student A | Father A | Good | 88 | 95 | ... |

- **Row 1**: Headers (subjects start from column G)
- **Row 2**: Max marks per subject
- **Row 3+**: Student data (one row per exam per student)

## Grade Scale

| Percentage | Grade |
|-----------|-------|
| 80%+ | A+ |
| 70-79% | A |
| 60-69% | B |
| 50-59% | C |
| 40-49% | D |
| 33-39% | E |
| Below 33% | F |

## Setup & Deployment

1. Create a new Google Apps Script project
2. Copy `Code.gs` and `index.html` into the project
3. Run `setupDemoData()` once to create sample data
4. Deploy as **Web App** (Execute as: Me, Access: Anyone)
5. Share the web app URL with students

## Tech Stack

- Google Apps Script (backend)
- Google Sheets (database)
- HTML5 / CSS3 / Vanilla JavaScript (frontend)
- Font Awesome 6.5.1 (icons)
- Google Fonts - Inter (typography)

## Screenshots

> Deploy the app and test with demo admission numbers: **1001-1005** (Grade 10 A), **2001-2005** (Grade 10 B), **3001-3005** (Class 9)

## License

MIT License

---

**Developed by [Rameez Scripts](https://www.youtube.com/@RameezScripts)**
