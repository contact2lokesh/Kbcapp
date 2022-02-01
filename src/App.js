import React,{useState} from 'react';
import Start from './Components/Start'
import Question from './Components/Question';
import PriceMoney from './Components/PriceMoney';
import Price from './assets/Price';
import './App.css';

function App() {
// const [priceAmount, setPriceAmount] =useState(Price);
const [questionNumber, setQuestionNumber] = useState(1);
const [userName, setUserName] = useState(null);

const priceAmount = Price;
console.log(userName);
  return (
    <div className="App">
      {userName? (<>
      <Question questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} Price={priceAmount} />
      <PriceMoney Price={priceAmount} questionNumber={questionNumber} />
      </>): <Start setUserName={setUserName}/>}
     
    </div>
  );
}

export default App;
