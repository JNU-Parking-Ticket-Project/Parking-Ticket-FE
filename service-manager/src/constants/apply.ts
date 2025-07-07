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
