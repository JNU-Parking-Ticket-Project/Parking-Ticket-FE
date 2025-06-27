import { RegistrationResponse } from '../apis/dtos/registration.dto';
import {
  EXCEL_HEADERS,
  FIELD_MAPPERS,
  TABLE_HEADERS,
} from '../constants/apply';

const getCellValue = (
  headerKey: string,
  userInfo: RegistrationResponse,
  registrations: RegistrationResponse[],
) => {
  const mapper = FIELD_MAPPERS[headerKey as keyof typeof FIELD_MAPPERS];

  if (headerKey === 'order') {
    return (mapper as typeof FIELD_MAPPERS.order)(userInfo, registrations);
  }

  return (mapper as (userInfo: RegistrationResponse) => any)(userInfo);
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
