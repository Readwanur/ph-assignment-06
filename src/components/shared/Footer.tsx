import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="border-t border-t-gray-800 my-7">
      <footer className="footer sm:footer-horizontal text-neutral-content max-w-7xl mx-auto items-center p-4">
        <aside className="grid-flow-col items-center">
          <Image src={logo} alt="Logo"></Image>
          <p className="btn btn-ghost text-2xl font-bold">FITLOG</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-[#6b7280]">
            &copy; 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
