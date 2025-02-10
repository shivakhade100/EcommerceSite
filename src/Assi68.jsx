import { useState } from "react";
import BtnPanel from './BtnPanel';
import ScorePanel from './ScorePanel';

export default function Assi68(){
   
     let values = [-5, -1, 1, 5];
 let [score, setScore] = useState(0)
 function handleClick(index){
   console.log(values[index]);
   
   setScore(score+values[index])
   
   // setScore()
 }
    return(<>
 ...........
 <BtnPanel values={values} score={score} onbtnClick={handleClick}/>
 <ScorePanel score={score} /></>)
}