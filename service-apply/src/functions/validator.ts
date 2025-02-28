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
  /^[가-힣a-zA-Z ]{2,100}$/.test(studentName);

export const isSection = ({
  array,
  selected,
}: {
  array: number[];
  selected: number;
}) => array.includes(+selected);

export const isCarNumber = (carNumber: string) =>
  /\d{2,3}[가-힣]{1}\d{4}/gm.test(carNumber.replace(' ', ''));

export const isApplyDropDown = (dropDownValue: string) =>
  !!dropDownValue.replace(' ', '');

export interface ApplyFormInput {
  phoneNumber: string;
  studentNumber: string;
  email: string;
  studentName: string;
  affiliation: string;
  department: string;
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
    return submitFailure('올바른 형식의 전화번호를 입력해 주세요.');
  }
  if (!isEmail(input.email)) {
    return submitFailure('올바른 형식의 이메일을 입력해 주세요.');
  }
  if (!isStudentName(input.studentName)) {
    return submitFailure(
      '이름은 영어 대,소문자 한글, 공백으로 이루어진 100자로 이루어져야 합니다.',
    );
  }
  if (!isStudentNumber(input.studentNumber)) {
    return submitFailure('올바른 형식의 학번을 입력해 주세요.');
  }
  if (!isApplyDropDown(input.affiliation)) {
    return submitFailure('소속대학을 입력해 주세요.');
  }
  if (!isApplyDropDown(input.department)) {
    return submitFailure('소속학과를 입력해 주세요.');
  }
  if (!isSection({ array: sectionNumberArray, selected: input.section })) {
    return submitFailure('올바른 구간을 선택해 주세요.');
  }
  if (!isCarNumber(input.carNumber)) {
    return submitFailure('올바른 형식의 차량번호를 입력해 주세요.');
  }
  return { ...submitSuccess(input), message: '' };
};

export const isPassword = (password: string) =>
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/.test(
    password,
  );

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
      '비밀번호는 최소 8자 이상, 16자리 이하이며 최소 하나의 영문자, 숫자, 특수문자(!@#$%^&*)가 포함되어야 합니다.',
    );
  }
  if (input.password !== input.confirmPassword) {
    return submitFailure(
      '비밀번호와 비밀번호 재입력이 서로 일치하지 않습니다.',
    );
  }
  return { ...submitSuccess(input), message: '' };
};
