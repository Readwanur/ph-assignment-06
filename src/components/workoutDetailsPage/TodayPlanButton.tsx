"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.types";
import React, { useContext } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { toast } from "react-toastify";

const TodayPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { planWorkout, setPlanWorkout } = useContext(WorkoutContext);
  
  const handleTodayPlan = () => {
    const isDuplicate = planWorkout.some((w) => w.id === workout.id);
    
    if (isDuplicate) {
      toast.warning("Workout is already in today's plan!");
      return;
    }
    
    // Optional feature from README: Cap of 5 lifts
    if (planWorkout.length >= 5) {
      toast.error("You've reached the cap of 5 lifts for today!");
      return;
    }

    setPlanWorkout([...planWorkout, workout]);
    toast.success("Added to Today's plan.");
  };

  return (
    <button
      onClick={() => {
        handleTodayPlan();
      }}
      className="w-full sm:w-auto px-8 py-4 bg-[#c2f800] hover:bg-[#b3e600] text-[#1a2312] font-black rounded-xl flex items-center justify-center gap-2.5 transition-colors"
    >
      <MdCheckBoxOutlineBlank className="text-2xl" />
      Add to today&apos;s plan
    </button>
  );
};

export default TodayPlanButton;
