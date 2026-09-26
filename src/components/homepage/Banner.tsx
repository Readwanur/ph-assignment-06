import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";
import Link from "next/link";


const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-7 mb-7">
      <div className="hero-content p-10 flex-col lg:flex-row-reverse rounded-2xl items-center justify-between bg-[#15171d]">
        <Image alt="Banner" src={banner} className="max-w-sm" />
        <div className="flex flex-col items-start gap-3">
          <p className="text-[#c2f800]">WORKOUT LIBRARY</p>
          <h1 className="text-5xl text-white font-bold">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>
          <p className="py-6 text-[#9ca3af]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link href={`/`}>
            <button className="btn bg-[#c2f800] text-black">
              BROWSE WORKOUTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
