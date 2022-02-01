import { useState, useRef } from 'react';
import './Start.css'

const Start = ({setUserName})=>{
    const [showWarningContent, setShowWarningContent] = useState(false);
    const inputRef = useRef();


    const handleUserName = ()=>{
        if(inputRef.current.value === ""){
            setShowWarningContent(true);
        } 
        setUserName(inputRef.current.value);
    };
 return(<div className='start'>
    <input type="text" placeholder='Enter Your Name' className='startInput' ref={inputRef}/>
    <button className='startButton' onClick={handleUserName}>Start</button>
     {showWarningContent ? <h3 className='warning'>Please Enter the Username!!</h3> :null}
 </div>);
}

export default Start;