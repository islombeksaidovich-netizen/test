'use client';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-gray-900">1,248</p>
          <span className="text-green-500 text-sm font-medium mt-2 block">+12% from last week</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Active Chats</h3>
          <p className="text-3xl font-bold text-gray-900">856</p>
          <span className="text-green-500 text-sm font-medium mt-2 block">+5% from last week</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Messages Sent Today</h3>
          <p className="text-3xl font-bold text-gray-900">4,921</p>
          <span className="text-blue-500 text-sm font-medium mt-2 block">Steady activity</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold mb-4">Recent Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Name</th>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Status</th>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Joined</th>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Alice Cooper', status: 'Online', date: 'Today' },
                { name: 'Bob Smith', status: 'Offline', date: 'Yesterday' },
                { name: 'Charlie Davis', status: 'Online', date: '2 days ago' },
              ].map((user, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium">{user.name}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">{user.date}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
