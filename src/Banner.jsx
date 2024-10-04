import { FaArrowRight } from "react-icons/fa";
import { HiOutlinePlay } from "react-icons/hi";
function Banner() {
  return (
    <div className="w-full mt-16  flex flex-col items-center justify-center md:w-screen md:px-2">
      <div className="bg-[#F9F5FF]  border-2 border-[#D6BBFB] flex justify-between rounded-full p-[0.1rem] w-fit">
        <div className="text-[#6941C6] border-[1px] border-[#D6BBFB] bg-white rounded-full p-[0.1rem] px-[0.6rem] md:text-[12px]">
          New feature
        </div>
        <div className="flex justify-center items-center align-middle ml-2 mr-2">
          <div className="text-[#6941C6] font-medium md:text-[12px]">
            Checkout the team dashboard
            <FaArrowRight className="inline text-[#6941C6] items-center ml-2 mb-1" />
          </div>
        </div>
      </div>
      <div className="text-[60px] text-[#101828] w-[1024px] h-[72px] font-medium md:text-[36px] text-center md:w-screen">
        Beautiful analytics to grow smarter
      </div>
      <div className="text-[#475467] px-10  mt-4  mb-8 md:text-[18px] text-center md:mt-12">
        <div>
          Powerful, self-serve product and growth analytics to help you
          convert,engage,
        </div>
        <div>and retain more users. Trusted by over 4,000 startups.</div>
      </div>
      <div className="md:flex flex-col items-center gap-y-2">
        <button className="border border-#D0D5DD w-[143px] h-[60px] rounded-md  md:w-full md:px-32">
          <HiOutlinePlay className="inline-block text-[24px]" />
          <span className="text-[#344054]">Demo</span>
        </button>
        <button className="md:ml-0 ml-2 w-[143px] h-[60px] rounded-md bg-[#7F56D9] text-white md:w-full md:px-32 ">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Banner;
