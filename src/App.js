import React,{useState,useEffect} from 'react';
import Quiz from './Quiz';
import './App.css';


const api = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";


function App() {
    const [data,setData] = useState([]);
    const [theme,setTheme] = useState(false);
    const darkTheme = {
      backgroundColor:"black",
      color:"white",
      // marginTop: 20
      // padding:50
    }
    const lightTheme = {
      backgroundColor:"white",
      color:"black",
      // marginTop: 10

      // padding:50
    }
    const toggle = () => {
      setTheme(!theme)
    }

    useEffect(()=>{
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data.results))
            // .then(data => console.log(data.results))
    },[])
    var n=0,s=-1
    return (
        <div style={theme ? darkTheme : lightTheme}>
            {/* <button type="submit" onClick={toggle}>Toggle Theme</button> */}
            <label className="switch">
            <input type="checkbox" onChange={toggle} />
            <span className="slider round"></span>
            </label>
            {data.map(data => (
              <div>
                <Quiz theme={theme ? darkTheme : lightTheme} ques={data.question} ans={data.correct_answer} opts={data.incorrect_answers} no={n+=1} start= {s+=4}/> 
              </div>
            ))}
        </div>
    )
}

export default App