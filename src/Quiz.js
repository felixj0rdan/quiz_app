import './Quiz.css'
import React, { useState, useEffect } from 'react'


export default function Quiz({ques, ans, opts, no, start}) {
    opts = opts.concat(ans)
    opts.sort()
    var message=""
    var opt=["btn-primary","btn-primary","btn-primary","btn-primary"]
    const [check, setCheck] = useState()
    const [mess, setMess] = useState()
    var pos
    if(check) {
        opt=["btn-danger","btn-danger","btn-danger","btn-danger"]
        dest(start);
        for(var i=0; i<opts.length; i++)
            if(ans === opts[i]){
                opt[i]="btn-success"
                pos=i;
            }
            if (pos === mess)
                message="Right"
            else
                message="Wrong"     
    }
    function dest(ad) {
        var ids = [0,1,2,3] 
        for (var i = 0; i < 4; i++) {
            
            document.getElementById(ids[i]+ad).disabled =true;
            console.log(ids[i]+ad);
        }
    }
    return (
        <div className="card">
            <div className="Ques">{no}. {ques}</div>
            <br></br>
            <button id={start+0} className={opt[0]} onClick={() => {setCheck(true); setMess(0)}}>{opts[0]}</button><br/>
            <button id={start+1} className={opt[1]} onClick={() => {setCheck(true); setMess(1)}}>{opts[1]}</button><br/>
            <button id={start+2} className={opt[2]} onClick={() => {setCheck(true); setMess(2)}}>{opts[2]}</button><br/>
            <button id={start+3} className={opt[3]} onClick={() => {setCheck(true); setMess(3)}}>{opts[3]}</button><br/>
            <div className="message">{message}</div>
            <br></br>
        </div>
    );
}
