import React, { useEffect, useRef, useState } from "react"; 
// import Price from '../assets/Price';
import TriviaQuestions from "../assets/TriviaQuestions";
import '../Components/Trivia.css';
// import Question from './Question';

const Trivia = ({setStop, questionNumber, setQuestionNumber})=>{
    console.log("Trivia Rendered");
    const [question, setQuestion] = useState(null);
    const [selectanswer, setSelectAnswer] = useState(null);
    const [className, setClassName] = useState("active");

    useEffect(()=>{
        setQuestion(TriviaQuestions[questionNumber-1]);
    }, [questionNumber]);

   const delay =(duration, callback)=> {
       setTimeout(()=>{
            callback();
       }, duration);
   }     
    const handleAnswer = (a)=>{
        // console.log(a);
        setSelectAnswer(a);
        setClassName("answer active");
        delay(1000, ()=> {setClassName(a.correct? "answer correct": "answer wrong" )});
        delay(6000, ()=>{
              if(a.correct){
                setQuestionNumber(questionNumber+1);
              } else{
                  setStop(true);
              }
        });
        
    }
    return(<div className='trivia'>
        <div className="question">{question?.question}</div>
        <div className="answers" >
            {question?.answer.map((a)=>(
            <div className={selectanswer===a? className: "answer"} onClick={()=>handleAnswer(a)}>{a.text}</div>))}
           
            
        </div>
    </div>);
}

export default Trivia;