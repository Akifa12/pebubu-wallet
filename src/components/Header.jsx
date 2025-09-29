import { NavLink } from "react-router-dom";
import { BsWallet2 } from "react-icons/bs";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mb-8 px-4">
      <div className="flex items-center justify-between">
        {/* Logo – now clickable to Home */}
        <NavLink to="/" className="text-3xl font-bold flex text-white">
          <BsWallet2 className='w-[40px] h-[40px] text-white mr-4' />
          PEBUBU<span className='text-blue-800 logo-text'>Wallet</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4 items-center">
          <NavLink to="/" className="text-white hover:underline">Home</NavLink>
          <NavLink to="/about-us" className="text-white hover:underline">About us</NavLink>
          <NavLink to="/terms" className="text-white hover:underline">Terms</NavLink>
          <NavLink to="/privacy-policy" className="text-white hover:underline">Privacy</NavLink>
          <NavLink to="/staking-terms" className="text-white hover:underline">Staking Terms</NavLink>
          <NavLink to="/login" className="px-4 py-2 font-medium text-white">Login</NavLink>
          <NavLink to="/signup" className="px-4 py-2 border border-white rounded font-medium text-white">Sign Up</NavLink>
        </nav>

        {/* Hamburger icon – only mobile */}
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden mt-4 flex flex-col space-y-3 text-white">
          <NavLink to="/about-us" onClick={() => setOpen(false)}>About us</NavLink>
          <NavLink to="/terms" onClick={() => setOpen(false)}>Terms</NavLink>
          <NavLink to="/privacy-policy" onClick={() => setOpen(false)}>Privacy</NavLink>
          <NavLink to="/staking-terms" onClick={() => setOpen(false)}>Staking Terms</NavLink>
          <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>
          <NavLink to="/signup" onClick={() => setOpen(false)} className="border border-white rounded px-3 py-1 w-24 text-center">Sign Up</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;