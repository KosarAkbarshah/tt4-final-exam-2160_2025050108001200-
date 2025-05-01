import React, { useEffect, useState } from "react";
import api from "../api";
import EditWorkout from "./EditWorkout";
const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const loadWorkouts = () => {
    api.get("/workout").then((res) => setWorkouts(res.data));
  };
  useEffect(() => {
    loadWorkouts();
  }, []);
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this workout?")) return;
    try {
      await api.delete(`/workout/${id}`);
      loadWorkouts();
    } catch (err) {
      alert("Failed to delete.");
    }
  };
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.date} - {w.type} - {w.duration} min - {w.caloriesBurned} cal
            <button onClick={() => setEditingWorkout(w)}>Edit</button>
            <button onClick={() => handleDelete(w.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingWorkout && (
        <EditWorkout
          workout={editingWorkout}
          onUpdate={() => {
            setEditingWorkout(null);
            loadWorkouts();
          }}
          onCancel={() => setEditingWorkout(null)}
        />
      )}
    </div>
  );
};
export default WorkoutList;
