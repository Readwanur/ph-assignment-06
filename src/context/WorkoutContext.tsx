'use client'
import { IWorkout } from "@/types/workout.types";
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

interface IWorkoutContextType {
  planWorkout: IWorkout[];
  setPlanWorkout: Dispatch<SetStateAction<IWorkout[]>>;
  savedWorkout: IWorkout[];
  setSavedWorkout: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContextType>({} as IWorkoutContextType);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [planWorkout, setPlanWorkout] = useState<IWorkout[]>([]);
  const [savedWorkout, setSavedWorkout] = useState<IWorkout[]>([]);

  const sharedContents = {
    planWorkout,
    setPlanWorkout,
    savedWorkout,
    setSavedWorkout,
  };
  return <WorkoutContext.Provider value={sharedContents}>{children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
