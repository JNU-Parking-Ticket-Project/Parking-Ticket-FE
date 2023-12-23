import { submitFailure, submitSuccess } from './rop';

export const isPhoneNumber = (phoneNumber: string) =>
  /^01[0-9]{1}-[0-9]{4}-[0-9]{4}$/.test(phoneNumber);

export const isEmail = (email: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

export const isStudentNumber = (studentNumber: string) =>
  /^[0-9]{6}$/.test(studentNumber);

export const isStudentName = (studentName: string) =>
  /^[가-힣]{2,5}$/.test(studentName);

export const isSection = ({
  array,
  selected,
}: {
  array: number[];
  selected: number;
}) => array.includes(selected);

export const isCarNumber = (carNumber: string) =>
  /\d{2,3}[가-힣]{1}\d{4}/gm.test(carNumber.replace(' ', ''));

export const isAffiliation = (affiliation: string) =>
  !!affiliation.replace(' ', '');

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

export const applyFormValidator = ({
  input,
  sectionNumberArray,
  isAgreed,
}: {
  input: ApplyFormInput;
  sectionNumberArray: number[];
  isAgreed: boolean;
}) => {
  if (!isAgreed) {
    return submitFailure('개인정보 수집 및 이용에 동의해 주세요.');
  }
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
    return submitFailure('학번은 6자리 숫자입니다.');
  }
  if (!isAffiliation(input.affiliation)) {
    return submitFailure('소속대학을 입력해 주세요');
  }
  if (!isSection({ array: sectionNumberArray, selected: input.section })) {
    return submitFailure('올바른 구간이 아닙니다.');
  }
  if (!isCarNumber(input.carNumber)) {
    return submitFailure('차량 번호를 양식에 맞게 입력해 주세요.');
  }
  return { ...submitSuccess(input), message: '' };
};

export const isPassword = (password: string) =>
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}$/.test(password);

export interface PasswordResetFormInput {
  password: string;
  confirmPassword: string;
}

export const passwordResetFormValidator = (input: PasswordResetFormInput) => {
  if (!input.password || !input.confirmPassword) {
    return submitFailure('비밀번호와 비밀번호 재입력 모두 입력해 주세요.');
  }
  if (!isPassword(input.password)) {
    return submitFailure(
      '비밀번호는 대문자, 소문자, 숫자, 특수문자를 모두 포함하는 8~20자리이어야 합니다.',
    );
  }
  if (input.password !== input.confirmPassword) {
    return submitFailure('비밀번호가 일치하지 않습니다');
  }
  return { ...submitSuccess(input), message: '' };
};
