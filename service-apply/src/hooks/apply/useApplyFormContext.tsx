import { useReducer } from 'react';
import {
  phoneNumberReplace,
  studentNumberReplace,
} from '../../functions/replacer';
import {
  ApplyFormContextType,
  initApplyFormValue,
} from '../../store/ApplyFormContext';

type AppFormInputAction =
  | {
      type: keyof ApplyFormContextType;
      payload: ApplyFormContextType[keyof ApplyFormContextType];
    }
  | {
      type: 'reset';
      payload: null;
    }
  | {
      type: 'update';
      payload: ApplyFormContextType;
    };

const applyFormReducer = (
  state: ApplyFormContextType,
  action: AppFormInputAction,
): ApplyFormContextType => {
  switch (action.type) {
    case 'phoneNumber':
      return {
        ...state,
        phoneNumber: phoneNumberReplace(action.payload.toString()),
      };
    case 'studentNumber':
      return {
        ...state,
        studentNumber: studentNumberReplace(action.payload.toString()),
      };
    case 'reset':
      return {
        ...state,
        ...initApplyFormValue,
      };
    case 'affiliation':
    case 'email':
    case 'studentName':
    case 'section':
    case 'carNumber':
    case 'isCompact':
      return {
        ...state,
        [action.type]: action.payload,
      };
    case 'update':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export const useApplyFormContext = (init?: ApplyFormContextType) => {
  init ||= initApplyFormValue;
  const [state, dispatch] = useReducer(applyFormReducer, init);

  return { state, dispatch };
};
