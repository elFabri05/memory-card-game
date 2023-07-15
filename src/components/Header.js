import React from 'react';
import '../index.css';

function Header(props) {

    return(

        <div>
        {props.score === 12 ? (
          <h1 className='winner'>You Won!</h1>
        ) : (
          <div className='header'>
            <div className='titles'>
              <h1>Memory Landscape Card Game</h1>
              <p>Get points by clicking on an image without repeating it.</p>
            </div>
            <div className='scores'>
              <span>Score: {props.score}</span>
              <br/>
              <span>Best score: {props.bestScore}</span>
            </div>
          </div>
        )}
      </div>
)}

export default Header;