import Logo from "./Logo";
function Footer() {
  return (
    <div className="mt-20 px-10 md:w-screen ">
      <div className="mb-10 px-16 md:px-2">
        <ol className="flex justify-between items-center md:grid md:grid-cols-2 md:grid-rows-3  md:gap-y-4 md:place-content-start">
          <li className="text-[14px] text-[#667085] md:w-[155px]">
            Products
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">
              Solutions
              <span className="ml-2 bg-[#ECFDF3] border-[1px] border-[#ABEFC6] py-[0.18rem] px-2  rounded-full ">
                New
              </span>
            </ol>
            <ol className="text-[#475467] font-semibold mt-2">Tutorials</ol>
            <ol className="text-[#475467] font-semibold mt-2">Pricing</ol>
            <ol className="text-[#475467] font-semibold mt-2">Releases</ol>
          </li>
          <li className="text-[14px] text-[#667085]">
            Company
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">Solutions</ol>
            <ol className="text-[#475467] font-semibold mt-2">Tutorials</ol>
            <ol className="text-[#475467] font-semibold mt-2">Pricing</ol>
            <ol className="text-[#475467] font-semibold mt-2">Releases</ol>
          </li>
          <li className="text-[14px] text-[#667085]">
            Resources
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">Solutions</ol>
            <ol className="text-[#475467] font-semibold mt-2">Tutorials</ol>
            <ol className="text-[#475467] font-semibold mt-2">Pricing</ol>
            <ol className="text-[#475467] font-semibold mt-2">Releases</ol>
          </li>
          <li className="text-[14px] text-[#667085]">
            Use Cases
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">Solutions</ol>
            <ol className="text-[#475467] font-semibold mt-2">Tutorials</ol>
            <ol className="text-[#475467] font-semibold mt-2">Pricing</ol>
            <ol className="text-[#475467] font-semibold mt-2">Releases</ol>
          </li>
          <li className="text-[14px] text-[#667085]">
            Socials
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">Solutions</ol>
            <ol className="text-[#475467] font-semibold mt-2">Tutorials</ol>
            <ol className="text-[#475467] font-semibold mt-2">Pricing</ol>
            <ol className="text-[#475467] font-semibold mt-2">Releases</ol>
          </li>
          <li className="text-[14px] text-[#667085]">
            Legal
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">Solutions</ol>
            <ol className="text-[#475467] font-semibold mt-2">Tutorials</ol>
            <ol className="text-[#475467] font-semibold mt-2">Pricing</ol>
            <ol className="text-[#475467] font-semibold mt-2">Releases</ol>
          </li>
        </ol>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-slate-400/15 md:block  md:px-0 md:w-screen">
        <Logo className="md:ml-4"></Logo>
        <p className="text-[#475467] text-[16px] md:px-0">
          © 2077 Untitled UI. Made by Uday.
        </p>
      </div>
    </div>
  );
}

export default Footer;
