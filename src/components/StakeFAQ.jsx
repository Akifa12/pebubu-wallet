import { useState } from "react";

const StakeFAQ = ({className}) => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I stake PEBUBU?",
      answer:
        "To stake PEBUBU, you'll need to have a minimum of 10,000 PEBUBU. Enter the amount you want to stake on this screen and hit confirm. Be sure to review the Staking Terms before proceeding.",
    },
    {
      question: "How long does it take to stake?",
      answer:
        "Staking is instant, but it might take a few minutes to appear in your Staking list.",
    },
    {
      question: "How do I get staking rewards?",
      answer:
        "Staking rewards are credited to your wallet daily around midnight UTC.",
    },
    {
      question: "What are the staking terms?",
      answer:
        "You can check the staking reward rate, duration of the staking program, and other terms by clicking on ‘Staking Terms’ in the Staking tab of your Wallet.",
    },
    {
      question: "Are there any fees to stake or unstake?",
      answer:
        "There are no fees for staking or unstaking PEBUBU in Wallet."
    },
  ];

  return (
    <div className={`${className} max-w-3xl mx-auto p-6 w-full flex flex-col items-start`} >
      <h2 className="text-[18px] leading-[28px] mb-4 flex gap-5 ">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-2"
          >
            <button
              onClick={() => toggle(index)}
              className={`flex justify-start gap-3 items-center w-full text-left text-[16px] leading-[24px] 
               font-medium ${ open === index? "text-gray-900" : "text-blue-600" }`}
            >
                <span>
                {open === index ? "-" : "+"}
                </span>
              {item.question}
            </button>
            {open === index && (
              <p className="mt-2 pl-5 text-gray-600  text-[16px] leading-[24px] ">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakeFAQ;
