import { z } from 'zod';

/**
 * Eligibility Validation Schemas - Zod validation for loan eligibility form
 *
 * This file defines validation rules for the multi-step eligibility form using Zod.
 * It ensures data integrity and provides user-friendly error messages for form validation.
 *
 * Features:
 * - Comprehensive validation for all form fields
 * - Step-by-step validation schemas for multi-step form
 * - Custom error messages for better user experience
 * - Type safety with TypeScript integration
 * - Reusable validation logic across components
 *
 * Usage:
 * - Import schemas in form components for validation
 * - Use stepValidationSchemas for individual step validation
 * - Use eligibilitySchema for complete form validation
 */

/**
 * Main Eligibility Schema
 *
 * Comprehensive validation schema for the entire eligibility form.
 * Defines all possible values and validation rules for each field.
 *
 * Form Fields:
 * - isUKRegistered: Business registration status in the UK
 * - tradingPeriod: Whether business meets required trading period
 * - annualTurnover: Business annual revenue range
 * - previousFunding: Previous government funding received
 * - loanAmount: Desired loan amount range
 */
export const eligibilitySchema = z.object({
  /**
   * UK Registration Status
   * Binary choice: Business must be either UK registered or not
   * Required for Growth Guarantee Scheme eligibility
   */
  isUKRegistered: z.enum(['yes', 'no'], {
    required_error: 'Please select whether your business is UK registered',
  }),

  /**
   * Trading Period Requirement
   * Binary choice: Business must meet minimum trading period requirements
   * Typically requires 2+ years of trading history
   */
  tradingPeriod: z.enum(['yes', 'no'], {
    required_error: 'Please select your trading period',
  }),

  /**
   * Annual Turnover Range
   * Multiple choice: Business revenue categories for risk assessment
   * - under-50k: Below minimum threshold (likely ineligible)
   * - 50k-250k: Lower tier eligibility range
   * - 250k-1m: Mid tier eligibility range
   * - 1m+: Upper tier eligibility range
   */
  annualTurnover: z.enum(['under-50k', '50k-250k', '250k-1m', '1m+'], {
    required_error: 'Please select your annual turnover range',
  }),

  /**
   * Previous Government Funding
   * Binary choice: Tracks prior government financial assistance
   * May affect eligibility for additional funding
   */
  previousFunding: z.enum(['yes', 'no'], {
    required_error: 'Please indicate if you have received previous funding',
  }),

  /**
   * Desired Loan Amount
   * Multiple choice: Loan amount ranges for the Growth Guarantee Scheme
   * - under-25k: Below scheme minimum (ineligible)
   * - 25k-50k: Lower range within scheme limits
   * - 50k-100k: Mid range within scheme limits
   * - 100k-250k: Upper range within scheme limits
   * - over-250k: Above scheme maximum (ineligible)
   */
  loanAmount: z.enum(
    ['under-25k', '25k-50k', '50k-100k', '100k-250k', 'over-250k'],
    {
      required_error: 'Please select your desired loan amount',
    }
  ),
});

/**
 * Step-by-Step Validation Schemas
 *
 * Individual validation schemas for each step of the multi-step form.
 * Each schema validates only the field(s) relevant to that specific step.
 *
 * Benefits:
 * - Validates only current step data
 * - Provides immediate feedback per step
 * - Allows step-by-step progression
 * - Reduces validation complexity per step
 * - Enables better user experience with focused error messages
 *
 * Step Breakdown:
 * Step 1: UK Registration Status
 * Step 2: Trading Period Requirements
 * Step 3: Annual Turnover Assessment
 * Step 4: Previous Funding History
 * Step 5: Loan Amount Selection
 */
export const stepValidationSchemas = {
  1: eligibilitySchema.pick({ isUKRegistered: true }), // UK registration validation
  2: eligibilitySchema.pick({ tradingPeriod: true }), // Trading period validation
  3: eligibilitySchema.pick({ annualTurnover: true }), // Turnover range validation
  4: eligibilitySchema.pick({ previousFunding: true }), // Previous funding validation
  5: eligibilitySchema.pick({ loanAmount: true }), // Loan amount validation
};
