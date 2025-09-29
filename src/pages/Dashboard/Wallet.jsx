
import {  NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";

// Wallet Page
const Wallet = () => (
    <div className="p-8 text-black  ">
      <div className='flex w-full justify-between' >
      <h2 className="text-2xl font-bold mb-4">Welcome back, Dream</h2>
      <div className="flex justify-end mb-6 space-x-4 font-medium ">
        <NavLink to="/dashboard/deposit" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">Deposit</NavLink>
        <NavLink to="/dashboard/stake" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">Stake</NavLink>
        <NavLink to="/dashboard/buy" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">Buy</NavLink>
        <NavLink to="/dashboard/withdraw" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">Withdraw</NavLink>
      </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <div className='w-full flex justify-between' >
          <div className='flex flex-col gap-1 items-start ' >
            <div className='text-gray-700 text-[14px] leading-[20px] ' >PEBUBU Wallet balance</div>
            <div className='font-semibold' >0 PEBUBU</div>
            <div className='text-gray-700 text-[12px] leading-[16px] ' >~$0.00</div>
          </div>
          <div className='flex gap-20 ' >
          <div className='flex flex-col gap-1 items-start ' >
            <div className='text-gray-700 text-[14px] leading-[20px] flex gap-1 items-center -ml-[8px]' ><GoDotFill className="min-w-[18px] text-green-400"  /><div >Available</div></div>
            <div className='' >0 PEBUBU</div>
            <div className='text-gray-700 text-[12px] leading-[16px]' >~$0.00</div>
          </div>
          <div className='flex flex-col gap-1 items-start ' >
            <div className='text-gray-700 text-[14px] leading-[20px] flex gap-1 items-center -ml-[8px] ' ><GoDotFill className="min-w-[18px]"  /><div>In staking</div></div>
            <div className='' >0 PEBUBU</div>
            <div className='text-gray-700 text-[12px] leading-[16px]' >~$0.00</div>
          </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white border-b border-b-gray-300  p-6">
        <p className=" text-[18px] leading-[28px] font-bold text-black ">Recent activity</p>
      </div>
      <div className='flex flex-col gap-3 items-center min-h-[400px] self-stretch justify-center ' >
        
        <h3 className='text-black text-[16px] leadiing-[24px] font-medium ' >No recent activity</h3>
        <p className='text-gray-700 text-[14px] leading-[20px] text-center  ' >You don't have any actions to be shown here.</p>
      </div>
    </div>
  );

  export default Wallet;

