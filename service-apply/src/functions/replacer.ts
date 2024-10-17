const PHONE_NUMBER_WITH_SEPERATOR_LENGTH = 13;
const STUDENT_NUMBER_LENGTH = 6;

export const phoneNumberReplace = (phoneNumber: string) =>
  phoneNumber
    .replace(/[^0-9]/g, '')
    .replace(/([0-9]{3})([0-9]{4})([0-9]{4})/, '$1-$2-$3')
    .slice(0, PHONE_NUMBER_WITH_SEPERATOR_LENGTH);

export const studentNumberReplace = (studentNumber: string) =>
  studentNumber
    .toString()
    .replace(/[^0-9]/g, '')
    .slice(0, STUDENT_NUMBER_LENGTH);

export const carNumberReplace = (carNumber: string, prevCarNumber: string) => {
  if (carNumber.includes(' ')) {
    return prevCarNumber;
  }

  return carNumber;
};
