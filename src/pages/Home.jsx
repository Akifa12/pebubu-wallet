
import { NavLink } from 'react-router-dom';
import { BsWallet2 } from "react-icons/bs";
import Footer from '../components/Footer';
import { FiUserPlus } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";
import { GrStakeholder } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import StakingCalculator from '../components/StakingCalculator';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className=" overflow-hidden bg-white text-gray-900  ">
            <div className=" flex justify-center relative" >
                <div className='all-pages-bg absolute z-0 bg-gradient-to-r from-[#080c12] to-[#253241] bg-left-[calc(50%+316px)_top_0] bg-no-repeat rounded-b-[50px] text-white mb-[99px] pt-[116px] w-full min-h-[600px]  ' ></div>
                <div className='container z-[5] mt-[50px] logo-conatiner' >
                    <Header />
                    {/* <header className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold flex  text-white  "><BsWallet2 className='w-[40px] h-[40px] text-white mr-4 ' />PEBUBU<span className='text-blue-800 '>Wallet</span></h1>
                        
                        <div className="space-x-4">
                        <NavLink to="/about-us" className="text-[#1b222a] hover:underline text-white">About us</NavLink>
              <NavLink to="/terms" className="text-[#1b222a] hover:underline text-white">Terms & Conditions</NavLink>
              <NavLink to="/privacy-policy" className="text-[#1b222a] hover:underline text-white">Privacy Policy</NavLink>
              <NavLink to="/staking-terms" className="text-[#1b222a] hover:underline text-white">Staking Terms</NavLink>
              <NavLink to="https://telegram.org" className="text-[#1b222a] hover:underline text-white">Telegram</NavLink>
                            <NavLink to="/login" className="px-4 py-2  font-medium text-white ">Login</NavLink>
                            <NavLink to="/signup" className="px-4 py-2 border border-white rounded font-medium text-white ">Sign Up</NavLink>
                        </div>
                    </header> */}
                    <div className="flex justify-between items-center mb-16 w-full">

                        <div className="max-w-md ml-auto inner-text-container">
                            <h2 className="text-[40px] text-white  leading-[48px] font-bold mb-4">A simple and secure wallet to earn, buy, store and stake PEBUBU</h2>
                            <p className="mb-6 text-[18px] leading-[28px] font-medium text-white-700  ">Join over PEBUBU holders earning 15% staking rewards per year</p>
                            <NavLink to="/signup" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 flex gap-1 max-w-[200px] items-center ">Get started now<IoIosArrowForward className='w-[20px] ' /></NavLink>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img
  src="/images/logobk.png"
  alt="Wallet Demo"
  className="w-[276px] h-[576px] rounded-lg shadow-lg
             bg-transparent          /* no white fill  */
             border-0                /* remove any edge */
             object-contain"         /* keep ratio, no crop */
