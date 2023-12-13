import { createContext } from 'react';

export interface ApplyFormContextType {
  phoneNumber: string;
  studentNumber: string;
  email: string;
  studentName: string;
  affiliation: string;
  section: number;
  carNumber: string;
  isCompact: boolean;
}

export const initApplyFormValue = {
  phoneNumber: '',
  studentNumber: '',
  email: '',
  studentName: '',
  affiliation: '',
  section: 0,
  carNumber: '',
  isCompact: false,
};

export const ApplyFormContext =
  createContext<ApplyFormContextType>(initApplyFormValue);