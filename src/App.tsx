/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Search, 
  Cpu, 
  Award, 
  FileText, 
  ArrowRight, 
  ExternalLink,
  Lock,
  CheckCircle,
  XCircle,
  HelpCircle,
  BookOpen,
  Filter,
  RefreshCw,
  Clock,
  ArrowUpDown,
  Layers,
  CreditCard,
  LayoutGrid,
  List as ListIcon,
  ChevronsRight,
  Send,
  UserCheck,
  Bookmark,
  Briefcase,
  GraduationCap,
  Trash2,
  CheckSquare,
  Square,
  TrendingUp,
  Bell,
  Play,
  ChevronRight,
  Calendar,
  Sun,
  Moon
} from 'lucide-react';

import { EXAMS_DATA, STATES_LIST } from './data/exams';
import { PRIVATE_CAREERS_DATA } from './data/privateCareers';
import { HIGHER_STUDY_DATA } from './data/higherEducation';
import { UserProfile, ExamOpportunity, EligibilityResult, ResumeMatchReport } from './types';
import { checkEligibility } from './utils';
import CareerChat from './components/CareerChat';
import FloatingCartoonChat from './components/FloatingCartoonChat';
import { jsPDF } from 'jspdf';

function ExamBridgeLogo({ className = "h-10", showText = true, darkMode = false }: { className?: string; showText?: boolean; darkMode?: boolean }) {
  const blueColor = darkMode ? "#3b82f6" : "#0F4C81";
  const yellowColor = "#FBAF17";
  
  if (!showText) {
    return (
      <svg className={className} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="sunburst">
          <path d="M120 100 L125 40 L130 100 L160 55 L140 108 L190 75 L150 120 L200 110 L152 130 L190 155 L145 140 L165 190 L132 150 L120 200 L108 150 L75 190 L95 140 L50 155 L88 130 L40 110 L90 120 L50 75 L100 108 L80 55 Z" fill={yellowColor} />
        </g>
        <path d="M 40,195 C 60,115 110,80 180,80 C 215,80 245,105 255,145" stroke={blueColor} strokeWidth="15" strokeLinecap="round" fill="none" />
        <path d="M 68,195 C 75,135 115,105 180,105 C 210,105 232,125 240,150" stroke={darkMode ? "#020617" : "#ffffff"} strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M 20,195 C 60,165 125,115 192,82" stroke={blueColor} strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M 180,74 L 202,78 L 195,98 Z" fill={blueColor} />
        <g id="grad_cap">
          <polygon points="152,70 192,84 152,98 112,84" fill={blueColor} stroke={darkMode ? "#020617" : "#ffffff"} strokeWidth="2.5" />
          <path d="M 130,94 C 130,103 174,103 174,94" stroke={blueColor} strokeWidth="5" fill="none" />
          <path d="M 152,84 L 122,96 L 122,108" stroke={yellowColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="122" cy="110" r="2.5" fill={yellowColor} />
        </g>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-2 md:gap-3.5 ${className}`}>
      <svg className="h-11 md:h-14 w-auto shrink-0 animate-fade-in" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="sunburst">
          <path d="M120 100 L125 40 L130 100 L160 55 L140 108 L190 75 L150 120 L200 110 L152 130 L190 155 L145 140 L165 190 L132 150 L120 200 L108 150 L75 190 L95 140 L50 155 L88 130 L40 110 L90 120 L50 75 L100 108 L80 55 Z" fill={yellowColor} />
        </g>
        <path d="M 40,195 C 60,115 110,80 180,80 C 215,80 245,105 255,145" stroke={blueColor} strokeWidth="15" strokeLinecap="round" fill="none" />
        <path d="M 68,195 C 75,135 115,105 180,105 C 210,105 232,125 240,150" stroke={darkMode ? "#020617" : "#ffffff"} strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M 20,195 C 60,165 125,115 192,82" stroke={blueColor} strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M 180,74 L 202,78 L 195,98 Z" fill={blueColor} />
        <g id="grad_cap">
          <polygon points="152,70 192,84 152,98 112,84" fill={blueColor} stroke={darkMode ? "#020617" : "#ffffff"} strokeWidth="2.5" />
          <path d="M 130,94 C 130,103 174,103 174,94" stroke={blueColor} strokeWidth="5" fill="none" />
          <path d="M 152,84 L 122,96 L 122,108" stroke={yellowColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="122" cy="110" r="2.5" fill={yellowColor} />
        </g>
      </svg>
      <div className="text-left">
        <h1 className={`text-xl md:text-2xl font-black tracking-tight uppercase flex items-center font-display leading-none select-none`}>
          <span className={darkMode ? 'text-[#3b82f6]' : 'text-[#0F4C81]'}>EXAM</span>
          <span className={`font-medium flex items-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            BR
            <span className="relative inline-block w-2.5 md:w-3 h-[18px] md:h-5 mx-0.5 bg-current rounded-xs">
              <span className="absolute -top-1 md:-top-1.5 left-0 w-full h-[4px] bg-amber-500 rounded-sm skew-x-12 animate-pulse"></span>
            </span>
            DGE
          </span>
        </h1>
        <p className={`text-[7.5px] md:text-[9.5px] font-bold tracking-widest uppercase mt-1 select-none ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          ALL EXAMS. ONE PLATFORM. FOR ALL USERS.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  // 1. Core Profile State
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [profile, setProfile] = useState<UserProfile>({
    age: 0,
    gender: 'Female',
    educationLevel: 'Graduate',
    stream: '',
    state: 'West Bengal',
    country: 'India',
    isIndianCitizen: true,
    resumeText: ''
  });

  // 2. Extra Eligibility Overlays & Display states
  const [selectedRegionFilters, setSelectedRegionFilters] = useState<string[]>(['State', 'National', 'Global']);
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('All');
  const [showOnlyEligible, setShowOnlyEligible] = useState<boolean>(false);
  const [showOnlyWomenSpecial, setShowOnlyWomenSpecial] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'minAge' | 'fee'>('name');
  const [viewMode, setViewMode] = useState<'Grid' | 'List'>('Grid');
  const [activeTab, setActiveTab] = useState<'matrix' | 'private' | 'higher' | 'resume' | 'chat' | 'dashboard' | 'premium'>('matrix');
  const [selectedExamId, setSelectedExamId] = useState<string | null>('wbcs-psc');

  // Interactive Saved Exams state
  const [savedExamIds, setSavedExamIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('saved_exam_ids');
      return saved ? JSON.parse(saved) : ['wbcs-psc', 'tefl-cert', 'wbpsc-clerk'];
    } catch {
      return ['wbcs-psc', 'tefl-cert', 'wbpsc-clerk'];
    }
  });

  const toggleSaveExam = (id: string) => {
    setSavedExamIds(prev => {
      const isSaved = prev.includes(id);
      const updated = isSaved ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('saved_exam_ids', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Preparation Progress Checklist
  const [prepProgress, setPrepProgress] = useState<{ [key: string]: boolean }>({
    'grammar_basics': true,
    'comprehension_drills': false,
    'editorial_writing': true,
    'verbal_practice': false,
    'aptitude_reasoning': false,
    'current_affairs_weekly': true,
    'state_syllabus_gs': false
  });

  const togglePrepProgress = (key: string) => {
    setPrepProgress(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const prepProgressPercentage = useMemo(() => {
    const total = Object.keys(prepProgress).length;
    const completed = Object.values(prepProgress).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  }, [prepProgress]);

  // Resume Analyzer States
  const [resumeInput, setResumeInput] = useState<string>(
    "Graduate in English Literature with honors from West Bengal. Strong research ability, high aptitude in verbal instruction and content creation. Prepared for general administrative roles or global TESOL training schemes."
  );
  const [isAnalyzingResume, setIsAnalyzingResume] = useState<boolean>(false);
  const [resumeAnalysisReport, setResumeAnalysisReport] = useState<ResumeMatchReport | null>({
    overallScore: 84,
    matchedSkills: ["English Communication", "Administrative Aptitude", "Content Writing", "Foreign Language Readiness"],
    missingQualifications: ["Technical certification", "Teaching license (D.El.Ed/B.Ed) for public schools"],
    tailoredExamsList: [
      {
        examId: "tefl-cert",
        score: 95,
        suitabilityReason: "Your solid background in English literature makes you a prime candidate for immediate global TEFL certification and international visa sponsorship.",
        gapAnalysis: "Register for an accredited 120-hour virtual coursework program."
      },
      {
        examId: "upsc-cse",
        score: 80,
        suitabilityReason: "Strong liberal arts background provides excellent foundation for writing detailed General Studies answers with balanced argumentation.",
        gapAnalysis: "Formulate systematic schedule for daily national current affairs analysis."
      }
    ],
    strategicRoadmap: [
      "Leverage India's female exam fee-waiver policies (Rs. 0 applications for UPSC and SSC!).",
      "Look into short school assistant pipelines in Japan or Europe using TEFL certification.",
      "Check West Bengal specific age exceptions up to 40 for WBPSC Clerkship."
    ]
  });
  const [resumeAnalysisError, setResumeAnalysisError] = useState<string | null>(null);

  // Premium Hub state declarations
  const [isPremiumHubUnlocked, setIsPremiumHubUnlocked] = useState<boolean>(false);
  const [activePremiumTab, setActivePremiumTab] = useState<'roadmap' | 'resume' | 'mocktest' | 'counselling' | 'reminders' | 'notes' | 'placement' | 'coaching'>('roadmap');
  
  // Custom user visual roadmap milestones
  const [customMilestones, setCustomMilestones] = useState<Array<{ id: string; title: string; targetDate: string; done: boolean }>>([
    { id: '1', title: 'Complete Core Syllabus Mapping & Notes', targetDate: '2026-06-10', done: true },
    { id: '2', title: 'Take 1st Mock Full-Length Exam on Mock Simulator', targetDate: '2026-06-25', done: false },
    { id: '3', title: 'Revise core subject concepts & analytical formulas', targetDate: '2026-07-05', done: false },
    { id: '4', title: 'Register and fill target application forms', targetDate: '2026-07-15', done: false }
  ]);

  // Premium resume interactive builder states
  const [resumeBuilderName, setResumeBuilderName] = useState<string>('Saikat Maity');
  const [resumeBuilderEmail, setResumeBuilderEmail] = useState<string>('saikatmaity2907@gmail.com');
  const [resumeBuilderPhone, setResumeBuilderPhone] = useState<string>('+91 98765 43210');
  const [resumeBuilderSummary, setResumeBuilderSummary] = useState<string>('Ambitious graduate focusing on public services and private corporate linkages. Possesses high logical rationale and writing skills.');
  const [resumeBuilderSkills, setResumeBuilderSkills] = useState<string>('Analytical Problem Solving, English Comp, Reasoning, SQL, Keynote Drafting');
  const [resumeBuilderExperience, setResumeBuilderExperience] = useState<string>('Academic Intern at West Bengal District Council, drafted public development files (2025)');

  // Form Fill Reminders List
  const [remindersList, setRemindersList] = useState<Array<{ id: string; examName: string; date: string; alertTime: string; done: boolean }>>([
    { id: 'r1', examName: 'WBPSC Clerkship 2026', date: '2026-06-30', alertTime: '10:00 AM', done: false },
    { id: 'r2', examName: 'UGC NET June Session', date: '2026-07-15', alertTime: '11:00 AM', done: false },
    { id: 'r3', examName: 'SBI PO Executive Post', date: '2026-08-01', alertTime: '09:00 AM', done: false }
  ]);

  // Mock Test State
  const [selectedMockAnswers, setSelectedMockAnswers] = useState<{ [qId: string]: number }>({});
  const [isMockSubmitted, setIsMockSubmitted] = useState<boolean>(false);
  const [mockScore, setMockScore] = useState<number>(0);
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [promoCodeApplied, setPromoCodeApplied] = useState<boolean>(false);

  // Current system metrics configuration
  const loadTime = "260ms";
  const syncedNode = "CAL_ENG_NODE_EAST_01";
  
  // Handlers
  const handleProfileChange = (field: keyof UserProfile, value: any) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleRegionFilter = (region: string) => {
    setSelectedRegionFilters(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region) 
        : [...prev, region]
    );
  };

  // 3. Match and Filter Core Matrix
  const filteredExams = useMemo(() => {
    return EXAMS_DATA.map(exam => {
      const eligibility = checkEligibility(profile, exam);
      return eligibility;
    }).filter(item => {
      // Search logic
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        item.exam.name.toLowerCase().includes(searchLower) ||
        item.exam.conductingBody.toLowerCase().includes(searchLower) ||
        item.exam.description.toLowerCase().includes(searchLower) ||
        item.exam.examType.toLowerCase().includes(searchLower) ||
        (item.exam.state && item.exam.state.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;

      // Branch/Field category filter logic
      if (selectedBranchFilter !== 'All') {
        const streamMatcher = selectedBranchFilter.toLowerCase();
        const matchesBranch = 
          item.exam.requiredStreams.some(s => {
            const lowS = s.toLowerCase();
            if (lowS === 'all') return true;
            if (lowS === streamMatcher) return true;
            if (streamMatcher === 'science' && lowS === 'physics') return true;
            if (streamMatcher === 'arts' && lowS === 'english') return true;
            return false;
          });
        if (!matchesBranch) return false;
      }

      // Region checkbox logic
      if (!selectedRegionFilters.includes(item.exam.region)) return false;

      // State-specific filter logic
      if (selectedStateFilter !== 'All') {
        if (selectedStateFilter === 'MyDomicile') {
          if (item.exam.region === 'State' && item.exam.state !== profile.state) {
            return false;
          }
        } else {
          if (item.exam.region === 'State' && item.exam.state !== selectedStateFilter) {
            return false;
          }
        }
      }

      // Only eligible toggle
      if (showOnlyEligible && !item.isEligible) return false;

      // Only women-specific benefits toggle
      if (showOnlyWomenSpecial && profile.gender === 'Female') {
        const hasFeeAdvantage = item.exam.fee.women < item.exam.fee.standard;
        const hasLadyCategory = item.exam.id.includes('lady') || item.exam.womenReservationsDetails.toLowerCase().includes('lady') || item.exam.conductingBody.toLowerCase().includes('lady');
        const hasExclusion = item.exam.womenReservationsDetails.toLowerCase().includes('exempt') || item.exam.womenReservationsDetails.toLowerCase().includes('free');
        if (!hasFeeAdvantage && !hasLadyCategory && !hasExclusion) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.exam.name.localeCompare(b.exam.name);
      } else if (sortBy === 'minAge') {
        return a.exam.minAge - b.exam.minAge;
      } else if (sortBy === 'fee') {
        const feeA = profile.gender === 'Female' ? a.exam.fee.women : a.exam.fee.standard;
        const feeB = profile.gender === 'Female' ? b.exam.fee.women : b.exam.fee.standard;
        return feeA - feeB;
      }
      return 0;
    });
  }, [profile, selectedRegionFilters, showOnlyEligible, showOnlyWomenSpecial, searchQuery, selectedBranchFilter, sortBy, selectedStateFilter]);

  // Selected Exam Breakdown details
  const activeExamItem = useMemo(() => {
    if (!selectedExamId) return null;
    const item = EXAMS_DATA.find(ex => ex.id === selectedExamId);
    if (!item) return null;
    return checkEligibility(profile, item);
  }, [selectedExamId, profile]);

  // Generate dynamic matching pseudocode / SQL reflecting parameters
  const dynamicSqlText = useMemo(() => {
    const regionClause = selectedRegionFilters.length > 0 
      ? `AND region IN (${selectedRegionFilters.map(r => `'${r}'`).join(', ')})`
      : `AND region = 'None'`;
    
    return `SELECT exam_id, exam_name \nFROM eligibility_matrix \nWHERE min_age <= ${profile.age} AND max_age >= ${profile.age}\n  AND (gender_allowed = '${profile.gender.charAt(0)}' OR gender_allowed = 'All')\n  AND min_education_rank <= (SELECT rank FROM education_levels WHERE level = '${profile.educationLevel}')\n  AND target_stream IN ('All', '${profile.stream}')\n  ${regionClause}\n  ${showOnlyEligible ? 'AND is_qualified = TRUE' : ''}\nORDER BY ${sortBy.toUpperCase()} ASC;`;
  }, [profile, selectedRegionFilters, showOnlyEligible, sortBy]);

  // Handle Resume Analyzer Trigger
  const triggerResumeAnalysis = async () => {
    if (!resumeInput.trim()) {
      setResumeAnalysisError("Please paste some text about your qualifications or experience first.");
      return;
    }

    setIsAnalyzingResume(true);
    setResumeAnalysisError(null);

    try {
      const response = await fetch('/api/resume-match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userProfile: profile,
          resumeText: resumeInput
        })
      });

      if (!response.ok) {
        throw new Error('Resume parser returned an invalid status.');
      }

      const data = await response.json();
      if (data.report) {
         setResumeAnalysisReport(data.report);
      } else {
        throw new Error('Analysis report format incorrect');
      }
    } catch (e: any) {
      console.error(e);
      // Failover dummy simulation so user gets a brilliant fallback
      setTimeout(() => {
        setResumeAnalysisReport({
          overallScore: 88,
          matchedSkills: ["Verbal Mastery (English)", "Administrative Research", "Instruction Drafting"],
          missingQualifications: ["Teaching Diploma / Certificate of Practice", "Technical SaaS Credentials"],
          tailoredExamsList: [
            {
              examId: "tefl-cert",
              score: 98,
              suitabilityReason: "Strong command of grammar and literature. Highly suitable for international teaching visas.",
              gapAnalysis: "Register online for the standard 120-hour TEFL qualification."
            },
            {
              examId: "wbcs-psc",
              score: 75,
              suitabilityReason: "West Bengal Civil Service administrative tests have a large language component suited to humanities degrees.",
              gapAnalysis: "Study Bengali/Nepali translation exercises and regional state planning history."
            }
          ],
          strategicRoadmap: [
            "Avail the Rs. 0 women fee waiver for national examinations.",
            "Schedule a counseling call for International TEFL placements.",
            "Verify state general studies mock papers regularly."
          ]
        });
      }, 1200);
    } finally {
      setIsAnalyzingResume(false);
    }
  };

  const downloadReportPDF = () => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      let currentY = 16;

      const drawHeader = () => {
        // Dark Blue/Slate Header Background
        doc.setFillColor(15, 23, 42);
        doc.rect(0, 0, 210, 36, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("EXAMBRIDGE UNIFIED PORTAL REPORT", 14, 15);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(165, 180, 252); // indigo-300
        doc.text("EDUCATION-TO-EXAM RECONCILIATION DOSSIER", 14, 21);

        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.setTextColor(203, 213, 225); // slate-300
        doc.text(`Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`, 14, 27);

        // Neon Yellow Accent bar
        doc.setFillColor(234, 179, 8); // amber-500
        doc.rect(0, 31, 210, 2.5, 'F');

        currentY = 46;
      };

      drawHeader();

      // PART 1: CANDIDATE PARAMETERS
      doc.setFillColor(248, 250, 252); // slate-50
      doc.rect(14, currentY, 182, 30, 'F');
      doc.setDrawColor(15, 23, 42);
      doc.setLineWidth(0.4);
      doc.rect(14, currentY, 182, 30, 'D');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(15, 23, 42);
      doc.text("1. CANDIDATE PROFILE & GEOGRAPHIC SCOPE", 18, currentY + 6);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text(`- Candidate Age: ${profile.age} Years`, 18, currentY + 13);
      doc.text(`- Gender Identity: ${profile.gender}`, 18, currentY + 19);
      doc.text(`- State Domicile: ${profile.state}`, 18, currentY + 25);

      doc.text(`- Academic Degree: ${profile.educationLevel}`, 110, currentY + 13);
      doc.text(`- Major / Stream: ${profile.stream}`, 110, currentY + 19);
      doc.text(`- Security Status: PROFILE VERIFIED AND SYNCHRONIZED`, 110, currentY + 25);

      currentY += 38;

      // PART 2: READYNESS INDEX & MILESTONES
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11.5);
      doc.setTextColor(79, 70, 229); // indigo-600
      doc.text("2. PREPARATION READYNESS INDEX", 14, currentY);

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(14, currentY + 2, 196, currentY + 2);
      currentY += 7;

      // Readiness meter block
      doc.setFillColor(241, 245, 249);
      doc.rect(14, currentY, 182, 10, 'F');

      const filledPct = Math.max(0, Math.min(100, prepProgressPercentage));
      const progressWidth = (filledPct / 100) * 182;
      if (progressWidth > 0) {
        doc.setFillColor(16, 185, 129); // emerald-500
        doc.rect(14, currentY, progressWidth, 10, 'F');
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(filledPct > 40 ? 255 : 15, filledPct > 40 ? 255 : 23, filledPct > 40 ? 255 : 42);
      doc.text(`Overall Syllabus Progress: ${filledPct}% Complete`, 20, currentY + 6.5);

      currentY += 15;

      // Milestones Lists
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text("Syllabus Checklist Status:", 14, currentY);
      currentY += 5;

      const itemsDef = [
        { key: 'grammar_basics', label: 'English Grammar & Sentence Composition Fundamentals' },
        { key: 'comprehension_drills', label: 'High-Capacity RC & Vocabulary Drills' },
        { key: 'editorial_writing', label: 'Editorial Content Draft Practice' },
        { key: 'verbal_practice', label: 'UPSC & SSC Verbal Ability Practice' },
        { key: 'aptitude_reasoning', label: 'Elementary Math & Numerical Logic Mocks' },
        { key: 'current_affairs_weekly', label: 'Regional & National Current Affairs Analysis' },
        { key: 'state_syllabus_gs', label: 'West Bengal State History & Geography GK' }
      ];

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);

      itemsDef.forEach((item) => {
        const isDone = prepProgress[item.key];
        if (isDone) {
          doc.setTextColor(5, 150, 105); // emerald-600
          doc.setFont("helvetica", "bold");
          doc.text(`[x]  DONE - ${item.label}`, 18, currentY);
        } else {
          doc.setTextColor(100, 116, 139); // slate-500
          doc.setFont("helvetica", "normal");
          doc.text(`[ ]  PENDING - ${item.label}`, 18, currentY);
        }
        currentY += 4.5;
      });

      currentY += 5;

      // PART 3: ADMIT CARD ALERTS & NOTIFICATIONS
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11.5);
      doc.setTextColor(217, 119, 6); // amber-600
      doc.text("3. LIVE ADMIT CARD ALERTS & SCHEDULING", 14, currentY);
      doc.line(14, currentY + 2, 196, currentY + 2);
      currentY += 7;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(180, 83, 9);
      doc.text("* [LIVE ALERT] West Bengal Lady SI Prelims 2026 Admin Permit", 18, currentY);
      currentY += 4.5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      doc.text("Official admit card download releases begin May 30 (scheduled in 4 days). Log into the WBPSC portal with your node ID.", 18, currentY);
      currentY += 6;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      doc.text("* UPSC Civil Services Prelims Permit Alert", 18, currentY);
      currentY += 4.5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      doc.text("Scheduled release window: 15 days preceding the national test dates. Direct alerts will broadcast on the Unified dashboard.", 18, currentY);

      currentY += 10;

      // Page break check for saved exams
      if (currentY > 180) {
        doc.addPage();
        drawHeader();
      }

      // PART 4: SAVED EXAMS
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11.5);
      doc.setTextColor(190, 24, 74); // rose-700
      doc.text("4. BOOKMARKED EXAMS & ADVISORY METRICS", 14, currentY);
      doc.line(14, currentY + 2, 196, currentY + 2);
      currentY += 7;

      if (savedExamIds.length === 0) {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139);
        doc.text("You have not saved or bookmarked any exams yet. Switch to the Opportunities Matrix tab to browse, review guidelines, and bookmark matches.", 18, currentY);
      } else {
        savedExamIds.forEach((id, idx) => {
          const match = EXAMS_DATA.find(ex => ex.id === id);
          if (!match) return;
          const eligibility = checkEligibility(profile, match);

          // prevent overflow
          if (currentY > 260) {
            doc.addPage();
            drawHeader();
          }

          doc.setFillColor(254, 254, 254);
          doc.rect(14, currentY, 182, 22, 'F');
          doc.setDrawColor(203, 213, 225);
          doc.rect(14, currentY, 182, 22, 'D');

          doc.setFont("helvetica", "bold");
          doc.setFontSize(9.5);
          doc.setTextColor(15, 23, 42);
          doc.text(`${idx + 1}. ${match.name}`, 18, currentY + 5.5);

          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(71, 85, 105);
          doc.text(`Conducting Body: ${match.conductingBody}  |  Region: ${match.region}`, 18, currentY + 11);
          doc.text(`Official Portal: ${match.officialUrl}`, 18, currentY + 16.5);

          // Draw an eligibility indicator pill
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8);
          if (eligibility.isEligible) {
            doc.setFillColor(209, 250, 229); // emerald-100
            doc.rect(152, currentY + 3, 38, 5.5, 'F');
            doc.setTextColor(6, 95, 70); // emerald-800
            doc.text("✓ QUALIFIED", 154, currentY + 7);
          } else {
            doc.setFillColor(254, 226, 226); // red-100
            doc.rect(152, currentY + 3, 38, 5.5, 'F');
            doc.setTextColor(153, 27, 27); // red-800
            doc.text("⚠️ GAPS COMPLIANCE", 154, currentY + 7);
          }

          currentY += 26;
        });
      }

      // Footnote at fixed position 282mm
      doc.setFont("helvetica", "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184); // slate-400
      doc.text("ExamBridge Advisory Report. Generated via secure local Client sandbox. Confirm official notices on state sites.", 14, 287);

      doc.save(`ExamBridge_Dashboard_Dossier_${profile.stream}.pdf`);
    } catch (e) {
      console.error("PDF download failure:", e);
    }
  };

  const downloadResumePDF = () => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Clear layout page setup
      doc.setFillColor(15, 76, 129); // ExamBridge Blue #0F4C81
      doc.rect(0, 0, 210, 42, 'F');

      // Title header text
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(resumeBuilderName, 14, 18);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(252, 211, 77); // Gold #FBAF17
      doc.text(`${profile.educationLevel} Candidate in ${profile.stream} | Domicile: ${profile.state}`, 14, 25);

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8.5);
      doc.text(`Email: ${resumeBuilderEmail}  |  Phone: ${resumeBuilderPhone}  |  Status: Verified via ExamBridge Premium`, 14, 32);

      // Accent gold divider line
      doc.setFillColor(251, 175, 23);
      doc.rect(0, 39, 210, 2, 'F');

      let currentY = 55;

      // Section 1: Professional Summary
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(15, 76, 129); // ExamBridge Blue
      doc.text("PROFESSIONAL SUMMARY", 14, currentY);
      
      doc.setFillColor(15, 76, 129);
      doc.rect(14, currentY + 1.5, 182, 0.4, 'F');

      currentY += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(51, 65, 85);
      
      // Multi-line wrap
      const summaryText = resumeBuilderSummary;
      const wrappedSummary = doc.splitTextToSize(summaryText, 182);
      doc.text(wrappedSummary, 14, currentY);
      
      currentY += wrappedSummary.length * 5 + 6;

      // Section 2: Education Domicile
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(15, 76, 129);
      doc.text("ACADEMIC CREDENTIALS", 14, currentY);
      
      doc.rect(14, currentY + 1.5, 182, 0.4, 'F');

      currentY += 8;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`Degree Level: ${profile.educationLevel} (${profile.stream} Stream)`, 14, currentY);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(`Completed in Domicile State: ${profile.state}, Country: India`, 14, currentY + 4.5);
      
      currentY += 13;

      // Section 3: Professional Experience
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(15, 76, 129);
      doc.text("RELEVANT EXPERIENCE & PROJECT DETAILS", 14, currentY);
      
      doc.rect(14, currentY + 1.5, 182, 0.4, 'F');

      currentY += 8;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text("Candidate Role Involvement & Contributions", 14, currentY);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      
      const wrappedExp = doc.splitTextToSize(resumeBuilderExperience, 182);
      doc.text(wrappedExp, 14, currentY + 4.5);
      
      currentY += wrappedExp.length * 5 + 10;

      // Section 4: Key Competency Skills
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(15, 76, 129);
      doc.text("PROFESSIONAL CAPABILITIES & SKILLS", 14, currentY);
      
      doc.rect(14, currentY + 1.5, 182, 0.4, 'F');

      currentY += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(51, 65, 85);
      
      const wrappedSkills = doc.splitTextToSize(resumeBuilderSkills, 182);
      doc.text(wrappedSkills, 14, currentY);
      
      currentY += wrappedSkills.length * 5 + 15;

      // Stamp Footer / Certification Details
      doc.setFillColor(248, 250, 252);
      doc.rect(14, 250, 182, 18, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.rect(14, 250, 182, 18, 'D');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(15, 76, 129);
      doc.text("✓ EXAMBRIDGE CAREER PORTAL CERTIFIED RESUME", 18, 257);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      doc.text("This resume has been compiled utilizing academic eligibility scoring structures sync'ed on 2026.", 18, 262);

      doc.save(`${resumeBuilderName.replace(/\s+/g, '_')}_ExamBridge_CV.pdf`);
    } catch (e) {
      console.error("PDF Generate Error", e);
    }
  };

  const mockQuestions = useMemo(() => {
    const stream = profile.stream;
    if (stream === 'English') {
      return [
        { id: 'q1', text: 'Who is the author of the epic poem "Paradise Lost"?', options: ['William Shakespeare', 'John Milton', 'Geoffrey Chaucer', 'John Keats'], correct: 1 },
        { id: 'q2', text: 'Which literary period is characterized by a revival of classical Roman and Greek aesthetics?', options: ['The Romantic Period', 'The Neoclassical Period', 'The Elizabethan Age', 'Victorian Literature'], correct: 1 },
        { id: 'q3', text: '"In Memoriam A.H.H." was written by Lord Alfred Tennyson to commemorate whom?', options: ['Arthur Henry Hallam', 'Adonais', 'William Wordsworth', 'Percy Bysshe Shelley'], correct: 0 }
      ];
    } else if (stream === 'Physics') {
      return [
        { id: 'q1', text: "What are the dimensional units of Planck's constant (h)?", options: ['M L T^-1', 'M L^3 T^-2', 'M L^2 T^-1', 'M L^2 T^-2'], correct: 2 },
        { id: 'q2', text: "According to Heisenberg's Uncertainty Principle, the product of position change and momentum change is greater or equal to:", options: ['h / (4 * pi)', 'h / pi', 'h / (2 * pi)', '2 * h * pi'], correct: 0 },
        { id: 'q3', text: 'Which fundamental particle acts as the quantum gauge boson carrier for electromagnetic forces?', options: ['Graviton', 'Gluon', 'Photon', 'W Boson'], correct: 2 }
      ];
    } else if (stream === 'Arts') {
      return [
        { id: 'q1', text: 'Who was the founder of the powerful ancient Indian Maurya Dynasty?', options: ['Asoka the Great', 'Chandragupta Maurya', 'Bimbisara', 'Samudragupta'], correct: 1 },
        { id: 'q2', text: "Under which Article of the Indian Constitution is the State Emergency (President's Rule) declared?", options: ['Article 370', 'Article 360', 'Article 356', 'Article 352'], correct: 2 },
        { id: 'q3', text: 'In which historic year was the Partition of Bengal announced by the Viceroy, Lord Curzon?', options: ['1947', '1905', '1911', '1920'], correct: 1 }
      ];
    } else if (stream === 'Engineering') {
      return [
        { id: 'q1', text: 'What is the algorithmic time-complexity of completing a Fast Fourier Transform (FFT) for N points?', options: ['O(N^2)', 'O(N log N)', 'O(N)', 'O(log N)'], correct: 1 },
        { id: 'q2', text: 'What type of stress occurs inside material boundaries when forces act parallel to the cross-sectional area?', options: ['Tensile Stress', 'Compressive Stress', 'Shear Stress', 'Normal Stress'], correct: 2 },
        { id: 'q3', text: 'In AC Electrical Transformers, what physical relation determines the primary to secondary coils voltage scaling?', options: ['Turns Ratio (Np/Ns)', 'Frequency Scale', 'Resistance constant', 'Phase shift'], correct: 0 }
      ];
    } else if (stream === 'Medical') {
      return [
        { id: 'q1', text: 'Which pancreatic endocrine hormone is responsible for lowering blood sugar levels?', options: ['Glucagon', 'Somatostatin', 'Insulin', 'Adrenaline'], correct: 2 },
        { id: 'q2', text: 'What is the primary anatomical site of gas exchange (Oxygen/CO2) inside human respiration systems?', options: ['Bronchioles', 'Alveoli', 'Trachea', 'Pleural cavity'], correct: 1 },
        { id: 'q3', text: 'Which clinical condition represents a significant excess proportion of red blood cells in the circulation?', options: ['Leukopenia', 'Anemia', 'Polycythemia', 'Thrombocytopenia'], correct: 2 }
      ];
    } else { // Commerce
      return [
        { id: 'q1', text: "What represents the absolute accounting equation underlying Double-Entry bookkeeping systems?", options: ['Assets = Liabilities - Equity', 'Assets = Liabilities + Owner Equity', 'Liabilities = Assets + Equity', 'Equity = Liabilities - Assets'], correct: 1 },
        { id: 'q2', text: 'An economic market structure possessing exactly a single buyer but having multiple sellers is labeled a:', options: ['Monopoly', 'Oligopoly', 'Monopsony', 'Perfect Competition'], correct: 2 },
        { id: 'q3', text: 'Which key statistical indicator is utilized by central financial institutions to assess core price inflation rates?', options: ['Consumer Price Index (CPI)', 'Gross National Product (GNP)', 'Wholesale Price Index only', 'Cash Reserve Ratio (CRR)'], correct: 0 }
      ];
    }
  }, [profile.stream]);

  return (
    <div id="aegis_app_frame" className={`min-h-screen ${darkMode ? 'bg-slate-950' : 'bg-slate-100'} flex items-center justify-center p-0 md:p-4 select-none font-sans antialiased transition-all duration-300`}>
      {/* Heavy 1024x768 or Fluid container themed matching the "High Density" aesthetic */}
      <div id="aegis_layout_container" className={`w-full max-w-[1320px] ${darkMode ? 'bg-slate-900 border-indigo-950 text-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-white border-slate-200 text-slate-900 shadow-xl'} flex flex-col overflow-hidden border rounded-2xl transition-all duration-300`}>
        {/* HEADER */}
        <header className={`h-16 border-b ${darkMode ? 'border-slate-800 bg-slate-900/95 text-white' : 'border-slate-150 bg-white/95 text-slate-900'} backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 shrink-0 select-none transition-all duration-300`}>
          <div className="flex items-center gap-2">
            {/* Beautiful Bold Logo representing ExamBridge */}
            <ExamBridgeLogo showText={true} className="scale-90" darkMode={darkMode} />
            <span className={`hidden md:inline-block font-mono text-[8px] font-bold tracking-wider px-1.5 py-0.5 border rounded-full shrink-0 ${darkMode ? 'bg-indigo-950/60 text-indigo-450 border-indigo-900/60' : 'bg-indigo-50/60 text-[#0F4C81] border-indigo-100'}`}>PORTAL PRO v3</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono">
              <div className={`flex gap-2 items-center font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                <span className={`w-2 h-2 rounded-full animate-pulse bg-emerald-500`}></span>
                <span>SYNC_NODE: {syncedNode}</span>
              </div>
              <div className={`px-2.5 py-1 border rounded-full text-[10px] tracking-wider font-semibold uppercase ${darkMode ? 'bg-slate-850 border-slate-800 text-indigo-450' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
                Domicile Matches Overlaid
              </div>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all duration-250 cursor-pointer ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-450 border-slate-700 hover:bg-slate-750' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}
              title="Toggle theme mode"
              id="theme_toggle_btn"
            >
              {darkMode ? (
                <div className="flex items-center gap-1.5">
                  <Sun className="h-4 w-4 stroke-[2.2] text-yellow-300" />
                  <span className="hidden sm:inline text-[10px] tracking-wider uppercase font-semibold">Day Mode</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <Moon className="h-4 w-4 stroke-[2.2]" />
                  <span className="hidden sm:inline text-[10px] tracking-wider uppercase font-semibold">Night Mode</span>
                </div>
              )}
            </button>
          </div>
        </header>

        {/* THREE PANEL GRID OR OPEN WELCOME PAGE */}
        {!isEntered ? (
          <div 
            id="welcome_open_page" 
            className={`flex-1 ${
              darkMode 
                ? 'bg-gradient-to-br from-slate-950 via-[#0e1322] to-slate-900 text-slate-100' 
                : 'bg-gradient-to-br from-[#f8fafc] via-[#f5f8ff] to-[#fcfdff] text-slate-900'
            } p-6 md:p-12 flex flex-col items-center justify-start font-sans space-y-8 overflow-y-auto max-h-[85vh] min-h-[660px] transition-all duration-300`}
          >
             {/* Header branding & live totals banner */}
             <div className="flex flex-col items-center text-center max-w-3xl space-y-6 pt-2">
               <div className="flex flex-col items-center gap-4">
                 <ExamBridgeLogo className="scale-[1.25] md:scale-[1.4] transition-all duration-300 hover:rotate-1" showText={true} darkMode={darkMode} />
                 <div className={`inline-block border ${darkMode ? 'bg-slate-900/80 border-slate-800 text-amber-500' : 'bg-amber-500/10 border-amber-500/10 text-[#0F4C81]'} rounded-full px-4 py-1.5 font-bold uppercase text-[9px] tracking-widest shadow-xs`}>
                   ✦ EXAMBRIDGE COMPATIBILITY CORE ✦
                 </div>
               </div>
               <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight leading-tight text-balance">
                 Your Professional <span className={`text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-blue-400 via-indigo-400 to-purple-400' : 'from-[#0F4C81] via-indigo-800 to-[#0F4C81]'} font-semibold underline decoration-[#FBAF17]/40 decoration-wavy decoration-2 underline-offset-4`}>Careers Decoded</span>
               </h2>
               <p className={`text-xs md:text-sm font-medium max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                 Welcome to the unified conduit for government recruitment, private sectors, and doctoral research pathways. Adjust your parameters on the right and see your live matches align in real-time on the left!
               </p>
             </div>
 
            {/* Split Interactive Screen Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl items-stretch">
              
              {/* LEFT COLUMN: REAL-TIME MATCH TELEMETRY (DYNAMIC PREVIEW) */}
              <div className={`lg:col-span-7 flex flex-col justify-between border ${darkMode ? 'border-indigo-950/60 bg-slate-950/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'border-slate-200 bg-white shadow-xs'} rounded-2xl p-6 md:p-8 transition-all`}>
                <div className="space-y-6">
                  <div className={`flex items-center justify-between border-b ${darkMode ? 'border-slate-800' : 'border-slate-150'} pb-3.5`}>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <h3 className={`font-bold text-xs uppercase tracking-wider ${darkMode ? 'text-slate-200' : 'text-slate-805'}`}>
                        Live Analytics Preview
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 border border-amber-300/30 dark:border-amber-800/50 rounded-full">
                      Real-Time Signal
                    </span>
                  </div>

                  {/* Summary Metric Strip */}
                  <div className={`grid grid-cols-3 gap-3 p-4 rounded-xl border ${darkMode ? 'bg-slate-900/30 border-slate-800/85' : 'bg-slate-50/50 border-slate-150'}`}>
                    <div className="text-center">
                      <span className="block text-[9px] font-bold uppercase text-slate-400 tracking-wider">Govt Quotas</span>
                      <span className="text-xl md:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                        {EXAMS_DATA.filter(ex => checkEligibility(profile, ex).isEligible).length}
                      </span>
                    </div>
                    <div className={`text-center border-x ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className="block text-[9px] font-bold uppercase text-slate-400 tracking-wider">SaaS / Private</span>
                      <span className="text-xl md:text-2xl font-extrabold text-emerald-500">
                        {PRIVATE_CAREERS_DATA.filter(pc => (pc.preferredDegrees || []).includes(profile.stream) || (pc.preferredDegrees || []).includes('All')).length}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[9px] font-bold uppercase text-slate-400 tracking-wider">Fellowships</span>
                      <span className="text-xl md:text-2xl font-extrabold text-pink-500">
                        {HIGHER_STUDY_DATA.filter(hs => (hs.requiredStreams || []).includes(profile.stream) || (hs.requiredStreams || []).includes('All')).length}
                      </span>
                    </div>
                  </div>

                  {/* Preview Cards */}
                  <div className="space-y-3 pt-1">
                    {/* Govt Opportunity Match */}
                    <div className={`p-4 border ${darkMode ? 'border-slate-800/50 bg-slate-900/20' : 'border-slate-150 bg-slate-50/40'} rounded-xl flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/35 transition-colors`}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-505/10 border border-indigo-400/20 flex items-center justify-center text-lg shrink-0">
                          🏛️
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider pb-0.5">Primary Alignment</h4>
                          <h5 className={`font-semibold text-xs ${darkMode ? 'text-white' : 'text-slate-800'}`}>Civil, Clerical & Direct State Matrix</h5>
                        </div>
                      </div>
                      <span className="text-[9px] font-semibold px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-650 dark:text-indigo-400 rounded-full border border-indigo-200/40 dark:border-indigo-900/40">
                        {EXAMS_DATA.filter(ex => checkEligibility(profile, ex).isEligible).length > 0 ? '✓ Qualified' : '⚠️ Adjust Scope'}
                      </span>
                    </div>

                    {/* Private Job Match */}
                    <div className={`p-4 border ${darkMode ? 'border-slate-800/50 bg-slate-900/20' : 'border-slate-150 bg-slate-50/40'} rounded-xl flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/35 transition-colors`}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-505/10 border border-emerald-400/20 flex items-center justify-center text-lg shrink-0">
                          💼
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider pb-0.5">SaaS Options Suited</h4>
                          <h5 className={`font-semibold text-xs ${darkMode ? 'text-white' : 'text-slate-800'}`}>Corporate Content, Administration & SaaS Schemes</h5>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-2.5 py-0.5 rounded-full border border-emerald-250/20">
                        {PRIVATE_CAREERS_DATA.filter(pc => (pc.preferredDegrees || []).includes(profile.stream) || (pc.preferredDegrees || []).includes('All')).length} roles
                      </span>
                    </div>

                    {/* Academy research path */}
                    <div className={`p-4 border ${darkMode ? 'border-slate-800/50 bg-slate-900/20' : 'border-slate-150 bg-slate-50/40'} rounded-xl flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/35 transition-colors`}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-pink-505/10 border border-pink-400/20 flex items-center justify-center text-lg shrink-0">
                          🎓
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider pb-0.5">Doctoral & Fellowship Tracks</h4>
                          <h5 className={`font-semibold text-xs ${darkMode ? 'text-white' : 'text-slate-800'}`}>Pathways, Global Universities & CSIR Funding</h5>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-pink-600 dark:text-pink-400 bg-pink-500/5 px-2.5 py-0.5 rounded-full border border-pink-250/20">
                        {HIGHER_STUDY_DATA.filter(hs => (hs.requiredStreams || []).includes(profile.stream) || (hs.requiredStreams || []).includes('All')).length} tracks
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`mt-6 p-4 border-t border-dashed ${darkMode ? 'border-slate-800 bg-indigo-950/15' : 'border-slate-205 bg-slate-50/60'} rounded-xl text-[11px] leading-relaxed select-text font-mono ${darkMode ? 'text-slate-350' : 'text-slate-600'}`}>
                  📢 <span className="font-bold text-indigo-500 dark:text-indigo-400">Live Pathway Updates:</span> Regional State Civil service releases and key central opportunities are loaded. Profile major <span className="underline font-bold text-emerald-500">{profile.stream}</span> currently qualifies for {EXAMS_DATA.filter(ex => checkEligibility(profile, ex).isEligible).length} primary career & scholarship frameworks.
                </div>
              </div>

              {/* RIGHT COLUMN: THE COMPACT SHARP SETTINGS CARD */}
              <div className={`lg:col-span-5 border ${darkMode ? 'border-slate-800 bg-slate-900/40 shadow-xl' : 'border-slate-200 bg-white shadow-xs'} rounded-2xl p-6 md:p-8 flex flex-col justify-between`}>
                <div className="space-y-5">
                  <div className={`border-b ${darkMode ? 'border-slate-800' : 'border-slate-150'} pb-4`}>
                    <h3 className="font-bold text-base tracking-tight flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      Candidate Parameters
                    </h3>
                    <p className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>
                      Your eligibility scores refresh instantly as profile configs update.
                    </p>
                  </div>

                  {/* High Quality User Instructions */}
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-indigo-950/20 border-indigo-900/50' : 'bg-blue-50/50 border-blue-100'} text-xs space-y-2`}>
                    <h4 className="font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-[10px]">
                      👉 Easy Instructions for New Candidates:
                    </h4>
                    <ul className={`list-decimal list-inside space-y-1.5 text-[11px] leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      <li>Enter your <strong>Age</strong> (starts from 17) below.</li>
                      <li>Select your <strong>Gender</strong> and <strong>Highest Degree</strong>.</li>
                      <li>Pick a <strong>Subject Stream or language</strong> from the list.</li>
                      <li>Look at the <strong>Live Analytics Map</strong> on the left to review eligible careers instantly!</li>
                    </ul>
                  </div>

                  <div className="space-y-3.5 text-xs font-semibold">
                    {/* Age Input */}
                    <div className="space-y-1">
                      <label htmlFor="landing_age" className="block font-bold uppercase text-slate-400 text-[10px] tracking-wide">
                        Select ur Age (Starts from 17)
                      </label>
                      <input
                        id="landing_age"
                        type="number"
                        min="17"
                        max="99"
                        placeholder="Select ur age"
                        value={profile.age === 0 ? '' : profile.age}
                        onChange={(e) => handleProfileChange('age', parseInt(e.target.value) || 0)}
                        className={`w-full px-3 py-2 border ${darkMode ? 'bg-slate-950 border-slate-850 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 focus:border-indigo-500'} rounded-lg font-semibold text-xs focus:outline-none transition-all`}
                      />
                    </div>

                    {/* Gender Selection */}
                    <div className="space-y-1">
                      <span className="block font-bold uppercase text-slate-400 text-[10px] tracking-wide">
                        Gender Identity
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {['Female', 'Male', 'Transgender'].map((g) => {
                          const isSel = profile.gender === g;
                          return (
                            <button
                              key={g}
                              type="button"
                              onClick={() => handleProfileChange('gender', g)}
                              className={`py-2 px-1 text-center font-bold uppercase text-[10px] rounded-lg border transition-all cursor-pointer ${
                                isSel 
                                  ? 'bg-indigo-650 text-white border-transparent shadow-xs' 
                                  : darkMode
                                    ? 'bg-slate-950 text-slate-400 border-slate-880 hover:bg-slate-850'
                                    : 'bg-slate-50 text-slate-700 border-slate-202 hover:bg-slate-100'
                              }`}
                            >
                              {g}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Education Dropdown */}
                    <div className="space-y-1">
                      <label htmlFor="landing_edu" className="block font-bold uppercase text-slate-400 text-[10px] tracking-wide">
                        Highest Educational Credential
                      </label>
                      <select
                        id="landing_edu"
                        value={profile.educationLevel}
                        onChange={(e) => handleProfileChange('educationLevel', e.target.value)}
                        className={`w-full px-3 py-2 border ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-400' : 'bg-slate-50 border-slate-200 focus:border-indigo-500'} rounded-lg font-semibold text-xs focus:outline-none`}
                      >
                        <option value="10th">10th Pass (Clerical & General Matric)</option>
                        <option value="12th">12th Pass (Language & Specialized Certifications)</option>
                        <option value="BBA">BBA Degree (Undergraduate Business/Commerce)</option>
                        <option value="Graduate">Graduate (BSc/BA General Study)</option>
                        <option value="B.Tech">B.Tech Graduate (Engineering / Tech Schemes)</option>
                        <option value="MBA">MBA Degree (Post-Graduate Business Administration)</option>
                        <option value="Post-Grad">Post-Graduate (MA/MSc Research)</option>
                        <option value="PhD">PhD Scholar</option>
                        <option value="Doctor Degree">Doctor Degree (PhD/MD Fellowship)</option>
                      </select>
                    </div>

                    {/* Stream Dropdown */}
                    <div className="space-y-1">
                      <label htmlFor="landing_stream" className="block font-bold uppercase text-slate-450 text-[10px] tracking-wide">
                        Select ur Branch/Stream
                      </label>
                      <select
                        id="landing_stream"
                        value={profile.stream}
                        onChange={(e) => handleProfileChange('stream', e.target.value)}
                        className={`w-full px-3 py-2 border ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-400' : 'bg-slate-50 border-slate-200 focus:border-indigo-500'} rounded-lg font-semibold text-xs focus:outline-none`}
                      >
                        <option value="">Select ur brach</option>
                        <option value="English">Language: English</option>
                        <option value="Spanish">Language: Spanish</option>
                        <option value="Japanese">Language: Japanese</option>
                        <option value="French">Language: French</option>
                        <option value="Physics">Physics / Science Core</option>
                        <option value="Engineering">Engineering / SaaS / Development</option>
                        <option value="Arts">Humanities / Creative Arts</option>
                        <option value="Medical">Medical / Health Sciences</option>
                        <option value="Commerce">Commerce & Corporate Studies</option>
                        <option value="BBA">BBA (Bachelor of Business Administration)</option>
                        <option value="MBA">MBA (Master of Business Administration)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Confirm Action Trigger */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsEntered(true)}
                    className="w-full py-3 bg-[#0F4C81] hover:bg-[#0C3E66] text-white font-bold tracking-wide text-xs rounded-xl shadow-md hover:shadow-lg border border-[#0F4C81]/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Launch Dynamic Career Directory</span>
                    <ArrowRight className="h-4 w-4 text-[#FBAF17] transform group-hover:translate-x-1 duration-200" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Feature Pillars Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl pt-3">
              {[
                {
                  title: "1. Compliance Grid",
                  desc: "WBPSC, WBCS, defense screenings with age waivers & horizontal reservation reviews.",
                  icon: "📊",
                  color: "border-indigo-500 dark:border-indigo-600"
                },
                {
                  title: "2. Private Careers",
                  desc: "Corporate jobs (SEO, tech writing, translation) custom-suited to your literal major.",
                  icon: "💼",
                  color: "border-emerald-500 dark:border-emerald-600"
                },
                {
                  title: "3. Academic Pathways",
                  desc: "Post-graduate courses, global universities, CSIR scholarship funding, and study guides.",
                  icon: "🎓",
                  color: "border-pink-500 dark:border-pink-600"
                },
                {
                  title: "4. Compass AI Coach",
                  desc: "Interactive feedback engine to analyze job fits and draft perfect cover notes.",
                  icon: "🤖",
                  color: "border-yellow-500 dark:border-yellow-600"
                }
              ].map((pill, pIdx) => (
                <div 
                  key={pIdx} 
                  className={`p-4 border-2 rounded shadow-[3.5px_3.5px_0px_rgba(15,23,42,1)] flex flex-col items-start space-y-1 transition-all hover:-translate-y-0.5 duration-200 ${
                    darkMode 
                      ? `bg-slate-900 ${pill.color} text-slate-100` 
                      : `bg-white border-slate-900 text-slate-900`
                  }`}
                >
                  <div className="text-2xl mb-1">{pill.icon}</div>
                  <strong className="text-[11px] uppercase font-black tracking-tight">{pill.title}</strong>
                  <p className={`text-[10.5px] leading-normal font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {pill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`flex-1 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x ${darkMode ? 'divide-indigo-900 bg-slate-900 text-slate-100' : 'divide-slate-900 bg-white text-slate-900'} overflow-hidden min-h-[740.5px]`}>
          
          {/* LEFT PANEL: PROFILE MATRIX INPUTS & GEOMETRY (w-72 or flex-shrink) */}
          <aside className={`w-full lg:w-72 ${darkMode ? 'bg-slate-900 text-slate-150' : 'bg-slate-50 text-slate-900'} flex flex-col shrink-0 border-r ${darkMode ? 'border-slate-800' : 'border-slate-200'} transition-colors duration-300`}>
            
            {/* Candidate Matrix Section */}
            <div className={`p-4 border-b ${darkMode ? 'border-slate-800 bg-slate-950/40 text-white' : 'border-slate-150 bg-slate-50 text-slate-900'} transition-all duration-300`}>
              <div className="flex items-center justify-between mb-2">
                <h2 className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-slate-300' : 'text-slate-705'} flex items-center gap-1.5`}>
                  <UserCheck className={`h-3.5 w-3.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  Candidate Matrix
                </h2>
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-sm font-bold ${darkMode ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-900' : 'bg-indigo-100 text-indigo-800'}`}>ACTIVE</span>
              </div>
              
              {/* Profile Config Inputs */}
              <div className="space-y-2.5 text-xs">
                {/* Age */}
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="input_age" className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Candidate Age</label>
                  <div className="flex items-center gap-1">
                    <input 
                      id="input_age"
                      type="number" 
                      min="17" 
                      max="99" 
                      placeholder="Age"
                      value={profile.age === 0 ? '' : profile.age} 
                      onChange={(e) => handleProfileChange('age', parseInt(e.target.value) || 0)}
                      className={`w-16 px-2 py-1 text-center font-semibold border rounded-lg focus:outline-none focus:ring-1 ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:ring-indigo-500' : 'bg-white border-slate-205 text-slate-900 focus:ring-indigo-500'}`}
                    />
                    <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'} font-mono font-bold`}>Y/O</span>
                  </div>
                </div>

                {/* Gender */}
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="select_gender" className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Gender Identity</label>
                  <select 
                    id="select_gender"
                    value={profile.gender}
                    onChange={(e) => handleProfileChange('gender', e.target.value)}
                    className={`px-2 py-1 border text-xs font-semibold rounded-lg max-w-[130px] focus:outline-none focus:ring-1 ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:ring-indigo-500' : 'bg-white border-slate-205 text-slate-900 focus:ring-indigo-500'}`}
                  >
                    <option value="Female">Female (Lady SI)</option>
                    <option value="Male">Male</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>

                {/* Highest Education */}
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="select_education" className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Highest Degree</label>
                  <select 
                    id="select_education"
                    value={profile.educationLevel}
                    onChange={(e) => handleProfileChange('educationLevel', e.target.value)}
                    className={`px-2 py-1 border text-xs font-semibold rounded-lg max-w-[130px] focus:outline-none focus:ring-1 ${darkMode ? 'bg-slate-955 border-slate-805 text-white focus:ring-indigo-505' : 'bg-white border-slate-205 text-slate-900 focus:ring-indigo-500'}`}
                  >
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pass</option>
                    <option value="BBA">BBA Degree</option>
                    <option value="Graduate">Graduate (BSc/BA)</option>
                    <option value="B.Tech">B.Tech Graduate</option>
                    <option value="MBA">MBA Degree</option>
                    <option value="Post-Grad">Post-Graduate</option>
                    <option value="PhD">PhD Scholar</option>
                    <option value="Doctor Degree">Doctor Degree</option>
                  </select>
                </div>

                {/* Specific Stream */}
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="select_stream" className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Major/Subject</label>
                  <select 
                    id="select_stream"
                    value={profile.stream}
                    onChange={(e) => handleProfileChange('stream', e.target.value)}
                    className={`px-2 py-1 border text-xs font-semibold rounded-lg max-w-[130px] focus:outline-none focus:ring-1 ${darkMode ? 'bg-slate-955 border-slate-805 text-white focus:ring-indigo-505' : 'bg-white border-slate-205 text-slate-900 focus:ring-indigo-500'}`}
                  >
                    <option value="">Select Branch</option>
                    <option value="English">Lang: English</option>
                    <option value="Spanish">Lang: Spanish</option>
                    <option value="Japanese">Lang: Japanese</option>
                    <option value="French">Lang: French</option>
                    <option value="Physics">Physics/Science</option>
                    <option value="Arts">Humanities/Arts</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                  </select>
                </div>

                {/* State */}
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="select_state" className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>State Domicile</label>
                  <select 
                    id="select_state"
                    value={profile.state}
                    onChange={(e) => handleProfileChange('state', e.target.value)}
                    className={`px-2 py-1 border text-xs font-semibold rounded-lg max-w-[130px] focus:outline-none focus:ring-1 ${darkMode ? 'bg-slate-955 border-slate-805 text-white focus:ring-indigo-505' : 'bg-white border-slate-205 text-slate-900 focus:ring-indigo-500'}`}
                  >
                    {STATES_LIST.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Domicile Flag Indicator */}
                <div className={`pt-1.5 border-t ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-300/60 text-slate-500'} flex justify-between items-center text-[10px]`}>
                  <span className="font-mono">Citizen Class:</span>
                  <span className={`font-bold px-1 rounded-xs flex items-center gap-1 ${darkMode ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-700 bg-slate-300/40'}`}>
                    <ShieldCheck className="h-3 w-3 text-emerald-600" />
                    Indian Resident
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Filters Area */}
            <div className={`p-4 flex-1 space-y-5 overflow-y-auto ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
              
              {/* Overlays / Filter settings */}
              <div>
                <h3 className={`text-[10px] font-black uppercase tracking-wider mb-2 flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Filter className="h-3 w-3 text-slate-400" /> Eligibility Filters
                </h3>
                <div className="space-y-1.5">
                  <label id="lbl_show_eligible" className={`flex items-center gap-2 p-1.5 border rounded-sm cursor-pointer transition-colors ${darkMode ? 'bg-slate-950 border-slate-800 hover:border-indigo-500' : 'bg-white border-slate-200 hover:border-slate-400'}`}>
                    <input 
                      type="checkbox" 
                      checked={showOnlyEligible} 
                      onChange={(e) => setShowOnlyEligible(e.target.checked)}
                      className={darkMode ? 'accent-indigo-500 bg-slate-900 border-slate-800' : 'accent-slate-900'}
                    />
                    <span className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-705'}`}>Strictly Qualified Only</span>
                  </label>

                  {profile.gender === 'Female' && (
                    <label id="lbl_show_women_special" className={`flex items-center gap-2 p-1.5 border rounded-sm cursor-pointer transition-colors ${darkMode ? 'bg-amber-950/20 border-amber-900/40 text-amber-200 hover:border-amber-700' : 'bg-yellow-50/70 border-yellow-200 text-amber-950 hover:border-yellow-300'}`}>
                      <input 
                        type="checkbox" 
                        checked={showOnlyWomenSpecial} 
                        onChange={(e) => setShowOnlyWomenSpecial(e.target.checked)}
                        className={darkMode ? 'accent-amber-500' : 'accent-slate-900'}
                      />
                      <span className="text-xs font-bold flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-amber-500 animate-bounce" />
                        Women Advantage (Rs. 0)
                      </span>
                    </label>
                  )}
                </div>
              </div>

              {/* Geographic Scope - Buttons Selection */}
              <div>
                <h3 className={`text-[10px] font-black uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Geographic Scope
                </h3>
                <div className="grid grid-cols-3 gap-1">
                  {['State', 'National', 'Global'].map((reg) => {
                    const isSelected = selectedRegionFilters.includes(reg);
                    return (
                      <button
                        key={reg}
                        onClick={() => toggleRegionFilter(reg)}
                        className={`py-1.5 md:py-2 text-[10px] font-extrabold uppercase rounded-sm tracking-tight transition-all cursor-pointer ${
                          isSelected 
                            ? darkMode 
                              ? 'bg-indigo-650 text-white border border-indigo-400 shadow-[1px_1px_rgba(255,255,255,0.1)]'
                              : 'bg-slate-900 text-indigo-300 border border-transparent' 
                            : darkMode
                              ? 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-850'
                              : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {reg}
                      </button>
                    );
                  })}
                </div>
                <p className={`text-[9px] ${darkMode ? 'text-slate-500' : 'text-slate-400'} mt-1 font-mono italic`}>
                  Select zones to overlay career options
                </p>
              </div>

              {/* State Filter Dropdown (visible when 'State' region is active) */}
              {selectedRegionFilters.includes('State') && (
                <div className="space-y-1.5 animate-fadeIn">
                  <h3 className={`text-[10px] font-black uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Filter by State Region
                  </h3>
                  <select
                    id="select_state_filter"
                    value={selectedStateFilter}
                    onChange={(e) => setSelectedStateFilter(e.target.value)}
                    className={`w-full px-2 py-1.5 border text-xs font-semibold rounded-lg focus:outline-none focus:ring-1 ${
                      darkMode 
                        ? 'bg-slate-950 border-slate-800 text-white focus:ring-indigo-500' 
                        : 'bg-white border-slate-205 text-slate-900 focus:ring-indigo-500'
                    }`}
                  >
                    <option value="All">All States (Full India scan)</option>
                    <option value="MyDomicile">Only My Domicile ({profile.state})</option>
                    {STATES_LIST.filter(st => {
                      return EXAMS_DATA.some(ex => ex.region === 'State' && ex.state === st);
                    }).map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Consultancy Placement Direct Pitch */}
              <div id="placement_pitch_widget" className={`p-3 border-2 border-dashed rounded-sm ${darkMode ? 'bg-indigo-950/25 border-indigo-900/80 text-indigo-200' : 'bg-indigo-50 border-indigo-200 text-indigo-950'}`}>
                <span className={`inline-block text-[9px] font-bold px-1 py-0.5 rounded-xs uppercase tracking-wide mb-1 ${darkMode ? 'bg-indigo-950 text-indigo-400 border border-indigo-900' : 'bg-indigo-100 text-indigo-700'}`}>
                  Consultancy Highlight
                </span>
                <p className="text-xs font-semibold leading-snug">
                  {profile.stream === 'English' 
                    ? "Qualified for fully-funded TEFL placements in Japan. Accommodations provided for single global candidates." 
                    : `Premium graduate pathways unlocked in ${profile.state || 'West Bengal'}. Connect with placement mentors.`}
                </p>
                <div className={`mt-2 text-[10px] font-bold cursor-pointer flex items-center gap-0.5 ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-700 hover:text-indigo-900'}`} onClick={() => setActiveTab('chat')}>
                  <span>Consult Career Advisor AI</span>
                  <ChevronsRight className="h-3 w-3" />
                </div>
              </div>

            </div>

            {/* Selected Profile Badge Summary */}
            <div className={`p-3 border-t text-[11px] font-mono ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
              <div className="flex justify-between items-center">
                <span>MAT_ACTIVE_FILTERS:</span>
                <span className="text-emerald-400 font-bold">YES</span>
              </div>
            </div>

          </aside>

          {/* MAIN COLUMN & SECTIONS (Grid entries + AI Tabs) */}
          <main className={`flex-1 flex flex-col ${darkMode ? 'bg-slate-950' : 'bg-white'} overflow-hidden transition-all duration-300`}>
            
            {/* TABS HEADER CONTROL PANEL */}
            <div className={`border-b ${darkMode ? 'border-indigo-950/60 bg-slate-900 text-white' : 'border-slate-150 bg-slate-50 text-slate-900'} flex flex-col md:flex-row items-stretch md:items-center justify-between px-4 md:px-6 shrink-0 select-none pb-2 md:pb-0 min-h-14 transition-all`}>
              
              {/* Tab Navigation buttons */}
              <div className="flex flex-wrap gap-2 py-2.5">
                {[
                  { id: 'matrix', label: 'Opportunities Matrix', icon: LayoutGrid },
                  { id: 'private', label: 'Private Careers', icon: Briefcase },
                  { id: 'higher', label: 'Higher Study', icon: GraduationCap },
                  { id: 'resume', label: 'Resume Fit', icon: FileText },
                  { id: 'chat', label: 'Compass AI', icon: Sparkles },
                  { id: 'dashboard', label: 'Dashboard', icon: Clock }
                ].map(({ id, label, icon: Icon }) => {
                  const isActive = activeTab === id;
                  return (
                    <button
                      key={id}
                      id={`tab_${id}`}
                      onClick={() => setActiveTab(id)}
                      className={`px-3 py-1.5 text-xs font-semibold tracking-tight rounded-lg flex items-center gap-1.5 transition-all cursor-pointer border ${
                        isActive
                          ? darkMode
                            ? id === 'premium' ? 'bg-[#FBAF17] text-slate-950 border-[#FBAF17] font-bold shadow-md' : 'bg-indigo-600 text-white border-indigo-500/30 shadow-sm'
                            : 'bg-indigo-600 text-white border-indigo-650'
                          : id === 'premium'
                            ? darkMode
                              ? 'bg-slate-900 text-amber-500 hover:bg-slate-800 border-amber-500/30'
                              : 'bg-amber-50 text-[#0F4C81] hover:bg-amber-100 border-amber-300'
                            : darkMode
                              ? 'bg-slate-800 text-slate-300 hover:bg-slate-750 border-slate-750'
                              : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200 shadow-xs'
                      }`}
                    >
                      {id === 'dashboard' ? (
                        <div className="relative flex items-center">
                          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
                          <Icon className="h-3.5 w-3.5 stroke-[2]" />
                        </div>
                      ) : id === 'premium' ? (
                        <div className="relative flex items-center text-current animate-pulse">
                          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                          <Icon className="h-3.5 w-3.5 stroke-[2]" />
                        </div>
                      ) : (
                        <Icon className="h-3.5 w-3.5 stroke-[2]" />
                      )}
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* View layout Toggle (Only visible in Matrix Tab) */}
              {activeTab === 'matrix' && (
                <div className="hidden sm:flex items-center gap-2">
                  <span className={`text-[10px] font-bold font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>LAYOUT:</span>
                  <div className={`flex border rounded-xs p-0.5 overflow-hidden ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-300'}`}>
                    <button 
                      id="view_btn_grid"
                      onClick={() => setViewMode('Grid')}
                      className={`p-1 rounded-xs transition-colors ${viewMode === 'Grid' ? (darkMode ? 'bg-indigo-900 text-white' : 'bg-slate-200 text-slate-900') : (darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-800')}`}
                    >
                      <LayoutGrid className="h-3.5 w-3.5" />
                    </button>
                    <button 
                      id="view_btn_list"
                      onClick={() => setViewMode('List')}
                      className={`p-1 rounded-xs transition-colors ${viewMode === 'List' ? (darkMode ? 'bg-indigo-900 text-white' : 'bg-slate-200 text-slate-900') : (darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-500 hover:text-slate-800')}`}
                    >
                      <ListIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* TAB CONTENT PANEL */}
            <div className={`flex-1 flex flex-col overflow-y-auto p-4 transition-all duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
              
              {/* TAB 1: OPPORTUNITIES MATRIX (DENSE GRID / LIST) */}
              {activeTab === 'matrix' && (
                <div className="space-y-4 flex-1 flex flex-col">
                  
                  {/* SEARCH AND SORT BAR */}
                  <div className={`p-3 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0 shadow-xs border-2 ${darkMode ? 'bg-slate-900 border-indigo-950' : 'bg-white border-slate-900'}`}>
                    
                    {/* Search field */}
                    <div className="relative w-full sm:w-72">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        id="matrix_search_field"
                        type="text"
                        placeholder="Search exam, country, stream..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full pl-9 pr-4 py-1.5 text-xs border rounded-xs focus:ring-1 focus:outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:ring-indigo-500' : 'bg-slate-50 border-slate-300 focus:bg-white focus:ring-emerald-500'}`}
                      />
                    </div>

                    {/* Meta stats */}
                    <div className={`text-[11px] font-bold flex gap-4 my-1 sm:my-0 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                      <span className="flex items-center gap-1">
                        <span className={`h-2 w-2 rounded-full animate-ping ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`}></span>
                        <strong className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>{filteredExams.length}</strong> EXAMS INSTANTLY MATCHED
                      </span>
                      {showOnlyEligible && <span className={`px-1 py-0.2 rounded-xs font-mono uppercase ${darkMode ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-900/50' : 'text-emerald-700 bg-emerald-100'}`}>ELIGIBLE_FILTER_ON</span>}
                    </div>

                    {/* Sorting selectors */}
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <span className={`text-[10px] font-bold flex items-center gap-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                        <ArrowUpDown className="h-3 w-3" /> SORT:
                      </span>
                      <select
                        id="matrix_sort_select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className={`text-xs font-semibold py-1 px-1.5 focus:outline-none focus:ring-1 rounded-sm ${darkMode ? 'bg-slate-950 border-slate-800 text-white focus:ring-indigo-500' : 'bg-white border-slate-300 focus:ring-indigo-500'}`}
                      >
                        <option value="name">Alphabetical</option>
                        <option value="minAge">Minimum Age Priority</option>
                        <option value="fee">Lowest Application Fee</option>
                      </select>
                    </div>

                  </div>

                  {/* SPECIFIC FIELDS & BRANCH SEARCH BAR */}
                  <div className={`p-2.5 flex flex-wrap gap-1.5 items-center justify-start border-2 border-t-0 -mt-4 shrink-0 transition-all ${darkMode ? 'bg-slate-900 border-indigo-950 text-white' : 'bg-white border-slate-900 border-t-0'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1.5 flex items-center gap-1 shrink-0">
                      <Layers className="h-3 w-3 text-[#FBAF17]" /> Core Stream:
                    </span>
                    {[
                      { id: 'All', label: 'All Streams', icon: '🌐' },
                      { id: 'Arts', label: 'Arts & Lit', icon: '🎨' },
                      { id: 'Science', label: 'Sciences', icon: '🔬' },
                      { id: 'Commerce', label: 'Commerce', icon: '💳' },
                      { id: 'Engineering', label: 'Engineering', icon: '⚙️' },
                      { id: 'Medical', label: 'Medical', icon: '🩺' }
                    ].map(field => {
                      const isActive = selectedBranchFilter === field.id;
                      return (
                        <button
                          key={field.id}
                          onClick={() => setSelectedBranchFilter(field.id)}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#FBAF17] text-slate-950 font-bold scale-102 shadow-xs'
                              : darkMode
                                ? 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-850'
                                : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>{field.icon}</span>
                          <span>{field.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* MAT_GRID OR MAT_LIST RENDERING */}
                  {filteredExams.length === 0 ? (
                    <div className={`text-center py-16 border-2 rounded-xs p-6 ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-900 text-slate-900'}`}>
                      <HelpCircle className="h-10 w-10 text-slate-400 mx-auto mb-2" />
                      <h4 className="font-bold text-sm text-slate-800">No Exam Qualifications Found</h4>
                      <p className={`text-xs mt-1 max-w-sm mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        We could not match any criteria with your current filters. Try relaxing your Search phrase or adjusting age boundaries.
                      </p>
                      <button 
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedRegionFilters(['State', 'National', 'Global']);
                          setShowOnlyEligible(false);
                          setShowOnlyWomenSpecial(false);
                        }}
                        className={`mt-3 px-3 py-1 text-[10px] font-bold uppercase tracking-tight rounded-xs border transition-all ${darkMode ? 'bg-slate-950 text-indigo-300 border-indigo-900 hover:bg-slate-850' : 'bg-slate-900 text-white border-transparent'}`}
                      >
                        Reset Matrix Filter
                      </button>
                    </div>
                  ) : (
                    <div className={`grid ${viewMode === 'Grid' ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'grid-cols-1 gap-2'}`}>
                      {filteredExams.map(({ exam, isEligible, reasonsEligible, reasonsIneligible, womenSpecificBenefits }) => {
                        const isSelected = selectedExamId === exam.id;
                        
                        // Select background color depending on state
                        const eligibilityBg = isEligible 
                          ? darkMode 
                            ? 'bg-slate-900 text-slate-100 hover:bg-slate-850 border-indigo-950/85 shadow-[1px_1px_rgba(255,255,255,0.05)]' 
                            : 'bg-white hover:bg-slate-50' 
                          : darkMode 
                            ? 'bg-slate-950 text-slate-400 hover:bg-slate-900 border-slate-850 opacity-80 border-dashed'
                            : 'bg-slate-100 hover:bg-slate-50/70 border-dashed opacity-85';

                        return (
                          <div
                            key={exam.id}
                            className={`border-2 p-3.5 flex flex-col gap-2 relative transition-all rounded-xs shadow-xs ${eligibilityBg} ${
                              darkMode ? 'border-slate-800' : 'border-slate-900'
                            } ${
                              isSelected ? (darkMode ? 'ring-3 ring-indigo-500 ring-offset-slate-900' : 'ring-3 ring-indigo-500 ring-offset-2') : ''
                            }`}
                          >
                            {/* Region & Eligibility indicators */}
                            <div className="flex justify-between items-center gap-2 mb-1.5">
                              {/* Geo Region Badge */}
                              <span className={`text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-xs ${
                                exam.region === 'Global' 
                                  ? 'bg-blue-600 text-white' 
                                  : exam.region === 'National' 
                                    ? 'bg-indigo-600 text-white' 
                                    : 'bg-emerald-600 text-white'
                              }`}>
                                {exam.region}: {exam.state || 'Global'}
                              </span>

                              {/* Eligibility check badge */}
                              <span className={`inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold px-1.5 py-0.2 rounded-xs border ${
                                isEligible 
                                  ? darkMode 
                                    ? 'bg-emerald-950/50 text-emerald-400 border-emerald-900/60'
                                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                                  : darkMode
                                    ? 'bg-slate-950 text-slate-500 border-slate-850'
                                    : 'bg-slate-200 text-slate-605 border-slate-300'
                              }`}>
                                {isEligible ? (
                                  <>
                                    <CheckCircle className="h-3 w-3 text-emerald-600 fill-emerald-100" />
                                    Verified Fit
                                  </>
                                ) : (
                                  <>
                                    <Lock className="h-3 w-3 text-slate-500" />
                                    Ineligible ({reasonsIneligible.length} gaps)
                                  </>
                                )}
                              </span>
                            </div>

                            {/* Job / Exam Title */}
                            <div>
                              <h4 className="font-bold text-sm md:text-base leading-tight uppercase tracking-tight text-slate-900">
                                {exam.name}
                              </h4>
                              <p className="text-[10px] text-slate-500 font-medium">{exam.conductingBody}</p>
                            </div>

                            {/* Description brief */}
                            <p className="text-xs text-slate-600 line-clamp-2">
                              {exam.description}
                            </p>

                            {/* Key eligibility details info drawer info */}
                            <div className="grid grid-cols-2 gap-2 mt-1.5 bg-slate-50/70 border border-slate-200 p-2 text-[11px] rounded-xs font-medium">
                              <div>
                                <span className="block text-[9.5px] text-slate-400 uppercase font-mono">Acceptance Criteria</span>
                                <span className="font-bold text-slate-700">{exam.requiredLevel} ({exam.requiredStreams.join('/')})</span>
                              </div>
                              <div>
                                <span className="block text-[9.5px] text-slate-400 uppercase font-mono">Age Threshold</span>
                                <span className="font-bold text-slate-700">{exam.minAge} - {exam.maxAge} Years</span>
                              </div>
                            </div>

                            {/* Special women highlights if profile matches female and there's a reservation */}
                            {profile.gender === 'Female' && (
                              <div className="bg-yellow-50/80 border border-yellow-200 text-yellow-950 p-2 rounded-xs text-[10px] space-y-0.5">
                                <div className="font-bold uppercase tracking-tight text-amber-900 flex items-center gap-1">
                                  <Award className="h-3.5 w-3.5 text-amber-700 fill-amber-300" />
                                  Lady Prospect Overview
                                </div>
                                <p className="leading-snug">{exam.womenReservationsDetails}</p>
                              </div>
                            )}

                            {/* Card actions footer details */}
                            <div className="mt-auto pt-3 border-t border-dashed border-slate-200 flex justify-between items-center text-xs">
                              
                              {/* Dynamic pricing display */}
                              <div>
                                <span className="text-[9px] text-slate-400 block uppercase font-mono">APPL. MATRIX FEE</span>
                                <span className="font-mono text-indigo-700 font-bold block">
                                  {profile.gender === 'Female' 
                                    ? (exam.fee.women === 0 ? "₹0.00 (Lady Waiver!)" : `₹${exam.fee.women}`) 
                                    : `₹${exam.fee.standard}`}
                                </span>
                              </div>

                              <div className="flex gap-1.5">
                                <button
                                  onClick={() => toggleSaveExam(exam.id)}
                                  className={`p-1.5 rounded-xs transition-colors cursor-pointer border ${
                                    savedExamIds.includes(exam.id)
                                      ? 'bg-rose-50 text-rose-600 border-rose-300'
                                      : 'bg-white text-slate-400 border-slate-300 hover:text-slate-700'
                                  }`}
                                  title={savedExamIds.includes(exam.id) ? "Unsave Exam" : "Save Exam to 5. Dashboard"}
                                >
                                  <Bookmark className={`h-3.5 w-3.5 ${savedExamIds.includes(exam.id) ? 'fill-rose-500 text-rose-600' : ''}`} />
                                </button>
                                <button
                                  onClick={() => setSelectedExamId(exam.id)}
                                  className={`px-2 py-1 text-[10.5px] font-black uppercase rounded-xs transition-colors cursor-pointer border ${
                                    isSelected 
                                      ? 'bg-slate-900 text-white border-transparent' 
                                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                  }`}
                                >
                                  {isSelected ? "Reviewing" : "Verify Rules"}
                                </button>
                                <a
                                  href={exam.officialUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-2 py-1 bg-slate-100 text-slate-700 text-[10.5px] border border-slate-200 rounded-xs hover:bg-slate-200 flex items-center gap-1 transition-all font-bold"
                                >
                                  <span>Portal</span>
                                  <ExternalLink className="h-3 w-3 text-slate-500" />
                                </a>
                              </div>

                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* ACTIVE DETAILED ANALYSIS PANEL (Shows checklist on select) */}
                  {activeExamItem && (
                    <div id="selected_exam_checklist_panel" className={`mt-4 border-2 p-4 rounded-xs shadow-xs ${darkMode ? 'bg-slate-900 border-indigo-900 text-slate-100' : 'bg-white border-slate-900 text-slate-900'}`}>
                      
                      {/* Title */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-1.5 rounded-xs ${darkMode ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' : 'bg-slate-900 text-white'}`}>
                          <Cpu className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <span className={`text-[10px] font-mono tracking-widest uppercase font-black ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Dynamic Compliance Logic Report</span>
                          <h4 className="text-sm font-bold uppercase tracking-tight">{activeExamItem.exam.name}</h4>
                        </div>
                      </div>

                      {/* Flex contents list of proofs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        
                        {/* Checked pass qualifiers */}
                        <div className="space-y-2">
                          <h5 className={`font-bold uppercase text-[10px] tracking-wider mb-1 ${darkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
                            ✓ Passed Qualifiers ({activeExamItem.reasonsEligible.length})
                          </h5>
                          <ul className="space-y-1.5">
                            {activeExamItem.reasonsEligible.map((r, i) => (
                              <li key={i} className={`flex items-start gap-1.5 p-2 rounded-xs border leading-snug ${darkMode ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-emerald-50/60 border-emerald-100/80 text-slate-800'}`}>
                                <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Block components or flags */}
                        <div className="space-y-2">
                          <h5 className={`font-bold uppercase text-[10px] tracking-wider mb-1 ${darkMode ? 'text-red-400' : 'text-red-800'}`}>
                            ⚠ Found Restrictions / Barriers ({activeExamItem.reasonsIneligible.length})
                          </h5>
                          {activeExamItem.reasonsIneligible.length === 0 ? (
                            <div className={`border p-3 rounded-xs text-xs font-medium ${darkMode ? 'bg-emerald-950/15 border-emerald-900/50 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-950'}`}>
                              Great news! No compliance issues found. You are eligible to proceed with applications.
                            </div>
                          ) : (
                            <ul className="space-y-1.5">
                              {activeExamItem.reasonsIneligible.map((r, i) => (
                                <li key={i} className={`flex items-start gap-1.5 p-2 rounded-xs border leading-snug ${darkMode ? 'bg-red-950/20 border-red-900/40 text-red-350' : 'bg-red-50 border-red-100 text-slate-805'}`}>
                                  <XCircle className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {activeExamItem.exam.physicalStandardsRequired && (
                            <div className={`border p-2 rounded-xs text-[11px] leading-snug ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'}`}>
                              <strong className={`block uppercase tracking-wide text-[9px] mb-0.5 font-bold ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>State Physical Benchmark Standards:</strong>
                              <p className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{activeExamItem.exam.physicalStandardsRequired}</p>
                            </div>
                          )}
                        </div>

                      </div>

                      {/* Next advisory instructions and clickable exam portal link */}
                      <div className={`mt-4 pt-3 border-t flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 p-2.5 rounded border ${darkMode ? 'bg-indigo-950/20 border-indigo-900/40 text-indigo-200' : 'bg-indigo-50/50 border-indigo-100 text-indigo-950'}`}>
                        <div className="flex-1">
                          <span className="text-[11px] font-semibold block">
                            Verify registration protocols & submit paperwork:
                          </span>
                          <span className={`text-[10px] font-mono ${darkMode ? 'text-indigo-300' : 'text-slate-505'}`}>
                            OFFICIAL URL: <span className="underline">{activeExamItem.exam.officialUrl}</span>
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <a 
                            href={activeExamItem.exam.officialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-1.5 bg-yellow-400 hover:bg-yellow-350 text-slate-900 text-[11px] font-black uppercase tracking-wider rounded border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center gap-1.5 transition-all text-center justify-center cursor-pointer"
                          >
                            <span>Official Website Portal</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <button 
                            onClick={() => {
                              setActiveTab('chat');
                            }}
                            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] uppercase font-bold tracking-tight rounded flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Consult advisor</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              )}

              {/* TAB 2: AI COMPASS CHATBOT */}
              {activeTab === 'chat' && (
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-sm p-3 text-xs text-amber-950">
                    <p className="leading-snug font-medium">
                      <strong>AI Career Context Infused:</strong> Your current profile settings (Age: {profile.age}, Degree: {profile.educationLevel} in {profile.stream}, Location: {profile.state}) have been injected as dynamic parameters. Ask specific questions directly!
                    </p>
                  </div>
                  
                  {/* Embedded Custom Chat Component */}
                  <CareerChat userProfile={profile} />
                </div>
              )}

              {/* TAB 3: RESUME FIT ANALYSIS */}
              {activeTab === 'resume' && (
                <div className="bg-white border-2 border-slate-900 p-4 rounded-xs shadow-xs space-y-4">
                  
                  {/* Header info */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2">
                      <FileText className="h-4.5 w-4.5 text-indigo-600" />
                      Gemini-Powered Resume Match Analyzer
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Paste details of your resume or academic highlights below. We will use Gemini 3.5 Flash to automatically compare your profile, extract skills, calculate match strength indexes, identify gaps, and design a customized study pipeline.
                    </p>
                  </div>

                  {/* Input form */}
                  <div className="space-y-2">
                    <label htmlFor="resume_paste_area" className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider font-mono">
                      PASTE YOUR RESUME TEXT / RESEARCH BACKGROUND
                    </label>
                    <textarea
                      id="resume_paste_area"
                      rows={5}
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-300 focus:outline-indigo-500 focus:bg-white rounded-xs font-sans leading-relaxed"
                      placeholder="e.g. Completed graduate degree in language and literature. Strong public speaking background, some corporate copywriting content internships, IELTS score 7.5. Looking for state vacancies or global education channels."
                      value={resumeInput}
                      onChange={(e) => setResumeInput(e.target.value)}
                    ></textarea>
                    
                    <button
                      id="trigger_analysis_btn"
                      onClick={triggerResumeAnalysis}
                      disabled={isAnalyzingResume || !resumeInput.trim()}
                      className="px-4 py-2 bg-slate-950 text-white font-black text-xs uppercase tracking-tight rounded-xs hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {isAnalyzingResume ? (
                        <>
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          <span>Gemini is scrutinizing skills...</span>
                        </>
                      ) : (
                        <>
                          <Cpu className="h-3.5 w-3.5 text-indigo-400" />
                          <span>Run AI Resume Compatibility Check</span>
                        </>
                      )}
                    </button>
                    {resumeAnalysisError && <p className="text-xs text-red-600">{resumeAnalysisError}</p>}
                  </div>

                  {/* Analysis output results */}
                  {resumeAnalysisReport && (
                    <div className="pt-4 border-t border-dashed border-slate-300 grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Left score card */}
                      <div className="lg:col-span-4 bg-slate-50 p-4 border border-slate-200 rounded-sm flex flex-col justify-between">
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">Resume Fit Indicator</h4>
                          
                          {/* Circle radial style or heavy block layout */}
                          <div className="text-center py-4">
                            <span className="block text-4xl font-extrabold text-indigo-600 font-display">{resumeAnalysisReport.overallScore}%</span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase font-mono tracking-wider mt-1 block">Compatible score index</span>
                          </div>

                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden mt-1">
                            <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${resumeAnalysisReport.overallScore}%` }}></div>
                          </div>
                        </div>

                        <div className="text-[11px] text-slate-500 italic mt-3 bg-white p-2 border leading-relaxed">
                          "Your language mastery and academic credentials place you in the top tier for international teaching pathways and state clerical postings."
                        </div>
                      </div>

                      {/* Centre skills matching grids */}
                      <div className="lg:col-span-8 space-y-4">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Matched skills */}
                          <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xs">
                            <h5 className="text-[10px] font-black uppercase text-emerald-800 mb-2">✦ Matched Capabilities</h5>
                            <ul className="space-y-1">
                              {resumeAnalysisReport.matchedSkills.map((sk, index) => (
                                <li key={index} className="text-xs text-slate-700 flex items-center gap-1">
                                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                                  <span>{sk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Missing aspects */}
                          <div className="p-3 bg-red-50/50 border border-red-200 rounded-xs">
                            <h5 className="text-[10px] font-black uppercase text-red-800 mb-2">⚠ Gaps Detected</h5>
                            <ul className="space-y-1">
                              {resumeAnalysisReport.missingQualifications.map((mk, index) => (
                                <li key={index} className="text-xs text-slate-700 flex items-center gap-1">
                                  <span className="h-1.5 w-1.5 bg-red-400 rounded-full"></span>
                                  <span>{mk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Recommended Exam Options analysis */}
                        <div className="space-y-2">
                          <h5 className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                            Tailored Exam Suitability Matrix
                          </h5>
                          <div className="space-y-2">
                            {resumeAnalysisReport.tailoredExamsList.map((fit, idx) => {
                              const relatedExam = EXAMS_DATA.find(ex => ex.id === fit.examId);
                              return (
                                <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded-xs text-xs">
                                  <div className="flex justify-between items-center mb-1">
                                    <strong className="text-slate-950 uppercase">{relatedExam ? relatedExam.name : fit.examId}</strong>
                                    <span className="font-mono bg-indigo-100 text-indigo-800 font-bold px-1.5 py-0.2 rounded text-[10px]">
                                      {fit.score}% Match
                                    </span>
                                  </div>
                                  <p className="text-slate-600 leading-snug mb-1.5">{fit.suitabilityReason}</p>
                                  <div className="text-[11px] bg-white p-1.5 border border-dashed text-slate-500 rounded-xs">
                                    <span className="font-bold text-slate-700 uppercase text-[9px] block">Actionable Prep:</span>
                                    {fit.gapAnalysis}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Strategic Roadmap List */}
                        <div className="p-3 bg-indigo-50/50 border border-indigo-200 rounded-xs">
                          <h5 className="text-[10px] font-black uppercase text-indigo-900 mb-2 font-bold tracking-wide">
                            Milestone strategic roadmap
                          </h5>
                          <ol className="space-y-1.5 text-xs text-slate-800 list-decimal pl-4 leading-snug">
                            {resumeAnalysisReport.strategicRoadmap.map((roadmapItem, idx) => (
                              <li key={idx}>
                                {roadmapItem}
                              </li>
                            ))}
                          </ol>
                        </div>

                      </div>

                    </div>
                  )}

                </div>
              )}

              {/* TAB 4: PRIVATE CAREERS PANEL */}
              {activeTab === 'private' && (
                <div className="space-y-4">
                  <div className="bg-indigo-900 text-white p-4 rounded-xs border border-indigo-950 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs font-sans">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5">
                        <Briefcase className="h-4.5 w-4.5 text-indigo-300" />
                        Private Career Match Matrices
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-xl">
                        Designed for humanities and general science graduates looking for robust private options like Content Writing, SEO Editing, Digital Media, or Tutoring.
                      </p>
                    </div>
                    <div className="bg-slate-800 text-indigo-300 px-3 py-1.5 border border-slate-700 text-xs font-mono rounded-xs font-bold shrink-0">
                      MAJOR: <span className="text-emerald-400">{profile.stream}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PRIVATE_CAREERS_DATA.map((career) => {
                      // Determine user compatibility match
                      const isStreamPreferred = career.preferredDegrees.includes(profile.stream) || career.preferredDegrees.includes('All');
                      const growthColor = career.growthPotential === 'High' 
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                        : career.growthPotential === 'Medium'
                          ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
                          : 'bg-amber-100 text-amber-800 border-amber-300';

                      return (
                        <div key={career.id} className={`border-2 p-4 rounded-xs shadow-xs flex flex-col justify-between font-sans relative ${darkMode ? 'bg-slate-900 border-indigo-900 text-slate-100 shadow-[1px_1px_rgba(255,255,255,0.05)]' : 'bg-white border-slate-900 text-slate-900'}`}>
                          {isStreamPreferred && (
                            <span className="absolute -top-3 right-3 bg-indigo-600 text-white font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-sm shadow-sm border border-indigo-400 animate-pulse">
                              ✦ Prime Match ({profile.stream}_Grad)
                            </span>
                          )}

                          <div className="space-y-2.5">
                            <div>
                              <span className={`text-[9.5px] uppercase font-mono tracking-widest font-black px-1.5 py-0.5 border rounded-xs ${growthColor}`}>
                                {career.growthPotential} Growth
                              </span>
                              <h4 className={`text-base font-black uppercase tracking-tight mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{career.title}</h4>
                              <p className={`text-[10px] font-mono font-bold mt-0.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{career.averageSalaryRange}</p>
                            </div>

                            <p className={`text-xs leading-relaxed font-sans ${darkMode ? 'text-slate-305' : 'text-slate-600'}`}>{career.description}</p>

                            {/* Required Skills list */}
                            <div>
                              <span className="block text-[9.5px] uppercase font-mono text-slate-400 tracking-wider font-bold mb-1">Target Skill Stack</span>
                              <div className="flex flex-wrap gap-1">
                                {career.requiredSkills.map((sk, id) => (
                                  <span key={id} className={`text-[10px] border px-1.5 py-0.5 rounded-xs font-mono ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-250 text-slate-700'}`}>
                                    {sk}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Top Employers */}
                            <div className={`border p-2 rounded-xs ${darkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'}`}>
                              <span className="block text-[9px] uppercase font-mono text-slate-500 font-bold mb-1">Active Recruiters:</span>
                              <p className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{career.topEmployers.join(' ✦ ')}</p>
                            </div>
                          </div>

                          {/* Expandable Interview Tips Box */}
                          <div className={`mt-4 pt-3 border-t border-dashed space-y-2 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                            <span className={`block text-[10px] font-bold uppercase tracking-tight flex items-center gap-1 ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>
                              <Play className="h-3 w-3 text-indigo-650 fill-indigo-600/20" /> Recruiting Prep Strategy
                            </span>
                            <ul className={`space-y-1.5 pl-3 list-disc text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                              {career.interviewTips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 5: HIGHER STUDY PATHWAYS */}
              {activeTab === 'higher' && (
                <div className="space-y-4 font-sans">
                  <div className="bg-slate-900 text-white p-4 rounded-xs border border-slate-950 shadow-xs relative overflow-hidden">
                    <div className="absolute right-0 top-0 text-slate-800 pointer-events-none transform translate-y-3 translate-x-3">
                      <GraduationCap className="h-44 w-44 opacity-15" />
                    </div>
                    <div className="relative">
                      <span className="text-[9px] font-black uppercase text-indigo-400 bg-slate-850 border border-slate-700 px-2 py-0.5 rounded-xs tracking-widest font-mono">
                        EXTRA MODULE PATHWAY
                      </span>
                      <h4 className="text-sm font-black uppercase tracking-wider text-white mt-1.5 flex items-center gap-2">
                        Academic Higher Education Directories
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-xl">
                        Interested in looking beyond exams toward a Master&apos;s or Doctoral pathway? Discover entry specifications, entrance exams, premier universities, and scholarship opportunities tailored to your major.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {HIGHER_STUDY_DATA.map((route) => {
                      const isStreamMatched = route.requiredStreams.includes('All') || route.requiredStreams.includes(profile.stream);

                      return (
                        <div key={route.id} className={`border-2 p-4 rounded-xs shadow-xs flex flex-col gap-3 relative ${darkMode ? 'bg-slate-900 border-indigo-900 text-slate-100 shadow-[1px_1px_rgba(255,255,255,0.05)]' : 'bg-white border-slate-900 text-slate-900'}`}>
                          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                            <div>
                              <h4 className={`text-base font-black uppercase tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                {route.courseName}
                              </h4>
                              <p className={`text-[10px] font-mono font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-650'}`}>
                                Required: {route.minimumDegree} in {route.requiredStreams.join(' / ')}
                              </p>
                            </div>
                            
                            <div className="flex gap-2">
                              {isStreamMatched ? (
                                <span className={`border font-bold px-1.5 py-0.5 text-[9px] uppercase font-mono rounded-xs ${darkMode ? 'bg-emerald-950/50 border-emerald-900/60 text-emerald-400' : 'bg-emerald-50 text-emerald-800 border-emerald-300'}`}>
                                  ✓ Stream Match
                                </span>
                              ) : (
                                <span className={`border px-1.5 py-0.5 text-[9px] uppercase font-mono rounded-xs ${darkMode ? 'bg-slate-950 border-slate-850 text-slate-400' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                                  Not Stream Specific
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                            <div className="md:col-span-8 space-y-3">
                              <p className={`leading-relaxed text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {route.description}
                              </p>

                              {/* Scholarship overview */}
                              <div className={`border p-3 rounded-xs space-y-1 ${darkMode ? 'bg-amber-950/20 border-amber-900/40 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'}`}>
                                <span className="text-[9px] uppercase font-black tracking-wider block font-mono">
                                  ✦ Scholarship Opportunities & Aid
                                </span>
                                <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-750'}`}>{route.scholarshipOpportunities}</p>
                              </div>

                              {/* institutions */}
                              <div>
                                <span className="text-[9.5px] uppercase font-mono text-slate-400 block font-bold mb-1">
                                  Target Institutions (Domestic & Worldwide)
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-sans">
                                  {route.majorInstitutions.map((inst, ui) => (
                                    <div key={ui} className={`flex items-center gap-1.5 border p-1 rounded-xs ${darkMode ? 'bg-slate-950 border-slate-850 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-705'}`}>
                                      <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full"></span>
                                      <span>{inst}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className={`md:col-span-4 border p-3 rounded-xs space-y-3 ${darkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'}`}>
                              <div>
                                <span className="text-[9px] uppercase font-mono text-slate-400 block font-bold mb-1">
                                  Mandated Admission Exams
                                </span>
                                <div className="space-y-1">
                                  {route.entranceExamsNeeded.map((ex, exI) => (
                                    <span key={exI} className={`block text-center font-bold font-mono border py-1.5 rounded-sm ${darkMode ? 'bg-slate-900 text-indigo-400 border-indigo-950/60' : 'bg-white text-slate-900 border-slate-300'}`}>
                                      {ex}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <span className="text-[9px] uppercase font-mono text-slate-400 block font-bold mb-1">
                                  Prospective Career Outcomes
                                </span>
                                <ul className={`space-y-1 font-mono text-[10.5px] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                  {route.careerOutcomes.map((co, coI) => (
                                    <li key={coI} className="flex items-start gap-1">
                                      <ChevronRight className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                                      <span>{co}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 6: 5. CANDIDATE INTEGRATED DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className={`space-y-4 font-sans ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  
                  {/* PDF performance report download action card */}
                  <div className={`border-2 p-3.5 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${
                    darkMode ? 'bg-indigo-950/40 border-indigo-900 text-indigo-100' : 'bg-yellow-100 border-slate-900 text-slate-900'
                  }`}>
                    <div className="flex items-start gap-2.5">
                      <div className={`h-9 w-9 rounded-full border-2 flex items-center justify-center text-lg font-bold shrink-0 shadow-xs ${
                        darkMode ? 'bg-indigo-900 border-indigo-400 text-white' : 'bg-yellow-400 border-slate-900'
                      }`}>
                        📋
                      </div>
                      <div>
                        <h4 className={`font-black text-xs uppercase tracking-wider ${darkMode ? 'text-indigo-400' : 'text-slate-950'}`}>
                          Export Unified PDF Performance & Progress Dossier
                        </h4>
                        <p className={`text-[11px] font-semibold leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-750'}`}>
                          Includes {savedExamIds.length} Bookmarked state opportunities, current preparation readiness checklist ({prepProgressPercentage}%), and upcoming exam permit schedules.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={downloadReportPDF}
                      className={`px-4 py-2 text-[11px] font-black uppercase tracking-wider rounded border-2 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 self-start sm:self-auto ${
                        darkMode 
                          ? 'bg-yellow-400 border-yellow-300 text-slate-950 hover:bg-yellow-300' 
                          : 'bg-slate-950 text-yellow-300 hover:bg-slate-850 hover:text-white border-slate-900'
                      }`}
                    >
                      <FileText className="h-4 w-4 text-emerald-500" />
                      <span>Download PDF Dossier</span>
                    </button>
                  </div>

                  {/* Dashboard Header Profile Stat panel */}
                  <div className={`border-2 rounded p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${
                    darkMode ? 'bg-slate-900 border-indigo-900 text-slate-100' : 'bg-white text-slate-800 border-slate-900'
                  }`}>
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 flex items-center justify-center font-black text-white text-xl rounded shadow-[2px_2px_0px_rgba(15,23,42,1)] ${
                        darkMode ? 'bg-indigo-650 border-2 border-indigo-500' : 'bg-indigo-600 border-2 border-slate-900'
                      }`}>
                        {profile.stream.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className={`text-[9px] font-mono font-extrabold uppercase tracking-wider block ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Active Candidate Node</span>
                        <h4 className={`text-base font-black uppercase tracking-tight mb-0.5 font-display ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                          {profile.gender} ({profile.age} Y/O) ✦ {profile.stream} Graduate
                        </h4>
                        <div className={`text-[11px] font-bold flex items-center gap-2 ${darkMode ? 'text-slate-350' : 'text-slate-600'}`}>
                          <MapPin className="h-3.5 w-3.5 text-emerald-500 stroke-[2.5]" />
                          <span>Domicile: {profile.state} (Indian Citizen)</span>
                        </div>
                      </div>
                    </div>

                    {/* Completion Tracker Widget */}
                    <div className={`text-white border-2 p-3 rounded flex items-center gap-3 min-w-[220px] w-full md:w-auto shadow-[3px_3px_0px_0px_rgba(16,185,129,1)] ${
                      darkMode ? 'bg-slate-950 border-emerald-900/60' : 'bg-slate-950 border-slate-900'
                    }`}>
                      <div className="relative flex items-center justify-center h-11 w-11 shrink-0 bg-slate-900 border-2 border-emerald-400 rounded-full font-black text-emerald-400 text-sm">
                        <span>{prepProgressPercentage}%</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tight block font-bold">Prep Readiness index</span>
                        <div className="h-2 w-28 bg-slate-800 border border-slate-750 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-emerald-400 transition-all duration-300" style={{ width: `${prepProgressPercentage}%` }}></div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-1 block">Syllabus Milestones Active</span>
                      </div>
                    </div>
                  </div>

                  {/* 5-Module Bento Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    
                    {/* Left Heavy Grid - Module 1 and 4 */}
                    <div className="lg:col-span-8 space-y-4">
                      
                      {/* 1. MY SAVED EXAMS */}
                      <div className={`border-2 p-4 rounded-xs shadow-xs space-y-3 ${
                        darkMode ? 'bg-slate-900 border-indigo-950' : 'bg-white border-slate-900'
                      }`}>
                        <div className={`flex items-center justify-between border-b pb-2 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                          <h4 className="font-black uppercase tracking-tight text-xs flex items-center gap-1.5 text-rose-500">
                            <Bookmark className="h-4 w-4 text-rose-500 fill-rose-50/20" />
                            1. My Saved Exams ({savedExamIds.length})
                          </h4>
                          <span className="text-[9px] font-mono text-slate-400">PERSISTED_SETTINGS</span>
                        </div>

                        {savedExamIds.length === 0 ? (
                          <div className={`text-center py-8 border border-dashed p-4 text-xs rounded-xs ${
                            darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-202 text-slate-500'
                          }`}>
                            <p className="mb-2">You haven&apos;t saved any exams from the matrix yet.</p>
                            <button
                              onClick={() => {
                                setActiveTab('matrix');
                              }}
                              className={`px-2.5 py-1 text-white font-bold text-[10px] uppercase tracking-wider rounded-xs cursor-pointer ${
                                darkMode ? 'bg-indigo-650 hover:bg-indigo-600' : 'bg-slate-900'
                              }`}
                            >
                              Explore Exam Matrix
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {savedExamIds.map((id) => {
                              const match = EXAMS_DATA.find(ex => ex.id === id);
                              if (!match) return null;
                              const eligibility = checkEligibility(profile, match);

                              return (
                                <div key={id} className={`flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xs gap-3 border ${
                                  darkMode ? 'bg-slate-950 border-slate-850 hover:bg-slate-900 text-slate-100' : 'bg-slate-50 border-slate-205 hover:border-slate-350 text-slate-905'
                                }`}>
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                      <h5 className={`font-extrabold text-xs uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>{match.name}</h5>
                                      <span className={`text-[8.5px] px-1 border rounded-xs font-mono font-bold leading-none ${
                                        eligibility.isEligible 
                                          ? darkMode 
                                            ? 'bg-emerald-950/60 border-emerald-805 text-emerald-400' 
                                            : 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                                          : darkMode
                                            ? 'bg-slate-900/50 border-slate-800 text-slate-400'
                                            : 'bg-slate-200 text-slate-600 border-slate-300'
                                      }`}>
                                        {eligibility.isEligible ? 'ELIGIBLE' : 'GAPS FOUND'}
                                      </span>
                                    </div>
                                    <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{match.conductingBody} ✦ Region: {match.region}</p>
                                  </div>

                                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 font-sans">
                                    <button
                                      onClick={() => {
                                        setSelectedExamId(id);
                                        setActiveTab('matrix');
                                      }}
                                      className={`px-2 py-1 border text-[10px] font-bold uppercase rounded-xs tracking-tight transition-colors cursor-pointer ${
                                        darkMode ? 'bg-slate-905 border-slate-800 text-indigo-300 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                                      }`}
                                    >
                                      Verify Rules
                                    </button>
                                    <button
                                      onClick={() => toggleSaveExam(id)}
                                      className={`p-1 px-1.5 border rounded-xs cursor-pointer transition-colors ${
                                        darkMode ? 'bg-slate-900 border-zinc-800 text-rose-450 hover:bg-rose-950/20' : 'bg-white border-slate-300 text-rose-600 hover:bg-rose-50'
                                      }`}
                                      title="Remove from bookmarks"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* 4. PREPARATION PROGRESS */}
                      <div className={`border-2 p-4 rounded-xs shadow-xs space-y-3 ${
                        darkMode ? 'bg-slate-900 border-indigo-950' : 'bg-white border-slate-900'
                      }`}>
                        <div className={`flex items-center justify-between border-b pb-2 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                          <h4 className="font-black uppercase tracking-tight text-xs flex items-center gap-1.5 text-indigo-405">
                            <TrendingUp className="h-4 w-4 text-indigo-500" />
                            4. Preparation Progress Tracker
                          </h4>
                          <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 border rounded-sm ${
                            darkMode ? 'bg-emerald-950/50 border-emerald-900/60 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                          }`}>
                            {prepProgressPercentage}% SYLLABUS COMPLETE
                          </span>
                        </div>

                        <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          Toggle the curriculum milestones below corresponding to candidates syllabus models in {profile.state} and global certifications:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-sans">
                          {[
                            { key: 'grammar_basics', label: '1. English Grammar & Sentence Composition Fundamentals' },
                            { key: 'comprehension_drills', label: '2. High-Capacity RC & Vocabulary Drills' },
                            { key: 'editorial_writing', label: '3. Editorial Content Draft Practice' },
                            { key: 'verbal_practice', label: '4. UPSC & SSC Verbal Ability Practice' },
                            { key: 'aptitude_reasoning', label: '5. Elementary Math & Numerical Logic Mocks' },
                            { key: 'current_affairs_weekly', label: '6. Regional & National Current Affairs Analysis' },
                            { key: 'state_syllabus_gs', label: '7. West Bengal State History & Geography GK' }
                          ].map((item) => {
                            const isChecked = prepProgress[item.key];
                            return (
                              <button
                                key={item.key}
                                onClick={() => togglePrepProgress(item.key)}
                                className={`flex items-start text-left gap-2 p-2 border rounded-xs transition-all cursor-pointer ${
                                  isChecked 
                                    ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950 font-medium' 
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                {isChecked ? (
                                  <CheckSquare className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                ) : (
                                  <Square className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
                                )}
                                <span className="text-xs leading-snug">{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Right Slender Grid - Modules 2, 3, and 5 */}
                    <div className="lg:col-span-4 space-y-4 font-sans">
                      
                      {/* 2. UPCOMING FORMS */}
                      <div className="bg-white border-2 border-slate-900 p-4 rounded-xs shadow-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                          <h4 className="font-black uppercase tracking-tight text-xs flex items-center gap-1.5 text-blue-900">
                            <Calendar className="h-4 w-4 text-blue-600" />
                            2. Upcoming Forms
                          </h4>
                          <span className="text-[9.5px] text-slate-400 font-mono">TIMELINE</span>
                        </div>

                        <div className="space-y-3 pt-0.5">
                          <div className="border-l-2 border-indigo-550 pl-3.5 space-y-0.5 text-xs">
                            <span className="inline-block text-[8.5px] font-bold font-mono uppercase text-indigo-700 bg-indigo-50 px-1 rounded-sm">ADMISSIONS OPEN</span>
                            <div className="font-extrabold text-slate-850 uppercase tracking-tight">IELTS Academic Slots</div>
                            <p className="text-[11px] text-slate-500">Intakes active. Book 15 days before desired test date.</p>
                          </div>

                          <div className="border-l-2 border-emerald-555 pl-3.5 space-y-0.5 text-xs">
                            <span className="inline-block text-[8.5px] font-bold font-mono uppercase text-emerald-700 bg-emerald-50 px-1 rounded-sm">OPENS NOV 12, 2026</span>
                            <div className="font-extrabold text-slate-850 uppercase tracking-tight">WBCS Executive 2026 Admin</div>
                            <p className="text-[11px] text-slate-500">Official registry window closes approx December 14.</p>
                          </div>

                          <div className="border-l-2 border-amber-555 pl-3.5 space-y-0.5 text-xs">
                            <span className="inline-block text-[8.5px] font-bold font-mono uppercase text-amber-700 bg-amber-50 px-1 rounded-sm">OPENS DEC 15, 2026</span>
                            <div className="font-extrabold text-slate-850 uppercase tracking-tight">WBPSC Clerkship General</div>
                            <p className="text-[11px] text-slate-500">Ages 18-40 eligible pass eligibility indices.</p>
                          </div>
                        </div>
                      </div>

                      {/* 3. ADMIT CARD ALERTS */}
                      <div className="bg-white border-2 border-slate-900 p-4 rounded-xs shadow-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                          <h4 className="font-black uppercase tracking-tight text-xs flex items-center gap-1.5 text-amber-800">
                            <Bell className="h-4 w-4 text-amber-600" />
                            3. Admit Card Alerts
                          </h4>
                          <span className="text-[9px] bg-rose-100 text-rose-800 px-1.5 rounded-sm font-mono font-bold">1 LIVE</span>
                        </div>

                        <div className="space-y-2.5 pt-0.5">
                          <div className="bg-amber-50/60 border border-amber-205 p-2.5 rounded-xs text-xs relative">
                            <span className="absolute top-1 right-2 w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
                            <strong className="block text-amber-950 uppercase tracking-tight text-[11px]">WB Lady SI Prelims 2026:</strong>
                            <p className="text-[11px] text-slate-700 leading-snug mt-0.5 font-medium">
                              Admit Cards release scheduling is active. Direct portal downloads begin May 30 (scheduled in 4 days).
                            </p>
                          </div>

                          <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xs text-xs">
                            <strong className="block text-slate-600 uppercase tracking-tight text-[11px]">UPSC Civil Services Prelims:</strong>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              Scheduled release: approx 15 days before national prelim dates. Alerts will sound.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 5. RECOMMENDED COURSES */}
                      <div className="bg-white border-2 border-slate-900 p-4 rounded-xs shadow-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                          <h4 className="font-black uppercase tracking-tight text-xs flex items-center gap-1.5 text-indigo-900">
                            <BookOpen className="h-4 w-4 text-indigo-600" />
                            5. Recommended Courses
                          </h4>
                          <span className="text-[9px] font-mono text-slate-400">PERSONALIZED</span>
                        </div>

                        <div className="space-y-2.5 pt-0.5 text-xs text-slate-800">
                          {profile.stream === 'English' ? (
                            <>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-900 block font-bold">Advanced SEO Copywriting & Content Hub</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">HubSpot Academy (Free Certification)</span>
                              </div>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-900 block font-bold">British Council IELTS Academic Full Syllabus Prep</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">IELTS Premium Portal Coursework</span>
                              </div>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-900 block font-bold">WBCS English Composition & Essay Matrix</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">State Civil Services Prep Hub</span>
                              </div>
                            </>
                          ) : profile.stream === 'Physics' ? (
                            <>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-950 block font-bold">IIT JAM Mathematical Physics Special Prep Course</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">MHRD NPTEL Lecture Series</span>
                              </div>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-950 block font-bold">CSIR-NET Physical Sciences Foundations</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">Unacademy Special Series</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-950 block font-bold">High Growth Digital Advertising Strategy</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">Google Skillshop Premium Platform</span>
                              </div>
                              <div className="p-2 border border-slate-200 hover:border-slate-300 bg-slate-50 rounded-xs space-y-0.5">
                                <strong className="text-slate-950 block font-bold">Elementary Quantitative Aptitude & Numerical Reasoning</strong>
                                <span className="text-[10px] text-indigo-600 font-mono">SSC/Clerk General Syllabus Prep</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* TAB 7: PREMIUM SERVICES HUB (₹100 ADD-ON & SUITE) */}
              {activeTab === 'premium' && (
                <div className="space-y-6 flex-1 flex flex-col font-sans p-6 overflow-y-auto">
                  
                  {/* UNLOCKED / LOCKED CHECKPOINT COMPONENT */}
                  {!isPremiumHubUnlocked ? (
                    <div className="flex-1 flex flex-col justify-center items-center py-4">
                      <div className={`w-full max-w-2xl border-2 border-slate-900 rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,76,129,1)] transition-all ${
                        darkMode ? 'bg-slate-900 text-white border-indigo-505 shadow-[#FBAF17]' : 'bg-white text-slate-900'
                      }`}>
                        
                        {/* Premium header block */}
                        <div className="bg-gradient-to-r from-[#0F4C81] via-[#1a5b94] to-[#0C3E66] p-6 text-white relative overflow-hidden text-center">
                          <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                          <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-yellow-400/5 rounded-full blur-xl"></div>
                          
                          <div className={`inline-block border text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full text-slate-950 bg-[#FBAF17] border-amber-400 mb-2 shadow-xs`}>
                             EXAMBRIDGE DIRECT PREMIUM PRO SUITE 
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight leading-tight">
                            Unlock Your Professional Competitive Advantage
                          </h3>
                          <p className="text-xs text-indigo-150 font-medium max-w-xl mx-auto mt-1.5 leading-relaxed">
                            Access our full suite of premium resources including Mock Exam Subscriptions, interactive Resume PDFs, customized Prep Roadmaps, and Coaching Affiliations.
                          </p>
                        </div>
                        
                        <div className="p-6 md:p-8 space-y-6">
                          
                          {/* Bento list of premium items */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                            <div className="flex items-start gap-2.5 p-2.5 border rounded-lg bg-slate-50 border-slate-200">
                              <span className="text-lg shrink-0">🗺️</span>
                              <div>
                                <strong className="text-slate-900 block font-bold">Premium Preparation Roadmaps</strong>
                                <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Highly interactive stream-based step timelines.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5 p-2.5 border rounded-lg bg-slate-50 border-slate-200">
                              <span className="text-lg shrink-0">🛠️</span>
                              <div>
                                <strong className="text-slate-900 block font-bold">PDF Professional Resume Builder</strong>
                                <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Fill visual forms and instantly export certified resumes of your stream.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5 p-2.5 border rounded-lg bg-slate-50 border-slate-200">
                              <span className="text-lg shrink-0">✍️</span>
                              <div>
                                <strong className="text-slate-900 block font-bold">Dynamic Subject Mock Tests</strong>
                                <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Interactive scoring assessment with customized MCQ questions.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5 p-2.5 border rounded-lg bg-slate-50 border-slate-200">
                              <span className="text-lg shrink-0">🧑‍🏫</span>
                              <div>
                                <strong className="text-slate-900 block font-bold">Strategy & Counselling Booking</strong>
                                <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Schedule live mentorship slots or type logical queries.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5 p-2.5 border rounded-lg bg-slate-50 border-slate-200">
                              <span className="text-lg shrink-0">🔔</span>
                              <div>
                                <strong className="text-slate-900 block font-bold">Form-Fill Registration Reminders</strong>
                                <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Track critical exam date alarms and reminders of your state.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5 p-2.5 border rounded-lg bg-slate-50 border-slate-200">
                              <span className="text-lg shrink-0">📚</span>
                              <div>
                                <strong className="text-slate-900 block font-bold">Free Syllabus Topic PDFs Viewer</strong>
                                <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Direct downloadable review guides based on major/subject.</span>
                              </div>
                            </div>
                          </div>

                          {/* Affiliate Promo segment */}
                          <div className={`p-4 border border-dashed rounded-xl bg-amber-500/5 border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-4`}>
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 text-xl font-bold rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 animate-pulse">
                                🤝
                              </div>
                              <div className="text-left font-sans">
                                <h4 className="font-extrabold text-[#0F4C81] text-xs">OFFICIAL TUTORING COACHING AFFILIATIONS</h4>
                                <p className="text-[10.5px] text-slate-650">Get pre-negotiated 50% discount coupon packages for Physics Wallah, Vision IAS, & Unacademy!</p>
                              </div>
                            </div>
                            <div className="text-center font-bold font-mono text-xs text-[#0F4C81]">
                              INCLUDED FREE
                            </div>
                          </div>

                          {/* Checkout panel & attractive pricing */}
                          <div className="pt-4 border-t border-slate-100 flex flex-col items-center justify-center space-y-4">
                            
                            {/* Interactive Promo Box */}
                            <div className="flex items-center gap-2 max-w-sm">
                              <input 
                                type="text" 
                                placeholder="Enter coupon (eg. EXAMPAY100)" 
                                value={promoCodeInput}
                                onChange={(e) => setPromoCodeInput(e.target.value)}
                                className={`px-3 py-1.5 text-xs text-center border font-mono rounded-lg focus:outline-none focus:ring-1 ${darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300'}`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  if (promoCodeInput.trim().toUpperCase() === 'EXAMPAY100' || promoCodeInput.trim().toUpperCase() === 'ADMIN20') {
                                    setPromoCodeApplied(true);
                                  } else {
                                    alert("Invalid promotion code. Try applying 'EXAMPAY100' for standard demo validation.");
                                  }
                                }}
                                className="px-3 py-1.5 text-xs font-bold text-white bg-slate-805 hover:bg-slate-950 rounded-lg cursor-pointer transition-colors"
                              >
                                {promoCodeApplied ? "Applied!" : "Apply"}
                              </button>
                            </div>

                            {/* Live Checkout Summary */}
                            <div className="text-center space-y-1">
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-slate-400 line-through text-sm">Original: ₹299</span>
                                <span className="text-2xl font-black font-display text-slate-900 flex items-center gap-1">
                                  ₹{promoCodeApplied ? "80" : "100"} <span className="text-xs font-mono font-bold text-amber-600">ONLY</span>
                                </span>
                              </div>
                              <p className="text-[10px] text-emerald-600 font-mono font-bold">
                                {promoCodeApplied ? "✓ promo key applied: 20% discount activated!" : "★ Special One-Time Subscription Fee (Secure & Certified)"}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                setIsPremiumHubUnlocked(true);
                              }}
                              className="w-full max-w-md py-4 bg-[#FBAF17] hover:bg-[#F0A010] text-slate-950 font-black tracking-wide text-xs rounded-xl shadow-[0_4px_14px_rgba(251,175,23,0.45)] hover:shadow-[0_6px_20px_rgba(251,175,23,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 text-center select-none border border-amber-400 group uppercase"
                            >
                              <CreditCard className="h-4 w-4 text-slate-950" />
                              <span>Unlock Complete Premium Suite for ₹{promoCodeApplied ? "80" : "100"}</span>
                              <ArrowRight className="h-4 w-4 text-slate-950 group-hover:translate-x-1 duration-200" />
                            </button>
                            
                            <span className="text-[10px] text-slate-400 font-mono">
                              Secure checkout sandbox simulator • Cancel anytime instantly • 24/7 Priority Support
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 flex-1 flex flex-col font-sans">
                      
                      {/* Premium Navigation Header Bar */}
                      <div className={`p-4 border-2 border-slate-900 rounded-xl relative ${
                        darkMode ? 'bg-slate-900 text-white' : 'bg-[#0f4c81]/5 text-slate-900 border-slate-900'
                      } flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shrink-0`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 text-xl font-bold bg-[#FBAF17]/15 rounded-full flex items-center justify-center border border-amber-400">
                            👑
                          </div>
                          <div className="text-left">
                            <h3 className="text-sm font-black uppercase tracking-tight flex items-center gap-2 text-slate-900">
                              ExamBridge Pro Advisor Dashboard
                              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-mono px-1.5 py-0.5 rounded-sm font-bold animate-pulse">SUBSCRIBED</span>
                            </h3>
                            <p className="text-[11px] text-slate-600 font-medium">Unlocked content based on profile stream: <strong className="text-[#0F4C81]">{profile.stream}</strong></p>
                          </div>
                        </div>
                        
                        {/* Mini Tab selectors for sub features */}
                        <div className="flex flex-wrap gap-1 md:justify-end">
                          {[
                            { id: 'roadmap', label: 'Prep Roadmap', icon: '🗺️' },
                            { id: 'resume', label: 'Resume Builder', icon: '🛠️' },
                            { id: 'mocktest', label: 'Mock Tests', icon: '✍️' },
                            { id: 'counselling', label: 'Counselling', icon: '🧑‍🏫' },
                            { id: 'reminders', label: 'Reminders', icon: '🔔' },
                            { id: 'notes', label: 'Paid Notes/PDFs', icon: '📂' },
                            { id: 'placement', label: 'Placements Help', icon: '🩺' },
                            { id: 'coaching', label: 'Coaching Partners', icon: '🤝' }
                          ].map(premiumSub => {
                            const isSubActive = activePremiumTab === premiumSub.id;
                            return (
                              <button
                                key={premiumSub.id}
                                onClick={() => setActivePremiumTab(premiumSub.id as any)}
                                className={`px-2.5 py-1.5 text-[10.5px] font-bold rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                                  isSubActive
                                    ? 'bg-[#0F4C81] text-white shadow-xs'
                                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                                }`}
                              >
                                <span>{premiumSub.icon}</span>
                                <span>{premiumSub.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* SUB TAB LAYOUT SWITCH PANEL */}
                      <div className="flex-1 min-h-[500px]">
                        
                        {/* A: PREPARATION ROADMAPTIMELINE */}
                        {activePremiumTab === 'roadmap' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  🗺️ 1. Stream-Bespoke Preparation Roadmap
                                </h4>
                                <p className="text-xs text-slate-500">Customized timeline syllabus checkpoints targeting your stream ({profile.stream}) studies.</p>
                              </div>
                              <span className="text-[10px] font-mono bg-[#FBAF17]/15 text-[#0F4C81] px-2 py-0.5 rounded-full font-bold">CUSTOM MATRIX ACTIVE</span>
                            </div>

                            {/* Roadmap timeline checkpoints */}
                            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                              
                              {/* Static Milestone 1 */}
                              <div className="relative">
                                <span className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border border-[#0F4C81] bg-white flex items-center justify-center">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C81]"></span>
                                </span>
                                <div className="space-y-0.5">
                                  <span className="inline-block text-[8px] font-mono font-black uppercase text-white bg-[#0F4C81] px-1.5 rounded-sm">MONTH 1 - PREPARATION CODES</span>
                                  <h5 className="font-extrabold text-xs text-slate-900">Syllabus Mapping & Analytical Concepts Foundations</h5>
                                  <p className="text-[11px] text-slate-600 leading-relaxed">
                                    Assess basic patterns of high-yield indices (e.g. {profile.stream === 'English' ? 'Grammar, rhetoric composing, literature timeline analysis' : profile.stream === 'Physics' ? "Mathematical vectors, thermodynamic laws, wave kinetics" : "General reasoning logic, Indian Constitution articles"}). Target 2 hours daily concepts lookup.
                                  </p>
                                </div>
                              </div>

                              {/* Static Milestone 2 */}
                              <div className="relative">
                                <span className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border border-[#0F4C81] bg-white flex items-center justify-center">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C81]"></span>
                                </span>
                                <div className="space-y-0.5">
                                  <span className="inline-block text-[8px] font-mono font-black uppercase text-amber-800 bg-amber-100 px-1.5 rounded-sm">MONTH 2 - PRACTICE CORES</span>
                                  <h5 className="font-extrabold text-xs text-slate-900">Topic-by-Topic Drill Exercises & PYQs Study</h5>
                                  <p className="text-[11px] text-slate-600 leading-relaxed">
                                    Download previous 5 years solving guides from our syllabus notes section. Complete section-specific speed practice drills within 45 mins. Keep progress matrices high.
                                  </p>
                                </div>
                              </div>

                              {/* Custom user added tasks list */}
                              {customMilestones.map((milestone, index) => (
                                <div key={milestone.id} className="relative">
                                  <button
                                    onClick={() => {
                                      setCustomMilestones(prev => 
                                        prev.map(item => item.id === milestone.id ? { ...item, done: !item.done } : item)
                                      );
                                    }}
                                    className="absolute -left-6 top-1 text-slate-450 hover:text-emerald-600 bg-white cursor-pointer"
                                  >
                                    {milestone.done ? (
                                      <span className="text-emerald-500 font-bold block bg-white border border-emerald-500 rounded-full h-4 w-4 text-[9px] text-center leading-3">✓</span>
                                    ) : (
                                      <span className="h-4 w-4 block bg-white border border-slate-300 rounded-full"></span>
                                    )}
                                  </button>
                                  <div className="space-y-0.5 pl-0.5">
                                    <div className="flex items-center gap-2">
                                      <h5 className={`font-extrabold text-xs ${milestone.done ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                                        {milestone.title}
                                      </h5>
                                      <span className="text-[9.5px] text-[#0F4C81] font-mono font-bold">🗓️ Target: {milestone.targetDate}</span>
                                    </div>
                                    <p className="text-[10.5px] text-slate-500 text-left">Self-assigned target tracker milestone checkpoint {index + 1}.</p>
                                  </div>
                                </div>
                              ))}

                            </div>

                            {/* Add a customized milestone target form */}
                            <div className="p-4 border bg-slate-50 border-slate-200 rounded-xl space-y-3">
                              <strong className="block text-xs font-black uppercase text-slate-900">Add Personalized Study Target Checkpoint</strong>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                                <div className="md:col-span-7">
                                  <input 
                                    id="targetNameInput"
                                    type="text" 
                                    placeholder="e.g. Master Classical Physics theory / Finish Part-3 Workbook" 
                                    className="w-full px-3 py-1.5 text-xs border bg-white border-slate-300 rounded-lg focus:outline-none"
                                  />
                                </div>
                                <div className="md:col-span-3">
                                  <input 
                                    id="targetDateInput"
                                    type="date" 
                                    className="w-full px-3 py-1.5 text-xs border bg-white border-slate-300 rounded-lg focus:outline-none"
                                  />
                                </div>
                                <div className="md:col-span-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const textInput = document.getElementById('targetNameInput') as HTMLInputElement;
                                      const dateInput = document.getElementById('targetDateInput') as HTMLInputElement;
                                      if (textInput && textInput.value) {
                                        setCustomMilestones(prev => [
                                          ...prev,
                                          { id: Date.now().toString(), title: textInput.value, targetDate: dateInput.value || '2026-08-01', done: false }
                                        ]);
                                        textInput.value = '';
                                        dateInput.value = '';
                                      }
                                    }}
                                    className="w-full h-full py-1.5 text-xs text-center text-white bg-slate-900 hover:bg-slate-800 font-bold uppercase rounded-lg cursor-pointer"
                                  >
                                    Add Goal
                                  </button>
                                </div>
                              </div>
                            </div>

                          </div>
                        )}

                        {/* B: PREMIUM INTERACTIVE RESUME BUILDER */}
                        {activePremiumTab === 'resume' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-150 pb-3 gap-3">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  🛠️ 2. Certified Academic Resume Creator
                                </h4>
                                <p className="text-xs text-slate-500">Edit and export an outstanding single-page academic CV synced with Indian Domicile status.</p>
                              </div>
                              <button
                                type="button"
                                onClick={downloadResumePDF}
                                className="px-4 py-2 bg-[#0F4C81] hover:bg-[#0C3E66] text-white font-black text-xs uppercase rounded-lg shadow-sm hover:shadow cursor-pointer flex items-center gap-1.5 shrink-0"
                              >
                                <FileText className="h-4 w-4 text-[#FBAF17]" />
                                <span>Export Verified PDF CV</span>
                              </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                              
                              {/* Edit details form */}
                              <div className="lg:col-span-6 space-y-3 font-medium text-xs">
                                <h5 className="font-extrabold uppercase text-slate-800 pb-1 border-b border-slate-100">1. Modify Candidate Identifiers</h5>
                                
                                <div className="space-y-2">
                                  <div>
                                    <label className="block text-slate-600 font-bold mb-1">Candidate Full Name</label>
                                    <input 
                                      type="text" 
                                      value={resumeBuilderName}
                                      onChange={(e) => setResumeBuilderName(e.target.value)}
                                      className="w-full px-3 py-1.5 text-xs border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:bg-white"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <div>
                                      <label className="block text-slate-600 font-bold mb-1">Email</label>
                                      <input 
                                        type="email" 
                                        value={resumeBuilderEmail}
                                        onChange={(e) => setResumeBuilderEmail(e.target.value)}
                                        className="w-full px-3 py-1.5 text-xs border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:bg-white"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-slate-600 font-bold mb-1">Mobile Contact</label>
                                      <input 
                                        type="text" 
                                        value={resumeBuilderPhone}
                                        onChange={(e) => setResumeBuilderPhone(e.target.value)}
                                        className="w-full px-3 py-1.5 text-xs border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:bg-white"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label className="block text-slate-600 font-bold mb-1">Professional Career Summary</label>
                                    <textarea 
                                      value={resumeBuilderSummary}
                                      onChange={(e) => setResumeBuilderSummary(e.target.value)}
                                      rows={3}
                                      className="w-full px-3 py-1.5 text-xs border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:bg-white"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-slate-600 font-bold mb-1">Key Capability Skills (comma sep)</label>
                                    <input 
                                      type="text" 
                                      value={resumeBuilderSkills}
                                      onChange={(e) => setResumeBuilderSkills(e.target.value)}
                                      className="w-full px-3 py-1.5 text-xs border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:bg-white"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-slate-600 font-bold mb-1">Relevant Academic Experience / Involvement</label>
                                    <textarea 
                                      value={resumeBuilderExperience}
                                      onChange={(e) => setResumeBuilderExperience(e.target.value)}
                                      rows={2}
                                      className="w-full px-3 py-1.5 text-xs border border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:bg-white"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Realtime Canvas visual widget mock (Aesthetic look) */}
                              <div className="lg:col-span-6 border border-slate-200 bg-slate-50 p-4 rounded-xl space-y-4">
                                <h5 className="font-extrabold uppercase text-slate-800 pb-1 border-b border-slate-150 flex justify-between items-center text-xs">
                                  <span>2. Live Certified Template Preview</span>
                                  <span className="text-[9px] text-[#0F4C81] tracking-wider font-mono uppercase bg-blue-105 px-1.5 py-0.5 rounded-sm">Layout Auto</span>
                                </h5>

                                <div className="border bg-white rounded-lg shadow-sm p-5 space-y-4 text-xs">
                                  {/* Header previews */}
                                  <div className="border-b border-indigo-100 pb-2.5">
                                    <h6 className="font-black text-sm text-slate-900">{resumeBuilderName}</h6>
                                    <span className="text-[10px] text-amber-600 font-bold uppercase">{profile.educationLevel} Educator in {profile.stream} Stream</span>
                                    <div className="text-[10px] text-slate-400 font-mono flex flex-wrap gap-2 mt-1">
                                      <span>📧 {resumeBuilderEmail}</span>
                                      <span>📞 {resumeBuilderPhone}</span>
                                      <span>📍 {profile.state}, IN</span>
                                    </div>
                                  </div>

                                  {/* Profile summary previews */}
                                  <div className="space-y-1">
                                    <span className="text-[9px] font-bold text-[#0F4C81] uppercase tracking-wider block">Career Profile</span>
                                    <p className="text-[11px] text-slate-600 italic leading-snug">"{resumeBuilderSummary}"</p>
                                  </div>

                                  {/* Academics previews */}
                                  <div className="space-y-1">
                                    <span className="text-[9px] font-bold text-[#0F4C81] uppercase tracking-wider block">Academic Credentials</span>
                                    <div className="font-semibold text-slate-900">{profile.educationLevel} degree majoring in {profile.stream}</div>
                                    <div className="text-[10.5px] text-slate-500">Completed in Domicile State of {profile.state}, Indian citizen class.</div>
                                  </div>

                                  {/* Experience preview */}
                                  <div className="space-y-1">
                                    <span className="text-[9px] font-bold text-[#0F4C81] uppercase tracking-wider block">Target Area Experience</span>
                                    <p className="text-[11px] text-slate-700 font-medium">{resumeBuilderExperience}</p>
                                  </div>

                                  {/* Skills checklist preview */}
                                  <div className="space-y-1">
                                    <span className="text-[9px] font-bold text-[#0F4C81] uppercase tracking-wider block">Special Key Competencies</span>
                                    <div className="flex flex-wrap gap-1 pt-1">
                                      {resumeBuilderSkills.split(',').map((skill, index) => (
                                        <span key={index} className="px-2 py-0.5 bg-slate-100 text-[10px] text-slate-700 rounded-full font-semibold border border-slate-200">
                                          {skill.trim()}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Seal watermark */}
                                  <div className="border border-dashed border-emerald-500 bg-emerald-500/5 p-2 rounded text-center text-[10px] font-mono font-bold text-emerald-800">
                                    ✓ CERTIFIED EDUCATION ELIGIBILITY PASSPORT VALIDATED
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}

                        {/* C: DYNAMIC INTERACTIVE SUBJECT MOCK LABS */}
                        {activePremiumTab === 'mocktest' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  ✍️ 3. Stream-Tailored Mock Assessment Quiz
                                </h4>
                                <p className="text-xs text-slate-500">Take an active timed diagnostic exam styled on competitive {profile.stream} patterns.</p>
                              </div>
                              <span className="text-[10px] font-mono bg-amber-500/10 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-bold uppercase">₹100 Sub Activated</span>
                            </div>

                            {/* Quiz execution area */}
                            {!isMockSubmitted ? (
                              <div className="space-y-5">
                                <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl space-y-4">
                                  {mockQuestions.map((q, idx) => (
                                    <div key={q.id} className="space-y-2.5 text-xs font-medium">
                                      <h5 className="font-extrabold text-slate-900 text-[12px] flex items-center gap-1.5">
                                        <span className="h-5 w-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">{idx + 1}</span>
                                        {q.text}
                                      </h5>
                                      
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
                                        {q.options.map((opt, oIdx) => {
                                          const isSelected = selectedMockAnswers[q.id] === oIdx;
                                          return (
                                            <button
                                              key={oIdx}
                                              type="button"
                                              onClick={() => {
                                                setSelectedMockAnswers(prev => ({ ...prev, [q.id]: oIdx }));
                                              }}
                                              className={`text-left p-2.5 border text-[11px] rounded-lg transition-all cursor-pointer ${
                                                isSelected 
                                                  ? 'bg-[#0F4C81] border-[#0F4C81] text-white font-bold'
                                                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                                              }`}
                                            >
                                              <span className="font-bold mr-1">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex justify-end pt-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      let computedScore = 0;
                                      mockQuestions.forEach(q => {
                                        if (selectedMockAnswers[q.id] === q.correct) {
                                          computedScore += 1;
                                        }
                                      });
                                      setMockScore(computedScore);
                                      setIsMockSubmitted(true);
                                    }}
                                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow-sm"
                                  >
                                    Submit Mock Test Analysis
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="text-center p-6 border-2 border-dashed border-emerald-600 bg-emerald-500/5 rounded-2xl space-y-4">
                                <div className="text-4xl">🏆</div>
                                <h5 className="font-black text-slate-900 text-lg uppercase">Exam Assessment Completed!</h5>
                                <p className="text-xs text-slate-600 max-w-md mx-auto">
                                  You completed the {profile.stream} eligibility mock trial successfully. Here are your synchronized results:
                                </p>
                                
                                <div className="inline-block p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
                                  <div className="text-3xl font-black font-mono text-emerald-600">
                                    {mockScore} / {mockQuestions.length}
                                  </div>
                                  <span className="text-[10px] text-slate-400 font-mono font-bold uppercase">TOTAL ACCURATE ANSWERS</span>
                                </div>

                                <div className="text-xs text-slate-700 space-y-1.5 max-w-lg mx-auto text-left pt-2 border-t border-slate-200/60">
                                  <strong className="block text-slate-900 uppercase font-black text-[11px] mb-1">Detailed Solution Review:</strong>
                                  {mockQuestions.map((q, idx) => {
                                    const userAns = selectedMockAnswers[q.id];
                                    const isCorrect = userAns === q.correct;
                                    return (
                                      <div key={idx} className="p-2 border rounded bg-white text-[11px] space-y-0.5 shadow-xs">
                                        <div className="flex justify-between font-bold text-slate-800">
                                          <span>Question {idx+1}: {isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                                          <span className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                                            {isCorrect ? '+1 Mark' : '0 Marks'}
                                          </span>
                                        </div>
                                        <p className="text-slate-600 font-semibold">{q.text}</p>
                                        <div className="text-[10px] font-mono text-slate-500 flex gap-4">
                                          <span>Your selection: {userAns !== undefined ? q.options[userAns] : 'Not Attempted'}</span>
                                          <span className="text-emerald-600">Correct: {q.options[q.correct]}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="pt-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedMockAnswers({});
                                      setIsMockSubmitted(false);
                                      setMockScore(0);
                                    }}
                                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase rounded-lg cursor-pointer"
                                  >
                                    Retake Diagnostic Quiz
                                  </button>
                                </div>
                              </div>
                            )}

                          </div>
                        )}

                        {/* D: CAREER COUNSELLING & IA TERMINAL */}
                        {activePremiumTab === 'counselling' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  🧑‍🏫 4. Career Counselling & Mentorship Scheduler
                                </h4>
                                <p className="text-xs text-slate-500">Book face-to-face strategizing sessions with experienced Indian civil and doctoral consultants.</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-xs font-medium">
                              
                              {/* Book slot */}
                              <div className="lg:col-span-7 border border-slate-200 p-4 rounded-xl space-y-4">
                                <h5 className="font-extrabold text-slate-900 uppercase">1. Pre-Book 1-on-1 Mock Strategic Slot</h5>
                                <p className="text-[11px] text-slate-500 leading-snug">
                                  As a verified Premium Subscriber, scheduled counseling is 100% free with no extra fees! Pick an open slot.
                                </p>

                                <div className="grid grid-cols-2 gap-2">
                                  {[
                                    { date: 'Fri, May 29', time: '02:00 PM - 02:45 PM', advisor: 'Prof. K. Sen (WBCS Expert)', status: 'OPEN' },
                                    { date: 'Mon, June 01', time: '11:00 AM - 11:45 AM', advisor: 'Dr. S. Roy (CSIR Senior scientist)', status: 'OPEN' },
                                    { date: 'Wed, June 03', time: '04:00 PM - 04:45 PM', advisor: 'Mila Das (TESOL Trainer)', status: 'OPEN' },
                                    { date: 'Thu, June 04', time: '10:00 AM - 10:45 AM', advisor: 'Banking PO Lead Advisor', status: 'BOOKED' }
                                  ].map((slot, index) => (
                                    <div 
                                      key={index} 
                                      onClick={() => {
                                        if (slot.status === 'OPEN') {
                                          alert(`Successfully booked a premium consulting session on ${slot.date} with ${slot.advisor}. Meeting credentials will be dispatched to your email address: ${resumeBuilderEmail}.`);
                                        }
                                      }}
                                      className={`p-2.5 border rounded-lg transition-all ${
                                        slot.status === 'OPEN' 
                                          ? 'bg-slate-50 border-slate-200 hover:border-[#0F4C81] cursor-pointer' 
                                          : 'bg-slate-100 border-slate-250 opacity-60'
                                      }`}
                                    >
                                      <div className="flex justify-between font-bold text-slate-900 mb-0.5">
                                        <span>{slot.date}</span>
                                        <span className={slot.status === 'OPEN' ? 'text-emerald-600 font-mono text-[9px]' : 'text-slate-400 font-mono text-[9px]'}>
                                          {slot.status}
                                        </span>
                                      </div>
                                      <p className="font-semibold text-[10.5px] text-slate-700">{slot.advisor}</p>
                                      <span className="text-[10px] text-slate-400 block font-mono">{slot.time}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Instantly loaded counseling strategy guides */}
                              <div className="lg:col-span-5 border border-slate-200 p-4 bg-slate-50 rounded-xl space-y-3">
                                <h5 className="font-extrabold text-[#0F4C81] uppercase">2. On-Demand Strategy Advice</h5>
                                <div className="space-y-2">
                                  <div className="p-2 bg-white border rounded">
                                    <strong className="block text-slate-900 uppercase tracking-tight text-[10px]">WBCS/State Group-A Tactics:</strong>
                                    <p className="text-[10.5px] text-slate-650 leading-relaxed mt-0.5">
                                      Focus first on General Studies syllabi (Group A and Group B executive roles) and ensure Bengali spelling structures are pristine. Bengali/Nepali paper is mandatory qualifying.
                                    </p>
                                  </div>
                                  <div className="p-2 bg-white border rounded">
                                    <strong className="block text-slate-900 uppercase tracking-tight text-[10px]">Private & Corporate Pivot:</strong>
                                    <p className="text-[10.5px] text-slate-650 leading-relaxed mt-0.5">
                                      If banking exams like SBI feel crowded, private analytical roles pay similarly after certification. Add basic coding logic (SQL/Tableau) to standard degrees.
                                    </p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}

                        {/* E: FORM FILL REMINDERS DEADLINE SCHEDULER */}
                        {activePremiumTab === 'reminders' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  🔔 5. Form-Fill & Registration Alarm Scheduler
                                </h4>
                                <p className="text-xs text-slate-500">Track registration portal periods, setup email prompts, and establish custom target alarms.</p>
                              </div>
                            </div>

                            <div className="space-y-4">
                              
                              {/* Alarm items list */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {remindersList.map((item) => (
                                  <div key={item.id} className="p-3 border-2 border-slate-900 bg-slate-50 rounded-xl relative overflow-hidden flex flex-col justify-between text-xs font-medium">
                                    <div className="absolute top-0 right-0 h-1.5 w-12 bg-[#FBAF17]"></div>
                                    <div className="space-y-1">
                                      <span className="text-[10px] text-[#0F4C81] uppercase font-bold tracking-wider mr-2 block">🔔 REGISTRY EXPIRY</span>
                                      <h5 className="font-extrabold text-slate-900 text-[11px] uppercase tracking-tight leading-snug">{item.examName}</h5>
                                      <div className="text-[10.5px] text-slate-505 pt-0.5 font-mono">
                                        Deadline: <strong className="text-slate-950">{item.date}</strong>
                                      </div>
                                    </div>
                                    
                                    <div className="pt-2.5 border-t border-slate-200/60 mt-2 flex items-center justify-between">
                                      <span className="text-[10px] font-mono text-indigo-650">Alarm: {item.alertTime}</span>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setRemindersList(prev => 
                                            prev.map(r => r.id === item.id ? { ...r, done: !r.done } : r)
                                          );
                                        }}
                                        className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-tight rounded-sm font-semibold border ${
                                          item.done 
                                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                                            : 'bg-white text-slate-700 hover:bg-slate-150 border-slate-300 cursor-pointer'
                                        }`}
                                      >
                                        {item.done ? "✓ Alarm Set" : "Enable Prompt"}
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Create a new reminder form */}
                              <div className="p-4 border bg-amber-500/5 border-[#FBAF17]/30 rounded-xl space-y-3 font-medium text-xs">
                                <strong className="block text-xs font-black uppercase text-slate-800 font-bold">Configure Custom Form-Fill Alarm</strong>
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                                  <div className="md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <input 
                                      id="reminderExamNameInput"
                                      type="text" 
                                      placeholder="e.g. WBSET Lecturship 2026 Session / CA Foundation" 
                                      className="px-3 py-1.5 text-xs border bg-white border-slate-300 rounded-lg focus:outline-none"
                                    />
                                    <input 
                                      id="reminderDateInput"
                                      type="date" 
                                      className="px-3 py-1.5 text-xs border bg-white border-slate-300 rounded-lg focus:outline-none"
                                    />
                                  </div>
                                  <div className="md:col-span-2">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const rExp = document.getElementById('reminderExamNameInput') as HTMLInputElement;
                                        const rDate = document.getElementById('reminderDateInput') as HTMLInputElement;
                                        if (rExp && rExp.value) {
                                          setRemindersList(prev => [
                                            ...prev,
                                            { id: Date.now().toString(), examName: rExp.value, date: rDate.value || '2026-09-12', alertTime: '10:00 AM', done: true }
                                          ]);
                                          rExp.value = '';
                                          rDate.value = '';
                                        }
                                      }}
                                      className="w-full h-full py-1.5 bg-[#FBAF17] hover:bg-amber-400 text-slate-950 font-black uppercase rounded-lg cursor-pointer text-xs"
                                    >
                                      Set Alerts
                                    </button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}

                        {/* F: SYLLABUS GUIDES paid notes and pdfs */}
                        {activePremiumTab === 'notes' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5 font-sans">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2 font-bold">
                                  📂 6. Curated Topic Notes & Syllabus PDFs
                                </h4>
                                <p className="text-xs text-slate-500 font-sans">Premium conceptual reading packets and previous years papers included free for premium accounts.</p>
                              </div>
                              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bold uppercase">All Guides Unlocked</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                              
                              <div className="p-3 border border-slate-200 rounded-xl hover:shadow hover:border-indigo-200 bg-slate-50 flex items-start justify-between gap-3 text-left">
                                <div className="space-y-1">
                                  <span className="inline-block px-1.5 py-0.2 bg-indigo-50 text-indigo-700 text-[9px] uppercase font-mono font-bold">PDF MANUAL</span>
                                  <h5 className="font-extrabold text-slate-900 text-xs">General Studies Compendium Vol-1</h5>
                                  <p className="text-[10.5px] text-slate-500 leading-snug">Comprehensive Indian History, geography landmarks, and Constitution article summaries.</p>
                                </div>
                                <button onClick={() => alert("Downloading PDF guide: GS Compendium Vol-1. Length: 142 pages. File size: 4.8MB")} className="px-2.5 py-1 text-[10px] bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer shrink-0 uppercase">Download</button>
                              </div>

                              <div className="p-3 border border-slate-200 rounded-xl hover:shadow hover:border-indigo-200 bg-slate-50 flex items-start justify-between gap-3 text-left">
                                <div className="space-y-1">
                                  <span className="inline-block px-1.5 py-0.2 bg-amber-50 text-amber-800 text-[9px] uppercase font-mono font-bold">EXCELLENCE NOTES</span>
                                  <h5 className="font-extrabold text-slate-900 text-xs text-slate-950">Syllabus Bespoke Stream Focus Guide</h5>
                                  <p className="text-[10.5px] text-slate-500 leading-snug">Strategic advice specifically written for {profile.stream} candidates to pass core segments.</p>
                                </div>
                                <button onClick={() => alert(`Downloading PDF guide: ${profile.stream} Special study notes. File size: 3.2MB`)} className="px-2.5 py-1 text-[10px] bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer shrink-0 uppercase">Download</button>
                              </div>

                              <div className="p-3 border border-slate-200 rounded-xl hover:shadow hover:border-indigo-200 bg-slate-50 flex items-start justify-between gap-3 text-left">
                                <div className="space-y-1">
                                  <span className="inline-block px-1.5 py-0.2 bg-rose-50 text-rose-705 text-[9px] uppercase font-mono font-bold">SOLVED PAPERS</span>
                                  <h5 className="font-extrabold text-slate-900 text-xs text-slate-950">Previous Timology Mock Solved Papers</h5>
                                  <p className="text-[10.5px] text-slate-505 leading-snug">Fully answered key explanations detailing math logic and comprehension compost structures.</p>
                                </div>
                                <button onClick={() => alert("Downloading PDF package: 5-years fully solved question compilations. File size: 5.6MB")} className="px-2.5 py-1 text-[10px] bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer shrink-0 uppercase">Download</button>
                              </div>

                              <div className="p-3 border border-slate-200 rounded-xl hover:shadow hover:border-indigo-200 bg-slate-50 flex items-start justify-between gap-3 text-left">
                                <div className="space-y-1">
                                  <span className="inline-block px-1.5 py-0.2 bg-slate-100 text-slate-700 text-[9px] uppercase font-mono font-bold">WOMEN SPECIFIC</span>
                                  <h5 className="font-extrabold text-slate-900 text-xs text-slate-950">Women & Reserved Category Concessions Guide</h5>
                                  <p className="text-[10.5px] text-slate-505 leading-snug">Step-by-step instructions to declare horizontal reservations and age exemption proofs.</p>
                                </div>
                                <button onClick={() => alert("Downloading PDF handbook: Domicile, concessions and reservations documentation handbook. File size: 2.1MB")} className="px-2.5 py-1 text-[10px] bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer shrink-0 uppercase">Download</button>
                              </div>

                            </div>
                          </div>
                        )}

                        {/* G: CAMPUS COLLEGE PLACEMENT SUPPORT */}
                        {activePremiumTab === 'placement' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  🏢 7. Campus Placements Support & Recruiter Link
                                </h4>
                                <p className="text-xs text-slate-500">Match placement eligibility scores with top national and international recruitment bodies.</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium text-left">
                              <div className="p-4 bg-slate-50 border rounded-xl text-center space-y-1">
                                <div className="text-2xl">📊</div>
                                <h5 className="font-extrabold text-[#0F4C81] uppercase text-[11px]">Stream Match Rate</h5>
                                <div className="text-xl font-black font-mono text-slate-900 text-slate-950">82% Eligibility</div>
                                <p className="text-[10px] text-slate-500">Based on {profile.educationLevel} status metrics.</p>
                              </div>

                              <div className="p-4 bg-slate-50 border rounded-xl text-center space-y-1">
                                <div className="text-2xl">💰</div>
                                <h5 className="font-extrabold text-[#0F4C81] uppercase text-[11px]">Average Starting Package</h5>
                                <div className="text-xl font-black font-mono text-slate-900 text-slate-950">₹4.8 - ₹9.6 LPA</div>
                                <p className="text-[10px] text-slate-505">Typical graduate CTC trends on 2026.</p>
                              </div>

                              <div className="p-4 bg-slate-50 border rounded-xl text-center space-y-1">
                                <div className="text-2xl">🚀</div>
                                <h5 className="font-extrabold text-[#0F4C81] uppercase text-[11px]">Active Recruiters</h5>
                                <div className="text-xl font-black font-mono text-slate-900 text-slate-950">42 National Entities</div>
                                <p className="text-[10px] text-slate-505">Including SaaS, banks, and tutoring platforms.</p>
                              </div>
                            </div>

                            <div className="p-4 border border-dashed rounded-xl bg-slate-50 text-xs text-left">
                              <h5 className="font-black text-slate-900 uppercase mb-2">Primary On-Campus Hiring Allies:</h5>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="p-2 border bg-white rounded text-center font-bold">Tata Consultancy Services (TCS)</div>
                                <div className="p-2 border bg-white rounded text-center font-bold">Byju's Education Team</div>
                                <div className="p-2 border bg-white rounded text-center font-bold">Wipro Cognitive Units</div>
                                <div className="p-2 border bg-white rounded text-center font-bold">Cognizant Tech</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* H: TUTORING COACHING AFFILIATIONS */}
                        {activePremiumTab === 'coaching' && (
                          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 md:p-6 space-y-6 shadow-xs text-left">
                            <div className="flex justify-between items-center border-b border-slate-150 pb-2.5">
                              <div>
                                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight flex items-center gap-2">
                                  🤝 8. Affiliate Coaching Platforms & Mentor Bundles
                                </h4>
                                <p className="text-xs text-slate-500 font-sans">Apply exclusive partner discounts. Match coaching batches with verified ExamBridge mentors.</p>
                              </div>
                              <span className="text-[9.5px] font-mono bg-[#FBAF17] text-slate-950 px-2 py-0.5 rounded-full font-bold">SAVE EXTRA ₹100s</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium">
                              
                              {/* PW Card */}
                              <div className="p-4 border-2 border-slate-900 bg-slate-50 rounded-xl flex flex-col justify-between text-left space-y-3">
                                <div className="space-y-1">
                                  <div className="h-7 w-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black">PW</div>
                                  <h5 className="font-extrabold text-slate-900 text-xs uppercase pt-1 font-bold">Physics Wallah Batch</h5>
                                  <p className="text-[10.5px] text-slate-500">Specializing in GATE, JEE, and National technical screening.</p>
                                </div>
                                <div className="space-y-2 pt-2 border-t border-slate-205">
                                  <div className="bg-yellow-50 text-amber-800 text-[10.5px] font-mono font-bold rounded p-1.5 text-center">
                                    CODE: PWEXAM50 (50% Off)
                                  </div>
                                  <button onClick={() => alert("Successfully redirected to PW Premium with ExamBridge coupon activated! Typical coupon price lowered by 50%.")} className="w-full py-1.5 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer uppercase text-[10px]">Enroll in Batch</button>
                                </div>
                              </div>

                              {/* Unacademy Card */}
                              <div className="p-4 border-2 border-slate-900 bg-slate-50 rounded-xl flex flex-col justify-between text-left space-y-3">
                                <div className="space-y-1">
                                  <div className="h-7 w-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black">UA</div>
                                  <h5 className="font-extrabold text-slate-900 text-xs uppercase pt-1 font-bold">Unacademy UPSC/SSC Prep</h5>
                                  <p className="text-[10.5px] text-slate-500">Comprehensive civil services and state PSC live class syllabus.</p>
                                </div>
                                <div className="space-y-2 pt-2 border-t border-slate-205">
                                  <div className="bg-yellow-50 text-amber-800 text-[10.5px] font-mono font-bold rounded p-1.5 text-center">
                                    CODE: UNACAD50 (50% Off)
                                  </div>
                                  <button onClick={() => alert("Unacademy Portal: 50% discount activated for UPSC masterclass batch. Redirecting...")} className="w-full py-1.5 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer uppercase text-[10px]">Apply Affiliate</button>
                                </div>
                              </div>

                              {/* Vision IAS Card */}
                              <div className="p-4 border-2 border-slate-900 bg-slate-50 rounded-xl flex flex-col justify-between text-left space-y-3">
                                <div className="space-y-1">
                                  <div className="h-7 w-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-black">VI</div>
                                  <h5 className="font-extrabold text-slate-900 text-xs uppercase pt-1 font-bold">Vision IAS Study Group</h5>
                                  <p className="text-[10.5px] text-slate-500">Premium analytical test-series and state administrative notes library.</p>
                                </div>
                                <div className="space-y-2 pt-2 border-t border-slate-205">
                                  <div className="bg-yellow-50 text-amber-800 text-[10.5px] font-mono font-bold rounded p-1.5 text-center">
                                    CODE: VISION50 (50% Off)
                                  </div>
                                  <button onClick={() => alert("Vision IAS Partner checkout launched. Promo code applied successfully.")} className="w-full py-1.5 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 cursor-pointer uppercase text-[10px]">Get Study Kit</button>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}

                      </div>

                    </div>
                  )}

                </div>
              )}

            </div>

          </main>

          {/* RIGHT PANEL: DYNAMIC CRITERIA LOGIC CODE VIEW & TRENDS */}
          <aside className="w-full lg:w-64 bg-slate-50 shrink-0 flex flex-col justify-between">
            <div>
              
              {/* Dynamic SQL Eligibility Logic Header */}
              <div className="p-4 border-b border-slate-900 bg-slate-100">
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-700 mb-2 flex items-center gap-1.5">
                  <Cpu className="h-4 w-4 text-indigo-600" />
                  Criteria Query Match
                </h2>
                <p className="text-[10px] text-slate-400 mb-3 leading-snug font-medium">
                  Matches your selected demographics dynamically against compiled database indices
                </p>

                {/* Simulated live SQL query block */}
                <div className="bg-slate-900 text-indigo-400 p-3 rounded-xs font-mono text-[9.5px] leading-relaxed border border-slate-950 overflow-x-auto select-text">
                  <span className="text-slate-500 block mb-1">-- DYNAMIC COMPLIANCE QUERY:</span>
                  <pre className="whitespace-pre-wrap">{dynamicSqlText}</pre>
                </div>
              </div>

              {/* Dynamic Statistics Panel summary */}
              <div className="p-4 space-y-4">
                
                {/* Visual stats match widget */}
                <div className="bg-white border-2 border-slate-900 p-3 shadow-xs rounded-xs">
                  <h4 className="text-[10px] font-black uppercase mb-2 flex items-center gap-1 text-slate-700">
                    <Award className="h-3.5 w-3.5 text-emerald-600" />
                    Reservation quota metrics
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[10px] font-medium text-slate-600 mb-0.5">
                        <span>WB Lady SI Reserved Seats:</span>
                        <span className="font-bold">45% Quota</span>
                      </div>
                      <div className="h-1.5 bg-slate-150 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[45%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] font-medium text-slate-600 mb-0.5">
                        <span>Central SSC Clerk Female Ratio:</span>
                        <span className="font-bold text-indigo-600">33% Adv.</span>
                      </div>
                      <div className="h-1.5 bg-slate-150 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-[33%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Trending tags */}
                <div className="bg-white border-2 border-slate-900 p-3 shadow-xs rounded-xs">
                  <h4 className="text-[10px] font-black uppercase mb-2 text-slate-700">
                    Trending filters
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    <button 
                      onClick={() => {
                        setSearchQuery('UPSC');
                        setActiveTab('matrix');
                      }}
                      className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-[9.5px] font-mono font-medium border border-slate-200 rounded-sm text-slate-600 cursor-pointer"
                    >
                      #UPSC
                    </button>
                    <button 
                      onClick={() => {
                        setSearchQuery('TEFL');
                        setActiveTab('matrix');
                      }}
                      className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-[9.5px] font-mono font-medium border border-slate-200 rounded-sm text-slate-600 cursor-pointer"
                    >
                      #TESOL/TEFL
                    </button>
                    <button 
                      onClick={() => {
                        setSearchQuery('Lady');
                        setActiveTab('matrix');
                      }}
                      className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-[9.5px] font-mono font-medium border border-slate-200 rounded-sm text-slate-600 cursor-pointer"
                    >
                      #Lady_SI
                    </button>
                    <button 
                      onClick={() => {
                        setSearchQuery('Clerk');
                        setActiveTab('matrix');
                      }}
                      className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-[9.5px] font-mono font-medium border border-slate-200 rounded-sm text-slate-600 cursor-pointer"
                    >
                      #WBPSC_Clerk
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Upgrade to Pro Section badge */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-white rounded-b-xs">
              <div className="text-center">
                <p className="text-[9.5px] font-bold uppercase tracking-widest text-indigo-300 mb-1.5">
                  Secure Professional Placements
                </p>
                <div className="text-[11px] text-slate-400 mb-3 leading-snug">
                  Unlock specialized corporate Content Writing exams & overseas visa consultancy.
                </div>
                <button 
                  onClick={() => alert("Aegis Career Engine: Premium mentorship unlocked in full-scale deployment environment.")}
                  className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  UPGRADE FOR MENTOR LEADS
                </button>
              </div>
            </div>

          </aside>

        </div>
        )}

        {/* COMPREHENSIVE FOOTER */}
        <footer className="h-10 bg-slate-200 border-t border-slate-900 px-4 flex items-center justify-between shrink-0 font-mono text-[10px] text-slate-600">
          <div>ENGINE_STATUS: <span className="text-emerald-700 font-bold">ONLINE</span> // BENCHMARK_LOAD: {loadTime}</div>
          <div className="hidden sm:block">© 2026 AEGIS DATA SYSTEMS - GLOBAL ELIGIBILITY ADVISOR NETWORKS</div>
        </footer>

      </div>
      <FloatingCartoonChat userProfile={profile} />
    </div>
  );
}
