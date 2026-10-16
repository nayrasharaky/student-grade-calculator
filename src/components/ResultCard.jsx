
function ResultCard({ student }) {
  if (!student) {
    return (
      <div className="result-card empty-result">
        <h2>Student Result</h2>
        <p>Enter student details to see the result.</p>
      </div>
    );
  }

  const { name, score } = student;

  let grade;

  if (score >= 90) {
    grade = "A - Excellent";
  } else if (score >= 80) {
    grade = "B - Very Good";
  } else if (score >= 70) {
    grade = "C - Good";
  } else if (score >= 60) {
    grade = "D - Pass";
  } else {
    grade = "F - Fail";
  }

  const passed = score >= 60;

  return (
    <div className="result-card">
      <h2>Student Result</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <div className="score">
        {score} <span>/ 100</span>
      </div>

      <p>
        <strong>Grade:</strong> {grade}
      </p>

      <p className={passed ? "passed" : "failed"}>
        <strong>Status:</strong> {passed ? "Passed" : "Failed"}
      </p>
    </div>
  );
}

export default ResultCard;
