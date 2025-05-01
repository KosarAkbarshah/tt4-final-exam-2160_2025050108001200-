import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WorkoutList from "./components/WorkoutList";
import AddWorkout from "./components/AddWorkout";

function App() {
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const handleWorkoutAdded = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <div>
        <h1>Fitness Tracker</h1>
        <AddWorkout onWorkoutAdded={handleWorkoutAdded} />
        <WorkoutList key={refresh} />
      </div>
    </>
  );
}

export default App;
