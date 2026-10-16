
import { useState } from "react";

function StudentForm({ onCalculate }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const studentName = name.trim();
    const studentScore = Number(score);

    if (studentName === "") {
      alert("Please enter the student name.");
      return;
    }

    if (score === "" || studentScore < 0 || studentScore > 100) {
      alert("Please enter a score between 0 and 100.");
      return;
    }

    onCalculate({
      name: studentName,
      score: studentScore,
    });
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label htmlFor="studentName">Student Name</label>
      <input
        id="studentName"
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="studentScore">Score (0–100)</label>
      <input
        id="studentScore"
        type="number"
        placeholder="Enter score"
        min="0"
        max="100"
        step="any"
        value={score}
        onChange={(event) => setScore(event.target.value)}
      />

      <button type="submit">Calculate Grade</button>
    </form>
  );
}

export default StudentForm;
