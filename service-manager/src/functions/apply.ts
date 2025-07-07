import { RegistrationResponse } from '../apis/dtos/registration.dto';
import { EXCEL_HEADERS, TABLE_HEADERS } from '../constants/apply';

const getCellValue = (
  headerKey: (typeof EXCEL_HEADERS)[number]['key'],
  userInfo: RegistrationResponse,
  registrations: RegistrationResponse[],
) => {
  switch (headerKey) {
    case 'sector':
      return userInfo.sectorNum;
    case 'order':
      return registrations.findIndex((data) => data.id === userInfo.id) + 1;
    case 'name':
      return userInfo.name;
    case 'affiliation':
      return userInfo.affiliation;
    case 'department':
      return userInfo.department;
    case 'carNumber':
      return userInfo.carNumber;
    case 'studentNumber':
      return userInfo.studentNumber;
    case 'isCompact':
      return userInfo.isCompact ? '경차' : '경차 아님';
    case 'phoneNumber':
      return userInfo.phoneNumber;
    case 'email':
      return userInfo.email;
    default:
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${headerKey}는 정의되지 않은 헤더입니다.`);
      }
      return '';
  }
};

export const getTableCellValue = (
  headerKey: (typeof TABLE_HEADERS)[number]['key'],
  userInfo: RegistrationResponse,
  registrations: RegistrationResponse[],
) => {
  return getCellValue(headerKey, userInfo, registrations);
};

export const getExcelCellValue = (
  headerKey: (typeof EXCEL_HEADERS)[number],
  userInfo: RegistrationResponse,
  registrations: RegistrationResponse[],
) => {
  const value = getCellValue(headerKey.key, userInfo, registrations);
  return {
    [headerKey.label]: value,
  };
};
