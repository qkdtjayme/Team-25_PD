import React from 'react';
import styled from 'styled-components';
import { palette } from '../colors';

function ExerciseCard({ exercise }) {
  return (
    <ExerciseCardWrapper>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      {/* Add more details about the exercise */}
    </ExerciseCardWrapper>
  );
}

export default ExerciseCard;

const ExerciseCardWrapper = styled.div`
  border: 1px solid ${palette.accent2};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${palette.primary};
  color: ${palette.accent2};
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;