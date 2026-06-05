/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExamOpportunity } from '../types';

export const EXAMS_DATA: ExamOpportunity[] = [
  {
    id: 'wbcs-psc',
    name: 'West Bengal Civil Service (WBCS) Executive Exam',
    conductingBody: 'West Bengal Public Service Commission (WBPSC)',
    region: 'State',
    state: 'West Bengal',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 36,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 210,
      women: 210, // General category pays full fee, but SC/ST/PwD of WB are exempted
      scStPwD: 0
    },
    womenReservationsDetails: 'Horizontal reservation policies apply for various vacancies. Age relaxation up to 5 years for SC/ST and 3 years for OBC candidates of West Bengal applies across all genders.',
    description: 'The premier competitive civil service exam for recruitment to the administrative services, revenue services, and police services of West Bengal (Group A, B, C, D posts).',
    officialUrl: 'https://psc.wb.gov.in',
    keyHighlights: [
      'High-level State Administrative roles',
      'Requires Bengali/Nepali speaking, reading, and writing ability',
      'Multi-tier exam: Preliminary, Mains, and Personality Test'
    ]
  },
  {
    id: 'wbpsc-clerk',
    name: 'WBPSC Clerkship Examination',
    conductingBody: 'West Bengal Public Service Commission (WBPSC)',
    region: 'State',
    state: 'West Bengal',
    examType: 'Govt Job / Service',
    minAge: 18,
    maxAge: 40,
    genderAllowed: 'All',
    requiredLevel: '10th',
    requiredStreams: ['All'],
    fee: {
      standard: 110,
      women: 110,
      scStPwD: 0
    },
    womenReservationsDetails: 'Secures clerical, lower division assistant (LDA), and administrative support seats throughout state secretariats and district offices under WB government.',
    description: 'Entry-level clerical exam recruiting candidates for public state bodies and directorate offices in West Bengal, requiring basic computer knowledge and typing competency.',
    officialUrl: 'https://psc.wb.gov.in',
    keyHighlights: [
      'Excellent entry-level government job directly after 10th standard',
      'Computer typing skill test (20 wpm in English / 10 wpm in Bengali)',
      'High age limit of 40 years'
    ]
  },
  {
    id: 'wbtet-primary',
    name: 'West Bengal Teacher Eligibility Test (WB-TET)',
    conductingBody: 'West Bengal Board of Primary Education (WBBPE)',
    region: 'State',
    state: 'West Bengal',
    examType: 'Govt Job / Service',
    minAge: 18,
    maxAge: 40,
    genderAllowed: 'All',
    requiredLevel: 'Graduate', // Typically Graduate or 12th + D.El.Ed / B.Ed
    requiredStreams: ['All', 'Arts', 'Science', 'English', 'Physics'],
    fee: {
      standard: 500,
      women: 500,
      scStPwD: 250
    },
    womenReservationsDetails: 'Excellent work-life balance role, frequently featuring a substantial ratio of female teacher recruitments. Fee relaxations of 50% for SC/ST/OBC-A/OBC-B/differently-abled categories.',
    description: 'Mandatory qualifying test for candidates desiring recruitment as primary school teachers (Classes I to V) in West Bengal government-aided and government-sponsored primary schools.',
    officialUrl: 'https://www.wbbpeonline.com',
    keyHighlights: [
      'Requires professional educator qualification (D.El.Ed or eligible certification)',
      'State-mandated teacher qualification matrix',
      'High general age limit up to 40'
    ]
  },
  {
    id: 'wb-police-si',
    name: 'West Bengal Police Sub-Inspector/Lady Sub-Inspector Exam',
    conductingBody: 'West Bengal Police Recruitment Board (WBPRB)',
    region: 'State',
    state: 'West Bengal',
    examType: 'Govt Job / Service',
    minAge: 20,
    maxAge: 27,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All'],
    fee: {
      standard: 270,
      women: 270,
      scStPwD: 20
    },
    womenReservationsDetails: 'Specialized "Lady Sub-Inspector" category has reserved vacancies to encourage female representation in the West Bengal Police Force.',
    physicalStandardsRequired: 'Male: Height 167cm, Weight 56kg, Chest 79-84cm. Female (Lady SI): Height 160cm, Weight 48kg. Race: Male (800m in 3 min), Female (400m in 2 min).',
    description: 'Dynamic administrative law enforcement exam with specific physical stamina testing and computer literacy assessments.',
    officialUrl: 'https://prb.wb.gov.in',
    keyHighlights: [
      'Dedicated positions exclusively for female candidates (Lady SI)',
      'Substantial physical test (PET/PMT) benchmarks',
      'Age limit up to 27 with standard category relaxations'
    ]
  },
  {
    id: 'upsc-cse',
    name: 'Civil Services Examination (UPSC CSE)',
    conductingBody: 'Union Public Service Commission (UPSC)',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 32,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English', 'Physics'],
    fee: {
      standard: 100,
      women: 0, // Fee fully exempt for all female candidates!
      scStPwD: 0 // Fee fully exempt
    },
    womenReservationsDetails: 'Application fees are Rs. 0 for ALL Female candidates. Government actively prompts female applicants to enhance gender balance in public administration.',
    description: 'The topmost national competitive civil service exam in India, recruiting officials for the Indian Administrative Service (IAS), Indian Foreign Service (IFS), Indian Police Service (IPS), and other premium Group A services.',
    officialUrl: 'https://upsc.gov.in',
    keyHighlights: [
      'Completely FREE application for all women applicants',
      'Gateway to the highest administrative offices in India',
      'Exceedingly rigorous trial consisting of Preliminary, Main Exam, and Panel Interview'
    ]
  },
  {
    id: 'ssc-cgl',
    name: 'SSC Combined Graduate Level (CGL) Exam',
    conductingBody: 'Staff Selection Commission (SSC)',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 18,
    maxAge: 32,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English', 'Physics'],
    fee: {
      standard: 100,
      women: 0, // FEE EXEMPT
      scStPwD: 0 // FEE EXEMPT
    },
    womenReservationsDetails: 'FEE IS RS. 0 FOR ALL FEMALE CANDIDATES! Horizontal reservations and structural support mechanisms for single women and mothers are active in multiple key ministerial desk roles (CSS, MEA).',
    description: 'Recruits officers for non-gazetted group B and C administrative posts under central ministries, the Income Tax department, Excise department, CBI, and audit offices.',
    officialUrl: 'https://ssc.gov.in',
    keyHighlights: [
      'Fee: Absolutely Free (Rs. 0) for female applicants',
      'Prestigious desk and Inspector ranks (Excise, Income Tax, MEA Assistant)',
      'Purely objective computer-based tests (Tier I & Tier II)'
    ]
  },
  {
    id: 'upsc-cds',
    name: 'Combined Defence Services (CDS) Examination',
    conductingBody: 'Union Public Service Commission (UPSC)',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 19,
    maxAge: 25,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Science', 'Engineering', 'English', 'Physics'],
    fee: {
      standard: 200,
      women: 0, // FEE EXEMPT FOR WOMEN!
      scStPwD: 0 // SC/ST Exempt
    },
    womenReservationsDetails: 'Female candidates are eligible for the Officers Training Academy (OTA) Chennai, leading to Short Service Commission officers (SSC) eligibility. Fee is Rs. 0 for all women.',
    physicalStandardsRequired: 'Strict military conditioning applies. Standard Male Height: 157.5cm. Standard Female Height: 152cm. Eye standards, body weight metrics apply.',
    description: 'Premium officer recruitment for the Indian Army, Navy, Air Force, and Officers Training Academy. Graduates can join as military commissioned executives.',
    officialUrl: 'https://upsc.gov.in',
    keyHighlights: [
      'Application is fully FREE (Rs. 0) for ladies',
      'Exclusive slots inside Officers Training Academy (OTA - Non-Technical) for women',
      'Requires clearing SSB (Services Selection Board) physical, psychological testing'
    ]
  },
  {
    id: 'un-ypp',
    name: 'United Nations Young Professionals Programme (YPP)',
    conductingBody: 'United Nations Secretariat',
    region: 'Global',
    examType: 'International Career',
    minAge: 18,
    maxAge: 32,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English', 'Physics'],
    fee: {
      standard: 0, // Entirely free for candidate citizens of participating member states
      women: 0,
      scStPwD: 0
    },
    womenReservationsDetails: 'The UN is firmly committed to regional parity and 50/50 gender balance across general and professional staffing scales. Highly supportive conditions for international female diplomats.',
    description: 'A global recruitment initiative designed to attract outstanding junior professional officers to join the UN Secretariat. Participating countries change yearly.',
    officialUrl: 'https://careers.un.org',
    keyHighlights: [
      'Build a direct career as an international diplomat or administrator at the UN',
      'No fees whatsoever for verified citizens of participating states',
      'Requires fluent professional fluency in English or French'
    ]
  },
  {
    id: 'tefl-cert',
    name: 'TEFL / TESOL Certification & Opportunity Program',
    conductingBody: 'World TEFL Authority & International Accrediting Bodies',
    region: 'Global',
    examType: 'Global Tech/SaaS Cert',
    minAge: 18,
    maxAge: 75,
    genderAllowed: 'All',
    requiredLevel: '12th', // Higher Secondary is enough; Graduate expands standard packages greatly
    requiredStreams: ['All', 'English', 'Arts'],
    fee: {
      standard: 15000, // Approximate cost of a 120-hour accredited TEFL certification course
      women: 15000,
      scStPwD: 15000
    },
    womenReservationsDetails: 'Widely balanced international teaching schools offer comprehensive transport allowances, private accommodation support, and safe-campus benefits specifically targeting global recruits.',
    description: 'International standard teaching qualification allowing holders to legally teach English as a foreign language in schools, institutes, or corporations globally (Japan EPIK/JET, South Korea, EU, Costa Rica, Saudi Arabia).',
    officialUrl: 'https://www.tefl.org',
    keyHighlights: [
      'Highly lucrative global teaching option, particularly suited to English majors',
      'Guarantees working visa support in countries like Japan, South Korea, China, Vietnam, Spain',
      'Very interactive, standard 120-hour self-paced validation coursework'
    ]
  },
  {
    id: 'ielts-academic',
    name: 'IELTS Academic / General Training Exam',
    conductingBody: 'IDP Education / Cambridge Assessment English',
    region: 'Global',
    examType: 'Language & Study Visa',
    minAge: 16,
    maxAge: 99,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'English', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'Physics'],
    fee: {
      standard: 17000, // Regular fees for standard computerized test
      women: 17000,
      scStPwD: 17000
    },
    womenReservationsDetails: 'No direct gender concessions are provided by standard administrative bodies, but score sheets are key to obtaining prestigious female research fellowships abroad (such as British Council Women in STEM).',
    description: 'Globally recognized language certification verifying auditory, verbal, structural, and reading English proficiency. Prerequisite for visas, foreign master studies, and international corporate hiring schemes.',
    officialUrl: 'https://www.ielts.org',
    keyHighlights: [
      'Absolute prerequisite for visa migration (Canada PR, UK, Australia, EU)',
      'British Council Scholarships offer specialized options for ladies and researchers',
      'Valid for 2 entire years after certificates publish'
    ]
  },
  {
    id: 'gate-exam',
    name: 'Graduate Aptitude Test in Engineering (GATE)',
    conductingBody: 'Indian Institute of Technology (IITs / IISc)',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 20,
    maxAge: 99, // No age limit
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['Engineering', 'Science', 'Physics', 'Arts'], // Expanded to Arts/Humanities in recent years
    fee: {
      standard: 1800,
      women: 900, // 50% discount for female candidates!
      scStPwD: 900
    },
    womenReservationsDetails: 'FEE IS DISCOUNTED BY 50% FOR ALL WOMEN (Rs. 900 instead of Rs. 1800). Prompts active registration in STEM research. Provides a base for women-only research grants in premium IIT structures.',
    description: 'National-level screening exam for postgraduate admissions (M.Tech, M.S, Ph.D) and recruitment in Public Sector Undertakings (PSUs - ONGC, NTPC, IOCL) inside India.',
    officialUrl: 'https://gate2026.iit.edu',
    keyHighlights: [
      '50% Fee exemption for women applicants',
      'Direct gateway to top PSUs and monthly research stipends of Rs. 12,400 to Rs. 35,000',
      'Allows switching from basic science to state-of-the-art engineering research'
    ]
  },
  {
    id: 'drdo-scientist',
    name: 'DRDO Scientist \'B\' Engineering Recruitment',
    conductingBody: 'Defence Research and Development Organisation (DRDO) RAC',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 30,
    genderAllowed: 'All',
    requiredLevel: 'B.Tech',
    requiredStreams: ['Engineering'],
    fee: {
      standard: 100,
      women: 0, // Female applicants are completely exempt
      scStPwD: 0
    },
    womenReservationsDetails: 'Application fee is Rs. 0 for female candidates. Supported maternity policies and secure central research center assignments apply for selected female scientists.',
    description: 'Direct recruitment for scientific entry-level roles across India\'s defense research labs (R&D in Avionics, Computing, Systems, and AI). Evaluates GATE scores and descriptive tests.',
    officialUrl: 'https://rac.gov.in',
    keyHighlights: [
      'Gazetted Group \'A\' Defence R&D Post',
      'Requires B.Tech degree or equivalent engineering credentials',
      'High starting scale with comprehensive housing and global research linkages'
    ]
  },
  {
    id: 'csir-fellow',
    name: 'CSIR Research Associateship & Senior Fellowship',
    conductingBody: 'Council of Scientific and Industrial Research (CSIR) HRDG',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 40,
    genderAllowed: 'All',
    requiredLevel: 'Doctor Degree',
    requiredStreams: ['Science', 'Engineering', 'Medical', 'Physics'],
    fee: {
      standard: 500,
      women: 0,
      scStPwD: 125
    },
    womenReservationsDetails: 'Age relaxation up to 5 years for women. Special CSIR fellowships for women with break-in-carrier tracks promote outstanding female researchers returning to science.',
    description: 'Premier national defense and civilian technology research fellowship and associateship scheme catering to doctorate and post-doctoral scholars across national CSIR laboratories.',
    officialUrl: 'https://csirhrdg.res.in',
    keyHighlights: [
      'Excellent opportunity targeting PhD and Doctor Degree status holders',
      'Monthly scholarship/stipend ranges up to Rs. 58,000 + HRA allowances',
      'Allows working in pioneer laboratories with specialized scientific equipment'
    ]
  },
  {
    id: 'ugc-net',
    name: 'UGC NET (National Eligibility Test) for Lectureship & JRF',
    conductingBody: 'National Testing Agency (NTA)',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 19,
    maxAge: 30, // For JRF (30), Assistant Professor has no upper limit
    genderAllowed: 'All',
    requiredLevel: 'Post-Grad',
    requiredStreams: ['Arts', 'English', 'Commerce', 'Science'],
    fee: {
      standard: 1150,
      women: 600, // Reduced fee for women
      scStPwD: 325
    },
    womenReservationsDetails: 'Transgender and female applicants receive a 50% discount on submission fees. 5 years age relaxation applies for female applicants targeting the Junior Research Fellowship (JRF).',
    description: 'Determines eligibility for lectureship/assistant professorships and Junior Research Fellowships in Indian universities, covering literature, humanities, and social sciences.',
    officialUrl: 'https://ugcnet.nta.nic.in',
    keyHighlights: [
      'No upper age limit for applying to Assistant Professor posts',
      'Essential for securing permanent teaching roles in state & central institutions',
      'JRF scholarship offers Rs. 37,000 + HRA monthly for academic pursuits'
    ]
  },
  {
    id: 'sbi-po',
    name: 'SBI Probationary Officer (PO) Examination',
    conductingBody: 'State Bank of India (SBI)',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 30,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'English', 'Physics'],
    fee: {
      standard: 750,
      women: 750,
      scStPwD: 0
    },
    womenReservationsDetails: 'Horizontal reservations and safety guidelines inside branch networks apply. Paid maternity leaves of 180 days and child education leave extensions are highly protective.',
    description: 'Recruits officers to execute managerial operations inside India\'s largest national public-sector banking network, managing cash flow, investments, and customer credit portfolios.',
    officialUrl: 'https://sbi.co.in/web/careers',
    keyHighlights: [
      'Prestigious desk-oriented and executive-level banking career path',
      'Fully computerized selection model: Prelims, Mains, and Group Exercises/Interview',
      'SC, ST, and PwD candidates pay zero application fee'
    ]
  },
  {
    id: 'csir-net',
    name: 'Joint CSIR-UGC NET for Chemical & Physical Sciences',
    conductingBody: 'National Testing Agency (NTA)',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 18,
    maxAge: 28, // 28 for JRF, Assistant Professor has no limit
    genderAllowed: 'All',
    requiredLevel: 'Post-Grad',
    requiredStreams: ['Science', 'Physics', 'Engineering'],
    fee: {
      standard: 1100,
      women: 550, // 50% discount for female applicants
      scStPwD: 275
    },
    womenReservationsDetails: 'Female candidates get a direct 50% discount on assessment fees and benefit from 5 years age relaxation for JRF eligibility.',
    description: 'Comprehensive screening for lectureship and JRF positions across physical, mathematical, chemical, and life sciences portfolios in leading national research units.',
    officialUrl: 'https://csirnet.nta.nic.in',
    keyHighlights: [
      'Mandatory qualification for science lectureship positions in state universities',
      'Access to pioneering state-of-the-art research funding structures',
      'Direct pathway to join premier CSIR and IISc research teams'
    ]
  },
  {
    id: 'clat-exam',
    name: 'Common Law Admission Test (CLAT UG / PG)',
    conductingBody: 'Consortium of National Law Universities',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 16,
    maxAge: 99, // No limit
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Arts', 'Commerce', 'Science', 'English'],
    fee: {
      standard: 4000,
      women: 4000,
      scStPwD: 3500
    },
    womenReservationsDetails: 'Highly active gender diversity scholarships. National Law Universities preserve dedicated supernumerary seats for biological women to promote diverse legal representation.',
    description: 'The sole centralized entrance criteria for obtaining highly integrated 5-year B.A. LL.B (Hons) or specialized postgraduate LL.M memberships across 24 leading Indian law institutions.',
    officialUrl: 'https://consortiumofnlus.ac.in',
    keyHighlights: [
      'No upper age limit to pursue legal careers',
      'Prerequisite for highly lucrative legal fellowships, judiciary, and corporate law sectors',
      'Evaluates verbal reasoning, English comprehension, and general logic skills'
    ]
  },
  {
    id: 'isro-scientist',
    name: 'ISRO Scientist/Engineer \'SC\' Recruitment Exam',
    conductingBody: 'Indian Space Research Organisation (ISRO) ICRB',
    region: 'National',
    examType: 'Govt Job / Service',
    minAge: 18,
    maxAge: 35,
    genderAllowed: 'All',
    requiredLevel: 'B.Tech',
    requiredStreams: ['Engineering'],
    fee: {
      standard: 250,
      women: 0, // Fee fully exempt for women
      scStPwD: 0 // Fee fully exempt for SC/ST/PwD
    },
    womenReservationsDetails: 'All female candidates are completely exempt from paying charges. Supported professional space research facilities with in-house nursery care and transportation are guaranteed.',
    description: 'National recruitment targeting mechanical, electronics, computer science, and aeronautical engineers to build aerospace systems, rockets, satellites, and lunar rovers.',
    officialUrl: 'https://www.isro.gov.in/Careers',
    keyHighlights: [
      'Outstanding, patriotic space science career directly following engineering graduation',
      'No fees for female applicants whatsoever',
      'Intense testing based on physical and digital engineering core concepts'
    ]
  },
  {
    id: 'neet-pg',
    name: 'National Eligibility cum Entrance Test (NEET PG)',
    conductingBody: 'National Board of Examinations (NBE)',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 21,
    maxAge: 99,
    genderAllowed: 'All',
    requiredLevel: 'Doctor Degree', // MBBS required
    requiredStreams: ['Medical'],
    fee: {
      standard: 4250,
      women: 4250,
      scStPwD: 3250
    },
    womenReservationsDetails: 'Specific medical institutions offer specialized healthcare research fellowships targeting female medical specialists.',
    description: 'The mandatory national examination required for medical graduates to specialize and secure MD/MS/PG Diploma seats in medical institutions inside India.',
    officialUrl: 'https://natboard.edu.in',
    keyHighlights: [
      'Mandatory qualification for medical specialization across India',
      'Direct pathway to specialized clinical practice in public & private hospitals',
      'Fascinating clinical and non-clinical specialization modules'
    ]
  },
  {
    id: 'appsc-group1',
    name: 'Andhra Pradesh PSC Group I Services Exam',
    conductingBody: 'Andhra Pradesh Public Service Commission (APPSC)',
    region: 'State',
    state: 'Andhra Pradesh',
    examType: 'Govt Job / Service',
    minAge: 18,
    maxAge: 42,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 250,
      women: 250,
      scStPwD: 0
    },
    womenReservationsDetails: 'Horizontal 33.3% reservation active for women candidates. Standard age relaxations up to 5 years for SC/ST and OBC candidates of AP are provided.',
    description: 'Premier state civil service exam for recruitment of Deputy Collectors, DSPs, Commercial Tax Officers, and Regional Transport Officers in Andhra Pradesh.',
    officialUrl: 'https://psc.ap.gov.in',
    keyHighlights: [
      'High-level State Executive positions',
      'Requires ability to read and write Telugu script',
      'Three stages: Preliminary Screening, Descriptive Written Mains, and Interview'
    ]
  },
  {
    id: 'apsc-cce',
    name: 'Assam PSC Combined Competitive Examination (CCE)',
    conductingBody: 'Assam Public Service Commission (APSC)',
    region: 'State',
    state: 'Assam',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 38,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 297,
      women: 197, // Discounted for women
      scStPwD: 197
    },
    womenReservationsDetails: 'Specialized 33% horizontal reservation for women in all state cadres under government policies.',
    description: 'State administrative entrance recruiting candidates for Assam Civil Service, Assam Police Service, and taxing administrations.',
    officialUrl: 'https://apsc.nic.in',
    keyHighlights: [
      'Prestigious administrative and police inspector roles in Assam',
      'Tests knowledge on North-East India history and regional cultures',
      'Features high maximum general age limit of 38 years'
    ]
  },
  {
    id: 'bpsc-cce',
    name: 'Bihar PSC Combined Competitive Examination (CCE)',
    conductingBody: 'Bihar Public Service Commission (BPSC)',
    region: 'State',
    state: 'Bihar',
    examType: 'Govt Job / Service',
    minAge: 20,
    maxAge: 37,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 600,
      women: 150, // Huge concession for Bihar domicile female candidates!
      scStPwD: 150
    },
    womenReservationsDetails: 'Bihar offers a stellar 35% horizontal reservation for women across all competitive state jobs. Bihar domicile females pay just Rs. 150 fee.',
    description: 'Extremely popular civil service exam recruiting Deputy Collectors, DSPs, Block Development Officers, and Bihar Administrative Service officers.',
    officialUrl: 'https://bpsc.bih.nic.in',
    keyHighlights: [
      '35% direct quota reservation for women candidates',
      'Substantial career growth and prestigious local postings',
      'Includes preliminary MCQ screening followed by qualitative written papers'
    ]
  },
  {
    id: 'dsssb-primary',
    name: 'Delhi DSSSB Primary Teacher & Admin Exam',
    conductingBody: 'Delhi Subordinate Services Selection Board (DSSSB)',
    region: 'State',
    state: 'Delhi',
    examType: 'Govt Job / Service',
    minAge: 18,
    maxAge: 30,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'English', 'Commerce'],
    fee: {
      standard: 100,
      women: 0, // FEE EXEMPT FOR ALL WOMEN
      scStPwD: 0
    },
    womenReservationsDetails: 'Application fee is Rs. 0 for all women candidates of any category! Additional contract extension allowances for female educators apply.',
    description: 'Filing administrative, clerical, and primary educative instructor posts across the National Capital Territory (NCT) of Delhi schools and municipals.',
    officialUrl: 'https://dsssbonline.nic.in',
    keyHighlights: [
      'Rs. 0 Application fee for all women candidates',
      'Central pay benefits and urban metropolitan postings inside NCT Delhi',
      'Purely objective single/two-tier online computer test model'
    ]
  },
  {
    id: 'gpsc-class12',
    name: 'Gujarat PSC Class 1 & 2 Administrative Exam',
    conductingBody: 'Gujarat Public Service Commission (GPSC)',
    region: 'State',
    state: 'Gujarat',
    examType: 'Govt Job / Service',
    minAge: 20,
    maxAge: 35,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 100,
      women: 0, // Fee Exempt for women candidates
      scStPwD: 0
    },
    womenReservationsDetails: '33% horizontal reservation allocated to female candidates under state administration codes. No fees for all women.',
    description: 'Gujarat premier state recruitment for Deputy Collectors, DySP, District Registrar, and Administrative Officers under State Secretariat.',
    officialUrl: 'https://gpsc.gujarat.gov.in',
    keyHighlights: [
      'Nil application fees for all female applicants',
      'Requires proficiency in Gujarati/Hindi languages',
      'Strongly structured and highly predictable yearly exam calendar'
    ]
  },
  {
    id: 'kpsc-kas',
    name: 'Karnataka Gazetted Probationers (KAS) Exam',
    conductingBody: 'Karnataka Public Service Commission (KPSC)',
    region: 'State',
    state: 'Karnataka',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 35,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 600,
      women: 600,
      scStPwD: 0
    },
    womenReservationsDetails: '30% reservation inside general and vertical categories designated exclusively for female candidates to boost administration gender ratios.',
    description: 'State wide competitive entry recruiting Assistant Commissioners, DSPs, and Assistant Commissioners of Commercial Taxes.',
    officialUrl: 'https://kpsc.kar.nic.in',
    keyHighlights: [
      'Karnataka premier government leadership cadre',
      'Compulsory papers in English and Kannada scripts',
      'Exotic postings across major educational and economic hubs of Karnataka'
    ]
  },
  {
    id: 'kerala-kas',
    name: 'Kerala Administrative Service (KAS) Officer Exam',
    conductingBody: 'Kerala Public Service Commission (KPSC)',
    region: 'State',
    state: 'Kerala',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 32,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 0, // No application fee for Kerala PSC state examinations!
      women: 0,
      scStPwD: 0
    },
    womenReservationsDetails: 'Horizontal quotas applied inside government notifications. 100% free application status for all citizens regardless of category.',
    description: 'Top executive scale civil service of Kerala, designed to form a dedicated first-class state officer cadre.',
    officialUrl: 'https://www.keralapsc.gov.in',
    keyHighlights: [
      'Absolutely 100% Free - zero charges to apply',
      'Highly esteemed first-tier administrative scale equivalent to junior IAS scale',
      'Questions formulated in Malayalam/Tamil/Kannada and English'
    ]
  },
  {
    id: 'mpsc-state',
    name: 'Maharashtra Civil Services Gazetted Exam (MPSC)',
    conductingBody: 'Maharashtra Public Service Commission (MPSC)',
    region: 'State',
    state: 'Maharashtra',
    examType: 'Govt Job / Service',
    minAge: 19,
    maxAge: 38,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 394,
      women: 294, // Discounted for women
      scStPwD: 294
    },
    womenReservationsDetails: 'A powerful 30% horizontal reservation implemented for female applicants of Maharashtra. Lower fee tier for women.',
    description: 'Prominent competitive examination recruiting Deputy Collectors, DySP, and Assistant Commissioner of Sales Tax in Maharashtra.',
    officialUrl: 'https://mpsc.gov.in',
    keyHighlights: [
      'Highly valued state executive and security services',
      'Compulsory Marathi comprehension validation',
      'Broad general age category relaxation up to 38 years'
    ]
  },
  {
    id: 'tnpsc-group1',
    name: 'Tamil Nadu Civil Services Exam (TNPSC Group I)',
    conductingBody: 'Tamil Nadu Public Service Commission (TNPSC)',
    region: 'State',
    state: 'Tamil Nadu',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 39,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 150,
      women: 150,
      scStPwD: 0
    },
    womenReservationsDetails: 'Tamil Nadu protects an excellent 30% horizontal quota reservation for women. Exemptions on registration fee for deserving classes.',
    description: ' తమిళనాడు పబ్లిక్ సర్వీస్ కమిషన్. High standard recruitment of Deputy Collector, DSP, and Assistant Commissioner in Tamil Nadu.',
    officialUrl: 'https://www.tnpsc.gov.in',
    keyHighlights: [
      'Leading state administrative framework services',
      'Mandatory Tamil language eligibility evaluation and qualifying criteria',
      'No age restriction for specific postgraduates under TN rules'
    ]
  },
  {
    id: 'uppsc-pcs',
    name: 'Uttar Pradesh Combined State Services (UPPSC PCS)',
    conductingBody: 'Uttar Pradesh Public Service Commission (UPPSC)',
    region: 'State',
    state: 'Uttar Pradesh',
    examType: 'Govt Job / Service',
    minAge: 21,
    maxAge: 40,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Arts', 'Science', 'Commerce', 'Engineering', 'Medical', 'English'],
    fee: {
      standard: 125,
      women: 125,
      scStPwD: 65
    },
    womenReservationsDetails: '20% horizontal reservation specifically allocated to women of Uttar Pradesh domicile across all departments.',
    description: 'One of India\'s largest state competitive exams recruiting Deputy Collectors, DySPS, Block Development Officers, and Assistant Commissioners.',
    officialUrl: 'https://uppsc.up.nic.in',
    keyHighlights: [
      'Substantial vacancy volume and elite status postings in UP',
      'Preliminary Screening (GS + CSAT) followed by mains written descriptive',
      'Highest state maximum general limit of 40 years'
    ]
  },
  {
    id: 'jnuee-lang',
    name: 'Jawaharlal Nehru University Entrance Exam (JNUEE) - BA Hons',
    conductingBody: 'National Testing Agency (NTA) & JNU',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 17,
    maxAge: 30,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Language', 'Arts', 'English'],
    fee: {
      standard: 400,
      women: 400,
      scStPwD: 200
    },
    womenReservationsDetails: 'Special deprivation points added to female candidates during final merit formulation in JNU admission guidelines.',
    description: 'Premier national admission examination for seeking entry into Jawaharlal Nehru University\'s highly coveted B.A. (Hons.) Foreign Languages programs (Spanish, Japanese, French, German, Mandarin, Russian, Arabic).',
    officialUrl: 'https://jnu.ac.in',
    keyHighlights: [
      'Direct gateway to top foreign language school in India',
      'Special Deprivation Points for women candidates',
      'Excellent placements in foreign consulates, agencies, and top MNCs'
    ]
  },
  {
    id: 'eflu-admission',
    name: 'English and Foreign Languages University (EFLU) Entrance Exam',
    conductingBody: 'EFLU Hyderabad',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 17,
    maxAge: 25,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Language', 'Arts', 'English'],
    fee: {
      standard: 500,
      women: 500,
      scStPwD: 250
    },
    womenReservationsDetails: 'Female candidates receive standard educational reservation benefits and comprehensive hostel allotments on a preferential basis.',
    description: 'Admissions for specialized integrated B.A. (Hons.) and English/Foreign Language certification studies at EFLU campuses, focusing on English pedagogy, translation studies, Spanish, and Japanese.',
    officialUrl: 'https://www.efluniversity.ac.in',
    keyHighlights: [
      'Premier campus for linguistic and language sciences',
      'Wide selections including Spanish, Italian, Japanese, and French pedagogy',
      'High-profile recruitment drives from international publishing houses and portals'
    ]
  },
  {
    id: 'dele-spanish',
    name: 'DELE Spanish Language Certification (Cervantes Exam)',
    conductingBody: 'Instituto Cervantes on behalf of Spanish Ministry of Education',
    region: 'Global',
    examType: 'Language & Study Visa',
    minAge: 16,
    maxAge: 99,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Language', 'Arts', 'English'],
    fee: {
      standard: 4500,
      women: 4500,
      scStPwD: 4500
    },
    womenReservationsDetails: 'Global certification exam with standardized international registration fee structure.',
    description: 'Diplomas de Español como Lengua Extranjera (DELE) is the official international credential certifying Spanish proficiency, requested by Spanish consulates, foreign schools, and global business process firms.',
    officialUrl: 'https://dele.cervantes.es',
    keyHighlights: [
      'Official, lifelong certification from the Government of Spain',
      'Boosts translation, embassy, and business consultant careers',
      'Accepted globally for study visas, corporate translation, and diplomatic profiles'
    ]
  },
  {
    id: 'jlpt-japanese',
    name: 'Japanese Language Proficiency Test (JLPT) N2/N3 Level',
    conductingBody: 'Japan Foundation & Japan Educational Exchanges',
    region: 'Global',
    examType: 'Language & Study Visa',
    minAge: 15,
    maxAge: 99,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Language', 'Arts', 'English', 'Engineering', 'Commerce', 'BBA'],
    fee: {
      standard: 1500,
      women: 1500,
      scStPwD: 1500
    },
    womenReservationsDetails: 'Standard international assessment framework with no gender fee concessions.',
    description: 'The standardized test to evaluate and certify Japanese language proficiency for non-native speakers. A critical qualification for technical bilingual engineers, translators, and corporate managers.',
    officialUrl: 'https://www.jlpt.jp',
    keyHighlights: [
      'Highly demanded in global software development and IT consultancies',
      'Key to getting corporate translation work or moving to Japan (JET programme)',
      'Opens direct lanes for specialized foreign worker visa endorsements'
    ]
  },
  {
    id: 'delf-french',
    name: 'DELF French Language Diploma (B2 Level)',
    conductingBody: 'France Éducation international & Ministry of Education France',
    region: 'Global',
    examType: 'Language & Study Visa',
    minAge: 15,
    maxAge: 99,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Language', 'Arts', 'English'],
    fee: {
      standard: 5000,
      women: 5000,
      scStPwD: 5000
    },
    womenReservationsDetails: 'French government standardized exam framework. Direct credit points are evaluated for fellowship applicants.',
    description: 'Official diploma awarded by the French Ministry of National Education to certify the French language skills of foreign candidates. Compulsory for admissions in French universities and EU agencies.',
    officialUrl: 'https://france-education-international.fr',
    keyHighlights: [
      'Lifetime validity certified by the Government of France',
      'Mandatory qualification for academic admissions in France or Switzerland',
      'Elite advantage in international NGOs, tourism networks, and European companies'
    ]
  },
  {
    id: 'cuet-bba',
    name: 'CUET-UG for BBA / BMS Management Programs',
    conductingBody: 'National Testing Agency (NTA)',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 17,
    maxAge: 25,
    genderAllowed: 'All',
    requiredLevel: '12th',
    requiredStreams: ['All', 'Commerce', 'BBA', 'Arts', 'Science', 'Language'],
    fee: {
      standard: 750,
      women: 750,
      scStPwD: 375
    },
    womenReservationsDetails: 'Horizontal reservations and fee waivers across participating central colleges and universities.',
    description: 'Crucial entry screening exam for undergraduate Business Administration (BBA) and Management Studies (BMS) programs in top tier Indian universities and affiliated colleges.',
    officialUrl: 'https://cuet.samarth.ac.in',
    keyHighlights: [
      'The single primary hallway to top undergraduate business commerce colleges',
      'Computer-based test (CBT) assessing general aptitude, verbal control, and math tools',
      'Fee reductions for reserved and underrepresented categories'
    ]
  },
  {
    id: 'cat-mba',
    name: 'Common Admission Test (CAT) for MBA / PGDM',
    conductingBody: 'Indian Institutes of Management (IIMs)',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 19,
    maxAge: 45,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Commerce', 'BBA', 'MBA', 'Arts', 'Science', 'Engineering', 'Language'],
    fee: {
      standard: 2400,
      women: 2400,
      scStPwD: 1200
    },
    womenReservationsDetails: 'Most premier business schools give explicit gender diversity rating points (extra weightage up to 5%) to women in final merit calculation.',
    description: 'The highest standard computer-based test for entrance into prestigious Post Graduate Programmes in Management / MBA at all IIMs and other top business schools.',
    officialUrl: 'https://iimcat.ac.in',
    keyHighlights: [
      'The gold standard admissions test for elite Management programs',
      'Substantial career elevation in corporate, entrepreneurship, and strategy services',
      'Significant Gender Diversity points for women applicants'
    ]
  },
  {
    id: 'mat-mba',
    name: 'Management Aptitude Test (MAT / CMAT)',
    conductingBody: 'All India Management Association (AIMA)',
    region: 'National',
    examType: 'Higher Education Entrance',
    minAge: 19,
    maxAge: 99,
    genderAllowed: 'All',
    requiredLevel: 'Graduate',
    requiredStreams: ['All', 'Commerce', 'BBA', 'MBA', 'Arts', 'Science', 'Engineering', 'Language'],
    fee: {
      standard: 1950,
      women: 1950,
      scStPwD: 1950
    },
    womenReservationsDetails: 'Scholarships and percentage concessions are allocated by direct partner management colleges for women scholars.',
    description: 'National level testing gateway evaluating verbal logic, data sufficiency, and business decision making for Master of Business Administration (MBA) admissions across hundreds of premier business institutions.',
    officialUrl: 'https://mat.aima.in',
    keyHighlights: [
      'Conducted multiple times a year for high student flexibility',
      'Accepted by more than 605 business academies across India',
      'Highly flexible age limits for continuous up-skilling'
    ]
  }
];
export const STATES_LIST = [
  'West Bengal', 'Andhra Pradesh', 'Assam', 'Bihar', 'Delhi', 'Gujarat', 'Karnataka', 'Kerala', 'Maharashtra', 'Tamil Nadu', 'Uttar Pradesh'
];
