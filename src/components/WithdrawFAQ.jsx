import { useState } from "react";

const WithdrawFAQ = ({className}) => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does a withdrawal take?",
      answer:
        "Withdrawals may take up to 24 hours as they pass through our advanced security protocols. During this period, you can cancel the withdrawal before it is completed.",
    },
    {
      question: "How much fees do I pay for a withdrawal?",
      answer:
        "The withdrawal fee is fixed and does not vary with the withdrawal amount. The fee will be shown before you confirm the withdrawal.",
    },
    {
      question: "What are withdrawal limits?",
      answer:
        "the minimum amount you can withdraw is 5,000 PEBUBU",
    },
    {
      question: "Can I withdraw to any address?",
      answer:
        "No, you can only withdraw PEBUBU to a PEBUBU receiving address associated with an Phantom wallet or exchange account.",
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

export default WithdrawFAQ;
