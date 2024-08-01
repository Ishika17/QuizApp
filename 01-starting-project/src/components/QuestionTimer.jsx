import {useEffect, useState} from 'react';
export default function QuestionTimer({timeout , onTimedout , mode}) {
    const[remainingTime , setRemainngTime ] = useState(timeout);
    useEffect(() => {
       const timer =  setTimeout(onTimedout, timeout);
       return() => {
        clearTimeout(timer);
       }
    } , [timeout , onTimedout]);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainngTime(prevRemaningTime => prevRemaningTime-100);
        }, 100);
        return() => {
            clearInterval(interval);
        };
    } , [] );

   

    return<progress id = "question-time" max = {timeout} 
    className={mode}
    value={remainingTime}/>
}