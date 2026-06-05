/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HigherStudyRoute } from '../types';

export const HIGHER_STUDY_DATA: HigherStudyRoute[] = [
  {
    id: 'gre-masters',
    courseName: 'Global MS / MA (Science, Humanities & Interdisciplinary Programs)',
    minimumDegree: 'Graduate',
    requiredStreams: ['All', 'Science', 'English', 'Engineering', 'Arts'],
    entranceExamsNeeded: ['GRE', 'TOEFL / IELTS'],
    scholarshipOpportunities: 'Fulbright-Nehru Fellowship, Erasmus Mundus Catalyst Grants, Inlaks Shivdasani Fellowship, and University Teaching Assistantships (100% tuition waiver + stipend).',
    majorInstitutions: [
      'Harvard University (USA)',
      'University of Oxford (UK)',
      'National University of Singapore (Singapore)',
      'ETH Zurich (Switzerland)',
      'University of British Columbia (Canada)'
    ],
    description: 'A global curriculum focusing on research, advanced specialization, or interdisciplinary fields, paving the way for international R&D or corporate consulting careers.',
    careerOutcomes: [
      'Research Scientist / Academic Lead',
      'Global Policy Analyst',
      'Corporate Strategist',
      'Consultant in International Agencies (UN, World Bank)'
    ]
  },
  {
    id: 'cuet-pg',
    courseName: 'Post Graduate Masters (MA / MSc in Central Universities)',
    minimumDegree: 'Graduate',
    requiredStreams: ['All', 'English', 'Arts', 'Physics', 'Science'],
    entranceExamsNeeded: ['CUET PG (Common University Entrance Test)'],
    scholarshipOpportunities: 'UGC Non-NET Fellowships for PG students, Single Girl Child Scholarships, state merit-cum-means subsidies, and central sector scholarship options.',
    majorInstitutions: [
      'Jawaharlal Nehru University - JNU (New Delhi)',
      'University of Delhi - DU (New Delhi)',
      'Banaras Hindu University - BHU (Varanasi)',
      'Jadavpur University (Kolkata)',
      'University of Hyderabad (Hyderabad)'
    ],
    description: 'An academic postgraduate pathway focusing heavily on deep subject-matter proficiency, pedagogical research, critical reviews, preparing students for UGC-NET (Lectureship/Ph.D.) guidelines.',
    careerOutcomes: [
      'Associate Professor / Senior Secondary Teacher',
      'Content Designer / Curriculum Specialist',
      'Archivist & Cultural Resource Custodian',
      'PhD Scholar'
    ]
  },
  {
    id: 'cat-mba',
    courseName: 'Master of Business Administration (MBA / PGDM)',
    minimumDegree: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'English'],
    entranceExamsNeeded: ['CAT (Common Admission Test)', 'XAT', 'GMAT'],
    scholarshipOpportunities: 'IIM Merit-cum-Means waivers, Aditya Birla Scholarships, OP Jindal Engineering & Management assistance, and special state banking education subventions.',
    majorInstitutions: [
      'Indian Institute of Management (IIM) Ahmedabad, Bangalore, Calcutta',
      'FMS - Faculty of Management Studies (Delhi)',
      'XLRI - Xavier School of Management (Jamshedpur)',
      'SPJIMR (Mumbai)',
      'IIT Department of Management Studies (DMS)'
    ],
    description: 'An elite flagship program teaching core organizational management, financial vectors, digital strategy, human resource dynamics, and leadership fundamentals.',
    careerOutcomes: [
      'Management Consultant',
      'Investment Banker / Portfolio Manager',
      'Chief Marketing & Communications Officer',
      'Human Resources Director',
      'Product & Brand Manager'
    ]
  },
  {
    id: 'iit-jam',
    courseName: 'M.Sc (Joint Entrance Test for Masters in IITs & IISc)',
    minimumDegree: 'Graduate',
    requiredStreams: ['Science', 'Physics', 'Engineering'],
    entranceExamsNeeded: ['IIT JAM Exam'],
    scholarshipOpportunities: 'MHRD/Government assistantship of ₹12,400 per month for selected candidates, Inspire scholarship transition benefits, and premier institutional doctoral fellowships.',
    majorInstitutions: [
      'Indian Institute of Science (IISc Bangalore)',
      'IIT Bombay',
      'IIT Kanpur',
      'IIT Kharagpur',
      'IIT Madras',
      'NITs & CFTIs throughout India'
    ],
    description: 'A dedicated premium science pathway in India\'s peak technical campuses, allowing candidates to specialize in Physics, Chemistry, Applied Mathematics, or Biotechnology with world-class facilities.',
    careerOutcomes: [
      'R&D Physicist / Scientist under CSIR Labs',
      'Data Analytics Consultant',
      'Technician inside ISRO/DRDO',
      'Global doctoral researcher'
    ]
  },
  {
    id: 'ielts-global-visa',
    courseName: 'Postgraduate Diploma or Master Pathways with Study Visa',
    minimumDegree: 'Graduate',
    requiredStreams: ['All', 'English', 'Arts', 'Science'],
    entranceExamsNeeded: ['IELTS Academic / General', 'PTE Academic'],
    scholarshipOpportunities: 'Commonwealth Scholarships (UK), Great Scholarships, Mitacs fellowships (Canada), DAAD funding programs (Germany), and regional global language bursaries.',
    majorInstitutions: [
      'University of Toronto (Canada)',
      'University of Melbourne (Australia)',
      'Trinity College Dublin (Ireland)',
      'Ludwig Maximilian University of Munich (Germany)',
      'Auckland University (New Zealand)'
    ],
    description: 'A global study route allowing graduates to relocate, complete localized practical certificates or specialized arts and journalism degrees with post-graduate visa working permits.',
    careerOutcomes: [
      'Global PR Consultant',
      'Content Designer',
      'TESOL/ESL Global Instructor',
      'Postgraduate Professional'
    ]
  }
];
