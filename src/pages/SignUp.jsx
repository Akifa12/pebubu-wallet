
import { useState } from "react";
import { BsWallet2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { signup } from "../services/auth";
import IsEmpty from "is-empty";
import { validatePassword, isValidEmail } from "../utils/methods";
import { toast } from "react-toastify";
import { API_ERROR_EMAIL_ALREADY_EXISTS } from "../services/constants";

const STATES_OF_SIGNUP = {
  "BEFORE_REGISTER_EMAIL": 0,
  "WAITING_FOR_CODE_INPUT": 1,
  "VALIDAING_INUTED_CODE": 2,
  "OPENED_PASSWORD_INPUT": 3,
  "END_SIGNUP": 4
}

// Sign Up Page
const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [invalidCodeErr, setInvalidCodeErr] = useState("");
  const [invalidPasswordErr, setInvalidPasswordErr] = useState("");
  const [agreed2Terms, setAgreed2Terms] = useState(false);
  const [signupState, setSignupState] = useState(STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL);
  // 0 before input email,  only show email input box
  // 1 after send email to backend, waiting code input, show code input box
  // 2 validate inputed code with backend, 
  // 3 validation failed
  // 4 validation passed, show nonification to recommend login  

  const handleFirstSignup = async () => {
    try{

      if( IsEmpty(email) ) {
        toast.error("Email should be inputed.");
        return;
      }


      //then check input has email type
      if( isValidEmail(email) === false ) {
        toast.error("Invaild email address!");
        return;
      }

      console.log( `handleFirstSignup() email  :  `, email );

      const firstSignupSucceed = await signup(email, "");

      
      console.log( `handleFirstSignup() firstSignupSucceed  :  `, firstSignupSucceed );

      if(firstSignupSucceed == API_ERROR_EMAIL_ALREADY_EXISTS )
        {
          toast.error("The email is alaready registered."); 
          setSignupState(STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL);
          return;
        }
      if(firstSignupSucceed === false ) {
          toast.error("Failed in sign up, please contact to support team."); 
          setSignupState(STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL);
          return;
        }
      if(firstSignupSucceed === true )
      {
        setSignupState(STATES_OF_SIGNUP.WAITING_FOR_CODE_INPUT);
        toast.success("Please check your inbox for verification.");
      }
      
      
      
    }catch(err)
    {
      console.error(err);
    }
  }

  const handleVerifyCode = async () => {
    try{
      window.alert("handleVerifyCode");

      if( IsEmpty( code ) ) 
      {
        toast.error("Please copy the verification code and input it on the input box.");
        return;
      }


    }catch(err){
      console.error(err);
    }
  }

  const handleFinalizeSignup = async () => {
    try {
      window.alert("handleFinalizeSignup");

      if( IsEmpty( password ) ) 
      {
        toast.error("Password should not be empty.");
        return;
      }
      if( IsEmpty(invalidPasswordErr) == false )
      {
        console.error("Tried sign up with invalid password.")
        toast.error("Please input valid password and try again.");
        return;
      }
      if( IsEmpty( confirmPassword ) ) 
      {
        toast.error("You should input the same password again to confirm.");
        return;
      }
      if( password !== confirmPassword )
      {        
        toast.error("Inputed passwords should be same.");
        return;
      }


    }catch(err) {
      console.error(err);
    }
  }

  const handleChangePassword = (passwordString) => {
    const passwordValidationResult = validatePassword(passwordString);

    if( passwordValidationResult.isValid !== true )
      {
        console.log("Password is weak. Issues:");
        console.log(passwordValidationResult.errors.join("\n"));

        setInvalidPasswordErr(passwordValidationResult.errors?.toString())
      }
      setInvalidPasswordErr("");

  }

  return (
  <div className=" overflow-hidden bg-white text-gray-900 flex w-full overflow-y-hidden ">
    <div className="w-full md:min-w-[400px] bg-white  flex flex-col items-start justify-between min-h-screen  px-10  ">
      <div className="w-full ">
        <header className=" w-full flex justify-start items-center p-6 ">
        <NavLink to="/" ><h1 className="text-3xl font-bold flex  text-blue-400  "><BsWallet2 className='w-[40px] h-[40px] text-blue-800 mr-4 ' />PEBUBU Wallet</h1></NavLink>
        </header>
        <form className="bg-white   p-6  w-full">
          <h2 className="text-2xl font-bold mt-16 mb-3 ">Create account</h2>
          <div className="flex space-x-2 text-gray-600 ">Manage your PEBUBU. Buy, Stake, Earn </div>
          <label className="mt-5 block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full border p-2 outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={signupState > STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL}
          />
          {
            signupState == STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL && 
            <div className="py-5 flex gap-2 w-full items-center ">
              
              <input type="checkbox" name="agree"  className="w-[17px] h-[17px] " value={agreed2Terms} onChange={(e) => setAgreed2Terms(e.target.value) } /> 
              <label htmlFor="agree" >
                <span>I agree to the <NavLink to="/terms" ><span className="underline text-blue-700 ">T&C</span></NavLink>. <NavLink to="/privacy-policy" ><span className="underline text-blue-700">Privacy Policy</span></NavLink></span>
              </label>            
            </div>
          }
          {
            signupState == STATES_OF_SIGNUP.WAITING_FOR_CODE_INPUT && 
            <>
             <label htmlFor="code" className="mt-5 block text-sm font-medium text-gray-700">Code</label>
              <input type="code" className="mt-1 w-full border p-2 outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Copy and input the verrification code"
                onChange={(e) => setCode(e.target.value) }
                value={code}
              />        
            </>
          }
          {
            signupState >= STATES_OF_SIGNUP.OPENED_PASSWORD_INPUT && 
            <>
              <label htmlFor="password" className="mt-5 block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full border p-2 outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                onChange={(e) => handleChangePassword(e.target.value) }
                value={password}
              />              
              <label htmlFor="confirmpassword" className="mt-5 block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="confirmpassword" className="mt-1 w-full border p-2 outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                onChange={(e) => setConfirmPassword(e.target.value) }
                value={confirmPassword}
              />
            </>
          }
          <button className="w-full mt-5 px-4 py-2 bg-blue-500 disabled:bg-blue-gray-400 text-white rounded hover:bg-blue-600" 
            disabled={!agreed2Terms}
            onClick={(e) => 
              {
                e.preventDefault();

                signupState === STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL? 
                handleFirstSignup()
                :
                signupState === STATES_OF_SIGNUP.WAITING_FOR_CODE_INPUT?
                handleVerifyCode()
                :
                signupState >= STATES_OF_SIGNUP.OPENED_PASSWORD_INPUT?
                handleFinalizeSignup()
                :
                console.log("No action");
              }}
          >{
            signupState === STATES_OF_SIGNUP.BEFORE_REGISTER_EMAIL?
            "Next"
            :
            signupState === STATES_OF_SIGNUP.WAITING_FOR_CODE_INPUT?
            "Verify your code"
            :
            signupState === STATES_OF_SIGNUP.VALIDAING_INUTED_CODE?            
            "Validating..."
            :
            signupState === STATES_OF_SIGNUP.OPENED_PASSWORD_INPUT?
            "Sign up"
            :
            "Next"
          }</button>
        </form>
      </div>
      <div className="w-full flex items-end p-6 flex-col " >
      <span className="text-gray-600 ">Already have an account?</span>
        <NavLink to="/login" ><span className="text-blue-600 font-medium ">Login</span></NavLink>
      </div>
    </div>
    <div className="hidden md:block flex-1 bg-blue-400 ">
      <img src="/images/signup-img.png" alt="nature" className="object-cover min-w-[600px] max-w-[1000px] max-h-screen " />
    </div>

  </div>
);
}

export default SignUp;

