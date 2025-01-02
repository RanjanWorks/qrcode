import React from "react";
import { RiQrScan2Fill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  return (
    <nav className=" bg-slate-900 px-6 border-b flex items-center justify-between border-b-slate-900 text-slate-50 h-[50px]">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <RiQrScan2Fill />
        QR Code Studio
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/RanjanWorks"
          target="_blank"
          rel="noopener noreferrer"
          className="  transition-transform transform hover:scale-110"
        >
          <FiGithub size={25} />
        </a>
      <img src="https://i.ibb.co/Z2M7rLd/profile-pic-2.png" className="h-8" alt="Rflix Logo" />

      </div>
    </nav>
  );
};

export default Header;
