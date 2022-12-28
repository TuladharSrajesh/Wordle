import React from 'react'
import Replay from './Replay'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
       {isCorrect && (
        <div>
            <h1>You Win!</h1>
            <p className='solution'>{solution}</p>
            <p>You found the solution in {turn} guesses :</p>
            <Replay />
        </div>
       )}

       {!isCorrect && (
        <div>
            <h1>Nevermind!!!</h1>
            <p className='solution'>{solution}</p>
            <p>Better luck next time</p>
        </div>
       )}
    </div>
  )
}
