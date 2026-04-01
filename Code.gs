/** Rameez Scripts - School Result Portal */

// run once to seed demo data
function setupDemoData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // temp sheet so we can safely delete others
  var temp = ss.insertSheet("_temp_setup");

  // nuke existing class sheets
  ["Grade 10 (A)", "Grade 10 (B)", "CLASS 9"].forEach(function(n) {
    var sh = ss.getSheetByName(n);
    if (sh) ss.deleteSheet(sh);
  });

  // subjects per class
  var subj10 = ["English", "Urdu", "Mathematics", "Physics", "Chemistry", "Biology", "Computer", "Islamiat", "Pak Studies"];
  var subj9 = ["English", "Urdu", "Mathematics", "Gen Science", "Social Studies", "Islamiat", "Pak Studies", "Computer"];

  // Grade 10 (A)
  _buildSheet(ss, "Grade 10 (A)", subj10, 100, [
    { n: "Student A",  f: "Father A",  id: 1001, rem: "Excellent",   m: { "MID TERM": [85,78,92,88,76,82,90,85,80], "FINAL": [88,82,95,90,80,85,92,87,83] }},
    { n: "Student B",  f: "Father B",  id: 1002, rem: "Good",        m: { "MID TERM": [72,68,55,60,58,65,70,75,72], "FINAL": [75,70,60,63,62,68,73,78,75] }},
    { n: "Student C",  f: "Father C",  id: 1003, rem: "Average",     m: { "MID TERM": [45,50,38,42,35,48,55,60,52], "FINAL": [48,53,40,45,38,50,58,62,55] }},
    { n: "Student D",  f: "Father D",  id: 1004, rem: "Outstanding", m: { "MID TERM": [95,92,98,96,94,90,97,93,95], "FINAL": [97,95,99,98,96,93,98,95,97] }},
    { n: "Student E",  f: "Father E",  id: 1005, rem: "Needs Work",  m: { "MID TERM": [30,35,25,28,22,33,40,45,38], "FINAL": [35,38,30,32,28,36,42,48,40] }}
  ]);

  // Grade 10 (B)
  _buildSheet(ss, "Grade 10 (B)", subj10, 100, [
    { n: "Student F",  f: "Father F",  id: 2001, rem: "Good",         m: { "MID TERM": [80,75,85,78,72,80,88,82,78], "FINAL": [83,78,88,82,76,83,90,85,80] }},
    { n: "Student G",  f: "Father G",  id: 2002, rem: "Average",      m: { "MID TERM": [62,58,50,55,48,60,65,70,62], "FINAL": [65,62,55,58,52,63,68,73,65] }},
    { n: "Student H",  f: "Father H",  id: 2003, rem: "Outstanding",  m: { "MID TERM": [90,88,95,92,90,85,93,88,90], "FINAL": [93,90,97,95,93,88,95,90,92] }},
    { n: "Student I",  f: "Father I",  id: 2004, rem: "Satisfactory", m: { "MID TERM": [40,42,35,38,33,45,50,55,42], "FINAL": [44,45,38,40,36,48,53,58,45] }},
    { n: "Student J",  f: "Father J",  id: 2005, rem: "Good",         m: { "MID TERM": [75,70,78,72,68,74,80,76,72], "FINAL": [78,73,80,75,72,77,83,79,75] }}
  ]);

  // CLASS 9
  _buildSheet(ss, "CLASS 9", subj9, 100, [
    { n: "Student K",  f: "Father K",  id: 3001, rem: "Good",        m: { "MID TERM": [82,76,88,80,75,84,78,85], "FINAL": [85,80,90,83,78,87,82,88] }},
    { n: "Student L",  f: "Father L",  id: 3002, rem: "Average",     m: { "MID TERM": [55,60,45,50,58,62,65,52], "FINAL": [58,63,48,53,60,65,68,55] }},
    { n: "Student M",  f: "Father M",  id: 3003, rem: "Good",        m: { "MID TERM": [70,65,72,68,62,70,66,68], "FINAL": [73,68,75,72,65,73,70,72] }},
    { n: "Student N",  f: "Father N",  id: 3004, rem: "Excellent",   m: { "MID TERM": [92,88,95,90,85,92,88,90], "FINAL": [95,92,98,93,88,95,92,93] }},
    { n: "Student O",  f: "Father O",  id: 3005, rem: "Needs Work",  m: { "MID TERM": [28,32,20,25,30,35,38,25], "FINAL": [32,35,25,28,33,38,40,30] }}
  ]);

  ss.deleteSheet(temp);
  SpreadsheetApp.getUi().alert("Demo data created for all 3 classes!");
}

