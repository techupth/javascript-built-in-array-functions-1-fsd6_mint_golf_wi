const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  // let scoreTotal = total + students.score;
  // return scoreTotal;
  return (
    students.reduce((total, student) => {
      return total + student.score;
    }, 0) / students.length
  );
}
console.log(getAverageStudentScore(students)); // Output: 87.5
// const AverageStudentScore =
//   students.reduce(getAverageStudentScore, 0) / students.length;
// console.log(AverageStudentScore);
