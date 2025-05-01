import React, { useState } from "react";

import api from "../api";

const AddWorkout = ({ onWorkoutAdded }) => {
  const [formData, setFormData] = useState({
    date: "",

    type: "",

    duration: "",

    caloriesBurned: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/workout", {
        ...formData,

        duration: parseInt(formData.duration),

        caloriesBurned: parseInt(formData.caloriesBurned),
      });

      alert("Workout added!");

      onWorkoutAdded(); // Refresh list

      setFormData({ date: "", type: "", duration: "", caloriesBurned: "" });
    } catch (err) {
      alert("Error adding workout.");

      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Workout</h3>
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        required
      />
      <input
        name="duration"
        type="number"
        placeholder="Duration (min)"
        value={formData.duration}
        onChange={handleChange}
        required
      />
      <input
        name="caloriesBurned"
        type="number"
        placeholder="Calories Burned"
        value={formData.caloriesBurned}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddWorkout;
