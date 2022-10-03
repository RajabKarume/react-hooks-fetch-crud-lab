import React, { useState, useEffect }  from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((responce)=>responce.json())
    .then((data)=> setQuestions(data))
  },[])
  console.log(questions)

  function handleDeleteQuestions(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(
        < QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestions} />

      ))}</ul>
    </section>
  );
}

export default QuestionList;
