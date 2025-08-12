export type UserRole = "seeker" | "poster" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

export interface Job {
  id: string;
  postedBy: string; // User ID of the poster
  companyName: string;
  position: string;
  salaryRange: {
    min: number;
    max: number;
  };
  jobType: JobType;
  requirements: string[];
  benefits: string[];
  lastDayToApply: Date;
  isApproved: boolean;
}

export type ApplicationStatus = "Applied" | "In Review" | "Approved" | "Declined";

export interface Application {
  id: string;
  jobId: string; // Job ID
  applicantId: string; // User ID of the seeker
  appliedAt: Date;
  status: ApplicationStatus;
}
