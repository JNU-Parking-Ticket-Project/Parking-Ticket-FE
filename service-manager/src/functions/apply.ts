import { RegistrationResponse } from '../apis/dtos/registration.dto';
import { EXCEL_HEADERS, TABLE_HEADERS } from '../constants/apply';

export const getTableCellValue = (
  headerKey: (typeof TABLE_HEADERS)[number]['key'],
  userInfo: RegistrationResponse,
  registrations: RegistrationResponse[],
) => {
  const {
    id,
    name,
    affiliation,
    department,
    carNumber,
    studentNumber,
    isCompact,
    phoneNumber,
    email,
  } = userInfo;

  switch (headerKey) {
    case 'order':
      return registrations.findIndex((data) => data.id === id) + 1;
    case 'name':
      return name;
    case 'affiliation':
      return affiliation;
    case 'department':
      return department;
    case 'carNumber':
      return carNumber;
    case 'studentNumber':
      return studentNumber;
    case 'isCompact':
      return isCompact ? '경차' : '경차 아님';
    case 'phoneNumber':
      return phoneNumber;
    case 'email':
      return email;
  }
};

export const getExcelCellValue = (
  headerKey: (typeof EXCEL_HEADERS)[number],
  userInfo: RegistrationResponse,
  registrations: RegistrationResponse[],
) => {
  const {
    id,
    name,
    affiliation,
    department,
    carNumber,
    studentNumber,
    isCompact,
    phoneNumber,
    email,
    sectorNum,
  } = userInfo;

  switch (headerKey.key) {
    case 'sector':
      return {
        [headerKey.label]: sectorNum,
      };
    case 'order':
      return {
        [headerKey.label]:
          registrations.findIndex((data) => data.id === id) + 1,
      };
    case 'name':
      return {
        [headerKey.label]: name,
      };
    case 'affiliation':
      return {
        [headerKey.label]: affiliation,
      };
    case 'department':
      return {
        [headerKey.label]: department,
      };
    case 'carNumber':
      return {
        [headerKey.label]: carNumber,
      };
    case 'studentNumber':
      return {
        [headerKey.label]: studentNumber,
      };
    case 'isCompact':
      return {
        [headerKey.label]: isCompact ? '경차' : '경차 아님',
      };
    case 'phoneNumber':
      return {
        [headerKey.label]: phoneNumber,
      };
    case 'email':
      return {
        [headerKey.label]: email,
      };
  }
};
