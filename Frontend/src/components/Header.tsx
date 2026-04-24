import type { Page } from '../App';

const pageTitles: Record<Page, string> = {
  dashboard: 'Dashboard',
  results: 'Results',
  reports: 'Reports',
};

interface HeaderProps {
  page: Page;
}

export default function Header({ page }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">{pageTitles[page]}</h2>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
              JD
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-900">John Doe</p>
              <p className="text-xs text-slate-500">Recruiter</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

