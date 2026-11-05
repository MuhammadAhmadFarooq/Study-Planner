export function getFirebaseMessage(error, fallback) {
  if (error?.code === 'auth/invalid-verification-code') return 'The OTP is incorrect. Please try again.';
  if (error?.code === 'auth/code-expired') return 'This OTP has expired. Request a new one.';
  if (error?.code === 'auth/too-many-requests') return 'Too many requests. Please wait and try again later.';
  if (error?.code === 'auth/invalid-phone-number') return 'The phone number format is invalid.';
  return fallback;
}
