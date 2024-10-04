import { useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const faqs = [
  {
    title: "Is there a free trial available?",
    text: " Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    text: " Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    text: " Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    text: " Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    text: " Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    text: " Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

function Faqs() {
  return (
    <div className="w-full flex flex-col items-center pb-20 border-b-[1px] border-slate-400/15">
      <div className=" flex flex-col items-center">
        <div className="text-[36px]  md:text-[30px] text-center text-[#101828] md:px-8 font-semibold">
          Frequently asked questions
        </div>
        <div className="text-[20px] md:text-[18px] text-[#475467] mt-4 md:px-8 text-center">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div className="mt-10 ">
        <QuestionList />
      </div>

      <div className="w-full md:w-screen md:px-8">
        <div className="  flex flex-col items-center bg-[#F9FAFB] h-80">
          <img
            src="./chat.png"
            alt="chat group"
            className="w-[120px] h-[56px] my-8"
          />
          <div className="font-semibold mb-4">Still have questions?</div>
          <div className="text-[#475467] mb-4 text-center">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </div>
          <button className="ml-2 w-[143px] h-[60px] rounded-md bg-[#7F56D9] text-white mt-4">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

function Question({ title, text, num, onOpen, curOpen }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className="border-b-[1px] border-slate-400/15  mb-8 pb-12"
      onClick={() => {
        handleToggle();
      }}
    >
      <div className="question flex items-center w-[768px] justify-between md:w-screen md:px-8">
        <p className="title text-[18px] text-[#101828] font-medium">{title}</p>
        <p className="icon text-[16px] text-[#475467]">
          {isOpen ? <LuMinusCircle /> : <LuPlusCircle />}
        </p>
      </div>
      {isOpen && <p className="answer w-[768px] mt-8">{text}</p>}
    </div>
  );
}

function QuestionList() {
  const [curOpen, setIsOpen] = useState();
  return (
    <div className="">
      {faqs.map((q, i) => (
        <Question
          title={q.title}
          text={q.text}
          num={i + 1}
          key={i}
          curOpen={curOpen}
          onOpen={setIsOpen}
        />
      ))}
    </div>
  );
}

export default Faqs;
