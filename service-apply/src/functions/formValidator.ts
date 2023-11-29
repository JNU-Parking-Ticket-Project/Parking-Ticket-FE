export const onInputPhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  const { value } = input;

  if (value.length > 13) {
    input.value = value.slice(0, 13);
    return;
  }

  input.value = value
    .replace(/[^0-9-]/g, '')
    .replace(/([0-9]{3})([0-9]{4})/, '$1-$2-');
};

export const onInputStudentNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  const { value } = input;

  if (value.length > 6) {
    input.value = value.slice(0, 6);
    return;
  }

  input.value = value.replace(/[^0-9]/g, '');
};

export const formInputValidator = (
  phoneNumber: string,
  studentNumber: number,
  email: string,
  studentName: string,
  studentMajor: string,
  section: number,
  carNumber: string,
  isCompact: boolean,
) => {
  if (!isPhoneNumber(phoneNumber)) {
    alert('올바른 전화번호가 아닙니다.');
    return false;
  }
  if (!isStudentNumber(studentNumber)) {
    alert('올바른 학번이 아닙니다.');
    return false;
  }
  if (!isEmail(email)) {
    alert('올바른 이메일이 아닙니다.');
    return false;
  }
  if (!isStudentName(studentName)) {
    alert('올바른 이름이 아닙니다.');
    return false;
  }
  return true;
};

const isPhoneNumber = (phoneNumber: string) => {
  const phoneNumberRegex = /^\d{3}-\d{4}-\d{4}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    return false;
  }
  return true;
};

const isEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};

const isStudentNumber = (studentNumber: number) => {
  const studentNumberRegex = /^[0-9]{6}$/;
  if (typeof studentNumber !== 'number' || isNaN(studentNumber)) {
    return false;
  }
  if (!studentNumberRegex.test(studentNumber.toString())) {
    return false;
  }
  return true;
};

const isStudentName = (studentName: string) => {
  const studentNameRegex = /^[가-힣]{3,5}$/;
  if (!studentNameRegex.test(studentName)) {
    return false;
  }
  return true;
};

const isStudentMajor = (studentMajor: string) => {
  //TODO: 학과 검증
};

const isSection = (section: number) => {
  //TODO: section 검증
};

const isCarNumber = (carNumber: string) => {
  //TODO: 차량번호 검증
};
