export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NUMBER_ONLY_REGEX = /^[0-9]$/;
export const NOT_DIGIT_REGEX = /\D/g;
export const isEmail = (str: string) => EMAIL_REGEX.test(str);
