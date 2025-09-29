
import {  NavLink } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";

// Buy Page
const Buy = () => {
    return (
    <div className="p-8">
      <h2 className=" font-medium mb-4 flex gap-5 items-center"><NavLink to="/dashboard/wallet"><FaArrowLeft className=" cursor-pointer "  /></NavLink> <span className="text-2xl">Buy with crypto</span></h2>
      <div className='w-full flex gap-5' >
      <div className="bg-white shadow rounded-lg p-6  max-w-[520px] ">
        <label className="block text-sm font-medium text-gray-700 mb-2">You will spend</label>
        <input type="number" className="outline-none w-full p-4 border border-gray-600 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 mb-4" placeholder="0 SOL" />
        <label className="block text-sm font-medium text-gray-700 mb-2">You will get</label>
        <input type="number" className="outline-none w-full p-4 border border-gray-600 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 mb-4" placeholder="0 PRBUBU" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium">Buy PEBUBU</button>
      </div>
      <div className='mt-6 flex-1 text-[16px] leading-[24px]  max-w-[320px] ' >
        <div className=' font-bold ' >Buying conditions</div>
        <div className='mt-5 text-gray-800' >The exact amount of PEBUBU purchased is calculated based on the KuCoin average price of PEBUBU & SOL during the last 24 hours, minus a small transaction fee.</div>
        <div className='mt-10 text-gray-800' >The actual amount will be calculated upon receiving your SOL.</div>
      </div>
      </div>
    </div>
  );
}
  
  export default Buy;
  