// builds one class sheet
function _buildSheet(ss, name, subjects, maxPerSubj, students) {
  var sh = ss.insertSheet(name);
  var cols = 6 + subjects.length;
  var data = [];

  data.push(["Exam Type", "Admission No", "Roll Check", "Student Name", "Father Name", "Remarks"].concat(subjects));
  data.push(["", "", "", "", "", "Max Marks"].concat(subjects.map(function() { return maxPerSubj; })));

  students.forEach(function(s) {
    Object.keys(s.m).forEach(function(exam) {
      data.push([exam, s.id, "NO", s.n, s.f, s.rem].concat(s.m[exam]));
    });
  });

  sh.getRange(1, 1, data.length, cols).setValues(data);
  sh.getRange(1, 1, 1, cols).setFontWeight("bold").setBackground("#001f3f").setFontColor("white");
  sh.getRange(2, 1, 1, cols).setFontWeight("bold").setBackground("#e8f0fe");
  sh.setFrozenRows(2);
  for (var c = 1; c <= cols; c++) sh.autoResizeColumn(c);
}

// returns all sheet names for class dropdown
function getSheets() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function(sh) { return sh.getName(); });
}

function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('index.html')
    .setTitle("School Result Portal")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitDT(phoneNumber, selectedSheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(selectedSheetName);
  var vals = sheet.getDataRange().getValues();

  var logo1 = "https://via.placeholder.com/100x100?text=Logo+1";
  var logo2 = "https://via.placeholder.com/100x100?text=Logo+2";

  // parse subjects + max marks
  var subjects = [], maxMarks = [];
  for (var j = 6; j < vals[0].length; j++) {
    if (vals[0][j] && vals[1][j]) {
      subjects.push(String(vals[0][j]));
      maxMarks.push(parseInt(vals[1][j]));
    }
  }
  var totalMax = maxMarks.reduce(function(a, b) { return a + b; }, 0);

  // collect all exam rows for student
  var exams = [], info = null;
  for (var i = 2; i < vals.length; i++) {
    if (vals[i][1] == phoneNumber && vals[i][2] == "NO") {
      if (!info) info = { name: vals[i][3], father: vals[i][4], admNo: vals[i][1] };
      var marks = [];
      for (var l = 0; l < subjects.length; l++) marks.push(parseInt(vals[i][6 + l]));
      exams.push({ type: String(vals[i][0]), marks: marks, remarks: vals[i][5] });
    }
  }

  if (!info) return '<div class="no-result"><i class="fas fa-exclamation-circle"></i> Roll Number Not Found.</div>';

  // precompute stats per exam
  var stats = exams.map(function(ex) {
    var total = ex.marks.reduce(function(a, b) { return a + b; }, 0);
    var pct = ((total / totalMax) * 100).toFixed(2);
    var gr = _grade(pct);
    return { type: ex.type, marks: ex.marks, total: total, pct: pct, grade: gr.g, gc: gr.c, remarks: ex.remarks };
  });

  var examCount = stats.length;
  var colSpan = 3 + examCount; // sr + subject + max + exam cols

  // build report card
  var h = '';
  h += '<div class="report-card">';

  // header
  h += '<div class="rc-header">';
  h += '<div class="logos"><img src="' + logo1 + '" alt="Logo"><img src="' + logo2 + '" alt="Logo"></div>';
  h += '<h3>Rameez Scripts</h3>';
  h += '<p class="addr">City, State, Country</p>';
  h += '<div class="rc-title">Progress Report</div>';
  h += '</div>';

  // student info table
  h += '<table class="rc-info">';
  h += '<tr><td width="50%"><div class="lbl">Student Name</div><div class="val">' + info.name + '</div></td>';
  h += '<td width="50%"><div class="lbl">Father\'s Name</div><div class="val">' + info.father + '</div></td></tr>';
  h += '<tr><td><div class="lbl">Admission No</div><div class="val">' + info.admNo + '</div></td>';
  h += '<td><div class="lbl">Class</div><div class="val">' + selectedSheetName + '</div></td></tr>';
  h += '</table>';

  // marks table
  h += '<table class="rc-marks">';
  h += '<thead><tr><th>Sr#</th><th class="subj-col">Subject</th><th>Max Marks</th>';
  stats.forEach(function(s) { h += '<th>' + s.type + '</th>'; });
  h += '</tr></thead><tbody>';

  // subject rows
  for (var l = 0; l < subjects.length; l++) {
    h += '<tr><td>' + (l + 1) + '</td><td class="subj-col">' + subjects[l] + '</td><td>' + maxMarks[l] + '</td>';
    stats.forEach(function(s) {
      var obt = s.marks[l];
      var cls = (obt / maxMarks[l]) * 100 >= 33 ? 'mark-pass' : 'mark-fail';
      h += '<td class="' + cls + '">' + obt + '</td>';
    });
    h += '</tr>';
  }

  // total row
  h += '<tr class="rc-total"><td></td><td class="subj-col">Total</td><td>' + totalMax + '</td>';
  stats.forEach(function(s) { h += '<td>' + s.total + '</td>'; });
  h += '</tr>';

  // percentage row
  h += '<tr class="rc-pct"><td></td><td class="subj-col">Percentage</td><td></td>';
  stats.forEach(function(s) { h += '<td>' + s.pct + '%</td>'; });
  h += '</tr>';

  // grade row
  h += '<tr class="rc-grade"><td></td><td class="subj-col">Grade</td><td></td>';
  stats.forEach(function(s) { h += '<td style="color:' + s.gc + '">' + s.grade + '</td>'; });
  h += '</tr>';

  // remarks row
  h += '<tr class="rc-rem"><td></td><td class="subj-col">Remarks</td><td></td>';
  stats.forEach(function(s) { h += '<td>' + s.remarks + '</td>'; });
  h += '</tr>';

  h += '</tbody></table>';

  // signatures
  h += '<div class="rc-sigs">';
  h += '<div class="sig-block"><div class="sig-line"></div><p>Class Teacher</p></div>';
  h += '<div class="sig-block"><div class="sig-line"></div><p>Principal</p></div>';
  h += '</div>';

  // note
  h += '<div class="rc-note">';
  h += '<strong>NOTE:</strong> This provisional result intimation is issued as a notice only. Errors and omissions excepted. If a candidate finds any discrepancy, he/she may contact the school within 30 days after the declaration of the result.';
  h += '</div>';

  h += '</div>';
  h += '<button class="btn btn-secondary print-btn" onclick="window.print()"><i class="fas fa-print"></i> &nbsp;Print Report Card</button>';

  return h;
}

// grade helper
function _grade(pct) {
  if (pct >= 80) return { g: "A+", c: "#2d7d46" };
  if (pct >= 70) return { g: "A",  c: "#2d7d46" };
  if (pct >= 60) return { g: "B",  c: "#0074D9" };
  if (pct >= 50) return { g: "C",  c: "#e8a317" };
  if (pct >= 40) return { g: "D",  c: "#e67e22" };
  if (pct >= 33) return { g: "E",  c: "#d32f2f" };
  return { g: "F", c: "#d32f2f" };
}
