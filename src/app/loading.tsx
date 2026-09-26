export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-16 h-16 border-4 border-neutral-800 border-t-[#c2f800] rounded-full animate-spin mb-4"></div>
      <p className="text-[#c2f800] font-bold tracking-widest uppercase">Loading Workouts...</p>
    </div>
  );
}
