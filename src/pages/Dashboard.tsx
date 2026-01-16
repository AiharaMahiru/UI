import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend, LineChart, Line } from 'recharts';

const areaData = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

const barData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const roleData = [
  { name: 'Admin', value: 4 },
  { name: 'Editor', value: 12 },
  { name: 'Viewer', value: 24 },
];
const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe'];

const activityData = [
  { time: '00:00', users: 120 },
  { time: '04:00', users: 80 },
  { time: '08:00', users: 450 },
  { time: '12:00', users: 980 },
  { time: '16:00', users: 850 },
  { time: '20:00', users: 340 },
  { time: '23:59', users: 180 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h2>
        <div className="flex items-center space-x-2">
           <button className="px-4 py-2 bg-white text-sm font-medium text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
             Last 7 days
           </button>
           <button className="px-4 py-2 bg-indigo-600 text-sm font-medium text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
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
          <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              <span className={`text-sm font-medium ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Area Chart */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Overview</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={areaData}>
                 <defs>
                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                     <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    dy={10}
                 />
                 <YAxis
                    hide={true}
                 />
                 <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 />
                 <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                 />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Bar Chart */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-900 mb-4">Monthly Activity</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={barData}>
                 <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    dy={10}
                 />
                 <Tooltip
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 />
                 <Bar
                    dataKey="value"
                    fill="#4f46e5"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                 />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-900 mb-4">User Distribution</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={roleData}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={80}
                   fill="#8884d8"
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {roleData.map((_, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip />
                 <Legend verticalAlign="bottom" height={36}/>
               </PieChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Line Chart */}
        <div className="lg:col-span-2 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-900 mb-4">Daily Active Users</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={activityData}>
                 <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                 <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                 <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={3} dot={{ fill: '#4f46e5', strokeWidth: 2 }} activeDot={{ r: 8 }} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
}
