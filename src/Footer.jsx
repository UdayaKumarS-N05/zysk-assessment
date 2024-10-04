import Logo from "./Logo";
function Footer() {
  return (
    <div className="mt-20 px-10">
      <div className="mb-10 px-16">
        <ol className="flex justify-between items-center">
          <li className="text-[14px] text-[#667085]">
            Products
            <ol className="text-[#475467] font-semibold mt-2">Overview</ol>
            <ol className="text-[#475467] font-semibold mt-2">Features</ol>
            <ol className="text-[#475467] font-semibold mt-2">
              Solutions{" "}
              <span className="ml-2 bg-[#ECFDF3] border-[1px] border-[#ABEFC6] py-[0.18rem] px-2  rounded-full">
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
      <div className="flex justify-between items-center border-t-[1px] border-slate-400/15">
        <Logo></Logo>
        <p className="text-[#475467] text-[16px]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
