import React from "react";
import WorkoutCards from "../shared/WorkoutCards";
import { IWorkout } from "@/types/workout.types";

const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to load workout data.");
  }

  return response.json();
};

const Workouts = async () => {
    const workoutData: IWorkout[] = await getWorkouts()
  return (
    <div>
      <div className="max-w-7xl mx-auto m-7">
        <h1 className="text-3xl text-white font-bold">THE LIBRARY</h1>
        <p className="text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {workoutData.map((workouts: IWorkout) => (
          <WorkoutCards key={workouts.id} workouts={workouts} />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
