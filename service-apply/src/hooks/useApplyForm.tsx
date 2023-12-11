import { useReducer } from 'react';
import { ApplyFormInput } from '../functions/validator';
import {
  phoneNumberReplace,
  studentNumberReplace,
} from '../functions/replacer';
import { useApplyMutate } from './react-query/useApply';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../functions/jwt';
import { RegistrationRequest } from '../apis/dtos/registration.dtos';

type AppFormInputAction =
  | {
      type: keyof ApplyFormInput;
      payload: ApplyFormInput[keyof ApplyFormInput];
    }
  | {
      type: 'reset';
      payload: null;
    };

const applyFormReducer = (
  state: ApplyFormInput,
  action: AppFormInputAction,
): ApplyFormInput => {
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
        ...initValue,
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
    default:
      return state;
  }
};

const initValue = {
  phoneNumber: '',
  studentNumber: '',
  email: '',
  studentName: '',
  affiliation: '',
  section: 0,
  carNumber: '',
  isCompact: false,
};

interface registrationInfo {
  isRegistration: boolean;
  captchaPendingCode?: string;
  captchaAnswer?: string;
}

export const useApplyForm = (init?: ApplyFormInput) => {
  init ||= initValue;
  const [state, dispatch] = useReducer(applyFormReducer, init);
  const { postRegistration } = useApplyMutate();
  const navigate = useNavigate();

  const onSave = ({
    isRegistration,
    captchaPendingCode,
    captchaAnswer,
  }: registrationInfo) => {
    // TODO: affiliation, email 추가
    postRegistration(
      new RegistrationRequest({
        isRegistration: isRegistration,
        name: state.studentName,
        studentNumber: state.studentNumber,
        affiliation: state.affiliation,
        isLightCar: state.isCompact,
        carNumber: state.carNumber,
        phoneNumber: state.phoneNumber,
        selectSectorId: +state.section,
        captchaPendingCode: captchaPendingCode,
        captchaAnswer: captchaAnswer,
        email: state.email,
      }),
      {
        onError: (error) => {
          console.error(error);
          alert(error.message);
          throw new Error(error.message);
        },
        onSuccess: (data) => {
          if (!data) throw new Error('data is undefined');
          dispatch({ type: 'reset', payload: null });
          alert(data.message);
          removeToken();
          navigate('/');
        },
      },
    );
  };

  return { state, dispatch, onSave };
};
