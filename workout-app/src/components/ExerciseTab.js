import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DifficultySelection from './Difficulty';
import ExerciseList from './ExerciseList';

function ExerciseTab() {
  return (
    <div>
      {/* Use Routes instead of Switch */}
      <Routes>
        <Route path="/" element={<DifficultySelection />} />
        <Route path=":difficulty/*" element={<ExerciseList />} />
      </Routes>
    </div>
  );
}

export default ExerciseTab;