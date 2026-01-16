import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';

export type Page = 'dashboard' | 'users' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'users' && <Users />}
      {currentPage === 'settings' && <Settings />}
    </Layout>
  );
}

export default App;
