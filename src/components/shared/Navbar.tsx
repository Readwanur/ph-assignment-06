'use client'
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TodayPlanStats from "../NavbarStats/TodayPlanStats";
import SavedPlanStats from "../NavbarStats/SavedPlanStats";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`flex items-center px-5 py-2 rounded-full transition-colors ${
            pathname === "/" || pathname.startsWith("/workouts")
              ? "bg-[#1a2312] text-[#c2f800] font-semibold"
              : "text-gray-400 font-medium hover:text-[#c2f800] hover:bg-[#1a2312]/60"
          }`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`flex items-center px-5 py-2 rounded-full transition-colors ${
            pathname === "/my-plan"
              ? "bg-[#1a2312] text-[#c2f800] font-semibold"
              : "text-gray-400 font-medium hover:text-[#c2f800] hover:bg-[#1a2312]/60"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 w-full z-50 border-b border-neutral-800 bg-[#0a0a0a]">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24">
        {/* === LEFT: Logo & Mobile Menu === */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden -ml-3 mr-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#15171d] border border-neutral-800 rounded-2xl z-50 mt-4 w-52 p-3 shadow-2xl gap-1"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logo}
              alt="FITLOG logo"
              width={36}
              height={36}
              className="object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-2xl font-black tracking-widest text-white hidden sm:block">
              FITLOG
            </span>
          </Link>
        </div>

        {/* === CENTER: Navigation Links (Desktop) === */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">{links}</ul>
        </div>

        {/* === RIGHT: Status Badges (Updated to match Figma) === */}
        <div className="navbar-end flex items-center gap-6 lg:gap-8">
          {/* Plan: Text with Solid Lime Circle */}
          <TodayPlanStats/>

          {/* Saved: Text with Outlined Circle */}
          <SavedPlanStats />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
