import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
        .then((r) => r.json())
        .then(data => setQuestions(data));
  },[])

  function onFormSubmit(formObj){
    const updatedQuizes = [...questions, formObj]
    setQuestions(updatedQuizes)
  }

  function onDelete(id){
    const updatedQuizes = questions.filter(quiz => quiz.id != id)
    setQuestions(updatedQuizes)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit = {onFormSubmit} /> : <QuestionList questions = {questions} onDelete = {onDelete}/>}
    </main>
  );
}

export default App;
