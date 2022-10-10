import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import PopUp from './components/PopUp';
import Notification from './components/Notification'
import { showNotification as show} from './Helper';
import './App.css';
const words = ["application", "programming", "interface", "wizard"];
  // choose random word
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  

function App() {
  const [playable,setPlayable]=useState(true);
  let [correctLetters,setCorrectLetters]=useState([]);
  let [wrongLetters,setWrongLetters]=useState([]);
  const [showNotification,setShowNotification]=useState(false);


  useEffect(()=>{
    const handleKeyDown= event =>{
      const {key,keyCode}=event;
      
      if (playable && keyCode >= 65 && keyCode <= 90) {
        // put letter into variable
        const letter = key.toLowerCase();
        // check if letter is in selected word
        if (selectedWord.includes(letter)) {
            // check if not already entered
            if (!correctLetters.includes(letter)) {
                // add letter into correct letters
                setCorrectLetters(currentLetters => [...currentLetters,letter]);
                // update interface
                
            } else {
                show(setShowNotification);
            }
        } else {
            // check if not already entered
            if (!wrongLetters.includes(letter)) {
                // add letter into wrong letters
                setWrongLetters(currentLetters => [...currentLetters,letter]);
                
            } else {
              show(setShowNotification);
            }
        }
    }
    }
    window.addEventListener("keydown", handleKeyDown);
    
    return () => window.removeEventListener('keydown',handleKeyDown);
      
  },[correctLetters, wrongLetters, playable, setCorrectLetters, setWrongLetters]);
  
  function playAgain(){
  
    setPlayable(true);

    //Empty arrays
    setCorrectLetters=([]);
    setWrongLetters=([]);

    const random=Math.floor(Math.random() * words.length);
    selectedWord=words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word  selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <PopUp playable={playable} correctLetters={correctLetters} wrongLetters={wrongLetters}
       selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
