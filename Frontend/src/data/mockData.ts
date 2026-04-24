export interface Candidate {
  id: string;
  rank: number;
  name: string;
  email: string;
  phone: string;
  score: number;
  skillsMatch: number;
  reason: string;
  recommendation: 'Shortlist' | 'Hold' | 'Reject';
  experience?: number;
  skills: string[];
  timeline: { company: string; role: string; duration: string }[];
  scoreBreakdown: {
    experience: number;
    projects: number;
    certifications: number;
    education: number;
  };
  aiReasoning: {
    whyRanked: string;
    strengths: string[];
    gaps: string[];
    risks: string[];
  };
}

export const experiencedCandidates: Candidate[] = [
  {
    id: '1',
    rank: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 123-4567',
    score: 94,
    skillsMatch: 92,
    reason: 'Strong skill match with 6+ years in React/Node.js. Led teams at top tech companies.',
    recommendation: 'Shortlist',
    experience: 6,
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker'],
    timeline: [
      { company: 'TechCorp Inc.', role: 'Senior Full Stack Engineer', duration: '2021 - Present' },
      { company: 'StartupXYZ', role: 'Full Stack Developer', duration: '2018 - 2021' },
      { company: 'Digital Agency', role: 'Frontend Developer', duration: '2017 - 2018' },
    ],
    scoreBreakdown: { experience: 95, projects: 90, certifications: 85, education: 88 },
    aiReasoning: {
      whyRanked: 'Top match due to extensive React ecosystem experience and leadership roles.',
      strengths: ['Team leadership', 'System design', 'React expertise', 'Full-stack delivery'],
      gaps: ['Limited ML/AI experience'],
      risks: ['May expect senior-level compensation'],
    },
  },
  {
    id: '2',
    rank: 2,
    name: 'Marcus Johnson',
    email: 'marcus.j@email.com',
    phone: '+1 (555) 234-5678',
    score: 88,
    skillsMatch: 85,
    reason: 'Excellent backend skills with Python/Django. Strong database optimization background.',
    recommendation: 'Shortlist',
    experience: 5,
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS'],
    timeline: [
      { company: 'DataSystems', role: 'Backend Engineer', duration: '2020 - Present' },
      { company: 'FinTech Solutions', role: 'Software Developer', duration: '2018 - 2020' },
      { company: 'WebDev Agency', role: 'Junior Developer', duration: '2017 - 2018' },
    ],
    scoreBreakdown: { experience: 88, projects: 85, certifications: 80, education: 82 },
    aiReasoning: {
      whyRanked: 'Strong backend foundation with scalable system design experience.',
      strengths: ['Database optimization', 'API design', 'Python ecosystem'],
      gaps: ['Limited frontend framework experience'],
      risks: ['Transition to full-stack may require training'],
    },
  },
  {
    id: '3',
    rank: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@email.com',
    phone: '+1 (555) 345-6789',
    score: 82,
    skillsMatch: 80,
    reason: 'Good full-stack knowledge. Solid understanding of CI/CD and cloud infrastructure.',
    recommendation: 'Hold',
    experience: 4,
    skills: ['JavaScript', 'Vue.js', 'Go', 'Terraform', 'Azure', 'CI/CD'],
    timeline: [
      { company: 'CloudFirst', role: 'DevOps Engineer', duration: '2021 - Present' },
      { company: 'AppWorks', role: 'Full Stack Developer', duration: '2019 - 2021' },
      { company: 'CodeLab', role: 'Intern', duration: '2018 - 2019' },
    ],
    scoreBreakdown: { experience: 80, projects: 82, certifications: 85, education: 84 },
    aiReasoning: {
      whyRanked: 'Balanced profile with strong DevOps and infrastructure skills.',
      strengths: ['DevOps expertise', 'Cloud infrastructure', 'CI/CD pipelines'],
      gaps: ['Less depth in specific frontend frameworks'],
      risks: ['Role fit may depend on DevOps vs dev balance'],
    },
  },
  {
    id: '4',
    rank: 4,
    name: 'David Kim',
    email: 'david.kim@email.com',
    phone: '+1 (555) 456-7890',
    score: 76,
    skillsMatch: 78,
    reason: 'Solid Java/Spring background. Good understanding of enterprise patterns.',
    recommendation: 'Hold',
    experience: 7,
    skills: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'Jenkins', 'Docker'],
    timeline: [
      { company: 'Enterprise Solutions', role: 'Java Developer', duration: '2019 - Present' },
      { company: 'Banking Corp', role: 'Software Engineer', duration: '2016 - 2019' },
    ],
    scoreBreakdown: { experience: 85, projects: 75, certifications: 70, education: 78 },
    aiReasoning: {
      whyRanked: 'Strong enterprise Java experience but less alignment with modern stack.',
      strengths: ['Enterprise architecture', 'Java ecosystem', 'Team collaboration'],
      gaps: ['Limited modern JavaScript framework experience', 'Cloud-native skills'],
      risks: ['Stack mismatch may require significant upskilling'],
    },
  },
  {
    id: '5',
    rank: 5,
    name: 'Lisa Wang',
    email: 'lisa.wang@email.com',
    phone: '+1 (555) 567-8901',
    score: 68,
    skillsMatch: 70,
    reason: 'Junior-level experience. Shows promise but needs more hands-on project work.',
    recommendation: 'Reject',
    experience: 2,
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
    timeline: [
      { company: 'SmallStudio', role: 'Frontend Developer', duration: '2022 - Present' },
      { company: 'Bootcamp Project', role: 'Student Developer', duration: '2021 - 2022' },
    ],
    scoreBreakdown: { experience: 60, projects: 65, certifications: 50, education: 72 },
    aiReasoning: {
      whyRanked: 'Early career with foundational skills but not enough depth for senior role.',
      strengths: ['Quick learner', 'Enthusiasm', 'React basics'],
      gaps: ['Limited production experience', 'No backend skills', 'No cloud exposure'],
      risks: ['May not meet delivery expectations for senior role'],
    },
  },
];

