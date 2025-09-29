import React from "react";
import { NavLink } from "react-router-dom";
import { BsWallet2 } from "react-icons/bs";
const Header = () => (
    <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex  text-white  "><BsWallet2 className='w-[40px] h-[40px] text-white mr-4 ' />PEBUBU<span className='text-blue-800 logo-text'>-Wallet</span></h1>

        <div className="space-x-4">
            <NavLink to="/about-us" className="text-[#1b222a] hover:underline text-white">About us</NavLink>
            <NavLink to="/terms" className="text-[#1b222a] hover:underline text-white">Terms & Conditions</NavLink>
            <NavLink to="/privacy-policy" className="text-[#1b222a] hover:underline text-white">Privacy Policy</NavLink>
            <NavLink to="/staking-terms" className="text-[#1b222a] hover:underline text-white">Staking Terms</NavLink>
            <NavLink to="https://telegram.org" className="text-[#1b222a] hover:underline text-white">Telegram</NavLink>
            <NavLink to="/login" className="px-4 py-2  font-medium text-white ">Login</NavLink>
            <NavLink to="/signup" className="signup px-4 py-2 border border-white rounded font-medium text-white ">Sign Up</NavLink>
        </div>
    </header>
);

export default Header;