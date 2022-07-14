import {useEffect, useState} from 'react'
import "./styles.css"
import Main from './Components/Main'
import Container from './Components/Container'
import Check from './Components/Check'


export default function App(){
  
    const [count, setCount] = useState(0)
    const [isChecked, setIsChecked] = useState(false)
    const [isClicked, setIsClicked] = useState(true)
    const [questions, setQuestions] = useState([{ }])

    const [allQuestions, setAllQuestions] = useState([])

    function handleClick() {
      setIsClicked(prevIsClicked => !prevIsClicked)  
      generateQuestion()
    }


    useEffect(() => {
      return fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
                .then(res => res.json())
                .then(data => setAllQuestions(data))              
    }, [])
    


    function generateQuestion(){      
      
      const length = allQuestions.results.length
      let q = []
      for (let i = 0; i < length; i++) {
        let ans=[...allQuestions.results[i].incorrect_answers]
        ans.push(allQuestions.results[i].correct_answer)
        ans.sort(() => Math.random() - 0.5);

        q.push({
          id: i,
          questions: allQuestions.results[i].question,
          answer: [...ans],
          correct: allQuestions.results[i].correct_answer
        }) 
      }
      setQuestions(prevQuestion =>{
        return q.map(queries => {
          return {
            ...prevQuestion,
            id: queries.id,
            question: queries.questions,
            answer: queries.answer,
            correct: queries.correct
          }
        })
      })
    }


    const theQuestion = () =>questions.map((quest) => {
     return (
        <Container 
          key = {quest.id}
          query= {quest.question}
          choice = {quest.answer}
          correct = {quest.correct}
          check = {isChecked}
          count = {count}
          handleCount = {handleCount}
        />
      )
    })

    function handleCheck() {
      setIsChecked(preChecked => !preChecked)
    }

    function handleCount() {
      setCount( prevCount => prevCount + 1);
    }

    return (
      <>    
        {isClicked === true ? <Main handleClicked={handleClick}/> : 

        <div className='container'>
          {theQuestion()}

          <Check 
            isChecked = {isChecked}
            handleCheck ={handleCheck}
            count = {count}
            quest_length = {questions.length}
          />
  
        </div>}
      </>
  )
}