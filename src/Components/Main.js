import React from 'react'

export default function Main(props) {
  return (
    <main>
        <h1 className="title">Quizzical</h1>
        <h2 className="title--desc">The quiz to check how smart you are</h2>
        <button className="title--button" onClick={props.handleClicked}>Start Quiz</button>
    </main>
  )
}

