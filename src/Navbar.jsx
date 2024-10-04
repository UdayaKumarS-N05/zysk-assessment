import { useState } from "react";
import Logo from "./Logo";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const [navOpen, isNavOpen] = useState(null);
  function handleToggle() {
    isNavOpen(navOpen ? null : true);
  }
  return (
    <div className="flex justify-between  items-center mt-2 border-b-[1px] border-slate-400/15 mb-6 px-10 md:px-8 relative md:w-screen">
      <div className="flex justify-between items-center md:w-screen  ">
        <Logo />
        <div
          className=" p-2 rounded-xl bg-[#ECFDF3] lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
          onClick={() => handleToggle()}
        >
          <button className="hidden md:block ">
            {navOpen ? (
              <RxCross2 className="w-6 h-6 mr-0 top-0" />
            ) : (
              <img
                src="./hamburger.png"
                alt=""
                className="w-6 h-6 mr-0 top-0"
              />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center justify-between  w-full">
          <p>Home</p>
          <p className="flex items-center ">
            Products
            <span className="ml-2">
              <FaChevronDown></FaChevronDown>
            </span>
          </p>
          <p className="flex items-center ">
            Resources
            <span className="ml-2">
              <FaChevronDown></FaChevronDown>
            </span>
          </p>
          <p>Pricing</p>
        </div>
      </div>
      <div className=" w-[50px] h-[50px] rounded-[50%] md:hidden">
        <img
          src="65a752b0fec11d8c4c9beaf7_Olivia Rhye-p-500.jpg"
          alt="profile picture"
          className="rounded-[50%]"
        />
      </div>
      {navOpen && (
        <div className="h-screen absolute top-24  w-screen px-8 backdrop-blur-[8px] text-3xl space-y-6">
          <p>Home</p>
          <p className="flex items-center ">
            Products
            <span className="ml-2">
              <FaChevronDown></FaChevronDown>
            </span>
          </p>
          <p className="flex items-center ">
            Resources
            <span className="ml-2">
              <FaChevronDown></FaChevronDown>
            </span>
          </p>
          <p>Pricing</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
