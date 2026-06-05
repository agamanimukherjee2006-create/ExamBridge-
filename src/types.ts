/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeeStructure {
  standard: number;
  women: number;
  scStPwD: number;
}

export type ExamRegion = 'State' | 'National' | 'Global';
export type EducationLevel = '10th' | '12th' | 'Graduate' | 'B.Tech' | 'Post-Grad' | 'PhD' | 'Doctor Degree' | 'BBA' | 'MBA';

export type ExamOpportunityType = 
  | 'Govt Job / Service' 
  | 'Higher Education Entrance' 
  | 'Language & Study Visa' 
  | 'Global Tech/SaaS Cert' 
  | 'International Career';

export interface ExamOpportunity {
  id: string;
  name: string;
  conductingBody: string;
  region: ExamRegion;
  state?: string; // e.g., 'West Bengal'
  examType: ExamOpportunityType;
  minAge: number;
  maxAge: number;
  genderAllowed: 'Male' | 'Female' | 'Transgender' | 'All';
  requiredLevel: EducationLevel;
  requiredStreams: string[]; // e.g., ['All', 'Science', 'English', 'Engineering']
  fee: FeeStructure;
  womenReservationsDetails: string;
  physicalStandardsRequired?: string;
  description: string;
  officialUrl: string;
  keyHighlights: string[];
}

export interface UserProfile {
  age: number;
  gender: 'Male' | 'Female' | 'Transgender';
  educationLevel: EducationLevel;
  stream: string; // e.g., 'English', 'Physics', 'Engineering', 'Medical', 'Arts'
  state: string; // West Bengal, Bihar, Maharashtra, etc.
  country: string; // India, etc.
  isIndianCitizen: boolean;
  resumeText?: string;
}

export interface EligibilityResult {
  exam: ExamOpportunity;
  isEligible: boolean;
  reasonsEligible: string[];
  reasonsIneligible: string[];
  womenSpecificBenefits?: string;
  ageRelaxationDetails?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ResumeMatchReport {
  overallScore: number; // 0-100
  matchedSkills: string[];
  missingQualifications: string[];
  tailoredExamsList: {
    examId: string;
    score: number; // 0-100 match percentage
    suitabilityReason: string;
    gapAnalysis: string;
  }[];
  strategicRoadmap: string[];
}

export interface PrivateCareer {
  id: string;
  title: string;
  requiredSkills: string[];
  preferredDegrees: string[];
  averageSalaryRange: string;
  growthPotential: 'High' | 'Medium' | 'Steady';
  description: string;
  topEmployers: string[];
  interviewTips: string[];
}

export interface HigherStudyRoute {
  id: string;
  courseName: string;
  minimumDegree: EducationLevel;
  requiredStreams: string[];
  entranceExamsNeeded: string[];
  scholarshipOpportunities: string;
  majorInstitutions: string[];
  description: string;
  careerOutcomes: string[];
}
