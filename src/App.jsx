
import { useState } from "react";
import StudentForm from "./components/StudentForm";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <main className="app">
      <div className="container">
        <h1>Student Grade Calculator</h1>
        <p className="subtitle">
          Enter student information to calculate the grade.
        </p>

        <StudentForm onCalculate={setStudent} />

        <ResultCard student={student} />
      </div>
    </main>
  );
}

export default App;
