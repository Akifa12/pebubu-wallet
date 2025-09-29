import { NavLink } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";
import WithdrawFAQ from '../../components/WithdrawFAQ';

// Withdraw Page
const Withdraw = () => (
  <div className="p-8">
    <h2 className=" font-medium mb-4 flex gap-5 items-center"><NavLink to="/dashboard/wallet"><FaArrowLeft className=" cursor-pointer " /></NavLink> <span className="text-2xl">Withdraw to an external crypto wallet</span></h2>
    <div className='w-full flex gap-5' >

      <div className="bg-white shadow rounded-lg p-6 min-w-[500px] w-[500px]">
        <p className="mb-4 text-[16px]  leading-[24px] text-gray-700 ">Enter the amount of PEBUBU you wish to stake and start earning rewards.</p>
        <div className='mt-5 w-full flex justify-between items-center ' >
          <div className=' text-[14px] leading-[20px] text-gray-700  flex items-center gap-1 ' ><BsWallet2 className='text-[14px]' /> Available balance</div>
          <div className='text-blue-600 text-[14px] leading-[20px]' >{0} PEBUBU</div>
        </div>
        <input className="w-full mt-2 b p-3 border-gray-600 border flex justify-between rounded mb-4
                       outline-none text-[14px]
                     "
          placeholder='Amount PEBUBU'
          type="number"
        />
        <input className="w-full mt-2 b p-3 border-gray-600 border flex justify-between rounded mb-4
                       outline-none text-[14px]
                     "
          placeholder='Wallet address'
          type="string"
        />
        <p className="mt-10 mb-5 text-[16px] font-bold leading-[24px] text-gray-800 ">Withdrawal details</p>
        <div className='w-full p-3 flex justify-center items-center ' >
          <div className='w-full bg-gray-200 p-3 flex flex-col' >
            <div className='w-full flex justify-between pb-3 border-b border-gray-400 text-gray-700 ' >
              <div className=''>Gas fee</div>
              <div className=''>2,7000 PEBUBU</div>
            </div>
            <div className='mt-3 w-full text-[12px] leading-[18px] text-gray-700 '>
              <div className='' >Enter the PEBUBU receiving address for your Ethereum-compatible wallet or exchange account.</div>
              <div className='mt-3 ' ><b>Please note:</b> Withdrawals can take up to 24 hours (longer on weekends) to be credited to the receiving wallet or account due to our security procedures.</div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between' >
          <div className='flex flex-col gap-1 text-gray-700' >
            <div className='text-[14px] leading-[21px]'>Receive amount</div>
            <div className=' text-[24px] leading-[32px] font-bold text-gray-800 '>0.00 PEBUBU</div>
          </div>
          <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 font-medium">Withdraw</button>
        </div>
      </div>

      <WithdrawFAQ className={"flex-l "} />
    </div>
  </div>
);

export default Withdraw;