/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center' >
            <div className='container' >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div>
                    <p className="text-[32px] leading-[40px] font-bold">$0.004303</p>
                    <p className='text-[18px] font-medium leading-[28px] text-[#7e7d87] '>PEBUBU price</p>
                </div>
                <div>
                    <p className="text-[32px] leading-[40px] font-bold">15%</p>
                    <p className='text-[18px] font-medium leading-[28px] text-[#7e7d87] '>Staking reward</p>
                </div>
            </div>
            <section className="mt-16 bg-[#f7f9fc] p-8 rounded-lg text-black">
                <div className="flex items-center w-full  ">
                    <div className='w-1/2 flex justify-center' >
                        <img src="/images/security-icon.gif" alt="Security Icon" className="h-[300px] mr-8" />
                    </div>
                    <div>
                        <h3 className="text-[28px] leading-[36px] font-bold mb-4">We put security first</h3>
                        <div className="list-disc list-inside space-y-2 text-[18px] lading-[20px] font-medium text-gray-700 ">
                            <div className='flex gap-2 items-center '><AiOutlineCheckCircle />Industry-leading security</div>
                            <div className='flex gap-2 items-center '><AiOutlineCheckCircle />Cold storage and staking</div>
                            <div className='flex gap-2 items-center '><AiOutlineCheckCircle />Only you have access to your wallet</div>
                            <div className='flex gap-2 items-center '><AiOutlineCheckCircle />Protected by insurance against cyber attacks</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-16 text-center flex flex-col items-center ">
                <h3 className="font-bold mb-4 text-[40px] leading-[48px] ">Simple. Convenient. Secure.</h3>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[1024px] md:gap-10">
                    <div className='col-span-1 flex flex-col items-center gap-3 '>
                        <FiUserPlus className='w-[30px] h-[30px]' />
                        <p className="font-bold text-[20px] leading-[28px]  ">Create an account</p>
                        <p className='mt-2 leading-[24px] opacity-80'>It takes less than 1 minutes to get started</p>
                    </div>
                    <div className='col-span-1 flex flex-col items-center gap-3 '>
                        <IoMdCard className='w-[30px] h-[30px]' />
                        <p className="font-bold text-[20px] leading-[28px]  ">Buy or Deposit PEBUBU</p>
                        <p className='mt-2 leading-[24px] opacity-80'>Deposit, swap, or buy PEBUBU using a card or bank transfer</p>
                    </div>
                    <div className='col-span-1 flex flex-col items-center gap-3 '>
                        <GrStakeholder className='w-[30px] h-[30px]' />
                        <p className="font-bold text-[20px] leading-[28px]  ">Stake and earn</p>
                        <p className='mt-2 leading-[24px] opacity-80'>Stake PEBUBU and Earn 15% per year in staking rewards</p>
                    </div>
                </div>
                <div className='mt-10 w-full flex justify-center' >
                    <div className=" w-[300px] border-t border-t-gray-600 "></div>
                </div>
            </section>
            <section className="mt-16 bg-[#f7f9fc] p-8 rounded-lg text-center w-full flex justify-center  ">
                <div className='w-full md:max-w-[485px] flex justify-center flex-col gap-1 items-center ' >
                    <h3 className="text-[32px] leading-[40px] font-bold mb-1">How much could you earn staking PEBUBU?</h3>
                    <p className='text-[18px] font-medium leading-[28px] max-w-[506px] text-gray-700 '>Staking rewards are deposited into your PEBUBU Wallet every day. Unstake at any time.</p>
                    <StakingCalculator />
                </div>
            </section>
            <section className="mt-16 text-center">

                <div className='w-full flex justify-center my-16'>
                    <div className='w-[143px] border-t border-t-gray-300 ' ></div>
                </div>
                <h4 className="text-[32px] leading-[48px] font-bold mb-4">Trusted and loved by PEBUBU Community</h4>

            </section>
            <section className="mt-16 text-center">
                <h3 className="text-[24px] lading-[32px] font-bold mb-4">Join our rapidly-growing community and connect with other PEBUBU holders</h3>
                <div className="flex gap-20 justify-center mt-10 ">
                    <div className='flex flex-col items-center gap-3'>
                        <img src="/logos/twitter.png" alt="Yahoo" className="w-[35px] h-[35px]" />
                        <a href="https://twitter.com/verasitytech" target="_blank" rel="noreferrer"  class="border border-[#cfd4d8] rounded-[4px] text-blue-600 text-[14px] font-medium lading-[34px] py-[10px] px-[24px]  ">
                            <span className='flex gap-1'>Follow <MdOutlineArrowOutward className='w-[20px] h-[20px] text-gray-700 ' /></span>
                        </a>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <img src="/logos/telegram.png" alt="Yahoo" className="w-[35px] h-[35px]" />
                        <a href="https://t.me/verasitytech" target="_blank" rel="noreferrer"  class="border border-[#cfd4d8] rounded-[4px] text-blue-600 text-[14px] font-medium lading-[34px] py-[10px] px-[24px]  ">
                            <span className='flex gap-1'>Join <MdOutlineArrowOutward className='w-[20px] h-[20px] text-gray-700 ' /></span>
                        </a>
                    </div>
                    
                </div>
            </section>
            </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;