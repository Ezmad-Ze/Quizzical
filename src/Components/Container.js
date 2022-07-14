import React, {useState} from 'react'

export default function Conatiner(props){


    const [choices, setChoices] = useState({
      isCliked: false,
      choice: ""
    })


    

    function handleChange(event) {
      const {value, type, checked} = event.target
      setChoices(prev => {
          return {
              ...prev,
              isCliked: !prev.isCliked,
              choice: type === "checkbox" ? checked : value
          }
      })
  }

    const styleCorrect ={
      backgroundColor: (props.check === true && choices.choice === props.correct)  && "#94D7A2",
      color:  (props.check === true && choices.choice === props.correct)  &&  "#293264",
    }
    const styleInCorrect ={
      backgroundColor: (props.check === true && choices.choice !== props.correct)  && "#F8BCBC", 
      color:  (props.check === true && choices.choice !== props.correct)  &&  "#293264",
    }

    
    return (
        <div className="container" key = {props.id}>
          <h2 className="container--quest">{props.query}</h2>
            <div className="container--quest__choices" onChange={handleChange}>

              <input 
                  type="radio"
                  id={props.query}
                  name={props.query}
                  value={props.choice[0]}            
              />
              <label htmlFor={props.query} 
                    style={(props.choice[0]===props.correct ) ? styleCorrect : styleInCorrect}
                    onClick={()=>{
                              props.check === true &&
                              ((window.confirm("Do u want to play Again?") === true) && window.location.reload(false));
                              props.choice[0]===props.correct && props.handleCount()
                            }}
                >
                {props.choice[0]}
              </label>
              <br />

              <input 
                  type="radio"
                  id={props.query + 1}
                  name={props.query}
                  value={props.choice[1]}
              />
                
                <label htmlFor={props.query + 1} 
                    style={props.choice[1]===props.correct ? styleCorrect : styleInCorrect}
                    onClick={()=>{
                              props.check === true &&
                              ((window.confirm("Do u want to play Again?") === true) && window.location.reload(false));
                              props.choice[1]===props.correct && props.handleCount()
                            }}
                >
                {props.choice[1]}
              </label>
              <br />

              <input 
                  type="radio"
                  id={props.query + 2}
                  name={props.query}
                  value={props.choice[2]}
              />
              <label htmlFor={props.query + 2} 
                    style={props.choice[2]===props.correct ? styleCorrect : styleInCorrect}
                    onClick={()=>{
                              props.check === true &&
                              ((window.confirm("Do u want to play Again?") === true) && window.location.reload(false));
                              props.choice[2]===props.correct && props.handleCount()
                            }}
              >
                {props.choice[2]}
              </label>
              <br />

              <input 
                  type="radio"
                  id={props.query + 3}
                  name={props.query}
                  value={props.choice[3]}                    
              />
              <label htmlFor={props.query + 3} 
                    style={props.choice[3]===props.correct ? styleCorrect : styleInCorrect}
                    onClick={()=>{
                              props.check === true &&
                              ((window.confirm("Do u want to play Again?") === true) && window.location.reload(false));
                              props.choice[3]===props.correct && props.handleCount()
                            }}
              >
                {props.choice[3]}
              </label>

              <br />

          </div>
          <hr />
      </div>
    )
}