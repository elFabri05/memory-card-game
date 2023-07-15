import Header from './components/Header';
import Cards from './components/Cards';
import React, { useState } from 'react';
// import './App.css';


function App() {
const [score, setScore] = useState(0)
const [bestScore, setBestScore] = useState(score)

const handleIncrement = () => {
  setScore(score + 1)

  if(score >= bestScore)
  setBestScore(bestScore + 1)
}
const restartScore = () => setScore(0)

  return (
    <div >
      <Header score={score} bestScore={bestScore}/>
      <Cards handleIncrement={handleIncrement} restartScore={restartScore}/>
    </div>
  );
}

export default App;

