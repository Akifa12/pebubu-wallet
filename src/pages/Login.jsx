import { BsWallet2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

// Login Page
const Login = () => (
  <div className=" overflow-hidden bg-white text-gray-900 flex w-full overflow-y-hidden ">
    <div className="w-full md:min-w-[400px] bg-white  flex flex-col items-start justify-between min-h-screen  px-10  ">
      <div className="w-full ">
        <header className=" w-full flex justify-start items-center p-6 ">
          <NavLink to="/" ><h1 className="text-3xl font-bold flex  text-blue-400  "><BsWallet2 className='w-[40px] h-[40px] text-blue-800 mr-4 ' />PEBUBU Wallet</h1></NavLink>
        </header>
        <form className="bg-white   p-6  w-full">
          <h2 className="text-2xl font-bold mt-16 mb-3">Sign in</h2>
          <div className="flex space-x-2 text-gray-600  ">Manage your PEBUBU. Buy, Stake, Earn </div>
          <label className="mt-5 block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full border p-2 outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
          <label className="block mt-5 text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 w-full border p-2 outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
          <div className="mt-3 text-blue-600 w-full flex justify-end"><NavLink to="/reset-password" >Forgot password</NavLink></div>
          <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Continue</button>
        </form>
      </div>

      <div className="w-full flex items-end p-6 flex-col " >
        <span className="text-gray-600 ">Don't have an account?</span>
        <NavLink to="/signup" ><span className="text-blue-600 font-medium ">Sign up</span></NavLink>
      </div>

    </div>
    <div className="hidden md:block flex-1 bg-blue-400 ">
      <img src="/images/signup-img.png" alt="nature" className="object-cover min-w-[600px] max-w-[1000px] max-h-screen " />
    </div>
  </div>
);

export default Login;