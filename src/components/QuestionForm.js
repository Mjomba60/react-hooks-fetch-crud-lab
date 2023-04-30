import React, { useState } from "react";

function QuestionForm({onFormSubmit}) {
  const formAnswers = []
  const [formData, setFormData] = useState({
    prompt: "",
    answers: [],
    correctIndex: 0,
  });

  function handleChange(event) {

    switch (event.target.name) {
      case "answer1":
        formAnswers[0] = event.target.value
        break;
      case "answer2":
        formAnswers[1] = event.target.value
        break;
      case "answer3":
        formAnswers[2] = event.target.value
        break;
      case "answer2":
        formAnswers[1] = event.target.value
        break;
      default:
        break;
    }
    
    const key = event.target.name.includes("answer") ? "answers" : event.target.name
    const value = event.target.name.includes("answer") ? formAnswers : event.target.value
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/questions", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(formData)
    })
    onFormSubmit(formData)
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={formData.answers[0]}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formData.answers[1]}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formData.answers[2]}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formData.answers[3]}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formData.answer1}</option>
            <option value="1">{formData.answer2}</option>
            <option value="2">{formData.answer3}</option>
            <option value="3">{formData.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
