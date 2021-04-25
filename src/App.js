import React,{useState,useEffect} from 'react';
import Quiz from './Quiz';
const api = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";


function App() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data.results))
            // .then(data => console.log(data.results))
    },[])
    var n=0
    return (
        <div>
            {data.map(data => (
              <div>
                <Quiz ques={data.question} ans={data.correct_answer} opts={data.incorrect_answers} no={n+=1}/> 
              </div>
            ))}
        </div>
    )
}

export default App