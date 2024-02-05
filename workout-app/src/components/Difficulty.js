import React from 'react';
import { Link } from 'react-router-dom';
import { DifficultyWrapper } from './styles';

function DifficultySelection() {
  return (
    <DifficultyWrapper>
      <h2>Choose a Difficulty</h2>
      <ul>
        <li>
          <Link to="/exercise/easy">EASY</Link>
        </li>
        <li>
          <Link to="/exercise/medium">MEDIUM</Link>
        </li>
        <li>
          <Link to="/exercise/hard">HARD</Link>
        </li>
      </ul>
    </DifficultyWrapper>
  );
}

export default DifficultySelection;

