import { FiArrowUpRight } from "react-icons/fi";
function Blogposts() {
  return (
    <div>
      <div className="px-10 mb-20  md:px-0">
        <div className="mt-20 mb-10 px-10 md:w-screen md:ml-0 md:pl-0">
          <div className=" flex justify-between ">
            <div>
              <div className="text-[#6941C6]  font-medium">Our blog</div>
              <div className="text-[36px] text-[#101828] mt-4">
                Lastest blog posts
              </div>
              <div className="text-[20px] text-[#475467] mt-4">
                Tool and strategies modern teams need to help their companies
                grow.
              </div>
            </div>
            <div className="md:hidden">
              <button className="mt-0 w-[143px] h-[60px] rounded-md bg-[#7F56D9] text-white ">
                View all posts
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-8 justify-between w-full items-center px-10 md:block md:px-0 md:w-screen ">
          <div className=" w-[384px]  md:w-screen md:px-2 md:mt-14">
            <img
              src="./design.png"
              alt="blog image"
              className=" w-full h-[240px]"
            />
            <div className="text-[#6941C6]  font-medium text-[14px] my-2">
              Design
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p className="text-[24px] text-[#101828] md:text-[18px]">
                UX review presentations
              </p>
              <FiArrowUpRight />
            </div>
            <div className="text-[16px] text-[#475467] my-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </div>
            <div className="flex items-center gap-1">
              <img
                src="public/65a752b0fec11d8c4c9beaf7_Olivia Rhye-p-500.jpg"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex flex-col items-start">
                <p>Olivia Rhye</p>
                <p>20 Jan 2024</p>
              </div>
            </div>
          </div>
          <div className=" w-[384px]  md:w-screen md:px-2 md:mt-14">
            <img
              src="public/product.png"
              alt="blog image"
              className=" w-full h-[240px]"
            />
            <div className="text-[#6941C6]  font-medium text-[14px] my-2">
              Product
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p className="text-[24px] text-[#101828]">
                Migrating to Linear 101
              </p>
              <FiArrowUpRight />
            </div>
            <div className="text-[16px] text-[#475467] my-2">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here’s how to get started.
            </div>
            <div className="flex items-center gap-1">
              <img
                src="public/65a752dbfb2186598946bfe7_Phoenix Baker-p-500.jpg"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex flex-col items-start">
                <p>Phoenix Baker</p>
                <p>18 Jan 2024</p>
              </div>
            </div>
          </div>
          <div className=" w-[384px]  md:w-screen md:px-2 md:mt-14">
            <img
              src="public/softwareEngineering.png"
              alt="blog image"
              className=" w-full h-[240px]"
            />
            <div className="text-[#6941C6]  font-medium text-[14px] my-2">
              Software Engineering
            </div>
            <div className="flex items-center justify-between font-semibold">
              <p className="text-[24px] text-[#101828]">
                Building your API stack
              </p>
              <FiArrowUpRight />
            </div>
            <div className="text-[16px] text-[#475467] my-2">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </div>
            <div className="flex items-center gap-1">
              <img
                src="public/65a751741ddf78d3cc798f24_Lana Steiner-p-500.jpg"
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="flex flex-col items-start">
                <p>Lana Steiner</p>
                <p>22 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="md:block bg-[#7F56D9] rounded-lg text-white mx-4 px-28 md:h-[49px] lg:hidden xl:hidden  2xl:hidden 3xl:hidden">
          View all posts
        </button>
      </div>
      <div className="w-full ">
        <div className="  flex flex-col items-center bg-[#F9FAFB] h-80">
          <div className="font-semibold mb-4 my-8 text-[36px] text-[#101828]">
            Start your free trial
          </div>
          <div className="text-[20px] text-[#475467] mt-4 md:w-screen text-center">
            Join over 4,000+ startups already growing with Untitled.
          </div>
          <div className="mt-8 md:flex md:flex-col md:gap-4">
            <button className="border border-#D0D5DD w-[143px] h-[60px] rounded-md  md:w-full md:px-32">
              <span className="text-[#344054]">Get started</span>
            </button>
            <button className="md:ml-0 ml-2 w-[143px] h-[60px] rounded-md bg-[#7F56D9] text-white md:w-full md:px-32 ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogposts;
