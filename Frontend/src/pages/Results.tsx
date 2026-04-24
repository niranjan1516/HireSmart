import { experiencedCandidates, fresherCandidates } from '../data/mockData';
import type { RoleType } from '../App';

interface ResultsProps {
  roleType: RoleType;
  onCandidateClick: (id: string) => void;
}

const getRecommendationBadge = (rec: string) => {
  switch (rec) {
    case 'Shortlist':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Hold':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'Reject':
      return 'bg-red-50 text-red-700 border-red-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
};

export default function Results({ roleType, onCandidateClick }: ResultsProps) {
  const candidates = roleType === 'experienced' ? experiencedCandidates : fresherCandidates;

  return (
    <div className="space-y-5">
      {/* Header info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Showing results for <span className="font-medium text-slate-700">{roleType === 'experienced' ? 'Experienced Role' : 'Fresher Role'}</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            {roleType === 'experienced'
              ? 'Experience column is included'
              : 'Experience column is hidden (not applicable for fresher roles)'}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {candidates.filter(c => c.recommendation === 'Shortlist').length} Shortlisted
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {candidates.filter(c => c.recommendation === 'Hold').length} Hold
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-red-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            {candidates.filter(c => c.recommendation === 'Reject').length} Rejected
          </span>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rank</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Candidate</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Score</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Skills Match</th>
                {roleType === 'experienced' && (
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience</th>
                )}
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-80">Reason</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {candidates.map((candidate) => (
                <tr
                  key={candidate.id}
                  className="group hover:bg-slate-50/70 transition-colors duration-150"
                >
                  <td className="px-5 py-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      candidate.rank <= 3
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {candidate.rank}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => onCandidateClick(candidate.id)}
                      className="text-left group/name"
                    >
                      <p className="text-sm font-semibold text-primary-600 group-hover/name:text-primary-700 group-hover/name:underline underline-offset-2 transition-colors">
                        {candidate.name}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{candidate.email}</p>
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            candidate.score >= 85 ? 'bg-emerald-500' :
                            candidate.score >= 70 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${candidate.score}%` }}
                        />
                      </div>
                      <span className={`text-sm font-semibold ${
                        candidate.score >= 85 ? 'text-emerald-700' :
                        candidate.score >= 70 ? 'text-amber-700' : 'text-red-700'
                      }`}>
                        {candidate.score}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-700">{candidate.skillsMatch}%</span>
                  </td>
                  {roleType === 'experienced' && (
                    <td className="px-5 py-4">
                      <span className="text-sm text-slate-700">{candidate.experience} yrs</span>
                    </td>
                  )}
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed" title={candidate.reason}>
                      {candidate.reason}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getRecommendationBadge(candidate.recommendation)}`}>
                      {candidate.recommendation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty state if needed */}
      {candidates.length === 0 && (
        <div className="text-center py-16">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-slate-300">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
          <p className="text-slate-500 text-sm">No candidates found. Run AI ranking to see results.</p>
        </div>
      )}
    </div>
  );
}

