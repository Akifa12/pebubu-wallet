import { useState } from "react";
import { NavLink } from "react-router-dom";

// Staking Page
const Staking = () => {

  const [stakingsOrHistory, setStakingsOrHistory] = useState(true); // true: staking, false: history

  return (
  <div className="p-8">
    <div className="w-full justify-between flex items-center " >
      <h2 className="text-2xl font-bold ">Staking</h2>
      <button className="mt-4 px-4 py-2 font-medium bg-blue-700 text-white rounded hover:bg-blue-600">Stake</button>
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
                <div className='text-gray-700 text-[14px] leading-[20px] flex gap-1 items-center -ml-[8px]' ><div >Total Daily Rewards</div></div>
                <div className='' >0 PEBUBU</div>
                <div className='text-gray-700 text-[12px] leading-[16px]' >~$0.00</div>
              </div>
              <div className='flex flex-col gap-1 items-start ' >
                <div className='text-gray-700 text-[14px] leading-[20px] flex gap-1 items-center -ml-[8px]' ><div >Available</div></div>
                <div className='' >0 PEBUBU</div>
                <div className='text-gray-700 text-[12px] leading-[16px]' >~$0.00</div>
              </div>
              <div className='flex flex-col gap-1 items-start ' >
                <div className='text-gray-700 text-[14px] leading-[20px] flex gap-1 items-center -ml-[8px] ' ><div>Get Daily Rewards</div></div>
                <div className='underline' > <NavLink to="/staking-terms" >Staking rules</NavLink></div>
                <div className='text-gray-700 text-[12px] leading-[16px]' >~$0.00</div>
              </div>
              </div>
            </div>
          </div>

          <div className="mt-5 bg-white p-6 flex justify-start gap-2 ">
            <p className={`px-3 py-3 cursor-pointer ${stakingsOrHistory === true? "text-blue-600 font-medium border-b-[2px] border-b-blue-600 " : " text-gray-600"} `}
              onClick={() => setStakingsOrHistory(true) }
            >Stakes</p>          
            <p className={`px-3 py-3 cursor-pointer ${stakingsOrHistory === false? "text-blue-600 font-medium border-b-[2px] border-b-blue-600 " : " text-gray-600"} `}
              onClick={() => setStakingsOrHistory(false) }
            >History</p>          
          </div>
          <div className='flex flex-col gap-3 items-center min-h-[400px] self-stretch justify-center ' >  
            {
              stakingsOrHistory === true? 
              <>
              <h3 className='text-black text-[16px] leadiing-[24px] font-medium ' >You don't have any stakes.</h3>
              <p className='text-gray-700 text-[14px] leading-[20px] text-center  ' >Click the 'Stake' button to stake your VRA tokens.</p>
              </>
              :
              <>
              <h3 className='text-black text-[16px] leadiing-[24px] font-medium ' >You don't have any staking history.</h3>
              <p className='text-gray-700 text-[14px] leading-[20px] text-center  ' >Once you unstake, the record will appear here.</p>
              </>
            }
            
          </div>

  </div>
);
}

export default Staking;
