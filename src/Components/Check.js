import React from 'react'

function Check(props) {
  return (
    <div className='container'>
          {props.isChecked === false ? 
            <button className="container--check" onClick={()=>{props.handleCheck();}}>Check Answer</button> 
            :
            <div className="container--result">
              <h3 className="conatiner--result__total">`You scored {props.count}/{props.quest_length} correct answers`</h3>
              <button className="container--result__button" onClick={()=> {props.handleCheck(); window.location.reload(false); }}>Play Again</button>
            </div>
          
          }
    </div>
  )
}
export default Check