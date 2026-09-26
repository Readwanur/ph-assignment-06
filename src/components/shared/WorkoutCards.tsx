import { IWorkout } from "@/types/workout.types";
import Link from "next/link";
import Image from "next/image";
import React from "react";

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
          <svg
            className="w-4 h-4 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{duration} min</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-neutral-300">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCards;
