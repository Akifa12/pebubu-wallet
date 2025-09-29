import { BsWallet2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import TypeWriter from "../components/Typewriter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";

const phrases = ['in Accountability', 'in Auditability'];

export default function AboutUs() {
    return (<div className="w-full flex flex-col items-center min-h-screen ">
        <div className='all-pages-bg absolute z-0 bg-gradient-to-r  bg-left-[calc(50%+316px)_top_0] bg-no-repeat rounded-b-[50px] text-white mb-[99px] pt-[116px] w-full min-h-[600px]  ' ></div>
        {/* <div className="all-pages-bg absolute z-0 bg-gradient-to-r bg-left-[calc(50%+316px)_top_0] bg-no-repeat rounded-b-[50px] text-white mb-[99px] pt-[30px] w-full min-h-[600px] "> */}
        <div className="z-[5] container text-gray-900 font-medium about-wrapper about-us-wrapper">
        <Header />
</div>
        {/* </div> */}
        
        <div className="z-[5] container text-gray-900 font-medium ">
         
            {/* <div className=" w-full flex justify-between items-center relative " >
                <NavLink className="text-3xl py-10 font-bold flex  text-white  " to="/" ><BsWallet2 className='w-[40px] h-[40px] text-white mr-4 ' />PEBUBU<span className='text-blue-600 '>Wallet</span></NavLink>
                <div className="flex gap-3 h-[40px]" >
                    <NavLink to="/login" className="px-4 py-2  font-medium text-blue-600 ">Login</NavLink>
                    <NavLink to="/signup" className="px-4 py-2 border border-blue-600 rounded font-medium text-blue-600 ">Sign Up</NavLink>
                </div>
            </div> */}
            <div className="ineer_about mt-10 w-full flex flex-col gap-2 justify-start text-[70px] font-bold leading-[90px]" >
                <div className="  text-white " >The New Standard</div>
                <span className="block min-h-[90px] ">
                    <TypeWriter className="!z-[5]" phrases={phrases} typingSpeed={80} delayBetweenPhrases={2000} />
                </span>
            </div>
            <div className="my-5 text-[18px] leading-[28px] max-w-[620px] text-white text-left " >
                Through the VeraViews ecosystem and Verasity’s patented PoV module, we’re transforming the black-box ad fraud industry.
            </div>
            <div className="w-full flex justify-start" >
                <NavLink to="/signup" className=" px-6 py-3 w-[220px] justify-center bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 flex gap-1 items-center ">Get started now<IoIosArrowForward className='w-[20px] -mb-[4px] ' /></NavLink>
            </div>
        </div>
        <div className="container text-gray-900 mt-[150px] flex flex-col items-center " >
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <p className="text-[32px] leading-[40px] font-bold text-[#402ff5] ">300,000+</p>
                    <p className='text-[18px] font-medium leading-[28px] text-[#7e7d87] '>PEBUBU price</p>
                </div>
                <div>
                    <p className="text-[32px] leading-[40px] font-bold text-[#402ff5] ">660,000+</p>
                    <p className='text-[18px] font-medium leading-[28px] text-[#7e7d87] '>Staking reward</p>
                </div>
                <div>
                    <p className="text-[32px] leading-[40px] font-bold text-[#402ff5] ">6</p>
                    <p className='text-[18px] font-medium leading-[28px] text-[#7e7d87] '>Awarded Patents</p>
                </div>
            </div>
            <div className="mt-10 text-[24px] leading-[32px] max-w-[605px] font-medium text-center" >
                PEBUBU is an open ledger ecosystem bringing trust and transparency to digital advertising and payments.
            </div>
            <div className="mt-10 gap-6 flex w-full pb-10 ">
                <div className="flex-1 group relative">
                    <div className=" rounded-lg  bg-white border border-gray-600 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#a14bd1] group-hover:to-blue-500 transition">
                        <div className="bg-white  h-[348px] rounded-lg  relative  bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/vw-block-bg.svg')", backgroundOrigin: "border-box", backgroundSize: "auto", backgroundPositionX: "right" }} >

                            <div className="z-[5] flex flex-col pt-20 pl-10 gap-5 ">
                                <div className="text-[28px] leading-[36px] font-bold " >PEBUBU Wallet</div>
                                <div className="max-w-[307px] text-[#545f68] text-[16px] leading-[24px] font-medium " >PEBUBU Wallet is an insured, simple and secure wallet to earn, buy, store and stake PEBUBU. Industry-leading security and cold storage keeps your funds safe.</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="flex-1 group relative ">
                    <div className=" rounded-lg   bg-white border border-gray-600 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#a14bd1] group-hover:to-blue-500 transition">
                        <div className="  h-[348px] bg-white rounded-lg relative  bg-no-repeat bg-cover " style={{ backgroundImage: "url('/images/vv-block-bg.svg')", backgroundOrigin: "border-box", backgroundSize: "auto", backgroundPositionX: "right" }} >

                            <div className="z-[5] flex flex-col pt-20  pl-10 gap-5 ">
                                <div className="text-[28px] leading-[36px] font-bold " >PEBUBU Wallet</div>
                                <div className="max-w-[307px] text-[#545f68] text-[16px] leading-[24px] font-medium" >PEBUBU Wallet is an insured, simple and secure wallet to earn, buy, store and stake PEBUBU. Industry-leading security and cold storage keeps your funds safe.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container flex gap-5 flex-col items-center pb-10 " >
            <div className="text-[#1b222a] text-[40px] leading-[48px] font-bold text-center " >Our Community</div>
            <div className="text-gray-800 text-[16px] leading-[24px] font-medium text-center  " >Join one of the fastest-growing communities in blockchain.<br />
                We are an international community of over 500,000 PEBUBU members. Join us here:</div>
        </div>
        <div className="container flex gap-20 justify-center " >
            <div className='flex flex-col items-center gap-5'>
                <img src="/logos/twitter.png" alt="Yahoo" className="w-[35px] h-[35px]" />
                <a href="https://twitter.com/verasitytech" target="_blank" rel="noreferrer" class="border border-[#cfd4d8] rounded-[4px] text-blue-600 text-[14px] font-medium lading-[34px] py-[10px] px-[24px]  ">
                    <span className='flex gap-1'>Follow <MdOutlineArrowOutward className='w-[20px] h-[20px] text-gray-700 ' /></span>
                </a>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <img src="/logos/telegram.png" alt="Yahoo" className="w-[35px] h-[35px]" />
                <a href="https://t.me/verasitytech" target="_blank" rel="noreferrer" class="border border-[#cfd4d8] rounded-[4px] text-blue-600 text-[14px] font-medium lading-[34px] py-[10px] px-[24px]  ">
                    <span className='flex gap-1'>Join <MdOutlineArrowOutward className='w-[20px] h-[20px] text-gray-700 ' /></span>
                </a>
            </div>
        </div>
        <Footer />
    </div>
    )
}

