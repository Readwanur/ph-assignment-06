import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-[#0a0a0a] text-white">
      <h2 className="text-6xl font-black text-[#c2f800] mb-4">404</h2>
      <h3 className="text-3xl font-bold mb-4">PAGE NOT FOUND</h3>
      <p className="text-neutral-400 mb-8 max-w-md">
        The lift you're looking for doesn't exist in our library. Let's get you back to the workouts.
      </p>
      <Link href="/">
        <button className="px-8 py-3 font-bold text-black bg-[#c2f800] rounded-full hover:bg-[#b3e600] transition-colors">
          Return Home
        </button>
      </Link>
    </div>
  );
}
