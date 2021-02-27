import React, {useState} from 'react'
import QuizData from '../assets/data.json'
import Answer from './Answer';
import Question from "./Question";


const Quiz = () =>{

  const [questionId, setQuestionId] = useState(0);

  //fetch quiz data from here 
  const data = QuizData;

  const answerClick =(id)=>{

    if(id === data[questionId].question.id){
      const next = questionId +1 % data.length
      setQuestionId(next);
    }
  }

  if (data.length === questionId) {
    return (<div>Finished </div>)
  }

  return(

    <div >
      <Question question = {data[questionId].question}/>

      <div className="answers">
        {data[questionId].answers.map((ans) => 
        (<Answer key = {ans.id} 
                 id = {ans.id} 
                 char ={ans.char} 
                 questionId={data[questionId].question.id} 
                 answerClick ={answerClick}/>))}
      </div>

    </div>
  )
}

export default Quiz