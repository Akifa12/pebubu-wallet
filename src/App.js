
import { BsWallet2 } from "react-icons/bs";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { IoWalletOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { LuActivity } from "react-icons/lu";

import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Staking from "./pages/Dashboard/Staking";
import Activity from "./pages/Dashboard/Activity";
import Reports from "./pages/Dashboard/Reports";
import Wallet from "./pages/Dashboard/Wallet";
import Deposit from "./pages/Dashboard/Deposit";
import Stake from "./pages/Dashboard/Stake";
import Buy from "./pages/Dashboard/Buy";
import Withdraw from "./pages/Dashboard/Withdraw";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StakingTerms from "./pages/StakingTerms";
import ResetPassword from "./pages/ResetPassword";
import ScrollToTop from './components/ScrollToTop';

// Sidebar Component
const Sidebar = () => (
  <div className="w-[350px] h-screen bg-gray-100 p-4 border-r border-gray-200 flex flex-col justify-between">
    <div className="" >
      <NavLink to="/"><h1 className="text-2xl font-bold flex justify-start text-blue-800  "><BsWallet2 className='w-[40px] h-[40px] text-blue-800 mr-4 ' />PEBUBU Wallet</h1></NavLink>
      <nav className="mt-10 pl-10 text-xl space-y-4">
        <NavLink to="/dashboard/wallet" className={({ isActive }) => `flex gap-2 items-center py-2 text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold text-blue-500' : ''}`}><IoWalletOutline />Wallet</NavLink>
        <NavLink to="/dashboard/staking" className={({ isActive }) => `flex gap-2 items-center py-2 text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold text-blue-500' : ''}`}><GiTrophyCup />Staking</NavLink>
        <NavLink to="/dashboard/activity" className={({ isActive }) => `flex gap-2 py-2 items-center text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold text-blue-500' : ''}`}><LuActivity />Activity</NavLink>
        {/* <NavLink to="/dashboard/account" className={({ isActive }) => `flex gap-2 py-2 items-center text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold text-blue-500' : ''}`}><RiAccountCircleLine />Account</NavLink> */}
      </nav>
    </div>
    <div className="flex flex-col gap-3 w-full pl-10 pb-5" >
      <NavLink to="/terms"><div className="text-[14px] text-gray-700" ><span>Terms & conditions</span></div></NavLink>
      <NavLink to="/privacy-policy"><div className="text-[14px] text-gray-700" ><span>Privacy Policy</span></div></NavLink>
      <NavLink to="/staking-terms"><div className="text-[14px] text-gray-700" ><span>Staking Terms</span></div></NavLink>
      <NavLink to="/about-us"><div className="text-[14px] text-gray-700" ><span>About Us</span></div></NavLink>
      <div className="mt-10 flex gap-1" >
        <BsWallet2 className='w-[20px] h-[20px] text-red-800 mr-4 ' />
        <span className="text-[14px]" >$0.004024</span>
        <span className="text-[14px] text-green-600 text-medium ">(+0.44%)</span>
      </div>
    </div>
  </div>
);


// Layout Component to Conditionally Render Sidebar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarPaths = [
    "/",
    "/signup",
    "/login",
    "/about-us",
    "/terms",
    "/privacy-policy",
    "/staking-terms",
    "/reset-password"
  ];

  return (
    <div className="w-full flex justify-center">
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar />}
      <div className={`flex-1 bg-gray-50 min-h-screen ${hideSidebarPaths.includes(location.pathname) ? 'w-full' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Wallet />} />
          <Route path="/dashboard/wallet" element={<Wallet />} />
          <Route path="/dashboard/deposit" element={<Deposit />} />
          <Route path="/dashboard/stake" element={<Stake />} />
          <Route path="/dashboard/buy" element={<Buy />} />
          <Route path="/dashboard/withdraw" element={<Withdraw />} />
          <Route path="/dashboard/staking" element={<Staking />} />
          <Route path="/dashboard/activity" element={<Activity />} />
          <Route path="/dashboard/activity/reports" element={<Reports />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/staking-terms" element={<StakingTerms />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
