import { experiencedCandidates, fresherCandidates } from '../data/mockData';
import type { RoleType } from '../App';

interface CandidateDetailProps {
  candidateId: string;
  roleType: RoleType;
  onBack: () => void;
}

export default function CandidateDetail({ candidateId, roleType, onBack }: CandidateDetailProps) {
  const candidates = roleType === 'experienced' ? experiencedCandidates : fresherCandidates;
  const candidate = candidates.find((c) => c.id === candidateId);

  if (!candidate) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500">Candidate not found</p>
        <button onClick={onBack} className="mt-4 text-primary-600 hover:underline text-sm">Go back</button>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'bg-emerald-500';
    if (score >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 85) return 'text-emerald-700';
    if (score >= 70) return 'text-amber-700';
    return 'text-red-700';
  };

  return (
    <div className="animate-slide-in">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-5"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="lg:col-span-1 space-y-5">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{candidate.name}</h3>
                <p className="text-sm text-slate-500">Rank #{candidate.rank} · Score {candidate.score}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-sm text-slate-700">{candidate.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-sm text-slate-700">{candidate.phone}</span>
              </div>
              {candidate.experience !== undefined && (
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span className="text-sm text-slate-700">{candidate.experience} years experience</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Experience Timeline</h4>
            <div className="space-y-4">
              {candidate.timeline.map((entry, i) => (
                <div key={i} className="relative pl-5">
                  {i !== candidate.timeline.length - 1 && (
                    <div className="absolute left-1.5 top-3 bottom-0 w-px bg-slate-200" />
                  )}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-white shadow-sm" />
                  <p className="text-sm font-medium text-slate-800">{entry.role}</p>
                  <p className="text-xs text-slate-500">{entry.company}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{entry.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Score Breakdown */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 mb-5">Score Breakdown</h4>
            <div className="space-y-4">
              {Object.entries(candidate.scoreBreakdown).map(([key, value]) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-slate-600 capitalize">{key}</span>
                    <span className={`text-sm font-semibold ${getScoreTextColor(value)}`}>{value}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div
                      className={`${getScoreColor(value)} h-2.5 rounded-full transition-all duration-500`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Reasoning */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 mb-4">AI Reasoning</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Why Ranked</p>
                <p className="text-sm text-slate-700 leading-relaxed">{candidate.aiReasoning.whyRanked}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Strengths</p>
                  <ul className="space-y-1.5">
                    {candidate.aiReasoning.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mt-0.5 shrink-0">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">Gaps</p>
                  <ul className="space-y-1.5">
                    {candidate.aiReasoning.gaps.map((g, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mt-0.5 shrink-0">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Risks</p>
                  <ul className="space-y-1.5">
                    {candidate.aiReasoning.risks.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5 shrink-0">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Shortlist
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Hold
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Reject
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors ml-auto">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

