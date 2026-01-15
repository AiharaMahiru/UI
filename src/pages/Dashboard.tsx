export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h2>
        <div className="flex items-center space-x-2">
           <button className="px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
             Last 7 days
           </button>
           <button className="px-4 py-2 bg-indigo-600 text-sm font-medium text-white rounded-lg hover:bg-indigo-700">
             Download Report
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Revenue", value: "$45,231.89", trend: "+20.1%", trendUp: true },
          { title: "Subscriptions", value: "2,350", trend: "+180.1%", trendUp: true },
          { title: "Sales", value: "12,234", trend: "+19%", trendUp: true },
          { title: "Active Now", value: "573", trend: "+201 since last hour", trendUp: true },
        ].map((stat, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
              <span className={`text-sm font-medium ${stat.trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 min-h-[300px] flex items-center justify-center text-gray-400 border-dashed">
           Chart Placeholder
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 min-h-[300px] flex items-center justify-center text-gray-400 border-dashed">
           Recent Activity Placeholder
        </div>
      </div>
    </div>
  );
}
