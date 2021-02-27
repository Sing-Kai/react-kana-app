import React from 'react'

const Question = ({question}) =>{

  let audio = new Audio('http://localhost:8080/assets')

  const start = () => {
    audio.play()
  }

  return(
    <div className="question-container" onClick={start}>
      <h1>{question.char}</h1> 
      <span className="pulse"></span>   
    </div>
  )
}

export default  Question