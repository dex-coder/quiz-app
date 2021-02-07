import React, { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './QuestionCard/QuestionCard';
import { getQuizDetails } from './services/quizService';
import { questionType, Quiz } from './types/quiz_types';
function App() {
  const [quiz, setQuiz] = useState<questionType[]>([])
  let [currentStep, setcurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false);
  useEffect(() => {
    async function fetchData() {
     const questions:questionType[] = await getQuizDetails(5,"easy");
     setQuiz(questions)
     
    }
   fetchData();    
  }, [])

  function handleChange(e:React.FormEvent<HTMLFormElement>, userAns: string) {
    e.preventDefault();
    console.log(userAns)
    const currentQuestion:questionType = quiz[currentStep];
    console.log("correct And:" + currentQuestion.correct_answer+ "--user Selection:" + userAns);
    
    if(userAns === currentQuestion.correct_answer ){
      setScore(++score)
    }
    if(currentStep !== quiz.length-1)
    setcurrentStep(++currentStep);

    else{
      //alert ("Your final score is: " + score + "out of " + quiz.length)
      setResult(true);
      //document.write(<h1>{"Your final score is: " + score + "out of " + quiz.length}</h1>)
      setcurrentStep(0)
      setScore(0)
    }
  }

  if(result){
    return(
      <div className="result_container">
        <div className="result_card_container">
        <h1 className="result_title">Result</h1>
        <p className="result_score">Your final score is: {score} <br/>  out of: {quiz.length}</p>
        {/* <button onClick={(e)=>{}}>Restart</button> */}
        </div>
      </div>
    )
  }
  if(!quiz.length)
      return <h3>Loading...</h3>
  return (
    <div>
      <QuestionCard
       options = {quiz[currentStep].option}
        question = {quiz[currentStep].question}
        callback={handleChange}
      />
    </div>
  );
}

export default App;
