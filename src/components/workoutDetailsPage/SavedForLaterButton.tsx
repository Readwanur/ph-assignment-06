'use client'
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SavedForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext);
  const handleSaved = () => {
    setSavedWorkout([...savedWorkout, workout]);
    toast.success("Added to Saved plan.")
  };
  return (
    <button
      onClick={() => {
        handleSaved();
      }}
      className="w-full sm:w-auto px-8 py-4 border-2 border-neutral-700 hover:border-neutral-500 text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-neutral-800/50"
    >
      <FaRegBookmark className="text-xl" />
      Save for later
    </button>
  );
};

export default SavedForLaterButton;
