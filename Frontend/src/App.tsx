import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import CandidateDetail from './pages/CandidateDetail';
import Reports from './pages/Reports';

export type Page = 'dashboard' | 'results' | 'reports';
export type RoleType = 'experienced' | 'fresher';

function App() {
  const [page, setPage] = useState<Page>('dashboard');
  const [roleType, setRoleType] = useState<RoleType>('experienced');
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const navigate = (target: Page) => {
    setPage(target);
    setSelectedCandidate(null);
  };

  const goToCandidate = (id: string) => {
    setSelectedCandidate(id);
  };

  const goBack = () => {
    setSelectedCandidate(null);
  };

  return (
    <Layout page={page} onNavigate={navigate}>
      {page === 'dashboard' && (
        <Dashboard
          roleType={roleType}
          onRoleChange={setRoleType}
          onGoToResults={() => setPage('results')}
        />
      )}
      {page === 'results' && !selectedCandidate && (
        <Results
          roleType={roleType}
          onCandidateClick={goToCandidate}
        />
      )}
      {page === 'results' && selectedCandidate && (
        <CandidateDetail
          candidateId={selectedCandidate}
          roleType={roleType}
          onBack={goBack}
        />
      )}
      {page === 'reports' && <Reports roleType={roleType} />}
    </Layout>
  );
}

export default App;

