import type { FormData, FormErrors, FormStep } from './types';
import type { Translations } from '../../i18n/translations';

export function validateStep(
  step: FormStep,
  data: FormData,
  t: Translations
): FormErrors {
  const errors: FormErrors = {};

  if (step === 1) {
    if (!data.fullName.trim()) errors.fullName = t.required;
    if (!data.pesel.trim()) {
      errors.pesel = t.required;
    } else if (!/^\d{11}$/.test(data.pesel.trim())) {
      errors.pesel = t.invalidPesel;
    }
    if (!data.age.trim()) {
      errors.age = t.required;
    } else {
      const ageNum = parseInt(data.age, 10);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 120) errors.age = t.invalidAge;
    }
    if (!data.postalCode.trim()) {
      errors.postalCode = t.required;
    } else if (!/^\d{2}-\d{3}$/.test(data.postalCode.trim())) {
      errors.postalCode = t.invalidPostalCode;
    }
    if (!data.city.trim()) errors.city = t.required;
    if (!data.street.trim()) errors.street = t.required;
    if (!data.county.trim()) errors.county = t.required;
    if (!data.municipality.trim()) errors.municipality = t.required;
    if (!data.phone.trim()) {
      errors.phone = t.required;
    } else if (!/^[\d\s\-\+\(\)]{9,15}$/.test(data.phone.trim())) {
      errors.phone = t.invalidPhone;
    }
    if (!data.email.trim()) {
      errors.email = t.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = t.invalidEmail;
    }
  }

  if (step === 2) {
    if (!data.gender) errors.gender = t.required;
    if (!data.citizenship) errors.citizenship = t.required;
  }

  if (step === 3) {
    if (!data.education) errors.education = t.required;
  }

  if (step === 4) {
    if (!data.employmentStatus) errors.employmentStatus = t.required;
    if (!data.workplaceName.trim()) errors.workplaceName = t.required;
    if (!data.jobCategory) errors.jobCategory = t.required;
  }

  if (step === 5) {
    if (!data.foreignOrigin) errors.foreignOrigin = t.required;
    if (!data.thirdCountryNational) errors.thirdCountryNational = t.required;
    if (!data.ethnicMinority) errors.ethnicMinority = t.required;
    if (!data.homeless) errors.homeless = t.required;
    if (!data.disabled) errors.disabled = t.required;
  }

  if (step === 6) {
    if (!data.painAffectsWork) errors.painAffectsWork = t.required;
  }

  if (step === 7) {
    if (!data.declarationCriteria) errors.declarationCriteria = t.required;
    if (!data.declarationWillingness) errors.declarationWillingness = t.required;
    if (!data.declarationHealthData) errors.declarationHealthData = t.required;
    if (!data.declarationContraindications) errors.declarationContraindications = t.required;
    if (!data.declarationTruth) errors.declarationTruth = t.required;
    if (!data.signatureDate.trim()) errors.signatureDate = t.required;
    if (!data.signature.trim()) errors.signature = t.required;
  }

  return errors;
}

export const TOTAL_STEPS: FormStep = 7;
