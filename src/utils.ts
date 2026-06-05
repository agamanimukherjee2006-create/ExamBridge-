/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, ExamOpportunity, EligibilityResult, EducationLevel } from './types';

const EDUCATION_HIERARCHY: Record<EducationLevel, number> = {
  '10th': 1,
  '12th': 2,
  'Graduate': 3,
  'B.Tech': 3,
  'BBA': 3,
  'Post-Grad': 4,
  'MBA': 4,
  'PhD': 5,
  'Doctor Degree': 5,
};

export function checkEligibility(user: UserProfile, exam: ExamOpportunity): EligibilityResult {
  const reasonsEligible: string[] = [];
  const reasonsIneligible: string[] = [];
  let isEligible = true;

  // 0. Check for Pending Parameters
  const isAgePending = !user.age || user.age === 0;
  const isStreamPending = !user.stream;

  if (isAgePending || isStreamPending) {
    const pendingMsg = `Pending user selection: Please select/update your ${isAgePending ? 'Age' : ''}${isAgePending && isStreamPending ? ' and ' : ''}${isStreamPending ? 'Subject Stream' : ''} to determine your precise qualifying index.`;
    return {
      exam,
      isEligible: false,
      reasonsEligible: [],
      reasonsIneligible: [pendingMsg],
    };
  }

  // 1. Check Age Bounds
  if (user.age < exam.minAge) {
    isEligible = false;
    reasonsIneligible.push(`Age is ${user.age}, but minimum required is ${exam.minAge} years.`);
  } else if (user.age > exam.maxAge) {
    isEligible = false;
    reasonsIneligible.push(`Age is ${user.age}, which exceeds maximum limit of ${exam.maxAge} years.`);
  } else {
    reasonsEligible.push(`Age (${user.age} yrs) is within the eligible range of ${exam.minAge} to ${exam.maxAge}.`);
  }

  // 2. Check Gender Permissions
  if (exam.genderAllowed !== 'All' && exam.genderAllowed !== user.gender) {
    isEligible = false;
    reasonsIneligible.push(`Exam is restricted to candidates identifying as: ${exam.genderAllowed}.`);
  } else {
    reasonsEligible.push(`Gender identity matches exam criteria (${exam.genderAllowed === 'All' ? 'Open to All Genders' : `Open to ${exam.genderAllowed}`}).`);
  }

  // 3. Check Education Level Hierarchy
  const userEduValue = EDUCATION_HIERARCHY[user.educationLevel] || 0;
  const examRequiredValue = EDUCATION_HIERARCHY[exam.requiredLevel] || 0;

  if (userEduValue < examRequiredValue) {
    isEligible = false;
    reasonsIneligible.push(`Required education level is ${exam.requiredLevel}, but your highest level is ${user.educationLevel}.`);
  } else {
    reasonsEligible.push(`Highest education level (${user.educationLevel}) meets or exceeds required (${exam.requiredLevel}).`);
  }

  // 4. Check Subject/Stream Fit
  const hasStreamMatch = exam.requiredStreams.some(st => {
    const examStream = st.toLowerCase();
    const userStream = user.stream.toLowerCase();

    if (examStream === 'all' || examStream === userStream) return true;

    // Expand compatibility
    if (userStream === 'physics' && examStream === 'science') return true;
    const isLanguageStream = ['english', 'spanish', 'japanese', 'french', 'language'].includes(userStream);
    if (isLanguageStream && (examStream === 'language' || examStream === 'english' || examStream === 'arts')) return true;
    if (userStream === 'bba' && (examStream === 'bba' || examStream === 'commerce')) return true;
    if (userStream === 'mba' && (examStream === 'mba' || examStream === 'commerce')) return true;
    if (userStream === 'engineering' && examStream === 'science') return true;
    if (userStream === 'medical' && examStream === 'science') return true;

    return false;
  });

  if (!hasStreamMatch) {
    isEligible = false;
    reasonsIneligible.push(`Your stream is "${user.stream}", but exam requires: ${exam.requiredStreams.join(', ')}.`);
  } else {
    reasonsEligible.push(`Stream "${user.stream}" qualifies for target streams (${exam.requiredStreams.join('/')}).`);
  }

  // 5. Check Citizenship / Domicile Warnings (Informative, usually doesn't brick eligibility completely but flags)
  if (exam.region === 'State' && exam.state !== user.state) {
    reasonsEligible.push(`Domicile warning: This is a state-specific exam for ${exam.state}. You are located in ${user.state}. Check domicile concessions.`);
  }

  // 6. Calculate fee concessions or benefits for Women
  let womenSpecificBenefits = '';
  if (user.gender === 'Female' && exam.fee.women < exam.fee.standard) {
    if (exam.fee.women === 0) {
      womenSpecificBenefits = 'Exemplary Benefit: Application fee is completely Rs. 0 (FREE) for female candidates!';
    } else {
      womenSpecificBenefits = `Concession: Application Fee is reduced to Rs. ${exam.fee.women} (Standard: Rs. ${exam.fee.standard})`;
    }
  }

  return {
    exam,
    isEligible,
    reasonsEligible,
    reasonsIneligible,
    womenSpecificBenefits: womenSpecificBenefits || undefined,
  };
}
