import {  NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-gray-100 text-[#1b222a] p-8 mt-20 w-full flex justify-center">
      <div className='container' >
      <div className="flex flex-col gap-8 justify-between">
        {/* <div className="flex gap-10 font-bold w-full justify-center ">
              <NavLink to="/about-us" className="text-[#1b222a] hover:underline">About us</NavLink>
              <NavLink to="/terms" className="text-[#1b222a] hover:underline">Terms & Conditions</NavLink>
              <NavLink to="/privacy-policy" className="text-[#1b222a] hover:underline">Privacy Policy</NavLink>
              <NavLink to="/staking-terms" className="text-[#1b222a] hover:underline">Staking Terms</NavLink>
              <NavLink to="https://x.com/Pebububcrypto" className="text-[#1b222a] hover:underline">X</NavLink>
              <NavLink to="https://t.me/PEBUBUCRYPTO" className="text-[#1b222a] hover:underline">Telegram</NavLink>
        </div>         */}
        <div className='px-20 w-full flex justify-center'>
          <p className="font-bold">Powered by <span className='font-bold text-black '>PEBUBU</span>™</p>
        </div>
      </div>
      </div>
    </footer>
  );

  export default Footer;
