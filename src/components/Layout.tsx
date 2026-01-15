import { useState } from 'react';
import type { ReactNode } from 'react';
import { LayoutDashboard, Users, Settings, Bell, Search, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200
        transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:flex flex-col
        ${sidebarOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">P</div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Palette</h1>
          </div>
          {/* Close button for mobile */}
          <button
            className="md:hidden text-slate-500 hover:text-slate-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-indigo-600 text-white font-medium transition-colors shadow-sm">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors">
            <Users size={20} />
            <span className="font-medium">Users</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors">
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-200"></div>
             <div className="text-sm">
                <p className="font-medium text-slate-900">Admin User</p>
                <p className="text-slate-500 text-xs">admin@palette.dev</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 w-full">
            <div className="md:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-500"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md hidden md:flex items-center relative">
               <div className="absolute left-3 text-slate-400">
                  <Search size={18} />
               </div>
               <input
                 type="text"
                 placeholder="Search..."
                 className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
               />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-full">
               <Search size={20} />
            </button>
             <button className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                <span className="sr-only">Notifications</span>
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
