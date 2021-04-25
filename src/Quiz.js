// import 'bootstrap/dist/css/bootstrap.min.css'
import './Quiz.css'
import React, { useState } from 'react'

export default function Quiz({ques, ans, opts}) {
    const [ans1, setAns] = useState("")
    opts = opts.concat(ans)
    opts.sort()
    var message=""
    var opt=["norm","norm","norm","norm"]
    const [check, setCheck,] = useState(false)
    const [mess, setMess] = useState(5)
    var pos
    if(check) {
        var opt=["wrong","wrong","wrong","wrong"]
        
        for(var i=0; i<opts.length; i++)
            if(ans === opts[i]){
                opt[i]="right"
                pos=i
            }
        if (pos == mess)
            message="Right"
        else
            message="Wrong"      
    }
    return (
        <div className="card">
            <div className="Ques">{ques}</div>
            <br></br>
            <button className={opt[0]} onClick={() => {setCheck(true); setMess(0)}}>{opts[0]} </button><br/>
            <button className={opt[1]} onClick={() => {setCheck(true); setMess(1)}}>{opts[1]} </button><br/>
            <button className={opt[2]} onClick={() => {setCheck(true); setMess(2)}}>{opts[2]} </button><br/>
            <button className={opt[3]} onClick={() => {setCheck(true); setMess(3)}}>{opts[3]}</button><br/>
            <div>{message}</div>
            <br></br>
        </div>
    )
}
