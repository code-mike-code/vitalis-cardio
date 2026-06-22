export interface FormData {
  fullName: string;
  pesel: string;
  age: string;
  postalCode: string;
  city: string;
  street: string;
  county: string;
  municipality: string;
  phone: string;
  email: string;
  gender: 'female' | 'male' | '';
  citizenship: 'polish' | 'eu' | 'nonEU' | 'stateless' | '';
  education: 'secondary' | 'postSecondary' | 'higher' | '';
  employmentStatus: 'employed' | 'unemployed' | '';
  workplaceName: string;
  jobCategory: string;
  foreignOrigin: 'yes' | 'no' | '';
  thirdCountryNational: 'yes' | 'no' | '';
  ethnicMinority: 'yes' | 'no' | 'noInfo' | '';
  homeless: 'yes' | 'no' | '';
  disabled: 'yes' | 'no' | '';
  painAffectsWork: 'yes' | 'no' | '';
  declarationCriteria: boolean;
  declarationWillingness: boolean;
  declarationHealthData: boolean;
  declarationContraindications: boolean;
  declarationTruth: boolean;
  signatureDate: string;
  signature: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export type FormStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const JOB_CATEGORIES = [
  'selfEmployed',
  'government',
  'localGov',
  'ngo',
  'msme',
  'largeEnterprise',
  'healthcare',
  'schoolTeaching',
  'schoolNonTeaching',
  'schoolManagement',
  'university',
  'scienceInstitute',
  'researchInstitute',
  'lukasiewicz',
  'internationalInstitute',
  'federation',
  'stateEntity',
  'other',
] as const;

export type JobCategoryKey = typeof JOB_CATEGORIES[number];
