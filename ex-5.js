const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(total, students) {
  // Start coding here
  let scoreTotal = total + students.score;
  return scoreTotal;
}
// getAverageStudentScore(students); // Output: 87.5
const AverageStudentScore =
  students.reduce(getAverageStudentScore, 0) / students.length;
console.log(AverageStudentScore);
