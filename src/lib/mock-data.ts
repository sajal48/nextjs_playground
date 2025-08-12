import { User, Job, Application } from './types';

// Mock Users
export const mockUsers: User[] = [
  { id: 'user-1', name: 'Alice', email: 'alice@example.com', role: 'seeker' },
  { id: 'user-2', name: 'Bob', email: 'bob@example.com', role: 'poster' },
  { id: 'user-3', name: 'Charlie', email: 'charlie@example.com', role: 'admin' },
  { id: 'user-4', name: 'Diana', email: 'diana@example.com', role: 'seeker' },
];

// Mock Jobs
export const mockJobs: Job[] = [
  {
    id: 'job-1',
    postedBy: 'user-2',
    companyName: 'Tech Corp',
    position: 'Frontend Developer',
    salaryRange: { min: 80000, max: 120000 },
    jobType: 'Full-time',
    requirements: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    benefits: ['Health Insurance', '401k', 'Unlimited PTO'],
    lastDayToApply: new Date('2025-09-30'),
    isApproved: true,
  },
  {
    id: 'job-2',
    postedBy: 'user-2',
    companyName: 'Data Inc.',
    position: 'Data Scientist',
    salaryRange: { min: 100000, max: 150000 },
    jobType: 'Full-time',
    requirements: ['Python', 'TensorFlow', 'PyTorch', 'SQL'],
    benefits: ['Stock Options', 'Remote Work', 'Free Lunch'],
    lastDayToApply: new Date('2025-10-15'),
    isApproved: true,
  },
  {
    id: 'job-3',
    postedBy: 'user-2',
    companyName: 'Design Studio',
    position: 'UI/UX Designer',
    salaryRange: { min: 70000, max: 100000 },
    jobType: 'Contract',
    requirements: ['Figma', 'Sketch', 'Adobe XD'],
    benefits: ['Flexible Hours', 'Creative Environment'],
    lastDayToApply: new Date('2025-08-20'), // This one should be expired
    isApproved: true,
  },
  {
    id: 'job-4',
    postedBy: 'user-2',
    companyName: 'Innovate LLC',
    position: 'Backend Developer',
    salaryRange: { min: 90000, max: 130000 },
    jobType: 'Full-time',
    requirements: ['Node.js', 'Express', 'PostgreSQL'],
    benefits: ['Health Insurance', 'Gym Membership'],
    lastDayToApply: new Date('2025-09-25'),
    isApproved: false, // This one is not approved yet
  },
];

// Mock Applications
export const mockApplications: Application[] = [
  {
    id: 'app-1',
    jobId: 'job-1',
    applicantId: 'user-1',
    appliedAt: new Date('2025-08-10'),
    status: 'In Review',
  },
  {
    id: 'app-2',
    jobId: 'job-2',
    applicantId: 'user-1',
    appliedAt: new Date('2025-08-11'),
    status: 'Applied',
  },
  {
    id: 'app-3',
    jobId: 'job-1',
    applicantId: 'user-4',
    appliedAt: new Date('2025-08-12'),
    status: 'Applied',
  },
];
