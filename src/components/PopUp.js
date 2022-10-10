import React, { useEffect } from 'react'
import { checkWin } from '../Helper';

const PopUp = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, playable }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';


  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations, You Won!!';
    playable = false;
  }
  else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  const onplay = ()=>{

    playAgain();
  }
  

  useEffect(() => { setPlayable(playable) });
  return (
    // <!-- Pop-up -->

    <div className="pop-up-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="pop-up">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={onplay} >Play Again</button>
      </div>
    </div>
  )
}

export default PopUp;