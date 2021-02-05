import { questionType, Quiz } from './../types/quiz_types'

const shuffleArray = (array: any[])=>
    [...array].sort(()=>Math.random() - 0.5)


export const getQuizDetails = async(totalQustions: number, level: string): Promise<questionType[]>=>{
    const response = await fetch(`https://opentdb.com/api.php?amount=${totalQustions}&difficulty=${level}&type=multiple`)
    const {results} = await response.json();
    console.log(results)
    const quiz:questionType[] = results.map((questionObj: Quiz)=>{
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))


        }
    })
    return quiz
}