import React from 'react';
import { useParams } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';

function ExerciseList() {
  const { difficulty } = useParams();

  console.log('Rendering ExerciseList for difficulty:', difficulty);

  // dummy data for exercises 
  const exercisesByDifficulty = {
    easy: [
      { id: 1, name: 'Exercise 1', description: 'Description for Exercise 1' },
      { id: 2, name: 'Exercise 2', description: 'Description for Exercise 2' },
      { id: 3, name: 'Exercise 3', description: 'Description for Exercise 3' },
    ],
    medium: [
      { id: 4, name: 'Exercise 4', description: 'Description for Exercise 4' },
      { id: 5, name: 'Exercise 5', description: 'Description for Exercise 5' },
      { id: 6, name: 'Exercise 6', description: 'Description for Exercise 6' },
    ],
    hard: [
      { id: 7, name: 'Exercise 7', description: 'Description for Exercise 7' },
      { id: 8, name: 'Exercise 8', description: 'Description for Exercise 8' },
      { id: 9, name: 'Exercise 9', description: 'Description for Exercise 9' },
    ],
  };

  const exercises = exercisesByDifficulty[difficulty] || [];

  return (
    <div>
      <h2>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h2>
      {/* Map through the exercises and render ExerciseCard component */}
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

export default ExerciseList;
