import React from 'react';
import styled from 'styled-components';

function UserAnalyticsEntry({ date, exercises, onDateClick }) {
  return (
    <EntryWrapper>
      <p>Date: {date}</p>
      <button onClick={() => onDateClick(date, exercises)}>View Exercises</button>
    </EntryWrapper>
  );
}

export default UserAnalyticsEntry;

const EntryWrapper = styled.div`
  background-color: #F9EFDB;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-size: 16px;
    color: #5F6F52;
  }

  button {
    background-color: #A9B388;
    color: #F9EFDB;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5F6F52;
    }
  }
`;