import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard/QuestionCard';
import { getQuizDetails } from './services/quizService';
import { questionType, Quiz } from './types/quiz_types';
function App() {
  const [quiz, setQuiz] = useState<questionType[]>([])
  let [currentStep, setcurrentStep] = useState(0)
  let [score, setScore] = useState(0)
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
      alert ("Your final score is: " + score + "out of " + quiz.length)
      setcurrentStep(0)
      setScore(0)
    }
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
