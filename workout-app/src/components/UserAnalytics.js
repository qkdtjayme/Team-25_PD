import React, { useState } from 'react';
import UserAnalyticsEntry from './UserAnalyticsEntry';
import ExerciseModal from './ExerciseModal';

function UserAnalytics() {
  // Dummy data for user analytics (replace this with actual data fetched from the server)
  const userAnalyticsData = [
    { id: 1, date: '2022-03-15', exercises: [{ id: 11, exercise: 'Exercise 1', difficulty: 'Easy', reps: 10 }] },
    { id: 2, date: '2022-03-17', exercises: [{ id: 21, exercise: 'Exercise 5', difficulty: 'Medium', reps: 15 }] },
    { id: 3, date: '2022-03-20', exercises: [{ id: 31, exercise: 'Exercise 8', difficulty: 'Hard', reps: 8 }] },
    // Add more data as needed
  ];

  // State to track selected date and associated exercises
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);

  // State for showing/hiding the modal
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateClick = (date, exercises) => {
    // Update selected date and associated exercises on date click
    setSelectedDate(date);
    setSelectedExercises(exercises);
    // Open the modal
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setModalOpen(false);
  };

  return (
    <div>
      <h2>User Analytics</h2>
      {/* Map through user analytics data and render UserAnalyticsEntry component */}
      {userAnalyticsData.map((entry) => (
        <UserAnalyticsEntry
          key={entry.id}
          date={entry.date}
          exercises={entry.exercises}
          onDateClick={handleDateClick}
        />
      ))}
      
      {/* Render ExerciseModal if the modal is open */}
      {isModalOpen && (
        <ExerciseModal
          exercise={selectedExercises[0].exercise}
          difficulty={selectedExercises[0].difficulty}
          reps={selectedExercises[0].reps}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default UserAnalytics;
