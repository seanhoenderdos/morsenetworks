/**
 * Form Questions Configuration
 *
 * Defines the structure and content for all questions in the eligibility form.
 * Each question object contains the question text, description, field mapping,
 * and available options for user selection.
 *
 * This centralized configuration makes it easy to:
 * - Modify question text and options
 * - Add or remove questions
 * - Maintain consistency across the form
 * - Ensure proper field mapping for validation and state management
 */

/**
 * Array of question objects for the eligibility assessment
 * Each question follows a consistent structure for the form to process
 *
 * @type {Array<Object>} Array of question configuration objects
 * @property {number} id - Unique identifier for the question
 * @property {string} field - Form field name (maps to store state)
 * @property {string} title - Main question text displayed to user
 * @property {string} description - Additional context or explanation
 * @property {Array<Object>} options - Available answer options with value/label pairs
 */
export const FORM_QUESTIONS = [
  {
    id: 1,
    field: 'isUKRegistered',
    title: 'Is your business registered in the UK?',
    description:
      'To be eligible for the Growth Finance Scheme, your business must be registered in the United Kingdom.',
    options: [
      { value: 'yes', label: 'Yes, my business is UK registered' },
      { value: 'no', label: 'No, my business is not UK registered' },
    ],
  },
  {
    id: 2,
    field: 'tradingPeriod',
    title: 'Has your business been trading for at least 12 months?',
    description:
      'We require businesses to have a proven trading history of at least 12 months.',
    options: [
      { value: 'yes', label: 'Yes, 12+ months trading history' },
      { value: 'no', label: 'No, less than 12 months' },
    ],
  },
  {
    id: 3,
    field: 'annualTurnover',
    title: 'What is your annual turnover?',
    description:
      "Please select your business's annual turnover range from the options below.",
    options: [
      { value: 'under-50k', label: 'Under £50,000' },
      { value: '50k-250k', label: '£50,000 - £250,000' },
      { value: '250k-1m', label: '£250,000 - £1,000,000' },
      { value: '1m+', label: 'Over £1,000,000' },
    ],
  },
  {
    id: 4,
    field: 'previousFunding',
    title: 'Have you previously received government-backed funding?',
    description:
      'This includes any previous government loans, grants, or similar funding schemes.',
    options: [
      { value: 'no', label: 'No previous government funding' },
      { value: 'yes', label: 'Yes, I have received government funding' },
    ],
  },
  {
    id: 5,
    field: 'loanAmount',
    title: 'What loan amount are you seeking?',
    description:
      'Please select the loan amount range that best fits your funding requirements.',
    options: [
      { value: 'under-25k', label: 'Under £25,000' },
      { value: '25k-50k', label: '£25,000 - £50,000' },
      { value: '50k-100k', label: '£50,000 - £100,000' },
      { value: '100k-250k', label: '£100,000 - £250,000' },
      { value: 'over-250k', label: 'Over £250,000' },
    ],
  },
];
