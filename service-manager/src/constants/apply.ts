import { RegistrationResponse } from '../apis/dtos/registration.dto';

export const TABLE_HEADERS = [
  { key: 'order', label: '순서' },
  { key: 'name', label: '이름' },
  { key: 'affiliation', label: '단과 대학' },
  { key: 'department', label: '학과' },
  { key: 'carNumber', label: '차량 번호' },
  { key: 'studentNumber', label: '학생 번호' },
  { key: 'isCompact', label: '경차 여부' },
  { key: 'phoneNumber', label: '휴대폰 번호' },
  { key: 'email', label: '이메일' },
] as const;

export const EXCEL_HEADERS = [
  { key: 'sector', label: '구간' },
  ...TABLE_HEADERS,
] as const;

export const FIELD_MAPPERS = {
  sector: (userInfo: RegistrationResponse) => userInfo.sectorNum,
  order: (
    userInfo: RegistrationResponse,
    registrations: RegistrationResponse[],
  ) => registrations.findIndex((data) => data.id === userInfo.id) + 1,
  name: (userInfo: RegistrationResponse) => userInfo.name,
  affiliation: (userInfo: RegistrationResponse) => userInfo.affiliation,
  department: (userInfo: RegistrationResponse) => userInfo.department,
  carNumber: (userInfo: RegistrationResponse) => userInfo.carNumber,
  studentNumber: (userInfo: RegistrationResponse) => userInfo.studentNumber,
  isCompact: (userInfo: RegistrationResponse) =>
    userInfo.isCompact ? '경차' : '경차 아님',
  phoneNumber: (userInfo: RegistrationResponse) => userInfo.phoneNumber,
  email: (userInfo: RegistrationResponse) => userInfo.email,
} as const;
