import { submitFailure, submitSucccess } from './rop';

export const isPhoneNumber = (phoneNumber: string) =>
  !/^01[0-9]{1}-[0-9]{4}-[0-9]{4}$/.test(phoneNumber);

export const isEmail = (email: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

export const isStudentNumber = (studentNumber: string) =>
  /^[0-9]{6}$/.test(studentNumber.toString());

export const isStudentName = (studentName: string) =>
  /^[가-힣]{3,5}$/.test(studentName);

export const isSection = (section: number) => {
  //TODO: section 검증
  return true;
};

export const isCarNumber = (carNumber: string) => {
  //TODO: 차량번호 검증
  return true;
};

export interface ApplyFormInput {
  phoneNumber: string;
  studentNumber: string;
  email: string;
  studentName: string;
  affiliation: string;
  section: number;
  carNumber: string;
  isCompact: boolean;
}

export const applyFormValidator = (input: ApplyFormInput) => {
  if (!isPhoneNumber(input.phoneNumber)) {
    return submitFailure('올바른 전화번호가 아닙니다.');
  }
  if (!isEmail(input.email)) {
    return submitFailure('올바른 이메일이 아닙니다.');
  }
  if (!isStudentName(input.studentName)) {
    return submitFailure('올바른 이름이 아닙니다.');
  }
  if (!isStudentNumber(input.studentNumber)) {
    return submitFailure('올바른 학번이 아닙니다.');
  }
  if (!isSection(input.section)) {
    return submitFailure('올바른 구역이 아닙니다.');
  }
  return submitSucccess(input);
};
