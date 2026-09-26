'use client'
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState, useMemo } from "react";
import { IWorkout } from "@/types/workout.types";
import { FaCheck, FaClock, FaTimes, FaFire, FaStar, FaChevronDown } from "react-icons/fa";
import { toast } from "react-toastify";

type SortOption = "Duration" | "Calories" | "Rating";

const MyPlanPage = () => {
  const { planWorkout, setPlanWorkout, savedWorkout, setSavedWorkout } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const currentWorkouts = activeTab === "today" ? planWorkout : savedWorkout;

  const stats = useMemo(() => {
    const exercises = currentWorkouts.length;
    const minutes = currentWorkouts.reduce((acc, workout) => acc + (workout.duration || 0), 0);
    const calories = currentWorkouts.reduce((acc, workout) => acc + (workout.caloriesBurned || 0), 0);
    return { exercises, minutes, calories };
  }, [currentWorkouts]);

  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort((a, b) => {
      if (sortBy === "Duration") return (b.duration || 0) - (a.duration || 0);
      if (sortBy === "Calories") return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
      if (sortBy === "Rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  }, [currentWorkouts, sortBy]);

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      setPlanWorkout(prev => prev.filter(w => w.id !== id));
    } else {
      setSavedWorkout(prev => prev.filter(w => w.id !== id));
    }
    toast.info("Workout removed from plan.");
  };

  const handleMarkAsDone = (id: number) => {
    if (activeTab === "today") {
      setPlanWorkout(prev => prev.filter(w => w.id !== id));
    } else {
      setSavedWorkout(prev => prev.filter(w => w.id !== id));
    }
    toast.success("Workout marked as done!");
  };

  const renderWorkouts = (workouts: IWorkout[]) => {
    if (workouts.length > 0) {
      return (
        <div className="flex flex-col gap-4 bg-black">
          {workouts.map((workout: IWorkout, idx: number) => (
            <div key={idx} className="bg-[#1a1d21] rounded-2xl p-4 flex flex-col xl:flex-row xl:items-center justify-between border border-gray-800 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-24 h-16 bg-gray-700 rounded-lg overflow-hidden shrink-0 relative">
                  {workout.image ? (
                    <Image src={workout.image} alt={workout.name || 'Workout'} layout="fill" className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-500">Img</div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide">{workout.name || "WORKOUT TITLE"}</h3>
                  <p className="text-gray-400 text-sm">{workout.equipment || "No equipment specified"}</p>
                  <div className="flex space-x-3 mt-1 text-xs text-gray-400 items-center">
                    <span className="flex items-center space-x-1">
                      <span className="text-[#c2f800]"><FaClock /></span>
                      <span>{workout.duration || "0"} min</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="text-[#c2f800]"><FaFire /></span>
                      <span>{workout.caloriesBurned || "0"} kcal</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="text-[#c2f800]"><FaStar /></span>
                      <span>{workout.rating || "0"}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 xl:gap-4 mt-2 xl:mt-0">
                <Link href={`/workouts/${workout.id}`} className="text-gray-400 border border-gray-700 rounded-full px-4 py-2 sm:px-6 hover:text-white text-xs sm:text-sm font-semibold transition-colors">
                  View Details
                </Link>
                <button onClick={() => handleMarkAsDone(workout.id)} className="flex cursor-pointer items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 text-xs sm:text-sm font-bold rounded-full bg-[#c2f800] hover:bg-[#b3e600] text-black transition-colors">
                  <FaCheck className="text-xs sm:text-sm" /> Mark as Done
                </button>
                <button onClick={() => handleRemove(workout.id)} className="cursor-pointer p-2 text-gray-400 hover:text-red-500 transition-colors ml-auto sm:ml-0" title="Remove">
                  <FaTimes size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="border border-dashed border-gray-700 rounded-3xl flex flex-col items-center justify-center py-24 text-center space-y-4">
        <h1 className="text-2xl font-black text-white uppercase tracking-wider">NOTHING HERE YET</h1>
        <p className="text-gray-400 text-sm font-medium">
          Browse the library and add a lift to get today moving.
        </p>
        <Link href="/">
          <button className="mt-4 px-8 py-3 text-sm font-bold rounded-full bg-[#c2f800] hover:bg-[#b3e600] text-black transition-colors">
            Go to workouts
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-white p-6 md:p-10 flex-1">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-black uppercase tracking-wide text-white mb-2">MY PLAN</h1>
          <p className="text-gray-400 text-sm">Cap of five lifts for today. Finish them, then load more.</p>
        </div>

        {/* Stats Box */}
        <div className="bg-[#1a1d21] rounded-3xl md:rounded-4xl p-4 sm:p-6 md:p-10 mb-8 grid grid-cols-3 gap-2 sm:gap-4 border border-gray-800">
          <div className="flex flex-col gap-1 sm:gap-2 pl-1 sm:pl-2">
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">Exercises</p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#c2f800]">{stats.exercises}</h1>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">Minutes</p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">{stats.minutes}</h1>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-semibold">Calories</p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">{stats.calories}</h1>
          </div>
        </div>

        {/* Tabs and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex w-full sm:w-auto bg-[#1a1d21] p-1.5 rounded-full border border-gray-800">
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "today"
                  ? "bg-[#2a2d32] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "saved"
                  ? "bg-[#2a2d32] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>
          
          <div className="relative text-sm text-gray-500 flex items-center space-x-2 font-semibold">
            <span>Sort By</span>
            <div 
              className="text-white cursor-pointer ml-1 flex items-center gap-1 bg-[#1a1d21] px-3 py-1.5 rounded-full border border-gray-800 hover:bg-[#2a2d32] transition-colors"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              {sortBy} <FaChevronDown size={10} />
            </div>
            
            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-[#1a1d21] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-10">
                {(["Duration", "Calories", "Rating"] as SortOption[]).map(option => (
                  <button
                    key={option}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2a2d32] transition-colors ${sortBy === option ? 'text-[#c2f800]' : 'text-white'}`}
                    onClick={() => {
                      setSortBy(option);
                      setShowSortDropdown(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {renderWorkouts(sortedWorkouts)}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
