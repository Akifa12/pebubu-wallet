import { useState } from "react";
import DepositFAQ from "../../components/DepositFAQ";
import {  NavLink } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import QRCode from "react-qr-code";

const depositAddress = "8AsEMmoChhnapezDsfkUnsjv9rxBx6PcdoTLrFRmwP1W";

// Deposit Page
const Deposit = () => {  
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    else
        console.error('Clipboard not supported');
  };

  return (
    <div className="p-8">
      <h2 className=" font-medium mb-4 flex gap-5 items-center"><NavLink to="/dashboard/wallet"><FaArrowLeft className=" cursor-pointer "  /></NavLink> <span className="text-2xl">Deposit</span></h2>
      <div className="flex w-full justify-between" >
      <div className="bg-white shadow rounded-lg p-6 max-w-[520px]">
        <p className="mb-4 text-[16px] font-bold leading-[24px] ">Send CHEER to the following address:</p>
        <div className="bg-gray-100 p-4 border-gray-600 border flex justify-between rounded mb-4">
          <code>{depositAddress}</code>
          <div className="" >
          {
            copied ?
              (<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>) :
              (<MdOutlineContentCopy className="w-5 h-5 transition duration-100 ease-in-out transform cursor-pointer active:scale-95 " onClick={() => copyToClipboard(depositAddress)} />)
          }
          </div>
        </div>
        <p className="mt-10 mb-5 text-[16px] font-bold leading-[24px] ">Or scan this QR code:</p>
        <div className=" p-2 rounded flex w-full  gap-5 ">
          <div className="w-[188px] h-[188px] flex justify-center items-center border border-gray-600 rounded-[10px] " >
          <QRCode
            size={256}
            style={{ width: "160px", height: "160px" }}
            value={depositAddress}
            viewBox={`0 0 256 256`}
          />
          </div>
          <div className="flex-1 text-[14px] leading-[20px] font-medium text-gray-700 " >
          Only send PEBUBU tokens to this address using SPL standard. Sending any other cryptocurrency, including SOL, to this address will result in permanent loss. Deposits may take up to an hour to be confirmed, depending on network congestion.
          </div>
        </div>
        <div className="mt-5 text-[14px] leading-[20px]" >
          <span className="font-bold " >Make sure not to send</span> tokens to the contract address of .
        </div>PEBUBU
        
        <div className="mt-10 text-[14px] leading-[20px]" >
          <span  >Buy PEBUBU using SOL on <span className="text-blue-600 cursor-pointer ">Kucoin</span></span>
        </div>
      </div>
      <DepositFAQ className="flex-1 " />
      </div>
    </div>
  );
}

export default Deposit;
  