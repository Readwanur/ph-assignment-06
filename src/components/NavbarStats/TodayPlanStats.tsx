"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";

const TodayPlanStats = () => {
  const{ planWorkout } = useContext(WorkoutContext);
  return (
    <Link href="#" className="flex items-center gap-3 group">
      <span className="text-gray-200 text-lg font-medium group-hover:text-white transition-colors">
        Plan
      </span>
      <span className="flex items-center justify-center bg-[#ccff00] text-black text-lg font-bold h-10 w-10 rounded-full">
        {planWorkout.length}
      </span>
    </Link>
  );
};

export default TodayPlanStats;
