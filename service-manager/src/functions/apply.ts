import { RegistrationResponse } from '../apis/dtos/registration.dto';
import { TABLE_HEADERS } from '../constants/apply';

export const getCellValue = (
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