export const fresherCandidates: Candidate[] = [
  {
    id: '1',
    rank: 1,
    name: 'Alex Thompson',
    email: 'alex.t@email.com',
    phone: '+1 (555) 111-2222',
    score: 91,
    skillsMatch: 88,
    reason: 'Outstanding academic projects in full-stack development. Active GitHub with 15+ repos.',
    recommendation: 'Shortlist',
    skills: ['React', 'Node.js', 'Python', 'MongoDB', 'Git', 'Tailwind CSS'],
    timeline: [
      { company: 'University Capstone', role: 'Team Lead', duration: '2023 - 2024' },
      { company: 'Summer Internship', role: 'Software Intern', duration: 'Summer 2023' },
    ],
    scoreBreakdown: { experience: 70, projects: 95, certifications: 80, education: 92 },
    aiReasoning: {
      whyRanked: 'Exceptional project portfolio demonstrating practical full-stack skills.',
      strengths: ['Strong project portfolio', 'Active open source', 'Good coding practices'],
      gaps: ['No professional experience', 'Limited system design knowledge'],
      risks: ['May need mentorship for production-scale work'],
    },
  },
  {
    id: '2',
    rank: 2,
    name: 'Priya Sharma',
    email: 'priya.s@email.com',
    phone: '+1 (555) 222-3333',
    score: 87,
    skillsMatch: 85,
    reason: 'Top academic performer with relevant coursework in algorithms and data structures.',
    recommendation: 'Shortlist',
    skills: ['Java', 'Python', 'SQL', 'Data Structures', 'Algorithms', 'Spring Boot'],
    timeline: [
      { company: 'Research Lab', role: 'Research Assistant', duration: '2023 - 2024' },
      { company: 'Hackathon', role: 'Participant', duration: '2023' },
    ],
    scoreBreakdown: { experience: 65, projects: 88, certifications: 85, education: 95 },
    aiReasoning: {
      whyRanked: 'Strong academic foundation with research experience.',
      strengths: ['Algorithm expertise', 'Research mindset', 'Strong fundamentals'],
      gaps: ['Limited real-world project experience'],
      risks: ['May need time to adapt to fast-paced development'],
    },
  },
  {
    id: '3',
    rank: 3,
    name: 'James Miller',
    email: 'james.m@email.com',
    phone: '+1 (555) 333-4444',
    score: 79,
    skillsMatch: 78,
    reason: 'Good coding skills with several personal projects. Demonstrates self-learning ability.',
    recommendation: 'Hold',
    skills: ['JavaScript', 'React', 'Express', 'PostgreSQL', 'Git', 'REST APIs'],
    timeline: [
      { company: 'Self-Learning', role: 'Independent Projects', duration: '2023 - 2024' },
      { company: 'Bootcamp', role: 'Student', duration: '2023' },
    ],
    scoreBreakdown: { experience: 55, projects: 82, certifications: 70, education: 75 },
    aiReasoning: {
      whyRanked: 'Self-taught with decent project work but lacks formal structure.',
      strengths: ['Self-motivated', 'Practical skills', 'Problem solving'],
      gaps: ['No formal education in CS', 'Limited depth in some areas'],
      risks: ['Knowledge gaps may surface in complex scenarios'],
    },
  },
  {
    id: '4',
    rank: 4,
    name: 'Aisha Patel',
    email: 'aisha.p@email.com',
    phone: '+1 (555) 444-5555',
    score: 72,
    skillsMatch: 72,
    reason: 'Basic programming knowledge. Shows interest but limited project depth.',
    recommendation: 'Hold',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Git'],
    timeline: [
      { company: 'Online Courses', role: 'Student', duration: '2023 - 2024' },
    ],
    scoreBreakdown: { experience: 50, projects: 68, certifications: 60, education: 78 },
    aiReasoning: {
      whyRanked: 'Fundamental skills present but lacks advanced project work.',
      strengths: ['Eager to learn', 'Basic web development', 'Good attitude'],
      gaps: ['No full-stack projects', 'Limited framework knowledge'],
      risks: ['May need extensive onboarding'],
    },
  },
  {
    id: '5',
    rank: 5,
    name: 'Ryan Cooper',
    email: 'ryan.c@email.com',
    phone: '+1 (555) 555-6666',
    score: 61,
    skillsMatch: 60,
    reason: 'Minimal relevant experience. Skills do not align well with job requirements.',
    recommendation: 'Reject',
    skills: ['HTML', 'CSS', 'Basic JavaScript'],
    timeline: [
      { company: 'High School Project', role: 'Student', duration: '2022' },
    ],
    scoreBreakdown: { experience: 40, projects: 55, certifications: 45, education: 65 },
    aiReasoning: {
      whyRanked: 'Insufficient skill alignment for the role requirements.',
      strengths: ['Basic web knowledge'],
      gaps: ['No backend skills', 'No framework experience', 'No database knowledge'],
      risks: ['Would require significant training investment'],
    },
  },
];

