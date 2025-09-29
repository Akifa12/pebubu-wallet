import { useState } from "react";


// Activity Page
const Activity = () => {

  const [historyOrReports, setHistoryOrReports] = useState(true);


  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Activity</h2>
      <div className="mt-5 bg-white flex justify-start gap-2 border-b border-b-gray-300 ">
        <p className={`px-3 py-3 cursor-pointer ${historyOrReports === true ? "text-blue-600 font-medium border-b-[2px] border-b-blue-600 " : " text-gray-600"} `}
          onClick={() => setHistoryOrReports(true)}
        >History</p>
        <p className={`px-3 py-3 cursor-pointer ${historyOrReports === false ? "text-blue-600 font-medium border-b-[2px] border-b-blue-600 " : " text-gray-600"} `}
          onClick={() => setHistoryOrReports(false)}
        >Reports</p>
      </div>
      <div >
        {
          historyOrReports === true ?
            <div className='mt-10 flex flex-col  items-center min-h-[400px] self-stretch justify-start ' >
              <div className="w-full flex justify-between " >
                <div className="text-[18px] font-bold leading-[28px]  " >Transaction History</div>
                <div className="flex gap-5 " >

                </div>
              </div>
              <div className="w-full mt-10 flex flex-col gap-3 items-center " >
                <h3 className='text-black text-[16px] leadiing-[24px] font-medium ' >No recent activity.</h3>
                <p className='text-gray-700 text-[14px] leading-[20px] text-center  ' >You don’t have any actions to be shown here.</p>
              </div>
            </div>
            :

            <div className='mt-10 flex flex-col gap-3 items-center min-h-[400px] self-stretch justify-center ' >
              <h3 className='text-black text-[16px] leadiing-[24px] font-medium ' >You don’t have any reports.</h3>
              <p className='text-gray-700 text-[14px] leading-[20px] text-center  ' >Click the button below to generate a custom<br /> report for the specified time period.</p>
              <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">Request my report </button>
            </div>
        }

      </div>
    </div>
  );
}

export default Activity