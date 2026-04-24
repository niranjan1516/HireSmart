import { experiencedCandidates, fresherCandidates } from '../data/mockData';
import type { RoleType } from '../App';

interface ReportsProps {
  roleType: RoleType;
}

export default function Reports({ roleType }: ReportsProps) {
  const candidates = roleType === 'experienced' ? experiencedCandidates : fresherCandidates;

  const total = candidates.length;
  const shortlisted = candidates.filter(c => c.recommendation === 'Shortlist').length;
  const hold = candidates.filter(c => c.recommendation === 'Hold').length;
  const rejected = candidates.filter(c => c.recommendation === 'Reject').length;
  const avgScore = Math.round(candidates.reduce((sum, c) => sum + c.score, 0) / total);

  const exportCSV = () => {
    const headers = roleType === 'experienced'
      ? ['Rank', 'Name', 'Email', 'Score', 'Skills Match', 'Experience', 'Recommendation']
      : ['Rank', 'Name', 'Email', 'Score', 'Skills Match', 'Recommendation'];

    const rows = candidates.map(c =>
      roleType === 'experienced'
        ? [c.rank, c.name, c.email, c.score, c.skillsMatch + '%', (c.experience || 0) + ' yrs', c.recommendation]
        : [c.rank, c.name, c.email, c.score, c.skillsMatch + '%', c.recommendation]
    );

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `candidates_${roleType}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const json = JSON.stringify(candidates, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `candidates_${roleType}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Export Buttons */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Export Data</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export CSV
          </button>
          <button
            onClick={exportJSON}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export JSON
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-500">Total Candidates</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{total}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-500">Shortlisted</span>
          </div>
          <p className="text-3xl font-bold text-emerald-700">{shortlisted}</p>
          <p className="text-xs text-slate-400 mt-1">{Math.round((shortlisted / total) * 100)}% of total</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-500">On Hold</span>
          </div>
          <p className="text-3xl font-bold text-amber-700">{hold}</p>
          <p className="text-xs text-slate-400 mt-1">{Math.round((hold / total) * 100)}% of total</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-500">Avg Score</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{avgScore}</p>
          <p className="text-xs text-slate-400 mt-1">Out of 100</p>
        </div>
      </div>

      {/* Distribution Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900 mb-5">Score Distribution</h3>
        <div className="space-y-3">
          {[
            { label: '90-100 (Excellent)', count: candidates.filter(c => c.score >= 90).length, color: 'bg-emerald-500' },
            { label: '80-89 (Good)', count: candidates.filter(c => c.score >= 80 && c.score < 90).length, color: 'bg-primary-500' },
            { label: '70-79 (Average)', count: candidates.filter(c => c.score >= 70 && c.score < 80).length, color: 'bg-amber-500' },
            { label: 'Below 70 (Below Average)', count: candidates.filter(c => c.score < 70).length, color: 'bg-red-500' },
          ].map((bucket) => (
            <div key={bucket.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-slate-600">{bucket.label}</span>
                <span className="text-sm font-semibold text-slate-800">{bucket.count} candidates</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div
                  className={`${bucket.color} h-3 rounded-full transition-all`}
                  style={{ width: `${(bucket.count / total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

