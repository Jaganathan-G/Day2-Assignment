import React,{useState} from "react"
import "./style.css"

const App=()=>
{
    let[score,setScore] = useState(0)//this setScore is managed by react, setscrore isthe method which used to change the scrore 
    //onClick={function(){}}
    return(
        <div>
            <h1>Day 2 Assignment</h1>
            <h1>This is my Counter Application</h1>
            <h3>The value of score is {score}</h3>
            <button onClick={()=>score>=25?"":setScore(score+1)}>Increment </button>
            <button onClick={()=>score>0?setScore(score-1):""}>Decrement </button>
            <button onClick={()=>{setScore(0)}}>Reset </button>
        </div>
    )
}
export default App