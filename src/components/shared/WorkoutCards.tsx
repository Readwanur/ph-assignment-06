import { IWorkout } from "@/types/workout.types";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

interface IWorkoutProps {
  workouts: IWorkout;
}

const WorkoutCards = ({ workouts }: IWorkoutProps) => {
  const {
    id,
    name,
    equipment,
    duration,
    rating,
    caloriesBurned,
    image,
    muscleGroups,
  } = workouts;

  return (
    <Link
      href={`/workouts/${id}`}
      className="flex flex-col bg-[#15171d] rounded-2xl border border-neutral-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-neutral-700 transition-all duration-300"
    >
      {/* 1. Image Header */}
      <div className="relative h-52 w-full bg-neutral-900 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* 2. Body Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {muscleGroups.map((muscle, idx) => (
            <span
              key={idx}
              className="bg-[#c2f800] text-[#374601] px-2.5 py-1 rounded-2xl text-[11px] font-bold uppercase tracking-wide"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title & Equipment */}
        <h3 className="text-xl font-bold text-white line-clamp-1">{name}</h3>
        <p className="text-sm text-neutral-400 mt-1 line-clamp-1">
          Equipment: {equipment}
        </p>
      </div>

      {/* 3. Footer Stats (Duration, Rating, Calories) */}
      <div className="border-t border-neutral-800 px-5 py-4 flex items-center justify-start gap-4 text-sm font-medium text-neutral-400">
        {/* Left: Duration */}
        <div className="flex items-center gap-1.5">
          <FaClock className="w-4 h-4 text-neutral-500" />
          <span>{duration} min</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <FaFire className="w-4 h-4 text-orange-500" />
            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="w-4 h-4 text-amber-500" />
            <span className="text-neutral-300">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCards;
