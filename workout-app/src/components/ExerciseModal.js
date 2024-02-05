// components/user/ExerciseModal.js

import React from 'react';
import { ModalOverlay, ModalContainer } from './styles';

function ExerciseModal({ exercise, difficulty, reps, onClose }) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Exercise Details</h3>
        <p>Exercise: {exercise}</p>
        <p>Difficulty: {difficulty}</p>
        <p>Number of Reps: {reps}</p>
        <button onClick={onClose}>Back</button>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ExerciseModal;
