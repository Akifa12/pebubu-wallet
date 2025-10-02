import { BsWallet2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import TypeWriter from "../components/Typewriter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";

const phrases = ['in Auditability', 'in Accountability'];

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">

      {/* Orange → Purple gradient background - Responsive height */}
      <div className="all-pages-bg absolute z-0 w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] rounded-b-[30px] md:rounded-b-[50px] text-white mb-[99px] pt-[60px] md:pt-[116px]
                      bg-gradient-to-r from-[#ff8a3d] via-[#d17d00] to-[#7d3bdb]"></div>

      <div className="z-[5] container text-gray-900 font-medium about-wrapper about-us-wrapper px-4 md:px-6">
        <Header />
      </div>

      {/* ===== HERO – Fully Responsive ===== */}
      <div className="z-[5] container text-gray-900 font-medium px-4 md:px-6 -mt-8 md:-mt-0">
        {/* Heading – Responsive sizing */}
        <div className="flex flex-col gap-2 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold leading-tight sm:leading-[60px] md:leading-[75px] lg:leading-[90px]">
          <div className="text-white">The New Standard</div>
          <span className="block min-h-[50px] sm:min-h-[70px] md:min-h-[90px]">
            <TypeWriter phrases={phrases} typingSpeed={80} delayBetweenPhrases={2000} />
          </span>
        </div>

        {/* Description - Responsive text */}
        <p className="my-4 md:my-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[28px] max-w-full md:max-w-[620px] text-white">
          Stake smarter, earn easier. With PEBUBU Wallet, your crypto works harder for you — securely, transparently, and profitably.
        </p>

        {/* Button - Full width on mobile */}
        <div className="w-full md:w-auto">
          <NavLink to="/signup"
                   className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 w-full md:w-[220px] bg-blue-500 text-white rounded-lg text-base sm:text-lg hover:bg-blue-600 transition-colors">
            Get started now <IoIosArrowForward className="w-5 h-5" />
          </NavLink>
        </div>

        {/* Stats Row - Responsive spacing and text */}
        <div className="mt-10 md:mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
                  </div>
      </div>

      {/* ===== Content Section - Responsive ===== */}
      <div className="container text-gray-900 flex flex-col items-center px-4 md:px-6">
        <p className="text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px] max-w-full md:max-w-[605px] font-medium text-center mt-12 md:mt-20">
          PEBUBU is an open ledger ecosystem bringing trust and transparency to digital advertising and payments.
        </p>

        {/* Wallet Cards - Stack on mobile */}
        <div className="mt-8 md:mt-10 gap-6 flex flex-col md:flex-row w-full pb-10">
          {/* Card 1 */}
          <div className="flex-1 group relative">
            <div className="rounded-lg bg-white border border-gray-600 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#a14bd1] group-hover:to-blue-500 transition">
              <div className="bg-white min-h-[280px] sm:min-h-[320px] md:h-[348px] rounded-lg relative bg-no-repeat bg-cover" 
                   style={{ backgroundImage: "url('/images/vw-block-bg.svg')", backgroundOrigin: "border-box", backgroundSize: "auto", backgroundPositionX: "right" }}>
                <div className="z-[5] flex flex-col pt-12 sm:pt-16 md:pt-20 pl-6 sm:pl-8 md:pl-10 pr-6 gap-4 md:gap-5">
                  <div className="text-[24px] sm:text-[26px] md:text-[28px] leading-[32px] sm:leading-[34px] md:leading-[36px] font-bold">PEBUBU Wallet</div>
                  <div className="max-w-full md:max-w-[307px] text-[#545f68] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[23px] md:leading-[24px] font-medium">
                    PEBUBU Wallet is an insured, simple and secure wallet to earn, buy, store and stake PEBUBU. Industry-leading security and cold storage keeps your funds safe.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 group relative">
            <div className="rounded-lg bg-white border border-gray-600 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#a14bd1] group-hover:to-blue-500 transition">
              <div className="min-h-[280px] sm:min-h-[320px] md:h-[348px] bg-white rounded-lg relative bg-no-repeat bg-cover" 
                   style={{ backgroundImage: "url('/images/vv-block-bg.svg')", backgroundOrigin: "border-box", backgroundSize: "auto", backgroundPositionX: "right" }}>
                <div className="z-[5] flex flex-col pt-12 sm:pt-16 md:pt-20 pl-6 sm:pl-8 md:pl-10 pr-6 gap-4 md:gap-5">
                  <div className="text-[24px] sm:text-[26px] md:text-[28px] leading-[32px] sm:leading-[34px] md:leading-[36px] font-bold">PEBUBU Wallet</div>
                  <div className="max-w-full md:max-w-[307px] text-[#545f68] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[23px] md:leading-[24px] font-medium">
                    PEBUBU Wallet is an insured, simple and secure wallet to earn, buy, store and stake PEBUBU. Industry-leading security and cold storage keeps your funds safe.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section - Responsive */}
      <div className="container flex gap-4 md:gap-5 flex-col items-center pb-10 px-4 md:px-6">
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] leading-[40px] sm:leading-[44px] md:leading-[48px] font-bold text-center">Our Community</h2>
        <p className="text-gray-800 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[23px] md:leading-[24px] font-medium text-center max-w-[90%] md:max-w-full">
          Join one of the fastest-growing communities in blockchain.<br />
          We are an international community and growing our PEBUBU Army. Join us here:
        </p>
        
        {/* Social Links - Stack on mobile */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 justify-center mt-4">
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <img src="/logos/twitter.png" alt="Twitter" className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px]" />
            <a href="https://x.com/Pebububcrypto" target="_blank" rel="noreferrer"
               className="border border-[#cfd4d8] rounded-[4px] text-blue-600 text-[13px] sm:text-[14px] font-medium leading-[34px] py-[8px] sm:py-[10px] px-[20px] sm:px-[24px] flex items-center gap-1 hover:border-blue-600 transition-colors">
              Follow <MdOutlineArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <img src="/logos/telegram.png" alt="Telegram" className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px]" />
            <a href="https://t.me/PEBUBUCRYPTO" target="_blank" rel="noreferrer"
               className="border border-[#cfd4d8] rounded-[4px] text-blue-600 text-[13px] sm:text-[14px] font-medium leading-[34px] py-[8px] sm:py-[10px] px-[20px] sm:px-[24px] flex items-center gap-1 hover:border-blue-600 transition-colors">
              Join <MdOutlineArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}