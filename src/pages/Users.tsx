import { useState } from 'react';
import { Search, Filter, Edit2, Trash2, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  lastActive: string;
  initials: string;
}

const MOCK_USERS: User[] = [
  { id: '1', name: 'Alicia Koch', email: 'alicia@palette.dev', role: 'Admin', status: 'Active', lastActive: '2 mins ago', initials: 'AK' },
  { id: '2', name: 'Mario Rossi', email: 'mario@palette.dev', role: 'Editor', status: 'Active', lastActive: '1 hour ago', initials: 'MR' },
  { id: '3', name: 'Jack Smith', email: 'jack@palette.dev', role: 'Viewer', status: 'Inactive', lastActive: '2 days ago', initials: 'JS' },
  { id: '4', name: 'Sarah Jones', email: 'sarah@palette.dev', role: 'Editor', status: 'Active', lastActive: '5 hours ago', initials: 'SJ' },
  { id: '5', name: 'David Lee', email: 'david@palette.dev', role: 'Viewer', status: 'Active', lastActive: '1 day ago', initials: 'DL' },
  { id: '6', name: 'Emma Wilson', email: 'emma@palette.dev', role: 'Viewer', status: 'Active', lastActive: '3 mins ago', initials: 'EW' },
  { id: '7', name: 'James Brown', email: 'james@palette.dev', role: 'Editor', status: 'Inactive', lastActive: '1 week ago', initials: 'JB' },
  { id: '8', name: 'Laura Miller', email: 'laura@palette.dev', role: 'Admin', status: 'Active', lastActive: '4 hours ago', initials: 'LM' },
];

export function Users() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 5;

  // Form State
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Viewer',
    status: 'Active',
  });

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Creating user:', newUser);
    setIsModalOpen(false);
    // Reset form
    setNewUser({ name: '', email: '', role: 'Viewer', status: 'Active' });
    alert('User created successfully (Simulated)');
  };

  const filteredUsers = MOCK_USERS.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-700'
      : 'bg-slate-100 text-slate-700';
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'text-indigo-600 bg-indigo-50';
      case 'Editor': return 'text-blue-600 bg-blue-50';
      case 'Viewer': return 'text-slate-600 bg-slate-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold tracking-tight text-slate-900">Users</h2>
           <p className="text-slate-500 text-sm mt-1">Manage your team members and their permissions here.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm gap-2"
        >
           <Plus size={16} />
           Add User
        </button>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Add New User</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-500 hover:bg-slate-100 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateUser}>
              <div className="p-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    placeholder="e.g. jane@company.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                      <select
                        id="role"
                        value={newUser.role}
                        onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Viewer">Viewer</option>
                      </select>
                   </div>

                   <div>
                      <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                      <div className="flex items-center h-[38px]">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={newUser.status === 'Active'}
                          onClick={() => setNewUser({...newUser, status: newUser.status === 'Active' ? 'Inactive' : 'Active'})}
                          className={`${
                            newUser.status === 'Active' ? 'bg-indigo-600' : 'bg-slate-200'
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${
                              newUser.status === 'Active' ? 'translate-x-5' : 'translate-x-0'
                            } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                          />
                        </button>
                        <span className="ml-3 text-sm text-slate-600">{newUser.status}</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors shadow-sm"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
          <div className="relative w-full sm:w-64">
             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
               <Search size={16} />
             </div>
             <input
               type="text"
               placeholder="Search users..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
             />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
             <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 w-full sm:w-auto">
                <Filter size={16} />
                <span className="sr-only sm:not-sr-only">Role:</span>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-slate-900 font-medium cursor-pointer"
                >
                   <option value="All">All Roles</option>
                   <option value="Admin">Admin</option>
                   <option value="Editor">Editor</option>
                   <option value="Viewer">Viewer</option>
                </select>
             </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                            {user.initials}
                          </div>
                          <div>
                             <p className="text-sm font-medium text-slate-900">{user.name}</p>
                             <p className="text-xs text-slate-500">{user.email}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                          {user.role}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                          {user.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                       {user.lastActive}
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                             <Edit2 size={16} />
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                             <Trash2 size={16} />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                      No users found matching your search.
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
           <div className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-900">{filteredUsers.length > 0 ? startIndex + 1 : 0}</span> to <span className="font-medium text-slate-900">{Math.min(startIndex + itemsPerPage, filteredUsers.length)}</span> of <span className="font-medium text-slate-900">{filteredUsers.length}</span> results
           </div>
           <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-600"
              >
                 <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 border border-slate-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-600"
              >
                 <ChevronRight size={16} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
