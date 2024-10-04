import Logo from "./Logo";
import { FaChevronDown } from "react-icons/fa";
function Navbar() {
  return (
    <div className="flex justify-between  items-center mt-2 border-b-[1px] border-slate-400/15 mb-6 px-10">
      <div className="flex  w-1/2">
        <Logo />
        <div className="flex items-center justify-between  w-full">
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
      <div className=" w-[50px] h-[50px] rounded-[50%] ">
        <img
          src="65a752b0fec11d8c4c9beaf7_Olivia Rhye-p-500.jpg"
          alt="profile picture"
          className="rounded-[50%]"
        />
      </div>
    </div>
  );
}

export default Navbar;
