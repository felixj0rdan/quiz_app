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

    return (
        <div>
           <h1>test</h1> 
            {/* <Quiz ques={data.question} ans="grbfv" opts="sdffexs" /> */}
            {data.map(data => (
              <div>
                <Quiz ques={data.question} ans="grbfv" opts="sdffexs" /> 
                {/* <h1>{data.question}</h1> */}
              </div>
            ))}
           {JSON.stringify(data)}
        </div>
    )
}

export default App