import Trivia from "./Trivia";
import Timer from "./Timer"
import './Question.css';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
const Question = ({questionNumber, setQuestionNumber, Price})=>{
  console.log("Question Rendered");
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

 useEffect(()=>{
   questionNumber>1 && setEarned(Price.find(m=>m.id === questionNumber-1).amount);
 }, [Price, questionNumber]);

  return(<div className="main">
    {stop? <h1 className="priceWon">You Earned: {earned}</h1> : (<><div className='topContainer'>
      <div className='timer'>
        <Timer setStop={setStop} questionNumber={questionNumber}/>
      </div>
    </div>
    <div className='bottomContainer'>
      <Trivia setStop={setStop} 
              questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}
      />
    </div></>)}
    
  </div>);
}

export default Question;