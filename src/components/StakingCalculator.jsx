import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const StakingCalculator = () => {

    const [stakingAmount, setStakingAmount] = useState(100000);
    const [termInMonths, setTermInMonths] = useState(1);
    const stakingRate = 0.475; // 47.5% annual rate
  
    const calculateDailyRewards = () => {
      const annualRewards = stakingAmount * stakingRate;
      const dailyRewards = annualRewards / 365;
      return dailyRewards;
    };
  
    const calculateTotalRewards = () => {
      const dailyRewards = calculateDailyRewards();
      const totalDays = termInMonths * 30.5; // Approximate months to days
        const totalRewards = dailyRewards * totalDays;
      return totalRewards;
    };
  
    const handleStakingAmountChange = (e) => {
      setStakingAmount(Number(e.target.value));
    };
  
    const handleTermChange = (e) => {
      setTermInMonths(Number(e.target.value));
    };


    return (
        <div className="mt-5 p-6 bg-white rounded-lg shadow flex flex-col items-center w-full md:max-w-[430px] md:gap-4  ">
        <div className='w-full justify-between flex ' >
            <div className=" opacity-80 ">Staking rewards: </div>
            <div className="font-bold ">47.5%</div>
        </div>
        <div className='w-full justify-between flex ' >
            <div className="  opacity-80 ">Staking amount</div>
            <div className=" font-bold ">{stakingAmount.toLocaleString()} PEBUBU</div>
        </div>
        <div className='w-full flex flex-col '>
            <input 
            id="staking-amount"
            type="range"
            min="100000"
            max="200000000"
            step="1000"
            value={stakingAmount}
            onChange={handleStakingAmountChange}
            className="w-full mb-1"
            />
            <div className='w-full justify-between flex text-[12px] text-gray-700 ' >
                <div className="">100,000</div>
                <div className="">200,000,000</div>
            </div>
        </div>
        <div className='w-full justify-between flex ' >
            <div className="  opacity-80 ">Term in months</div>
            <div className=" font-bold ">{termInMonths} month{termInMonths > 1 ? 's' : ''}</div>
        </div>
        <div className='w-full flex flex-col '>
            <input id="term-in-months"
                type="range"
                min="1"
                max="24"
                step="1"
                value={termInMonths}
                onChange={handleTermChange}
                className="w-full mb-1"
           />
            <div className='w-full justify-between flex text-[12px] text-gray-700' >
                <div className="block mb-2">1 month</div>
                <div className="block mb-2">24 months</div>
            </div>
        </div>
        <div className='w-full justify-between flex ' >
            <div>Daily staking rewards: </div>
            <div className="font-bold text-[#28a042]">{Math.floor(calculateDailyRewards())} PEBUBU</div>
        </div>
        <div className='w-full justify-between flex border-t border-t-gray-300 pt-4 ' >
            <div>Total staking rewards: </div>
            <div className="font-bold text-[#28a042]">{Math.floor(calculateTotalRewards())} PEBUBU</div>
        </div>
        <NavLink to="/signup" className="block mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">Get started now</NavLink>
    </div>
    )
}

export default StakingCalculator;