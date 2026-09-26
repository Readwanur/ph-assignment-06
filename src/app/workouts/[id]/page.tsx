import { IWorkout } from "@/types/workout.types";
import React from "react";
import Image from "next/image";
import TodayPlanButton from "@/components/workoutDetailsPage/TodayPlanButton";
import SavedForLaterButton from "@/components/workoutDetailsPage/SavedForLaterButton";

const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to load workout details page");
  }

  return response.json();
};

interface IWorkoutDetailsProps {
  params: Promise<{
    id: number;
  }>;
}

const WorkoutDetails = async ({ params }: IWorkoutDetailsProps) => {
  const { id } = await params;
  const workoutData: IWorkout[] = await getWorkouts();
  const workout: IWorkout | undefined = workoutData.find(
    (workouts: IWorkout) => workouts.id === Number(id),
  );

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-white">
        Workout not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* === LEFT: Image Wrapper === */}
        <div className="w-full lg:w-[45%] shrink-0 relative lg:sticky lg:top-24">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <Image
              alt={workout.name}
              src={workout.image}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

        {/* === RIGHT: Content Area === */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Header & Tags */}
          <div className="mb-8 flex flex-col">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {workout.name}
            </h1>
            <p className="mt-5 text-neutral-400 text-lg leading-relaxed">
              {workout.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {workout.muscleGroups.map((muscle, idx) => (
                <span
                  key={idx}
                  className="bg-[#c2f800] text-[#374601] px-3 py-1.5 rounded-2xl text-xs font-bold uppercase tracking-widest"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Stats List */}
          <div className="bg-[#15171d] rounded-2xl border border-neutral-800 p-2 mb-10">
            <div className="divide-y divide-neutral-800/80">
              {[
                { label: "EQUIPMENT", value: workout.equipment },
                { label: "DIFFICULTY", value: workout.difficulty },
                { label: "SETS", value: workout.sets },
                { label: "REPS", value: workout.reps },
                { label: "DURATION", value: `${workout.duration} mins` },
                { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
                { label: "RATING", value: `${workout.rating}` },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors rounded-xl"
                >
                  <span className="text-neutral-500 font-bold text-sm tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-white font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-4 pl-5">
              {workout.instructions.map((instruction, idx) => (
                <li
                  key={idx}
                  className="list-decimal text-neutral-300 text-base leading-relaxed pl-2 marker:text-gray-500 marker:font-bold"
                >
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
            <TodayPlanButton workout={workout}/>

            <SavedForLaterButton workout={workout}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
