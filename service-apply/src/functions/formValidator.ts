export const onInputPhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  const { value } = input;

  if (value.length > 13) {
    input.value = value.slice(0, 13);
    return;
  }

  input.value = value
    .replace(/[^0-9]/g, '')
    .replace(/([0-9]{3})([0-9]{4})([0-9]{4})/, '$1-$2-$3');
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

interface SubmitSuccess<T> {
  success: true;
  value: T;
}

interface SubmitFailure {
  success: false;
  message: string;
}

type SubmitResult<T> = SubmitSuccess<T> | SubmitFailure;

export const submitSucccess = <T>(value: T): SubmitSuccess<T> => {
  return {
    success: true,
    value,
  };
};

export const submitFailure = (message: string): SubmitFailure => {
  return {
    success: false,
    message,
  };
};

export const printSubmitResult = <T>(result: SubmitResult<T>) => {
  if (result.success) {
    alert('신청완료');
  } else {
    alert(result.message);
  }
};

export const formInputValidator = (
  phoneNumber: string,
  studentNumber: number,
  email: string,
  studentName: string,
  section: number,
  carNumber: string,
  isCompact: boolean,
) => {
  if (!isPhoneNumber(phoneNumber)) {
    return submitFailure('올바른 전화번호가 아닙니다.');
  }
  if (!isEmail(email)) {
    return submitFailure('올바른 이메일이 아닙니다.');
  }
  if (!isStudentName(studentName)) {
    return submitFailure('올바른 이름이 아닙니다.');
  }
  if (!isStudentNumber(studentNumber)) {
    return submitFailure('올바른 학번이 아닙니다.');
  }
  if (!isSection(section)) {
    return submitFailure('올바른 구역이 아닙니다.');
  }
  return submitSucccess({
    phoneNumber,
    studentNumber,
    email,
    studentName,
    section,
    carNumber,
    isCompact,
  });
};

const isPhoneNumber = (phoneNumber: string) => {
  const phoneNumberRegex = /^01[0-9]{1}-[0-9]{4}-[0-9]{4}$/;
  return phoneNumberRegex.test(phoneNumber);
};

const isEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const isStudentNumber = (studentNumber: number) => {
  const studentNumberRegex = /^[0-9]{6}$/;
  return studentNumberRegex.test(studentNumber.toString());
};

const isStudentName = (studentName: string) => {
  const studentNameRegex = /^[가-힣]{3,5}$/;
  return studentNameRegex.test(studentName);
};

const isSection = (section: number) => {
  //TODO: section 검증
  if (section !== 0) return true;
};

const isCarNumber = (carNumber: string) => {
  //TODO: 차량번호 검증
};
