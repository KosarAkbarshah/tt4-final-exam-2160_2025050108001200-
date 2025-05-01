import React, { useState, useEffect } from "react";
import api from "../api";
const EditWorkout = ({ workout, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState(workout);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/workout/${workout.id}`, {
        ...formData,
        duration: parseInt(formData.duration),
        caloriesBurned: parseInt(formData.caloriesBurned),
      });
      onUpdate(); // trigger reload
    } catch (err) {
      alert("Update failed.");
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleUpdate}>
      <h3>Edit Workout</h3>
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      />
      <input
        name="duration"
        type="number"
        value={formData.duration}
        onChange={handleChange}
        required
      />
      <input
        name="caloriesBurned"
        type="number"
        value={formData.caloriesBurned}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};
export default EditWorkout;
