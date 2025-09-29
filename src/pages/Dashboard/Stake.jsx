
import {  NavLink } from 'react-router-dom';
import { BsWallet2 } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import StakeFAQ from '../../components/StakeFAQ';

// Stake Page
const Stake = () => (
    <div className="p-8">
      <h2 className=" font-medium mb-4 flex gap-5 items-center"><NavLink to="/dashboard/wallet"><FaArrowLeft className=" cursor-pointer "  /></NavLink> <span className="text-2xl">Stake PEBUBU</span></h2>
      <div className="flex w-full justify-between" >
      <div className="bg-white shadow rounded-lg p-6 max-w-[520px]">
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
        <p className="mt-10 mb-5 text-[16px] font-bold leading-[24px] ">Staking terms</p>               
        <div className="mt-10 text-[14px] leading-[20px]" >
          <div className='flex w-full justify-between px-5 py-3 ' > 
            <div className='' >Staking reward period</div> 
            <div className="font-medium ">24 hours</div>
          </div>
          <div className='flex w-full justify-between px-5 py-3 ' > 
            <div className='' >Staking reward</div> 
            <div className="font-medium ">Daily at 0.0411% per day</div>
          </div>
          <div className='flex w-full justify-between px-5 py-3 ' > 
            <div className='' >Unstaking</div> 
            <div className="font-medium ">Available at any time</div>
          </div>
          <div className='flex w-full justify-between px-5 py-3 ' > 
            <div className='' >Look-out period</div> 
            <div className="font-medium ">72 hours</div>
          </div>
        </div>
        <div className='mt-5 w-full flex justify-end' >          
          <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 font-medium ">Confirm staking</button>
        </div>
      </div>
      <StakeFAQ className="flex-1 " />
    
      </div>
    </div>
  );

export default Stake;
  
