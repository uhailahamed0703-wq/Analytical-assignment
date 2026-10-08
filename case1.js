const studentName = "Andi";
const assignment = 80;
const midterm = 75;
const finalExam = 90;

const finalScore = (assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4);
const status = finalScore >= 70 ? "Passed" : "Failed";
const category = finalScore >= 85 ? "Excellent" : finalScore >= 70 ? "Good" : "Failed";

console.log(`Student: ${studentName}`);
console.log(`Assignment: ${assignment}`);
console.log(`Midterm: ${midterm}`);
console.log(`Final Exam: ${finalExam}`);
console.log(`Final Score: ${finalScore}`);
console.log(`Status: ${status}`);
console.log(`Category: ${category}`);