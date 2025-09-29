import { useState } from "react";

const DepositFAQ = ({className}) => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I deposit PEBUBU?",
      answer:
        "To deposit PEBUBU, send your tokens to the Deposit address shown on this screen. Deposits may take a few hours to process, depending on network traffic.",
    },
    {
      question: "Can I buy PEBUBU with other cryptocurrency?",
      answer:
        "Yes. On the main PEBUBU Wallet screen, tap 'Buy,' select 'Buy with Crypto,' and follow the on-screen instructions.",
    },
    {
      question: "Can I deposit tokens that are not PEBUBU?",
      answer:
        "PEBUBU Wallet is a secure wallet designed for the storage and staking of PEBUBU tokens. You can only deposit PEBUBU into your PEBUBU Wallet; however, you can use other tokens to purchase PEBUBU. Please check your PEBUBU purchase options by clicking the 'Buy' button on the main screen.",
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

export default DepositFAQ;
