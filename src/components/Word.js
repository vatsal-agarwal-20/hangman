import React from 'react'

const Word = ({selectedWord,correctLetters}) => {
  return (
    <div className='word'>
     {selectedWord
            // convert to array and split to letters
            .split('')
            // map through array and return
            // check if letter is in correct letters
            // if yes return letter, if no return empty string
            .map((letter,i) => {
              return(
                <span className="letter" key={i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
              )
            })}
    </div>
  )
}

export default Word