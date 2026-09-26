"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";

const SavedPlanStats = () => {
  const { savedWorkout } = useContext(WorkoutContext);
  return (
    <Link href="#" className="flex items-center gap-3 group">
      <span className="text-gray-400 text-lg font-medium group-hover:text-gray-300 transition-colors">
        Saved
      </span>
      <span className="flex items-center justify-center border-2 border-gray-700 text-gray-300 text-lg font-bold h-10 w-10 rounded-full transition-colors group-hover:border-gray-500">
        {savedWorkout.length}
      </span>
    </Link>
  );
};

export default SavedPlanStats;
