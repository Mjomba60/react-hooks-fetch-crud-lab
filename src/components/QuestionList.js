import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDelete}) {
  const singleQuiz = questions.map(quiz => {
    return <QuestionItem key={quiz.id} question = {quiz} onDelete = {onDelete}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{singleQuiz}</ul>
    </section>
  );
}

export default QuestionList;
