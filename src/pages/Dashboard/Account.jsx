
// Account Page
const Account = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Manage Account</h2>
    <form className="bg-white shadow rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="happydreamman@gmail.com" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Dream" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Dev" />
        </div>
      </div>
      <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save Changes</button>
    </form>
  </div>
);

export default Account;