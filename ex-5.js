const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  return students.reduce((sum, student) => sum + student.score / 4, 0);
}

console.log(getAverageStudentScore(students)); // Output: 87.5
