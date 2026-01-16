import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';
import { Blog } from './pages/Blog';
import { Toolbox } from './pages/Toolbox';

export type Page = 'dashboard' | 'users' | 'settings' | 'blog' | 'toolbox';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'users' && <Users />}
      {currentPage === 'settings' && <Settings />}
      {currentPage === 'blog' && <Blog />}
      {currentPage === 'toolbox' && <Toolbox />}
    </Layout>
  );
}

export default App;
