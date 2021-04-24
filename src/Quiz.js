import React from 'react'

export default function Quiz({ques, ans, opts}) {
    return (
        <div>
            <h1>{ques}</h1>
            <h2>{ans}</h2>
        </div>
    )
}
